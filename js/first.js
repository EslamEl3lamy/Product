// $(".img-item").click(function(){
//     let imgsrc = $(this).attr("src");
//     $("#main-img").attr("src" ,imgsrc);
// })

let aboutofst = $("#about").offset().top;

$(window).scroll(() => {
    let windowscrol = $(window).scrollTop();

    if (windowscrol > aboutofst - 40) {
        $("#main-nav").css("backgroundColor", "rgba(0,0,0,0.5)");
        $("#btnUp").fadeIn(500);
    }
    else {
        $("#main-nav").css("backgroundColor", "transparent");
        $("#btnUp").fadeOut(500);

    }
});

$("#btnUp").click(() => {
    $("html,body").animate({ scrollTop: '0' }, 1000);
})

$("a[href^='#']").click(function () {
    let aHref = $(this).attr("href");
    let sectionOfst = $(aHref).offset().top;
    $("html,body").animate({ scrollTop: sectionOfst }, 1000);
})

let colorItem = $(".color");

colorItem.click(function () {
    let myColor = $(this).css("backgroundColor");
    $("p,h1,h3").css("color", myColor);
})
colorItem.eq(0).css("backgroundColor", "blue");
colorItem.eq(1).css("backgroundColor", "yellow");
colorItem.eq(2).css("backgroundColor", "gray");
colorItem.eq(3).css("backgroundColor", "purpel");
colorItem.eq(4).css("backgroundColor", "teal");

$("#sideBarIcon").click(function () {
    let itemSize = $(".color-item").outerWidth(true);
    if ($(".sideBar").css("left") == "0px") {
        $(".sideBar").animate({ left: `-${itemSize}` }, 1000);
    }
    else {
        $(".sideBar").animate({ left: "0px" }, 1000);

    }
})

$(document).ready(function () {
    $(".spinner").fadeOut(1000, function () {
        $("#loading").fadeOut(1000, function () {
            $("body").css("overflow", "auto");
            $("#loading").remove();
        });
    })
})