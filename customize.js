//缅怀
function mianhuai(){
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = "html{-webkit-filter: grayscale(100%);-moz-filter: grayscale(100%);-ms-filter: grayscale(100%);-o-filter: grayscale(100%);filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);_filter:none;}";
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(style);
}
function runMianhuai() {
    var mianhuaiDays = new Array();
    //此处可以自行添加（1表示公历，2表示农历）
    mianhuaiDays.push("1|5-12");
    mianhuaiDays.push("1|9-18");
    mianhuaiDays.push("1|12-13");
    //...
    //获取当前日期
    var date = new Date();
    var today = (date.getMonth()+1)+"-"+date.getDate();
    var ldate = calendar.solar2lunar(date.getFullYear(),(date.getMonth()+1),date.getDate());
    var ltoday = ldate.lMonth+"-"+ldate.lDay
    for (var i= 0; i< mianhuaiDays.length; i++) {
        var dl = mianhuaiDays[i].split("|");
        /*if (mianhuaiDays[i] === today) {
            mianhuai();
            break;
        }*/
        if (dl[0] === '1'){
            if (dl[1] === today){
                mianhuai();
                break;
            }
        }else if (dl[0] === '2'){
            if (dl[1] === ltoday){
                mianhuai();
                break;
            }
        }
    }
}
runMianhuai();

//灯笼
function denglong(zfy){
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '@media screen and (max-width: 768px) {.xnkl{display:none; }}.deng-box{position: fixed;top: -40px;right: 150px;z-index: 9999;pointer-events: none;}.deng-box1 {position: fixed;top: -30px;right: 10px;z-index: 9999;pointer-events: none}.deng-box2 {position: fixed;top: -40px;left: 150px;z-index: 9999;pointer-events: none}.deng-box3 {position: fixed;top: -30px;left: 10px;z-index: 9999;pointer-events: none}.deng-box1 .deng,.deng-box3 .deng {position: relative;width: 120px;height: 90px;margin: 50px;background: #d8000f;background: rgba(216,0,15,.8);border-radius: 50% 50%;-webkit-transform-origin: 50% -100px;-webkit-animation: swing 5s infinite ease-in-out;box-shadow: -5px 5px 30px 4px #fc903d}.deng {position: relative;width: 120px;height: 90px;margin: 50px;background: #d8000f;background: rgba(216,0,15,.8);border-radius: 50% 50%;-webkit-transform-origin: 50% -100px;-webkit-animation: swing 3s infinite ease-in-out;box-shadow: -5px 5px 50px 4px #fa6c00}.deng-a {width: 100px;height: 90px;background:#d8000f;background: rgba(216,0,15,.1);margin: 12px 8px 8px 8px;border-radius: 50% 50%;border: 2px solid #dc8f03}.deng-b {width: 45px;height: 90px;background: #d8000f;background: rgba(216,0,15,.1);margin: -4px 8px 8px 26px;border-radius: 50% 50%;border:2px solid #dc8f03}.xian {position: absolute;top: -20px;left: 60px;width: 2px;height:20px;background: #dc8f03}.shui-a {position: relative;width: 5px;height:20px;margin:-5px 0 0 59px;-webkit-animation: swing 4s infinite ease-in-out;-webkit-transform-origin: 50% -45px;background: orange;border-radius: 0 0 5px 5px}.shui-b {position:absolute;top: 14px;left: -2px;width: 10px;height: 10px;background: #dc8f03;border-radius: 50%}.shui-c {position: absolute;top: 18px;left: -2px;width: 10px;height: 35px;background: orange;border-radius: 0 0 0 5px}.deng:before {position: absolute;top: -7px;left: 29px;height: 12px;width: 60px;content: " ";display: block;z-index: 999;border-radius: 5px 5px 0 0;border: solid 1px #dc8f03;background: orange;background: linear-gradient(to right,#dc8f03,orange,#dc8f03,orange,#dc8f03)}.deng:after {position:absolute;bottom: -7px;left: 10px;height: 12px;width: 60px;content: " ";display: block;margin-left: 20px;border-radius: 0 0 5px 5px;border: solid 1px #dc8f03;background:orange;background: linear-gradient(to right,#dc8f03,orange,#dc8f03,orange,#dc8f03)}.deng-t {font-family: 楷体,Arial,Lucida Grande,Tahoma,sans-serif;font-size: 2.6rem;color: #dc8f03;font-weight: 700;line-height: 85px;text-align: center}.night .deng-box,.night .deng-box1,.night .deng-t {background: 0 0!important}@-moz-keyframes swing {0%{-moz-transform: rotate(-10deg)}50% {-moz-transform: rotate(10deg)}100% {-moz-transform:rotate(-10deg)}}@-webkit-keyframes swing {0% {-webkit-transform: rotate(-10deg)}50% {-webkit-transform: rotate(10deg)}100% {-webkit-transform: rotate(-10deg)}}';
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(style);
    
    var zfys = zfy.split("");
    var div = document.createElement('div');
    div.innerHTML = '<div class="xnkl"><div class="deng-box2"><div class="deng"><div class="xian"></div><div class="deng-a"><div class="deng-b"><div class="deng-t">'+zfys[1]+'</div></div></div><div class="shui shui-a"><div class="shui-c"></div><div class="shui-b"></div></div></div></div><div class="deng-box3"><div class="deng"><div class="xian"></div><div class="deng-a"><div class="deng-b"><div class="deng-t">'+zfys[0]+'</div></div></div><div class="shui shui-a"><div class="shui-c"></div><div class="shui-b"></div></div></div></div><div class="deng-box1"><div class="deng"><div class="xian"></div><div class="deng-a"><div class="deng-b"><div class="deng-t">'+zfys[3]+'</div></div></div><div class="shui shui-a"><div class="shui-c"></div><div class="shui-b"></div></div></div></div><div class="deng-box"><div class="deng"><div class="xian"></div><div class="deng-a"><div class="deng-b"><div class="deng-t">'+zfys[2]+'</div></div></div><div class="shui shui-a"><div class="shui-c"></div><div class="shui-b"></div></div></div></div></div>';
    var body = document.body || document.getElementsByTagName('body')[0];
    body.appendChild(div);
}
function runDenglong() {
    var denglongs = new Array();
    //此处可以自行添加（1表示公历，2表示农历）
    denglongs.push("1|1-1|新年快乐");
    denglongs.push("1|10-1|国庆快乐");
    denglongs.push("2|1-1|新年快乐");
    denglongs.push("2|1-15|元宵快乐");
    denglongs.push("2|8-15|中秋快乐");
    //...
    //获取当前日期
    var date = new Date();
    var today = (date.getMonth()+1)+"-"+date.getDate();
    var ldate = calendar.solar2lunar(date.getFullYear(),(date.getMonth()+1),date.getDate());
    var ltoday = ldate.lMonth+"-"+ldate.lDay
    for (var i=0; i<denglongs.length; i++){
        var dl = denglongs[i].split("|");
        if (dl[0] === '1'){
            if (dl[1] === today){
                denglong(dl[2]);
                break;
            }
        }else if (dl[0] === '2'){
            if (dl[1] === ltoday){
                denglong(dl[2]);
                break;
            }
        }
    }
}
runDenglong();