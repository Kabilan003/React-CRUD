import React, {useState} from 'react'
import {Form,Button,Checkbox, FormField} from "semantic-ui-react"
import {API_URL} from "../API/API_URL"
import axios from "axios"
import {useNavigate} from "react-router-dom"

function Create(){

    const[firstName,setFirstName] = useState("");
    const[lastName,setLasttName] = useState("");
    const[checked,setChecked] = useState("");
    const navigate = useNavigate();

    const postData = async ()=>{
       await axios.post(API_URL, {
            firstName,
            lastName,
            checked
        })
        navigate("/Read");
    }

return (
    <Form className='form'>
    <FormField>
        <label>First Name</label>
        <input value={firstName} onChange={event =>setFirstName(event.target.value)} placeholder='Enter first name'/>
    </FormField>
    <br/>
    <FormField>
        <label>Last Name</label>
        <input value={lastName} onChange={event =>setLasttName(event.target.value)} placeholder='Enter Last name'/>
    </FormField>
    <br/>
    <FormField>
        <Checkbox checked={checked} onChange ={()=>setChecked(!checked)} label="Agree the terms and conditions"/>
    </FormField>
    <br/>
    <Button onClick={postData}>Submit</Button>
    </Form>
)
}

export default Create