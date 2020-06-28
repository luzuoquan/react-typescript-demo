import React, { Component, ReactNode, Dispatch } from 'react';
import { RouteChildrenProps } from 'react-router';
import { connect } from 'react-redux';
import { unstable_trace as track } from 'scheduler/tracing';
import { updateTitle } from '@/models/home';

type TProps = {
  title: string;
  updateTitle: any;
} & RouteChildrenProps;

interface Istate {
  [propName: string]: any;
}

interface Istateprops {
  homeReducer: any;
}

interface IdispatchToProps {
  updateTitle: any;
  dispatch?: Dispatch<any>;
}

const mapDispatchToProps: IdispatchToProps = {
  updateTitle,
};

@(connect((state: Istateprops) => ({
  title: state.homeReducer.title,
}), mapDispatchToProps) as any)
export default class Home extends Component<TProps, Istate> {
  handleClick: () => void = () => {
    const { updateTitle } = this.props;
    // console.log(track);
    track('update title', performance.now(), () => {
      updateTitle('React TypeScript');
    });
  }

  render(): ReactNode {
    const { title } = this.props;
    return (
      <div className="home">
        <div>
          {title}
        </div>
        <button type="button" onClick={this.handleClick}>更改</button>
      </div>
    );
  }
}
