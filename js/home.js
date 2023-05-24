$(function(){
    var snake = $('#snake');
    var tank = $('#tank');
    var photoWall = $('#photoWall');
    var game2048 = $('#game2048');
    var game = $('#xcl')

    function startSnake(){
        game.load('../game/snake/index.html')
    }

    function startTank(){
        game.load('../game/tank/index.html')
    }

    function startWall(){
        game.load('../game/globule/index.html')
    }

    function start2048(){
        game.load('../game/five-chess/index.html')
        $.getScript("../game/five-chess/js/FiveChess.js",function(){//加载test.js,成功后，并执行回调函数
            console.log("加载js文件");
        });
    }


    // 初始化函数
    function initWeb() {
        snake.on('click',startSnake);
        tank.on('click',startTank);
        photoWall.on('click',startWall);
        game2048.on('click',start2048);
    }

    // 调用初始化函数
    initWeb();
});