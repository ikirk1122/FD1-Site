    $(document).ready(function(){
        $('.menuS').on('click', 'a', function(e){
            e.preventDefault();
            var id = $(this).attr('href');
            var top = $(id).offset().top;
            $('body, html').animate({
                scrollTop: top
            }, 1000)
        }) 
        
        $('.open').on('click', function(){
            $('#menuM').css('top', '100px');
            $(this).hide();
            $('.close').show();  
        });

        $('.close').on('click', function(){
            $('#menuM').css('top', '-350px');
            $(this).hide();
            $('.open').show();  
        });

        $(window).on('scroll',function(){
            var scr = $(this).scrollTop();
            if(scr > 300){
                $('#upBotton').fadeIn();
            }  
            else{
                $('#upBotton').fadeOut();
            }

            $('.paralax')
                .css('backgroundPositionY', -scr/3)
        })

        

    })