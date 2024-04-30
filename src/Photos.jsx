import { useEffect, useState } from "react";

function Photos(props){
  let photos=props.photoData;
  let favImg=sessionStorage.getItem('favourites');
  let coloH=sessionStorage.getItem('colorHeart');

  const [colorHeart,setcolorHeart]=useState(JSON.parse(coloH)||{});
  const [favourites,collectionFavourites]=useState(JSON.parse(favImg)||[]);  
  
  console.log(colorHeart);
  

  useEffect(()=>{
   sessionStorage.setItem('favourites',JSON.stringify(favourites));
   sessionStorage.setItem('colorHeart',JSON.stringify(colorHeart));
  },[favourites,colorHeart]);
  useEffect(()=>{
   props.getFavData();
  })
  function changeColor(id,imgUrl){
   
    setcolorHeart((prev)=>{
      
       return {
          ...prev,
          [id]:'red',
       }
    });
    if(favourites.indexOf(imgUrl)===-1){
    collectionFavourites((prev)=>{
     return [...prev,imgUrl];
    });
   }
   
 }
  return<>
        {photos.map((Element,index)=>{
                  return  <div key={index} className='imageContainer'>
                  <ion-icon  name="heart" title="fav" style={{color:colorHeart[Element.id] || 'white'}} onClick={()=>changeColor(Element.id,Element.urls.raw)}></ion-icon>
                   <img   src={Element.urls.raw}  alt='something loading' width="300px" height="200px"/>
                  </div>
               })}
               {/* <h1>Hello</h1> */}
              
  </>
}
export default Photos;