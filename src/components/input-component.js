/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { input } from "../styles/product-style";
const InputComponent = ({id,placeholder, type}) => {
    return(
        <input css={input} id={id} name={id} placeholder={placeholder} type={type?type:"text"} />
    )
}
export default InputComponent