$(document).ready(function () {



    //Display Speak Meassage
    eel.expose(DisplayMessage)
    function DisplayMessage(message) {

        $(".siri-message li:first").text(message);
        $('.siri-message').textillate('start');

    }

    //Display hood
    eel.expose(ShowHood)
    function ShowHood() {
        $("#Oval").attr("hidden", false);
        $("#Siriwave").attr("hidden", true);
    }

    eel.expose(senderText)
    function senderText(message) {
        var chatBox = document.getElementById("chat-canvas-body");
        if (message.trim() !== "") {
            chatBox.innerHTML += `<div class="row justify-content-end mb-4">
            <div class = "width-size">
            <div class = "sender_message">${message}</div>
        </div>`;

             // Scroll to the bottom of the chat box
             chatBox.scrollTop = chatBox.scrollHeight;
            
        }
    }

    eel.expose(recieverText)
    function recieverText(message) {
        
        var chatBox = document.getElementById("chat-canvas-body");
        if (message.trim() !== "") {
            chatBox.innerHTML += `<div class="row justify-content-start mb-4">
            <div class = "width-size">
            <div class = "receiver_message">${message}</div>
            </div>
        </div>`;

            // Scroll to the bottom of chat box
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    }

});