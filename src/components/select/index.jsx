import React from 'react';

import * as style from './style.scss';

class Select extends React.Component{
    constructor(){
        super();
        this.onSingleSelect = this.onSingleSelect.bind(this);
        this.onMultipleSelect = this.onMultipleSelect.bind(this);
    }
    onSingleSelect(event){
        this.props.callback(event, event.target.value);
    }

    onMultipleSelect(event) {
        const opts = [];
        let  opt;
        const sel = event.target;
        const len = sel.options.length;
        for (let i = 0; i < len; i++) {
          opt = sel.options[i];
      
          if (opt.selected) {
            opts.push(opt.value);
          }
        }
        this.props.callback(event, opts);
      }
    render(){
        const {options,src, multiSelect} = this.props;
        return(
            <div>
                
                <select name={src} onChange={multiSelect ? this.onMultipleSelect : this.onSingleSelect} multiple={multiSelect}>
                <option value='' key='selectFilter'>Select Filter</option>
                    {options && options.length && options.map((item,index)=>{
                        return <option value={item.value} key={`${src}_${index}`}>{item.label}</option>
                    })}
                </select>
            </div>
        )
    }
}

export default Select;