/**
 * Created by yueziyao on 2017/2/20.
 */
(function($){
    var lang = {
        /*common*/
        'type':'类型',
        'tid':'任务Id',
        'pid':'页面id',
        'uid':'用户id',
        /*speed.js*/
        'sample':'抽样概率',
        'browser': '浏览器',
        'screen': '屏幕尺寸',
        'mnt': '网络类型',
        'ref': '来源',
        'url': '当前url',
        'cookie': '是否允许cookie',
        'language': '语言',
        'os':'平台',
        'ht':'白屏时间',
        'drt': 'DOM完成时间',
        'lt':'页面加载完成时间',
        'fs':'首屏时间',
        'dns':'DNS时间-timing',
        'ct':'页面链接时间-timing',
        'st':'首包时间-timing',
        'tt':'html传输完成时间-timing',
        'dct':'DOM完成时间-timing',
        'olt':'页面加载完成时间-timing',
        'c_frameLoad':'自定义的iframe加载完成时间',
        /*csp.js*/
        'tag':'页面标签',
        'cspurl':'跨域请求',
        /*feature*/
        'bdrs':'borderRadius',
        'bxsd':'boxShadow',
        'opty':'opacity',
        'txsd':'textShadow',
        'amnm':'animateName',
        'tstn':'transition',
        'tsfm':'transform',
        'cavs':'canvas',
        'dgdp':'dragdrop',
        'locs':'localstorage',
        'audo':'audio',
        'vido':'video',
        'xhr2':'xmlHttpRequest',
        'svg':'svg',
        'wsql':'openDatabase',
        'natm':'timing',
        'ustm':'mark',
        'wbsk':'websocket',
        'geol':'geoloacation',
        'wbgl':'webGL',
        'hsty':'history',
        'ptmg':'postMessage',
        'file':'file',
        /*monkey.js*/
        'cmd':'用户操作',
        'mst':'页面停留时间',
        'vr':'滚动条数据',
        'tm':'点击时间',
        'count':'点击次数',
        'xp':'元素路径',
        'ep':'点击的元素部位',
        'pp':'点击的坐标',
        'ps':'网页最大尺寸',
        'u':'元素URL',
        'txt':'元素文本'
    }
    var dataObj = $('.data-div');
    dataObj.bind('click', function() {
        $(this).find('ul').toggle();
    })
    dataObj.each(function(){
        var data = JSON.parse($(this).attr('data-url'));
        var html = '';

        for(var i in data) {
            var desc = lang[i] || '';
            html += '<li><span class="key">'+i+'</span><span class="desc">('+desc+')</span>:<span class="val">'+data[i]+'</span></li>';
        }
        $(this).find('ul').html(html);
    })
    $(".btn").bind("click", function(){
        $.ajax({
            url:'/clear',
            success:function(res) {
                location.reload();
            }
        })
    })
}(jQuery))