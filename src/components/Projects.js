import React, { useState, useEffect} from 'react'
import { app, db } from '../backend/config';
import {
  doc,
  collection,
  getDocs,
  addDoc,
  deleteDoc
} from 'firebase/firestore';

export default function Projects() {

  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    if (projectData) {
      getData()
    }
    else {
      console.log('no data')
    }
  }, [])

  const [title, setTitle] = useState('');
  const [date, setDate] = useState(null);
  const databaseRef = collection(db, 'projects');

  const getData = async () => {
    await getDocs(databaseRef)
      .then((response) => {
        setProjectData(response.docs.map((data) => {
          return { ...data.data(), id: data.id }
        }))
      })
  }

  const addData = () => {

    addDoc(databaseRef, {
      title: title,
      dueDate: date
    })
      .then(() => {
        getData()
        setTitle('')
        setDate('')
      })
      .catch((err) => {
        console.error(err);
      })
  }

  const deleteDocument = (id) => {
    let fieldToEdit = doc(db, 'projects', id);
    deleteDoc(fieldToEdit)
    .then(() => {
      getData()
    })
    .catch((err) => {
      alert('Cannot Delete that field..')
    })
  }

  return (
    <div className="font-mono">
        <h1 className="text-center text-7xl mt-20 mb-20">Insights</h1>

      <div className="flex flex-col justify-center">
        <label htmlFor="" className="m-auto mb-2">Insight Name</label>
        <input
          placeholder='Title'
          className="w-1/6 m-auto mb-5 p-2"
          type="text"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <label htmlFor="" className="m-auto mb-2">Insight Post Date</label>
        <input
          placeholder='Date'
          className="w-1/6 m-auto mb-5 p-2"
          type="date"
          value={date}
          onChange={event => setDate(event.target.value)}
          required
        />

        <button
            className="mb-20 bg-white w-1/12 text-black m-auto"
            onClick={addData}
          >
            ADD
        </button>
      </div>

      <div className="font-mono mb-24 ml-96">
          {projectData.map((data) => {
            return (
                <div className="m-auto">
                  <h3 className="text-3xl mb-5">{data.title}</h3>
                  <p className="mb-5 w-3/4">Posted: {data.dueDate}</p>
                  <button onClick={() => deleteDocument(data.id)} className="mb-10 bg-white p-5 text-black m-auto">Delete</button>
                </div>
              )})}
        </div>
    </div>
  )
}
