import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import './spinner.css' // tried adding the keyframe animation with emotion as per the docs but didn't work for some reason so just did it with css to save time

const Spinner: React.FC = () => {
    return (
        <FontAwesomeIcon icon={faSpinner}
            className="spinner"
        />  
    )
} 

export default Spinner;
