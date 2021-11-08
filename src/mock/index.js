/**
 * mock数据模拟
 */
import Mock from 'mockjs'
// 获取请求地址中的参数函数
const getQuery = (url, name) => {
  const index = url.indexOf('?')
  if (index !== -1) {
    const queryStrArr = url.substr(index + 1).split('&')
    for (var i = 0; i < queryStrArr.length; i++) {
      const itemArr = queryStrArr[i].split('=')
      console.log(itemArr)
      if (itemArr[0] === name) {
        return itemArr[1]
      }
    }
  }
  return null
}
// 模拟---数据
const data = Mock.mock({
  // 用户列表
  user: [{
    'id': '@increment(1)',
    "name": '皓',
    'nickname': '昵称不能为空',
    'password': 'admin',
    'phone': 13355558880,
  }],
  // 首页banner
  banner: {},
  // 24hour
  'hourJobList|38-99': [{
    'id|1001-9999': 1001,
    'name': '@ctitle(3,6)',
    pushTime: '@datetime(HH:mm)',
    require: {
      'exp|1': ["1-3年", "3-5年", "5-10年", '不限'],
      'edu|1': ["高中", "大专", "本科", "硕士"],
      'full|1': ["全职", "兼职", "实习"],
    },
    'pay|1': ["4k-6k", "7k-9k", "10k-20k*15薪", "20k-40k", "8k-16k", ],
    'indList|1-3': ['@ctitle(2,6)'],
    'cpyImg': '/images/index/companies/cpy_logo_@natural(1,14).png',
    'cpyName': '@ctitle(2,8)公司',
    'workType|1': ['work@word(1)'],
    'finance|1': ['A轮', 'B轮', 'C轮', 'D轮', '天使轮', '上市公司'],
    'address': '@county(true)',
    'city': '@city',
    'jobDesc': {
      'obligation|3-5': ['岗位职责-@csentence(4,16)'],
      'jobRequire|3-7': ['任职要求-@csentence(8,20)'],
    }
  }],
  // 最新职位列表
  'newJobList|38-99': [{
    'id|1001-9999': 1001,
    'name': '@ctitle(3,10)',
    pushTime: '@datetime(HH:mm)',
    require: {
      'exp|1': ["1-3年", "3-5年", "5-10年", '不限'],
      'edu|1': ["高中", "大专", "本科", "硕士"],
      'full|1': ["全职", "兼职", "实习"],
    },
    'pay|1': ["4k-6k", "7k-9k", "10k-20k*15薪", "20k-40k", "8k-16k", ],
    'indList|1-3': ['@ctitle(2,6)'],
    'cpyImg': '/images/index/companies/cpy_logo_@natural(1,14).png',
    'cpyName': '@ctitle(2,8)公司',
    'workType|1': ['work@word(1)'],
    'finance|1': ['A轮', 'B轮', 'C轮', 'D轮', '天使轮', '上市公司'],
    'address': '@county(true)',
    'city': '@city',
    'jobDesc': {
      'obligation|3-5': ['岗位职责-@csentence(4,16)'],
      'jobRequire|3-7': ['任职要求-@csentence(8,20)'],
    }
  }],
  // 公司列表
  'cpyList|38-99': [{
    'id|1001-9999': 1001,
    'indList|1-3': ['@ctitle(2,3)'],
    'cpyImg': '/images/index/companies/cpy_logo_@natural(1,14).png',
    'cpyName': '@ctitle(2,8)公司',
    'finance|1': ['不需要融资', 'A轮', 'B轮', 'C轮', 'D轮', '天使轮', '上市公司'],
    'city': '@city',
    'desc': '@csentence(12,30)',
    'ms|1-99': 1,
    'job|1-99': 1,
    'jl|1-99': 1,
  }],
  // 热门链接列表
  hotLink: {
    blogroll: {
      id: 1,
      'list|20-50': ['@ctitle(2,6)'],
    },
    hotCity: {
      id: 2,
      'list|20-50': ['@city()人才网'],
    },
    hotCpy: {
      id: 3,
      'list|20-50': ['@ctitle(2,5)招聘'],
    },
    hotJob: {
      id: 4,
      'list|20-50': ['@ctitle(2,6)招聘'],
    },
    hotInd: {
      id: 5,
      'list|20-50': ['@ctitle(2,6)'],
    },
    hotKey: {
      id: 6,
      'list|20-50': ['@ctitle(2,6)'],
    }
  },
  // 广告列表
  'adlist|5-10': [{
    'id|+1': 1,
    url: "#/jobs",
    img: "@image(210x122,@color())"
  }],
  // 筛选条件
  detail: {city:{
    name: "工作地点",
    detailId: '@natural()',
    impliedCondition:"全国",
    'list|15-20': [{
      'id|+1': 1,
      name: '@city()',
      'areaList|5-10': ['@county()'],
      'metroList|2-12': ['@range(1,12)']
    }]
  }, exp:{
    name: "工作经验",
    detailId: '@natural()',
    impliedCondition:"不限",
    'list': ['在校/应届','3年及一下','3-5年','5-10年','10年以上','不要求']
  }, req:{
    name: "学历要求",
    detailId: '@natural()',
    impliedCondition:"不限",
    'list': ['大专','本科','硕士及以上','不要求']
  }, fin:{
    name: "融资阶段",
    detailId: '@natural()',
    impliedCondition:"不限",
    'list': ['为融资','天使轮','A轮','B轮','C轮','D轮及以上','上市公司','不需要融资']
  }, sca:{
    name: "公司规模",
    detailId: '@natural()',
    impliedCondition:"不限",
    'list': ['少于15人','15-50人','50-150人','150-500人','500-2000人','2000人以上']
  }, ind:{
    name: "行业领域",
    detailId: '@natural()',
    'list|10-20': ['@ctitle']
  }}
});
/**
 * 模拟---接口列表
 */
