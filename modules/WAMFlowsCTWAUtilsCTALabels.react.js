__d("WAMFlowsCTWAUtilsCTALabels.react", ["fbt", "bx"], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = [
		{
			key: "getPromotions",
			label: s._(
				/*BTDS*/
				""
			)
		},
		{
			key: "getOffer",
			label: s._(
				/*BTDS*/
				""
			)
		},
		{
			key: "signUp",
			label: s._(
				/*BTDS*/
				""
			)
		},
		{
			key: "subscribe",
			label: s._(
				/*BTDS*/
				""
			)
		},
		{
			key: "applyNow",
			label: s._(
				/*BTDS*/
				""
			)
		},
		{
			key: "getUpdates",
			label: s._(
				/*BTDS*/
				""
			)
		},
		{
			key: "getQoute",
			label: s._(
				/*BTDS*/
				""
			)
		},
		{
			key: "learnMore",
			label: s._(
				/*BTDS*/
				""
			)
		},
		{
			key: "requestAppointment",
			label: s._(
				/*BTDS*/
				""
			)
		},
		{
			key: "bookNow",
			label: s._(
				/*BTDS*/
				""
			)
		},
		{
			key: "getStarted",
			label: s._(
				/*BTDS*/
				""
			)
		},
		{
			key: "joinNow",
			label: s._(
				/*BTDS*/
				""
			)
		}
	], c = {
		calendar: (e = r("bx")).getURL(e("25319")),
		mail: e.getURL(e("25320")),
		notepad: e.getURL(e("25321")),
		offer: e.getURL(e("25322"))
	}, d = {
		applyNow: c.mail,
		bookNow: c.calendar,
		getOffer: c.offer,
		getPromotions: c.notepad,
		getQoute: c.notepad,
		getStarted: c.notepad,
		getUpdates: c.mail,
		learnMore: c.notepad,
		requestAppointment: c.calendar,
		signUp: c.mail,
		subscribe: c.mail
	};
	function m(e) {
		var t = u.find(function(t) {
			return t.label.toString() === e;
		}), n = t == null ? void 0 : t.key, o = r("bx").getURL(r("bx")("25321"));
		return t == null || n == null || d[n] == null ? o : d[n];
	}
	l.ctaOptions = u, l.getIconByCTALabel = m;
}), 226);
