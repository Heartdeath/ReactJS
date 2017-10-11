var React = require("react");
var render  = require("react-dom").default;
var AsyncButton = require("react-async-button").default;

class EnvoiMessage extends React.Component {
  
  constructor(props){
    super(props);
    this.envoiMessage = this.envoiMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
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
 
 clickHandler(event) {
    return new Promise((resolve, reject) => {
      // some async stuff
      setTimeout(resolve, 500);
      this.envoiMessage(event);
      
    })
  }

  render(){
    return(
      <div>
      <form>
      <div className="panel-footer">
          <div className="input-group">
              <input id="btn-input" type="text" className="form-control input-sm" name="message" onChange={this.handleChange} placeholder="Tape ton message ici..." />
                  <span className="input-group-btn">
                    <AsyncButton
                      className="btn btn-lg btn-primary btn-block"
                      text="Envoi"
                      pendingText="Envoi du message..."
                      fulFilledText="Envoi réussi !"
                      rejectedText="Impossible ! Taper un message"
                      loadingClass="isSaving"
                      fulFilledClass="btn-primary"
                      rejectedClass="btn-danger"
                      onClick={this.clickHandler}
                     />
                  </span>
            </div>
          </div>
          <br/>
      </form>
      </div>
    );
  }

}

module.exports = EnvoiMessage;



