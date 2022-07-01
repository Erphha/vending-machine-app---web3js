import Head from 'next/head'
import Web3 from 'web3'
import "bulma/css/bulma.css";
import styles from "../styles/VendingMachine.module.css";

export default function VendingMachine() {

    const connectWalletHandler = () =>{
        
    }

  return (

    <div className={styles.main}>
    <Head>
        <title>VendingMachine App</title>
        <meta name="description" content="A blockchain vending machine!" />
      </Head>
        <nav className="navbar mt-4 mb-4">
            <div className='container'>
                <div className='navbar-brand'>
                    <h1>Vending Machine</h1>
                </div>
                <div className='navbar-end'>
                    <button className='button is-primary'>Connect Wallet</button>
                </div>
            </div>
        </nav>
        <section>
            <div className='container'>
                <p>Placeholder Text!</p>
            </div>
        </section>
    </div>
    
  );
}
