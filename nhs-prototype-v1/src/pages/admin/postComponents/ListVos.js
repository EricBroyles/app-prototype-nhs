import React, { Fragment, useEffect, useState} from "react"
import EventSignUpCard from "../../../components/Cards/EventSignUpCard";
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
        <div className="movie-container" >
        {vos.map(vo => (
            <EventSignUpCard key={vo.vo_id} 
                    table={[
                        {beginTime: "9 am", endTime: "10 am", date: "02/02/2222", location: "HSE hs", spots: 4},
                        {beginTime: "10 am", endTime: "11 am", date: "02/02/2222", location: "HSE hs", spots: 4},

                    ]}
                        
                    
                    title={vo.title}
                    sponsor=" some name of Sponor"
                    description={vo.description}
                    contacts={{email: "email@email.com",phone: "1111-111-1111" }}
                />
        ))}
        </div> 
            <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Date</th>
        <th>Time</th>
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
                <td>{vo.time}</td>
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