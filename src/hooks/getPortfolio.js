import React, { useState, useEffect, useRef } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../backend/db/portfolio'

export default function getPortfolio() {

    const [portfolio, setPortfolio] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const docRef = doc(db, 'portfolio')
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setPortfolio(docSnap.data().portfolio)
                } else {
                    setPortfolio({})
                }
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])

    return {portfolio, setPortfolio}
}