$(function() {
    $('.dropbtn').on('click', function(e) {
        e.preventDefault();
        $('.navbar').each(function() {
            $(this).css('display', 'none');
        });
    });
});