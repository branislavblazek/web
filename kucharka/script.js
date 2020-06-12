var farba_tagov = {
    polievky: ["POLIEVKY", "#E84855"],
    zakusky: ["ZAKUSKY", "#226F54"],
    predjedla: ["PREDJEDLA", "#485d9c"],
    a: ["NIECO INE", "#DE6449"],
    bezmasite: ["BEZMASITE", "#FDE74C"]
}
function set_offset()
{
    //get height of header and set offset to content
    var header_h = $("#header").css("height");
    var header_p = $("#header").css("padding-top");
    var height = parseInt(header_h, 10) + parseInt(header_p, 10);
    if ($("body").width() > 630)
    {
        height += 20;
    }
    $("#content").css("margin-top", height + 'px');
}
function fixed_tags()
{
    //set width for fixed element
    var $parent = $("#tag_rel").width();
    //ignore this for mobiles
    if ($("body").width() > 630)
    {
        $("#tagmenu").width($parent);
    }
}
//ON LOAD
$(window).on('load', function() {
    set_offset();

    //create tags
    var parent = $("#tags");
    for (var child in farba_tagov)
    {
        if (farba_tagov.hasOwnProperty(child)){
            console.log(child, farba_tagov[child]);
            var $tag = $("<div>", {class:"tag", 'data-name':child}).append("<p>" + farba_tagov[child][0] + "</p>");
            parent.append($tag);
        }
    }

    fixed_tags();

    //set colors for tags
    var children = $("#tags")[0].children;
    for (var i = 0; i < children.length; i++)
    {
        var name = $(children[i]).data().name;
        var color = farba_tagov[name][1];
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

    //click on recipies
    $(".recept").click(function(e){
        var file = $(e.currentTarget).data().href;
        //get height of header and set offset to content
        var header_h = $("#header").css("height");
        $("#modal_window").css("top", 0);
        $("#modal_window").css("paddingTop", header_h);
        setTimeout(function(){
            //$("#list").addClass("modal_is_opened");
        }, 1000);
    });

    //click on exit
    $("#closebtn").click(function(e){
        //$("#list").removeClass('modal_is_opened');
        $("#modal_window").css("top", "100%");
    });
});
//ON RESIZE
$(window).on('resize', function()
{
    set_offset();
    fixed_tags();
});