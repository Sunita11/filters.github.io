import React from 'react';
import AddFilter from './addFilter';
import * as style from './style.scss';

 class App extends React.Component{
    constructor(props){
        super(props);
        this.filtersType = [];
        this.formData=[];
        this.state = {
            newFilter: 0,
            disableSubmit: false
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.addNewFilter = this.addNewFilter.bind(this);
        this.getFilter = this.getFilter.bind(this);
        this.onChange = this.onChange.bind(this);
        this.removeFilter = this.removeFilter.bind(this);
    }

    /*
    * addNewFilter: adding a new filter
    * */
    addNewFilter(){
        let { newFilter } =  this.state;
        newFilter +=1;
        this.setState({newFilter});
    }

    /*
    * onChange: updating formData based on filter's update
    * arguments
        * obj: updated filter's value
        * index: individual filter's index
        * disableSubmit: controls apply button's disable 
    * */
    onChange(obj, index, disableSubmit) {
        const jsonObj = [];
        const oldLen = this.formData.length;
        const newLen = index<=  oldLen ? oldLen : oldLen + 1;
        for(let i=0;i<newLen+1;i++) {
            if(i===index){
                jsonObj.push(obj);
                i++;
            }else {
                jsonObj.push(this.formData[i]);
            }
        }
        this.formData = jsonObj;
        this.setState({disableSubmit});
    }

    /*
    * getFilter: return new added filter
    * argument: no. of filters
    * */
    getFilter(len){
        const ele = [];
        for(let i=0;i<=len;i++){
            ele.push(<AddFilter key={i} idx={i} callback={this.onChange} removeFilter={this.removeFilter}/>)
        }
        return ele;
    }

    /*
    * removeFilter: removing the selected filter
    * argument: index of selected filter
    * */
    removeFilter(index) {
        this.formData[index] = undefined;
        const eleList = document.querySelectorAll('.add-filter');
        eleList.forEach((item)=>{
            var dataset = parseInt(item.dataset.index,10);
            if(dataset === index) {
                item.remove();
            }
        });
    }

    /*
    * on Submitting the response
    * computing JSON
    * */
    onSubmit (e) {
        e.preventDefault();
        const resultData = [];
        const len = this.formData.length;
        for(let i=0;i<len;i++) {
            if(this.formData[i] !== undefined){
                resultData.push(this.formData[i]);
            }
        }

        console.log('resultData: ',resultData);
    }
    render(){
        const { newFilter, disableSubmit} = this.state;
        return (
        <div className={style.wrapper}>
            <form name='filter' onSubmit={this.onSubmit}>
                <div className={style.formInnerwrapper}>
                    <div  className={style.contentWrapper}>
                        <div className={style.leftContent}>
                            <h4 className={style.heading}>where</h4>
                            <button className={style.addBtn} onClick={this.addNewFilter}>+ ADD</button>
                        </div>
                        <div className={style.rightContent}>
                            {
                                this.getFilter(newFilter)
                            }
                        </div>
                    </div>
                </div>
                <button type='submit' className={style.applyBtn} disabled={disableSubmit}>Apply</button>
            </form>
        </div>
        )
    }
};

export default App;