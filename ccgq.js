/**
虫虫钢琴 2021

[rewrite_local]

http://cc.lzjoy.com url script-response-body https://raw.githubusercontent.com/LoveJessyChen/QX-Scripts/refs/heads/main/ccgq.js

*/

let obj = JSON.parse($response.body);

if ($request.url.includes("http://cc.lzjoy.com/?urlparam=common/user/GetVip") {
    obj.list.is_buy = "1";
    obj.list.is_vip = "1";
    obj.list.has_buy = "1";
    obj.list.expire_date = "9999-09-09";
} else if ($request.url.includes("http://cc.lzjoy.com/?urlparam=common/user/GetVip")) {
    obj.list.is_buy = "1";
    obj.list.is_vip = "1";
    obj.list.info.has_pay = "1";
}

$done({ body: JSON.stringify(obj) });
