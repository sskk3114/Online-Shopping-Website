import React, {useState} from "react";
import { useForm } from 'react-hook-form';
import {subject} from '../services/subject';
import axios from '../axios';
import {useHistory} from 'react-router-dom'


function RegisterScreen() {
    const {register, handleSubmit, formState: {errors} } = useForm();
    const [value, setValue] = useState();
    const history = useHistory();
    const registerUser = (data) => {
        const reqbody = data;
        axios.post(`v1/users/register`,reqbody).then((response) => {
            if (response.data && response.data.data) {
                localStorage.setItem('dl-session-token',response.data.data.token);
                localStorage.setItem('dl-userId',response.data.data.userId);
                subject.next('User Logged In'); 
                history.push('/');
            }

        }).catch((error) => {
            const {data} = error.response;
            alert(data.errorDescription)
        });
    }

    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-sm-6 my-4">
                    <h2 className="py-4">Register</h2>
                    <form onSubmit={handleSubmit(registerUser)}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">First Name: </label>
                            <input type="text" className="form-control" id="Firstname" {...register('firstName', {required: true})} aria-describedby="emailHelp" placeholder="Enter Firstname" />
                            {errors.firstName && errors.firstName.type === 'required' && <small id="emailHelp" className="form-text text-danger">Firstname is required</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Last Name: </label>
                            <input type="text" className="form-control" id="Lastname" {...register('lastName', {required: true})} aria-describedby="emailHelp" placeholder="Enter Lastname" />
                            {errors.lastName && errors.lastName.type === 'required' && <small id="emailHelp" className="form-text text-danger">Lastname is required</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="email" {...register('email', {required: true, pattern: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i})} aria-describedby="emailHelp" placeholder="Enter email" />
                            {errors.email && errors.email.type === 'required' && <small id="emailHelp" className="form-text text-danger">Email is required</small>}
                            {errors.email && errors.email.type === 'pattern' && <small id="emailHelp" className="form-text text-danger">In correct email format</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Mobile No: </label>
                            <input type="mobile" className="form-control" id="mobile" {...register('mobile', {required: true})} aria-describedby="emailHelp" placeholder="Enter Mobile" />
                            {errors.mobile && errors.mobile.type === 'required' && <small id="emailHelp" className="form-text text-danger">Mobile is required</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" {...register('password', {required: true, minLength: 8, maxLength: 12})} placeholder="Password" />
                            {errors.password && errors.password.type === 'required' && <small id="emailHelp" className="form-text text-danger">Password is required</small>}
                            {errors.password && errors.password.type === 'minLength' && <small id="emailHelp" className="form-text text-danger">Minimum 8 Characters</small>}
                            {errors.password && errors.password.type === 'maxLength' && <small id="emailHelp" className="form-text text-danger">Maximum 12 Characters</small>}
                        </div>  
                                    
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterScreen;