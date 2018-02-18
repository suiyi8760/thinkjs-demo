export const getNotices = (req, res) => {
  res.json([
    {
      id: '000000001',
      title: '订单号12321321',
      description:'Apple/苹果 iPhone 7 6s macbook iPadmini air pro Earpods耳机x1 - $27',
      datetime: '2017-08-09',
      extra: '交易完成',
      status: 'todo',
      type: '通知',
    },
    {
      id: '000000002',
      title: '订单号12343445',
      description:'Apple/苹果 iPhone 7 6s macbook iPadmini air pro Earpods耳机x1 - $27',
      datetime: '2017-08-08',
      extra:'待发货',
      status: 'urgent',
      type: '通知',
    },
    {
      id: '000000003',
      title: '订单号12333216',
      description:'Apple/苹果 iPhone 7 6s macbook iPadmini air pro Earpods耳机x1 - $27',
      datetime: '2017-08-07',
      read: true,
      extra: '待付款',
      status: 'processing',
      type: '通知',
    },
    {
      id: '000000004',
      title: '订单号12333219',
      description:'Apple/苹果 iPhone 7 6s macbook iPadmini air pro Earpods耳机x1 - $27',
      datetime: '2017-08-07',
      read: true,
      extra: '已发货',
      status: 'doing',
      type: '通知',
    },
  ]);
};
export default {
  getNotices,
};
