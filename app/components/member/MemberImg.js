import React,{Component} from 'react';

class MemberImg extends Component{
    render(){
        return(
            <img src={this.props.name} className="memberImg"/>
        );    
    }
}

export default MemberImg;