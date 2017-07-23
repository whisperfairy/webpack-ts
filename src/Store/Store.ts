import {observable} from 'mobx'
class Store {
    @observable dataList:number[]=[1,2,3,4,5];
    
}
const store = new Store();
export default store;