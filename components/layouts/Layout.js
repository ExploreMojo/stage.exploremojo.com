import Head from 'next/head'
import {NavBar, Footer} from '@trendspurt/trendspurt-theme';
import {Container, Nav, NavDropdown} from 'react-bootstrap';

export default function Layout(props) {

  const navItems = [
    // <Nav.Link href="/" key="1">Explore</Nav.Link>,
    <Nav.Link href="/learn" key="2">Learn</Nav.Link>,
    // <Nav.Link href="#WIP" key="3">Mojo Pro</Nav.Link>,
    // <Nav.Link href="#WIP" key="4">Market</Nav.Link>,
    <Nav.Link href="/templates" key="5">Templates</Nav.Link>,
    // <NavDropdown title="More" id="basic-nav-dropdown" key="6">
    //   {[
    //   <NavDropdown.Item href="#action/3.1" key="991">Action</NavDropdown.Item>,
    //   <NavDropdown.Item href="#action/3.2" key="992">Another action</NavDropdown.Item>,
    //   <NavDropdown.Item href="#action/3.3" key="993">Something</NavDropdown.Item>,
    //   <NavDropdown.Divider key="994" />,
    //   <NavDropdown.Item href="#action/3.4" key="994">Separated link</NavDropdown.Item>,
    //   ]}
    // </NavDropdown>
  ];

  return (
    <main>
      <Head>
        <title>Explore Mojo (for Adobe XD)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar brand={{image: "/ui/images/brand_mojo.svg"}}
              items={navItems}></NavBar>

      <main className={props.className}>
        {props.children}
      </main>

      <Footer>
        &copy; 2020 Trendspurt GmbH
      </Footer>
    </main>
  )
}
