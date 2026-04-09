import React from 'react'
import Spinner from '../_components/Spinner'

export default function loading() {
    return (
        <div className='flex mx-auto justify-center items-center  '>
            <Spinner/>
            
        </div>
    )
}
