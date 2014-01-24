(function($){

$.fn.equalHeights = function() {
    var currentTallest = 0;
    $(this).each(function(){
        if ($(this).height() > currentTallest) {
            currentTallest = $(this).height();
        }
    });
    $(this).height(currentTallest);
    return this;
};

$('.gmo-share-connection-buttons').equalHeights();

$( "#btn-active" ).sortable({
    revert: true
});

$('#btn-deactive .btn-preview').draggable({
    connectToSortable: "#btn-active",
    helper: "clone",
    revert: "invalid",
    stop: function(e, ui){
        $('#btn-active li').each(function(){
            var social = $(this).attr('data-social');
            $('[data-social='+social+']', '#btn-deactive').fadeOut();
        });
        $('.close').click(function(){
            var social = $(this).attr('data-action');
            $('[data-social='+social+']', '#btn-active').remove();
            $('[data-social='+social+']', '#btn-deactive').fadeIn();
        });
    }
});

$( "ul, li" ).disableSelection();

$('#save-social').submit(function(){
    $('#btn-active li').each(function(){
        var social = $(this).attr('data-social');
        $('#save-social').append('<input type="hidden" name="social[]" value="'+social+'" />');
    })
});


$('.close').click(function(){
    var social = $(this).attr('data-action');
    $('[data-social='+social+']', '#btn-active').remove();
    $('[data-social='+social+']', '#btn-deactive').fadeIn();
});

})(jQuery);
