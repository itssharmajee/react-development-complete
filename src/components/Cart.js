import { useSelector } from "react-redux";
import CartList from "./CartList";

const Cart = ()=>{

    const itemList = useSelector((state)=>state.cart.items)

    if(itemList.length == 0 ){
        return <h2>First Add Something to the cart</h2>
    }

    return (
        <div>
            {
                itemList.map((item,index)=><CartList key={index} name={item}/>)
            }
        </div>
    )
}

export default Cart;