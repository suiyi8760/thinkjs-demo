import React from 'react';
import { Link, Redirect, Switch, Route } from 'dva/router';
import DocumentTitle from 'react-document-title';
import { Icon } from 'antd';
import GlobalFooter from '../components/GlobalFooter';
import styles from './UserLayout.less';
import logo from '../assets/logo.svg';
import { getRoutes } from '../utils/utils';
import config from '../utils/config';

const { webTitle, copyright } = config;

const links = [
  {
    key: 'github',
    title: <Icon type="github"/>,
    href: 'https://github.com/suiyi8760/ztMarket',
    blankTarget: true,
  }
];

const copyrightComponent = <div>Copyright <Icon type="copyright"/> {copyright}</div>;

class UserLayout extends React.PureComponent {
  getPageTitle() {
    const { routerData, location } = this.props;
    const { pathname } = location;
    let title = webTitle;

    if (routerData[pathname] && routerData[pathname].name) {
      title = `${routerData[pathname].name} - ${webTitle}`;
    }
    return title;
  }

  render() {
    const { routerData, match } = this.props;

    return (
      <DocumentTitle title={this.getPageTitle()}>
        <div className={styles.container}>
          <div>
            <div className={styles.top}>
              <div className={styles.header}>
                <Link to="/">
                  {/*<img alt="logo" className={styles.logo} src={logo}/>*/}
                  <div className={styles.logo}
                       style={{ display: 'inline-block', width: 44, height: 44, background: '#1890ff' }}></div>
                  <span className={styles.title}>{webTitle}</span>
                </Link>
              </div>
            </div>
            <Switch>
              {
                getRoutes(match.path, routerData).map(item =>
                  (
                    <Route
                      key={item.key}
                      path={item.path}
                      component={item.component}
                      exact={item.exact}
                    />
                  )
                )
              }
              <Redirect exact from="/user" to="/user/login"/>
            </Switch>
          </div>
          <GlobalFooter className={styles.footer} links={links} copyright={copyrightComponent}/>
        </div>
      </DocumentTitle>
    );
  }
}

export default UserLayout;
