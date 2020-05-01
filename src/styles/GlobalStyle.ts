import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        src: local('Roboto'),
            url('./Roboto/Roboto-Regular.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-style: bold;
        font-weight: 700;
        src: local('Roboto'),
            url('./Roboto/Roboto-Bold.ttf') format('truetype');
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto';
    }

`;