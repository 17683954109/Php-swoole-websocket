<?php
$server = new swoole_websocket_server('0.0.0.0',9501);
$server->on('open',function($server,$req){
    echo "connect open: {$req->fd}\n";
    $server->push($req->fd,'欢迎加入连接...');
});
$server->on('message',function($server,$frame){
    echo "recived message : {$frame->data}\n";
    foreach($server->connection_list() as $v){
        $server->push($v,"$frame->data");
    }
});
$server->on('close',function($server,$fd){
    echo "connect close: {$fd}\n";
});
$server->start();
