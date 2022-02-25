import $ from 'jquery'
import ShoppingCart from './ShoppingCart/ShoppingCart'
import List from './list/list'


class App {
    constructor(id) {
        this.$el = $('#' + id)
    }


    initShoppingCart() {
        let shoppingCart = new ShoppingCart(this)
        shoppingCart.init()
    }
    initList() {
        let list = new List(this)
        list.init()
    }

    init() {
        this.initShoppingCart()
        this.initList()
    }
}

export default App