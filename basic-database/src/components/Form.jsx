

const Form = ({formData,setFormData,formArray,setFormArray}) => {
    const handleChange = (e)=>{
        // setFormData({...formData,[ e.target.name]:e.target.value}) 
        setFormData((prevValue)=> ({...prevValue, [e.target.name]:e.target.value}))
    }

    const handleClick= ()=>{
        const newFormData= {...formData, id:Date.now()}
        setFormArray((prevList)=>([...prevList, newFormData]))
    }
  return (
    <>
        <div className='form-floating mb-4'>
            <input onChange={handleChange} type="text" className="form-control" name='nameSurname' value={formData.nameSurname} id="form-control2" placeholder="User Name" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <label htmlFor="form-control2">Name Surname</label>
        </div>
        <div className='form-floating mb-4'>
            <input onChange={handleChange} type="text" className="form-control" name='mail' value={formData.mail} id="form-control" placeholder="E-mail" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <label htmlFor="form-control">Mail</label>
        </div>
        <div className="form-floating mb-4">
            <textarea onChange={handleChange} className="form-control" name='messages' value={formData.messages} placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"100px"}}></textarea>
            <label htmlFor="floatingTextarea2">Comments</label>
        </div>
        <button className='btn btn-danger float-end' onClick={handleClick}>Send</button>
    </>
  )
}

export default Form
