/**
 * Created by lanou on 16/12/10.
 */
var li = $('.asideLeft').children();
var lis = $('.asideRight').children();

var length = li.length;


for(var i=0;i<length;i++){
    li[i].index = i;
    li[i].onclick = function () {
        for (var i=0;i<length;i++){
            li[i].className='';
            lis[i].className='';
        }
        li[this.index].className='active';
        lis[this.index].className='actives';

        var actives = document.querySelector('.actives');
        var wrap = document.querySelector('.wrap');
        var x = actives.offsetHeight;
        wrap.style.height = x + "px";
    }
}

var actives = document.querySelector('.actives');
var wrap = document.querySelector('.wrap');
var x = actives.offsetHeight;
wrap.style.height = x + "px";