__d("WAWebLogoutReasonBanner.react", [
	"fbt",
	"WAWebEnvironment",
	"WAWebFaqUrl",
	"WAWebLoggedOutBanner.react",
	"WAWebLogoutReason",
	"WAWebLogoutReasonConstants",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n = e.reason, a = (t = o("WAWebLogoutReason").getPrevLogoutReasonCode()) != null ? t : n;
		if (a == null) return null;
		var i = d(a);
		if (i == null) return null;
		var l = i.category, s = i.header, c = i.link, m = i.text;
		return u.jsx(r("WAWebLoggedOutBanner.react"), {
			header: s,
			text: m,
			link: c,
			category: l
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = o("WAWebLogoutReason").getPrevCustomLogoutMessage();
		switch (e) {
			case o("WAWebLogoutReasonConstants").LOGOUT_REASON_CODE.CLIENT_FATAL: {
				var n = r("WAWebEnvironment").isWindows === !0 ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				);
				return {
					text: n,
					link: o("WAWebFaqUrl").getDBErrorFaqUrl(),
					category: "error"
				};
			}
			case o("WAWebLogoutReasonConstants").LOGOUT_REASON_CODE.SYNC_FAIL: return {
				text: s._(
					/*BTDS*/
					""
				),
				link: o("WAWebFaqUrl").getLinkDeviceFaqUrl(),
				category: "warning"
			};
			case o("WAWebLogoutReasonConstants").LOGOUT_REASON_CODE.INITIAL_HISTORY_SYNC_TIMEOUT: return {
				text: s._(
					/*BTDS*/
					""
				),
				link: o("WAWebFaqUrl").getLinkDeviceFaqUrl(),
				category: "warning"
			};
			case o("WAWebLogoutReasonConstants").LOGOUT_REASON_CODE.ACCOUNT_LOCKED:
				if (t != null) {
					var a = t.logoutMessageHeader, i = t.logoutMessageSubtext;
					if (a != null && i != null) return {
						header: a,
						text: i,
						category: "warning"
					};
				}
				return {
					text: s._(
						/*BTDS*/
						""
					),
					category: "warning"
				};
		}
		return null;
	}
	l.default = c;
}), 226);
