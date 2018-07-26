import React, { Component } from "react";
import Autosuggest from 'react-autosuggest';
import Helper from './Helper';
import Testing from "./Testing";
import './AutoSuggest.css';

 
 
class AutoSuggest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: [],
      table_Data:[],
      course_id:[],
      single_course_id:[],
      courses_name:[],
      splice_data:[],

    };
    this.fetchCourses();
  }

  fetchCourses = () => {
    let body={}
    const url="courses";
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
        (lang.course_name === null ? '': lang.course_name.toLowerCase().includes(inputValue) )
    );
  };
    getSuggestionValue = suggestion => suggestion.course_name;


    selectedValue = (suggestion) => {
      let courseid = this.state.single_course_id;
      courseid.push(suggestion.id)
      let course_name = this.state.courses_name;
      course_name.push(suggestion.course_name);
            this.setState({
              course_id: courseid,
              courses_name : course_name,
            });
      this.props.triggerparent(courseid,this.state.courses_name);
      let index = this.state.table_Data.findIndex((v)=>{
        return v.course_name === suggestion.course_name;
      });
      let splice_data=this.state.table_Data.splice(index,1);
      let Json_splice_data = JSON.stringify(splice_data);
      let splice_datas= this.state.splice_data;
      splice_datas.push(Json_splice_data);
      this.setState({
        splice_data:splice_datas,
      })
    }

    renderSuggestion = suggestion => (
        <div onClick={()=>{this.selectedValue(suggestion)}}>
          {suggestion.course_name}
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

  condition = () => {
    if(this.state.courses_name.length===0){
        return(
            <div>

            </div>
        );
    }
    else{
        return(
            <div>
            <Testing courses_name={this.state.courses_name} /> 
            </div>
        );
    }
}
 
  render() {
    const { value, suggestions } = this.state;
 
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Enter Course Name',
      value,
      onChange: this.onChange,
    };
 
    // Finally, render it!
    return (
      <div>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
      {this.condition()}
      </div>
    );
  }
}

export default AutoSuggest;