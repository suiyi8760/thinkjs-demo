import mockjs from 'mockjs';
import { getNotices } from './mock/notices';
import { format, delay } from 'roadhog-api-doc';

// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
const proxy = {
  // 支持值为 Object 和 Array
  'GET /api/currentUser': {
    $desc: "获取当前用户接口",
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: {
      name: 'ZiTeng',
      avatar: 'https://avatars0.githubusercontent.com/u/22424013?s=72&v=4',
      userid: '00000001',
      notifyCount: 4,
    },
  },
  'POST /api/login/account': (req, res) => {
    const { password, userName } = req.body;
    if (password === '123456' && userName === 'admin') {
      res.send({
        code: 0,
        message: 'success',
        authorized: 'token',
      });
      return;
    }
    res.send({
      code: 102,
      message: '用户名或密码错误',
    });
  },
  'GET /api/currentAuthor': (req, res) => {
    if (req.get('Authorized') && req.get('Authorized') === 'token') {
      return res.send({
        code: 0,
        role: 'admin'
      });
    } else if (!req.get('Authorized')) {
      return res.send({
        code: 1,
        message: '用户未登录'
      });
    }
    return res.status(401).send({
      code: 2
    });
  },
  'GET /api/notices': getNotices,
};

export default noProxy ? {} : delay(proxy, 1000);
