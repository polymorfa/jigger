__d("getMAWEphemeralSettingsOptionsWithTitle", ["fbt", "MAWEphemeralGatingUtil"], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = 60, u = e * 60, c = u * 24;
	function d(e, t) {
		t != null && t > 0 && !e.includes(t) && e.push(t);
	}
	function m(e) {
		var t = o("MAWEphemeralGatingUtil").getExpirationOptions();
		return d(t, e), t.sort(function(e, t) {
			return e - t;
		}), t.map(function(e) {
			return {
				timeInSeconds: e,
				title: p(e)
			};
		});
	}
	function p(t) {
		if (t === 0) return s._(
			/*BTDS*/
			""
		);
		if (t < e) return s._(
			/*BTDS*/
			"",
			[s._plural(t, "number of seconds")]
		);
		if (t < u) {
			var n = t / e;
			return s._(
				/*BTDS*/
				"",
				[s._plural(n, "number of minutes")]
			);
		}
		if (t <= c) {
			var r = t / u;
			return s._(
				/*BTDS*/
				"",
				[s._plural(r, "number of hours")]
			);
		}
		var o = t / c;
		return s._(
			/*BTDS*/
			"",
			[s._plural(o, "number of days")]
		);
	}
	l.default = m;
}), 226);
