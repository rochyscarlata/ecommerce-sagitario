import React, { useState } from "react";
import {
  Container,
  Button,
  Form,
  Row,
  Col,
  FormControl,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import Fab from "@material-ui/core/Fab";
import axiosInstance from "../util/axiosInstance";
import Swal from "sweetalert2";
import swal from "sweetalert";


const FormRegister = () => {
  const { register, errors, handleSubmit } = useForm();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState(false);

  const pass = (e) => {
    setPassword(e.target.value);
  };

  const verificarPass = (e) => {
    if (password != e.target.value) {
      setMessage(true);
    } else {
      setMessage(false);
    }
  };

  const onSubmit = async (data, e) => {

    const { username, email, password, passwordConfirm } = data;

    if (password === passwordConfirm) {
      const newUser = {
        username,
        email,
        password,
        role:'user'
      };
      try {
        const response = await axiosInstance.post("/register", newUser);
        console.log(response);
        if (response) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
          });
          swal({
            icon: "success",
            title: "Registro exitoso !!",
            
          });
        }
      } catch (error) {
        console.log(error.response.data.error)
        swal({
          icon: 'error',
          title: error.response.data.error,
          
          
        }
        )
      }

      e.target.reset();
    }
  };

  return (
    <Container className="container_reg">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="container_titulo_reg">Registro</h3>
        <Form.Group as={Row}>
          <Col>
            <FormControl
              placeholder="Nombre"
              className="form-control"
              autoComplete="off"
              name="username"
              ref={register({
                required: {
                  value: true,
                  message: "Nombre es requerido. ",
                },
                maxLength: {
                  value: 50,
                  message: "No más de 50 carácteres!",
                },
                minLength: {
                  value: 2,
                  message: "Mínimo 2 carácteres",
                },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.username && errors.username.message}
            </span>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Col>
            <FormControl
              placeholder="Email"
              label="Email"
              autoComplete="off"
              className="form-control"
              type="email"
              name="email"
              ref={register({
                required: {
                  value: true,
                  message: "Email es requerido. ",
                },
                maxLength: {
                  value: 40,
                  message: "No más de 40 carácteres!",
                },
                minLength: {
                  value: 5,
                  message: "Mínimo 5 carácteres",
                },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.email && errors.email.message}
            </span>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Col>
            <FormControl
              placeholder="Contraseña"
              label="Contraseña"
              type="password"
              className="form-control"
              name="password"
              onChange={pass}
              ref={register({
                required: {
                  value: true,
                  message: "Contraseña es requerido. ",
                },
                maxLength: {
                  value: 20,
                  message: "No más de 20 carácteres!",
                },
                minLength: {
                  value: 5,
                  message: " Contraseña con mínimo 5 carácteres. ",
                },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.password && errors.password.message}
            </span>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Col>
            <FormControl
              placeholder="Confirmar Contraseña"
              label="ContraseñaConfirm"
              type="password"
              className="form-control"
              name="passwordConfirm"
              onChange={verificarPass}
              ref={register({
                required: {
                  value: true,
                  message: "Contraseña es requerido. ",
                },
                maxLength: {
                  value: 20,
                  message: "No más de 20 carácteres!",
                },
                minLength: {
                  value: 5,
                  message: " Contraseña con mínimo 5 carácteres. ",
                },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.passwordConfirm && errors.passwordConfirm.message}
            </span>
            {message ? (
              <span className="text-danger text-small d-block mb-2">
                Las contraseñas no son iguales
              </span>
            ) : null}
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col className="btn-redes">
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id={`tooltip-$'bottom'`}>Ingresar con</Tooltip>}
            >
              <Fab color="primary" size="small" aria-label="add">
                <FaFacebookSquare />
              </Fab>
            </OverlayTrigger>{" "}
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id={`tooltip-$'bottom'`}>Ingresar con</Tooltip>}
            >
              <Fab color="secondary" size="small" aria-label="edit">
                <FaGoogle />
              </Fab>
            </OverlayTrigger>{" "}
          </Col>
        </Form.Group>
        <Form.Group>
          <Col>
            <Button
              type="submit"
              className="btn-lg  btn-dark btn-block btn-env"
            >
              Enviar
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default FormRegister;
