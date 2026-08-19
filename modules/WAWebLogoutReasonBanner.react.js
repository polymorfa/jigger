__d("WAWebLogoutReasonBanner.react", [
	"fbt",
	"WAWebEnvironment",
	"WAWebFaqUrl",
	"WAWebLoggedOutBanner.react",
	"WAWebLogoutReason",
	"WAWebLogoutReasonConstants",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(9), n = e.reason, a;
		if (t[0] !== n) {
			var i;
			a = (i = o("WAWebLogoutReason").getPrevLogoutReasonCode()) != null ? i : n, t[0] = n, t[1] = a;
		} else a = t[1];
		var l = a;
		if (l == null) return null;
		var s;
		t[2] !== l ? (s = d(l), t[2] = l, t[3] = s) : s = t[3];
		var c = s;
		if (c == null) return null;
		var m = c.category, p = c.header, _ = c.link, f = c.text, g;
		return t[4] !== m || t[5] !== p || t[6] !== _ || t[7] !== f ? (g = u.jsx(r("WAWebLoggedOutBanner.react"), {
			header: p,
			text: f,
			link: _,
			category: m
		}), t[4] = m, t[5] = p, t[6] = _, t[7] = f, t[8] = g) : g = t[8], g;
	}
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
