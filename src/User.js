import React from 'react';
import './User.css'

const user = ({ id, name, onDelete }) => {

    const handleDelete = () => {
        onDelete(id)
    }
//Calling handle function to delete the data
    return (
        <div className='list'>
            {/* <span>{id}</span>       */}
            <span>{name}</span>
            <span>
                <button> Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </span>
        </div>
    )
}

export default user