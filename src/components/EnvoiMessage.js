var React = require("react");

class EnvoiMessage extends React.Component {
	
  constructor(props){
    super(props);
    this.state = { message: ''};
    this.envoiMessage = this.envoiMessage.bind(this);
  }

  
  

  envoiMessage(){
    var message = this.refs.message.value;
    this.setState({
      'message'  : message,
    })
    console.log(this.state);

  fetch('https://messy.now.sh/u/timeline', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
     "Authorization": "Bearer:"+sessionStorage.getItem("token"),
    },
    body: JSON.stringify({
      message: this.refs.message.value,
    })
  })
    .then(response => response.json())
    .then(data => sessionStorage.setItem(data.message, data.id))
  }


  render(){
    return(
        <div>
        <h1>Envoi Message</h1>
        <label>
        Message : 
        <textarea ref="message" />
        </label>
        <br/>
        <br/>
         <button type="button" onClick={this.envoiMessage}>Envoi</button>
       
        <br/>
        <br/>
      </div>
    );
  }

}

module.exports = EnvoiMessage;
