import './App.css'
import Categories from './components/Categories'
import NewsCard from './components/NewsCard'

function App() {

  return (
    <div>
      <Categories />
      <div className='grid grid-cols-3 '>

        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  )
}

export default App
