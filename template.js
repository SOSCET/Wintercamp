#!/usr/bin/env node
/**
 * for generate html dom
 */
var fs = require('fs');
var targetFile = 'tmp.swp';
var data = [
  ['Date', '2015/01/27', '第一天'],
  ['12:30', '13:30', '報到＆集合'],
  ['13:30', '14:30', '接駁前往東華'],
  ['14:30', '15:00', '開幕'],
  ['15:00', '16:00', '小隊破冰'],
  ['16:00', '18:00', '開源精神'],
  ['18:00', '19:00', '晚餐'],
  ['19:00', '21:00', '夜間教育'],
  ['21:30', '22:00', '宵夜'],
  ['Date', '2015/01/28', '第二天'],
  ['08:00', '09:00', '早餐'],
  ['09:00', '12:30', '認識電腦硬體與網路'],
  ['12:30', '13:30', '午餐'],
  ['13:30', '17:00', '程式設計！敲出你人生中的第一個程式吧！'],
  ['17:00', '18:00', '晚餐'],
  ['18:00', '21:00', 'Arduino！開源硬體動手做！'],
  ['21:00', '22:00', '宵夜'],
  ['Date', '2015/01/29', '第三天'],
  ['08:00', '09:00', '早餐'],
  ['09:00', '12:00', '大地遊戲'],
  ['12:00', '13:00', '午餐'],
  ['13:00', '17:00', '資訊安全？你知道駭客都藏在你不知道的地方嗎？'],
  ['17:00', '18:00', '晚餐'],
  ['18:00', '21:00', '密室逃脫'],
  ['21:00', '22:00', '宵夜'],
  ['Date', '2015/01/30', '第四天'],
  ['08:00', '09:00', '早餐'],
  ['09:00', '13:30', '創造！屬於創造者的馬拉松！'],
  ['13:30', '15:00', '閉幕＆成果發表'],
  ['15:00', '16:00', '搭車前往車站']
];
var result = "";
for (var i in data) {
  if(data[i][0] === 'Date') {
    var date = data[i][1];
    var day = data[i][2];
    if(result !== "")
        result += "</div>\n";
    var template = `<div class="agenda-container">
    <h3 class="agenda-date">${day} - ${date}</h3>`;
    result += template + "\n";
    continue;
  }
  var start = data[i][0];
  var end = data[i][1];
  var title = data[i][2];
  var template = `    <div class="agenda-item">
        <div class="agenda-left">
            ${title}
        </div>
        <div class="agenda-right">
            <div class="agenda-time">
                <span>${start}</span>
                <span>~</span>
                <span>${end}</span>
            </div>
        </div>
    </div>`;
  result += template + "\n";
}
result += "</div>";

fs.writeFile(targetFile, result, function(err) {
  if (err)
    console.log(err);
});
