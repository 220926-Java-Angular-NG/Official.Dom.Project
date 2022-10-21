//Note: JavaScript Is The BackEnd

let mainDiv = document.getElementById("main");

let header = document.createElement("hello");

//Note: Creating A New Element (h1 Element)
// let header = document.createElement('hello');
header.classList.add("main");
// header.innerHTML = "Video Submission Form!"

//Note: Add This New Header Element To My Div With The ID main

mainDiv.appendChild(header);

//Get Access To The Div That Is Holding The Input Text And Submit Button

let boardDiv = document.getElementsByTagName("board");

//Note: Get The Submit Button In Order To Add An Event Listener
let submitButton = document.getElementById("submit-Button");

//Note:

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  mainDiv.innerHTML = "";

  // //Note: The Default Action When Pressing A Button To Refresh The Page
  // //Note: In order To Prevent That So That We Can Execute The Logic In This Method To Use
  // //Note: The 'preventDefault()' function

  // //Note: Retrieving The Value From Our Text Input That Is On Our Form
  // let textInput = document.getElementById("video submission form")
  // let message = document.getElementById("video submission form").value;

  // Note: Create The New Element To Be Added To The Div

  // let newItem = document.createElement("h3");
  // newItem.innerHTML = message;

  // //Note: Adding A New Element To Our DOM
  // boardDiv.appendChild(new item);

  // textInput.value = ``;

  var name = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var videoTitle = document.getElementById("videoTitle").value;
  var description = document.getElementById("videoDescription").value;
  var fileLink = document.getElementById("videoUpload").files[0];

  var fileURL = window.URL.createObjectURL(fileLink);

  let table = `<table class="receipt">
        <tr>
            <th>Full Name</th>
            <th>${name}</th>
        <tr>
            <th>Email</th>
            <th>${email}</th>
        <tr>
            <th>Phone Number</th>
            <th>${phoneNumber}</th>
        <tr>
            <th>Video Title</th>
            <th>${videoTitle}</th>
        <tr>
            <th>Video Description</th>
            <th>${description}</th>
        <tr>
            </table>`;

  let video = `<div>
        <video id="video" src=${fileURL}.mp4"
        height="200"px
        controls="true"
        autoplay
        >
        </video>

        </div>`;

    mainDiv.innerHTML = table + video;    
    let player = document.getElementById("video");
    player.src = fileURL;
    player.load();
    scrollTo(0,0);

});
