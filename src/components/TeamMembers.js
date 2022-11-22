import React, { useState, useEffect } from 'react'
import { app, db } from '../backend/config'
import {
    collection,
    getDocs,
  } from 'firebase/firestore';

export default function TeamMembers() {

  const [teamData, setTeamData] = useState([]);
  const databaseRef = collection(db, 'team');

  useEffect(() => {
      if (teamData) {
        getData()
      }
      else {
        console.log('no data')
      }
    }, [])

  const getData = async () => {
      await getDocs(databaseRef)
        .then((response) => {
          setTeamData(response.docs.map((data) => {
            return { ...data.data(), id: data.id }
          }))
        })
    }

  return (
    <div>
        <h1 className="text-center text-7xl mt-20 font-mono mb-20">Team Members</h1>
        <div className="flex justify-around flex-wrap font-mono">
          {teamData.map((data) => {
            return (
              <div className="text-center w-1/3">
                <img className="h-80 w-3/4 mb-20 m-auto" src={data.img} alt="" />
                <h3 className="text-3xl mb-5">{data.name}</h3>
                <p className="mb-5 w-3/4 m-auto">{data.info}</p>
                <p className="mb-20">Year {data.years}</p>
              </div> )})}
        </div>
    </div>
  )
}
