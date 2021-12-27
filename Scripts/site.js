/**生成随机数
         * param flag 是否是任意长度
         * param min 任意长度最小值
         * param max 任意长度最大值
         */
function randomStr(flag, min, max) {
    var str = "";
    var index = "";
    var range = min;
    var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b',
        'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
        'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    //min,max范围内随机的一个数
    if (flag) {
        range = Math.floor(Math.random() * (max - min + 1) + min);
    }
    for (var i = 0; i < range; i++) {
        index = Math.round(Math.random() * (arr.length - 1));
        str += arr[index];
    }
    return str;
}
//获取用户唯一编号
function getUid() {
    if (!localStorage.bnuuid) {
        localStorage.bnuuid = randomStr(false, 16, 16);
    }
    return localStorage.bnuuid;
}
//获取指定参数的值
function getQueryVariable(variable) {
    variable = variable;
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return "";
}
//var time1 = new Date().Format("yyyy-MM-dd");
//var time2 = new Date().Format("yyyy-MM-dd HH:mm:ss")
Date.prototype.Format = function (fmt) { // author: meizz
    var o = {
        "M+": this.getMonth() + 1, // 月份
        "d+": this.getDate(), // 日
        "h+": this.getHours(), // 小时
        "m+": this.getMinutes(), // 分
        "s+": this.getSeconds(), // 秒
        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
        "S": this.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}