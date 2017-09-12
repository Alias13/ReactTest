import React, {Component} from 'react'
import Header2 from '../common/Header'
import PageContent from '../../containers/pageContent/PageContent'
import Items from './Items'
import Sidebar from './Sidebar'

import CircularProgress from 'material-ui/CircularProgress';

const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItem: 'center',
    justifyContent: 'space-between'
};

class Catalogue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: undefined,
            totalAmount: 0,
            totalCost: 0,
            avgPrice: 0,
            fetching: true
        }

        this.getTotalAmount = this.getTotalAmount.bind(this);
        this.getTotalCost = this.getTotalCost.bind(this);
        this.getAvgPrice = this.getAvgPrice.bind(this);
        this.fetchItems = this.fetchItems.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.clear = this.clear.bind(this);

    }

    getTotalAmount(items){
        return items.length;
    }

    getTotalCost(items) {
        return items.reduce((sum, current) => {
            return sum + +current.price;
        }, 0);
    }

    getAvgPrice(items) {
        return (this.getTotalCost(items) / this.getTotalAmount(items)).toFixed(2);
    }

    fetchItems() {
        fetch('https://api.myjson.com/bins/13nwtx')
            .then(response => response.json())
            .then((itemsArr) => {
                let storage = JSON.parse(localStorage.getItem('newItems')) ? JSON.parse(localStorage.getItem('newItems')) : [];

                const allItemsArr = storage.concat(itemsArr);

                this.setState({
                    items: allItemsArr,
                    totalAmount: this.getTotalAmount(allItemsArr),
                    totalCost: this.getTotalCost(allItemsArr),
                    avgPrice: this.getAvgPrice(allItemsArr),
                    fetching: false
                });
                console.log(itemsArr)
            })
            .catch(error => console.log(error))
    };

    deleteItem(i) {
        let arr = this.state.items;
        arr.splice(i, 1);
        this.setState({
            items: arr,
            totalAmount: this.getTotalAmount(arr),
            totalCost: this.getTotalCost(arr),
            avgPrice: this.getAvgPrice(arr),
            fetching: false
        })
    };

    clear() {
        this.setState({
            items: [],
            totalAmount: 0,
            totalCost: 0,
            avgPrice: 0,
            fetching: false
        })
    };

    componentDidMount() {
        this.fetchItems();
    }

    render() {
        const {fetching, items, totalAmount, totalCost, avgPrice} = this.state;

        return (
            <div>
                <Header2 module={'Catalogue'}/>
                {
                    fetching ?
                        <PageContent>
                            <div style={style}>
                                <CircularProgress />
                                Загрузка...
                            </div>
                        </PageContent>
                        :
                        <PageContent>
                            <Sidebar
                                totalAmount={totalAmount}
                                totalCost={totalCost}
                                avgPrice={avgPrice}
                                clear={this.clear}
                            />
                            <Items items={items} deleteItem={this.deleteItem}/>
                        </PageContent>
                }
            </div>
        )
    }
}

export default Catalogue