import axios from 'axios';
import { useState,useEffect } from 'react';
import {Table,Button, TableHeader, TableRow, TableHeaderCell, TableBody, TableCell} from "semantic-ui-react";
import { API_URL } from '../API/API_URL';
import {useNavigate} from "react-router-dom"

function Read() {

const [apiData,setAPIData]=useState([]);
const navigate = useNavigate();
const updateUser= ({id,firstName,lastName,checked}) =>{
  localStorage.setItem("id",id);
  localStorage.setItem("firstName",firstName);
  localStorage.setItem("lastName",lastName);
  localStorage.setItem("checked",checked);
  navigate('/update')
}
const deleteUser = async (id) =>{
  await axios.delete(API_URL + id)
  callGetAPI();
}

const callGetAPI = async() =>{
  const resp = await axios.get(API_URL);

setAPIData(resp.data);
}

useEffect(()=>{
      callGetAPI();
},[]);

  return (
    <Table singleLine className='table'>
      <TableHeader>
        <TableRow>
        <TableHeaderCell className='cell'>Id</TableHeaderCell>
          <TableHeaderCell className='cell'>First Name</TableHeaderCell>
          <TableHeaderCell className='cell'>Last Name</TableHeaderCell>
          <TableHeaderCell className='cell'>Checked</TableHeaderCell>
          <TableHeaderCell className='cell'>Delete</TableHeaderCell>
          <TableHeaderCell className='cell'>Update</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          apiData.map(
            data =>(
              <TableRow key={data.id}>
              <TableCell className='cell'>{data.id}</TableCell>
              <TableCell className='cell'>{data.firstName}</TableCell>
              <TableCell className='cell'>{data.lastName}</TableCell>
              <TableCell className='cell'>{data.checked ? "Checked":"Not checked"}</TableCell>
              <TableCell className='cell'>
                <Button onClick={()=>{
                    deleteUser(data.id);
                }}>Delete</Button>
              </TableCell>
              <TableCell className='cell'>
                <Button onClick={()=>{
                    updateUser(data);
                }}>Update</Button>
              </TableCell>
            </TableRow>
            )
          )
        }
      </TableBody>
    </Table>
  )
}


export default Read