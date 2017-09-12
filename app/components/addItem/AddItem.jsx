import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Header2 from '../common/Header'
import PageContent from '../../containers/pageContent/PageContent'

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';

const customContentStyle = {
    width: 300,
    maxWidth: 'none',
};


class AddItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            snackbarOpen: false,
            dialogOpen: false,
            message: '',
            title: null,
            description: null,
            price: null
        };

        this.handleDialogOpen = this.handleDialogOpen.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
    }

    handleDialogOpen() {
        this.setState({dialogOpen: true});
    };

    handleDialogClose() {
        this.setState({dialogOpen: false});
    };

    handleChange(e) {
        const obj = {};
        obj[e.target.id] = e.target.value.trim();
        this.setState(obj);
    };

    handleSubmit() {
        const {title, description, price} = this.state;

        if (!title || !description || !price) {
            this.setState({message: 'Fill all fields !'});
        } else {
            const newItem = {
                title,
                description,
                image: "http://via.placeholder.com/150x150",
                price
            };

            let storage = JSON.parse(localStorage.getItem('newItems')) ? JSON.parse(localStorage.getItem('newItems')) : [];
            storage.push(newItem);
            localStorage.setItem('newItems', JSON.stringify(storage));
            this.setState({message: `New items has been added! Check it on the CATALOGUE page`});
        }
        this.setState({dialogOpen: false});
        this.handleTouchTap();
        console.log(this.state)
    };

    handleTouchTap() {
        this.setState({
            snackbarOpen: true,
        });
    };

    handleRequestClose() {
        this.setState({
            snackbarOpen: false,
        });
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleDialogClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleSubmit}
            />,
        ];

        return (
            <div>
                <Header2 module={'AddNewItem'} />
                <PageContent>
                    <RaisedButton label="Add new item" onClick={this.handleDialogOpen} />
                    <Dialog
                        title="Add New Item"
                        actions={actions}
                        modal={false}
                        open={this.state.dialogOpen}
                        contentStyle={customContentStyle}
                        onRequestClose={this.handleDialogClose}
                    >
                        <TextField
                            hintText="Hint Text"
                            floatingLabelText="Item's Title"
                            fullWidth={true}
                            id="title"
                            onChange={this.handleChange}
                        /><br />
                        <TextField
                            hintText="Description Field"
                            floatingLabelText="Item's Description"
                            multiLine={true}
                            fullWidth={true}
                            id="description"
                            onChange={this.handleChange}
                        /><br />
                        <TextField
                            hintText="$"
                            floatingLabelText="Item's Price"
                            fullWidth={true}
                            id="price"
                            onChange={this.handleChange}
                        /><br />
                    </Dialog>
                    <Snackbar
                        open={this.state.snackbarOpen}
                        message={this.state.message}
                        autoHideDuration={4000}
                        onRequestClose={this.handleRequestClose}
                    />
                </PageContent>
            </div>
        )
    }
}

export default AddItem