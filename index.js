#!/usr/bin/env node
var axios = require('axios')
// var pinyin = require("node-pinyin")
//console.log(process.argv)
var url = 'https://bird.ioliu.cn/weather'
var data = {
    city: '深圳'
}
if (process.argv[2]) {
    data.city = process.argv[2]
    //console.log(city)
    axios.get(url, {
        params: data
    }).then(function (res) {
        // console.log(res)
        showWeather(res.data)
    }).catch(function (error) {
        console.log('获取数据出错了')
    })
} else {
    axios.get(url, {
        params: data
    }).then(function (res) {
        // console.log(res)
        showWeather(res.data)
    }).catch(function (error) {
        console.log('获取数据出错了')
    })
}

function showWeather(data) {
    if (data.status === 0 || data.msg === 'ok') {
        var result = data.result
        console.log('下面是您所查找的城市的天气信息')
        console.log('时间:' + result.updatetime + '/' + result.week)
        console.log('城市:' + result.city)
        console.log('天气:' + result.weather + '-----' + '温度:' + result.templow + '~' + result.temphigh + '之间，平均温度' + result.temp + '-----' + '湿度:' + result.humidity)
        console.log('风向:' + result.winddirect + '-----' + '风速:' + result.windspeed + '-----' + '风力等级:' + result.windpower)
        console.log('温馨提示:' + result.index[6].detail)
    } else {
        console.log('请说如正确的命令，如："mood 长沙"')
        console.log('只支持中文输入')
    }
}




