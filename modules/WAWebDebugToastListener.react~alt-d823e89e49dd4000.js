__d("WAWebDebugToastListener.react", [
	"WAHash",
	"WAWebCmd",
	"WAWebCopyToClipboard",
	"WAWebDebugErrorToast",
	"WAWebOpenBugReportForm",
	"WAWebToast.react",
	"asyncToGeneratorRuntime",
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
		var t = e.openToast, a = d(o("WAWebDebugErrorToast").isErrorToastEnabled), i = a[0], l = a[1], u = r("useLazyRef")(function() {
			return new Map();
		});
		return r("useWAWebOnUnmount")(function() {
			u.current.forEach(function(e) {
				return self.clearTimeout(e);
			});
		}), c(function() {
			return o("WAWebDebugErrorToast").subscribeToErrorToast(l);
		}, []), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "window_error", function(e) {
			if (i) {
				var a = e.replace("[ErrorPubSub] ", ""), l = r("WAHash")(a);
				if (!u.current.has(l)) {
					var c = self.setTimeout(function() {
						u.current.delete(l);
					}, _);
					u.current.set(l, c), t(s.jsx(o("WAWebToast.react").Toast, {
						msg: f(a),
						action: [{
							actionText: "Copy",
							onAction: function() {
								o("WAWebCopyToClipboard").copyTextToClipboard(a);
							}
						}, {
							actionText: "Report",
							onAction: (function() {
								var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
									yield o("WAWebOpenBugReportForm").openBugReportForm(a);
								});
								function t() {
									return e.apply(this, arguments);
								}
								return t;
							})()
						}]
					}));
				}
			}
		}), null;
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);
