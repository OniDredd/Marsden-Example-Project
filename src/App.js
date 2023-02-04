import styles from './Styles/App.module.scss';
import Navbar from './Components/Nav/Navbar.js';
import Banner from './Components/Banner/Banner.js';
import Footer from './Components/Footer/Footer.js';
import './Styles/Global.scss';
import Content from './Components/Content/Content.js';

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Banner/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
