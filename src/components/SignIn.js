var React = require("react");

class SignIn extends React.Component {
  
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.connexion = this.connexion.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.name] : event.target.value});
  }

  connexion(event){
    event.preventDefault();
    fetch('https://messy.now.sh/authenticate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        password: this.state.password,
      })
    })
    .then(resultat => {return resultat.json()})
    .then(data => {this.props.onUserLogged(data);
    })
  }

  
  render(){
    return(
       <div className="wrapper">
        <form className="form-signin" onSubmit={this.connexion}>
        <h2 className="form-signin-heading">Connexion</h2>
          <label>
            Pseudo : 
            <input className="form-control" type="text" name="name" placeholder="Pseudo" required=""  onChange={this.handleChange}/>
          </label>
          <label>
            Mot de passe : 
            <input className="form-control" type="password" name="password" placeholder="Mot de passe"  required=""  onChange={this.handleChange}/>
          </label>
          <input className="btn btn-lg btn-primary btn-block" type="submit" value="Se connecter"/>
        </form>
      </div>
      );
  }
}


module.exports = SignIn;




