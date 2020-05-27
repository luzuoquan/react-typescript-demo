
import {
  createAction,
  handleActions,
} from 'redux-actions';

interface IMutationTypes {
  [propName: string]: string,
}

interface IGlobalState {
  title: string,
}

interface IAction {
  type: string,
  payload: any,
}

export const mutationTypes: IMutationTypes = {
  QUERY_TITLE: 'QUERY_TITLE',
  UPDATE_TITLE: 'UPDATE_TITLE',
};

const initialState: IGlobalState = {
  title: '云课堂',
};

export const queryTitle = createAction(mutationTypes.QUERY_TITLE);
export const updateTitle = createAction(mutationTypes.UPDATE_TITLE);

export default handleActions({
  [mutationTypes.UPDATE_TITLE](state: IGlobalState, action: IAction) {
    return {
      ...state,
      title: action.payload,
    };
  },
  [mutationTypes.QUERY_TITLE](state: IGlobalState) {
    return state;
  },
}, initialState);


// const mutations = {
//   [mutationTypes.QUERY_TITLE](state: IGlobalState, action: IAction) {
//     return {
//       ...state,
//       action: action.payload,
//     };
//   },
// };

// export default function (
//   state: IGlobalState = initialState,
//   action: IAction,
// ) {
//   if (!mutations[action.type]) return state;
//   return { ...state, ...mutations[action.type](state, action) };
// }
