__d("WAWebStatusChatlistRing.react", [
	"WAWebABProps",
	"WAWebStatusCollection",
	"WAWebStatusProfilePhotoRingWrapper.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState;
	function c(e) {
		var t = o("react-compiler-runtime").c(13), n = e.contact, a = e.isHoveredOrActive, i = e.photoSize, l = e.rowIndex, c = e.rowSection, d = e.waitIdle, m = a === void 0 ? !1 : a, p;
		t[0] !== n.id ? (p = function() {
			return o("WAWebStatusCollection").StatusCollection.get(n.id);
		}, t[0] = n.id, t[1] = p) : p = t[1];
		var _ = u(p), f = _[1], g = u(n.id), h = g[0], y = g[1];
		n.id !== h && (f(o("WAWebStatusCollection").StatusCollection.get(n.id)), y(n.id));
		var C;
		t[2] !== n.id ? (C = n.id.toString(), t[2] = n.id, t[3] = C) : C = t[3];
		var b;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (b = o("WAWebABProps").getABPropConfigValue("wa_web_show_status_ring_for_no_unread"), t[4] = b) : b = t[4];
		var v;
		return t[5] !== n || t[6] !== m || t[7] !== i || t[8] !== l || t[9] !== c || t[10] !== C || t[11] !== d ? (v = s.jsx(r("WAWebStatusProfilePhotoRingWrapper.react"), {
			contact: n,
			photoSize: i,
			waitIdle: d,
			hideWhenNoUnreadStatuses: !b,
			rowSection: c,
			rowIndex: l,
			isHoveredOrActive: m,
			logPogImpression: !0
		}, C), t[5] = n, t[6] = m, t[7] = i, t[8] = l, t[9] = c, t[10] = C, t[11] = d, t[12] = v) : v = t[12], v;
	}
	l.default = c;
}), 98);
