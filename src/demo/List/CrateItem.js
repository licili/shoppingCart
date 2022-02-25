import Item from "./Item";

function createDisCount(itemData) {
    // 用代理来处理折扣，不用修改原来的数据
    return new Proxy(itemData,{
        get:function(target,key,receiver) {
            console.log(key,'key');
            if(key == 'name') {
                console.log('hhh');
                return `${target[key]}[折扣]`
            }
            if(key == 'price') {
                return `原价：${target[key]}[折扣]${target[key] * 0.8}`
            }
            return target[key]
        }
    })

}

// 工厂函数  这里实现工厂函数，可以在这里扩展东西的（优惠商品逻辑）
// 用工厂函数进行了一层的封装
export default function(list,itemData) {
    if(itemData.discount) {
        console.log('进来')
        itemData = createDisCount(itemData)
    }
    return new Item(list,itemData)
}