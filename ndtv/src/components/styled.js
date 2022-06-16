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

width:90%;
margin:auto;
padding:5px;

`


//home
export const Data=styled.div`

width:25%;
padding:30px;
margin-bottom:20px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;


${props=>props.D1 &&css`
display:grid;
grid-template-columns:repeat(3,1fr);

margin-bottom:20px;
width:80%;
margin:auto;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
gap:20px;
`}

`
export const Box= styled.div`

${props=>props.B1 && css`
display:flex;
margin-bottom:20px;

`}

`

export const Img=styled.img`
width:100%;

${props=>props.I1 &&css`
width:30%;

border-radius:6px;
`}
`
//opinion

export const Op= styled.div`
display:grid;
grid-template-columns:repeat(4,1fr);
width:80%;
margin:auto;
gap:20px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`

export const Op1= styled.div`

box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
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

export const H2=styled.h2`
background-color:black;

color:white;
width:10%;
`
