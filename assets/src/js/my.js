$(document).ready(function(){
    $('.slider-wrapper').slick({
        prevArrow: '<div class="slider-prev"><i class="fa fa-arrow-left " aria-hidden="true" style="width: 30px"></i></div>',
        nextArrow: '<div class="slider-next"><i class="fa fa-arrow-right" aria-hidden="true"></i></div>'
    });
    if(!Modernizr.meter){
        alert('Sorry your brower does not support HTML5 progress bar');
    } else {
        var progressbar = $('#progressbar'),
            max = progressbar.attr('max'),
            time = (1000/max)*5,
            value = progressbar.val();

        var loading = function() {
            value += 1;
            addValue = progressbar.val(value);

            $('.progress-value').html(value + '%');

            if (value == max) {
                clearInterval(animate);
            }
        };

        var animate = setInterval(function() {
            loading();
        }, time);
    };
});
