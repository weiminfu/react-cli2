import React from 'react';
import '../static/css/banner.css'

class Banner extends React.Component {
	// 组件的属性不可更改，但是可以设置默认值
	static defaultProps = {
		data: [],
		interval: 3000,
		step: 1,
		speed: 300,
		style: {}
	};
	
	constructor(props) {
		super(props);
		
		// 初始化状态
		let {step, speed} = this.props;
		this.state = {
			step,
			speed
		};
		
	}
	
	componentWillMount() {
		// 数据克隆
		let {data} = this.props;
		let cloneData = data.slice(0);
		cloneData.push(data[0]);
		cloneData.unshift(data[data.length - 1]);
		this.cloneData = cloneData;
	}
	
	componentDidMount() {
		// 开启自动轮播
		let {interval} = this.props;
		this.autoTimer = setInterval(this.moveRight, interval);
	}
	
	componentWillUpdate(nextProps, nextState, nextContext) {
		// 向右边界判断：在重新渲染之前（切换之前），如果当前最新修改的
		// step值已经大于最大的索引（克隆的最后一张），说明不能再继续向右走了，我们应该让
		// 其“立即”（无动画）回到真实的第一张（step=1）
		if (nextState.step > this.cloneData.length - 1) {
			this.setState({
				step: 1,
				speed: 0
			})
		}
		
		// 向左边界判断：
		// 如果当前最新修改的索引已经小于0，说明不能再往左走了，
		// 我们让其立即回到倒数第二张图片的位置，（真实的最后一张图片），step=cloneData.length-2
		if (nextState.step<0){
			this.setState({
				step:this.cloneData.length-2,
				speed:0
			})
		}
	}
	
	componentDidUpdate(prevProps, prevState, snapshot) {
		// 向右边界判断：立即回到第一张后，我们应该让其运动到真实的第二张
		let {step, speed} = this.state;
		if (step === 1 && speed === 0){
			// 解决transition动画的bug问题：把任务放到等待队列
			let delayTimer=setTimeout(()=>{
				clearTimeout(delayTimer);
				this.setState({
					step:step+1,
					speed:this.props.speed
				})
			},0);
		}
		
		// 向左边界判断：立即回到倒数第二张后，我们应该让其运动一张到倒数第三张
		if (step===this.cloneData.length-2 && speed===0){
			let delayTimer=setTimeout(()=>{
				clearTimeout(delayTimer);
				this.setState({
					step:step-1,
					speed:this.props.speed
				})
			},0);
		}
	}
	
	render() {
		let {data} = this.props;
		let {cloneData} = this;
		if (data.length === 0) return;
		
		// 计算wrapper的样式
		let {step, speed} = this.state;
		let wrapperStyle = {
			width: `${cloneData.length * 1000}px`,
			transform: `translateX(${-step * 1000}px)`,
			transition: `transform ${speed}ms`
		};
		
		return (
			<div className='container' onMouseEnter={this.movePause} onMouseLeave={this.movePlay} onClick={this.handleClick}>
				<ul className='wrapper' style={wrapperStyle} onTransitionEnd={()=>{
					
					// 当wrapper切换动画完成，说明切换完成，再去执行下一次切换任务
					this.isRun=false;
				}}>
					{cloneData.map((item, index) => {
						let {pic, title} = item;
						return <li key={index}><img src={pic} alt={title}/></li>
					})}
				</ul>
				<ul className='focus'>
					{data.map((item, index) => {
						/*焦点对齐：图片索引减去1就是焦点选中项对应的索引
						* 特殊的：如果图片索引是零，让最后一个焦点选中；如果图片索引是最大，让第一个焦点选中
						* */
						let temIndex=step-1;
						if (step===0){
							temIndex=data.length-1;
						}
						if (step===cloneData.length-1){
							temIndex=0;
						}
						return <li key={index} className={index===temIndex?'active':''}></li>
					})}
				</ul>
				<a href="javascript:;" className='arrow arrowLeft'></a>
				<a href="javascript:;" className='arrow arrowRight'></a>
			</div>
		);
	}
	
	// 向右切换：自动轮播或者点击右切换按钮
	moveRight = () => {
		this.setState({
			step: this.state.step + 1
		})
	};
	
	//自动轮播的暂停和开启
	movePause=()=>clearInterval(this.autoTimer);
	movePlay=()=>this.autoTimer=setInterval(this.moveRight,this.props.interval);
	
	// 实现左右箭头切换
	handleClick=ev=>{
		let target=ev.target;
		let tarTag=target.tagName;
		let tarClass=target.className;
		
		// 左右切换
		if (tarTag==='A' && /(^| +)arrow( +|$)/.test(tarClass)) {
			// 防止过快点击
			if (this.isRun) return;
			this.isRun=true;
			// right
			if (tarClass.indexOf('arrowRight')>=0){
				this.moveRight();
				return;
			}
			// left
			this.setState({
				step:this.state.step-1
			});
			return;
		}
	};
	
}

export default Banner;