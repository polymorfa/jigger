__d("WAWebMoment-ta", ["WAWeb-moment"], (function(t, n, r, o, a, i, l) {
	var e = {
		1: "௧",
		2: "௨",
		3: "௩",
		4: "௪",
		5: "௫",
		6: "௬",
		7: "௭",
		8: "௮",
		9: "௯",
		0: "௦"
	}, s = {
		"௧": "1",
		"௨": "2",
		"௩": "3",
		"௪": "4",
		"௫": "5",
		"௬": "6",
		"௭": "7",
		"௮": "8",
		"௯": "9",
		"௦": "0"
	}, u = r("WAWeb-moment").defineLocale("ta", {
		months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
		monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
		weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
		weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
		weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
		longDateFormat: {
			LT: "HH:mm",
			LTS: "HH:mm:ss",
			L: "DD/MM/YYYY",
			LL: "D MMMM YYYY",
			LLL: "D MMMM YYYY, HH:mm",
			LLLL: "dddd, D MMMM YYYY, HH:mm"
		},
		calendar: {
			sameDay: "[இன்று] LT",
			nextDay: "[நாளை] LT",
			nextWeek: "dddd, LT",
			lastDay: "[நேற்று] LT",
			lastWeek: "[கடந்த வாரம்] dddd, LT",
			sameElse: "L"
		},
		relativeTime: {
			future: "%s இல்",
			past: "%s முன்",
			s: "ஒரு சில விநாடிகள்",
			ss: "%d விநாடிகள்",
			m: "ஒரு நிமிடம்",
			mm: "%d நிமிடங்கள்",
			h: "ஒரு மணி நேரம்",
			hh: "%d மணி நேரம்",
			d: "ஒரு நாள்",
			dd: "%d நாட்கள்",
			M: "ஒரு மாதம்",
			MM: "%d மாதங்கள்",
			y: "ஒரு வருடம்",
			yy: "%d ஆண்டுகள்"
		},
		dayOfMonthOrdinalParse: /\d{1,2}வது/,
		ordinal: function(t) {
			return t + "வது";
		},
		preparse: function(t) {
			return t.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function(e) {
				return s[e];
			});
		},
		postformat: function(n) {
			return n.replace(/\d/g, function(t) {
				return e[t];
			});
		},
		meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
		meridiem: function(t, n, r) {
			return t < 2 ? " யாமம்" : t < 6 ? " வைகறை" : t < 10 ? " காலை" : t < 14 ? " நண்பகல்" : t < 18 ? " எற்பாடு" : t < 22 ? " மாலை" : " யாமம்";
		},
		meridiemHour: function(t, n) {
			return t === 12 && (t = 0), n === "யாமம்" ? t < 2 ? t : t + 12 : n === "வைகறை" || n === "காலை" || n === "நண்பகல்" && t >= 10 ? t : t + 12;
		},
		week: {
			dow: 0,
			doy: 6
		}
	});
}), 34);
