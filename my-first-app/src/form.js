import React, { Component } from 'react';

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            comment:'',
            tutorials:' '
        };
    }

    usernamehandler = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        });
    }
    commenthandler =(event)=>{
        this.setState({
            comment: event.target.value

        })
    }
selecthandler=(event)=>{
    this.setState({
        tutorials:event.target.value
    })

}
submithandler=(event)=>{
alert(`${this.state.username} ${this.state.password} ${this.state.comment} ${this.state.select}`)
}
    render() {
        return (
            <div>
                <form>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.usernamehandler}
                    /><br></br>
                    
                    <label>Password:</label>
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.passwordhandler}
                    /><br></br>
                    <label>Comments:</label>
                    <textarea value={this.state.comment} onChange={this.commenthandler}></textarea>
                 <div>
                        <label>Tutorials:</label>
                        <select value={this.state.tutorials} onChange={this.selecthandler}>
                            <option value="Javascript ">Javascript</option>
                            <option value="React ">React</option>
                            <option value="Angular ">Angular</option>
                            <option value="Graphics ">Graphics</option>
                        </select><br></br>
                        <button value={this.state.submit}>submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
