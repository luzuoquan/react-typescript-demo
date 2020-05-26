import React, { Component, Dispatch } from 'react';
import { RouteChildrenProps } from 'react-router';
import { connect } from 'react-redux';
import { queryTitle } from '@/models/global';

type IProps = {
  queryTitle: any,
} & RouteChildrenProps;

interface IState {
  [propName: string]: string,
}

type IStateProps = {
  globalInfo: any
} & IState;

interface IDispatchActionProps {
  queryTitle: any,
  dispatch?: Dispatch<any>,
}

const mapDispatchToProps: IDispatchActionProps = {
  queryTitle,
};

@(connect((state: IStateProps) => ({
  globalInfo: state.globalInfo,
}), mapDispatchToProps) as any)
export default class Home extends Component<IProps, IState> {
  handleClick: () => void = () => {
    const { queryTitle } = this.props;
    queryTitle();
  };

  render() {
    return (
      <div>
        React TypeScript
        <button onClick={this.handleClick} type="button">点击事件</button>
      </div>
    );
  }
}
