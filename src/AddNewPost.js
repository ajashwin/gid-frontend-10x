import React, { useState } from 'react'
const AddNewPost = () => {
    const[userName, setUsername] = useState('');
    const[address, setAddress] = useState('');
    const[imageFile, setImageFile] = useState('');
    const[description, setDescription] = useState('');

    const uploadPost = () => {
        const formdata = new FormData()
        formdata.append("username", userName);
        formdata.append("address", address);
        formdata.append("image_file", imageFile);
        formdata.append("description", description);

        

        fetch("http://localhost:8080/api" , {

                method: "POST",
                body: formdata // when u r sending form data, headers will be sent automatically

                })
    }

return (
    <div style={styles.container}>
        <input placeholder='Username' value={userName} onChange={(e)=> setUsername(e.target.value)}/>
        <input placeholder='Address' value={address} onChange={(e)=> setAddress(e.target.value)}/>
        <input type='file'  onChange={(e)=> setImageFile(e.target.files[0])}/>
        <textarea value={description} placeholder='Description' onChange={(e)=> setDescription(e.target.value)}>
        </textarea>
        <button onClick={uploadPost}>Submit</button>
    </div>
  )
}

const styles = {
    container : {height: "400px", justifyContent: "space-evenly", width:"400px", display: "flex", flexFlow: "column wrap"}
}

export default AddNewPost;
