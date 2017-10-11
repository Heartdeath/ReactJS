var React = require("react");
var SupMessage = require("./SupMessage");
var render  = require("react-dom").default;
var AsyncButton = require("react-async-button").default;

class RecupMessage extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {messages: [] } ;
    this.recupMessage = this.recupMessage.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
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

  clickHandler() {
      return new Promise((resolve, reject) => {
        // some async stuff
        setTimeout(resolve, 1500);
        this.recupMessage();
        
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
        <br/> Date/heure : {message.date.substr(0, 10) } / {message.date.substr(11, 11) }
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
          <br/>
           <AsyncButton
          className="btn btn-lg btn-primary btn-block"
          text="Récupération"
          pendingText="Récupération..."
          fulFilledText="Récupération réussi !"
          rejectedText="Impossible ! Try Again"
          loadingClass="isSaving"
          fulFilledClass="btn-primary"
          rejectedClass="btn-danger"
          onClick={this.clickHandler}
         />
        </div>
    );
  }

}

module.exports = RecupMessage;



