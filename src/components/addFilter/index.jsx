import React from 'react';
import Select from './../select';
import Input from './../input';
import * as style from './style.scss';
import {
    countryOptions,
    filterTypes,
    operartorType,
    accountOptions
} from './constant';

class AddFilter extends React.Component{
    constructor(props){
        super(props);
        this.filterData = {
            lhs: '',
            operator: '',
            rhs: ''
        };
        this.state= {
            filterType: '',
        };

        this.onSelectFilter = this.onSelectFilter.bind(this);
        this.onSelectOperator = this.onSelectOperator.bind(this);
        this.onChangeRhs = this.onChangeRhs.bind(this);
        this.removeFilter = this.removeFilter.bind(this);
    }

    onSelectFilter(event, type){
        let { filterType, disableSubmit} = this.state;
        let { callback, idx } = this.props;
        filterType = type;
        this.filterData.lhs = type;
        callback(this.filterData, idx, disableSubmit);
        this.setState({filterType});
    }

    onSelectOperator(event, type){
        let { callback, idx } = this.props;
        this.filterData.operator = type;
        callback(this.filterData, idx, false);
    }

    onChangeRhs(event,opts=null){
        let { disableSubmit} = this.state;
        let { callback, idx } = this.props;
        if(event && event.target.name === 'revenue') {
            if(!event.target.validity.valid){
                disableSubmit = true;
            }else {
                disableSubmit = false;
            }
        }
        let value = '';
        if( opts && opts.length) {
            value = opts;
        }else {
            value = event.target.value;
        }
        this.filterData.rhs = value;
        callback(this.filterData, idx, disableSubmit);
    }

    removeFilter() {
        const { removeFilter, idx } = this.props;
        removeFilter(idx);
    }

    render(){
        const {idx} = this.props;
        const { filterType} = this.state;
        const operatorOptions = filterType === '' ? operartorType.default : filterType === 'revenue' ? operartorType.revenue : operartorType.elseOpertaor;
        return(
            <div className='filter-wrapper'>
                <div className={`${style.addFilters} add-filter`} data-index={idx}>
                    <div className={style.lhs}>
                    <Select
                        options={filterTypes}
                        callback={this.onSelectFilter}
                        multiSelect={false}
                        />
                    </div>
                    <div className={style.operator}>
                        <Select
                            options={operatorOptions}
                            callback={this.onSelectOperator}
                            multiSelect={false}
                        />
                    </div>
                    <div className={style.rhs}>
                    {
                        filterType === 'revenue' ? <Input
                        type='number'
                        min='0'
                        max='99'
                        name='revenue'
                        onChange={this.onChangeRhs}
                        />: filterType === 'campaign_name' ? <Input
                        type='text'
                        onChange={this.onChangeRhs}
                        name='campaign_name'
                        />: filterType === 'country' ? <Select
                        options={countryOptions}
                        callback={this.onChangeRhs}
                        multiSelect={true}
                        /> : filterType === 'account' ? <Select
                        options={accountOptions}
                        callback={this.onChangeRhs}
                        multiSelect={true} /> : <Select />
                    }
                    </div>
                    <span className={style.removeIcon} onClick={this.removeFilter}>X</span>
                </div>
            </div>
        )
    }
}

export default AddFilter;