import React from 'react';
import {   Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";

const FormBuy = ({ register, control }) => {
   
    return ( <>
        <label>Que tipo de dispositivo quieres vender</label>
        <select name="dispositivo" ref={register}>
          <option value="pc">pc</option>
          <option value="celular">celular</option>
          <option value="tablet">tablet</option>
          <option value="notebok">notebok</option>
        </select>
        <label>Marca</label>
        <input name="marca" type="text" placeholder="ejemplo: motorola G4" ref={register}/>
        <label>Estado</label>
        <select name="estado" ref={register}>
          <option value="nuevo">nuevo</option>
          <option value="usado2">usado</option>
          <option value="roto">roto con arreglo</option>
          <option value="repuesto">para repuesto</option>
        </select>
        <label>Descripcion del dispositivo</label>
        <textarea name="descripcion" ref={register} placeholder="ejemplo: exelente estado, o pantalla rota ..." />
        <label>Precio estimado de venta (pesos)</label>
        <input type="number" name="precio" placeholder="ejemplo: 1000" ref={register}/>
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
        </> );
}
 
export default FormBuy;