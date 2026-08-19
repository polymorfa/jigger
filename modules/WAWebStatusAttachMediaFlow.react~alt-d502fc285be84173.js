__d("WAWebStatusAttachMediaFlow.react", ["WAWebStatusPostingMediaPicker.react", "react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useRef;
	function m(e) {
		var t = e.entryPoint, n = e.isNewsletterStatus, o = n === void 0 ? !1 : n, a = e.newsletterWid, i = e.statusPostingSessionId, l = d();
		return c(function() {
			var e;
			(e = l.current) == null || e.open();
		}, []), s.jsx(r("WAWebStatusPostingMediaPicker.react"), {
			entryPoint: t,
			mediaPickerRef: l,
			newsletterWid: a,
			isNewsletterStatus: o,
			statusPostingSessionId: i
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
