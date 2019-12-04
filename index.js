import React from "react";
import ReactDOM from "react-dom";
// import { Timer } from "./components/timer";


const Header=()=>{
    return(
        <div>
        <table border='1'>
            <tr>
                <th>detail</th>
                <th>deadline</th>
                <th>is_important</th>
            </tr>
            </table>
            </div>
    )
    
}
const Line=(props)=>{
    return(
    <div>
        <table border='1'>
        <tr>
            <td>{props.line.detail}</td>
            <td>{props.line.deadline}</td>
            <td>{props.line.is_important}</td>
            <td>{props.line.done}</td>
        </tr>
    </table>
        </div>

    )
    
}
const Todo=(props)=>{
    return(
        props.my_details.map(line =><Todo  line={line}/>)
    )
}
const App = () => {
    const my_details = [
        {
            detail: "sara",
            deadline: "1/2/2011",
            is_important: "yes",
            done: "no"
        },
        {
            detail: "soijoi",
            deadline: "2/8/2019",
            is_important: "no",
            done: "yes"
        },
        {
            detail: "frdu",
            deadline: "6/5/2010",
            is_important: "yes",
            done: "no"
        },
        {
            detail: "gdchtfdik",
            deadline: "5/8/2000",
            is_important: "yes",
            done: "yes"
        }
        
    ];
    return (
        <div style={{margin:'10%'}}>
        <br/>
        <br/>
            <h1>My details</h1>
            <br/>
            <Header/>
            <Todo my_details={my_details}/>
       
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById("root"));



