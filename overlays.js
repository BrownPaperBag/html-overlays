(function(){

    var ctrlin = false;

    $(window).keydown(function(e){

        // console.log(e.keyCode); //debug purposes

        if ( e.keyCode == 17 ) ctrlin = true;

        if ( ctrlin ) {

            // Toggle Grid
            if ( e.keyCode == 59 ) {
                if ( $('.-grid').length == 0 )
                    $('<div class="-grid" style="display: none">').prependTo($('body'));
                $('.-grid').prependTo($('body')).toggle();
            }

            // Toggle Numbered Overlays
            var num = e.keyCode - 48;
            if ( num >= 1 && num <= 9 ) {
                var sel = '.-overlay-' + num;
                if ( $(sel).length == 1 ) {
                    $('.-overlay').remove();
                } else {
                    $overlay = $('<div class="-overlay -overlay-'+num+'" style="background-image:url(/overlays/'+ num +'.jpg)">');
                    $('.-overlay').remove();
                    $overlay.prependTo($('body'));
                }
            }

            // Toggle transparancy of overlay
            if ( e.keyCode == 222 ) {
                $('body').toggleClass('-overlay-trans');
            }


        }
    });

    $(window).keyup(function(e){
        if ( e.keyCode == 17 ) ctrlin = false;
    });

})();