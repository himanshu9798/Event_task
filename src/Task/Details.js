import React from 'react'
import { Component } from 'react'

class Details extends Component {
    constructor() {
        super()
        this.state = {}
    }
    validate = () => {
        const { name, surname, contact, pass, password, mail } = this.state;

        let errorMessage = "";

        if (!name || !/^[a-zA-Z]+$/.test(name)) {
            errorMessage = "Name should be a non-empty string and contain only letters.";
        } 

        else if (!surname || !/^[a-zA-Z\s]+$/.test(surname)) {
            errorMessage = "Surname should be a non-empty string containing only letters and spaces.";
        }
        
        


        else if (!contact || !/^\d{10}$/.test(contact)) {
            errorMessage = "Contact number should be exactly 10 digits.";
        }


        else if (!pass || pass.length < 8) {
            errorMessage = "Password should be at least 8 characters long.";
        }

        else if (pass !== password) {
            errorMessage = "Password and Confirm Password must match.";
        }


        else if (!mail || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(mail)) {
            errorMessage = "Please enter a valid email address.";
        }

        
        if (errorMessage) {
            this.setState({ error: errorMessage });
        } else {

            this.setState({ error: "" });
            console.log("Form is valid, proceed with submission.");
        }
    };
    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     this.validate();
        
    //   };
    handleSubmit = (event) => {
        event.preventDefault();
        this.validate();
    
        // If no error, display form data
        if (!this.state.error) {
            console.log("Form Data Submitted:", this.state);
            this.setState({ submittedData: { ...this.state } }); // Store the data in the state to display later
        }
    };
    

    update(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(e.target.name)
        console.log(e.target.value)
    }
    render() {
        return (
            <>
                <fieldset style={{ marginLeft: "150px", marginRight: "150px", marginBottom: "10%", padding: "20px" }}>
                    <legend style={{ textAlign: "center", fontSize: "25px", fontWeight: "700", color: "Blue" }}>Personal Information</legend>
                    <form style={{ marginLeft: "220px", paddingLeft: "50px", }}>
                        <table style={{ alignContent: "center" }}>
                            <tr>
                                <td><label>Name:</label></td>
                                <td><input type="text" placeholder='Enter your name' name="name" onChange={this.update.bind(this)}></input></td>
                                <td><label>Surename:</label></td>
                                <td><input type="text" placeholder='Enter your Surname' name="surname" onChange={this.update.bind(this)}></input></td>
                            </tr>
                            <br />
                            <tr>
                                <td><label>Contact No:</label></td>
                                <td><input type="text" placeholder='Enter your Phone number' name="contact" onChange={this.update.bind(this)}></input></td>
                                <td><label>E-mail:</label></td>
                                <td><input type="text" placeholder='Enter your E-mail' name="mail" onChange={this.update.bind(this)}></input></td>
                            </tr>
                            <br />
                            <tr>
                                <td><label>Password:</label></td>
                                <td><input type="text" placeholder='Enter your Password' name="pass" onChange={this.update.bind(this)}></input></td>
                                <td><label>Confirm-Password:</label></td>
                                <td><input type="text" placeholder='Re-Enter your Password' name="password" onChange={this.update.bind(this)}></input></td>
                            </tr>
                            <br></br>
                            <tr>
                                <td><label>Gender: </label></td>
                                <td><input type='radio' name="male" onChange={this.update.bind(this)}></input>male</td>
                                <td><input type='radio' name="male" onChange={this.update.bind(this)}></input>female</td>
                            </tr>
                            <br></br>
                            <tr>
                                <td><label>City:</label></td>
                                <td><select onChange={this.update.bind(this)}>City
                                    <option name="rajkot">Rajkot</option>
                                    <option name="surat">Surat</option>
                                    <option name="ahmdabad">Ahmdabad</option>
                                </select></td>


                            </tr>
                            <br></br>
                            <tr>
                                <td>Hobbies:</td>
                                <td><input type="checkbox" name=" study" value="Study" onChange={this.update.bind(this)}></input>playing</td>
                                <td><input type="checkbox" name=" dance" value="dance" onChange={this.update.bind(this)}></input>Dancing</td>
                                <td><input type="checkbox" name=" sing" value="sing" onChange={this.update.bind(this)}></input>Singing</td>

                            </tr>

                        </table>
                        <br />
                        {this.state.error && <span style={{ color: 'red' }}>{this.state.error}</span>}

                        <br/>
                        <button onClick={this.handleSubmit.bind(this)} style={{ width: "68%", textAlign: "center" }}>Submit Details</button>

                    </form>
                </fieldset>

            </>
        )
    }
}
export default Details;
