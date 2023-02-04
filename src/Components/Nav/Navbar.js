import styles from '../../Styles/Navbar.module.scss';
import logo from '../../Assets/MarsdenV2_LogoRed.svg';

export default function Navbar() {

    return(
    <div className={styles.nav_container}>
        <nav className={styles.main_nav}>
            <img className={styles.navlogo} src={logo} alt='' />

            <div className={styles.navigation}>
                <a className={styles.navlink} href="#home">ABOUT</a>
                <a className={styles.navlink} href="#home">WORK</a>
                <a className={styles.navlink} href="#home">PACKAGES</a>
                <button className={styles.mainbutton}type="button">CONTACT</button>
            </div>
        </nav>

        <nav className={styles.mobile_nav}>
            <img className={styles.navlogo} src={logo} alt='' />

            <button className={styles.mainbutton}type="button">MENU</button>
        </nav>
    </div>
    );
}