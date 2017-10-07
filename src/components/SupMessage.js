var React = require("react");

class SupMessage extends React.Component {
	
  constructor(props){
    super(props);
    this.state = { message: ''};
    this.supMessage = this.supMessage.bind(this);
  }

  
  

  supMessage(){
    
    var message = this.refs.message.value;
    this.setState({
      'message'  : message,
    })
    console.log(this.state);

    fetch('https://messy.now.sh/u/timeline/:id'+sessionStorage.getItem("message"), {
       method: 'DELETE',
    headers: {
     'Content-Type': 'application/json',
     "Authorization": "Bearer:"+sessionStorage.getItem("token"),
    },
  })
}
  render(){
    return(
        <div>
        <h1>Supression Message</h1>
        <label>
        message à supprimer : 
        <input type="text" ref="message" />
        </label>
        <br/>
        <br/>
         <button type="button" onClick={this.supMessage}>Supprimer</button>
        <br/>
        <br/>
      </div>
    );
  }

}

module.exports = SupMessage;
