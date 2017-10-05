var React = require("react");

class RecupMessage extends React.Component {
	
  constructor(props){
    super(props);
    this.state = {messages: [] } ;
    this.recupMessage = this.recupMessage.bind(this);
  }

  
  recupMessage(){
  fetch('https://messy.now.sh/u/timeline', {
    method: 'GET',
    headers: {
     'Content-Type': 'application/json',
     "Authorization": "Bearer:"+sessionStorage.getItem("token"),
    },
  })
  .then(results => {
    return results.json();
  }).then(data => {
    this.setState({messages: data });
  })
  }

  render(){
    let messages = this.state.messages.map((message) => {
    return(
      <div key={message.id}>
      {message.message}
      </div>
      )
    });
    return(
        <div>
        <h1>Recuperation Message</h1>
        <h2>{messages}</h2>
        <br/>
        <br/>
         <button type="button" onClick={this.recupMessage}>Recuperation</button>

      </div>
    );
  }

}

module.exports = RecupMessage;
