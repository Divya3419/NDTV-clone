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
grid-template-columns:repeat(16,1fr);
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

export const Cover= styled.div`

background-color:#e6e6e6;
margin-top:20px;
border:2px solid grey;

`
export const Down=styled.div`
width:90%;
margin:auto;
margin-top:20px;
display:grid;
grid-template-columns:20% 76%;


`
export const Dfirst= styled.div`

`
export const Dsec= styled.div`

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

`
export const A= styled.a`
color:black;
font-size:20px;
margin-right:10px;

${props=>props.A1 && css`
text-decoration:none;
font-size:12px;
margin-top:10px;
`}
// navbar
${props=>props.A2 && css`
text-decoration:none;
font-size:20px;
color:white;
`}
`
