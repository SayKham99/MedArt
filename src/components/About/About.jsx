import React, {useState} from 'react'

import In from '../../assets/icons/in.svg'
import Facebook from '../../assets/icons/facebook.svg'
import Instagram from '../../assets/icons/instagram.svg'

import founder from '../../assets/founder.png'
import sing from '../../assets/sign 1.svg'
import doc1 from '../../assets/doc1.png'
import doc2 from '../../assets/doc2.png'
import doc3 from '../../assets/doc3.png'
import doc4 from '../../assets/doc4.png'
import doc5 from '../../assets/doc5.png'

import QuesImg1 from '../../assets/aqImg1.png'
import QuesImg2 from '../../assets/aqImg2.png'
import QuesImg3 from '../../assets/aqImg3.png'
import QuesImg4 from '../../assets/aqImg4.png'


import './About.scss'
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const data = [{
    id: 1,
    name: `Doctor's Name`,
    type: 'Neurology',
    img: doc1,
    social: [{id: 1, icon: In, url: 'http://google.com'}, {id: 2, icon: Facebook, url: 'http://google.com'}, {
        id: 3, icon: Instagram, url: 'http://google.com'
    },]
}, {
    id: 2,
    name: `Doctor's Name`,
    type: 'Neurology',
    img: doc2,
    social: [{id: 1, icon: In, url: 'http://google.com'}, {id: 2, icon: Facebook, url: 'http://google.com'}, {
        id: 3, icon: Instagram, url: 'http://google.com'
    },]
}, {
    id: 3,
    name: `Doctor's Name`,
    type: 'Neurology',
    img: doc3,
    social: [{id: 1, icon: In, url: 'http://google.com'}, {id: 2, icon: Facebook, url: 'http://google.com'}, {
        id: 3, icon: Instagram, url: 'http://google.com'
    },]
}, {
    id: 4,
    name: `Doctor's Name`,
    type: 'Neurology',
    img: doc4,
    social: [{id: 1, icon: In, url: 'http://google.com'}, {id: 2, icon: Facebook, url: 'http://google.com'}, {
        id: 3, icon: Instagram, url: 'http://google.com'
    },]
}, {
    id: 5,
    name: `Doctor's Name`,
    type: 'Neurology',
    img: doc5,
    social: [{id: 1, icon: In, url: 'http://google.com'}, {id: 2, icon: Facebook, url: 'http://google.com'}, {
        id: 3, icon: Instagram, url: 'http://google.com'
    },]
},];

const program = [{id: 1, title: 'Personal advice and useful recommendations'}, {
    id: 2, title: 'Help by studying medical records and pictures'
}, {id: 3, title: 'An analysis of both personal and family anamnesis, as well as lifestyle.'}];

const questions = [{
    id: 1,
    img: QuesImg1,
    question: 'WHAT IT FEELS LIKE TO BE OUR FRIEND',
    answer: 'At Grand M we believe that your medical care should be highly individual. You are unique and so are your health priorities.',
    descr: 'When you engage Grand M you can be confident that we will find the very best solutions, tailored to your personal circumstances.'
}, {
    id: 2,
    img: QuesImg3,
    question: 'COMPETENT COORDINATION MAKES\n' + 'YOUR LIFE EASY',
    answer: 'Many complicated diseases\n' + 'require not only the attention of\n' + 'the best doctors, but also a\n' + 'seamless coordination between\n' + 'different specialists',
    descr: 'Grand M’s service is unique in that our own doctors\n' + 'work together with all the treating and consulting\n' + 'specialists to ensure harmonious treatment and care.\n' + 'Our employees take care of all organisational\n' + 'matters to make life easier for our patients and their\n' + 'families when they need it the most.'
}, {
    id: 3,
    img: QuesImg3,
    question: 'COMPETENT COORDINATION MAKES\n' + 'YOUR LIFE EASY',
    answer: 'Many complicated diseases\n' + 'require not only the attention of\n' + 'the best doctors, but also a\n' + 'seamless coordination between\n' + 'different specialists',
    descr: 'Grand M’s service is unique in that our own doctors\n' + 'work together with all the treating and consulting\n' + 'specialists to ensure harmonious treatment and care.\n' + 'Our employees take care of all organisational\n' + 'matters to make life easier for our patients and their\n' + 'families when they need it the most.'
}, {
    id: 4,
    img: QuesImg4,
    question: 'WHAT IT FEELS LIKE TO BE OUR FRIEND',
    answer: 'At Grand M we believe that your medical care should be highly individual. You are unique and so are your health priorities.',
    descr: 'When you engage Grand M you can be confident that we will find the very best solutions, tailored to your personal circumstances.'
},];

