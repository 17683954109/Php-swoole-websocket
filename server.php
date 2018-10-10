<?php
$server = new swoole_websocket_server('0.0.0.0',9501);
$server->on('open',function($server,$req){
    $server->push($req->fd,'欢迎加入连接...');
});
$server->on('message',function($server,$frame){
    foreach($server->connection_list() as $v){
        $server->push($v,"$frame->data");
    }
});
$server->on('close',function($server,$fd){

});
$server->start();
