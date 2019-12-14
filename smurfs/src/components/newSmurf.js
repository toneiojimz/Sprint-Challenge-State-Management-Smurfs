import React, {useState} from 'react';
import { connect } from "react-redux";
import { newSmu }  from "../actions/smurfAction"

const AddSmurf = props => {
    const[smurf, setSmurf ] = useState({name: "", age:"", height:""})

    
    
    const handleChanges = e => {
        setSmurf({...smurf, [e.target.name]: e.target.value})}

    const values = e => {
        e.preventDefault();
        props.newSmu(smurf);
        setSmurf({
            name:"",
            age: "",
            height: ""
        });
    };

    return (
        <form onSubmit={values}>
            
            <input
                type= "text"
                name="name"
                id= "smurfname"
                onChange={handleChanges}   
                value= {smurf.name}
                placeholder="name"
            />
            <input
                type= "text"
                name="age"
                id= "smurfage"
                onChange={handleChanges}   
                value= {smurf.age}
                placeholder="age"   
            />
            <input
                type= "text"
                name="height"
                id= "smurfheight"
                onChange={handleChanges}   
                placeholder="height"
                value= {smurf.height}
            />  
            <button onClick={values}> Add New Smurf </button>
        </form>
    );
};

export default connect (
    null,
    {newSmu}
)(AddSmurf);