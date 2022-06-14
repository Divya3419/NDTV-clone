import React from 'react'
import { Down, Line1, Line2 ,Line3} from './styled'

const Footer = () => {
  return (
    <Down>
        <div>
        <img style={{width:"50%"}} src="https://drop.ndtv.com/homepage/images/ndtvlogo23march.png" alt="" />
        <p>FOLLOW US ON</p>
        </div>

        <div>
          <Line1>
            <a href="https://www.ndtv.com/convergence/ndtv/corporatepage/index.aspx#pfrom=home-ndtv_footer">ABOUT US</a>
            <a href="https://www.ndtv.com/convergence/ndtv/advertise/ndtv_leaderboard.aspx#pfrom=home-ndtv_footer">ADVERTISE</a>
            <a href="https://www.ndtv.com/sites/ureqa-epg-ott/#pfrom=home-ndtv_footer">EPG SERVICES</a>
            <a href="https://www.ndtv.com/jobs/ndtv-is-hiring-see-openings-here-2521086#pfrom=home-ndtv_footer">CAREERS</a>
            <a href="https://www.ndtv.com/convergence/ndtv/new/dth-rio.aspx#pfrom=home-ndtv_footer">CHANNELS</a>
            <p>DISCLAIMER</p>
            <p>FEEDBACK</p>
            <p>INVESTORS</p>
            <p>REDRESSALS</p>
            <p>SERVICE TERMS</p>
            <p>ARCHIVES</p>
            
            </Line1>
 <Line2>
<p>NDTV GROUP SITES</p>
<p>NEWS</p>
<p>BUSSINESS</p>
<p>HINDI</p>
<p>MOVIES</p>
<p>CRICKET</p>
<p>FOOD</p>
<p>TECH</p>
<p>AUTO</p>
<p>TRAINS</p>
<p>ART & DESIGN</p>
</Line2>
          <Line3>
            <a href="https://www.ndtv.com/convergence/ndtv/new/codeofethics.aspx">THIS WEBSITE FOLLOWS THE DNPA CODE OF ETHICS</a>
            <p>© COPYRIGHT NDTV CONVERGENCE LIMITED 2022. ALL RIGHTS RESERVED.</p>
          </Line3>
            
        </div>
    </Down>
  )
}

export default Footer