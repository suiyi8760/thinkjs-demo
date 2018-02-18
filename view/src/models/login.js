import { routerRedux } from 'dva/router';
import { fakeAccountLogin, queryAuthority } from '../services/api';
import { setAuthorized } from '../utils/authority';

export default {
  namespace: 'login',

  state: {
    status: undefined,
  },

  effects: {
    * login({ payload }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload);
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
      // Login successfully
      if (!response.code) {
        // Login success after permission changes to admin or user
        // The refresh will automatically redirect to the home page
        // yield put(routerRedux.push('/'));
        yield put(routerRedux.push('/'));
      }
    },
    * logout(_, { put }) {
      yield put({
        type: 'changeLoginStatus',
        payload: {
          authorized: '',
        },
      });
      // yield put(routerRedux.push('/user/login'));
      // Login out after permission changes to admin or user
      // The refresh will automatically redirect to the login page
      yield put(routerRedux.push('/user'));
    },
    * queryAuthority({ payload }, { call, put }) {
      try {
        const response = yield call(queryAuthority);
        if (!response.code) {
          switch (payload) {
            case '/user':
            case '/user/login':
              yield put(routerRedux.push('/'));
            default:
              return;
          }
        } else {
          switch (payload) {
            case '/user':
            case '/user/login':
              return;
            default:
              yield put(routerRedux.push('/user'));
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      setAuthorized(payload.authorized);
      return {
        ...state,
      };
    },
  },

  subscriptions: {
    setup({ history, dispatch }) {
      history.listen(location => {
        const { pathname } = location;
        dispatch({ type: 'queryAuthority', payload: pathname });
      })
    },
  },
};
