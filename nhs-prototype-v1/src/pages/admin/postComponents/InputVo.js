
import React, {Fragment, useState} from "react"
import DatePicker from "react-multi-date-picker"
import InputTimes from "./timeInput";


const InputVo= () => {

    const[title, setTitle]=useState("Title"); 
    const[description, setDescription]=useState("Description");   
      
     

    //time Input
    
        const [formFields, setFormFields] = useState([
          {   date: '',
              time: '' }
        ])
      
        const handleFormChange = (event, index) => {
          let data = [...formFields];
          data[index][event.target.name] = event.target.value;
          setFormFields(data);
        }
      
        const submit = (e) => {
          e.preventDefault();
          console.log(formFields)
          console.log(dates)
          console.log(times)
        }
      
        const addFields = () => {
          let object = {
            time: '',
            date: ''
            
          }
      
          setFormFields([...formFields, object])
        }
      
        const removeFields = (index) => {
          let data = [...formFields];
          data.splice(index, 1)
          setFormFields(data)
        }
      
    
    
        const dates=formFields.map(item=>item.date)

        const times=formFields.map(item=>item.time)


    const onSubmitForm =async(e)=>{
        e.preventDefault()
        try{
            console.log(dates)
          
            const body={title, description, dates, times}
            const response =await fetch("http://localhost:5000/vo",
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            window.location="/admin/addVo"
        }catch (err){
            console.error(err.message)
        }
    }

    return(
        <Fragment>
            <h1 className="text-center mt-5"> Vo add Page</h1>
            <form className="mt-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)}/> <br/>
                <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/> <br/>
                <div className="InputTime">
                 <form onSubmit={submit}>
                    {formFields.map((form, index) => {
                    return (
                     <div key={index}>
                        <input
                            
                        name='date'
                        placeholder='Date'
                        onChange={event => handleFormChange(event, index)}
                        value={form.date}
                        />
                         <input
                            
                         name='time'
                         placeholder='Time'
                         onChange={event => handleFormChange(event, index)}
                         value={form.time}
                        />
                         <button onClick={() => removeFields(index)}>Remove</button>
                        </div>
                     )
                 })}
      </form>
      <button type="button" onClick={addFields}>Add More..</button>
      <br />
      <button onClick={submit}>Submit</button>
    </div>
                <br/>
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    )
    
    
}

export default InputVo;