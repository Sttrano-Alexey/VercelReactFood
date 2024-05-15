import minus from '../../Images/icons/minus.svg';
import plus from '../../Images/icons/plus.svg';
import removeCart from '../../Images/icons/delete.svg';


export default function CartItem({ id, name, img, price, quantity, updateCartState, setCartItems, removeFromCart  }) {


    // Функция для увеличения количества товара
    const incrementQuantity = () => {
        updateCartState(id, quantity + 1);
    };

    // Функция для уменьшения количества товара
    const decrementQuantity = () => {
        if (quantity > 0) {
            updateCartState(id, quantity - 1);
        }
        if (quantity === 1) {
            removeFromCart(id);
        }
    };


    return (
        <div className="cart-card">
            <img className="cart-card-img" src={img} alt={name} />
            <h6 className="cart-card-title">{name}</h6>
            <button className="cart-card-delete" onClick={() => removeFromCart(id)}>
                <img src={removeCart} alt="" />
            </button>
            <p className="cart-card-price">{price * quantity} ₽</p>
            <div className="card-count">
                <button onClick={decrementQuantity}>
                    <img src={minus} alt="" />
                </button>
                <span className="card-count-value">{quantity}</span>
                <button onClick={incrementQuantity}>
                    <img src={plus} alt="" />
                </button>
            </div>
        </div>
    );
}

