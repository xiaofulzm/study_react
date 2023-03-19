import React, { Component } from 'react'
import {nanoid} from 'nanoid';
import { connect } from 'react-redux';
import { personAction } from  "../../../../redux/actions/person.js";

class Person extends Component {

    addPerson=()=>{
        const name = this.name.value;
        const age = this.age.value;
        const personObj = {id:nanoid(),name,age};
        this.props.add(personObj);
        this.name.value ='';
        this.age.value = '';
        console.log(personObj);
    }

  render() {
    return (
      <div>
         person... 和{this.props.he}
         <input ref={c=>this.name =c} type="text" placehold="输入名字" ></input>
         <input ref={c=>this.age =c} type="text" placehold="输入年龄" ></input>
         <button onClick={this.addPerson} >添加</button>
         <ul>
             {
                 this.props.personList.map(p=>{
                     return <li key={p.id}>{p.name}---{p.age}</li>
                 })
             }
         </ul>
      </div>
    )
  }
}

export default connect(
    state=>({personList:state.rens,he:state.he}),
    {
        add:personAction
    }
)(Person)