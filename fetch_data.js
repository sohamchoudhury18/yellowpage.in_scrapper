/* global $ */
var data = [];
var info = $(".eachPopularTitle  hasOtherInfo");
var phone = $(".businessContact");

for (var i in info) {
    var obj = new Object;
    obj.name = info.get(i).innerHTML;
    obj.phone = phone.get(i).innerHTML;
    data.push(obj);

}

JSON.stringify(data);
