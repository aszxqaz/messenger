import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
    }
    body {
        width: 100%;
        height: 100%;
    }
`