// ----------------------------user接口
// 用户登录
Mock.mock('/login', 'post', (options) => {
  let body = JSON.parse(options.body);
  const phone = body.params.phone,
    password = body.params.password;
  for (var i = 0; i < data.user.length; i++) {
    console.log(data.user[i].phone)
    if (data.user[i].phone == phone) {
      console.log("用户存在")
      if (data.user[i].password == password) {
        console.log("密码正确")
        return {
          status: 200,
          message: "登录成功",
          user: data.user[i]
        }
      } else {
        return {
          status: 200,
          message: "用户名或密码错误",
        }
      }

    } else {
      // const adduser = Mock.mock({
      //   id: '@increment(1)',
      //   name: "",
      //   nickname: "@title(3,10)",
      //   phone: phone,
      //   password: password
      // })
      // data.user.push(adduser)
      return {
        status: 200,
        message: "用户不存在",
        // user: adduser
      }
    }
  }
})
// ----------------------------user接口
// ----------------------------首页接口
// 首页24小时工作列表
Mock.mock(RegExp('/hourJobList' + '.*'), 'get', (options) => {
  const size = getQuery(options.url, 'size') ? getQuery(options.url, 'size') : 30;
  const page = getQuery(options.url, 'page') ? getQuery(options.url, 'page') : 0;
  // console.log(size);
  // console.log(getQuery(options.url),'size')
  return {
    status: 200,
    message: "成功",
    hourJobList: data.hourJobList.slice(page * size, (page + 1) * size)
  }
})
// 首页最新工作列表
Mock.mock(RegExp('/newJobList' + '.*'), 'get', (options) => {
  const size = getQuery(options.url, 'size') ? getQuery(options.url, 'size') : 30;
  const page = getQuery(options.url, 'page') ? getQuery(options.url, 'page') : 0;
  console.log(options);
  return {
    status: 200,
    message: "成功",
    newJobList: data.newJobList.slice(page * size, (page + 1) * size)
  }
})
// 首页公司列表
Mock.mock(RegExp('/cpyList' + '.*'), 'get', (options) => {
  const size = getQuery(options.url, 'size') ? getQuery(options.url, 'size') : 30;
  const page = getQuery(options.url, 'page') ? getQuery(options.url, 'page') : 0;
  return {
    status: 200,
    message: "成功",
    cpyList: data.cpyList.slice(page * size, (page + 1) * size)
  }
})
// 首页热门链接列表
Mock.mock('/hotLink', 'get', () => {
  return {
    status: 200,
    message: "成功",
    hotLink: data.hotLink
  }
})
// ----------------------------首页接口
// ----------------------------职位接口
// 广告
Mock.mock(RegExp('/adlist' + '.*'), 'get', (options) => {
  const size = getQuery(options.url, 'size') ? getQuery(options.url, 'size') : 5;
  return {
    status: 200,
    message: "成功",
    adlist: data.adlist.slice(0, size)
  }
})
// 筛选条件
Mock.mock(RegExp('/detail/city' + '.*'), 'get', () => {
  return {
    status: 200,
    message: "成功",
    city: data.detail[0]
  }
})
Mock.mock(RegExp('/detail/city' + '.*'), 'get', () => {
  return {
    status: 200,
    message: "成功",
    city: data.detail[0]
  }
})
Mock.mock(RegExp('/detail/city' + '.*'), 'get', () => {
  return {
    status: 200,
    message: "成功",
    city: data.detail[0]
  }
})
Mock.mock(RegExp('/detail' + '.*'), 'get', () => {
  return {
    status: 200,
    message: "成功",
    detail: data.detail
  }
})
// ----------------------------职位接口