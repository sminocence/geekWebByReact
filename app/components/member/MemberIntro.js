import React,{Component} from 'react';

class MemberIntro extends Component{
    render(){
        return(
            <p>{this.props.name}</p>
        );
    }
}

export default MemberIntro;