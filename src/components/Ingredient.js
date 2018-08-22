import React from 'react'

const Ingredient = ({ amount, measurement, name }) =>
	<li>
		<span className="amount">{amount}&nbsp;</span>
		<span className="measurement">{measurement}&nbsp;</span>
		<span className="name">{name}</span>
	</li>

export default Ingredient