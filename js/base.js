$(function(){
    var about_me = $('#about_me');              // 关于我
    var web_novel = $('#web_novel');            // 拆网络小说
    var resource = $('#resource');              // 装逼素材整理
    var pic_show = $('#pic_show');              // 相册展示
    var old_new = $('#old_new')                 // 古籍化用
    var good_setting = $('#good_setting')       // 各种优秀设定
    var home = $('#home')                       // 首页
    var public_page = $('#public_page')         // 公共页面
    var show_title = $('#show_title')           // 展示标签页

    var xc_iframe = $('#xc_iframe')
    var me_iframe = $('#me_iframe')
    var old_iframe = $('#old_iframe')
    var web_iframe = $('#web_iframe')
    var res_iframe = $('#res_iframe')
    var good_iframe = $('#good_iframe')

    function aboutMe(){
        showSomePage(me_iframe)
        show_title.html('关于我')
        about_me.addClass("nava")
    }
    function webNovel(){
        showSomePage(web_iframe)
        show_title.html('拆网络小说')
        web_novel.addClass("nava")
    }
    function resCe(){
        showSomePage(res_iframe)
        show_title.html('装逼素材整理')
        resource.addClass("nava")
    }
    function picShow(){
        show_title.html('相册展示')
        clearClass()
        xc_iframe.css('visibility','visible') //仅仅展示这个页面
        pic_show.addClass("nava")
    }
    function oldNew(){
        showSomePage(old_iframe)
        show_title.html('古籍化用')
        old_new.addClass("nava")
    }
    function goodSetting(){
        showSomePage(good_iframe)
        show_title.html('各种优秀设定')
        good_setting.addClass("nava")
    }
    function Home(){
        clearClass()
        show_title.html('首页')
        home.addClass("nava")
    }
    function clearClass(){
        xc_iframe.css('visibility','hidden');
        me_iframe.hide();
        old_iframe.hide();
        web_iframe.hide();
        res_iframe.hide();
        good_iframe.hide();
        ////////////
        about_me.removeClass("nava")
        web_novel.removeClass("nava")
        resource.removeClass("nava")
        pic_show.removeClass("nava")
        old_new.removeClass("nava")
        good_setting.removeClass("nava")
        home.removeClass("nava")
    }
    function showSomePage(obj){
        clearClass()
        obj.show()
    }
    function setStyle(obj){

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
        Home()
    }

    // 调用初始化函数
    initWeb();
});