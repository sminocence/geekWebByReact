import React,{Component} from 'react';
import Header from '../header/Header'
import Graduate from './graduate';
class GraduateBox extends Component{
    render(){
        return(
            <div>
                <Header />
                <div className="graduateBox">
                    <Graduate />
                    <Graduate />
                    <Graduate />
                </div>
            </div>
        );
    }
}
export default GraduateBox;