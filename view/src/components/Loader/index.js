import { Spin } from 'antd';
import classnames from 'classnames';
import styles from './index.less'

const Loader = ({ spinning }) => {
  return (
    <div className={classnames(styles.loader_container, {
      [styles.hide]: !spinning,
      [styles.show]: spinning,
    })}>
      <Spin size="large" spinning={spinning}/>
    </div>
  )
}

export default Loader;
