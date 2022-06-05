import React, { Component } from "react";
import "./list.css";
import App from "./App";
class LIST extends Component {
    constructor(props) {
        super(props)
            this.input = React.createRef();
        
    }
    state = {
        status: true,
        name:""
       
    };
    changestatus = () => {
        let toggle = this.state.status;
        this.setState({status: !toggle})
    
    }
    update = () => {
      
        this.changestatus();
        this.props.updatecourse(this.input.current.value,this.props.index)
    }
    fun1=()=>{
    
                return (
                    <tr key={this.props.index}>
                        <td className="courseadd">
                            <div> {this.props.courses}</div>
                        </td>
                        <td>
                            <button onClick={()=>this.changestatus()}>update</button>
                        </td>
                        <td>
                            <button onClick={(e) => this.props.deletecourse(e,this.props.index)}>
                                delete
                            </button>
                        </td>
                    </tr>)
    }
    fun2 = () => {
            return (
              <tr >
                <td>
                        <input type="text" defaultValue={this.props.courses} ref={this.input}/>
                </td>

                <td>
                  <button onClick={()=>this.update()}>update</button>
                </td>
              </tr>
            );
    }
    
    render() {
   
       



        return (
            <React.Fragment>
                <table>{ this.state.status ? this.fun1() : this.fun2() }</table>
            </React.Fragment>
        );
    }
}

export default LIST;
