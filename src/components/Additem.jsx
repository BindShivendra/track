import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { TextareaAutosize } from '@material-ui/core';
import styled from 'styled-components'


import { addList, addCard } from '../actions/list.actions';

const AddButton = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 3px;
    height: 36px;
    margin-left: 8px;
    padding-left: 10px;
    padding-right: 10px
`
const ButtonGroup = styled.div`
    margin-top: 8px;
    display: flex;
    align-items: center;
    margin-left: 8px;
    justify-content: space-between;
`;
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
            <AddButton style={{
                opacity: btnTextOpacity,
                color: btnTextColor,
                backgroundColor: btnBackGround
            }}
            onClick={this.openAddForm}
            >
                <Icon>add</Icon>
                <p>{ btnText }</p>
            </AddButton>
        )
    }
    
    renderAddForm = () =>{
        const { list } = this.props;
        const placeholder = list ? 'Enter list title...' : 'Enter new card title...';
        const btnTitle = list ? 'Add List' : 'Add Card';

        return <div>
            <Card style={{
                minHeight: 65,
                padding: "6px 8px 2px",
                marginLeft: 8,
                marginRight: 8
                }} 
            >
                <TextareaAutosize 
                aria-label="formarea" 
                rowsMin={2}
                placeholder={placeholder} 
                autoFocus
                onBlur={this.closeForm}
                onChange={this.handelInputChange}
                style={{
                    resize: "none",
                    width: "100%",
                    overflow: "hidden",
                    outline: "none",
                    border: "none"
                  }}
                />
            </Card>
            <ButtonGroup >
                <Button 
                    variant="contained" 
                    style={{color: 'white', backgroundColor: '#2d6f12'}}
                    onMouseDown={list? this.handleAddList: this.handleAddCard}
                > { btnTitle }</Button>
            <Icon style={{marginRight: 10, cursor: 'pointer'}}>close</Icon>
            </ButtonGroup>
        </div>
    }

    render() {
        return this.state.isFormOpen ? this.renderAddForm() : this.prepareAddButton();
    }
}

export default connect() (AddItemButton);
// connect() (AddItemButton) this will provide access to dispatch() in props

// mousedown runs before on blure