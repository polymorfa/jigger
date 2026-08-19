__d("WAWebQuickPromotionDebugCopyLogsButton.react", [
	"fbt",
	"WAWebQuickPromotionDebugLogger",
	"WAWebQuickPromotionDebugSnapshot",
	"WDSButton.react",
	"WDSIconIcContentCopy.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.hasItems, n = e.surfaceId;
		return o("WAWebQuickPromotionDebugLogger").isDebugEnabledForSurface(n) ? u.jsx("div", {
			className: "x78zum5 x13a6bvl xb0esv5 xyo0t3i x16ovd2e",
			"data-testid": "qp_debug_copy_logs_bar",
			children: u.jsx(r("WDSButton.react"), {
				variant: "borderless",
				size: "small",
				Icon: r("WDSIconIcContentCopy.react"),
				label: t ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				),
				onPress: function() {
					return d(n);
				},
				testid: "qp_debug_copy_logs_button"
			})
		}) : null;
	}
	c.displayName = c.name + " [from " + i.id + "]";
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
