'use client';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import styles from '../deshbord/desh.module.css';

const Home = () => {

    const {data: session} = useSession();
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>{session?.user?.name} Welcome to Home Page</h1>
                <p>Email : {session?.user?.email}</p>
            </header>
            <section className={styles.features}>
                <div className={styles.feature}>
                    <h2>Feature 1</h2>
                    <p>Connect with monogo-DB Atlas</p>
                </div>
                <div className={styles.feature}>
                    <h2>Feature 2</h2>
                    <p>Secure routing Concept (protecting routes)</p>
                </div>
                <div className={styles.feature}>
                    <h2>Feature 3</h2>
                    <p>Complete Authentication with next-Auth</p>
                </div>
               
            </section>

        
            <button onClick={()=> signOut()} className={styles.button}>Log Out</button>
            

            <footer className={styles.footer}>
                <p>&copy; 2024 My Next.js App</p>
            </footer>
        </div>
    );
}

export default Home;
