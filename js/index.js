

let ws = new WebSocket('ws://127.0.0.1:9501');
ws.onopen=function () {
    $_('tips').style.display='inline';
    $_('tips').innerHTML='连接成功';
    $_('tips').style.color='green';
    setTimeout(function () {
        $_('tips').style.display='none';
    },1500);
};
ws.onmessage=function (data) {
    $_('msg').innerHTML+='<li class="msg_item">'+data.data+'</li>';
};
ws.onclose=function () {
    $_('tips').style.display='inline';
    $_('tips').innerHTML='连接断开';
    $_('tips').style.color='red';
    setTimeout(function () {
        $_('tips').style.display='none';
    },1500);
};

function send_message() {
    let msg = $_('msg_from').value;
    if (msg!==''){
        ws.send(msg);
        $_('msg_from').value='';
    }
}

function $_(id) {
    return document.getElementById(id);
}