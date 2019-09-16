import React, { Component } from 'react';


class AddCitate extends Component {
    state = {
        title: null,
        text: null,
        author: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addCitate(this.state);
    }
    render() {
        return (
            <div>
                <div className="container ">
                    <form onSubmit={this.handleSubmit}>
                        <label className="font-weight-bold pt-5" htmlFor="title ">Title:</label>
                        <input className=" col-12" type="text" id="title" onChange={this.handleChange} />
                        <label className="font-weight-bold pt-5" htmlFor="title ">Quote:</label>
                        <input className=" col-12" type="text" id="text" onChange={this.handleChange} />
                        <label className="font-weight-bold pt-5" htmlFor="title ">Author:</label>
                        <input className=" col-12" type="text" id="author" onChange={this.handleChange} />
                        <button className="col-12 btn btn-primary mb-5 mt-5">Add Quote</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddCitate;