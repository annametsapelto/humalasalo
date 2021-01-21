import Navigaatio from './Navigaatio';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => (
    <div>
        <Header/>
        <Navigaatio/>
        {props.children}
        <Footer/>
    </div>
)

export default Layout;