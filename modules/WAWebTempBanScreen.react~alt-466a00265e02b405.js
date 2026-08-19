__d("WAWebTempBanScreen.react", [
	"fbt",
	"WALogger",
	"WAWeb-moment",
	"WAWebConflict.react",
	"WAWebFaqUrl",
	"WAWebFavicon.react",
	"WAWebSocketModel",
	"WAWebUserPrefsMeUser",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react"));
	function d(e) {
		var t = e.banData, n = t || {}, a = n.code, i = n.expire, l = n.message, u = n.url, d = l != null ? l : p(a), m = r("WAWeb-moment").duration(i, "seconds").humanize(), f = window.open.bind(window, u != null ? u : o("WAWebFaqUrl").getFaqUrl());
		return c.jsx(o("WAWebFavicon.react").ErrorFavicon, { children: c.jsxs(r("WAWebConflict.react"), {
			cancelText: s._(
				/*BTDS*/
				""
			),
			onCancel: _,
			okText: s._(
				/*BTDS*/
				""
			),
			onOK: f,
			children: [c.jsx("div", { children: d }), c.jsx("div", { children: s._(
				/*BTDS*/
				"",
				[s._param("duration", m)]
			) })]
		}) });
	}
	d.displayName = d.name + " [from " + i.id + "]";
	var m = function() {
		return s._(
			/*BTDS*/
			""
		);
	};
	function p(e) {
		var t, n = (t = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null ? void 0 : t.user;
		switch (e) {
			case 101: return n == null ? m() : s._(
				/*BTDS*/
				"",
				[s._param("phone", n)]
			);
			case 102: return s._(
				/*BTDS*/
				""
			);
			case 103: return n == null ? m() : s._(
				/*BTDS*/
				"",
				[s._param("phone", n)]
			);
			case 104: return s._(
				/*BTDS*/
				""
			);
			case 106: return s._(
				/*BTDS*/
				""
			);
			default: return m();
		}
	}
	function _() {
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Banned accounts: user selected logout"]))), o("WAWebSocketModel").Socket.logout();
	}
	l.default = d;
}), 226);
