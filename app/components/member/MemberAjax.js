import React,{Component} from 'react';

class MemberAjax extends Component{
    //将请求成员的姓名都放在这个组件当中，
    //然后传递props给Member

    constructor(props){
        super(props);
        this.state ={
            names:[],
        }
    }
    componentDidMount(){
        //模拟后台
        Mock.mock('http://api.com', {
            "user|5-10": [{
                'name': '@cname',   //中文名称
                // 'age|1-100': 100,   //100以内随机整数
                // 'birthday': '@date("yyyy-MM-dd")',  //日期
                // 'city': '@city(true)'   //中国城市
            }]
        });

         //原生ajax方式
        function myajax(url) {
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
                ajax.open("GET", url, true);
                ajax.send(null);
                ajax.onreadystatechange = function() {
                    if (ajax.readyState == 4 && ajax.status == 200) {
                        console.log(ajax.responseText);
                    }
                }
            }
        myajax('http://api.com');

    }

    componentWillUnmount(){

    }

    render(){
        return(

        )
    }
}
