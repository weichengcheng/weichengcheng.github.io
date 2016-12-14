var li = $('.menu_list').children();
var lis = $('.list_content').children();
var left = $('.list_left').children();
var right = $('.list_right').children();

var right_active = document.querySelector('.actives .right_active');
var list_content = document.querySelector('.list_content');
var x = right_active.offsetHeight;
list_content.style.height = x + "px";

$(function(){
    li.click(function(){


        if($(this).index() == 0){
            li.removeClass('active');
            lis.removeClass('actives');

            for(var i = 0;i<left.length;i++){
                left[i].className = '';
                right[i].className = 'content';
            }

            left[0].className = 'left_active';
            right[0].className = 'content right_active';

            $(this).addClass('active');
            lis.eq($(this).index()).addClass('actives')

            var right_active = document.querySelector('.actives .right_active');
            var list_content = document.querySelector('.list_content');
            var x = right_active.offsetHeight;
            list_content.style.height = x + "px";
        }
        else if($(this).index() == 1){
            li.removeClass('active');
            lis.removeClass('actives');

            for(var i = 0;i<left.length;i++){
                left[i].className = '';
                right[i].className = 'content';
            }

            left[8].className = 'left_active';
            right[8].className = 'content right_active';

            $(this).addClass('active');
            lis.eq($(this).index()).addClass('actives')

            var right_active = document.querySelector('.actives .right_active');
            var list_content = document.querySelector('.list_content');
            var x = right_active.offsetHeight;
            list_content.style.height = x + "px";
        }
        else if($(this).index() == 2){
            li.removeClass('active');
            lis.removeClass('actives');

            for(var i = 0;i<left.length;i++){
                left[i].className = '';
                right[i].className = 'content';
            }

            left[15].className = 'left_active';
            right[15].className = 'content right_active';

            $(this).addClass('active');
            lis.eq($(this).index()).addClass('actives')

            var right_active = document.querySelector('.actives .right_active');
            var list_content = document.querySelector('.list_content');
            var x = right_active.offsetHeight;
            list_content.style.height = x + "px";
        }
        else if($(this).index() == 3){
            li.removeClass('active');
            lis.removeClass('actives');

            for(var i = 0;i<left.length;i++){
                left[i].className = '';
                right[i].className = 'content';
            }

            left[21].className = 'left_active';
            right[21].className = 'content right_active';

            $(this).addClass('active');
            lis.eq($(this).index()).addClass('actives')

            var right_active = document.querySelector('.actives .right_active');
            var list_content = document.querySelector('.list_content');
            var x = right_active.offsetHeight;
            list_content.style.height = x + "px";
        }
    });
});
for(var i =0 ;i<left.length;i++){
    left[i].index = i;
    left[i].onclick = function(){
        for(var i = 0;i<left.length;i++){
            left[i].className = '';
            right[i].className = 'content';
        }
        left[this.index].className = 'left_active';
        right[this.index].className = 'content right_active';

        var right_active = document.querySelector('.actives .right_active');
        var list_content = document.querySelector('.list_content');
        var x = right_active.offsetHeight;
        list_content.style.height = x + "px";
    }


}






