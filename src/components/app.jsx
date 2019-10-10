import React from 'react';
import AddFilter from './addFilter';


 class App extends React.Component{
    constructor(props){
        super(props);
        this.filtersType = [];
        this.formData=[];
        this.state = {
            newFilter: 0
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.createJSON = this.createJSON.bind(this);
        this.removeJSON = this.removeJSON.bind(this);
        this.addNewFilter = this.addNewFilter.bind(this);
        this.getFilter = this.getFilter.bind(this);
        this.onChange = this.onChange.bind(this);
        this.removeFilter = this.removeFilter.bind(this);
    }

    
    createJSON(data, idx){
        this.formData.push(data);
    }
    removeJSON(data, idx){
        // remove json from index idx
    }
    addNewFilter(){
        let { newFilter } =  this.state;
        newFilter +=1;
        this.setState({newFilter});
    }
    onChange(obj, index) {
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
        console.log('new formData: ', this.formData);
    }

    /*
    * adding new filter
    * */
    getFilter(len){
        const ele = [];
        for(let i=0;i<=len;i++){
            ele.push(<span key={i}> <AddFilter idx={i} callback={this.onChange} removeFilter={this.removeFilter}/></span>)
        }
        return ele;
    }

    removeFilter(index) {
        //remove filter
        //remove entry from formData
        this.formData[index] = undefined;
        const selector = 'data-index="'+index + '"';
        const ele = document.querySelector(selector);
        console.log('remove filter index: ', index);
    }

    /*
    * on Submitting the response
    * computing JSON
    * */
    onSubmit (e) {
        e.preventDefault();
        console.log('submitting data');
        const resultData = [];
        const len = this.formData.length;
        for(let i=0;i<len;i++) {
            if(!this.formData[i]){
                resultData.push(this.formData[i]);
            }
        }

        console.log('resultData: ',resultData);
    }
    render(){
        const { newFilter} = this.state;
        return (
        <div>
            <h4 >
                App component
                <form name='filter' onSubmit={this.onSubmit}>
                    <div className='add-filter-container'>
                        {
                            this.getFilter(newFilter)
                        }
                        <button onClick={this.addNewFilter}>+ Add</button>
                    </div>
                    <button type='submit'>Apply</button>
                </form>
            </h4>
        </div>
        )
    }
};

export default App;