const faq = [
    {
        id: 1,
        title: 'What is Webflow and why is it the best website builder?',
        descr: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'
    },
    {
        id: 2,
        title: 'What is Webflow and why is it the best website builder?',
        descr: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'
    },
    {
        id: 3,
        title: 'What is Webflow and why is it the best website builder?',
        descr: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'
    },
    {
        id: 4,
        title: 'What is Webflow and why is it the best website builder?',
        descr: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'
    },
    {
        id: 5,
        title: 'What is Webflow and why is it the best website builder?',
        descr: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'
    },
    {
        id: 6,
        title: 'What is Webflow and why is it the best website builder?',
        descr: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'
    },
];
const faq2 = [
    {
        id: 11,
        title: 'What is Webflow and why is it the best website builder?',
        descr: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'
    },
    {
        id: 21,
        title: 'What is Webflow and why is it the best website builder?',
        descr: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'
    },
    {
        id: 31,
        title: 'What is Webflow and why is it the best website builder?',
        descr: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'
    },
    {
        id: 41,
        title: 'What is Webflow and why is it the best website builder?',
        descr: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'
    },
    {
        id: 51,
        title: 'What is Webflow and why is it the best website builder?',
        descr: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'
    },
    {
        id: 61,
        title: 'What is Webflow and why is it the best website builder?',
        descr: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'
    },
];


function About() {

    const [expanded, setExpanded] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const handleChange2 = (panel) => (event, isExpanded) => {
        setExpanded2(isExpanded ? panel : false);
    };
    return (<section className='about'>
        <div className='wrapper'>
            <header className='header'>
                <h1 className='title'>About US</h1>
                <p className='descr'>Story about our hospital and Doctors</p>
                <div className='founder'>
                    <img src={founder} alt="" className='founder__img'/>
                    <div className='founder__descr'>
                        <h1 className='title'>Story about our hospital</h1>
                        <span className='title__span'>Story about our hospital</span>
                        <p className='descr'>One of the first major discoveries relevant to the field of
                            pulmonology
                            was the discovery of pulmonary circulation. Originally, it was thought that blood
                            reaching
                            the right side of the heart passed through small ‘pores’ in the septum.</p>
                        <img src={sing} alt="" className='sing'/>
                        <p className='last__title'>Founder of MEDART Hospital</p>
                    </div>
                </div>
            </header>

            <div className='docs'>
                {data.map(doc => (<div key={doc.id} className='card'>
                    <div className='card__header'>
                        <img src={doc.img} alt="" className='doc1'/>
                    </div>
                    <div className='card__body'>
                        <p className='name'>{doc.name}</p>
                        <b className='type'>{doc.type}</b>
                        <div className='socials'>
                            {doc.social.map(soc => (<a href={soc.url} target='_blank'>
                                <img src={soc.icon} alt=""/>
                            </a>))}
                        </div>
                    </div>
                </div>))}
            </div>

            <div className='programs'>
                <div className='wrapper'>
                    <h1 className='title'>CREATING HIGHLY PERSONALISED MEDICAL PROGRAMS</h1>
                    <p className='descr'>Here at Grand M, our work with each new patient begins with by doing a
                        comprehensive
                        evaluation of the state of their health. The first step is studying the current
                        history, which includes:</p>
                    <div className='programwrap'>
                        {program.map(prog => (<div key={prog.id} className='program'>
                            <span className='intwrap'><p className='int'>{prog.id}</p></span>
                            <p className='program__descr'>{prog.title}</p>
                        </div>))}
                    </div>
                    <p className='last__descr'>Based on this information, our personal health care team
                        spearheaded by
                        the medical
                        director develops a personalised examination program which includes the latest
                        imaging technology and laboratory analyses.</p>
                </div>

            </div>

            <div className='questions'>
                {questions.map(ques => (<div key={ques.id} className='questions__wrap'>
                    <div className='quesImg'>
                        <img src={ques.img} alt=""/>
                        <div className='answers'>
                            <p className='question'>{ques.question}</p>
                            <hr/>
                            <p className='answer'>{ques.answer}</p>
                            <p className='descr'>{ques.descr}</p>
                        </div>
                    </div>

                </div>))}

            </div>
        </div>
    </section>)
}

export default About
