import React, { useEffect, useState } from 'react'
import './App.css'
import Tmdb from './Tmdb'
import MovieRow from './Components/MovieRow/MovieRow'
import FeatureMovie from './Components/FeatureMovie/FeatureMovie'
import Header from './Components/Header/Header'

const App = () => {

  const [movieList, setMovieList] = useState([])
  const [featureData, setFeatureData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista total
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      // Pegando o Featured
      let originals = list.filter(i => i.slug === 'action')
      let randonChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randonChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'movie')
      setFeatureData(chosenInfo)

      console.log(chosenInfo);
    }

    loadAll()
  },[])

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <div className='page'>

      <Header black={blackHeader} />

      {featureData &&
        <FeatureMovie item={featureData} />
      }

      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow 
            key={key} 
            title={item.title} 
            items={item.items} 
          />
        ))}
      </section>

      <footer>
        Feito por Leonardo Fernandes Jeronimo<br/>
        Dados pegos do site Themoviedb.org
      </footer>
      
      {movieList.length <= 0 &&
        <div className='loading'>
          <img src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif" alt="loading" />
        </div>
      }
    </div>
  )
}

export default App
