import React from "react";

class FeaturedNote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        }

        this.titleMaxlength = 50;

        this.onAddTitleEventHandler = this.onAddTitleEventHandler.bind(this);
        this.onAddDescEventHandler = this.onAddDescEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onAddTitleEventHandler (event) {
        const inputTitle = event.target.value;

        if (inputTitle.length <= this.titleMaxlength) {
            this.setState({ title: inputTitle })
        }
    }

    onAddDescEventHandler (event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    onSubmitEventHandler (event) {
        event.preventDefault();
        this.props.addNote(this.state)

        this.setState({title: '', body: ''})
    }

    render() {
        return (
            <div className="SideBar-item__featurenote">
                <h1>Add Note</h1>
                <form onSubmit={this.onSubmitEventHandler}>
                    <div className="SideBar-item__featurenote__counter">Limit Character: {this.titleMaxlength - this.state.title.length}</div>
                    <input className="SideBar-item__featurenote_inputtitle" type="text" value={this.state.title} onChange={this.onAddTitleEventHandler} placeholder="Type Title..." />
                    <textarea className="SideBar-item__featurenote_inputdesc" value={this.state.body} onChange={this.onAddDescEventHandler} placeholder="Type Description... "></textarea>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default FeaturedNote;