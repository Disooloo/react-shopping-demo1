import React from 'react'
import Categories from './components/Categories'
import Footer from './components/Footer'
import Header from './components/Header'
import Items from './components/Items'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			orders: [],
			currentItem: [],
			items: [
				{
					id: 1,
					title: 'Стул серый',
					img: 'https://meb96.ru/upload/products/49631/146335/800x0.jpg',
					desc: 'description',
					category: 'chairs',
					price: '49.22',
				},
				{
					id: 2,
					title: 'Стул синий',
					img: 'https://thefields.ru/upload/iblock/1c3/1c3078cefe5fb9450d215760772f0bd6.jpg',
					desc: 'description',
					category: 'chairs',
					price: '49.22',
				},
				{
					id: 3,
					title: 'Стул синий',
					img: 'https://thefields.ru/upload/iblock/1c3/1c3078cefe5fb9450d215760772f0bd6.jpg',
					desc: 'description',
					category: 'chairs',
					price: '49.22',
				},
				{
					id: 4,
					title: 'Диван сервый',
					img: 'https://mebelmoscow2014.ru/Photo/510836/5221036.jpg',
					desc: 'description',
					category: 'sofa',
					price: '69.22',
				},
			],
		}
		this.state.currentItem = this.state.items
		this.addToOrder = this.addToOrder.bind(this)
		this.deleteOrder = this.deleteOrder.bind(this)
		this.chooseCategory = this.chooseCategory.bind(this)
	}

	render() {
		return (
			<div className='wrapper'>
				<Header orders={this.state.orders} onDelete={this.deleteOrder} />
				<Categories chooseCategory={this.chooseCategory} />
				<Items items={this.state.currentItem} onAdd={this.addToOrder} />
				<Footer />
			</div>
		)
	}

	chooseCategory(category) {
		if (category === 'all') {
			this.setState({ currentItem: this.state.items })
			return
		}
		this.setState({
			currentItem: this.state.items.filter(el => el.category === category),
		})
	}

	deleteOrder(id) {
		console.log('delete ' + id)
		this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
	}

	addToOrder(item) {
		let isInArray = false
		this.state.orders.forEach(el => {
			if (el.id === item.id) isInArray = true
		})
		if (!isInArray) this.setState({ orders: [...this.state.orders, item] })
	}
}

export default App
