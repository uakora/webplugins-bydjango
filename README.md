# webplugins-bydjango
create project by django

1.关于插件中的.map文件
source map文件是js文件压缩后，文件的变量名替换对应、变量所在位置等元信息数据文件，一般这种文件和min.js主文件放在同一个目录下。
比如压缩后原变量是map，压缩后通过变量替换规则可能会被替换成a，这时source map文件会记录下这个mapping的信息，这样的好处就是说，在调试的时候，如果有一些JS报错，那么浏览器会通过解析这个map文件来重新merge压缩后的js,使开发者可以用未压缩前的代码来调试，这样会给我们带来很大的方便！
而这种还原性调试功能，目前只有chorme才具有，所以就会出现标题说的问题，我引入jquery-1.10.2.min.js的时候，在firefox下或者其他浏览器下是好的，在chorme下会报错找不到jquery-1.10.2.min.map文件，404，就是因为以上说的情况，jquery会检测浏览器是否支持source map功能，如果支持的话，那就去下载source map文件，而这个时候如果你引用的是官网的min.js那没问题，它会去自己的目录下找source map文件，而如果jquery.min.js文件在你的服务器上而服务器上又没有source map的话，那就会报错了。
所以三种解决办法：
一，引用官网文件
二，把source map文件下载下来放到服务器上(推荐)
三，把chorme文件的工具-->开发者工具-->设置-->Enable source maps勾去掉，去掉这个勾，jquery就不会去下载source map文件了！
