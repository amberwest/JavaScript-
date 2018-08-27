//移动框架
function startMove(obj, attr, iTarget) {
    clearInterval(obj.timer);
    //不满足目标值时就继续进行定时任务，满足则取消
    obj.timer = setInterval(function () {
        if (attr == 'opacity') {
            //小数四舍五入
            var cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
        }
        else {
            var cur = parseInt(getStyle(obj, attr));
        }
        var speed = (iTarget - cur) / 10;
        //取整
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (cur == iTarget) {
            clearInterval(obj.timer);
        }
        else {
            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
                obj.style.opacity = (cur + speed) / 100;
            }
            else {
                obj.style[attr] = cur + speed + 'px';
            }
        }
    }, 30);
}

//获取属性值，不再使用offset，因为offset在div加上边框时会出错
function getStyle(obj, attr) {
    //适应浏览器
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}