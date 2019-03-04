const messageIn = document.querySelector('#messageIn');
const sendBtn = document.querySelector('#sendBtn');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMsg);

function sendMsg(){

    let content = messageIn.value;
    if(content === ''){
        alert('please enter a valid value');
    }
    else{
        messageOut.innerHTML = content;
        messageIn.value = '';
    }
}