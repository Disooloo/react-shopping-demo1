import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {

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
					<FaShoppingCart onClick={() => setCardOpen(cardOpen = !cardOpen)} 
					className={`shop-card-button ${cardOpen && 'active'}`}/>

					{cardOpen && (
						<div className='shop-card'>

						</div>
					)}
			</dev>
			<div className='presentation'></div>
		</header>
	)
}
