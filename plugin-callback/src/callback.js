(function($){
    $.fn.clickTest = function(options,callback1){


        this_selected = this;

        var settings = {'from':1}

        var options = $.extend(settings,options);

        return this.each(function(){
            console.log('a');
            this_selected.click(function(){
                if(options.from==0){
                    callback1('done');
                }else{
                    options.from = options.from-1;
                    callback1(options.from);
                }
            });

        })

    }
})(jQuery);