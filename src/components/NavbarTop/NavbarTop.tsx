// import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import LangDropdown from "./components/LangDropdown/LangDropdown.tsx";

const NavbarTop = () => {

	return (
		<Navbar bg="dark" variant="dark" className={"NavbarTop"}>
			<Container>
				<Navbar.Brand href="#home">Navbar</Navbar.Brand>
				<Nav className="align-items-center">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
					<LangDropdown />
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavbarTop;
