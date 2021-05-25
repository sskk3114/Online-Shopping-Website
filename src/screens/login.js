import {subject} from '../services/subject';
import { useForm } from 'react-hook-form';
import axios from '../axios';


function LoginScreen(props) {
    
    const {register, handleSubmit, formState: {errors} } = useForm();

    const loginUser = (data) => {
        const reqbody = data;
        axios.post(`v1/users/login`,reqbody).then((response) => {
            if (response.data && response.data.data) {
                subject.next('User Logged In');
                props.history.push('/');
            }

        }).catch((error) => {
            const {data} = error.response;
            alert(data.errorDescription)
        });
       
    };
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-sm-6 my-4">
                    <h2 className="py-4">Login</h2>
                    <form onSubmit={handleSubmit(loginUser)}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email Id</label>
                            <input type="email" className="form-control" id="email" {...register('email', {required: true, pattern: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i})} aria-describedby="emailHelp" placeholder="Enter email" />
                            {errors.email && errors.email.type === 'required' && <small id="emailHelp" className="form-text text-danger">Email is required</small>}
                            {errors.email && errors.email.type === 'pattern' && <small id="emailHelp" className="form-text text-danger">In correct email format</small>}
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" {...register('password', {required: true, minLength: 8, maxLength: 12})} placeholder="Password" />
                            {errors.password && errors.password.type === 'required' && <small id="emailHelp" className="form-text text-danger">Password is required</small>}
                            {errors.password && errors.password.type === 'minLength' && <small id="emailHelp" className="form-text text-danger">Minimum 8 Characters</small>}
                            {errors.password && errors.password.type === 'maxLength' && <small id="emailHelp" className="form-text text-danger">Maximum 12 Characters</small>}
                        </div>  
                                     
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen;