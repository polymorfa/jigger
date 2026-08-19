__d("WAWebBugnubNavBarItem.react", [
	"WAWebBugnubLoadable",
	"WDSIconIcBugReport.react",
	"WDSMenuBarItem.react",
	"gkx",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u() {
		var e = o("react-compiler-runtime").c(1), t = c, n;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (n = r("gkx")("9092") ? s.jsx(r("WDSMenuBarItem.react"), {
			testid: "navbar-item-bugnub",
			icon: r("WDSIconIcBugReport.react"),
			title: "Report a bug (internal)",
			onClick: t,
			isActive: !1,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		}) : null, e[0] = n) : n = e[0], n;
	}
	function c() {
		r("WAWebBugnubLoadable")();
	}
	l.BugnubNavBarItem = u;
}), 98);
