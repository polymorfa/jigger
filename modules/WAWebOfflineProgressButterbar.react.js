__d("WAWebOfflineProgressButterbar.react", [
	"fbt",
	"WAShiftTimer",
	"WAWebCmd",
	"WAWebOfflineHandler",
	"WDSBanner.react",
	"WDSIconIcSync.react",
	"react",
	"react-compiler-runtime",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = 120 * 1e3;
	function m() {
		var e = o("react-compiler-runtime").c(11), t = c(0), n = t[0], a = t[1], i = c(!1), l = i[0], m = i[1], p;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (p = function() {
			a(o("WAWebOfflineHandler").OfflineMessageHandler.getOfflineDeliveryProgress());
		}, e[0] = p) : p = e[0], o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "offline_progress_update_from_bridge", p), new (o("WAShiftTimer")).ShiftTimer(function() {
			m(!0);
		}).onOrAfter(d);
		var _;
		e[1] !== n ? (_ = s._(
			/*BTDS*/
			"",
			[s._param("percentage", n, [0])]
		), e[1] = n, e[2] = _) : _ = e[2];
		var f = _;
		if (l) {
			var g;
			e[3] === Symbol.for("react.memo_cache_sentinel") ? (g = { className: "x1380le5 xefnzgg x1uvdrpn x14mko6t" }, e[3] = g) : g = e[3];
			var h;
			e[4] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
				/*BTDS*/
				""
			), e[4] = h) : h = e[4];
			var y;
			return e[5] !== f ? (y = u.jsx("div", babelHelpers.extends({}, g, { children: u.jsx(r("WDSBanner.react"), {
				type: "default",
				icon: r("WDSIconIcSync.react"),
				title: f,
				body: h
			}) })), e[5] = f, e[6] = y) : y = e[6], y;
		}
		var C;
		e[7] === Symbol.for("react.memo_cache_sentinel") ? (C = { className: "x1380le5 xefnzgg x1uvdrpn x14mko6t" }, e[7] = C) : C = e[7];
		var b;
		e[8] === Symbol.for("react.memo_cache_sentinel") ? (b = s._(
			/*BTDS*/
			""
		), e[8] = b) : b = e[8];
		var v;
		return e[9] !== f ? (v = u.jsx("div", babelHelpers.extends({}, C, { children: u.jsx(r("WDSBanner.react"), {
			type: "default",
			icon: r("WDSIconIcSync.react"),
			title: f,
			body: b
		}) })), e[9] = f, e[10] = v) : v = e[10], v;
	}
	l.default = m;
}), 226);
