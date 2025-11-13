// logic for big and smaller screen navbar

import Nav from './Nav';
import MobileNav from './MobileNav';

const ResponsiveNavbar = () => {
    return (
        <div>
            <Nav></Nav>
            <MobileNav></MobileNav>
        </div>
    );
};

export default ResponsiveNavbar;