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
  <img style={{width:"140%"}} src="https://drop.ndtv.com/homepage/images/ndtvlogo23march.png" alt="" />

<Search/>
</Sec>

</Header>
  

    </div>
  )
}

export default Navbar