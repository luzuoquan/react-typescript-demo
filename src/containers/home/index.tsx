import React, { Component, Dispatch } from 'react';
import { RouteChildrenProps } from 'react-router';
import { connect } from 'react-redux';
import { updateTitle } from '@/models/home';
import fetch from '@/utils/fetch';

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
  constructor(props: TProps) {
    super(props);
    this.state = {
      userInfo: {},
    };
  }

  handleClick = (): void => {
    const githubName = 'luzuoquan'; // 这里可以替换成有效的github name
    fetch({
      url: `https://api.github.com/users/${githubName}`,
    })
      .then((res) => {
        this.setState({
          userInfo: res,
        });
      });
  }

  render(): JSX.Element {
    const { userInfo } = this.state;
    return (
      <div className="home">
        <button type="button" onClick={this.handleClick}>拉取个人github信息</button>
        {userInfo?.avatar_url && (
          <div>
            头像：
            <img alt="avator" src={userInfo.avatar_url} style={{ display: 'block', width: '100px' }} />
          </div>
        )}
        <div style={{ marginTop: '20px' }}>
          nickname:
          {userInfo?.name}
        </div>
      </div>
    );
  }
}
