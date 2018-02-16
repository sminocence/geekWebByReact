import React,{Component} from 'react';
import logoImg from '../../img/logo.png';
// import NavLink from './NavLink';
import {Link} from 'react-router-dom';
import '../../css/introWords.css';
class Header extends Component{

    constructor(){
        super();
        // this.handleAnchorClick = this.handleAnchorClick.bind(this);
    }

    // handleAnchorClick(anchorName){
    //     if(anchorName){
    //         let anchorElement = document.getElementById(anchorName);
    //         if(anchorElement){
    //             anchorElement.scrollIntoView();
    //             console.log(anchorName);
    //         }
    //     }
    // }

    render(){
        return(
            <div id="Logonav" className="Logonav">
                <Link to="/homeIntro"><img src={logoImg} className="logoImg"/></Link>
                <ul className="nav">
                    <li><Link to="/homeIntro">工作室简介</Link></li>
                    <li><Link to="/member">成员介绍</Link></li>
                    <li><Link to="/graduate">毕业去向</Link></li>
                    <li><Link to="/joinUs">加入我们</Link></li>
                </ul>  
            </div>
        );
        }
    }

export default Header;