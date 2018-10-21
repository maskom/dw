jQuery( document ).ready(function($) {
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    $('.container-card-category .card-category button').click(function(){
        $('.container-card-category .card-category').removeClass("active");
        $(this).parents('.card-category').addClass("active");
    });

    $('.container-option-tema .option-box').click(function(){
        $('.container-option-tema .option-box').removeClass("active");
        $(this).addClass("active");
    });
});