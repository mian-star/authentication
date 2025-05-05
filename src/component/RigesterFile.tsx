'use client'
import Link from 'next/link';
import Head from 'next/head';
import styles from '../component/login.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {

  const[name,setName] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[error,setError] = useState('')

  const router = useRouter();

  const callData = async(e)=>{
    e.preventDefault();
    
    if(!name || !email || !password){
      setError('All inputs fields are neccessary..')
      return;
    }
    else{
      setError('')
    }
    
    try {
      const userExist = await fetch('http://localhost:3000/api/userexist',{
        method : "POST",
        body :JSON.stringify({email})
      })
      const {user} = await userExist.json()
      if(user){
        setError('User already exists.')
        return;
      }

      const request = await fetch('http://localhost:3000/api/rigester',{
        method : 'POST',
        body : JSON.stringify({name,email,password})
      })

      const response = await request.json()
      // console.log(response);
      if(response.success){
        const form = e.target;
        form.reset();
        router.push("/");
      }
      
    } catch (error) {
      console.log(error);
      
    }

    
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Rigester</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.loginBox}>
          <h1 className={styles.title}>Rigester</h1>
          <form className={styles.form} onSubmit={callData}>

           <div className={styles.inputGroup}>
              <input type="name"  className={styles.input} placeholder='FullName' onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className={styles.inputGroup}>
              <input type="email"  className={styles.input} placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className={styles.inputGroup}>
              <input type="password" className={styles.input} placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            </div>

            <button type="submit" className={styles.button}>Rigester</button>

          </form>

          {
            error && (
               <div className={styles.error}>{error}</div>
              )
          }
          <div className={styles.text}>
            <p>If already have an account? <Link href='/' className={styles.text1}>Login</Link></p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
