import React,{Component} from 'react';
import QRcode from '../../img/QRcode.png';
class JoinUs extends Component{

    render(){
        return(
            <div className="joinus_content">
                <div className="joinus_Lcontent">
                    <form method="post" id="join_form">
                        <ul>
                            <li>
                                <span className="join_info">姓名</span> 
                                <input type="text" className="text" id="userName" name="userName" placeholder="请输入你的真实姓名"/>
                                <span className="spinfo" id="name_info"></span>
                            </li>
                            <li>
                                <span className="join_info">学号</span>
                                <input type="text" className="text" id="userId" name="userId" placeholder="请输入你的学号"/>
                                <span className="spinfo" id="id_info"></span>
                            </li>
                            <li>
                                <span className="join_info">电话</span>
                                <input type="text" className="text" id="userPhone" name="userPhone" placeholder="请输入你的电话号码"/>
                                <span className="spinfo" id="phone_info"></span>
                            </li>
                            <li>
                                <span className="join_info">邮箱</span>
                                <input type="text" className="text" id="userEmail" name="userEmail" placeholder="请输入你的邮箱地址"/>
                                <span className="spinfo" id="email_info"></span>
                            </li>
                        </ul>   
                        <div className="submit">
                            <input type="button" value="提交" className="sub" id="submit" />
                            <input type="reset" value="清除" className="sub" id="reset" />
                        </div>
                    </form>
                </div>
                <div className="joinus_Rigcontent">
                    <a href="https://jq.qq.com/?_wv=1027&k=45M5y5b">
                        <img src={QRcode} />
                    </a>
                    <p className="joinus_code">扫描二维码加入我们</p>
                </div>               
            </div>
        );
    }
}
export default JoinUs;