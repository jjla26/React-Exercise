import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Obj from './staticobject'
import Form from './Form'


const style = {
  width: "30px",
  height: "30px",

}

class App extends Component {

  state = {
    comment: ""
  }
  
  
  
  
  handleSubmit = e => {
    e.preventDefault()
    const { id , comment } = this.state
    Obj.unshift({name:"julio", profile_pic:logo, desc: comment })
    e.target.reset()
    this.setState({ id: id+1 })
    console.log("Comentario enviado")
    

  }
  
  handleChange = field => e => {
    this.setState({
    [field]: e.target.value
  })
}



render() {
    return (

      <div className="App">
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>

        {Obj.map((x,id) => <div key={id} className="container">
                        <div className="col-md-12 card container text-left">
                          <div className="card-header">
                            <div className="row">
                              <span style={style}><img src={x.profile_pic} /></span>
                              <div>{x.name}</div>
                            </div>
                          </div>
                          <div className="card-body">
                            <div>
                              <div>{x.desc}</div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
        )}
      </div>
    );
  }
}

export default App;
