
import React, {Fragment, useState} from "react"


const InputVo= () => {

    const[title, setTitle]=useState("Title"); 
    const[description, setDescription]=useState("Description");   
    const[date, setDate]=useState("Date");   
    const[starttime, setsTime]=useState("Start Time");  
    const[endtime, seteTime]=useState("End Time");           

    

    const onSubmitForm =async(e)=>{
        e.preventDefault()
        try{
            console.log(title)
            const body={title, description, date, starttime, endtime}
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
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)}/> <br/>
                <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/> <br/>
                <input type="text" className="form-control" value={date} onChange={e => setDate(e.target.value)}/> <br/>
                <input type="text" className="formControl" value={starttime} onChange={e => setsTime(e.target.value)}></input>
                <input type="text" className="formControl" value={endtime} onChange={e => seteTime(e.target.value)}></input> 
                
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    )
    
    
}

export default InputVo;