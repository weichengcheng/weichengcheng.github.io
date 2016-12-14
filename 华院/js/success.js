/**
 * Created by lanou on 16/11/26.
 */
var li = $('.menu_list').children();
var lis = $('.list_content').children();
var left = $('.list_left').children();
var right = $('.list_right').children();

var length = li.length;
var length1 = left.length;

var right_active = document.querySelector('.actives .right_active');
var list_content = document.querySelector('.list_content');
var x = right_active.offsetHeight;
list_content.style.height = x + "px";

for(var i = 0;i<length;i++){
    li[i].index = i;
    li[i].onclick = function () {
        for(var i = 0;i<length;i++){
            li[i].className = '';
            lis[i].className = 'content';
        }
        li[this.index].className = 'active';
        lis[this.index].className = 'content actives';

        if(this.index == 0){
            for(var i = 0;i<length1;i++){
                left[i].index = i;
                left[i].onclick = function () {
                    for(var i = 0;i<length1;i++){
                        left[i].className = '';
                        right[i].className = '';
                    }
                    left[this.index].className = 'left_active';
                    right[this.index].className = 'right_active';
                }
                left[i].className = '';
                right[i].className = '';
            }
            left[0].className = 'left_active';
            right[0].className = 'right_active';
            var right_active = document.querySelector('.actives .right_active');
            var list_content = document.querySelector('.list_content');
            var x = right_active.offsetHeight;
            list_content.style.height = x + "px";
        }

        if(this.index == 1){
            for(var i = 0;i<length1;i++){
                left[i].index = i;
                left[i].onclick = function () {
                    for(var i = 0;i<length1;i++){
                        left[i].className = '';
                        right[i].className = '';
                    }
                    left[this.index].className = 'left_active';
                    right[this.index].className = 'right_active';
                }
                left[i].className = '';
                right[i].className = '';
            }
            left[5].className = 'left_active';
            right[5].className = 'right_active';
            var right_active = document.querySelector('.actives .right_active');
            var list_content = document.querySelector('.list_content');
            var x = right_active.offsetHeight;
            list_content.style.height = x + "px";
        }

        if(this.index == 2){
            for(var i = 0;i<length1;i++){
                left[i].index = i;
                left[i].onclick = function () {
                    for(var i = 0;i<length1;i++){
                        left[i].className = '';
                        right[i].className = '';
                    }
                    left[this.index].className = 'left_active';
                    right[this.index].className = 'right_active';
                }
                left[i].className = '';
                right[i].className = '';
            }
            left[12].className = 'left_active';
            right[12].className = 'right_active';
            var right_active = document.querySelector('.actives .right_active');
            var list_content = document.querySelector('.list_content');
            var x = right_active.offsetHeight;
            list_content.style.height = x + "px";
        }

        if(this.index == 3){
            for(var i = 0;i<length1;i++){
                left[i].index = i;
                left[i].onclick = function () {
                    for(var i = 0;i<length1;i++){
                        left[i].className = '';
                        right[i].className = '';
                    }
                    left[this.index].className = 'left_active';
                    right[this.index].className = 'right_active';
                }
                left[i].className = '';
                right[i].className = '';
            }
            left[18].className = 'left_active';
            right[18].className = 'right_active';
            var right_active = document.querySelector('.actives .right_active');
            var list_content = document.querySelector('.list_content');
            var x = right_active.offsetHeight;
            list_content.style.height = x + "px";
        }

        if(this.index == 4){
            for(var i = 0;i<length1;i++){
                left[i].index = i;
                left[i].onclick = function () {
                    for(var i = 0;i<length1;i++){
                        left[i].className = '';
                        right[i].className = '';
                    }
                    left[this.index].className = 'left_active';
                    right[this.index].className = 'right_active';
                }
                left[i].className = '';
                right[i].className = '';
            }
            left[23].className = 'left_active';
            right[23].className = 'right_active';
            var right_active = document.querySelector('.actives .right_active');
            var list_content = document.querySelector('.list_content');
            var x = right_active.offsetHeight;
            list_content.style.height = x + "px";
        }











    }
}

for(var i = 0;i<length1;i++){
    left[i].index = i;
    left[i].onclick = function () {
        for(var i = 0;i<length1;i++){
            left[i].className = '';
            right[i].className = 'content';
        }
        left[this.index].className = 'left_active';
        right[this.index].className = 'right_active';
        var right_active = document.querySelector('.actives .right_active');
        var list_content = document.querySelector('.list_content');
        var x = right_active.offsetHeight;
        list_content.style.height = x + "px";
    }
}






































//
// $(function(){
//     li.click(function(){
//         if($(this).index() == 0){
//             li.removeClass('active');
//             lis.removeClass('actives');
//
//             for(var i = 0;i<left.length;i++){
//                 left[i].className = '';
//                 right[i].className = 'content';
//             }
//             right[0].className = 'content right_active';
//
//             $(this).addClass('active');
//             lis.eq($(this).index()).addClass('actives')
//         }
//         else if($(this).index() == 1){
//             li.removeClass('active');
//             lis.removeClass('actives');
//
//             for(var i = 0;i<left.length;i++){
//                 left[i].className = '';
//                 right[i].className = 'content';
//             }
//             right[8].className = 'content right_active';
//
//             $(this).addClass('active');
//             lis.eq($(this).index()).addClass('actives')
//         }
//         else if($(this).index() == 2){
//             li.removeClass('active');
//             lis.removeClass('actives');
//
//             for(var i = 0;i<left.length;i++){
//                 left[i].className = '';
//                 right[i].className = 'content';
//             }
//             right[15].className = 'content right_active';
//             $(this).addClass('active');
//             lis.eq($(this).index()).addClass('actives')
//         }
//         else if($(this).index() == 3){
//             li.removeClass('active');
//             lis.removeClass('actives');
//
//             for(var i = 0;i<left.length;i++){
//                 left[i].className = '';
//                 right[i].className = 'content';
//             }
//
//             right[21].className = 'content right_active';
//
//             $(this).addClass('active');
//             lis.eq($(this).index()).addClass('actives')
//         }
//         else if($(this).index() == 4){
//             li.removeClass('active');
//             lis.removeClass('actives');
//
//             for(var i = 0;i<left.length;i++){
//                 right[i].className = 'content';
//             }
//             // right[26].className = 'content right_active';
//             $(this).addClass('active');
//             lis.eq($(this).index()).addClass('actives')
//         }
//     });
// });
// for(var i =0 ;i<left.length;i++){
//     left[i].index = i;
//     left[i].onclick = function(){
//         for(var i = 0;i<left.length;i++){
//             right[i].className = 'content';
//         }
//         right[this.index].className = 'content right_active';
//     }
// }