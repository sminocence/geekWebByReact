import React,{Component} from 'react';
import introImg from '../img/introImg.jpg';
import Header from './header/Header';
class WorkplaceIntro extends Component{
    render(){
        return(               
            <div className="introWords">
                <img src={introImg} className="introImg"/>
                <p className="Homefont">
                    "极客网"工作室（原校当网）成立于2007年，是在经济管理学院实验中心指导下的进行系统设计、
                    网站开发及运营的团队，其工作室位于经管学院2306室。 "极客网"多年来培养了一大批IT人才，
                    设计开发出许多优秀的项目。其下设美工、Web前台、Web后台、网站运营四个小组，主要学习和运
                    用PS+HTML+ CSS+JS+Java+Mysql、Linux+Apache+Mysql+PHP（LAMP）以及Android手机开发
                    等技术。成员毕业后，有90%就业于腾讯、阿里巴巴、 百度、华为等知名企业。极客网在老师和同
                    学的共同努力下，不断发展和壮大，欢迎有兴趣和志向的同学积极加入我们，共创美好未来!
                </p>
            </div>
        );
    }
}
export default WorkplaceIntro;