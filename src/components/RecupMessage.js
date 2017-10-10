var React = require("react");
var SupMessage = require("./SupMessage");

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
  .then(results => { return results.json();})
  .then(data => { this.setState({messages: data });
    var rechargement = setTimeout(this.recupMessage.bind(this), 500);
  })
  
  }

  render(){
    let messages = this.state.messages.map((message) => {
    return(
      <div className="wrapper" style={{border: "solid 1px black" }} key={message.date}>
        <br/>Image : <img src={message.user.image} height="80" width="80"/> 
        <br/> ----------------------------------------------------------------------------------- 
        <br/>Pseudo : {message.user.name}  
        <br/> ----------------------------------------------------------------------------------- 
        <br/> Date/heure : {message.date} 
        <br/> ----------------------------------------------------------------------------------- 
        <br/> Message : {message.message} 
        
        <SupMessage idUser={this.props.idUser} idUserMessage={message.user_id} idMessage={message.id} token={this.props.token}/>
      </div>
      )
    });
    return(
        <div className="wrapper">
          <h2 className="form-signin-heading">Liste de messages</h2>
          <div style={{overflow: "scroll", width : "1800px", height:"500px", border: "solid 1px black" }}>
            <h2>{messages}</h2>
            <br/>
          </div>
          <button className ="btn btn-primary" type="button" onClick={this.recupMessage}>Récupération</button>
          <button className = "btn btn-primary" type="button" onClick={this.rechargement=null}>Stop Récupération</button>
        </div>
    );
  }

}

module.exports = RecupMessage;



