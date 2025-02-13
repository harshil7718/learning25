import React from 'react'
import { useForm } from 'react-hook-form'

const LoginForm = () => {

    const{register,handleSubmit,formState:{errors}}=useForm()
     const submitHandler=(data)=>{
      console.log("Form submitted",data)
     }
     const validationSchema={
      emailValidator:{
        required:{
          value:true,
          message:"Email is required"
      }
     },
     passwordValidator:{
      required:{
        value:true,
        message:"Password is required"
    }
  }
}
  return (
    <div style={{textAlign:'center'}}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <h1>Login Page</h1>
      <div>

      <label>Email:</label>
      <input type="text" placeholder='enter name'  {...register('email', validationSchema.emailValidator)}/>
      <span style={{color:'red'}}>{errors.email?.message}</span>
      </div>
      <div>
        <label>PASSWORD</label>
        <input type="password" placeholder='enter password'  {...register('password', validationSchema.passwordValidator)}/>
        <span style={{color:'red'}}>{errors.password?.message}</span>
      </div>
      <div>
        <input type="submit" />
      </div>

      </form>
    </div>
  )
}

export default LoginForm;
