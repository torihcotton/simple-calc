import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
     super(props);
     this.state = { name: 'example.stl', volume: 180, total: 27, message: '', optimalweight: '', time: new Date().toLocaleTimeString() };
     this.submitMe = this.submitMe.bind(this);
     this.volumechange = this.volumechange.bind(this);
     this.change = this.change.bind(this);  
     this.ticker = this.ticker.bind(this); 
     this.blur = this.blur.bind(this); 
     this.calculatetotal = this.calculateBMI.bind(this); 
     this.volumechange = this.volumechange.bind(this);
  }


  volumechange(e){
    this.setState({volume: e.target.value});
    e.preventDefault();
  }

  blur(e){
   this.calculateBMI();
  }

  calculateBMI(){

      var volumeSquared = (this.state.volume/100  * this.state.volume/100);
      var total= this.state.weight * volumeSquared;
      var message = "";
      if( total >= 18.5  && total <= 24.99 ){
          message = "You are in a healthy weight range";
      }
      else if(total >= 25 && total <= 29.9){
        message = "You are overweight";
      }
      else if(total >= 30){
          message ="You are obese";
      }
      else if(total < 18.5){
        message = "You are under weight";
      }
      this.setState({message: message});     
      this.setState({bmi: Math.round(total * 100) / 100});   

  }

  submitMe(e) {
     e.preventDefault();
     this.calculateBMI();
  }

  ticker() {
    this.setState({time: new Date().toLocaleTimeString()})
  }
 
  componentDidMount(){
    setInterval(this.ticker, 60000);
