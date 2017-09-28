import React,{Component} from 'react';
import Graduate from './graduate';
class GraduateBox extends Component{
    render(){
        return(
            <div className="graduateBox">
                <Graduate />
                <Graduate />
                <Graduate />
            </div>
        );
    }
}
export default GraduateBox;