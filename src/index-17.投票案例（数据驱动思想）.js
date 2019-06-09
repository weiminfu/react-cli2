import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types'


class Vote extends React.Component {
	// 组件传递的属性是只读的，我们为其设置默认值和相关规则
	static defaultProps = {};
	static propTypes = {
		title: PropTypes.string.isRequired
		
	};
	
	constructor(props) {
		super(props);
		// init state
		this.state = {
			n:0, // 支持人数
			m:0 // 反对人数
		}
	}
	
	render() {
		let {n,m}=this.state;
		let rate=(n+m)===0?'0%':((n/(n+m)*100).toFixed(2)+'%');
		return <section className='panel panel-default' style={{width: '60%', margin: '20px auto'}}>
			<div className='panel-heading'>
				<h4>{this.props.title}</h4>
			</div>
			<div className='panel-body'>
				支持人数：{n}
				<br/>
				反对人数：{m}
				<br/>
				支持率：{rate}
			</div>
			<div className='panel-footer'>
				<button className='btn btn-success' onClick={this.support}>支持</button>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<button className='btn btn-danger' onClick={this.against}>反对</button>
			</div>
		</section>
	}
	
	/*support(){
		// this:undefined
	}*/
	// 箭头函数写方法，保证this是实例
	support=(ev)=>{
		// ev.stopPropagation();
		this.setState({
			n:this.state.n+1
		})
	};
	against=(ev)=>{
		// ev.stopPropagation();
		this.setState({
			m:this.state.m+1
		})
	}
}

let root = document.getElementById('root');
ReactDOM.render(<div>
	<Vote title={'世界杯小组赛：法国VS秘鲁，法国队必胜！'}></Vote>
	<Vote title={'世界杯小组赛：阿根廷VS德哥，德哥队必胜！'}></Vote>
</div>, root);