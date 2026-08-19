__d("WAWebStartup.react", [
	"fbt",
	"WALogger",
	"WAWebConfirmPopup.react",
	"WAWebDebouncedLoadingScreen.react",
	"WAWebSocketModel",
	"WAWebStreamModel",
	"react",
	"useWAWebForceUpdate",
	"useWAWebInterval",
	"useWAWebListener",
	"useWAWebTimeout"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useEffect;
	function m(t) {
		"use no forget";
		var n = t.initialLoadState, a = t.onReady, i = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), l, u;
		o("useWAWebListener").useListener(o("WAWebStreamModel").Stream, "change:displayInfo", i);
		var m = r("useWAWebInterval")(i, 1e3), p = m[0], _ = o("useWAWebTimeout").useTimeout(p, 6e3), f = _[0], g = o("WAWebStreamModel").Stream.displayInfo;
		d(function() {
			f();
		}, []);
		var h = function() {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Startup: user selected logout"]))), o("WAWebSocketModel").Socket.logout();
		};
		switch (g) {
			case o("WAWebStreamModel").StreamInfo.OPENING:
			case o("WAWebStreamModel").StreamInfo.PAIRING:
				l = s._(
					/*BTDS*/
					""
				), u = s._(
					/*BTDS*/
					""
				);
				break;
			case o("WAWebStreamModel").StreamInfo.SYNCING:
			case o("WAWebStreamModel").StreamInfo.CONNECTING: return c.jsx(r("WAWebDebouncedLoadingScreen.react"), {
				initialLoadState: n,
				onReady: a,
				onLogout: h
			});
			default: return o("WAWebStreamModel").Stream.mode === o("WAWebStreamModel").StreamMode.MAIN ? c.jsx(r("WAWebDebouncedLoadingScreen.react"), {
				initialLoadState: n,
				onReady: a,
				onLogout: h
			}) : null;
		}
		return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			cover: !0,
			title: l,
			cancelText: s._(
				/*BTDS*/
				""
			),
			onCancel: h,
			children: [c.jsx("hr", { className: "xqtp20y x14vqqas xod5an3 x178xt8z x13fuv20 xx42vgk x1qhh985 x14e42zd x10w94by" }), c.jsx("div", {
				className: "xieb3on x1f6kntn x1fc57z9 xhslqc4",
				children: u
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
