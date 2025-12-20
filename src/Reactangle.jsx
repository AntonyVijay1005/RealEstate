import React from "react";
import room1 from './assets/room3.jpeg';
const Reactangle=()=>{
    return(
        // <div className="container" style={{marginTop:"10px"}}>
        //     <div className="row">
        //     <div className="col-xl-3 col-md-4 col-sm-5">
        //         <p>Red</p>
        //          <div className="m-3" style={{height:"100px",width:"200px",backgroundColor:"red"}}>

        //    </div>
           
        //     </div>
        //     <div className="col-xl-3 col-md-4 col-sm-5">
        //         <p>blue</p>
        //         <div className="m-3" style={{height:"100px",width:"200px",backgroundColor:"blue"}} >

        //    </div>
        //     </div>

        //     <div className="col-xl-3 col-md-4 col-sm-5">
        //         <p>yellow</p>
        //         <div className="m-3" style={{height:"100px",width:"200px",backgroundColor:"yellow"}}>

        //    </div>
        //     </div>
            
        //     <div className="col-xl-3 col-md-4 col-sm-5">
        //         <p>orange</p>

        //           <div className="m-3" style={{height:"100px",width:"200px",backgroundColor:"orange"}}>

        //    </div>
        //     </div>
           
           

        //     </div>
          
        // </div>
       <div className="container">
        <div className="row m-5">
          
          <div className="col-md-6">
             <img src={room1} class="img-fluid"  alt="" />
          </div>

          <div className="col-md-6" style={{height:"380px",width:"600px",backgroundColor:"orange"}}>

          </div>

        </div>
       
       </div>
    )
}

export default Reactangle;