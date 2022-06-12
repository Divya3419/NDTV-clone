import styled, {css} from "styled-components";
//navbar
export const Header = styled.div`

color:white;
background-color:#404040;
height:100px;

border:2px solid white;

`
export const First= styled.div`
display:grid;
grid-template-columns:repeat(15,1fr);

width:80%;
margin:auto;
padding:8px;
margin-bottom:10px;

`
export const Sec= styled.div`
display:grid;
grid-template-columns:repeat(15,1fr);

width:90%;
margin:auto;
padding:5px;

`


//home
export const Box= styled.div`
border:2px solid black;

// grid-template-columns:repeat(4,1fr);

`
export const Img=styled.img`
width:50%
`