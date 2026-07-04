const shop = {
  name: "红叶炸串",
  address: "安徽省芜湖市鸠江区伟星大家玖都荟",
  city: "芜湖"
};

document.getElementById("shopName").textContent = shop.name;
document.getElementById("shopAddress").textContent = shop.address;

const destination = encodeURIComponent(shop.address);
const city = encodeURIComponent(shop.city);

const qqMap = document.getElementById("qqMap");
const amap = document.getElementById("amap");

// 腾讯地图：不使用经纬度，只填写终点地址
qqMap.href =
  `https://apis.map.qq.com/uri/v1/routeplan?type=drive&to=${destination}&policy=1&referer=hongye-zhachuan`;

// 高德地图：不使用经纬度，打开高德并搜索这个终点地址
amap.href =
  `https://uri.amap.com/search?keyword=${destination}&city=${city}&view=map&src=hongye-zhachuan&callnative=1`;
