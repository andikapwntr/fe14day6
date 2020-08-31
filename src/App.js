import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
// import {nama} from './helper/cobacoba'

 

class App extends Component {
  state = {
    angka:0
  }

  pencettambah = (tambah)=>{
    if(tambah){
      this.setState({angka:this.state.angka+1})
    }else{
      this.setState({angka:this.state.angka-1})
    }

  }

  render() { 
    return (
      <div>
        <div>
          <h1>selamat datang {this.state.angka}</h1>
          {/* <button onClick={()=>this.pencettambah(true)}>
            +
          </button> */}
          {/* <button className={'btn1'} onClick={()=>this.pencettambah(true)} >
            +
          </button>   */}
          {/* <button className={'btn'} onClick={props.funcpencet} >
            {props.children}
          </button>   */}
          <Button funcpencet={()=>this.pencettambah(true)}>
            +
          </Button>
          <Button  funcpencet={()=>this.pencettambah(false)}>
            -
          </Button>
        </div>
        
      </div>
    );
  }
}
 
export default App;



