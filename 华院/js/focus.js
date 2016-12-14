var li = $('.asideLeft').children();
var lis = $('.asideRight').children();

var length = li.length;


var actives = document.querySelector('.actives');
var wrap = document.querySelector('.wrap');
var x = actives.offsetHeight;
wrap.style.height = x + "px";

for(var i=0;i<length;i++){
    li[i].index = i;
    li[i].onclick = function () {
        for (var i=0;i<length;i++){
            li[i].className='';
            lis[i].className='a';
        }
        li[this.index].className='active';
        lis[this.index].className='a actives';
        var actives = document.querySelector('.actives');
        var wrap = document.querySelector('.wrap');
        var x = actives.offsetHeight;
        wrap.style.height = x + "px";
    }
}