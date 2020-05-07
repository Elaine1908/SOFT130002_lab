
    function testTime(){

            let num = 1;
            console.log(num);
            let counter = 0;
            let change = setInterval( function(){
                num *= 2;
                console.log(num);
                counter++;
                if ((60 - new Date().getSeconds()) < 5){
                    console.log("A new minute! Counting is stopped.");
                    clearInterval(change);
                } else if (counter >= 9){
                    console.log("Counter has reached 10 !");
                    clearInterval(change);
                }
            }, 5000);
    }




function testMail(telephone,mail) {
    console.log('第2题');
    let pattern1 = /^1([3456789])\d{9}$/;//表示以1开头，第二个数字为3-9中一个，后9为数字任意的数字串
    let pattern2 = /^([a-zA-Z]|[0-9])(\w|-|_)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    let test1 = pattern1.test(telephone);
    let test2 = pattern2.test(mail);
    console.log('The telephone is '+ test1 +' and the mail is '+ test2 +'!');
}


function testRedundancy(str) {
        console.log('第3题');
        let string = str.split(" ");
        let container = "";
        let result = new Set();
        for(let i = 0; i < string.length - 1; i++){
            let pattern = new RegExp(string[i], "i");
            if(pattern.test(string[i + 1]) && result.size < 10){
                container = string[i] + " " + string[i + 1];
                result.add(container);
            }
        }
        console.log(result);
}



function testKeyBoard(wantInput, actualInput) {
    console.log('第4题');
    let ans = new Set();
    let index = 0;
    let wantArray = wantInput.split("");
    let actualArray = actualInput.split("");
    for(let i = 0; i < wantArray.length; i++){
        if(wantArray[i] !== actualArray[ i - index]){
            ans.add(wantArray[i].toUpperCase());
            index++
        }
    }
    console.log(ans);
}


function testSpecialReverse(str) {
    console.log('第5题');
    let array = str.split(' ').reverse().filter(function (s) {
        return s && s.trim(); // 注：IE9(不包含IE9)以下的版本没有trim()方法
    }).join(' ');//先分割数组，在倒转，去除空元素，加入空格

    console.log(array.toString());
}


function twoSum(nums, target) {
    console.log('第6题');
    let map = new Map();
    let ans = [];
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i],i);
        let num = map.get(target - nums[i]);//一边放一边用map.get（key键值）找
        if (num !== undefined){
            ans.push(num);
            ans.push(i);
            console.log(ans);
            ans = [];
        }
    }
}


function lengthOfLongestSubstring(str) {
    console.log('第7题');
    let n = str.length;
    let ans = 0;
    let map = new Map();    //存放字符数组和索引，key:char,value:index
        for (let j = 0, i = 0; j < n; j++) {
        if (map.has(str.charAt(j))) {
        i = Math.max(map.get(str.charAt(j)), i);   //包含下一个字符就把i移到相同字符的后一个位置
    }
    ans = Math.max(ans, j - i + 1);             //判断长度是否要改变
    map.set(str.charAt(j), j + 1);              //把字符和索引放进map，重复的会进行覆盖
}
    console.log(ans);
}

function Country() {
    this.name = "国家";
}

//构造函数
function DevelopingCountry() {
    Country.call(this);
    this.sayHi = function () {
    console.log("Hi,i am a developing country.")
    }
}

//原型链
function PoorCountry(){ }
PoorCountry.prototype = new Country();
PoorCountry.prototype.saySad = function () {
    console.log("I am a sad poor country.");
};

//原型式继承
let DevelopedCountry = Object.create(new Country());
DevelopedCountry.sayHappy = function () {
    console.log("I am a Happy developed country.")
};


    testMail(18227880096,'child_20000@126.com');
    testRedundancy('Is is IS the iS is cost of of gasoline going up up');
    testKeyBoard('7_This_is_a_test','_hs_s_a_es');
    testSpecialReverse('the  sky is blue');
    twoSum([2,7,11,15],9);
    lengthOfLongestSubstring("abbbb");

    console.log('第8题');
    let c1 = new DevelopingCountry();
    c1.sayHi();
    let c2 = new PoorCountry();
    c2.saySad();
    DevelopedCountry.sayHappy();
    console.log('第1题');
    testTime();

