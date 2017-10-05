var React = require("react");

class SignIn extends React.Component {
	
  constructor(props){
    super(props);
    this.state = {name: '',  password: '', message: ''};
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(){
    var name = this.refs.name.value;
    var password = this.refs.password.value;
    this.setState({
      'name': name,
      'password' : password,
    })
    console.log(this.state);

  fetch('https://messy.now.sh/authenticate', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: this.refs.name.value,
      password: this.refs.password.value,
    })
  })
    .then(response => response.json())
    .then(data => sessionStorage.setItem("token", data.token))

  }
  
  render(){
    return(
        <div>
        <h1>Connexion</h1>
       	<label>
      	Nom utilisateur : 
      	<input type="text" ref="name" />
        </label>
        <br/>
        <br/>
        <label>
        Mot de passe : 
        <input type="text" ref="password" />
        </label>
        <br/>
        <br/>	
        <button type="button" onClick={this.submitForm}>Connexion</button>


        <h2>Valeurs entrées</h2>
        <b>
          {this.state.name} ,  {this.state.password}
        </b>
        <br/>
        <br/>
      </div>
    );
  }

}

module.exports = SignIn;
