import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, Tahoma, 'sans-serif';
    } 
`;

//* FONT SIZES

export const fontSmall = '.6rem';
export const fontNormal = '1rem';
export const fontMedium = '1.3rem';
export const fontLarge = '1.5rem';
export const fontExLarge = '2rem';

//* COLORS
export const gradient = 'linear-gradient(102deg, #b847fd 0%, #4a5fa0)';
export const gradientFeed =
    'linear-gradient(132.96deg, #C468FF 100%, #6E91F6 100%)';
export const perano = '#BBB8EA';
export const slateBlue = '#6F6ECE';
export const dimBlack = 'rgba(0,0,0,.5)';
