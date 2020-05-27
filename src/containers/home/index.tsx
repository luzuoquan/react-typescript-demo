import React, { Component, Dispatch } from 'react';
import { RouteChildrenProps } from 'react-router';
import { connect } from 'react-redux';
import { updateTitle } from '@/models/global';

type IProps = {
  updateTitle: any,
  globalInfo: any,
} & RouteChildrenProps;

interface IState {
  [propName: string]: string,
}

type IStateProps = {
  globalInfo: any
} & IState;

interface IDispatchActionProps {
  updateTitle: any,
  dispatch?: Dispatch<any>,
}

const mapDispatchToProps: IDispatchActionProps = {
  updateTitle,
};

@(connect((state: IStateProps) => ({
  globalInfo: state.globalInfo,
}), mapDispatchToProps) as any)
export default class Home extends Component<IProps, IState> {
  handleClick: () => void = () => {
    const { updateTitle } = this.props;
    updateTitle('1234');
  };

  render() {
    const { globalInfo: { title } } = this.props;
    return (
      <div>
        <div>
          React TypeScript
          {title}
        </div>
        <button onClick={this.handleClick} type="button">点击事件</button>
      </div>
    );
  }
}
