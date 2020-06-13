# Lab11  
  
>Outline of this lab:  
>1. The function of cookie and session
>2. The advantages & disadvantages of cookie and session
>3. Problems encountered during the lab


### The function of cookie and session:  

HTTP本身是无状态协议,但是在实际应用中我们往往需要服务器在一个或多个Web会话中通过一系列请求保持信息，cookie和session就是HTTP中对状态进行管理的两种方式。

cookie机制采用的是在客户端保持状态的方案，而session机制采用的是在服务器端保持状态的方案。

### Cookie:  

+ advantage：

  1.  可控制生命周期

  2.  不需要任何服务器资源，cookie 存储在客户端并在发送后由服务器读取
  
  3.  cookie 是一种包含简单的键值对，以文本形式存储的轻量结构

  4.  数据持久性，虽然客户端计算机上 Cookie 的持续时间取决于客户端上的 Cookie 过期处理和用户干预，Cookie 通常是客户端上持续时间最长的数据保留形式。
     
    
+ disadvantage:

   1. 需要字符串解析,一些服务器不支持
   
   2. 需要磁盘I/O,速度较慢
   
   3. 有最大存储量限制
   
   4. 访问页面时，客户端每次都要发送cookie到服务器，若cookie过大则耗费资源
   
   5. 当用户非常注重个人隐私保护时，cookie很有可能被禁用
   
   6. cookie是以纯文本的形式保存的，安全性不够高
   
   
  


+ lab 过程中遇到的困难：

   在做有关cookie的练习时，我发现cookie的设置只有在客户端初次访问结束后（或者关闭一次浏览器之后）才会生效，
   因此需要对原先的php代码进行一些修改。
   
   比如登陆成功后显示的welcome “xxx” ，需要将`echo "Welcome ".$_COOKIE['username'];`改为 `echo "Welcome ".$_POST['username'];`
   
   因此原先h1部分的php代码变为
   
        if (!isset($_POST['username'])) {
                   if(isset($_COOKIE['Username'])){
                       echo "Welcome ".$_COOKIE['Username'];
                   }
                   else {
                       echo "No post detected.";
                   }
        }
        else{
                   if(validLogin()){
                       // add 1 day to the current time for expiry time
                       $expiryTime = time()+60*60*24;
                       $name = "Username";
                       $value = $_POST['username'];
                       setcookie($name,$value,$expiryTime);
                       echo "Welcome ".$value;
                       }
                   else{
                       echo "login unsuccessful";
                   }
        }

   同时将下面表单部分的代码改为
   
        if (!isset($_POST['username']) && !isset($_COOKIE['Username'])){
           echo getLoginForm();
       }
       else{
           if(isset($_COOKIE['Username'])){echo "This is some content";}
           else if(validLogin()){echo "This is some content";}
           else echo getLoginForm();
       }

    添加了限制条件`else if(validLogin()){echo "This is some content";}`保证用户初次登陆之后不会再次出现登陆表格
  
  
    
### Session:

+ advantage:

  1. 与cookie相比，session是存储在服务器端的信息，因此更为安全
  
  2. 存储在服务器端，相比cookie更加高效
  
  
+ disadvantage：    
  
  1. 仅在当前会话下有效，关闭页面或者浏览器后被删除
  
  2. session会占用服务器资源，加大服务器端的负载，尤其当并发用户很多时，会生成大量的session，影响服务器的性能.
     集群条件下，同一SessionID始终给同一服务器则难以起到负载均衡效果；若通过某种共享机制使所有服务器都能访问SessionID则可能有单点故障
  



   
   








