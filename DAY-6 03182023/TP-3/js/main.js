var chat = [];



function showChat(){
    document.getElementById("chat-bar").style.display="none";
    document.getElementById("chat-content").style.display="block";
    
}

function hideChat(){
    document.getElementById("chat-bar").style.display="block";
    document.getElementById("chat-content").style.display="none";
    
}



function sendMessage(){
    const message = document.getElementById("chat").value;

    if (message != "") {
        chat.push(
            { "text":message, sender:0 } // 0 the user !! 1 PC...
        );


        chat.push(
            { "text":"Bonjour cv, comment je peut vous aider !!", sender:1 } // 0 the user !! 1 PC...
        );

        showChatList();

        document.getElementById("chat").value = '';
    }
}



function showChatList(){
    let blocHTML ='';


    for (let i = 0; i < chat.length; i++) {
        const obj = chat[i];

        if ( obj.sender == 0 ) {
            blocHTML = blocHTML + `<div class="chat-row user">
                                        <div class="content">
                                            ${ obj.text }
                                        </div>
                                    </div>`;


        }else{
            blocHTML = blocHTML + `<div class="chat-row pc">
                        <div class="content">
                            ${ obj.text }
                        </div>
                    </div>`;

        }
        
    }


    document.getElementById("messages").innerHTML = blocHTML;
}