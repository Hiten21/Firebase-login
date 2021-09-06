import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { auth } from '../../fiebase/firebase'
import { useHistory } from 'react-router-dom'
function NavCom({ user }) {

    const history = useHistory();
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/">Navbar</Navbar.Brand>
                    <Nav className="me-auto "   >
                        {

                            user ?

                                <Button onClick={() => {
                                    auth.signOut()
                                    history.push('/login')
                                }}>Logout</Button>
                                :
                                <>
                                    <li >
                                        <Link to="/login">Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/signup">Signup

                                        </Link>
                                    </li>
                                    {/* <Nav.Link ></Nav.Link>
                        <Nav.Link to="/signup">Signup</Nav.Link> */}
                                </>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavCom
