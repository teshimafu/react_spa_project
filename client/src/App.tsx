import * as React from 'react'
import './App.css'
import firebase from './firebase'
import Container from './containers/Container';

// interface UserStatus {
//   user: firebase.User | null
// }

class App extends React.Component {
  // public state: UserStatus = {
  //   user: null
  // }

  public componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }

  public login() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  public logout() {
    firebase.auth().signOut()
  }

  public render() {
    return (
      <div className="App">
        <Container />
      </div>
      // <div className="App">
      //   <p className="App-intro">
      //     UID: {this.state.user && this.state.user.uid}
      //   </p>

      //   {this.state.user ? (
      //     <button onClick={this.logout}>Google Logout</button>
      //   ) : (
      //       <button onClick={this.login}>Google Login</button>
      //     )}
      // </div>
    )
  }
}

export default App