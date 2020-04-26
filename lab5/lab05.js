//1. 获取url中名为name的参数。在URL输入框输入url，点击同行submit按钮后，其中的参数名为name的参数值需要出现在Argument value输入框内。
//如果没有名为name的参数，那么可以在Argument value输入框出现任何值。
//请仅在showWindowHref函数内写代码。

//提示：url指代 （若干字符串）?（参数名1）=（参数1值）&（参数2）=（参数2值）...  这样的字符串。具体可以上网查找。例如：hjsdghgbj?name=666666&group=876。
//url、url_submit、url_result指代对应id的三个对象，其中url和url_result可以通过url.value或者url_result.value获得值。
//字符数组处理可以使用相关函数
let url = document.getElementById("url");
let url_submit = document.getElementById("url_submit");
let url_result = document.getElementById("url-result");
url_submit.addEventListener('click',showWindowHref);
function showWindowHref(){
    let search = url.value.split('?');
    let parameter = search[1].split('&');
    for (var i = 0; i < parameter.length; i++) {
        var pair = parameter[i].split("=");
        if(pair[0] === "name"){
            name = pair[1];
            break;
        }
        else{name = 0;}
    }
    url_result.value = name;
}
//2. 每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
//注意：你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
//与设置时间相关的函数可以上网查找。

//提示：mul为html中id为"mul"的元素对象，可直接通过mul.value获得其内的输入值。
let mul = document.getElementById("mul");
var interval = window.setInterval("timeTest()",5000);
var num = 1;
var count = 0;
mul.value = 1;
function timeTest(){
    num *= 2;
    count++;
    mul.value = num;
    if (count >= 10 || (60 - new Date().getSeconds()) < 5)
        window.clearInterval(interval);
}

//3. 判断输入框most里出现最多的字符，并统计出来。统计出是信息在most_result输入框内以"The most character is:" + index + " times:" + max的形式显示。
//如果多个出现数量一样则选择一个即可。
//请仅在arrSameStr函数内写代码。

//提示：most、result、most_submit的解释及其.value与上面类似。
let most = document.getElementById("most");
let result = document.getElementById("most-result");
let most_submit = document.getElementById("most_submit");
most_submit.addEventListener('click',arrSameStr);
function arrSameStr(){
    //先对字符串遍历计数 保存在o中
    var str = most.value;
    var o = {};
    for(i = 0;i < str.length;i++){
        var char = str.charAt(i);//char就是对象o的一个属性，o[char]是属性值，存储出现的次数
        if(o[char]){
            o[char]++;
        }else{
            o[char] = 1;
        }
    }
    //找出属性值max
    var max = 0;
    var index = "";
    for(char in o){
        if(max < o[char]){
            max = o[char];
            index = char;
        }
    }
    document.getElementById("most-result").value =  "The most character is :" + index + "  times:" + max;
}
