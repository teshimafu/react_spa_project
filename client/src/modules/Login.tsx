import { Props, authActions } from './Auth';
import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReduxState } from 'src/store';
import { Dispatch, Action } from 'redux';
import firebase from '../firebase'
import { setUserInfo } from 'src/containers/AuthContainer';

class Login extends React.Component<Props> {

    public componentWillReceiveProps() {
        this.props.refLogin()
    }

    public render() {
        return (
            this.props.userInfo.uid ? (
                <Redirect to={'/'} />
            ) : (
                    <button onClick={this.props.login}>Google Login</button>
                )
        );
    }
}

function mapDispatchToProps(dispatch: Dispatch<Action<string>>) {
    return {
        login: () => {
            const provider = new firebase.auth.GoogleAuthProvider()
            firebase.auth().signInWithPopup(provider)
                .then(response => {
                    dispatch(authActions.login(setUserInfo(response.user)))
                })
        }
    };
}

function mapStateToProps(state: ReduxState) {
    return Object.assign({}, { userInfo: state.userInfo });
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);