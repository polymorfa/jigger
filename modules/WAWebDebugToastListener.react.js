__d("WAWebDebugToastListener.react", [
	"WAHash",
	"WAWebCmd",
	"WAWebCopyToClipboard",
	"WAWebDebugErrorToast",
	"WAWebOpenBugReportForm",
	"WAWebToast.react",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"useLazyRef",
	"useWAWebListener",
	"useWAWebOnUnmount"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useState, m = "🛑", p = 200, _ = 5 * 1e3;
	function f(e) {
		var t = e.length > p ? e.slice(0, p) + "..." : e;
		return m + " " + t;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(8), a = e.openToast, i = d(o("WAWebDebugErrorToast").isErrorToastEnabled), l = i[0], u = i[1], m = r("useLazyRef")(y), p;
		t[0] !== m ? (p = function() {
			m.current.forEach(h);
		}, t[0] = m, t[1] = p) : p = t[1], r("useWAWebOnUnmount")(p);
		var g, C;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (g = function() {
			return o("WAWebDebugErrorToast").subscribeToErrorToast(u);
		}, C = [], t[2] = g, t[3] = C) : (g = t[2], C = t[3]), c(g, C);
		var b;
		return t[4] !== l || t[5] !== a || t[6] !== m ? (b = function(t) {
			if (l) {
				var e = t.replace("[ErrorPubSub] ", ""), i = r("WAHash")(e);
				if (!m.current.has(i)) {
					var u = self.setTimeout(function() {
						m.current.delete(i);
					}, _);
					m.current.set(i, u), a(s.jsx(o("WAWebToast.react").Toast, {
						msg: f(e),
						action: [{
							actionText: "Copy",
							onAction: function() {
								o("WAWebCopyToClipboard").copyTextToClipboard(e);
							}
						}, {
							actionText: "Report",
							onAction: (function() {
								var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
									yield o("WAWebOpenBugReportForm").openBugReportForm(e);
								});
								function r() {
									return t.apply(this, arguments);
								}
								return r;
							})()
						}]
					}));
				}
			}
		}, t[4] = l, t[5] = a, t[6] = m, t[7] = b) : b = t[7], o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "window_error", b), null;
	}
	function h(e) {
		return self.clearTimeout(e);
	}
	function y() {
		return new Map();
	}
	l.default = g;
}), 98);
