import Navigaatio from './Navigaatio';

const Layout = (props) => (
    <div>
        <Navigaatio/>
        {props.children}
    </div>
)

export default Layout;