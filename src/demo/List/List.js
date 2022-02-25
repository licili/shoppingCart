import $ from 'jquery'
import { GET_LIST } from '../config/config'
import CrateItem from './CrateItem'


export default class List {
    constructor(app) {
        this.$el = $('<div>')
        this.app = app
    }


    loadData() {
        return fetch(GET_LIST).then(res => {
            return res.json()
        })
    }

    initItemList(data) {
        data.forEach(itemData => {
            // 创建一个一个的item
            console.log('hhhh',itemData)
            let item = CrateItem(this,itemData)
            item.init()

        })
    }


    render() {
        this.app.$el.append(this.$el)
    }
    init() {
        this.loadData().then(data => {
            this.initItemList(data)
        }).then(() =>{
            this.render()
        })
    }
}