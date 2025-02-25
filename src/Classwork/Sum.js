import React from 'react'
import { Component } from 'react'

class Sum extends Component {
    constructor() {
        super()
        this.state = { myerror: {} }
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
    add() {
        var docheck = this.dovalidate()
        if (docheck === true) {
            const { txt1, txt2 } = this.state;
            var c = parseInt(txt1) + parseInt(txt2);
            this.setState({ ans: `additon of ${txt1} and ${txt2} is ${c}` });
        }


    }
    doupdtae(e) {
        this.setState({ [e.target.name]: e.target.value })
    }


    render() {
        return (
            <>
                <h1>Additon of Two Number</h1>
                No1:<input type="text" name="txt1" onChange={this.doupdtae.bind(this)}></input>
                <p style={{ color: "red" }}>{this.state.myerror.txt1}</p> {this.state.myerror.txt1}
                No1:<input type="text" name="txt2" onChange={this.doupdtae.bind(this)}></input>
                <p style={{ color: "red" }}>{this.state.myerror.txt2}</p>
                <br />
                <input type="button" value="plus" onClick={this.add.bind(this)}></input>
                <br />
                <p>{this.state.ans}</p>
                <br />
            </>
        )
    }
}
export default Sum;