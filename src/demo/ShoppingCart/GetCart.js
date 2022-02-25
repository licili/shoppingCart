class Cart {
    constructor() {
        this.list = []

    }

    add(data) {
        this.list.push(data)
    }

    del(id) {
        this.list = this.list.filter(item => {
            if(item.id !== id) {
                return true
            }
            return false
        })
    }

    getList() {
        return this.list.map(item => {
             return item.name
        }).join('\n')
    }
}


// 单例模式

export const getCart = (function() {
    let cart = null
    return function() {
        if(!cart) {
            cart = new Cart()
        }
        return cart
    }
})()