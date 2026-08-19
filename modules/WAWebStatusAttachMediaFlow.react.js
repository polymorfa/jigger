__d("WAWebStatusAttachMediaFlow.react", [
	"WAWebStatusPostingMediaPicker.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useRef;
	function m(e) {
		var t = o("react-compiler-runtime").c(7), n = e.entryPoint, a = e.isNewsletterStatus, i = e.newsletterWid, l = e.statusPostingSessionId, u = a === void 0 ? !1 : a, m = d(), p, _;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (p = function() {
			var e;
			(e = m.current) == null || e.open();
		}, _ = [], t[0] = p, t[1] = _) : (p = t[0], _ = t[1]), c(p, _);
		var f;
		return t[2] !== n || t[3] !== u || t[4] !== i || t[5] !== l ? (f = s.jsx(r("WAWebStatusPostingMediaPicker.react"), {
			entryPoint: n,
			mediaPickerRef: m,
			newsletterWid: i,
			isNewsletterStatus: u,
			statusPostingSessionId: l
		}), t[2] = n, t[3] = u, t[4] = i, t[5] = l, t[6] = f) : f = t[6], f;
	}
	l.default = m;
}), 98);
