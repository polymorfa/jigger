__d("WAWebAfterReadingExpiryFooter.react", [
	"fbt",
	"WATimeUtils",
	"WAWebAfterReadUtils",
	"WAWebClockDurationFormatters",
	"WAWebDrawerSection.react",
	"WAWebMsgGetters",
	"WDSText.react",
	"react",
	"useWAWebInterval",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = 1e3, m = { contactPlacement: {
		paddingBottom: "x18d9i69",
		marginBottom: "x1wsgfga",
		$$css: !0
	} };
	function p(e) {
		var t = e.msg, n = e.placement, a = o("useWAWebMsgValues").useMsgValues(t.id, [
			o("WAWebMsgGetters").getAfterReadDuration,
			o("WAWebMsgGetters").getEphemeralExpirationTimestamp,
			o("WAWebMsgGetters").getIsKept
		]), i = a[0], l = a[1], p = a[2], _ = i != null && o("WAWebAfterReadUtils").isAfterReadDuration(i) && !p && l != null && o("WAWebAfterReadUtils").isAfterReadEnabled(), f = c(0), g = f[1];
		if (r("useWAWebInterval")(function() {
			return g(function(e) {
				return e + 1;
			});
		}, d, { immediate: _ }), !_ || l == null) return null;
		var h = Math.max(0, l - o("WATimeUtils").unixTime());
		return u.jsx(r("WAWebDrawerSection.react"), {
			theme: "padding",
			xstyle: n === "contact" ? m.contactPlacement : void 0,
			children: u.jsx("div", {
				"data-testid": "after_reading_expiry_footer",
				children: u.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body3",
					children: s._(
						/*BTDS*/
						"",
						[s._param("time", o("WAWebClockDurationFormatters").afterReadingExpiryTimeStr(h))]
					)
				})
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
