import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

class Temp extends React.Component{
	constructor(){
		super();
		this.state={
			text:'好好学习'
		}
	}
	
	componentDidMount() {
		setTimeout(()=>{
			this.setState({text:'天天向上'});
		},1000);
	}
	
	render() {
		let {text}=this.state;
		return <section className='panel panel-default'>
			<div className='panel-heading'>
				<input type="text" className='form-control' value={text} onChange={(ev)=>{
					// 在文本框的onChange中修改状态信息：实现的是视图改变数据
					this.setState({
						text:ev.target.value
					})
				}}/>
			</div>
			<div className='panel-body'>
				{text}
			</div>
		</section>
	}
}

let root = document.getElementById('root');
ReactDOM.render(<Temp></Temp>, root);