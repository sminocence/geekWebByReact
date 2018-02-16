import React,{Component} from 'react';
import MemberImg from './MemberImg';
import MemberIntro from './MemberIntro';
import gaox from '../../img/1.jpg';
import huangj from '../../img/2.jpg';
import liuq from '../../img/3.jpg';
import zengqz from '../../img/4.jpg';
import Header from '../header/Header';
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
                <Header />
                <li className="member_photo"> 
                    <MemberImg name={gaox} />
                </li>
                <li className="member_photo"> 
                    <MemberImg name={huangj} />
                </li>
                <li className="member_photo"> 
                    <MemberImg name={liuq} />
                </li>
                <li className="member_photo"> 
                    <MemberImg name={zengqz} />
                </li>
            </div>
        );
    }
}

export default Member;