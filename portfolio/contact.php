<?php

        $msg = '';
        $msgClass = '';     //USED FOR STYLING ERROR MESSAGE

        //CHECK IF FORM HAS BEEN SUBMITTED

        if(filter_has_var(INPUT_POST, 'submit')) {

            $name = htmlspecialchars($_POST['name']);
            $email = htmlspecialchars($_POST['email']);
            $message = htmlspecialchars($_POST['message']);

            if(!empty($name) && !empty($email) && !empty($message)) {

                    if(filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
                        //email failed
                        $msg = "Please enter a valid email";
                        $msgClass = "msgClassFail";
                    } else {
                        //email passed
                        $toEmail = 'contact@willyhedge.com';
                        $subject = 'Contact form submission from '. $name;
                        $emailBody = '<h2>Contact Form Submission</h2>
                                      <h3>Name</h3><p>'.$name.'</p>
                                      <h3>Email Address<h3><p>' .$email. '</p>
                                      <h3>Message</h3><p>'.$message.'</p>';
                            

                        $emailHeaders = "MIME-Version: 1.0" . "\r\n";
                        $emailHeaders .= "Content-Type: text/html; charset=UTF-8" . "\r\n";

                        $emailHeaders .= "From: " . $name . " - " .$email. "\r\n";

                        if (mail($toEmail, $subject, $emailBody, $emailHeaders)) {
                            $msg = "Your email has been sent, expect a reply within 24 hours. Thanks!";
                            $msgClass = "msgClassPass";
                        } else {
                            $msg = "Your email was not sent, please try again later";
                            $msgClass = "msgClassFail";
                        }

                        
                    }
            }   else {
                //Form failed
                $msg = "Please fill out all fields";
                $msgClass = "msgClassFail";
            }
        }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Me</title>

    <!--STYLESHEETS-->
    <link rel="stylesheet" href="css/portfolio.css">
    <link rel="stylesheet" href="css/portfolioDisplay.css">
    <link rel="stylesheet" href="css/mediaQueries.css">
    <link rel="stylesheet" href="css/contact.css">

    <!--FONTS-->
    <link href="https://fonts.googleapis.com/css2?family=Trade+Winds&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@100&display=swap" rel="stylesheet">

    <style>
        
    </style>
</head>

<body>

<nav class="navbar">
        <div class="brand-name">
            <p><a href="index.html">Will Hedgecock</a></p>
        </div>
        <a href="javascript:void(0)" class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </a>
        <div class="navbar-links">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html#about">About Me</a></li>
                <li><a href="index.html#portfolio">Portfolio</a></li>
                <li><a href="contact.php">Contact Me</a></li>
            </ul>
        </div>
    </nav>


<div id="contact">

        <h1>Contact Me</h1>
        <h3>Feel free to send me a message!</h3>
        <h3><span class="required"> * </span>All fields required<span class="required"> * </span></h3>

        <?php if ($msg != '') : ?>
            <div class="<?php echo $msgClass ?>"><?php echo $msg; ?> </div>
        <?php endif; ?>

        <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">

            <div class="name">
                <label for="name">Name</label><span class="required"> * </span>
                <input type="text" id="name" name="name" value="<?php echo isset($_POST['name']) ? $name : ''; ?>">
            </div>

            <div class="email">
                <label for="email">Email</label><span class="required"> * </span>
                <input type="email" id="email" name="email" value="<?php echo isset($_POST['email']) ? $email : ''; ?>">
            </div>

            <div class="phone-num">
                <label for="phone-number" style="display: none">Phone Number</label>
                <input type="text" id="phone-number" name="phone-number" value="1" style="display: none">
            </div>

            <div class="message">
                <label for="message">Message</label><span class="required"> * </span>
                <textarea id="message" name="message" rows="10"><?php echo isset($_POST['message']) ? $message : ''; ?></textarea>
            </div>

            <button type="submit" name="submit">Send</button>
            <button type="reset" name="reset">Reset</button>

        </form>

</div>

<footer id="footer">

        <div class="my-info">
            <p>Will Hedgecock</p>
            <p>whedgecock@dmacc.edu</p>
            <a href="https://github.com/willhedgecock" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/will-hedgecock-90a2421b4/" target="_blank"><i class="fab fa-linkedin"></i></a>
        </div>

        <div class="copyright">
            <p>Copyright &#169;

                <script>
                     let date = new Date(); 
                     document.write(date.getFullYear());
                </script>

                All Rights Reserved
            </p>
        </div>

    </footer>

    <script src="js/portfolio.js"></script>
    
</body>

</html>