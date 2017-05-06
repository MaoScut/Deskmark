import React from 'react';

function ListItem({item}){
	debugger;
	return (
	<a href="#" className="list-group-item">
		<span className="label">
			{item.time}
		</span>
		{item.title}
	</a>
		)
}
export default ListItem;