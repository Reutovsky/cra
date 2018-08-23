import React from 'react'
import Recipe from './Recipe'
import PropTypes from 'prop-types'

class Summary extends React.Component {

	static propTypes = {
		title: PropTypes.string,
		ingredients: PropTypes.array,
		steps: PropTypes.array
	}

    static defaultProps = {
		title: "defaulttitle",
		ingredients: "defaultingridients",
		steps: "defaultsteps" 
	}
	
	render() {
		const {title, ingredients, steps} = this.props
		return (
			<div>
				<h1>{title} - title</h1>
				<p>{ingredients.length} Ingreds | {steps.length} Steps</p>
			</div>
		)
	}
}

const summarydata = {
	title: "Некий Тайтлы",
	ingredients: "peanut butter, jelly, bread",
	steps: "one two three" 
}

const Menu = ({ recipes }) =>
	<article>
		<Summary {...summarydata} />
		<header>
			<h1>Delicious Recipes</h1>
		</header>
		<div className="recipes">
			{ recipes.map((recipe, i) =>
				<Recipe key={i} {...recipe} />)
			}
		</div>
	</article>


export default Menu