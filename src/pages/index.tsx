import Head from 'next/head'
import { Poppins } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Welcome from '@/components/Welcome';
import Team from '@/components/Team';
import Opinions from '@/components/Opinions';
import FindUs from '@/components/FindUs';
import Footer from '@/components/Footer';
import SideMenu from '@/components/SideMenu';
import { useRef, useState } from 'react';

const poppins = Poppins({weight: "500", subsets: ["latin"]});

export default function Home() {
  const [menuExpanded, toggleMenuExpanded] = useState(false);
  const opinions = useRef(null);
  const team = useRef(null);

  return (
    <>
      <Head>
        <title>Trasernia</title>
        <meta name="description" content="Barber i fryzjer w Gdańsku Trasernia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main onClick={() => toggleMenuExpanded(false)} className={`${styles.main} ${poppins.className}`}>
        {menuExpanded && <SideMenu toggleMenuExpanded={toggleMenuExpanded} opinions={opinions} team={team}/>}
        <Navbar opinions={opinions} team={team} toggleMenuExpanded={toggleMenuExpanded}/>
        <Welcome/>
        <Team team={team}/>
        <Opinions opinions={opinions}/>
        <FindUs/>
        <Footer/>
      </main>
    </>
  )
}
