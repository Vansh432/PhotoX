import './App.css'

function Favourite(props){
    const favArr=JSON.parse(sessionStorage.getItem('favourites'))||[];

    return <>
       {favArr.map((Element,index)=>{
                  return  <div key={index} className='imageContainer'>
                   <img   src={Element}  alt='something loading' width="300px" height="200px"/>
                  </div>
               })}
    </>
}

export default Favourite;