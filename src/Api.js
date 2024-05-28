import React, { useEffect, useState } from 'react'
//#11235A
//#596FB7
//#C6CF9B
//#F6ECA9

const Api = () => {

   const[users,setUsers]= useState([]);
  const getUsers= async () =>{
    const response = await fetch('https://fakestoreapi.com/products');
   setUsers(await response.json()); 
   
  }

  useEffect( ()=>{
      getUsers(); 
   },[])



  return (
    <>
   <div className='wholeb'>
   <h1 className='text-center  '>FETCH API PROJECT</h1>

    <div className='container-fluid '>
      <div className='row text-center'>

        {
            users.map((currElem)=>{
              return(
                  <div className='col-10 col-md-4 mt-5'>
          <div className='card p-2'>
            <div className='d-flex align-items-center'>
              <div className='image'>
                <img src={currElem.image} className="rounded" width="155" alt="Profile" />
              </div>
              <div className='ml-3 w-100 card-content'>
                <h4 className='mb-0 mt-0 textleft'>{currElem.title}</h4>
                <span className='textleft'>{currElem.category}</span>
                <div className='p-2 mt-2 d-flex justify-content-between rounded text-white stats' >
                  <div className='d-flex flex-column'>
                    <span className='articles'>articles</span>
                    <span className='number1'>{currElem.id}</span>
                  </div>
                  <div className='d-flex flex-column'>
                    <span className='followers'>price</span>
                    <span className='number2'>{currElem.price}</span>
                  </div>
                  <div className='d-flex flex-column'>
                    <span className='rating'>rating</span>
                    <span className='number3'>{currElem.rating.rate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
           
        </div>   )
            })

        }




      
      </div>
    </div>
   </div>
  </>
  )
}

export default Api
