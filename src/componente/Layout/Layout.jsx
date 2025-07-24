
import React from 'react'
import Navbar from './../Navbar/Navbar';
import Section from './../section/Section';
import Footer from './../footer/Footer';
import { Outlet } from 'react-router-dom';



export default function Layout() {
  return (
    <>
        <Navbar/>


        <div className="contanier">
            <Outlet/>
        </div>

        <Section/>
        <Footer/>
    </>
  )
}
