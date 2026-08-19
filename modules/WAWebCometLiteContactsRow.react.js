__d("WAWebCometLiteContactsRow.react", [
	"fbt",
	"WAWebBaseShimmerComponents.react",
	"WAWebChatCollection",
	"WAWebCometLiteContactData",
	"WAWebCometLiteContactTile.react",
	"WAWebCometLiteContactTileSkeleton.react",
	"WAWebContactCollection",
	"WAWebFavoriteCollection",
	"WAWebFlex.react",
	"WAWebLocalStorage",
	"WAWebProfilePicThumbCollection",
	"WAWebSocketModel",
	"WAWebStreamModel",
	"WAWebUserPrefsLoginKeys",
	"WDSText.react",
	"gkx",
	"react",
	"useWAWebDebouncedCallback",
	"useWAWebFrequentlyContactedContacts",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useReducer, m = c.useState, p = 8, _ = 10, f = { state: {
		flexGrow: "x1iyjqo2",
		$$css: !0
	} };
	function g(e) {
		"use no forget";
		var t, n = e.onSelect, a = r("gkx")("10326"), i = m(!1), l = i[0], c = i[1], g = d(function(e) {
			return e + 1;
		}, 0), h = g[1], y = r("useWAWebDebouncedCallback")(h, 150);
		(t = o("useWAWebListener")).useListener(o("WAWebFavoriteCollection").FavoriteCollection, "add remove change", y), t.useListener(o("WAWebContactCollection").ContactCollection, "add remove", y), t.useListener(o("WAWebChatCollection").ChatCollection, "add remove sort", y), t.useListener(o("WAWebSocketModel").Socket, "change:hasSynced", y), t.useListener(o("WAWebStreamModel").Stream, "change:mode", y), t.useListener(o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection, "add change:img change:imgFull", y);
		var C = r("useWAWebFrequentlyContactedContacts")(), b = o("WAWebCometLiteContactData").deriveRowItems(C), v = (r("WAWebLocalStorage") == null ? void 0 : r("WAWebLocalStorage").getItem(o("WAWebUserPrefsLoginKeys").WAWebUserPrefsLoginKeys.LAST_WID_MD)) != null, S = v && !o("WAWebSocketModel").Socket.hasSynced, R = a && !l, L = R ? b.slice(0, _) : b, E = b.length - L.length;
		return b.length > 0 ? u.jsxs("div", {
			className: "x78zum5 x1q0g3np xh8yej3 xeuugli xw2csxc xrdqr27 x16ovd2e x12xbjc7",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			"data-testid": "wa-web-lite-contacts-row",
			role: "list",
			onScroll: R ? function() {
				return c(!0);
			} : void 0,
			children: [L.map(function(e, t) {
				return u.jsx(r("WAWebCometLiteContactTile.react"), {
					index: t,
					item: e,
					onSelect: n
				}, e.wid.toString());
			}), o("WAWebBaseShimmerComponents.react").times(r("WAWebCometLiteContactTileSkeleton.react"), E)]
		}) : S ? u.jsx("div", {
			className: "x78zum5 x1q0g3np xh8yej3 xeuugli xw2csxc xrdqr27 x16ovd2e x12xbjc7",
			"data-testid": "wa-web-lite-contacts-loading",
			"aria-hidden": !0,
			children: o("WAWebBaseShimmerComponents.react").times(r("WAWebCometLiteContactTileSkeleton.react"), p)
		}) : u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			xstyle: f.state,
			testid: "wa-web-lite-contacts-empty",
			children: u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					""
				)
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
