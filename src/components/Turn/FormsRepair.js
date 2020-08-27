import React from "react";
import {   Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";

const FormsRepair = ({register,control}) => {
   
  return (
    <>
      <label>Tipo de dispositivo a reparar</label>
      <select name="dispositivo" ref={register} >
        <option value="pc">pc</option>
        <option value="celular">celular</option>
        <option value="tablet">tablet</option>
        <option value="notebook">notebook</option>
      </select>
      <label>Descripción del Problema</label>
      <textarea name="descripcion" ref={register} />
      <label>Elegir fecha</label>
      <section >
        <Controller
          as={ReactDatePicker}
          control={control}
          valueName="selected"
          onChange={([selected]) => selected}
          name="fecha"
          placeholderText="Selecciona fecha"
          className="date"
          minDate={new Date()}
        />
      </section>
      <label>selecciona una hora</label>
      <select name="hora" ref={register}>
        <option value="12:00">12:00</option>
        <option value="13:00">13:00</option>
        <option value="14:00">14:00</option>
        <option value="15:00">15:00</option>
      </select>
    </>
  );
};

export default FormsRepair;
