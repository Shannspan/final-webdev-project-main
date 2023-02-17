function mouseOver() {
    document.getElementById("Contact1").style.color = "#904C77";
    let MouseOver = "Get in contact.";
     console.log(MouseOver);
        }

//BELOW CODE WORKS BUT PRODUCES ERROR
// FIX IS NEEDED IN REGARD TO 
// INPUT EMAIL & POST 'REQUIRED' 
// SO WILL WORK ONCE BOTH DETAILS ARE ENTERED BUT
// INDIVIDUALLY PRODUCES ERROR.
// THIS CODE 
// document.getElementById('element_id').removeAttribute('required');
// DID NOT WORK IN EACH INDIVIDUAL FUNCTION
// CONSIDER OTHER APPLICATIONS

// NEW FORM CREATED TO CONTAIN EMAIL AND ADDRESS 
// FIELDS SEPARATELY DOES NOT FIX ERROR CAUSED BY
// 'REQUIRED' INPUT 

// document.getElementById("newsletter").addEventListener("change", function() {
//     if (this.value === "email") {
//               myEmail();
//     } else if (this.value === "post") {
//               myPost();
//     }
//     });

// function myEmail() {
//     let emailInput = document.getElementById("email");
//     let postInput = document.getElementById("post");
//     emailInput.style.display ="block";
//     postInput.style.display = "none";
//     };

// function myPost() {
//     let emailInput = document.getElementById("email");
//     let postInput = document.getElementById("post");
//     emailInput.style.display ="none";
//     postInput.style.display = "block";
//     };

