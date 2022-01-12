$(document).ready(() => {
    // step 1
    $('.menu').on('mouseenter', () => {
        $('.nav-menu').show();
    })

    // step 2
    $('.nav-menu').on('mouseleave', () => {
        $('.nav-menu').hide();
    });

    /*step 3 && step 4 (chain events) --> add effects to buttons
    step 5 add event to target single buttons*/
    $('.btn').on('mouseenter', event => {
        $(event.currentTarget).addClass('btn-hover');
    }).on('mouseleave', event => {
        $(event.currentTarget).removeClass('btn-hover');
    });

    //step 6 add event listener
    //step 7 add callback function
    //step 8 add variable post length
    //step 9 add variable character count
    //step 10 update html in callback function
    $('.postText').on('keyup', event => {
        let post = $(event.currentTarget).val();
        let remaining = 140 - post.length;

        if (remaining <= 0) {
            $('.wordcount').addClass('red');
        } else if (remaining >= 0) {
            $('.wordcount').removeClass('red');
        }
        $('.postText').focus();
        $('.characters').html(remaining);
    })

}); 
