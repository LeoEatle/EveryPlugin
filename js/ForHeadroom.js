// 获取页面元素
var myElement = document.querySelector("header");
// 创建 Headroom 对象，将页面元素传递进去
var headroom  = new Headroom(myElement,
{
  "tolerance": 5,
  "offset": 205,
  "classes": {
    "initial": "animated",
    "pinned": "flipInX",
    "unpinned": "flipOutX"
  }
 });
// 初始化
headroom.init(); 