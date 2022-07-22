/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Select from '@mui/material/Select';
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

    return (
        <div css={containerDialog}>
            <Dialog onClose={handleClose} open={open} css={containerDialog}>
                <DialogTitle>Agregar Producto</DialogTitle>
                <input placeholder="nombre" css={input}></input>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    label="Laboratorio"
                >
                    <MenuItem value={"Genfar"}>Genfar</MenuItem>
                    <MenuItem value={"GSK"}>GSK</MenuItem>
                    <MenuItem value={"Hersil"}>Hersil</MenuItem>
                    <MenuItem value={"FarmaIndustria"}>FarmaIndustria”.</MenuItem>
                </Select>
                <input placeholder="cantidad" css={input}></input>
                <input placeholder="precio" css={input}></input>
            </Dialog>
        </div>
    );
}
export default AddProductDialog;