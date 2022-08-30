import React from 'react'

import "./header.scss"

import founder from '../../../assets/founder.png'
import sing from '../../../assets/sign 1.svg'

const Header = () => {
  return (
    <div>
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
    </div>
  )
}

export default Header