$(
    function () {
        // 启用全屏滚动插件
        $('#fullpage').fullpage({
            scrollingSpeed: 500,
            navigation: true,
            navigationTooltips: ['首页', '技能掌握', '作品Demo', '联系我']
        });

        // ---首页背景轮播效果---
        var home_bgs = $('.home-bg'),
            bg_index = 1;
        //  设置切换背景图的定时器
        var bg_intervar = setInterval(
            function () {
                // 给下个背景图添加显示的Class,并清除其余背景图现实的Class
                home_bgs.eq(bg_index)
                    .addClass('current')
                    .siblings()
                    .removeClass('current');
                // 更新该显示的下张图片索引
                bg_index < home_bgs.length - 1 ? bg_index++ : bg_index = 0;
            },
            5000
        )



    }
);