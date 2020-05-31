var farba_tagov = {
    polievky: ["POLIEVKY", "#E84855"],
    zakusky: ["ZAKUSKY", "#226F54"],
    predjedla: ["PREDJEDLA", "#485d9c"],
    a: ["NIECO INE", "#DE6449"],
    bezmasite: ["BEZMASITE", "#FDE74C"]
}

$(window).on('load', function() {
    //get height of header and set offset to content
    var header_h = $("#header").css("height");
    var header_p = $("#header").css("padding-top");
    var height = parseInt(header_h, 10) + parseInt(header_p, 10) + 30;
    $("#content").css("margin-top", height + 'px');

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
});