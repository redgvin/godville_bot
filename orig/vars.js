document.domain = document.domain;
Orbited.settings.port = 80;
Orbited.settings.hostname = 'push1.godville.net';
GvPushPort = '61616'
TCPSocket = Orbited.TCPSocket;

WEB_SOCKET_SWF_LOCATION = window.location.protocol + '//' + document.domain + "/WebSocketMain.swf";
window.fbe = false;
window.gv_domain = 'godville.net';
window.gv_port = '';
window.gv_debug = false;
window.gv_fzpg = false;
window.gv3d = false;
$(document).ready(function () {
    proto = new JsonProto();
    so = new ScreenManager();
    s_proto = new SimpleJsonProto();
    Hero.init(proto, s_proto, so, 0, 'ws://ws1.godville.net:82/hero', '/fbh/feed?a=GjZLOZGK7ior8w2omUIsNhZ6Vcqmu', 60);
});