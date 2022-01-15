import React from 'react'
import TopNav from './TopNav/TopNav'
import "./style.css"
import MainNav from './MainNav/MainNav'
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

export default function Header() {
    return (
        <StickyHeader
           
            header={<div className="haeder" >
                <TopNav />
                <MainNav />
            </div>}
        />



    )
}
