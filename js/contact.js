function mouseOver() {
    document.getElementById("Contact1").style.color = "#904C77";
    let MouseOver = "Get in contact.";
     console.log(MouseOver);
        }

document.getElementById("newsletter").addEventListener("change", function() {
    if (this.value === "email") {
              myEmail();
    } else if (this.value === "post") {
              myPost();
    }
    });

function myEmail() {
    let emailInput = document.getElementById("email");
    let postInput = document.getElementById("post");
    emailInput.style.display ="block";
    postInput.style.display = "none";
    };

function myPost() {
    let emailInput = document.getElementById("email");
    let postInput = document.getElementById("post");
    emailInput.style.display ="none";
    postInput.style.display = "block";
    };



