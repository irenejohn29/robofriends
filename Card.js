import React from 'react';
import 'tachyons';
import './Card.css';
const Card = (props) => {
	const{ name,email,id,username}=props;
return (
<div className='tc bg-light-purple dib br3 pa2 ma2 grow shadow-5 sample'>
<img alt='robots' src={`https://robohash.org/${id}?20x20`}/>
<div>
<h2>{name}</h2>
<p>{username}</p>
<p>{email}</p>
</div>
</div>
);
}
export default Card;