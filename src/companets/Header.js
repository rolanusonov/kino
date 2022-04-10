import React, {useState} from 'react';
import {Navbar, Nav, Form, FormControl, Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"

const Header = () => {
    const [ searchInput, setSearchInput]= useState("")
    const navigate = useNavigate()
    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }
    const handleSearch =() => {
        if (searchInput.trim ()){
            navigate(`/search-results/${searchInput}`)
        }
    }
    const keySearch =(e) =>{
        if(e.key === "Enter"){
            handleSearch()
        }
    }
    return (
        <Navbar bg="light" expand="xl" className="menu">
            <Container>
                <Navbar.Brand href="#">KINO DB./</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}

                    >
                        <Link to="/">Popular</Link>
                        <Link to="/toprated">TopRated</Link>
                        <Link to="/latest">Latest</Link>
                        <Link to="/upcoming">UpComing</Link>
                        <Link to="/nowplaying">NowPLaying</Link>


                        {/*<Nav.Link href="#action2">Link</Nav.Link>*/}
                        {/*<Nav.Link href="#" disabled>*/}
                        {/*    Link*/}
                        {/*</Nav.Link>*/}
                    </nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) =>  handleChange(e)}
                            onKeyDown={(e) => keySearch(e)}


                        />
                        <Button variant="outline-success"    onClick ={handleSearch}

                        >Search</Button>


                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;