import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

import React from 'react'

const useAxiosFetch = (dataUrl) => {
    const [data, setData] = useState([])
    const [fetchError, setFetchError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        let isMounted = true
        const source = axios.CancelToken.source()

        const fetchData = async (url) =>{
            setIsLoading(true)
            try {
                
            } catch (error) {
                
            }
        }

    }, [])
    return (
        <>

        </>
    )

}

export default useAxiosFetch