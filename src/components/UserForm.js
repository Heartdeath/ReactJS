var React = require("react");

class UserForm extends React.Component {
	
  constructor(props){
    super(props);
    this.state = {name: '', image: '', password: ''};
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(){
    var name = this.refs.name.value;
    var image = this.refs.image.value;
    var password = this.refs.password.value;
    this.setState({
      'name': name,
      'image': image,
      'password' : password,
    })
    console.log(this.state);
  
	  fetch('https://messy.now.sh/join', {
	  method: 'POST',
	  headers: {
	    'Accept': 'application/json',
	    'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({
	    name: this.refs.name.value,
	    image: this.refs.image.value,
	    password: this.refs.password.value,
	  })
	})
  }
  


  render(){
    return(
      <div>
      	<h1>Creation User</h1>
      	<label>
      	Nom utilisateur : 
      	<input type="text" ref="name" />
        </label>
        <br/>
        <br/>
        <label>
        Url image : 
        <input type="text" ref="image" />
        </label>
        <br/>
        	<br/>
        <label>
        Mot de passe : 
        <input type="text" ref="password" />
        </label>
        <br/>
        <br/>	
        <button type="button" onClick={this.submitForm}>Envoyer</button>
        
        <h2>Valeurs entrées</h2>
        <b>
          {this.state.name}, {this.state.image}, {this.state.password}
        </b>
        <br/>
        <br/>
      </div>
    )
  }

}

module.exports = UserForm;
