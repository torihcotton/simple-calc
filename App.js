import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
     super(props);
     this.state = { name: 'example.stl', cost: 2.50, volume: 60, total: 25, message: '', time: new Date().toLocaleTimeString() };
     this.submitMe = this.submitMe.bind(this);
     this.volumechange = this.volumechange.bind(this);
     this.change = this.change.bind(this);  
     this.ticker = this.ticker.bind(this); 
     this.blur = this.blur.bind(this); 
     this.calculatetotal = this.calculatetotal.bind(this); 
     this.costchange = this.costchange.bind(this);
  }


  volumechange(e){
    this.setState({volume: e.target.value});
    e.preventDefault();
  }

  costchange(e){
    this.setState({volume: e.target.value});
    e.preventDefault();
  }


  blur(e){
   this.calculatetotal();
  }

  calculatetotal(){

      var total = (this.state.volume * this.state.cost);
      var message = "";
      if( total < 1.00 ){
          message = "Error, minumum cost for a print is $1.00";
      }
      this.setState({message: message});     
      this.setState({total: Math.round(total * 100) / 100});   

  }

  submitMe(e) {
     e.preventDefault();
     this.calculatetotal();
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
          
          
 
       <h3 style={{ padding: "10px 50px", textAlign: "center", color: "#bf5700"}}>Select your 3d printing material:
	
<label> Input values: </label></h3>
       

<h4 style={{ padding: "10px 20px", textAlign: "center", color: "#bf5700", headersize: "large"}}>Input Values:</h4>
	
 <h5 style={{ padding: "15px 325px", textAlign: "justified", color: "#bf5700"}}>

  <form onSubmit={this.submitMe}>
            <label>
             Enter file name:
            </label>
            <input type="text" name="name" value={this.state.name} onBlur={this.blur} onChange={this.change}   />
             <label>
             Enter the volume of your print: 
            </label>
            <input type="text" name="volume" value={this.state.volume} onBlur={this.blur} onChange={this.volumechange}   />
            <label>{this.state.checked}   </label>
	    <input type="var" name="cost" value={this.state.cost} onBlur={this.blur} onChange={this.costchange}   />


<label>
It is currently  {this.state.time}. Your print, {this.state.name}, will cost {this.state.total}.</label>
              <label>{this.state.message}</label>
             
            <input type="submit" value="Submit"/>
          </form>
</h5>

      </div>

    );
  }
}
export default App;
