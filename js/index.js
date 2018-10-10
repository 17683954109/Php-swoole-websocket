
//  监听用户输入enter，发送消息给 ws 服务器
document.onkeydown=function (e) {
    if (e.key==='Enter'){
        send_message();
    }
};

//  创建 WebSocket 连接
let ws = new WebSocket('ws://127.0.0.1:9501');

//  创建连接成功事件
ws.onopen=function () {
    $_('tips').style.display='inline';
    $_('tips').innerHTML='连接成功';
    $_('tips').style.color='green';
    setTimeout(function () {
        $_('tips').style.display='none';
    },1500);
};

//  创建 WebSocket 接收到消息的回调函数
ws.onmessage=function (data) {
    $_('msg').innerHTML+='<li class="msg_item">'+data.data+'</li>';
};

//  创建 WebSocket 连接关闭回调函数
ws.onclose=function () {
    $_('tips').style.display='inline';
    $_('tips').innerHTML='连接断开';
    $_('tips').style.color='red';
    setTimeout(function () {
        $_('tips').style.display='none';
    },1500);
};

//  向 WebSocket 服务器发送消息
function send_message() {
    let msg = $_('msg_from').value;
    if (msg!==''){
        ws.send(msg);
        $_('msg_from').value='';
    }
}

//  返回 id 的 dom 对象
function $_(id) {
    return document.getElementById(id);
}