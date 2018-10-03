import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

//Embedding Expressions in JSX
/*const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);
*/

//JSX is an Expression Too
/*const username = {
    firstname: 'Zain',
    lastname: 'Ansari'
};
const fullname = (
    <h1>
        Hello { username.firstname + ' ' + username.lastname }
    </h1>
);
ReactDOM.render(
    fullname,
    document.getElementById('root')
);
*/

//Rendering an Element into the DOM
/*function tick() {
  const element = (
    <div>
    <h1>Hello, world!</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}  
setInterval(tick, 1000);
*/

//Components and Props ( E6 )
/*class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
const element = <Welcome name="Zain" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
*/

//Handling Events
/*class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};  
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    return(
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}  
ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);*/

//Conditional Rendering
/*class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }
  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />      
        {button}
      </div>
    );
  }
}
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}  
function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}  
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
    Logout
    </button>
  );
}
ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
*/


const styleMe = <h1 style={{ background: 'lightblue', color: 'darkred' }}>Please style me! I am so bland!</h1>;
ReactDOM.render(
	styleMe, 
	document.getElementById('root')
);

registerServiceWorker();
