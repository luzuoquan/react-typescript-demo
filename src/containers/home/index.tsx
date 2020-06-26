import React, { Component, Dispatch, ReactNode } from 'react';
import { RouteChildrenProps } from 'react-router';
import { connect } from 'react-redux';
import { updateTitle } from '@/models/global';

type IProps = {
  updateTitle: any;
  globalInfo: any;
} & RouteChildrenProps;

interface Istate {
  [propName: string]: string;
}

type IStateProps = {
  globalInfo: any;
} & Istate;

interface IdispatchActionProps {
  updateTitle: any;
  dispatch?: Dispatch<any>;
}

const mapDispatchToProps: IdispatchActionProps = {
  updateTitle,
};

@(connect((state: IStateProps) => ({
  globalInfo: state.globalInfo,
}), mapDispatchToProps) as any)
export default class Home extends Component<IProps, Istate> {
  handleClick: () => void = () => {
    const { updateTitle } = this.props;
    updateTitle('1234');
  };

  render(): ReactNode {
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
