import React, { Component } from 'react';
import './App.css';

class App extends Component {


  constructor(props) {
     super(props);
     this.state = { name: 'example.stl', cost: 2.50, volume: 10, total: 25, message: '', time: new Date().toLocaleTimeString() };
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
    this.setState({cost: e.target.value});
    e.preventDefault();
  }


  blur(e){
   this.calculatetotal();
  }

  calculatetotal(){

      var total = (this.state.volume * this.state.cost);
      var message = "";
      if( total < 1.00 ){
          message = " Error! The minumum cost for a print is $1.00 "; 
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
          <h2 style={{ padding: "10px 20px", textAlign: "right", color: "#bf5700"}}>Digital Fabrication - 3D Printing Cost Calculator</h2>
        </div></div>
             
 
       <h3 style={{ padding: "10px 50px", fontSize:'18px', textAlign: "center", color: "#bf5700"}}>Select Your Machine: </h3>
    


<button onClick={() => {
  this.setState({ cost: 2.50});
}}>
  Dimension Elite 3D
</button>

<button onClick={() => {
  this.setState({ cost: 2.50});
}}>
  Project 460+ Gypsum Printer
</button>

<button onClick={() => {
  this.setState({ cost: 0.05});
}}>
  Lulzbot TAZ
</button>

<h4 style={{ padding: "10px 50px", fontSize:'18px', textAlign: "center", color: "#bf5700"}}>Input Values: </h4>
       

 <h5 style={{ padding: "15px 325px", textAlign: "justified", color: "#bf5700"}}>

 <form onSubmit={this.submitMe}>
            <label> Enter file name:
            </label>
            <input type="text" name="name" value={this.state.name} onBlur={this.blur} onChange={this.change}   />
            <label>
             Enter the volume of your print: 
            </label>
            <input type="text" name="volume" value={this.state.volume} onBlur={this.blur} onChange={this.volumechange}   />
            <label>{this.state.checked}   </label>
 	    <label>
             Enter the cost per unit: 
            </label>
	    <input type="var" name="cost" value={this.state.cost} onBlur={this.blur} onChange={this.costchange}   />

	    <label>{this.state.checked}   </label>
</form>
</h5>
 <h6 style={{ padding: "15px 325px", fontWeight: 'bold', textAlign: "center", color: "#bf5700"}}>

            <input type="submit" value="Submit"/> 
</h6>
 <h7 style={{ padding: "15px 50px", fontWeight: 'bold', fontSize:'14px', textAlign: "justified", color: "#bf5700"}}>

<label>It is currently  {this.state.time}. Your print, {this.state.name}, will cost ${this.state.total}.</label>

<label>{this.state.message}</label>
          
</h7>

      </div>

    );
  }
}
export default App;
