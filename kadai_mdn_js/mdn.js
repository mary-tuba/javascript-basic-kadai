// 今日の日付をtoday変数に代入
const today = new Date();

// 年を表示
const year = today.getFullYear();

// 月を表示 (0-11で表示されるので、+1する) 
const month = today.getMonth() +1;

// 日を表示
const day = today.getDate();

console.log(year + "年" + month + "月" + day + "日");