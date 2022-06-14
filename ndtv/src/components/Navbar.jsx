import React from 'react'
import {First, Header, Sec} from "./styled"
import {Link} from "react-router-dom"
import styles from "./Navbar.module.css";
import Search from './Search';

const Navbar = () => {
  return (
    <div>
<Header>
  <First>
<Link className={styles.link} to='/ndtv'>NDTV</Link>
<Link className={styles.link} to="/business">BUSINESS</Link>
<Link className={styles.link} to="/movies">MOVIES</Link>
<Link className={styles.link} to="/cricket">CRICKET</Link>
<Link className={styles.link} to="/tech">TECH</Link>
<Link className={styles.link} to="/food">FOOD</Link>
<Link className={styles.link} to="/crypto">CRYPTO</Link>
<Link className={styles.link} to="webstories">WEBSTORIES</Link>
<Link className={styles.link} to="/education">EDUCATION</Link>

<Link className={styles.link} to="/auto">AUTO</Link>

<Link className={styles.link} to="/swasth">SWASTH</Link>
<Link className={styles.link} to="/lifestyle">LIFESTYLE</Link>

<Link className={styles.link} to="/health">HEALTH</Link>
<Link className={styles.link} to="/shopping">SHOPPING</Link>
<Link className={styles.link} to="/art">ART</Link>
</First>

<Sec>
  <img style={{width:"100%"}} src="https://drop.ndtv.com/homepage/images/ndtvlogo23march.png" alt="" />
<a href="https://twitter.com/ndtv" target="_blank">tw</a>
<a href="https://www.kooapp.com/profile/ndtv" target="_blank">k00</a>
<a href="https://www.facebook.com/ndtv?campaign_id=237467320636&funnel_id=882d5833-1471-47ce-84f8-23298555ffe6" target="_blank">face</a>

<Search/>
</Sec>

</Header>
  

    </div>
  )
}

export default Navbar