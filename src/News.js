import React, { useState, useEffect } from 'react'
import Business from './components/Business'
import Entertainment from './components/Entertainment'
import Sports from './components/Sports'
import Technology from './components/Technology'
import pic from './pics/sports.png'
import Error from './components/Error'
import TinderCard, { defaultProps } from 'react-tinder-card'
import Loader from './components/Loader'
import InfiniteScroll from 'react-infinite-scroll-component'
defaultProps
import DefNEWS from './pics/DefNEWS.jpg'



function News(props) {

    const [state,Setstate]=useState({
        loading:false,
        articles:[],
        totalResults:0,
        pageSize:1,
        page:1,
        lastNews:0,
        Iserror:false,
        allOver:false, 
        apiKey:process.env.REACT_APP_API_KEY
    })



    let ApiURL = `http://newsapi.org/v2/everything?q=${props.category}&apiKey=40c8d8f84c2846b7aaf5190aaee8dc2a&pageSize${state.page}`;





    let ApiCall=() =>{
        

        fetch(ApiURL)
            .then(
                (res) => {
                    return res.json();
                }
            )
            .then(
                (ApiData) => {
                    
                    console.log(ApiData.articles)
                   Setstate({
                       loading:true,
                       articles:ApiData.articles,
                       totalResults:ApiData.articles.totalResults,
                       page:state.page+1,
                       apiKey:state.apiKey
    
                   })
                   
                }
            ).catch((err)=>{
                console.error(err.message)                
                Setstate({
                    Iserror:true,
                    loading:true,


                    
                })            
            })

    }
   



    useEffect(ApiCall,[]);



    return (
        <>


  {(state.Iserror)?<>
  <Error/></>:  !(state.loading)?<Loader/>:
<div className='MainCard'>
  <div className="card__container">
      {

         
       (state.articles)  &&  state.articles.map((val, i) => {
         
    
         
 
              return (<>
              <div className="ParentDiv" key={i}>
                  

{(val.content && val.title )?<TinderCard id="TinderCard" onSwipe={()=>{
  
          console.log(val.title,i);
     }} className="swipe" key={val.url} preventSwipe={(i==0)?['up','down','left','right']:[]}   >

     
    
     <div  className="card" key={i} >
         {(val.urlToImage==null || val.urlToImage=="" || val.urlToImage=="https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=57" || val.urlToImage=="https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=55")?val.urlToImage="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80":<img  className=" card-image card-img-top" src={val.urlToImage}  />
         }
         <div className="card-body">
             <h5 className="card-title">{val.title}</h5>
             <p  className="card-text">{val.content.slice(0,201)}</p>
       <a href={val.url} target="_blank" onTouchStart={()=>{
           window.open(val.url,'_blank')}
    }  id="readMoreButton" className="btn readMoreButton  btn-primary ">Read more...</a>
             
         </div>
     </div>



 </TinderCard>:null} 
      
</div >

</>
                  )

          })

                

           }   </div>

</div>
}
        </>
    )



}
News.defaultProps={
        category:'general',
        

    }
export default News;
