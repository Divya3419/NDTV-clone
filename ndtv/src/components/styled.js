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
grid-template-columns:repeat(10,1fr);
border:2px solid white;
width:90%;
margin:auto;
padding:5px;

`


//home
export const Data=styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);

gap:40px;

`
export const Box= styled.div`

`

export const Img=styled.img`
width:50%
`

//footer
export const Down=styled.div`
display:grid;
grid-template-columns:20% 80%;

background-color: #e6e6e6;


`
export const Line1= styled.div`
display:grid;

grid-template-columns:repeat(11,1fr);
border-bottom:1px solid grey;
`
export const Line2= styled.div`
display:grid;
grid-template-columns:repeat(11,1fr);
border-bottom:1px solid grey;

`
export const Line3= styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);
border-bottom:1px solid grey;

`
