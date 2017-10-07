var React = require("react");
var ReactDOM = require("react-dom");
var UserForm = require("./components/UserForm");
var SignIn = require("./components/SignIn");
var EnvoiMessage = require("./components/EnvoiMessage");
var RecupMessage = require("./components/RecupMessage");
var SupMessage = require("./components/SupMessage");

ReactDOM.render(
  <UserForm />,
  document.getElementById('main')
);
ReactDOM.render(
  <SignIn />,
  document.getElementById('connexion')
);
ReactDOM.render(
  <EnvoiMessage />,
  document.getElementById('envoimessage')
);
ReactDOM.render(
  <RecupMessage />,
  document.getElementById('recupmessage')
);
ReactDOM.render(
  <SupMessage />,
  document.getElementById('supmessage')
);

