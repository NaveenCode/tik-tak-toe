import React from "react";
const Square=(props)=>{
    return(
        <div 
          onClick={props.onClick}
            style={{
                border:"1px solid ",
                height:"80px",
                width:"100%",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
            }} 
            className="square">
            <h1>{props.value}</h1>
        </div>
    )
}
export default Square;