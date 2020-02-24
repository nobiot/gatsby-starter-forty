/* global IntersectionObserver */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = (props) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '200px',
      threshold: 0
    })
    const header = document.querySelector('#header')
    if (header) {
      observer.observe(header)
    }
  })
  return (
    <header id='header' className='alt'>
      <Link to='/' className='logo'><img src='../images/emblem_white.png' width='50' /></Link>
      <nav>
        <a className='menu-link' onClick={props.onToggleMenu} href='#' />
      </nav>
    </header>
  )
}
const callback = (entries, observer) => {
  const header = entries.find(entry => entry.target.id === 'header')
  if (header) {
    if (header.isIntersecting === false) {
      header.target.classList.remove('alt')
      header.target.classList.add('reveal')
      // prevInteractionRatio = header.interactionRatio
    }
  }
}
Header.propTypes = {
  onToggleMenu: PropTypes.func
}

export default Header
