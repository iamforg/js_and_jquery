# js_and_jquery
## jquery 选择器
### 类选择器与id选择器返回类型
类选择器返回的是多个，id只选中文档中遇到的第一个符合条件。
并返回一个object对象。
## Deferred(延迟)
### deferred对象
### done()
当延迟对象解决时（resolve）调用添加处理程序。done的参数可以是函数或者函数数组  
eg. done(funcA,[funcB,funcC])

done还可以链接多个，但触发点都是最前面的deferred对象。

var dfd=$.Deferred();
dfd.done(function(){
  alert("a");
  }).done(function(){
    alert("b");
    });
## apply
arguments时js中特有的对象属性（Arguments属性），用来引用函数的实际参数。  
Array.prototype.slice.apply(arguments)将arguments转化为数组。
## jquery  hide() show()
jquery对象调用hide()将本身的display设为none。show（）相反
