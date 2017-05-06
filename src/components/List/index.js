import ListItem from '../ListItem';
import React from 'react';

function List ({items}) {
	items = items.map(item=>(<ListItem item={item} key={item.id} />));
	return (
		<div>
			{items}
		</div>
		)
}

export default List;