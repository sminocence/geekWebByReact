import React,{Component} from 'react';
import MemberImg from './MemberImg';
import MemberIntro from './MemberIntro';
import gaox from '../../img/1.jpg';
import huangj from '../../img/2.jpg';
import liuq from '../../img/3.jpg';
import zengqz from '../../img/4.jpg';

class Member extends Component{
    // constructor(props){
    //     super(props);
    //     // this.state = {
    //     //     names:[],
    //     // }
    // }
    // componentDidMount(){

    // }

    // componentWillUnmount(){

    // }

    render(){
        return(
            <div className="member_photos">
                <li className="member_photo"> 
                    <MemberImg name={gaox} />
                    <MemberIntro name={this.props.names[0]} />
                </li>
                <li className="member_photo"> 
                    <MemberImg name={huangj} />
                    <MemberIntro name={this.props.names[1]} />
                </li>
                <li className="member_photo"> 
                    <MemberImg name={liuq} />
                    <MemberIntro name={this.props.names[2]} />
                </li>
                <li className="member_photo"> 
                    <MemberImg name={zengqz} />
                    <MemberIntro name={this.props.names[3]} />
                </li>
            </div>
        );
    }
}

export default Member;