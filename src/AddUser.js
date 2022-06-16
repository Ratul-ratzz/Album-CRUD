import React from 'react';
import './User.css'

//Using State to add user
const AddUser = ({onAdd}) => {
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
        onAdd(e.target.name.value);
        e.target.name.value = "";
        
    }
    //Adding form section and input section too
    return (
        <div className='album-2'>
            <form onSubmit={handleOnSubmit}>
                <h3>Add Album Title Name </h3>
                <input placeholder='Title' name='name' />
                {/* <input placeholder='Name' name='name'/> */}

                <button onSubmit={handleOnSubmit}>Add</button>
                
            </form>
            <hr />


        </div>
    )
}


export default AddUser