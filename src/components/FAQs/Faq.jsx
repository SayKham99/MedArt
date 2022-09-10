import React, {useState} from 'react'
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import "./faq.scss"

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

const Faq = () => {
  const [expanded, setExpanded] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const handleChange2 = (panel) => (event, isExpanded) => {
        setExpanded2(isExpanded ? panel : false);
    };
  return (
    <div className='faq'>
    <h1 className='title'>FAQs</h1>
    <div className='accordeons'>
        <div className='firstacc'>
            {faq.map(acc => (
                  <Accordion sx={{width: '550px',boxShadow:'none'}} key={acc.id} expanded={expanded === `panel${acc.id}`}
                             onChange={handleChange(`panel${acc.id}`)}>
                      <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls={`panel${acc.id}bh-content`}
                            id={`panel${acc.id}bh-header`}

                      >
                          <Typography>
                              {acc.title}
                          </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                          <Typography>
                              {acc.descr}
                          </Typography>
                      </AccordionDetails>
                  </Accordion>
            ))}
        </div>
        <div className='secondacc'>
            {faq2.map(acc => (
                  <Accordion sx={{width: '550px',boxShadow:'none'}} key={acc.id} expanded={expanded2 === `panel${acc.id}`}
                             onChange={handleChange2(`panel${acc.id}`)}>
                      <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls={`panel${acc.id}bh-content`}
                            id={`panel${acc.id}bh-header`}
                      >
                          <Typography>
                              {acc.title}
                          </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                          <Typography>
                              {acc.descr}
                          </Typography>
                      </AccordionDetails>
                  </Accordion>
            ))}
        </div>
    </div>
</div>
  )
}

export default Faq