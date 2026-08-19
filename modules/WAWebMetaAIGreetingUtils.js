__d("WAWebMetaAIGreetingUtils", ["fbt", "Random"], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = [s._(
		/*BTDS*/
		""
	)], u = [s._(
		/*BTDS*/
		""
	)], c = [s._(
		/*BTDS*/
		""
	)], d = [s._(
		/*BTDS*/
		""
	)], m = [
		s._(
			/*BTDS*/
			""
		),
		s._(
			/*BTDS*/
			""
		),
		s._(
			/*BTDS*/
			""
		)
	];
	function p(e) {
		return e[Math.floor(o("Random").random() * e.length)];
	}
	function _() {
		var t = new Date().getHours();
		return t >= 5 && t <= 11 ? p(e) : t >= 12 && t <= 16 ? p(u) : t >= 17 && t <= 20 ? p(c) : p(d);
	}
	function f() {
		return p(m);
	}
	l.getTimeOfDayGreeting = _, l.getRandomHeading = f;
}), 226);
