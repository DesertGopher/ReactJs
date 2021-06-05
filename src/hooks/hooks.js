import React, {Component, useContext, useEffect, useState} from 'react'
import {MyContext} from '../index'

export default function HookTest(props){
    const [count, setCount] = useState(props.defaultCount);

    const color = useContext(MyContext);

    React.useEffect(()=>
    {
        console.log('Hello')

        return () =>{
            console.log('clean')
        }
    },[])

    return(
        <div>
            Счётчик: {count}
            <button onClick={()=>{setCount(props.defaultCount)}}>Сброс</button>
            <button onClick={()=>{setCount(prevCount=>prevCount+1)}}>+</button>
            <button onClick={()=>{setCount(prevCount=>prevCount-1)}}>-</button>
        </div>
    )
}

export class HookClass extends Component{
    constructor(props){
        super(props);
        this.state ={
        title: 'Test title',
        count: 0,
        value: 'text'
         };
         this.updateStates = this.updateStates.bind(this);
    }

    updateValues = {
        title: 'New title',
        value: 'New text'
    };

    updateStates(){
        this.setState((prevState) => {
            return {...prevState, ...this.updateValues};
        });
    }

    render(){
        return(
            <div>
                <hr/>
                {this.state.title}
                <button onClick = {() => {
                    this.updateStates();
                }}
                >
                Click
                </button>
            </div>
        )
    }
}
