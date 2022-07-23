/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import Button from '@mui/material/Button';
import { button, containerDialog, contCenterCenter, errorMessageLabel, formDisplay, input } from "../styles/product-style";
import InputComponent from "../components/input-component";
import { addProduct } from "../services/product-service";
import { useState } from "react";
const AddProductDialog = (props) => {
    const { onClose, selectedValue, open } = props;
    const [errorMessage, setErrorMessage] = useState(null);
    const handleClose = (value) => {
        setErrorMessage(null);
        onClose(value);

    };

    const handleProduct = (event) => {
        event.preventDefault();
        const data = event.target.elements;
        console.log(data);
        const send = {
            name: event.target.elements.nombre.value,
            quantity: event.target.elements.cantidad.value,
            laboratory: event.target.elements.laboratorio.value,
            price: event.target.elements.precio.value,
        }
        addProduct(send).then(response => {
            if (response === 422) setErrorMessage("Ya existe un producto con ese nombre.")
            else onClose(send);
        })
        setErrorMessage(null);
    }

    return (
        <div css={containerDialog}>

            <Dialog onClose={handleClose} open={open} css={containerDialog}>
                <DialogTitle>Agregar Producto</DialogTitle>
                <form onSubmit={handleProduct} css={formDisplay}>
                    <InputComponent placeholder={"nombre"} id={"nombre"} />
                    <select name="laboratorio" id="laboratorio" css={input}>
                        <option value="Genfar">Genfar</option>
                        <option value="GSK">GSK</option>
                        <option value="Hersil">Hersil</option>
                        <option value="FarmaIndustria">FarmaIndustria</option>
                    </select>

                    <InputComponent placeholder={"cantidad"} id={"cantidad"} type={"number"} />
                    <InputComponent placeholder={"precio"} id={"precio"} />
                    <div css={contCenterCenter}>
                        {errorMessage ? <p css={errorMessageLabel}>{errorMessage}</p> : null}
                    </div>
                    <Button variant="outlined" css={button} type="submit">Enviar</Button>
                </form>
            </Dialog>
        </div>
    );
}
export default AddProductDialog;