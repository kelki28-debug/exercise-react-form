import React, { useState } from 'react'

import './form.css'
const Form = () => {

  

    let [fullName,setfullName] = useState('')
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let [address,setAddress] = useState('')
    let [date,setDate] = useState('')
    let [gender,setGender] = useState('')
    let [skill, setSkill] = useState('')
  
    function handleSubmit() {
         alert(`Nama: ${fullName} Email: ${email} Password: ${password} Address: ${address} BirthDate: ${date} Gender: ${gender} Skill: ${skill}`)
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
          <input onChange={(event) =>setfullName(event.target.value) } placeholder='Name' type="text" name="fullName" id="name" value={fullName}/>  
          <input onChange={(event) =>setEmail(event.target.value) } placeholder='Email' type="email" name="email" id="email" value={email}/>
          <input onChange={(event) =>setPassword(event.target.value) } placeholder='Password' type="password" name="password" id="password" value={password}/>
          <textarea onChange={(event) =>setAddress(event.target.value) } placeholder='Address' name="address" id="address" cols="30" rows="10" value={address}></textarea>
          <input onChange={(event) =>setDate(event.target.value) } placeholder='Birth Date' type="date" name="birthDate" id="date" value={date}/>
          <input onChange={(event) =>setGender(event.target.value)} type="radio" name="gender" id="gender1" value='Male'/>Male
          <input onChange={(event) =>setGender(event.target.value)} type="radio" name="gender" id="gender2" value='Female'/>Female
          <input onChange={(event) =>setSkill(event.target.value)} type="checkbox" name="skill" id="checkbox1" value='Coding'/>Coding
          <input onChange={(event) =>setSkill(event.target.value)} type="checkbox" name="skill2" id="checkbox2" value='Design'/>Design
          <input onChange={(event) =>setSkill(event.target.value)} type="checkbox" name="skill3" id="checkbox3" value='Gaming'/>Gaming
            <input className='submit' type="submit"/>
        </form>
        </div>
      
    )
}

export default Form;
