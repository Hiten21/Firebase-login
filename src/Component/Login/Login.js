import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { auth } from '../../fiebase/firebase'

function Login() {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password);
        try {
            const result = await auth.signInWithEmailAndPassword(email, password);
            alert('You are Loged In', result.user.message);
            history.push('/')

        } catch (error) {
            alert('check your username Password', error.message);
        }
    }
    return (
        <div>
            <Form className="container " style={{ maxWidth: `270px` }} onSubmit={(e) => { handleSubmit(e) }}>
                <h2> Login to continue</h2>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <input placeholder="Email" type="email" onChange={(e) => { setemail(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <input placeholder="Password" type="password" onChange={(e) => { setpassword(e.target.value) }} />
                </Form.Group>


                <Button type="submit" className="">
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default Login
