import React, { Component, Dispatch } from 'react';
import { RouteChildrenProps } from 'react-router';
import { connect } from 'react-redux';
import { updateTitle } from '@/models/home';
import fetch from '@/utils/fetch';
import { CommonPageProps, CommonPageState } from '@/types';
import { UserInfo } from '@/models/home';

type TProps = {
  title: string;
  updateTitle: any;
} & RouteChildrenProps;


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
  ...state.homeReducer,
}), mapDispatchToProps) as any)
export default class Home extends Component<CommonPageProps, UserInfo> {
  constructor(props: TProps) {
    super(props);
    this.state = {
      name: '',
      avatarUrl: '',
      location:'',
    };
  }

  handleClick = (): void => {
    const githubName = 'luzuoquan'; // 这里可以替换成有效的github name
    fetch({
      url: `https://api.github.com/users/${githubName}`,
    })
      .then((res) => {
        this.setState({
          name: res.name,
          avatarUrl: res.avatar_url,
          location: res.location,
        });
      });
  }

  render(): JSX.Element {
    const {
      name,
      avatarUrl,
      location,
    } = this.state;
    return (
      <div className="home">
        <button type="button" onClick={this.handleClick}>拉取个人github信息</button>
        {avatarUrl && (
          <div>
            头像：
            <img alt="avator" src={avatarUrl} style={{ display: 'block', width: '100px' }} />
          </div>
        )}
        <div style={{ marginTop: '20px' }}>
          nickname:
          {name}
        </div>
        <div>
          Location: {location}
        </div>
      </div>
    );
  }
}
