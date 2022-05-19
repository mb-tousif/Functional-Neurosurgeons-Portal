import React from 'react';
import { auth } from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../SharedPages/Loading/Loading';
import { Link, Navigate, useLocation } from 'react-router-dom';
import LogIn from './LogIn';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle,useUpdateProfile } from 'react-firebase-hooks/auth';
const Register = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError]=useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error] =
      useCreateUserWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const location = useLocation("/");
    if (loading || googleLoading || updating) {
      return <Loading />;
    }
    if(user || googleUser){
    return <Navigate to="/appointment" state={{ from: location }} replace />;
    }

    const onSubmit= async data =>{
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password, data.name);
        await updateProfile({ displayName:data.name });
        console.log('Update done');
    }
    return (
        <div className="mx-auto my-auto w-full max-w-xs">
          <h1 className='text-xl text-center font-bold'>Sign Up</h1>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Your Name</span>
                </label>
                <input {...register("name", { required: true,})} type="text" placeholder= "Type Name" className="input input-bordered w-full max-w-xs" />
                <label className="label"><span className="label-text-alt text-red-500">{errors?.name && "Your Name is required"}</span></label>
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
                <input className='btn btn-neutral' type="submit" value="Sign Up" />
              </div>
            </form>
            <p className='text-neutral text-center'>If you have account? <br /> <Link to="/logIn" className='text-primary' element={<LogIn/>} >Please Log In</Link></p>
          </div>
          <div className="divider text-primary w-full max-w-xs">OR</div>
          <div className="card-body">
            <button onClick={() => signInWithGoogle()} className="btn btn-outline mb-10 w-full max-w-xs">Continue With Google</button>
          </div>
        </div>
      </div>
    );
};

export default Register;