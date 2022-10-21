import React, { Component } from "react";
import Buttons from './Buttons';
import Result from './Result';
import "./App.css";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: "0",
    }
    this.handleclicks = this.handleclicks.bind(this);
  }

  handleclicks = (value) => {
    switch (value) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
      case '+':
      case '-':
      case '/':
      case '*':
        if (this.state.result === "0") {
          this.setState({
            result: value
          });

        } else {
          this.setState({
            result: this.state.result + value
          });
        }
        break;
      case '=':
        console.log(this.state.result);
        this.setState({
          result: window.eval(this.state.result)
        })
        break;
      case 'c':
        this.setState({
          result: ''
        })
        break;
      case '+/-':
        this.setState({
          result: parseInt(this.state.result, 10) * -1
        });
        break;
      case '%':
        this.setState({
          result: parseFloat(this.state.result, 10) / 100
        });
        break;
      default:
        break;
    }

  }

  render() {
    return ( 
      <div className = "Calculator">
        <Result result = {
        this.state.result
      }
      /> 
      <Buttons Buttonclicked = {
        this.handleclicks
      }
      />
      </div>
    );
  }
}

export default App;