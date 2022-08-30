import React from 'react'

import In from '../../../assets/icons/instagram.svg'
import Facebook from '../../../assets/icons/facebook.svg'
import Instagram from '../../../assets/icons/instagram.svg'
import doc1 from '../../../assets/doc1.png'
import doc2 from '../../../assets/doc2.png'
import doc3 from '../../../assets/doc3.png'
import doc4 from '../../../assets/doc4.png'
import doc5 from '../../../assets/doc5.png'

import "./docs.scss"


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

const Docs = () => {
  return (
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
  )
}

export default Docs