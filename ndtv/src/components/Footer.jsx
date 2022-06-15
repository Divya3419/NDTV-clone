import React from 'react'
import { Link } from 'react-router-dom'
import { A, Cover, Dfirst, Down, Dsec, Line1, Line2 ,Line3} from './styled'
import Search from "./Search"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons"

import styles from "./Navbar.module.css";


const Footer = () => {
  return (
  <Cover>   
    <Down>
        <Dfirst>
       <a href="https://www.ndtv.com/" target="_blank"><img style={{width:"50%"}} src="https://drop.ndtv.com/homepage/images/ndtvlogo23march.png" alt="" /></a> 
        <p>FOLLOW US ON</p>
        <A href="https://www.fAcebook.com/ndtv#pfrom=home-footer2017" target="_blank"><FontAwesomeIcon icon={faFacebook} /></A>
        <A href="hAtps://twitter.com/ndtv#pfrom=home-footer2017" target="_blank"><FontAwesomeIcon icon={faTwitter} /></A>
        <A href="https://www.instagram.com/ndtv/?hl=en" target="_blank"><FontAwesomeIcon icon={faInstagram} /></A>
        <A href="https://www.linkedin.com/company/ndtv/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></A>
        
        {/* <Search/> */}
        </Dfirst>

        <Dsec>
          <Line1>
            <A href="https://www.ndtv.com/convergence/ndtv/corporatepage/index.aspx#pfrom=home-ndtv_footer" target="_blank" A1>ABOUT US</A>
            <A href="https://www.ndtv.com/convergence/ndtv/Advertise/ndtv_leAderboArd.aspx#pfrom=home-ndtv_footer" target="_blank" A1>ADVERTISE</A>
            <A href="https://www.ndtv.com/sites/ureqa-epg-ott/#pfrom=home-ndtv_footer" target="_blank" A1>EPG SERVICES</A>
            <A href="https://www.ndtv.com/jobs/ndtv-is-hiring-see-openings-here-2521086#pfrom=home-ndtv_footer" target="_blank" A1>CAREERS</A>
            <A href="https://www.ndtv.com/convergence/ndtv/new/dth-rio.aspx#pfrom=home-ndtv_footer" target="_blank" A1>CHANNELS</A>
            <A href="https://www.ndtv.com/convergence/ndtv/new/disclaimer.aspx#pfrom=home-ndtv_footer" target="_blank" A1>DISCLAIMER</A>
            <A href="https://www.ndtv.com/convergence/ndtv/new/feedback.aspx#pfrom=home-ndtv_footer" target="_blank" A1>FEEDBACK</A>
            <A href="https://www.ndtv.com/convergence/ndtv/corporatepage/investors.aspx#pfrom=home-ndtv_footer" target="_blank" A1>INVESTORS</A>
            <A href="https://www.ndtv.com/convergence/ndtv/new/complaintform.aspx#pfrom=home-ndtv_footer" target="_blank" A1>REDRESSALS</A>
            <A href="https://www.ndtv.com/convergence/ndtv/new/termsofusage.aspx#pfrom=home-ndtv_footer" target="_blank" A1>SERVICE TERMS</A>
            <A href="https://archives.ndtv.com/#pfrom=home-ndtv_footer" target="_blank" A1>ARCHIVES</A>
            
            </Line1>

 <Line2>
<p style={{fontSize:"12px",color:"white",backgroundColor:"black",borderRadius:"6px"}}>NDTV GROUP SITES</p>
<p style={{fontSize:"12px"}}>NEWS</p>
<Link  className={styles.link2} to="/business">BUSINESS</Link>
<p style={{fontSize:"12px"}} >HINDI</p>
<A href="https://www.ndtv.com/entertainment#pfrom=home-footer" A1 target="_blank">MOVIES</A>
<Link  className={styles.link2} to="/cricket">CRICKET</Link>
<A href="https://food.ndtv.com/#pfrom=home-footer" A1 target="_blank">FOOD</A>
<A href="https://gadgets360.com/#pfrom=home-footer" A1 target="_blank">TECH</A>
<A href="https://www.carandbike.com/#pfrom=home-ndtv_header-globalnav" target="_blank" A1>AUTO</A>
<A href="https://www.ndtv.com/indian-railway/#pfrom=home-footer" target="_blank" A1>TRAINS</A>
<A href="https://www.mojarto.com/#pfrom=home-footer" target="_blank" A1>ART & DESIGN</A>
</Line2>
          <Line3>
            <A href="https://www.ndtv.com/convergence/ndtv/new/codeofethics.aspx" target="_blank" A1>THIS WEBSITE FOLLOWS THE DNPA CODE OF ETHICS</A>
            <p style={{fontSize:"12px"}}>© COPYRIGHT NDTV CONVERGENCE LIMITED 2022. ALL RIGHTS RESERVED.</p>
          </Line3>
            
        </Dsec>
    </Down>
    </Cover>
 
  )
}

export default Footer