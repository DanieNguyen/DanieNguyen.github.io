/*
-------- Hello, this is the JS/jQuery sheet
-------- for my portfolio
*
-------- TABLE OF CONTENTS
--------    1. Scroll Bar Animation
--------    2. Button Animation
--------    3. Navbar Animation
*/

$(document).ready(function () {
    $(window).on('scroll', function () {
        var s = $(window).scrollTop(),
            d = $(document).height(),
            c = $(window).height();

        var scrollPercent = (s / (d - c)) * 100;

        const nav = document.querySelector('#navbar');
        if (scrollPercent <= 24) {
            nav.className = '';
        } else {
            nav.className = 'scroll';
        }
        console.clear();
        console.log(scrollPercent);

        if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    });
});

