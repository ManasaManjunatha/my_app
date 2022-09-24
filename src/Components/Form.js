import React, { useState } from 'react'
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [branch, setBranch] = useState('');
  const [phone, setPhone] = useState();
  const [usn, setUsn] = useState('');
  const [sem, setSem] = useState('');

const handleSubmit=(e)=>{
  e.preventDefault();
  const data = {
    name:name,
    email:email,
    branch:branch,
    phone:phone,
    usn:usn,
    sem:sem
  }
  console.log(data);
}

  return (
    <div><form onSubmit={handleSubmit}>
      <input type="text" value={name} placeholder="student name" onChange={(e) => setName(e.target.value)} /><br></br>
      <input type="text" value={email} placeholder="student email" onChange={(e) => setEmail(e.target.value)} /><br></br>
      <input type="text" value={branch} placeholder="student Branch" onChange={(e) => setBranch(e.target.value)} /><br></br>
      <input type="number" value={phone} placeholder="student number" onChange={(e) => setPhone(e.target.value)} /><br></br>
      <input type="text" value={usn} placeholder="student usn" onChange={(e) => setUsn(e.target.value)} /><br></br>
      <input type="number" value={sem} placeholder="student semester" onChange={(e) => setSem(e.target.value)} /><br></br>
      <input type="submit" value="submit" />
    </form>
    </div>
  )
}
     /* <p>{name}</p>
      <p>{email}</p>
      <p>{branch}</p>
      <p>{phone}</p>
      <p>{usn}</p>
      <p>{sem}</p> */
   

export default Form