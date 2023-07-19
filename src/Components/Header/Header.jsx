import React from 'react'
import styles from './Header.module.css'

const Header = ({ black }) => {
  return (
    <header className={black ? styles.black : ''}>
      <div className={styles.logo}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Video-film.svg" alt="Logo" />
      </div>
      <div className={styles.headerUser}>
        <img src="https://mario.wiki.gallery/images/8/8b/SuperMushroom_-_2D_art.svg" alt="Usuário" />
      </div>
    </header>
  )
}

export default Header
