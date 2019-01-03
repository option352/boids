enchant();

var titleScene = Class.create(Scene, {
  initialize: function()
  {
    enchant.Scene.call(this);
    this.backgroundColor = "rgb(255, 180, 180)";
    
    this.render();
    
  },
  
  onenterframe:function()
  {
    this.render();
  },
  
  ontouchend:function(e)
  {
  },
  
  render:function()
  {
    var context = this.lineSurface.context;
    context.clearRect(0, 0, this.lineSurface.width, this.lineSurface.height);
  }
});

//配列から重複なく要素を取り出す
function pickPair(array, num = 2)
{
  var a = array;
  var t = {} //取り出した要素に代入する要素
  var ret = [];
  var len = a.length;
  var n = num < len ? num : len;
  console.log(n, num);
  while(n-- > 0)
  {
    var i = Math.random() * len | 0 //ビット演算をはさむことで整数に変換
    ret[n] = t[i] || a[i]; // 代入要素があれば使用、そうでなければ元の配列の要素を取り出す
    --len;
    t[i] = t[len] || a[len]; // 配列末尾の要素を取り出した要素の項番に設定
  }
  console.log(array, ret);
  return ret;
  
}

