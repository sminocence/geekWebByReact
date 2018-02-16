import React,{Component} from 'react';
import {render} from 'react-dom';
import {HashRouter,hashHistory} from 'react-router-dom';
// import routes from './route/routes';
import {Route,IndexRoute,Switch} from 'react-router-dom';
import App from './App';
// import Separate from './components/header/Separate';
import WorkplaceIntro from './components/WorkplaceIntro';
import Member from './components/member/Member'; 
import GraduateBox from './components/graduate/graduateBox';
import JoinUs from './components/joinUs/JoinUs';
import './css/Header.css';
import './css/Separate.css';
import './css/introWords.css';
import './css/Member.css';
import './css/graduate.css';
import './css/joinus.css';

const SliderComponent = () => (
    <Switch>
        <Route exact path='/' component={App} />
        <Route path="/homeIntro" component={App} />
        <Route path="/member" component={Member} />
        <Route path="/graduate" component={GraduateBox} />
        <Route path="/joinUs" component={JoinUs} />
    </Switch>
);
render(<HashRouter history={hashHistory}>
            <SliderComponent />
      </HashRouter>, document.getElementById('root'));
