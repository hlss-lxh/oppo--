var sign = function soloopSign() {
    toast("打开Soloop 即录");
    auto.waitFor();
    if (app.launchPackage("com.coloros.videoeditor")) {
        sleep(4000);
        closeupdate();
        text("我的").waitFor();
        log("找到了");
        sleep(1000);
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOnce();
        sleep(1000);
        if (me.visibleToUser()) {
            sleep(1000);
            log(click(me.bounds().centerX(), me.bounds().centerY()));
            sleep(1000);
            var qd = text("签到");
            if (qd.exists()) {
                log("签到");
                click(qd.findOnce().bounds().centerX(), qd.findOnce().bounds().centerY());
                log("soloop即录签到成功")
            }
            else{
                log("soloop即录签过到啦")
            }
        }
    } 
    else {
        toast("软件不存在，进行下一个");
    }
    toast("开始钱包，等待3秒钟");
    sleep(3000);
}
module.exports = sign;