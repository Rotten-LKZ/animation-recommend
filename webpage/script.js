/**
 * 模板：
 * <div class="anime">
    <h1>Title</h1>
    <h4>Original title</h4>
    <span>Tag 1</span><span>Tag 2</span>
    <p>Description</p>
    <p>标签：<span>Tag 1</span><span>Tag 2</span></p>
    <p>观看形式：<span>轻小说</span></p>
    <p class="time">Time</p>
    <hr />
  </div>
 */

var main = document.querySelector('main');
var content = '<p>共计 ' + data.length + ' 条</p>';
for (let i = 0;i < data.length;i++) {
  var tags = "";
  for (let a = 0;a < data[i].tags.length;a++) {
    tags += '<span>' + data[i].tags[a] + '</span>';
  }
  var forms = "";
  for (let a = 0;a < data[i].form.length;a++) {
    forms += '<span>' + data[i].form[a] + '</span>';
  }
  content += '<div class="anime">' + 
      '<h1>' + data[i].title + '</h1>' + 
      '<h4>' + data[i].original_title +  '</h4>' +
      '<p>' + data[i].description + '</p>' +
      '<p>标签：' + tags + '</p>' +
      '<p>观看形式：' + forms + '</p>' +
      '<p class="time">' + data[i].time + '</p><hr /></div>';
}
main.innerHTML = content;