import React, { Fragment, useEffect, useState} from "react"
import EditVo from "./EditVo"


const ListVos= ()=>{

    const [vos,setVos]=useState([]);

    //delete function
    const deleteVo= async(id) =>{
        try {
            const deleteVo=await fetch(`http://localhost:5000/vo/${id}`, {
                method: "DELETE"
            })

            setVos(vos.filter(vo=> vo.vo_id !==id))
        } catch (error) {
            console.error(error.message)
        }
    }


    const getVos= async()=>{
        try {
            const response= await fetch("http://localhost:5000/vo")
            const jsonData= await response.json()

            setVos(jsonData)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getVos();
    }, []);

    return(
        <Fragment>
            <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Date</th>
        <th>Start Time</th>
        <th>End Time</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {/*<tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr> */}
        {vos.map(vo => (
            <tr key={vo.vo_id}>
                <td>{vo.title}</td>
                <td>{vo.description}</td>
                <td>{vo.date}</td>
                <td>{vo.starttime}</td>
                <td>{vo.endtime}</td>
                <td><EditVo vo={vo}/></td>
                <td><button className="btn btn-danger" onClick={()=> deleteVo(vo.vo_id)}>Delete</button></td>
            </tr>
        ))}
      
    </tbody>
  </table>
        </Fragment>
        
    )
}

export default ListVos;