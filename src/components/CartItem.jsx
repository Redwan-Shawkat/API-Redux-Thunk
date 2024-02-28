import { useState } from "react";
import { useDispatch } from "react-redux";

import { icons } from "../assets";

const CartItem = ({ cartItem }) => {
	const [itemQuantity, setItemQuantity] = useState(cartItem.quantity);
	const dispatch = useDispatch();
	return (
		<tr>
			<td>
				<div className="product">
					<img src={cartItem.image} alt="" className="product-img" />
				</div>
			</td>
			<td>
				<p>{cartItem.title}</p>
			</td>
			<td>$ {cartItem.price}</td>
			<td>
				<div className="qty_input">
					<button
						className="qty-count qty-count--minus"
						type="button"
						onClick={() => {
							if (itemQuantity <= 1) {
								return alert(`Quantity can't be less than 1`);
							}
							setItemQuantity(
								(currentQuantity) => currentQuantity - 1,
							);
							dispatch({
								type: "cart/modifyQuantityOfAnItem",
								payload: {
									id: cartItem.id,
									quantity: itemQuantity - 1,
								},
							});
						}}
					>
						<figure>
							<img src={icons.minusIcon} alt="" />
						</figure>
					</button>
					<input
						type="number"
						className="product-qty"
						value={itemQuantity}
						onChange={(e) => {
							setItemQuantity(Number(e.target.value));
							dispatch({
								type: "cart/modifyQuantityOfAnItem",
								payload: {
									id: cartItem.id,
									quantity: Number(e.target.value),
								},
							});
						}}
						min="1"
					/>
					<button
						onClick={() => {
							setItemQuantity(
								(currentQuantity) => currentQuantity + 1,
							);
							dispatch({
								type: "cart/modifyQuantityOfAnItem",
								payload: {
									id: cartItem.id,
									quantity: itemQuantity + 1,
								},
							});
						}}
						className="qty-count qty-count--add"
						type="button"
					>
						<figure>
							<img src={icons.plusIcon} alt="" />
						</figure>
					</button>
				</div>
			</td>
			<td>$ {cartItem.price * cartItem.quantity}</td>
			<td>
				<img
					src={icons.crossIcon}
					alt=""
					className="cross-icon"
					onClick={() =>
						dispatch({
							type: "cart/removeFromCart",
							payload: cartItem.id,
						})
					}
				/>
			</td>
		</tr>
	);
};

export default CartItem;
