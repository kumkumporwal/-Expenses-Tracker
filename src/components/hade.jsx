import React from 'react'
import Head from '../img/hade.png'
export default function hade() {
  return (
    <div>
        <div className="d-flex justify-content-center align-items-center px-0 py-0" >
                <img src={Head} alt="" style={{width:"40%" , height:"8vh" }}/>
                <h1 className='text-center'>Healthy Salad Recipes</h1>
        </div>
    </div>
  )
}
