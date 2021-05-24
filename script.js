let connection = document.getElementById('connections');
let connection_num = parseInt(connection.innerHTML);
let connection_req_box = document.querySelector('#connection-reqs');
let request_num = parseInt(connection_req_box.innerHTML);

let names = ['John Doe', 'John Shedletsky', 'Bill Gates', 'Steve Jobs', 'Barack Obama', 'Angela Merkel', 'Joan of Arc']

function onaccept(element){
    request_num--;
    connection_req_box.innerHTML=request_num;
    connection_num++;
    connection.innerText = connection_num;
    element.parentNode.parentNode.parentNode.remove();
}


function ondecline(element){
    request_num--;
    connection_req_box.innerHTML=request_num;
    element.parentNode.parentNode.parentNode.remove();
}

function change_identity(){
    document.querySelector('#profilepic').innerText = names[Math.floor(Math.random()*names.length)]
}