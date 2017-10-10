var React = require("react");

class EnvoiMessage extends React.Component {
  
  constructor(props){
    super(props);
    this.envoiMessage = this.envoiMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.name] : event.target.value});
    console.log(event.target.name, event.target.value);
  }

  envoiMessage(event){
    event.preventDefault();
    fetch('https://messy.now.sh/u/timeline', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      "Authorization": "Bearer:"+sessionStorage.getItem("token"),
      },
      body: JSON.stringify({
        message: this.state.message
      })
    })
    .then(response => response.json())
    .then(data => sessionStorage.setItem(data.message, data.id))
  }


  render(){
    return(
      <div className="wrapper">
      <form  className="form-signin" onSubmit={this.envoiMessage}>
        <h2 className="form-signin-heading">Envoi Message</h2>
        <label>
        Message : 
        <textarea className="form-control" rows="3" name="message" placeholder="Message" required="" onChange={this.handleChange}/>
        </label>
        <br/>
        <br/>
         <input className="btn btn-lg btn-primary btn-block" type="submit" value="Envoyer"/>
        <br/>
        <br/>
      </form>
      </div>
    );
  }

}

module.exports = EnvoiMessage;



