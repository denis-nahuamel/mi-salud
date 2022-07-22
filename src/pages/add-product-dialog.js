/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Select from '@mui/material/Select';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { containerDialog, input } from "../styles/product-style";
const AddProductDialog = (props) => {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };
    const handleProduct = (event) => {
        event.preventDefault();
        console.log(event)
    }

    return (
        <div css={containerDialog}>
            <Dialog onClose={handleClose} open={open} css={containerDialog}>
                <DialogTitle>Agregar Producto</DialogTitle>

                <input placeholder="nombre" css={input}></input>
                <select name="select" css={input}>
                    <option value="Genfar">Genfar</option>
                    <option value="GSK">GSK</option>
                    <option value="Hersil">Hersil</option>
                    <option value="FarmaIndustria">FarmaIndustria</option>
                </select>
                
                <input placeholder="cantidad" css={input}></input>
                <input placeholder="precio" css={input}></input>
                <button type="submit">Enviar</button>

            </Dialog>
        </div>
    );
}
export default AddProductDialog;