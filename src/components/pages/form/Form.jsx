import React, { useState } from 'react'

import './form.css'
const Form = () => {

    let [data, setData] = useState({
        fullname:'',
        email:'',
        password:'',
        address:'',
        date:'',
        gender:'',
        skills:''
    })
    

const handleChange = (event) =>{
    let value = event.target.value;

    if(event.target.name === 'skills'){
        if(event.target.checked){
            setData({
                ...data, skills: [...data.skills, value]
            })
        }else {
            setData({
                ...data,
                skills: data.skills.filter((skill) => skill !== value),
            });
        }
    }
    else{
        setData({
            ...data, [event.target.name]: value
        })
    }
}

const handleSubmit = () => {
    alert(`Data diri Anda:
    - Nama : ${data.fullName},
    - Email: ${data.email},
    - Password: ${data.password},
    - Alamat: ${data.address},
    - Tanggal Lahir: ${data.birthdate},
    - Jenis Kelamin: ${data.gender},
    - Keahlian: ${data.skills}
  `);
};

    // let [fullName,setfullName] = useState('')
    // let [email,setEmail] = useState('')
    // let [password,setPassword] = useState('')
    // let [address,setAddress] = useState('')
    // let [date,setDate] = useState('')
    // let [gender,setGender] = useState('')
    // let [skill, setSkill] = useState([])
  
 
    return (
        <div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} placeholder='Name' type="text" name="fullName" id="name" value={data.fullName}/>  
          <input onChange={handleChange} placeholder='Email' type="email" name="email" id="email" value={data.email}/>
          <input onChange={handleChange} placeholder='Password' type="password" name="password" id="password" value={data.password}/>
          <textarea onChange={handleChange} placeholder='Address' name="address" id="address" cols="30" rows="10" value={data.address}></textarea>
          <input onChange={handleChange} placeholder='Birth Date' type="date" name="birthDate" id="date" value={data.date}/>
          <input onChange={handleChange} type="radio" name="gender" id="gender1" value='Male'/>Male
          <input onChange={handleChange} type="radio" name="gender" id="gender2" value='Female'/>Female
          <input onChange={handleChange} type="checkbox" name="skills" id="checkbox1" value='Coding'/>Coding
          <input onChange={handleChange} type="checkbox" name="skills" id="checkbox2" value='Design'/>Design
          <input onChange={handleChange} type="checkbox" name="skills" id="checkbox3" value='Gaming'/>Gaming
            <input className='submit' type="submit"/>
        </form>
        </div>
      
    )

    }
export default Form;
