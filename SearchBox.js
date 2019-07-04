import React from 'react'

const SearchBox = ({searchfield,searchChange}) =>{
	
	return(
	<div className='pa2'>
	
	<input className='tc bg-light-blue dib br3 pa2 ma2 grow shadow-5' 
	type='search'
	placeholder='Search the robots'
	onChange={searchChange}/>
	</div>
	);
}
export default SearchBox;