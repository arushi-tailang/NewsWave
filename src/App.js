
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Footer';
import Navbar from './Navbar'
import NewsContent from './NewsContent';



function App() {

 const [category, setCategory] = useState('general');
 const [newsArray, setNewsArray] = useState([]);
 const [newsResults, setNewsResults] = useState();
 const [loadMore, setLoadMore] = useState(10)

 const newsApi = async () => {
  try {
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=e1b087c018514ffaa32af6e6112f8b0e&category=${category}&pageSize=${loadMore}`);
     
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults)
    } 
        catch (error) {
        console.log(error);
      }
  }



  useEffect(() => {
    newsApi();
  },[newsResults, category, loadMore])

  


  return (
    <div className="app">
     
   <Navbar setCategory={setCategory}  />
      
   <NewsContent newsArray={newsArray} newsResults={newsResults} loadMore={loadMore} setLoadMore={setLoadMore} />

   <Footer />
    
    </div>
  );
}

export default App;
