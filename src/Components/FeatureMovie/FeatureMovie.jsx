import React from 'react'
import styles from './FeatureMovie.module.css'

const FeatureMovie = ({ item }) => {
  
  let firstDate = new Date(item.release_date)
  let genres = []
  for(let i in item.genres) {
    genres.push( item.genres[i].name )
  }
  
  return (
    <section 
        className={styles.featured} 
        style={{ backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})` 
        }}>
            
      <div className={styles.featuredVertical}>
        <div className={styles.featuredHorizontal}>
            <div className={styles.featuredName}>
                {item.title}
            </div>

            <div className={styles.featuredInfo}>
                <div className={styles.featuredPoints}>
                    {item.vote_average.toFixed(1)} pontos
                </div>
                <div className={styles.featuredYear}>
                    {firstDate.getFullYear()}
                </div>
                <div className={styles.featuredDescription}>
                    {item.overview}
                </div>
                <div className={styles.featuredButtons}>
                    <a 
                     className={styles.featuredWatchButton} 
                     href={`/watch/${item.id}`}>
                        ▶ Assistir
                    </a>

                    <a 
                     className={styles.featuredMyListButton} 
                     href={`/list/add${item.id}`}>
                        + Minha Lista
                    </a>
                </div>
                <div className={styles.featuredGenres}>
                    <strong>Gêneros:</strong> {genres.join(', ')}
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureMovie
