__d("WAWebMoment-zh-tw", ["WAWeb-moment"], (function(t, n, r, o, a, i, l) {
	var e = r("WAWeb-moment").defineLocale("zh-tw", {
		months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
		monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
		weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
		weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
		weekdaysMin: "日_一_二_三_四_五_六".split("_"),
		longDateFormat: {
			LT: "HH:mm",
			LTS: "HH:mm:ss",
			L: "YYYY/MM/DD",
			LL: "YYYY年M月D日",
			LLL: "YYYY年M月D日 HH:mm",
			LLLL: "YYYY年M月D日dddd HH:mm",
			l: "YYYY/M/D",
			ll: "YYYY年M月D日",
			lll: "YYYY年M月D日 HH:mm",
			llll: "YYYY年M月D日dddd HH:mm"
		},
		meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
		meridiemHour: function(t, n) {
			if (t === 12 && (t = 0), n === "凌晨" || n === "早上" || n === "上午") return t;
			if (n === "中午") return t >= 11 ? t : t + 12;
			if (n === "下午" || n === "晚上") return t + 12;
		},
		meridiem: function(t, n, r) {
			var e = t * 100 + n;
			return e < 600 ? "凌晨" : e < 900 ? "早上" : e < 1130 ? "上午" : e < 1230 ? "中午" : e < 1800 ? "下午" : "晚上";
		},
		calendar: {
			sameDay: "[今天] LT",
			nextDay: "[明天] LT",
			nextWeek: "[下]dddd LT",
			lastDay: "[昨天] LT",
			lastWeek: "[上]dddd LT",
			sameElse: "L"
		},
		dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
		ordinal: function(t, n) {
			switch (n) {
				case "d":
				case "D":
				case "DDD": return t + "日";
				case "M": return t + "月";
				case "w":
				case "W": return t + "週";
				default: return t;
			}
		},
		relativeTime: {
			future: "%s後",
			past: "%s前",
			s: "幾秒",
			ss: "%d 秒",
			m: "1 分鐘",
			mm: "%d 分鐘",
			h: "1 小時",
			hh: "%d 小時",
			d: "1 天",
			dd: "%d 天",
			M: "1 個月",
			MM: "%d 個月",
			y: "1 年",
			yy: "%d 年"
		}
	});
}), 34);
