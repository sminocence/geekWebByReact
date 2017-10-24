import React,{Component} from 'react';
import logoImg from './img/logo.png';

class Header extends Component{

    constructor(){
        super();
        this.handleAnchorClick = this.handleAnchorClick.bind(this);
    }

    handleAnchorClick(anchorName){
        if(anchorName){
            let anchorElement = document.getElementById(anchorName);
            if(anchorElement){
                anchorElement.scrollIntoView();
                console.log(anchorName);
            }
        }
    }

    render(){
            return(
                <div id="Logonav" className="Logonav">
                    <a href="#Home_describe"><img src={logoImg} /></a>
                    <ul className="nav">
                        <li><a onClick={() => this.handleAnchorClick('Home_describe')}>工作室简介</a></li>
                        <li><a onClick={ () => this.handleAnchorClick('member_describe')}>成员介绍</a></li>
                        <li><a onClick={ () => this.handleAnchorClick('graduate_go')}>毕业去向</a></li>
                        <li><a onClick={() => this.handleAnchorClick('join_us')}>加入我们</a></li>
                    </ul>
                </div>
            );
        }
    }

export default Header;