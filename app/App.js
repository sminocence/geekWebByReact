import React,{Component} from 'react';
import {render} from 'react-dom';
import Header from './components/header/Header';
import Member from './components/member/Member'
import WorkplaceIntro from './components/WorkplaceIntro';
// const Header = require('./Header.js');
// document.querySelector("#root").appendChild(Header());
class App extends Component{

    constructor(){
        super();
        this.state = {
            names:[]
        }
    }
    componentDidMount(){
        var ajax;
        var self = this;
        if (window.XMLHttpRequest) {
            ajax = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            try {
                ajax = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    ajax = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {}
            }
        }
        if (!ajax) {
            window.alert("不能创建XMLHttpRequest对象实例.");
            return false;
        }
        ajax.open("GET", 'http://rapapi.org/mockjs/26610/getInfo?', true);
        ajax.send(null);
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200) {
                var json = JSON.parse(ajax.responseText);
                console.log(json.memberNames);
                self.setState({
                    names:json.memberNames
                });
            }
        }
    }
    render(){ 
        // const names = ["ddg","gerge","ege","ege"];
        const names = this.state.names;
        return(
            <div>
                <Header />
                <WorkplaceIntro />
            </div>
        )
    }
}
export default App;

