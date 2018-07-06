import React, { Component } from 'react';

class PhoneInfo extends Component {

    state = {
        editing : false,
        name : '',
        phone: ''
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(this.state !== nextState){
            return true;
        }
        return this.props.info !== nextProps.info;
    }
    
    handleRemove = () => {
        const {info,onRemove} = this.props;
        onRemove(info.id);
    }

    handleToggleEdit = () => {
        //turne -> false
            //onUpdate
        //false -> ture
            //state -> info value add
        const {info, onUpdate} =this.props;
        if(this.state.editing){
            onUpdate(info.id, {
                name : this.state.name,
                phone : this.state.phone
            });
        }else{
            this.setState({
                name : info.name,
                phone : info.phone,
            });
        }
        this.setState({
            editing : !this.state.editing,
        });
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    render() {
        const {name, phone} = this.props.info;
        const {editing} =this.state;
        const style = {
            border : '1px solid black',
            padding : '8px',
            margin: '8px'
        };
        console.log(name);
        return (
            <div style ={style}>
                {
                    editing ? (
                        <div>
                            <div><input name ="name" onChange = {this.handleChange} value ={this.state.name}/></div>
                            <div><input name ="phone" onChange = {this.handleChange} value={this.state.phone}/></div>
                        </div>
                    ) : (
                        <div>
                            <div><b>{name}</b></div>
                            <div>{phone}</div>
                        </div>
                    )
                }
                <button onClick={this.handleRemove}>Remove</button>
                <button onClick= {this.handleToggleEdit}>
                    {editing ? 'confirm':'edit'}
                </button>
            </div>
        );
    }
}

export default PhoneInfo;