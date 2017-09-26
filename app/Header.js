import React,{Component} from 'react';
import logoImg from './img/logo.png';

class Header extends Component{
     render(){
            return(
                <div id="Logonav" className="Logonav">
                    <a href="#pictrue"><img src={logoImg} /></a>
                    <ul className="nav">
                        <li><a href="#Home_describe">工作室简介</a></li>
                        <li><a href="#member_describe">成员介绍</a></li>
                        <li><a href="#graduate_go">毕业去向</a></li>
                        <li><a href="#join_us">加入我们</a></li>
                    </ul>
                </div>
            );
        }
    }

export default Header;