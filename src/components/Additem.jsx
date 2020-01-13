import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { TextareaAutosize } from '@material-ui/core';

import { addList, addCard } from '../actions/list.actions';

class AddItemButton extends Component{
    
    state = {
        isFormOpen: false
    }

    openAddForm = () =>{
        this.setState({
            isFormOpen: true
        })
    }

    closeForm = () =>{
        this.setState({
            isFormOpen: false
        })
    }

    handelInputChange = e =>{
        this.setState({
            text: e.target.value
        })
    }

    handleAddList = () =>{
        const { dispatch } = this.props;
        const { text } = this.state;
        if(text){
            this.setState({text: ""})
            dispatch(addList(text))  // dispatch action call to add list item
        }
        return;
    }
    
    handleAddCard = () =>{
        const { dispatch, listId } = this.props;
        const { text } = this.state;
        if(text){
            this.setState({text: ""})
            dispatch(addCard(listId, text))  // dispatch action call to add list item
        }
        return;
    }

    prepareAddButton = () =>{
        const { list } =  this.props;
        const btnText = list ? 'Add another list': 'Add another Card';
        const btnTextOpacity = list ? 1 : 0.5;
        const btnTextColor = list ? 'white' : 'inherit';
        const btnBackGround = list ? 'rgba( 0,0,0,0.20)' : 'inherit';


        return (
            <div 
            onClick={this.openAddForm}
            style={{
                ...styles.addButtonContainer,
                opacity: btnTextOpacity,
                color: btnTextColor,
                backgroundColor: btnBackGround
            }}>
                <Icon>add</Icon>
                <p>{ btnText }</p>
            </div>
        )
    }
    
    renderAddForm = () =>{
        const { list } = this.props;
        const placeholder = list ? 'Enter list title...' : 'Enter new card title...';
        const btnTitle = list ? 'Add List' : 'Add Card';

        return <div>
            <Card style={styles.card}>
                <TextareaAutosize 
                aria-label="formarea" 
                rowsMin={2}
                placeholder={placeholder} 
                autoFocus
                onBlur={this.closeForm}
                onChange={this.handelInputChange}
                style={styles.textArea}
                />
            </Card>
            <div style={styles.buttonGroup}>
                <Button 
                    variant="contained" 
                    style={{color: 'white', backgroundColor: '#2d6f12'}}
                    onMouseDown={list? this.handleAddList: this.handleAddCard}
                > { btnTitle }</Button>
            <Icon style={{marginRight: 10, cursor: 'pointer'}}>close</Icon>
            </div>
        </div>
    }

    render() {
        return this.state.isFormOpen ? this.renderAddForm() : this.prepareAddButton();
    }
}

const styles = {
    card: {
        overflow: 'visible',
        minHeight: 50,
        minWidth: 275,
        margin: 2,
        alignItems: 'center'
    },
    addButtonContainer: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        width: 285,
        boarderRadius: 3,
        paddingLeft: 10,
        height: 36,
    },
    textArea: {
        overflow: 'hidden',
        padding: 5,
        resize: 'none',
        width: '98%',
        border: 'none',
        outline: 'none',
    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'space-between',
    }
}

export default connect() (AddItemButton);
// connect() (AddItemButton) this will provide access to dispatch() in props

// mousedown runs before on blure