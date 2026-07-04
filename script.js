const shop = {
  name: "红叶炸串",
  address: "安徽省芜湖市鸠江区伟星大家玖都荟",

  /*
    这里是坐标。

    你原来写的是：
    lng: 1182318

    这个是错的，因为经度应该带小数点。
    类似这样：
    lng: 118.2318

    下面这个坐标我先按你原来的数字改成小数格式。
    但是最好你再用高德地图或腾讯地图核对一下是否准确。
  */
  lat: 31.2130,
  lng: 118.2318
};

document.getElementById("shopName").textContent = shop.name;
document.getElementById("shopAddress").textContent = shop.address;

const name = encodeURIComponent(shop.name);
const address = encodeURIComponent(shop.address);

const lat = Number(shop.lat);
const lng = Number(shop.lng);

const hasCoord =
  Number.isFinite(lat) &&
  Number.isFinite(lng) &&
  lat > 3 &&
  lat < 54 &&
  lng > 70 &&
  lng < 140;

const qqMap = document.getElementById("qqMap");
const amap = document.getElementById("amap");

if (hasCoord) {
  // 腾讯地图：坐标顺序是 纬度,经度
  qqMap.href =
    `https://apis.map.qq.com/uri/v1/routeplan?type=drive&to=${name}&tocoord=${lat},${lng}&policy=1&referer=hongye-zhachuan`;

  // 高德地图：坐标顺序是 经度,纬度
  amap.href =
    `https://uri.amap.com/navigation?to=${lng},${lat},${name}&mode=car&policy=1&src=hongye-zhachuan&coordinate=gaode&callnative=1`;
} else {
  // 如果坐标不对，就退一步使用地址搜索
  qqMap.href =
    `https://apis.map.qq.com/uri/v1/search?keyword=${address}&referer=hongye-zhachuan`;

  amap.href =
    `https://uri.amap.com/search?keyword=${address}&src=hongye-zhachuan&callnative=1`;
}