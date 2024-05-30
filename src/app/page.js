'use client';
import Header from "@/Components/header/Header";
import "../styles/global.scss";
import Landing from "@/Components/landing/Landing";
import ButtonContact from "@/Components/buttonContact/ButtonContact";




export default function Home() {
   
  return (
    <main>
      <Header/>
      <Landing/>
      <div className="container-button"><ButtonContact/></div>
      
      
     
    </main>
  );
}
