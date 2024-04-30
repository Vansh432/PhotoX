import { useEffect,useState } from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';
import Favourite  from './Favourites';
// import rocket from './image/rocket.jpg';
import axios from 'axios';
import Photos from './Photos';

function App()
{
   const [photoData,setphotoData]=useState([]);
   const [value,setvalue]=useState('');
   // const [favImages,collectionFavourites]=useState([]); 
  
   const [count,setCount]=useState(0);
 
   
   useEffect(()=>{
      if(value===''){
         setphotoData([]);
      };
      
      axios.get(`https://api.unsplash.com/search/photos?page=1&query=${value}&client_id=0GwwtiTW_CkqHcB70hEhqf0-0g6wuitqx8Qaozp92O4`).then(response=>{
          setphotoData(response.data.results);
         console.log(response.data.results);
      }).catch(error=>console.error(error));
   },[value])

   
   function inputValue(e){
      if(e.key==='Enter'){
      setvalue(e.target.value);
      }
   }
  
   // function changeColor(id){
   //    setCount(count+1);
     
   //    setcolorHeart((prev)=>{
   //       return {
   //          ...prev,
   //          [id]:'red',
         
   //       }
   //    });

   // }
 
    function getData(){
      let favImg=JSON.parse(sessionStorage.getItem('favourites'))||[];
      setCount(favImg.length);
      console.log(count);
    }
    return <>
       <div className="container">
         
            
             <Router>
             <div className='header'>
             <Link to='/'>
             <input type="text" placeholder="Enter the value"  onKeyDown={inputValue} /></Link>
             <div className='favItems'>
             <Link to="/favourites"><ion-icon name="heart-outline" title="store" style={{color:'black'}}></ion-icon>
             <span className='count'>{count}</span>
             </Link>
             </div>
             </div>
             <div id="searchItem">
             <Routes>
               <Route path='/' element={<Photos photoData={photoData} getFavData={getData}/>}/>
               <Route path="/favourites" element={<Favourite />}/>
               
             </Routes>
             </div>
             
             </Router>
           
             
            
             
             {/* <div className='imageContainer'>
                  <ion-icon  name="heart" title="fav" onClick={changeColor} style={{color:colorHeart}}></ion-icon>
                   <img   src={rocket}  alt='something loading' width="300px" height="200px"   />
                  </div> */}
               {/* {photoData.map((Element,index)=>{
                  return  <div key={index} className='imageContainer'>
                  <ion-icon  name="heart" title="fav" style={{color:colorHeart[Element.id] || 'white'}} onClick={()=>changeColor(Element.id)}></ion-icon>
                   <img   src={Element.urls.raw}  alt='something loading' width="300px" height="200px"/>
                  </div>
               })} */}
               
            
       </div>

    </>
}

export default App;