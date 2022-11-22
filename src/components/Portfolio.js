import React, {useState,useEffect} from 'react'
import { app, db } from '../backend/config'
import {
    collection,
    getDocs,
  } from 'firebase/firestore';

export default function Portfolio() {
    const [portfolioData, setPortfolioData] = useState([]);
    const databaseRef = collection(db, 'portfolio');

    useEffect(() => {
        if (portfolioData) {
          getData()
        }
        else {
          console.log('no data')
        }
      }, [])

    const getData = async () => {
        await getDocs(databaseRef)
          .then((response) => {
            setPortfolioData(response.docs.map((data) => {
              return { ...data.data(), id: data.id }
            }))
          })
      }

  return (
    <div>
        <h1 className="text-center text-7xl mt-20 font-mono mb-20">Portfolio</h1>
        <div className="flex justify-around flex-wrap font-mono">
          {portfolioData.map((data) => {
            return (
              <div className="text-center w-1/3">
                <img className="h-64 w-3/4 mb-20 m-auto" src={data.logo} alt="" />
                <h3 className="text-3xl mb-5">{data.name}</h3>
                <p className="mb-40">{data.location}</p>
              </div> )})}
        </div>
    </div>
  )
}
