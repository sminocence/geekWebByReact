import React,{Component} from 'react';

class Separate extends Component{

    // static defaultProps = {
    //     dividerTitle: '',
    // }
    render(){
        return(
            <div className="separate">
                <div className="sectionDivider">
                    <h2 id="servicestitle">{this.props.dividerTitle}</h2>
                    <a id="portfolio" className="sroll"></a>
                </div>
            </div> 
        );
    }
}
export default Separate;