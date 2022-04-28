import React, { Component } from 'react'

export class Item extends Component {
	render(){
		return (
			<div className='item'>
				<img src={this.props.Item.img} />
				<h2>{this.props.Item.title}</h2>
				<p>{this.props.Item.desc}</p>
				<b>{this.props.Item.proce}$</b>
				<div className='add-to-card'>+</div>
			</div>
		)
	}
}

export default Item