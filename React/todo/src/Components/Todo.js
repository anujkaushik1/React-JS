import React, { Component } from 'react'

export default class Todo extends Component {

    constructor(){
        super();
        this.state = {
            tasks : [{task : 'Check mails', id : 1}, {task : 'Read article', id : 2}, {task : 'Do development', id : 3}],
            currTask : ''
        }
    }

    handleChange = (e) => {
        let input = e.target.value;  
        this.setState({
            currTask : input
        })
    }

    handleSubmit = () => {
        // let oldTask = [...this.state.tasks];

        this.setState({
            tasks : [...this.state.tasks , {task : this.state.currTask, id : this.state.tasks.length + 1}]
        })
    }

  render() {
    return (
      <div>
            <input type="text" value={this.state.currTask} onChange={this.handleChange}/>
            <button onClick={this.handleSubmit}>Submit</button>
            <ul>
            {
                this.state.tasks.map((taskObj) => (
                    <li key={taskObj.id}>
                        <p>{taskObj.task}</p>
                        <button>Delete</button>
                    </li>
                ))
            }
            </ul>

      </div>
    )
  }
}

