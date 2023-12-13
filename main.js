function createScript(src){
    let script = document.createElement("script");
    script.src = src;
    // 保证js按顺序执行
    script.async = false;
    let s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(script,s);
}

createScript("https://admin.blog.wangxingyi.top/plugin-custom/wxy/js/lunar.js");
createScript("https://admin.blog.wangxingyi.top/plugin-custom/wxy/js/customize.js");