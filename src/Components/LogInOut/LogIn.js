import React, { useState } from 'react';
import { auth } from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from '../SharedPages/Loading/Loading';
import { Link, Navigate, useLocation } from 'react-router-dom';
import Register from './Register';
const LogIn = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError]=useSignInWithGoogle(auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signInWithEmailAndPassword, user, loading, error]=useSignInWithEmailAndPassword(auth);
    const location = useLocation("/");
    const { register, formState: { errors }, handleSubmit } = useForm();

    if (loading || googleLoading) {
      return <Loading/>;
    }
    if(user || googleUser){
      console.log(user);
    return <Navigate to="/appointment" state={{ from: location }} replace />;
    
    }
    const onSubmit=(data)=>{
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }
    return (
      <div className="mx-auto my-auto w-full max-w-xs">
          <h1 className='text-xl text-center font-bold'>Log In</h1>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input {...register("email", { required: true })} type="email" placeholder="Type Email" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                  <span className="label-text-alt text-red-500">{errors.email?.type === "required" &&
                "Your Email is required"}</span>
                </label>
                <label className="label">
                  <span className="label-text">Your Password</span>
                </label>
                <input {...register("password", { 
                    required: true,})} type="password" placeholder="Type Password" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                  <span className="label-text-alt text-red-500">{errors.password && "Your Password is required"}</span>
                </label>
                <input className='btn btn-neutral' value="Log In" type="submit" />
              </div>
            </form>
            <p className='text-neutral text-center'>New to Functional Neurosurgeons? <br /> <Link to="/signIn" className='text-primary' element={<Register/>} >Create Patient Account</Link></p>
          </div>
          <div className="divider text-primary w-full max-w-xs">OR</div>
          <div className="card-body">
            <button onClick={() => signInWithGoogle()} className="btn btn-outline mb-10 w-full max-w-xs">Continue With Google</button>
          </div>
        </div>
      </div>
    );
};

export default LogIn;