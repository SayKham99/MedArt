import React, {useState} from 'react'
import Header from './Header/Header'
import Doctors from './Docs/Docs'
import Question from './Questions/Question'
import Program from './Programs/Programs'
import FAQ from './FAQs/Faq'

function About() {
    
    return (<section className='about'>
        <div className='wrapper'>
            <Header/>
            <Doctors/>
            <Program/>
            <Question/>
            <FAQ/>
        </div>
    </section>)
}

export default About