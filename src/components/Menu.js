import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
  <nav id='menu'>
    <div className='inner'>
      <ul className='links'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/landing'>Landing</Link></li>
        <li><Link to='/generic'>Generic</Link></li>
        <li><Link to='/elements'>Elements</Link></li>
      </ul>
      <ul className='actions vertical'>
        <li><a href='#' className='button special fit'>Get Started</a></li>
        <li><a href='#' className='button fit'>Log In</a></li>
      </ul>
    </div>
    <a className='close' onClick={props.onToggleMenu} href='#'>閉じる</a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func
}

export default Menu
