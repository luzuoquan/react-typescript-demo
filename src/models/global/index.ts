
import {
  createAction,
  handleActions,
} from 'redux-actions';

interface ImutationTypes {
  [propName: string]: string;
}

interface IglobalState {
  title: string;
}

interface Iaction {
  type: string;
  payload: any;
}

export const mutationTypes: ImutationTypes = {
  QUERY_TITLE: 'QUERY_TITLE',
  UPDATE_TITLE: 'UPDATE_TITLE',
};

const initialState: IglobalState = {
  title: '云课堂',
};

export const queryTitle = createAction(mutationTypes.QUERY_TITLE);
export const updateTitle = createAction(mutationTypes.UPDATE_TITLE);

export default handleActions({
  [mutationTypes.UPDATE_TITLE](state: IglobalState, action: Iaction) {
    return {
      ...state,
      title: action.payload,
    };
  },
  [mutationTypes.QUERY_TITLE](state: IglobalState) {
    return state;
  },
}, initialState);
