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
            filterType: ''
        };

        this.onSelectFilter = this.onSelectFilter.bind(this);
        this.onSelectOperator = this.onSelectOperator.bind(this);
        this.onChangeRhs = this.onChangeRhs.bind(this);
        this.removeFilter = this.removeFilter.bind(this);
    }

    onSelectFilter(type){
        let { filterType} = this.state;
        let { callback, idx } = this.props;
        filterType = type;
        this.filterData.lhs = type;
        callback(this.filterData, idx);
        this.setState({filterType});
    }

    onSelectOperator(type){
        let { callback, idx } = this.props;
        this.filterData.operator = type;
        callback(this.filterData, idx);
    }

    onChangeRhs(val){
        let { callback, idx } = this.props;
        this.filterData.rhs = val;
        callback(this.filterData, idx);
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
                <div className={style.addFilters} data-index={idx}>
                add filter
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
                        onChange={this.onChangeRhs}
                        />: filterType === 'campaign_name' ? <Input
                        type='text'
                        onChange={this.onChangeRhs}
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