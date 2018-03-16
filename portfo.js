$(document).ready(function () {
    
    $('.container').fadeIn(2500);

    $(function () {
        $('a[href*=#]').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 750, 'linear');
        })
    });

    var TxtRotate = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 1000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 100;

        if (this.isDeleting) { delta /= 1; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 100;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    window.onload = function () {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
        
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
        document.body.appendChild(css);
    };

    var pieces = ["Over the past two years in college, I have gained valuable programming experience in multiple languages. My projects have been class projects, personal projects, and collaborations in a couple hackathons. The languages that I currently know are Java, C#, HTML / CSS / Javascript, SQL, and R. Check out my GitHub at the footer below for access to some of my projects and even the code for this website!", "In the HCDE department, my projects have been mostly collaborative projects focused on specific user groups. I have worked as a team member of the HCDE CRISP research group, working with SQL to extract data from Twitter’s API. We looked over 5000 tweets from different users this past year to discover disruptions and adaptations that people experienced during Hurricane Harvey. I also was a part of the K-12 Outreach Program and led a design workshop for middle school students to promote the department.", "College Chef is a project that I collaborated on for my Informatics class. College Chef was intended to be an app that helped college students find recipes and cook them through a simple interface. The app is laid out like Instagram so students can share food pictures with their friends as a way to motivate students to keep cooking and using the app. I designed the wireframe for this app using Marvel. You can check it out below. ", "Space Box is an absurd two-player game that I created in a team for my Interaction Design class. The project was created using Unity and coded through C#. I personally designed the artwork of the game using Adobe Illustrator. It was a very fun project that you can read about by clicking the gif below. ", "I have dabbled in data visualizations for classes as well as the HCDE CRISP research group. Some of my projects are interactive data visualizations using R that you can access in the links below. I also am experienced in using Tableau to create data visualizations. ", "Many of my graphic design projects are personal as I consider graphic design to be a hobby of mine. My preferred designing tool is Adobe Illustrator, and most of my works are created using Illustrator. However, I am experienced in other Adobe products such as AfterEffects and Photoshop. Most of my designs are for fun; here's a few."];

    $('#one').on('click', function(e) {
        $('#piece').empty();
        $('#piece').fadeIn(2000);
        $('#arrow3').fadeIn(2000);
        $('#piece').append("<h1>Code</h1><p>" + pieces[0] + "</p><br><div class='row'><div class=col-md-4><img class='image2' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2000px-HTML5_logo_and_wordmark.svg.png' alt='HTML logo'></div><div class=col-md-4><img class='image3' src='https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png' alt='Java'></div><div class=col-md-4><img class='image' src='https://azure.microsoft.com/svghandler/sql-database/?width=600&height=315' alt='SQL'></div></div>");
    });

    $('#two').on('click', function (e) {
        $('#piece').empty();
        $('#piece').fadeIn(2000);
        $('#arrow3').fadeIn(2000);
        $('#piece').append("<h1>HCDE</h1><p>" + pieces[1] + "</p><br><div class='row'><div class=col-md-12><img class='image2' src='https://pbs.twimg.com/profile_images/629410399335526400/4DfYSRfA_400x400.jpg'></a></div></div>");
    });

    $('#thr').on('click', function (e) {
        $('#piece').empty();
        $('#piece').fadeIn(2000);
        $('#arrow3').fadeIn(2000);
        $('#piece').append("<h1>College Chef</h1><p>" + pieces[2] + "</p><br><div class='row'><div class=col-md-12><a href='https://marvelapp.com/1hebddd' target='_blank'><img class='image2' src='Images/phone.PNG'></a></div></div>");
    });

    $('#fou').on('click', function (e) {
        $('#piece').empty();
        $('#piece').fadeIn(2000);
        $('#arrow3').fadeIn(2000);
        $('#piece').append("<h1>SpaceBox</h1><p>" + pieces[3] + "</p><br><div class='row'><div class=col-md-12><a href='https://sushisports.wixsite.com/game' target='_blank'><img class='image4' src='Images/box.PNG'></a></div></div>");
    });

    $('#fiv').on('click', function (e) {
        $('#piece').empty();
        $('#piece').fadeIn(2000);
        $('#arrow3').fadeIn(2000);
        $('#piece').append("<h1>Data Visualizations</h1><p>" + pieces[4] + "</p><br><div class='row'><div class=col-md-4><div class=thumbnail><a href='https://danielnguyen.shinyapps.io/finalproject/' target='_blank'><img class='image' src='Images/bar.PNG' alt='finalproject'></a></div></div><div class=col-md-4><div class=thumbnail><a href='https://danielnguyen.shinyapps.io/a7-data-app-DanieNguyen/' target='_blank'><img class='image' src='Images/map.PNG' alt='interactive map'></a></div></div><div class=col-md-4><div class=thumbnail><a href='Images/boo.PNG' target='_blank'><img class='image' src='Images/boo.PNG' alt='CRISP'></a></div></div></div>");

    });

    $('#six').on('click', function (e) {
        $('#piece').empty();
        $('#piece').fadeIn(2000);
        $('#arrow3').fadeIn(2000);
        $('#piece').append("<h1>Graphic Design</h1><p>" + pieces[5] + "</p><br><div class='row'><div class=col-md-4><img class='image' src='Images/jaqua.png' alt='jaqua logo'></div><div class=col-md-4><a href='Images/DigitalTwin.PNG' target='_blank'><img class='image' src='Images/DigitalTwin.png' alt='digital twin'></a></div><div class=col-md-4><video width='300' height='200' controls><source src='Images/comp.mp4' type='video/mp4'>Your browser does not support the video tag.</video></div></div>");
    });
    
});