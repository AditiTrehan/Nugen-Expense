import React, { Component } from "react";
import Autosuggest from 'react-autosuggest';
import Helper from './Helper';
import './AutoSuggest.css';

 
 
class AutoSuggestBatches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: [],
      table_Data:[],
      batch_id:0,
    };
    this.fetchCourses();
  }

  fetchCourses = () => {
    let body={}
    const url="batches";
    let res = Helper(url,'GET',body);

    res.then((res) => {
        this.setState({
            table_Data:res
        });
    })
}

    getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
   
    return inputLength === 0 ? [] : this.state.table_Data.filter(lang =>
        (lang.batch_name === null ? '': lang.batch_name.toLowerCase().includes(inputValue) )
    );
  };
    getSuggestionValue = suggestion => suggestion.batch_name;


    selectedValue = (suggestion) => {
      this.props.triggerparent(suggestion.id);
      
    }

    renderSuggestion = suggestion => (
        <div onClick={()=>{this.selectedValue(suggestion)}}>
          {suggestion.batch_name}
        </div>
      );
 
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };
 
  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };
 
  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
 
  render() {
    const { value, suggestions } = this.state;
 
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Enter Batch Name',
      value,
      onChange: this.onChange,
    };
 
    // Finally, render it!
    return (
    
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
      
    );
  }
}

export default AutoSuggestBatches;