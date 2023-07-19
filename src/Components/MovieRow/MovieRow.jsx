import React, { useState } from 'react'
import styles from './MovieRow.module.css'


const MovieRow = ({ title, items }) => {
  const [scrollX, setScrollX] = useState(0)

  const handleLeft = () => {
    let x = scrollX + Math.round(window.innerWidth / 2)
    if(x > 0) {
      x = 0
    }
    setScrollX(x)
  }

  const handleRight = () => {
    let x = scrollX - Math.round(window.innerWidth / 2)
    let listW = items.results.length * 150
    if((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60
    }
    setScrollX(x)
  }

  return (
    <div className={styles.movieRow}>
      <h2>{title}</h2>

      <div className={styles.left} onClick={handleLeft}>
        <img src="https://brandeps.com/icon-download/N/Navigate-before-icon-vector-01.svg" alt="seta retornar" />
      </div>

      <div className={styles.right} onClick={handleRight}>
        <img src="https://brandeps.com/icon-download/N/Navigate-next-icon-vector-01.svg" alt="seta avançar" />
      </div>

      <div className={styles.listArea}>
        <div 
          className={styles.list} 
          style={{
            marginLeft: scrollX,
            width: items.results.length * 150
          }} 
        >
          {items.results.length > 0 && items.results
            .map((item, key) => (
              <div key={key} className={styles.item}>
                  <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieRow
