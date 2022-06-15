import React from 'react'
import {A, First, Header, Sec} from "./styled"
import {Link} from "react-router-dom"
import styles from "./Navbar.module.css";
import Search from './Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <div>
<Header>
  <First>
<Link className={styles.link} to='/ndtv'>NDTV</Link>
<Link className={styles.link} to="/business">BUSINESS</Link>
<a className={styles.link} href="https://www.ndtv.com/entertainment#pfrom=home-footer">MOVIES</a>
<Link className={styles.link} to="/cricket">CRICKET</Link>
<a className={styles.link} href="https://gadgets360.com/#pfrom=home-ndtv_header-globalnav">TECH</a>
<a className={styles.link} href="https://food.ndtv.com/#pfrom=home-ndtv_header-globalnav">FOOD</a>
<Link className={styles.link} to="/crypto">CRYPTO</Link>
<Link className={styles.link} to="webstories">WEBSTORIES</Link>
<Link className={styles.link} to="/education">EDUCATION</Link>

<a href="https://www.carandbike.com/#pfrom=home-ndtv_header-globalnav" className={styles.link} target="_blank">AUTO</a>

<Link className={styles.link} to="/swasth">SWASTH</Link>
<a href="https://swirlster.ndtv.com/#pfrom=home-ndtv_header-globalnav" className={styles.link} target="_blank">LIFESTYLE</a>

<a href="https://doctor.ndtv.com/#pfrom=home-ndtv_header-globalnav" className={styles.link} target="_blank">HEALTH</a>
<a className={styles.link} href="https://www.ndtv.com/shopping#pfrom=home-ndtv_header-globalnav" target="_blank">SHOPPING</a>
<a href="https://www.mojarto.com/#pfrom=home-footer" className={styles.link} target="_blank">ART</a>
</First>

<Sec>
   <img style={{width:"100%"}} src="https://drop.ndtv.com/homepage/images/ndtvlogo23march.png" alt="" />
   <Link className={styles.link3} to="/live">LIVE TV</Link>
   <Link className={styles.link3} to="/latest">LATEST</Link>
   <Link className={styles.link3} to="/coronavirus">CORONA VIRUS</Link>
   <Link className={styles.link3} to="/india">INDIA</Link>
   <Link className={styles.link3} to="/opinion">OPINION</Link>
   <Link className={styles.link3} to="/world">WORLD</Link>
   <Link className={styles.link3} to="/cities">CITIES</Link>
<A href="https://twitter.com/ndtv" A2 target="_blank"><FontAwesomeIcon icon={faTwitter} /></A>
<A href="https://www.facebook.com/ndtv?campaign_id=237467320636&funnel_id=882d5833-1471-47ce-84f8-23298555ffe6" A2 target="_blank"><FontAwesomeIcon icon={faFacebook} /></A>
<A href="https://www.kooapp.com/profile/ndtv" A2 target="_blank">
  <img style={{width:"20px"}} src="https://www.qcin.org/public/img/Koo_Logo_white.png" alt="" />
</A>


<Search/>
</Sec>

</Header>
  

    </div>
  )
}

export default Navbar