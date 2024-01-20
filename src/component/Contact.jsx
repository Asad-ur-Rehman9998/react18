import React,{useState} from 'react'

const Contact = () => {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        phone:"",
        message:""
    })
    const onChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const onSubmit=(e)=>{
e.preventDefault();

    }
  return (
    <form onSubmit={onSubmit}>    <div className='d-flex justify-content-center align-items-center flex-column'>
           <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name:</label>
  <input type="text" name='name' value={formData.name} onChange={onChange}  class="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email:</label>
  <input type="email" name='email' value={formData.email} onChange={onChange} class="form-control" id="exampleFormControlInput1" placeholder="Enter your email"/>
</div>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone:</label>
  <input type="number" name='phone' value={formData.phone} onChange={onChange} class="form-control" id="exampleFormControlInput1" placeholder="Enter your phone"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea  class="form-control" name='message' onChange={onChange} value={formData.message} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
    <button className='btn btn-primary'>Submit</button>
    </div>
    </form>

  )
}

export default Contact
