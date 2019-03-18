import { connect } from 'react-redux'
import { Dispatch, Action } from 'redux'
import { ReduxState } from '../store'
import firebase from '../firebase'
import { authActions } from '../modules/Auth'
import { NavigationBar } from 'src/modules/NavigationBar';

function mapDispatchToProps(dispatch: Dispatch<Action<string>>) {
    return {
        logout: () => {
            firebase.auth().signOut()
            dispatch(authActions.logout())
        }
    };
}

function mapStateToProps(state: ReduxState) {
    return Object.assign({}, { userInfo: state.userInfo });
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationBar)