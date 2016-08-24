app.init().done(function(){
  setMidBarHeight('485px');
}).done(parseHashAndTrigger);
//对hash部分进行解析同时触发事件

var app={
  modules:[],
  map:{
    "wsbswsq":_wsbswsq
  },
  setting:{
    'wsbswsq':{
      'refresh':false
    }
  },
  containers:{},
  init: function(){
    return _util.spJson({
      type:'get',
      url:'ajsqModules.aj',
      data:{"ajxh":ajxh,"currentAjzt":getCurrentAjzt}
    },this).done(this.renderModules)
    .done(this.setupModules)
    .fail(_util.ajaxError)
  }
};
var _util={
  spJson:function(){

  },
  blankDeferred:function(){

  },
  retrieveBaseInfo:function(){

  },
  renderBaseInfo:function(){

  },
  getSpjg:function getSpjg(spjg){

  },
  inError:function($div){

  },
  outerError:function($div){

  },
  formize:function($target){

  },
  textize:function(flone){

  },
  renderOpers:function(ops,bh){

  },
  attachEvents:function($target,eventHandlers,_this){

  },
  pass:function(){

  },
  isIE8:function(){

  },
  throttle: function(func, wait, options) {

  },
  ajaxErrorHandler: function(xhr){

  }
};
