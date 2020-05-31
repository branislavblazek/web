$(window).on('load', function() {
    //get height of header and set offset to content
    var header_h = $("#header").css("height");
    var header_p = $("#header").css("padding-top");
    var height = parseInt(header_h, 10) + parseInt(header_p, 10) + 30;
    $("#content").css("margin-top", height + 'px');

    //set colors for tags
    var children = $("#tags")[0].children;
    for (var i = 0; i < children.length; i++)
    {
        var color = $(children[i]).data().color;
        $(children[i]).css('background', color);
    }

    //click on tag menu
    $(".tag").click(function(e){
        var tag;
        if (e.target != this)
        {
            tag = e.target.parentNode;
        }
        else
        {
            tag = e.target;
        }
        $(tag).toggleClass('active');
    });
});