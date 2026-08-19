__d("useWAWebCometLiteRingtone", [
	"WALogger",
	"WAWebAuraRingtonePlayback",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = u.useCallback, d = u.useEffect, m = u.useRef;
	function p(e) {
		try {
			e.pause(), e.src = "", e.load();
		} catch (e) {}
	}
	function _(t) {
		var n = m(null), r = c(function() {
			var e = n.current;
			e != null && (p(e), n.current = null);
		}, []);
		return d(function() {
			var r = o("WAWebAuraRingtonePlayback").getRingtoneURL(t);
			if (r != null) {
				var a = !0, i = new window.Audio(r);
				return i.loop = !0, n.current = i, i.play().then(function() {
					a || p(i);
				}, function(t) {
					o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["useWAWebCometLiteRingtone: ringtone playback deferred or blocked ", ""])), t);
				}), function() {
					a = !1, p(i), n.current === i && (n.current = null);
				};
			}
		}, [t]), { stopRingtone: r };
	}
	l.default = _;
}), 98);
