import $ from 'jquery'
import { getCart  } from '../ShoppingCart/GetCart'
// 引入第三方插件 StateMachine
import StateMachine from 'javascript-state-machine'
import { log } from '../utils/log'

export default class Item {
    constructor(list,data ) {
        this.$el = $('<div>')
        this.list = list
        this.data = data
        this.cart = getCart()
    }

    init() {
        this.initContent()
        this.initBtn()
        this.render()
    }

    initContent() {
        let $el = this.$el
        let data = this.data
        $el.append($(`<p>名称: ${data.name}</p>`))
        $el.append($(`<p>价格: ${data.price}</p>`))
    }

    initBtn() {
        let $el = this.$el

        let $btn = $('<button>')
        
        let _this = this
        // 声明一个状态管理
        let fsm = new StateMachine({
            // 初始状态
            init: '加入购物车',
            transitions:[
                {
                    name:'addToCart',
                    from:'加入购物车',
                    to:'从购物车删除'
                },
                {
                    name:'deleteFromCart',
                    from:'从购物车删除',
                    to:'加入购物车'
                }
            ],
            methods:{
                // 加入购物车的方法
                onAddToCart:function() {
                    _this.addToCartHandle()
                    updateText()
                },
                // 从购物车删除
                onDeleteFromCart:function() {
                    _this.deleteFromCartHandle()
                    updateText()
                }
            }
        })
        function updateText() {
            $btn.text(fsm.state)
        }

        $btn.click(function() {
            // 添加购物车
            if(fsm.is('加入购物车')){
                fsm.addToCart()
            } else {
                // 从购物车移除\
                fsm.deleteFromCart()
            }
        })

        // 首次初始化按钮文案
        updateText()
        $el.append($btn)
    }
    
    // 装饰器模式
    @log('add')
    addToCartHandle() {
        this.cart.add(this.data)
    }

    @log('delete')
    deleteFromCartHandle() {
        this.cart.del(this.data.id)
    }

    render() {
        this.list.$el.append(this.$el)
    }
}