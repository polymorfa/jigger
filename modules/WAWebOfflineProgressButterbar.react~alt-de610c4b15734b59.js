__d("WAWebOfflineProgressButterbar.react", [
	"fbt",
	"WAShiftTimer",
	"WAWebCmd",
	"WAWebOfflineHandler",
	"WDSBanner.react",
	"WDSIconIcSync.react",
	"react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = 120 * 1e3;
	function m() {
		var e = c(0), t = e[0], n = e[1], a = c(!1), i = a[0], l = a[1];
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "offline_progress_update_from_bridge", function() {
			n(o("WAWebOfflineHandler").OfflineMessageHandler.getOfflineDeliveryProgress());
		}), new (o("WAShiftTimer")).ShiftTimer(function() {
			l(!0);
		}).onOrAfter(d);
		var m = s._(
			/*BTDS*/
			"",
			[s._param("percentage", t, [0])]
		);
		return i ? u.jsx("div", {
			className: "x1380le5 xefnzgg x1uvdrpn x14mko6t",
			children: u.jsx(r("WDSBanner.react"), {
				type: "default",
				icon: r("WDSIconIcSync.react"),
				title: m,
				body: s._(
					/*BTDS*/
					""
				)
			})
		}) : u.jsx("div", {
			className: "x1380le5 xefnzgg x1uvdrpn x14mko6t",
			children: u.jsx(r("WDSBanner.react"), {
				type: "default",
				icon: r("WDSIconIcSync.react"),
				title: m,
				body: s._(
					/*BTDS*/
					""
				)
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
