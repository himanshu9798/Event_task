import React from 'react'
import {Component} from "react";
class Textvalue extends Component{
    constructor(){
        super()
        this.state={}
    }
    change(e){
        this.setState({[e.target.name]:e.target.value})
        this.setState({txt1:e.target.value})
        
    }
    change1(e){
        this.setState({[e.target.name]:e.target.value})
        this.setState({txt2:e.target.value})
        
    }
    render(){
        return(
            <>
            Textbox:<input type="text" name="txt1" onChange={this.change.bind(this)}></input>
            {this.state.txt1}
            <br/>
            Textbox2:<input type="text" name="txt2" onChange={this.change1.bind(this)}></input>
            {this.state.txt2}
            </>
        )
    }
}
export default Textvalue;