$(function(){
    var about_me = $('#about_me');            // 关于我
    var web_novel = $('#web_novel');            // 拆网络小说
    var resource = $('#resource');          // 装逼素材整理
    var pic_show = $('#pic_show');           // 相册展示
    var old_new = $('#old_new')             // 古籍化用
    var good_setting = $('#good_setting')        // 各种优秀设定
    var home = $('#home')                // 首页
    var public_page = $('#public_page')                // 公共页面

    var xc_iframe = $('#xc_iframe')
    var me_iframe = $('#me_iframe')
    var old_iframe = $('#old_iframe')
    var web_iframe = $('#web_iframe')
    var res_iframe = $('#res_iframe')
    var good_iframe = $('#good_iframe')

    function aboutMe(){
        showSomePage(me_iframe)
    }
    function webNovel(){
        showSomePage(web_iframe)
    }
    function resCe(){
        showSomePage(res_iframe)
    }
    function picShow(){
        clearClass()
        xc_iframe.css('visibility','visible') //仅仅展示这个页面
    }
    function oldNew(){
        showSomePage(old_iframe)
    }
    function goodSetting(){
        showSomePage(good_iframe)
    }
    function Home(){

    }
    function clearClass(){
        xc_iframe.css('visibility','hidden');
        me_iframe.hide();
        old_iframe.hide();
        web_iframe.hide();
        res_iframe.hide();
        good_iframe.hide();
    }
    function showSomePage(obj){
        clearClass()
        obj.show()
    }

    // 初始化函数
    function initWeb() {
        about_me.on('click',aboutMe);
        web_novel.on('click',webNovel);
        resource.on('click',resCe);
        pic_show.on('click',picShow);
        old_new.on('click',oldNew);
        good_setting.on('click',goodSetting);
        home.on('click',Home);
        clearClass()
    }

    // 调用初始化函数
    initWeb();
});