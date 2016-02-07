(function($){
    $.fn.highlight = function (options) {
        var settings = {'color':'red'}
        if(options){
            $.extend(settings,options);
        }

        this.css('background-color',settings.color);
    }
})(jQuery);