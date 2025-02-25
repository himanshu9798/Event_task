import React from 'react'
import { Component } from 'react'
import './all.css'
class Div extends Component {
    constructor() {
        super()
        this.state = {myerror:{}}
    }
    dovalidate() {
        const { txt1, txt2 } = this.state;
        var isvalid = true;
        var temperr = {}
        if (!txt1) {
            isvalid = false
            temperr.txt1 = "enter No 1"
        }
        if (!txt2) {
            isvalid = false
            temperr.txt2 = "enter No 2"
        }
        this.setState({ myerror: temperr })
        return isvalid
    }
    updatevalue(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    add() {
        var checked = this.dovalidate()
        if (checked === true) {

            const { txt1, txt2 } = this.state;
            var c = parseInt(txt1) / parseInt(txt2);
            this.setState({ ans: `Divison of ${txt1} and ${txt2} is ${c}` });
        }

    }
    render() {
        return (
            <div className="calculator-container">
                <h1>Division</h1>

                <label for="txt1" >No 1:</label>
                <input type="text" name="txt1" onChange={this.updatevalue.bind(this)} />
                <span style={{ color: "red", fontSize:"small",float:"left",marginTop:'-15px'}}>{this.state.myerror.txt1}</span>
                <br /><br/>
                <label for="txt2">No 2:</label>
                <input type="text" name="txt2" onChange={this.updatevalue.bind(this)} />
                <span style={{ color: "red" ,fontSize:"small",float:"left"}}>{this.state.myerror.txt2}</span>

                <br /><br/>

                <input type="button" style={{marginLeft:"90px"}} value="Divide" onClick={this.add.bind(this)} />

                <br />

                <p>{this.state.ans}</p>
            </div>

        )
    }
}
export default Div;