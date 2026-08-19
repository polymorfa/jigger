__d("WAWebDebugToastListener.react", [
	"WAHash",
	"WAWebCmd",
	"WAWebCopyToClipboard",
	"WAWebDebugErrorToast",
	"WAWebOpenBugReportForm",
	"WAWebToast.react",
	"react",
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
		var t = e.openToast, n = d(o("WAWebDebugErrorToast").isErrorToastEnabled), a = n[0], i = n[1], l = r("useLazyRef")(function() {
			return new Map();
		});
		return r("useWAWebOnUnmount")(function() {
			l.current.forEach(function(e) {
				return self.clearTimeout(e);
			});
		}), c(function() {
			return o("WAWebDebugErrorToast").subscribeToErrorToast(i);
		}, []), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "window_error", function(e) {
			if (a) {
				var n = e.replace("[ErrorPubSub] ", ""), i = r("WAHash")(n);
				if (!l.current.has(i)) {
					var u = self.setTimeout(function() {
						l.current.delete(i);
					}, _);
					l.current.set(i, u), t(s.jsx(o("WAWebToast.react").Toast, {
						msg: f(n),
						action: [{
							actionText: "Copy",
							onAction: function() {
								o("WAWebCopyToClipboard").copyTextToClipboard(n);
							}
						}, {
							actionText: "Report",
							onAction: async function() {
								await o("WAWebOpenBugReportForm").openBugReportForm(n);
							}
						}]
					}));
				}
			}
		}), null;
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);
