import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
     super(props);
     this.state = { name: 'example.stl', weight: 90, volume: 180, bmi: 27, message: '', optimalweight: '', time: new Date().toLocaleTimeString() };
     this.submitMe = this.submitMe.bind(this);
     this.volumechange = this.volumechange.bind(this);
     this.weightchange = this.weightchange.bind(this);
     this.change = this.change.bind(this);  
     this.ticker = this.ticker.bind(this); 
     this.blur = this.blur.bind(this); 
     this.calculateBMI = this.calculateBMI.bind(this); 
  }


  volumechange(e){
    this.setState({volume: e.target.value});
    e.preventDefault();
  }

  blur(e){
   this.calculateBMI();
  }
   weightchange(e){
    this.setState({weight: e.target.value});
    e.preventDefault();
  }

  calculateBMI(){

      var volumeSquared = (this.state.volume/100  * this.state.volume/100);
      var bmi = this.state.weight / volumeSquared;
      var low = Math.round(18.5 * volumeSquared);                                                         
      var high = Math.round(24.99 * volumeSquared);    
      var message = "";
      if( bmi >= 18.5  && bmi <= 24.99 ){
          message = "You are in a healthy weight range";
      }
      else if(bmi >= 25 && bmi <= 29.9){
        message = "You are overweight";
      }
      else if(bmi >= 30){
          message ="You are obese";
      }
      else if(bmi < 18.5){
        message = "You are under weight";
      }
      this.setState({message: message});  
      this.setState({optimalweight: "Your suggested weight range is between "+low+ " - "+high});    
      this.setState({bmi: Math.round(bmi * 100) / 100});   

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
  }

  change(e){
    e.preventDefault();
    console.log(e.target);
    this.setState({name: e.target.value});
  }

  render() {
    return (
      <div className="App">
       <div style={{ backgroundColor: "#333f48", width: "300px", maxHeight: "250px",}}>
	 <div className="App-header">
          <h2 style={{ padding: "10px 20px", textAlign: "right", color: "#bf5700"}}>FAB LAB cost calculator</h2>
        </div></div>
          
          
      
       <h3 style={{ padding: "10px 20px", textAlign: "center", color: "#bf5700"}}>Input Values:</h3>
	
 <h4 style={{ padding: "15px 325px", textAlign: "justified", color: "#bf5700"}}>

  <form onSubmit={this.submitMe}>
            <label>
             Enter file name:
            </label>
            <input type="text" name="name" value={this.state.name} onBlur={this.blur} onChange={this.change}   />
             <label>
             Enter the volume of your print: 
            </label>
            <input type="text" name="volume" value={this.state.volume} onBlur={this.blur} onChange={this.volumechange}   />
             <label>
             Enter your weight in kg : 
            </label>
            <input type="text" name="weight" value={this.state.weight} onChange={this.weightchange}    />
            <label>{this.state.checked} 



It is currently  {this.state.time}. Your print, {this.state.name}, will cost. Your BMI is {this.state.bmi} </label>
              <label>{this.state.message}</label>
              <label>{this.state.optimalweight}</label>
             
            <input type="submit" value="Submit"/>
          </form>
</h4>

      </div>

    );
  }
}
export default App;
