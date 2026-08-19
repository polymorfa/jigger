__d("WAWebQuickPromotionDebugCopyLogsButton.react", [
	"fbt",
	"WAWebQuickPromotionDebugLogger",
	"WAWebQuickPromotionDebugSnapshot",
	"WDSButton.react",
	"WDSIconIcContentCopy.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(8), n = e.hasItems, a = e.surfaceId;
		if (!o("WAWebQuickPromotionDebugLogger").isDebugEnabledForSurface(a)) return null;
		var i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = { className: "x78zum5 x13a6bvl xb0esv5 xyo0t3i x16ovd2e" }, t[0] = i) : i = t[0];
		var l;
		t[1] !== n ? (l = n ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[1] = n, t[2] = l) : l = t[2];
		var c;
		t[3] !== a ? (c = function() {
			return d(a);
		}, t[3] = a, t[4] = c) : c = t[4];
		var m;
		return t[5] !== l || t[6] !== c ? (m = u.jsx("div", babelHelpers.extends({}, i, {
			"data-testid": "qp_debug_copy_logs_bar",
			children: u.jsx(r("WDSButton.react"), {
				variant: "borderless",
				size: "small",
				Icon: r("WDSIconIcContentCopy.react"),
				label: l,
				onPress: c,
				testid: "qp_debug_copy_logs_button"
			})
		})), t[5] = l, t[6] = c, t[7] = m) : m = t[7], m;
	}
	function d(e) {
		var t = {
			tool_version: "qp-debug-recunit-web/v1",
			platform: "web",
			surfaceId: e,
			capturedAt: new Date().toISOString(),
			snapshot: o("WAWebQuickPromotionDebugSnapshot").collectQPDebugSnapshot(e),
			logs: o("WAWebQuickPromotionDebugLogger").getQPDebugLogs()
		};
		navigator.clipboard.writeText(JSON.stringify(t, null, 2)).catch(function(e) {});
	}
	l.default = c;
}), 226);
