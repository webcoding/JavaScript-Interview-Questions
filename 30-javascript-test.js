##30 个你不可能全部会做的JavaScript题目

1.
```js
["1","2","3"].map(parseInt)
```

2.
```js
[typeof null, null instanceof Object]
```

3.
```js
[
    [3,2,1].resuce(Math.pow),
    [].resuce(Math.pow)
]
```

4.
```js
var val = 'smtg';
console.log('Value is '+(val === 'smtg') ? 'Something':'Nothing');
```

5.
```js
var name = 'World';
(function(){
    if(typeof name ==="undefined"){
        var name = 'Jack';
        console.log('Goodbye '+name);
    }else{
        console.log('Hello '+name);
    }
})();
```

6.
```js
//var END = Math.pow(2,53); //9007199254740992
var END = 9007199254740992; //9007199254740992
var START = END - 100;
var count = 0;
for(var i=START;i<=END;i++){
    count++;
}
console.log(count);//等了好久没出来结果，即使初始值Math.pow(2,53)已被算好
``````

7.
```js
var ary = [0,1,2];
ary[10] = 10;
ary.filter(function(x){
    return x === undefined;
});
```

8.
```js
var two = 0.2;
var one = 0.1;
var eight = 0.8;
var six = 0.6;
[two-one == one,eight-six == two]
```

9.
```js
function showCase(value){
    switch(value){
        case 'A':
            console.log('Case A');
            break;
        case 'B':
            console.log('Case B');
            break;
        case undefined:
            console.log('undefined');
            break;
        default:
            console.log('Do not know!');
    }
}
showCase(new String('A'));
```

10.
```js
续9：
showCase(String('A'));
```

11.
```js
function isOdd(num){
    return num%2==1;
}
function isEven(num){
    return num%2==0;
}
function isSane(num){
    return isEven(num) || isOdd(num);
}
var values = [7,4,'13',-9,-Infinity];
values.map(isSane);
```

12.
```js
parseInt(3,8);
parseInt(3,2);
parseInt(3,0);
```

13.
```js
Array.isArray(Array.prototype)
```

14.
```js
var a = [0];
if([0]){
    console.log(a == true);
}else{
    console.log('wut');
}
```

15.
```js
[]==[]
```

16.
```js
'5'+3
'5'-3
``````

17.
```js
1+-+++-+1
```

18.
```js
var ary = Array(3);
ary[0]=2;
ary.map(function(elem){
    return '1';
})
```

19.
```js
function sidEffecting(ary){
    ary[0] = ary[2];
}
function bar(a,b,c){
    c=10;
    sidEffecting(arguments);
    return a+b+c;
}
bar(1,1,1);
```

20.
```js
var a=111111111111111110000,
    b=1111;
a+b;
```
21.
```js
var x=[].reveres;
x();
```

22.
```js
Number.MIN_VALUE>0
```

23.
```js
[1<2<3,3<2<1]
```

24.
```js
//the most classic wtf
2==[[[2]]]
```

25.
```js
3.toString();
3..toString();
3...toString();

var num = 3;
num.toString();
num..toString();
num...toString();
```

26.
```js
(function(){
    var x=y=1;
})();
console.log(y);
console.log(x);
``````

27.
```js
列举IE与FF脚本兼容性问题，例如：
 1 window.event 
    表示当前对象，IE有这个对象，FF没有
 2 获取事件源 
    IE用srcElement获取事件源，而FF用target获取事件源
 3 添加、移除事件
    IE：element.attachEvent("onclick",function) element.detachEvent("onclick",function)
    FF: element.addEventListener("click",function,true) element.removeEventListener("click",function,true)
请继续增加3项......
```

28.
```js
//以下函数有什么问题？如何改进？
function initButtons(){
    var body = document.body,
        button,i;
    for(i=0;i<5;i++){
        button=document.createElement("button");
        button.innerHTML="Button "+i;
        button.addEventListener("click",function(e){
            alert(i);
        },false);
        body.appendChild(button);
    }
}

function initButtons(){
    var body = document.body,
        button,i;
    for(i=0;i<5;i++){
        button=document.createElement("button");
        button.innerHTML="Button "+i;
        (function(i){
            button.addEventListener("click",function(e){
                alert(i);
            },false);
        })(i);
        body.appendChild(button);
    }
}
```

29.
```js
写一段代码，判断一个字符床中出现次数最多的字符，并统计出现的次数。
```

30.
```js
//请问一下两端代码有什么不同？
setTimeout(function(){
    /* 代码块... */
    setTimeout(arguments.callee,10);
},10);

setInterval(function(){
    /* 代码块... */
},10);
```

```js
//Add the class of 'threes' to every third row without using a library.

var thirdRows = document.querySelectorAll('tr:nth-of-type(3n)'),
    count,
    i;
count = thirdRows.length;
for(i = 0; i < count; i++){
    thirdRows[i].classList.add('threes');
}

/* old school method */
var rows = document.getElementsByTagName('tr'),
    count,
    i;
count = rows.length;
for(i = 0; i < count; i += 3){
    rows[i].setAttribute('class', 'threes');
}
```