import React, { useEffect, useState } from 'react'
import './App.css'
import Tmdb from './Tmdb'
import MovieRow from './Components/MovieRow/MovieRow'
import FeatureMovie from './Components/FeatureMovie/FeatureMovie'
import Header from './Components/Header/Header'

const App = () => {

  const [movieList, setMovieList] = useState([])
  const [featureData, setFeatureData] = useState(null)

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

  return (
    <div className='page'>

      <Header />

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
    </div>
  )
}

export default App
