var React = require("react");
var Link = require ("react-router");
var Button = require ("react-bootstrap-button-loader");

class UserForm extends React.Component {
  
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.name] : event.target.value});
  }
  

  handleSubmit(event){
    event.preventDefault();

    fetch('https://messy.now.sh/join', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        password: this.state.password,
        image: this.state.image,
      })
    })
    .then(results =>{return results.json();})
    .then(data => {this.setState({token: data});this.props.onUserCreated(data);})
  }

  
  render(){
    return(
      <div className="wrapper">
      <form className="form-signin" onSubmit={this.handleSubmit}>
        <h2 className="form-signin-heading">Inscription</h2>
        <label>
        Pseudo : 
        <input id="pseudo "className="form-control" type="text" name="name" placeholder="Pseudo" required="" onChange={this.handleChange} />
        </label>
        <label>
        Url image : 
        <input className="form-control" type="url" name="image" placeholder="Url" required="" onChange={this.handleChange}  />
        </label>
        <label>
        Mot de passe : 
        <input className="form-control" type="password" name="password" placeholder="Mot de passe"  required="" onChange={this.handleChange} />
        </label>
          <input className="btn btn-lg btn-primary btn-block" type="submit" value="S'enregistrer"/>
        </form>
        <br/>
      </div>
    )
  }
}


module.exports = UserForm;




