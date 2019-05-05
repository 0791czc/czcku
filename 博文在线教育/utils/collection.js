// 收藏与取消收藏课程js
var collection = [];
// 添加收藏课程
function addCollection(id){
  collection.push(id);
  wx.setStorage({
    key: 'collection',
    data: collection,
  })
}
// 取消收藏课程
function removeCollection(id){
  collection.remove(id);
  wx.setStorage({
    key: 'collection',
    data: collection,
  })
}
// 封装好的从数组中移除某一个元素的方法
Array.prototype.remove = function(val){
  var index = this.indexOf(val);
  if(index>-1){
    this.splice(index,1);
  }
}
// 把他们暴露出来
module.exports = {
  addCollection: addCollection,
  removeCollection: removeCollection
}