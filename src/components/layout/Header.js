import React from 'react'
import { css } from 'glamor'

class Header extends React.Component {
  render() {
    return (
      <div {...css(styles.container)}>
        <span className="logoTitle" {...css(styles.title)}>Mozarts Mechanics</span>


        <nav className="navTitle">
          <ul>
            <li>Members</li>
            <li>Sign Out</li>
          </ul>
        </nav>

      </div>

    )
  }
}

const styles = {
  title: {
    color: 'white',
    margin: 0,
    padding: '25px',
    textAlign: 'left',
    width: '40%'
  },
  logoTitle: {
    color: 'white',
    textAlign: 'left',
    width: '40%'

  },
  navTitle: {
    color: 'white',
    width: '50%',
    textAlign: 'right'
  },
  container: {
    height: '80px',
    width: '100%',
    backgroundColor: '#4CAF50'
  }
}

export default Header
