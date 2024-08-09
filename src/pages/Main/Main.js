import React from 'react'
import { Helmet } from 'react-helmet'
import { headerData } from '../../data/headerData'

import { Navbar, Footer, Landing, About, Skills,Education, Experience, Contacts, Projects, Achievement, Services, SocialEndeavor } from '../../components'


function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Experience/>
            <Skills />
            <Services/>
            <Projects />
            <Achievement />
            <SocialEndeavor/>
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
