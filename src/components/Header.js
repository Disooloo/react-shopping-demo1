import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Order } from './Order'

const showOrder = props => {
	let summa = 0
	props.orders.forEach(el => (summa += Number.parseFloat(el.price)))
	return (
		<>
			{props.orders.map(el => (
				<Order onDelete={props.onDelete} key={el._id} item={el} />
			))}
			<p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
		</>
	)
}

const noOrder = () => {
	return (
		<div className='emty'>
			<h2>В корзинет нет товара</h2>
		</div>
	)
}

export default function Header(props) {
	let [cardOpen, setCardOpen] = useState(false)

	return (
		<header>
			<dev>
				<span className='logo'>House staff</span>
				<ul className='nav'>
					<li>Про нас</li>
					<li>Контакты</li>
					<li>Кабинет</li>
				</ul>
				<FaShoppingCart
					onClick={() => setCardOpen((cardOpen = !cardOpen))}
					className={`shop-card-button ${cardOpen && 'active'}`}
				/>

				{cardOpen && (
					<div className='shop-card'>
						{props.orders.length > 0 ? showOrder(props) : noOrder()}
					</div>
				)}
			</dev>
			<div className='presentation'></div>
		</header>
	)
}
