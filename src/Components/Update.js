import React,{useState,useEffect} from 'react';
import {Form,Button,FormField,Checkbox} from "semantic-ui-react";
import { API_URL } from '../API/API_URL';
import axios from "axios";
import {useNavigate} from "react-router-dom"

 function Update() {

  const[firstName,setFirstName] = useState("");
    const[lastName,setLasttName] = useState("");
    const[checked,setChecked] = useState("");
    const[id,setId]=useState("");
    const navigate = useNavigate();

    const update = async()=>{
      await axios.put(API_URL + id,{
        id,
        firstName,
        lastName,
        checked
      });
      navigate('/read')
    }


    useEffect(()=>{
      setId(localStorage.getItem('id'));
      setFirstName(localStorage.getItem("firstName"));
      setLasttName(localStorage.getItem("lastName"));
      setChecked(localStorage.getItem("checked"));
    },[])

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
    <Button className='upd' onClick={update}>Update</Button>
    </Form>
  )
}

export default Update