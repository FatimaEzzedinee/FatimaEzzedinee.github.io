/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 150,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);


function DisplayAboutMe() {
  document.getElementById("content").innerHTML = "Clicked on About Me";
}


function DisplayBLog() {
  document.getElementById("content").innerHTML = "Clicked on Display Blog";
}


function DisplayServices() {
  document.getElementById("content").innerHTML = "Clicked on Display Services";
}

function DisplayPublications() {
document.getElementById("content").innerHTML = "Clicked on Display Publications";
}

function DisplayResearch() {
document.getElementById("content").innerHTML = "Clicked on Display Research";
}

function DisplayExperience() {
document.getElementById("content").innerHTML = "Clicked on Display Experience";
}

function DisplaySkills() {
document.getElementById("content").innerHTML = "Clicked on Display Skills";
}

function DisplayContactMe() {
  document.getElementById("content").innerHTML = "Clicked on Contact Me";
//  document.getElementById("content").innerHTML = "<div class='container'><div class='contact-info'><form action=''><h3>Write Us</h3><input type='text' name='fullname' id='fullname' placeholder='Full Name' required><input type='email' name='email' id='email' placeholder='Email' required><input type='tel' name='tel' id='tel' placeholder='tel: XXX XXX XXXX' required><textarea name='msg' id='msg' cols='30' rows='10' placeholder='Your Message Here...'></textarea><button type='submit'>Send</button></form><div class='details'><h3>Contact Us</h3><div class='contact-items-wrapper'><div class='contact-items'><span class='material-icons'>location_on</span><p><strong>Address: </strong>Tyr - Lebanon</p></div><div class='contact-items'><span class='material-icons'>local_phone</span><p><strong>Phone:</strong> +961 78882805</p></div><div class='contact-items'><span class='material-icons'>alternate_email</span><p><strong>Email:</strong><a href='#''> fatima_ezzeddine@outlook.com</a> </p></div><div class='contact-items'><span class='material-icons'>public</span><p><strong>Website:</strong><a href='#'> www.yourcompany.com</a></p></div></div></div></div></div>";
}

function DisplayHome() {
  document.getElementById("content").innerHTML = "Clicked on Display Home";
//  document.getElementById("content").innerHTML = "<div class='container'><div class='details'><div class='contact-items-wrapper'><div class='contact-items'><span class='material-icons'>location_on</span><p><strong>Address: </strong>Lugano - Switzerland</p></div><div class='contact-items'><span class='material-icons'>local_phone</span><p><strong>Phone:</strong> +41 782555244</p></div><div class='contact-items'><span class='material-icons'>alternate_email</span><p><strong>Email:</strong><a href='#''> fatima.ezzeddine@usi.ch</a> </p></div><div class='contact-items'><span class='material-icons'>public</span><p><strong>Official Webpage: </strong><a href='#'>https://search.usi.ch/people/9983959c8717fe869d28c3b0cb9851e6/ezzeddine-fatima</a></p></div></div></div></div>";
}
