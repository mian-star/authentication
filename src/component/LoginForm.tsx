'use client'

import Link from 'next/link';
import Head from 'next/head';
import styles from '../component/login.module.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

const LoginPage = () => {

  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[error,setError] = useState('')

  const router = useRouter();

  const handleSubmit = async (e)=>{
    e.preventDefault(); 

    try {
      const res = await signIn('credentials',{
        email,
        password,
        redirect : false,
      });
      if (res.error){
        setError('Invalid Credentials');
        return;
      }
      
      router.replace("deshbord");

    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.loginBox}>
          <h1 className={styles.title}>Enter the details</h1>
          <form onSubmit={handleSubmit} className={styles.form}>

            <div className={styles.inputGroup}>
              <input type="email"  className={styles.input} placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className={styles.inputGroup}>
              <input type="password" className={styles.input} placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="submit" className={styles.button}>Login</button>
          </form>

          {
            error && (
              <div className={styles.error}>{error}</div>
            )
          }
          <div className={styles.text}>
            <p>Don't have an account? <Link href='/rigester' className={styles.text1}>Rigester</Link></p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
