'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function SingInForm() {
    const router = useRouter()
    const [error, setError] = useState< boolean | undefined>(true);

    const hadlerSubmit:  React.FormEventHandler<HTMLFormElement> | undefined = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)
        const res =  await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false,
        })

        if(res && !res.error){
            router.push('/profile')
            setError(true)
        }
        else{
            console.log(res);
            setError(res?.ok)
        }
    }
  return (
        <form onSubmit={hadlerSubmit}>
            {!error ? <div>Email or password is not valid</div> :  null}
            <input type="email" name='email' required placeholder='Email'/>
            <input type="password" name='password'required placeholder='Password'/>
            <button type='submit'>Sing In</button>
        </form>
  )
}
