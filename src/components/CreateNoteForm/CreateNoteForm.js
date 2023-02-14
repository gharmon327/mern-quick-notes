import { Component } from "react";


export default class NewNoteForm extends Component{

    state = {
        text: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.text]: event.target.value,
        })
        console.log(this.state)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert('submitted')
    }

    render(){
        return (
            <div className="form-container">
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <label>Text</label>
                    <input 
                        type='text'
                        name='text'
                        onChange={this.handleChange}
                        required
                    />
                    <button type="submit">Create Note</button>
                </form>
                <p className="error-message">{this.state.error}</p>
            </div>
        )
    }
}