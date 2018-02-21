<?php

if($_POST["submit"]) {
    $recipient="danngu@uw.edu";
    $subject="Form to email message";
    $first=$_POST["first"];
    $last=$_POST["last"];
    $option=$_POST["option"];
    $email=$_POST["email"];
    $message=$_POST["message"];

    $mailBody="Name: $first $last\nEmail: $email\n $option\n \n$message";

    mail($recipient, $subject, $mailBody, "From: $first $last <$email>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}

?><!DOCTYPE html>

<html>
    <head>
        <title>Welcome to my Website</title>
        <link rel="stylesheet" href="bootstrap-4/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src="bootstrap-4/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="style.css" type="text/css">
        <link class="icon" rel="shortcut icon" type="image/x-icon" href="Images/myLogo.png" />
    </head>
    <body>
        <section class="cont">
            <nav class="navbar navbar-toggleable-md navbar-trans navbar-inverse">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="index">
                    <img class="logo" src="Images/myLogo.png"> Daniel Nguyen</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link bar " href="DanielNguyenRes.pdf" target="_blank">Resume</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link bar" href="portfolio">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link bar" href="contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class=" jumbotron cont">
                <h1 class="header por3">Contact Me</h1>
            </div>
        </section>
        <div class="container gal2">
            <?=$thankYou ?>
            <h4>Fill out this form to contact me or call me at 425-215-9646 (PST)</h4>
            <hr>
            <br>
            <form method="POST" action="contact.php">
                <div class="row">
                    <div class="col">
                        <input type="text" id="first" for="first" name="first" class="form-control" placeholder="First name">
                    </div>
                    <div class="col">
                        <input type="text" id="last" for="last" class="form-control" placeholder="Last name">
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" id="email" for="email" name="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect2">Reason For Contacting</label>
                    <select multiple class="form-control" id="option" for="option" name="option" id="exampleFormControlSelect2">
                        <option>Question</option>
                        <option>Meeting</option>
                        <option>Hiring</option>
                        <option>Other</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Response</label>
                    <textarea class="form-control" id="message" for="message" name="message" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <br>
                <button type="submit" class="btn btn-info">Submit</button>
            </form>
        </div>
        <div class="foot" id="contact">
            <table>
                <tr>
                    <th>My Media</th>
                    <td id="first">
                        <a href="mailto:danngu@uw.edu">
                            <i class="fa fa-envelope-o"></i>
                        </a>
                    </td>
                    <td>
                        <a href="https://www.linkedin.com/in/danielnguyenuw/">
                            <i class="fa fa-linkedin"></i>
                        </a>
                    </td>
                    <td>
                        <a href="https://bitbucket.org/danngu/">
                            <i class="fa fa-bitbucket"></i>
                        </a>
                    </td>
                    <td>
                        <a href="https://github.com/DanieNguyen">
                            <i class="fa fa-github"></i>
                        </a>
                    </td>
                    <td>
                        <a href="https://medium.com/@danngu_26559">
                            <i class="fa fa-medium"></i>
                        </a>
                    </td>
                </tr>
            </table>
        </div>
    </body>
</html>