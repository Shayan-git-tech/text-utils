import React, { Component } from 'react'

export default class UpperCase extends Component {
    constructor(props){
        super(props);
        this.state = {
            text : ""        }

    }
    handleChange = (event) => {
        this.setState({
            text: event.target.value
        });
    }
    handleUppercase = () =>{
        this.setState({
            text: this.state.text.toUpperCase() 
            
        })
    }
    handleLowercase = () => {
        this.setState({
            text: this.state.text.toLowerCase() 
            
        })    }
        handleSentencecase = () => {
          this.setState({
              text: this.state.text.charAt(0).toUpperCase() + this.state.text.slice(1).toLowerCase()
          });
      }
        handleTitlecase = () => {
          this.setState({
              text: this.state.text.split(' ')
              .map(word=> word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
          });
      }
      handleClick = () =>{
        this.setState(prevState => ({
            isDarkMode : !prevState.isDarkMode
      }));
    }
      
  render() {
    let txt = this.state.text;
    const wordscount = txt.trim().split(/\s+/).filter(word => word !== "").length;
    

    return (
        <div className="flex-box">
      <div className="upper-case">
      <div className="heading-area">
      <h1>
        {this.props.heading}
      </h1>
      </div>
      <textarea value={this.state.text} onChange={this.handleChange} rows="10" cols="100" placeholder='Enter text' className='textarea'/>
      
      <div className="btn-div">
      
      <button type='submit' onClick={this.handleUppercase}>
    <div class="button-wrapper">
      <span class="button_top">Convert to UpperCase</span>
    </div>
  </button>    

  <button type='submit' onClick={this.handleLowercase}>
    <div class="button-wrapper">
      <span class="button_top">Convert to LowerCase</span>
    </div>
  </button>  

  <button type='submit' onClick={this.handleTitlecase}>
    <div class="button-wrapper">
      <span class="button_top">Convert to TitleCase</span>
    </div>
  </button>  
  <button type='submit' onClick={this.handleSentencecase}>
    <div class="button-wrapper">
      <span class="button_top">Convert to SentenceCase</span>
    </div>
  </button>  
            
            
      </div>  
      </div>
      <hr />
        <div className='calculate-char'>
      <h2>No. of Characters and Words</h2>
      <p>{txt.length} Characters and {wordscount} Words</p>
      <h3>Amount of time it will take to read</h3>
      <p>{(wordscount / 238).toFixed(2)} Minutes</p>      <h3>Your Text Summary</h3>
        <p className='textarea' style={{height:"100px"}}>{txt}</p>
        </div>
      </div>
    )
  }
}
