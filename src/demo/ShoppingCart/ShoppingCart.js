import { getCart } from './GetCart.js'
import $ from 'jquery'


export default class ShoppingCart {
    constructor(app) {
        this.$el = $('<div>').css({
            'padding-bottom':'10px'
        })
        this.app = app
        this.cart = getCart()
    }
    init() {
        this.initBtn()
        this.render()
    }
    initBtn() {
        let $btn = $("<button>显示购物车列表</button>")
        $btn.click(() => {
            this.showCart()
        })
        this.$el.append($btn)
    }
    showCart() {
        alert(this.cart.getList());
    }
    render() {
        this.app.$el.append(this.$el)
    }
}