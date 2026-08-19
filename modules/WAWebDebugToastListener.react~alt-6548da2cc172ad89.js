__d("WAWebDebugToastListener.react", [
	"WAHash",
	"WAWebCmd",
	"WAWebCopyToClipboard",
	"WAWebDebugErrorToast",
	"WAWebOpenBugReportForm",
	"WAWebToast.react",
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
		var t = o("react-compiler-runtime").c(8), n = e.openToast, a = d(o("WAWebDebugErrorToast").isErrorToastEnabled), i = a[0], l = a[1], u = r("useLazyRef")(y), m;
		t[0] !== u ? (m = function() {
			u.current.forEach(h);
		}, t[0] = u, t[1] = m) : m = t[1], r("useWAWebOnUnmount")(m);
		var p, g;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (p = function() {
			return o("WAWebDebugErrorToast").subscribeToErrorToast(l);
		}, g = [], t[2] = p, t[3] = g) : (p = t[2], g = t[3]), c(p, g);
		var C;
		return t[4] !== i || t[5] !== n || t[6] !== u ? (C = function(t) {
			if (i) {
				var e = t.replace("[ErrorPubSub] ", ""), a = r("WAHash")(e);
				if (!u.current.has(a)) {
					var l = self.setTimeout(function() {
						u.current.delete(a);
					}, _);
					u.current.set(a, l), n(s.jsx(o("WAWebToast.react").Toast, {
						msg: f(e),
						action: [{
							actionText: "Copy",
							onAction: function() {
								o("WAWebCopyToClipboard").copyTextToClipboard(e);
							}
						}, {
							actionText: "Report",
							onAction: async function() {
								await o("WAWebOpenBugReportForm").openBugReportForm(e);
							}
						}]
					}));
				}
			}
		}, t[4] = i, t[5] = n, t[6] = u, t[7] = C) : C = t[7], o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "window_error", C), null;
	}
	function h(e) {
		return self.clearTimeout(e);
	}
	function y() {
		return new Map();
	}
	l.default = g;
}), 98);
