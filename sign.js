const rp = require('request-promise');

async function request(url){
    return new Promise(function(resolve){
        rp(url)
            .then(function(htmlString){
                resolve(htmlString);
            })
            .catch(function(){
                resolve("错误");
            });
    });
}

var data = ["3205226", "100010581822", "7202389", "422539"];
var name = ["爱他美奶粉", "路由器", "纸尿片", "伊利奶粉"];
var host = "https://p.3.cn/prices/mgets?skuIds=J_";
async function test(){
    for(let i = 0; i < data.length; i++){
        let result = await request(host + data[i]);
		var jsData = JSON.parse(result);
		var price = jsData[0].p;
        console.log(name[i] + ":" + price + "元\r\n\n");
    }
}

test()
