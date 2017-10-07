var React = require("react");
var Jquery = require ("jquery");
var Jqueryui = require ("jquery-ui");


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
        <textarea style={espacemementFormulaire} ref="message" />
        </label>
        <br/>
        <br/>
         <button className="btn btn-primary btn-lg" id="load" data-loading-text="<i class='fa fa-spinner fa-spin '></i> Processing Order" type="button" onClick={this.envoiMessage}>Envoi</button>
        <br/>
        <br/>
      </div>
    );
  }

}

module.exports = EnvoiMessage;
