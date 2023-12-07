import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { gmailLogo } from '../constants/constant';
import { API_URI } from '../services/api';
import { toast } from 'react-toastify'

function SignIn() {
    let navigate = useNavigate()

    let handleSubmit = async (e) => {
        e.preventDefault()

        let data = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        try {
            let res = await axios.post(`${API_URI}/sign-in`, data)
            if (res.status === 200) {

                navigate('/routes.main.path')
                toast.success(res.data.message)
            }
        } catch (error) {
            toast.error(error.response.data.error || error.response.data.message)
        }
    }

    return <>
        <div className='gmail-signin'>
            <img onClick={() => navigate('/routes.main.path')} src={gmailLogo} alt='' />
            <div className='form-header'>
                <h2>Login</h2>
            </div>
            < div className='form-wrapper'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name='email'
                            placeholder="Enter email"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            name='password'
                            placeholder="Enter password"
                        />
                    </Form.Group>

                    <Button type="submit" style={{ marginLeft: '50px', width: '220px', backgroundColor: 'navy', color: 'white' }}>
                        Login
                    </Button>
                </Form>

            </div >
        </div>
    </>
}

export default SignIn
