import actionCreatorFactory from 'typescript-fsa';
import { UserInfo } from 'src/reducers/AuthReducer';

const actionCreator = actionCreatorFactory();

export const authActions = {
    login: actionCreator<UserInfo>('auth/login'),
    reflogin: actionCreator('auth/reflogin'),
    logout: actionCreator('auth/logout')
};
