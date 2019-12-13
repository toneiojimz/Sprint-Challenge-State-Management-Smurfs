import React, {useState} from 'react';
import { connect } from "react-redux";
import { newSmu }  from "../actions/smurfAction"

const NewSmurf = props => {
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
            <label>Name
            <input
                type= "text"
                name="name"
                id= "smurfname"
                onChange={handleChanges}   
                placeholder="name"
                value= {smurf.name}
            />
            </label>
            <label>Age
            <input
                type= "text"
                name="age"
                id= "smurfage"
                onChange={handleChanges}   
                placeholder="age"
                value= {smurf.age}
            />
            </label>
            <label>Height
            <input
                type= "text"
                name="height"
                id= "smurfheight"
                onChange={handleChanges}   
                placeholder="height"
                value= {smurf.height}
            />
            </label>
            <button onClick={values}> Add New Smurf </button>
        </form>
    );
};

export default connect (
    null,
    {newSmu}
)(NewSmurf);