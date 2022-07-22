/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Select from '@mui/material/Select';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { button, containerDialog, formDisplay, input } from "../styles/product-style";
import InputComponent from "../components/input-component";
const AddProductDialog = (props) => {
    const { onClose, selectedValue, open } = props;

    const handleClose = (value) => {
        onClose(value);
    };

    const handleProduct = (event) => {
        event.preventDefault();
        const data = event.target.elements;
        console.log(data);
        const send ={
            name: event.target.elements.nombre.value,
            quantity: event.target.elements.cantidad.value,
            laboratory: event.target.elements.laboratorio.value,
            price: event.target.elements.precio.value,
        }
        onClose(send);
        //handleClose(event.target.elements);
    }

    return (
        <div css={containerDialog}>

            <Dialog onClose={handleClose} open={open} css={containerDialog}>
                <DialogTitle>Agregar Producto</DialogTitle>
                <form onSubmit={handleProduct} css={formDisplay}>
                    <InputComponent placeholder={"nombre"} id={"nombre"} />
                    <select  name="laboratorio" id="laboratorio" css={input}>
                        <option value="Genfar">Genfar</option>
                        <option value="GSK">GSK</option>
                        <option value="Hersil">Hersil</option>
                        <option value="FarmaIndustria">FarmaIndustria</option>
                    </select>

                    <InputComponent placeholder={"cantidad"} id={"cantidad"} type={"number"} />
                    <InputComponent placeholder={"precio"} id={"precio"} />
                    <Button variant="outlined" css={button} type="submit">Enviar</Button>

                </form>
            </Dialog>
        </div>
    );
}
export default AddProductDialog;