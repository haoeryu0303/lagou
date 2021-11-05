import Mock from 'mockjs'
const data = Mock.mock({
  "list|20-60": [
    {
      "id": '@increment(1000)',
      "title": "@ctitle",
      "content": "@cparagraph",
      "add_time": "@date(yyyy-MM-dd hh:mm:ss)"
    }
  ]
});
Mock.mock('/user', 'post', () => {
  return {
    status: 200,
    message: "获取信息成功",
    list:data.list
  }
})