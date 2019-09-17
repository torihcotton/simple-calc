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
          
       <h3 style={{ padding: "10px 20px", textAlign: "center", color: "#bf5700"}}>Input Values:
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
            <label>{this.state.checked} It is currently  {this.state.time}. Your print, {this.state.name}, will cost. Your BMI is {this.state.bmi} </label>
              <label>{this.state.message}</label>
              <label>{this.state.optimalweight}</label>
             
            <input type="submit" value="Submit"/>
          </form>
 </h3>
      </div>

    );
  }
}
export default App;
