import React, {  useState } from 'react'
import "./Table.css"



const Table = ({ isVisible, setVisible,data, setData , setcurrentVideo}) => {

 
    // data.map((x)=>x.url)

    const selectVideo=(challa)=>{
        
        const selected=data.filter(x=>x.id===challa)
        setcurrentVideo(selected[0])
         setVisible(true)
       

    }
    


    return (
        <div class="parent">

            {data.map(x => {


                return (<>
                    <div id={x.id} class="items"onClick={() =>selectVideo(x.id)}>
                        {x.title}
                        <img width="100" height="100" src={x.img_url}></img>
                    </div>
                    </>)
                           }
            )
            }
        </div>
    )
}

export default Table
