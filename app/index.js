import React,{Component} from 'react';
import {render} from 'react-dom';
import Header from './Header';
import Separate from './Separate';
import WorkplaceIntro from './components/WorkplaceIntro';
import Member from './components/member/Member'; 
import './css/Header.css';
import './css/Separate.css';
import './css/introWords.css';
import './css/Member.css';

// const Header = require('./Header.js');
// document.querySelector("#root").appendChild(Header());
class App extends Component{
    render(){
        const names = ["ddg","gerge","ege","ege"];
        return(
            <div>
                <Header />
                <Separate dividerTitle="工作室简介" />
                <WorkplaceIntro />
                <Separate dividerTitle="成员大部队" />
                <Member names={names} />
            </div>
        )
    }
}
render(<App />, document.getElementById('root'));
