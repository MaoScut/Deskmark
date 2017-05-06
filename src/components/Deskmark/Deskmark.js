import React from 'react';
//import styles from './App.css';
import List from '../List/index'
class Deskmark extends React.Component{
	render(){
		const items = [
	{
		
		"id": "00000",
		"title": "hello0",
		"content": "hello world0",
		"time": "2017/5/6"
	
	},
	{
		"id": "00001",
		"title": "hello1",
		"content": "hello world1",
		"time": "2017/5/6"
	},
	{
		"id": "00002",
		"title": "hello2",
		"content": "hello world2",
		"time": "2017/5/6"
	}];
	return(
		<section>
			<div>
				<div>
					<List items={items}/>
				</div>
			</div>
		</section>
		)
	
	//return <p>aaa</p>
} 
}

export default Deskmark;