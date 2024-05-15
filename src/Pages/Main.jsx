import Banner from "../components/Banner/Banner"
import Categories from "../components/Categories/Categories"
import Notification from "../components/Notification/Notification"
import ProductsMain from "../components/Products/ProductsMain"

export default function Main() {
    return(
        <>
            <Banner></Banner>
            <Categories></Categories>
            <ProductsMain></ProductsMain>
            <Notification></Notification>
        </>
    )
}