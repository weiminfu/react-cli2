import React, {Component} from 'react';
import {connect} from 'react-redux';

/*antd*/
// LocaleProvider:国际化组件，目的是把组件汉化
import {LocaleProvider,DatePicker,Icon,Button,Calendar} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn'; //让日历的星期也变成中文

import '../../static/css/antd.css';

function mapStateToProps(state) {
	return {};
}

class Home extends Component {
	constructor(props, context) {
		super(props, context);
		
		this.state = {
			loading:false
		};
		
	}
	
	render() {
		// 只要LocaleProvider包含的组件都是被汉化过的
		return (
			<LocaleProvider locale={zh_CN}>
				<div>
					<div style={{width:'300px',height:'200px',margin:'10px'}}>
						<Icon type="zhihu" style={{
							fontSize:'22px',
							color:'red'
						}} />
						<Button type='danger' icon='search' loading={this.state.loading} size={"large"} onClick={(ev)=>{
							this.setState({
								loading:true
							});
							setTimeout(()=>{
								this.setState({
									loading:false
								});
							},3000);
						}}>提交</Button>
						<Calendar></Calendar>
						
					</div>
				</div>
			</LocaleProvider>
		);
	}
}

export default connect(
	mapStateToProps,
)(Home);