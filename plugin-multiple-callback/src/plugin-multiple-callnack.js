(function($){
    $.fn.clickCallbackTest = function(options){

        this_selected = this;

        var settings = {
            from:1,
            success : null,
            complete : null
        };

        var options = $.extend(settings,options);

        return this.each(function(){

            this_selected.click(function(){
                if(options.from==0){
                    if ( $.isFunction( settings.complete ) ) {
                        settings.complete.call(this, this_selected);
                    }
                }else{
                    options.from = options.from-1;
                    if ( $.isFunction( settings.success ) ) {
                        settings.success.call( this, this_selected.selector, options.from);
                    }
                }
            });




        })

    }
})(jQuery);