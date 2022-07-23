/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
export const contCenterCenter = css`
    display:flex;
    align-items:center;
    justify-content:center;
`
export const productContainer = css`
    ${contCenterCenter};
    margin:0 20px 0 20px;
`
export const mainContainer = css`
position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
`
export const containerDialog = css`
    padding:10px;
`
export const input = css`
    margin: 10px;
    border-radius: 4px;
    border: 1px solid gray;
    height: 40px;
`
export const button = css`
margin: 10px;
`

export const formDisplay = css`
display: flex;
flex-direction: column;
`
export const errorMessageLabel = css`
    font-size:10px;
    color: red;
`
export const addButtonContainer = css`
    display:flex;
    width:100%;
    justify-content: flex-start;
    margin:20px 0 0 20px;
`