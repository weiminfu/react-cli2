import React from 'react';
import ReactDOM from 'react-dom';
import Vote from "./component/27.Vote";

let root = document.getElementById('root');
ReactDOM.render(<div>
	<Vote title={'德国VS美国，德国必胜！'}/>
	<Vote title={'手机VS电脑，手机最好！'}>
		{/*双闭合调取组件，就是为了传递子元素的*/}
		<p>
			在跨界中坚守自我，看设计学者孙捷如何看待珠宝产业创新升级与转型
			设计即生活，跟随创意设计师颜
		</p>
		<p>
			喻红艺术家
			当代著名画家，中央美术学院油画系教授。其油画作品多次参加国内外的重要画展。一直是为国内外艺术界和学术界所重视和进行研究的女性艺术家。
		</p>
	</Vote>
</div>,root);
