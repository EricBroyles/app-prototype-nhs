import React, { Fragment } from "react"
import InputVo from "./postComponents/InputVo"
import ListVos from "./postComponents/ListVos";


//componets



const AddVo=()=> {
  return (
    
      <div className="container">
        <InputVo/>
        <ListVos/>
      </div>
     
    
  );
}

export default AddVo;