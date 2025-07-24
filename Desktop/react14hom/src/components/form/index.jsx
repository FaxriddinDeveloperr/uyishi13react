import React, { useState } from 'react'
import { v4 } from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faTrash } from '@fortawesome/free-solid-svg-icons'


function Main() {
    const [showPassword, setShowPassword] = useState(false)
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [birthDate, setBirthDate] = useState("")
    const [gender, setGender] = useState("")
    const [data, setData] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
        let newData = {
            id:v4(),
            fullName,
            email,
            password,
            birthDate,
            gender
        }
        setData((prev) => ([...prev, newData]))
    }

    const handleDelete = (id) => {
        setData(prev => prev.filter(item => item.id !== id))
    }

    
    


  return (
        <section className='w-[100%] h-[100vh] flex gap-14'>
            <div className='w-[34%] h-full flex justify-center items-center bg-[#007e73]'>
                <div className='w-[80%] mx-auto pt-10 pl-7 pr-7 pb-10 bg-amber-100'>
                    <h3 
                    className='text-4xl font-extrabold text-center pb-7'>
                    Signup Form
                    </h3>
                    <form onSubmit={handleSubmit} action="" className='flex flex-col'>
                        <label htmlFor="name" className='pb-2 font-medium '>Full Name</label>
                        <input 
                        value={fullName}
                        onChange={(event) => {setFullName(event.target.value)}}
                        type="text" 
                        id='name' 
                        placeholder='Enter your full name' 
                        className='border border-[#999] rounded-[3px] pt-3 pb-3 pl-2'/>
                        
                        <label htmlFor="email" className='pb-2 font-medium pt-4'>Email address</label>
                        <input
                        value={email}
                        onChange={(event) => {setEmail(event.target.value)}} 
                        type="email" 
                        id='email' 
                        placeholder='Enter your email address' 
                        className='border border-[#999] rounded-[3px] pt-3 pb-3 pl-2'/>
                        
                        <label htmlFor="password" className='pb-2 font-medium pt-4'>Password</label>
                        <div className='border border-[#999] rounded-[3px] pt-3 pb-3 pl-2 pr-2 flex justify-between items-center focus-within:border-[#000000] focus-within:border-2'>
                        <input 
                        value={password}
                        onChange={(event) => {setPassword(event.target.value)}}
                        type={showPassword ? 'text' : 'password'} 
                        id='password' 
                        placeholder='Enter your password' 
                        className='outline-none w-full'/>
                        
                        <button 
                        type="button" 
                        onClick={() => setShowPassword(!showPassword)}>
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} 
                            className='text-[#555] cursor-pointer ml-2'/>
                        </button>
                        </div>
                        
                        <label htmlFor="birthDate" className='pb-2 font-medium pt-4'>Birth date</label>
                        <input 
                        value={birthDate}
                        onChange={(event) => {setBirthDate(event.target.value)}}
                        type="date" 
                        id='birthDate' 
                        className='border border-[#999] rounded-[3px] pt-3 pb-3 pl-2'/>


                        <label htmlFor="gender" className='pb-2 font-medium pt-4'>Select gender</label>
                        <select 
                        value={gender}
                        onChange={(event) => {setGender(event.target.value)}}
                        name="" id="gender" 
                        className='border border-[#999] rounded-[3px] pt-3 pb-3 pl-2'>
                            <option value="" disabled>Select your gender</option>
                            <option value="male">Male</option>
                            <option value="famale">Famale</option>
                        </select>
                        <button className='border border-[#999] rounded-[3px] pt-3 pb-3 pl-2 mt-8 bg-[#007e73] text-white font-bold'>Submit</button>
                    </form>
                </div>
            </div>
            <div className='w-[66%] h-full'>
  <table className='w-[100%] max-w-[1000px] mx-auto border-collapse shadow-[0_22px_70px_4px_rgba(0,0,0,0.56)] rounded-[10px] overflow-hidden border-b-[green]'>
    <thead className='bg-[#00a37a] text-white'>
      <tr>
        <th className='p-[15px_10px] text-left text-[16px]'>№</th>
        <th className='p-[15px_10px] text-left text-[16px]'>Full Name</th>
        <th className='p-[15px_10px] text-left text-[16px]'>Email</th>
        <th className='p-[15px_10px] text-left text-[16px]'>Password</th>
        <th className='p-[15px_10px] text-left text-[16px]'>Birth date</th>
        <th className='p-[15px_10px] text-left text-[16px]'>Gender</th>
        <th className='p-[15px_10px] text-left text-[16px]'>Delete</th>
      </tr>
    </thead>
    <tbody className='[&>tr:nth-child(even)]:bg-[#F3F3F3] [&>tr:nth-child(even)]:text-[#549a7b]  [&>tr:nth-child(even)]:hover:bg-[rgba(129,129,128,0.301)] '>
      {
        data?.map((item, index) => (
        <tr id={item.id} className='bg-white text-[#333] text-[15px] hover:bg-[rgba(129,129,128,0.301)]'>
            <td className='p-[12px_10px] border-b border-[#ddd]'>{index + 1}</td>
            <td className='p-[12px_10px] border-b border-[#ddd]'>{item.fullName}</td>
            <td className='p-[12px_10px] border-b border-[#ddd]'>{item.email}</td>
            <td className='p-[12px_10px] border-b border-[#ddd]'>{item.password}</td>
            <td className='p-[12px_10px] border-b border-[#ddd]'>{item.birthDate}</td>
            <td className='p-[12px_10px] border-b border-[#ddd]'>{item.gender}</td>
            <td onClick={() => handleDelete(item.id)} className='p-[15px_10px] text-left text-[16px]'><FontAwesomeIcon icon={faTrash} /></td>
        </tr>
        ))
      }
    </tbody>
  </table>
  </div>
        </section>
  )
}

export default Main
