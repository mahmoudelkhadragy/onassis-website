/*general $, window*/
//header height
var $, window, document;
var navHei      = $("navbar").innerHeight(),
    wHei   = $(window).height();
    
$("header").height(wHei - navHei);

$(document).ready(function () {
    // Header Height 
    "use strict";
    $("header").height(wHei - navHei);
    
    // menu toogle click
    
    $('.toggle-btn').click(function () {
        var rightPos = $(".menu").css('right');
        if (rightPos === '-220px') {
            $(".menu").animate({
                right: "0px"
            }, 300);
        } else if (rightPos === '0px') {
            $(".menu").animate({
                right: "-220px"
            }, 300);
        }
    });
    // close menu from X
    $(".close-menu").click(function () {
        var rightPos = $(".menu").css('right');
        if (rightPos === '0px') {
            $(".menu").animate({
                right: "-220px"
            }, 300);
        }
    });
    
    //circle progress
    $('.javascript').circleProgress({
        value: 0.75,
        size: 130,
        startAngle: 4.7,
        lineCap: "round",
        thickness: 7,
        fill: {
            gradient: ["#F85C37"]
        }
    });
    $('.bootstrap').circleProgress({
        value: 0.90,
        size: 130,
        startAngle: 4.7,
        lineCap: "round",
        thickness: 7,
        fill: {
            gradient: ["#F85C37"]
        }
    });
    $('.wordpress').circleProgress({
        value: 0.55,
        size: 130,
        startAngle: 4.7,
        lineCap: "round",
        thickness: 7,
        fill: {
            gradient: ["#F85C37"]
        }
    });
});