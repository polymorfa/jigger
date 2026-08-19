__d("WAWebBugnubNavBarItem.react", [
	"WAWebBugnubLoadable",
	"WDSIconIcBugReport.react",
	"WDSMenuBarItem.react",
	"gkx",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u() {
		var e = function() {
			r("WAWebBugnubLoadable")();
		}, t = "Report a bug (internal)", n = r("WDSIconIcBugReport.react");
		return r("gkx")("9092") ? s.jsx(r("WDSMenuBarItem.react"), {
			testid: "navbar-item-bugnub",
			icon: n,
			title: t,
			onClick: e,
			isActive: !1,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		}) : null;
	}
	u.displayName = u.name + " [from " + i.id + "]", l.BugnubNavBarItem = u;
}), 98);
