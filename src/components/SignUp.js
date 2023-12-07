import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { useFormik } from 'formik'
import axios from 'axios'
import {toast} from 'react-toastify'
import { gmailLogo } from '../constants/constant';
import { API_URI } from '../services/api';

function SignUp() {
    let navigate = useNavigate()

    let handleSubmit = async (e) => {
        e.preventDefault()

        let data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

        try {
            let res = await axios.post(`${API_URI}/sign-up`, data)
            if (res.status === 200) {
                navigate('/routes.main.path')
                toast.success(res.data.message)
            }
        } catch (error) {
            toast.error(error.response.data.error || error.response.data.message)
        }
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Required"),
            email: yup.string().matches(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, 'Enter valid email').required("Required"),
            password: yup.string().matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/, 'Minimum 8 characters with one symbol').required("Required"),

        })
    })

    return <>

        <div className='gmail-signup'>
            <img onClick={()=>navigate('/routes.main.path')} src={gmailLogo} alt='' />
            <div className='form-header'>
                <h2>Register</h2>
            </div>
            < div className='form-wrapper'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name='name'
                            placeholder="Enter name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className='error'>{formik.errors.name}</div>
                        ) : null}
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name='email'
                            placeholder="Enter email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className='error'>{formik.errors.email}</div>
                        ) : null}
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name='password'
                            placeholder="Enter password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className='error'>{formik.errors.password}</div>
                        ) : null}
                    </Form.Group>

                    <Button type="submit" style={{ marginLeft: '50px', width: '220px', backgroundColor:'navy', color:'white'}}>
                        Register
                    </Button>
                </Form>

            </div >
        </div>
    </>
}

export default SignUp
