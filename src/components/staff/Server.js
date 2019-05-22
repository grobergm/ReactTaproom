import React from 'react';
import kegroom from '../../img/admin.jpg'
import KegList from '../kegs/KegList'
import AddKeg from '../kegs/AddKeg';
import TabList from './TabList';
import TabSelected from './TabSelected';
import NewTabControl from './NewTabControl';
import pour from '../../img/keglist.jpg';

import { connect } from 'react-redux';


function Server({tabList,tabSelected}){
	const background={
			backgroundImage:`url(${pour})`,
			backgroundSize:'cover',
			height:'90vh'
		}
	const grid={
		display:'grid',
		gridTemplateColumns:'20% 80%'
	}
	return(
		<div style={background}>
			{
				tabSelected ? 
				<div style={grid}>
					<TabSelected tabId={tabSelected} tabList={tabList} />
					<KegList admin={true} />
				</div>
				: 
				<div>
					<NewTabControl />
					{tabList.length? <TabList tabList={tabList}/>:null}
					<div style={grid}>
						<AddKeg />
						<KegList admin={true} />
					</div>
				</div>
			}
		</div>
		)
}

const mapStateToProps=(state)=>{
	return{
		tabSelected:state.tabState.selected,
		tabList:state.tabState.tabList
	}
}

export default connect(mapStateToProps)(Server);