import React, {Fragment, useState} from "react";

const EditVo= ({vo}) =>{
    const[title, setTitle]=useState(vo.title); 
    const[description, setDescription]=useState(vo.description);   
    const[date, setDate]=useState(vo.date);   
    const[starttime, setsTime]=useState(vo.time);  
       


    //description function
const updateDescription=async(e)=>{
    e.preventDefault();
    try {
        const body={title, description, date, starttime}
        const response= await fetch(`http://localhost:5000/vo/${vo.vo_id}`,{
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })

        window.location="/admin/addVo"
    } catch (error) {
        console.error(error.message)
    }
}

    return (
       <Fragment>
          
<button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${vo.vo_id}`}>
  Edit
</button>


<div class="modal" id={`id${vo.vo_id}`} onClick={()=> setDescription(vo.description)}>
  <div class="modal-dialog">
    <div class="modal-content">

      
      <div class="modal-header">
        <h4 class="modal-title">Edit Todo</h4>
        <button 
            type="button" 
            class="close"
            data-dismiss="modal" 
            onClick={()=> setDescription(vo.description)}
        >
        &times;
        </button>
      </div>

      
      <div class="modal-body">
        <input type="text" className="formControl" value={title} onChange={e => setTitle(e.target.value)}></input>
        <input type="text" className="formControl" value={description} onChange={e => setDescription(e.target.value)}></input>
        <input type="text" className="formControl" value={date} onChange={e => setDate(e.target.value)}></input>
        <input type="text" className="formControl" value={starttime} onChange={e => setsTime(e.target.value)}></input>
      </div>

      
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={e =>updateDescription(e)}>Edit</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={()=> setDescription(vo.description)}>Close</button>
      </div>

    </div>
  </div>
</div>
       </Fragment>
    )
}

export default EditVo;
