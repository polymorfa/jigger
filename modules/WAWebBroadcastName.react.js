__d("WAWebBroadcastName.react", [
	"WAArrayMoveToFirst",
	"WAWebChatGetters",
	"WAWebContactSearchGatingUtils",
	"WAWebEmojiText.react",
	"WAWebFormatConfiguration",
	"WAWebLabels.react",
	"WAWebListsGatingUtils",
	"react",
	"useWAWebChatValues",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { labelIconPadding: {
		paddingInlineStart: "x181vq82",
		$$css: !0
	} };
	function c(e) {
		"use no forget";
		var t, n, a = e.breakWord, i = e.chat, l = e.className, c = e.element, d = e.ellipsify, m = e.firstLabel, p = e.highlightText, _ = e.labels, f = e.onClick, g = e.selectable, h = e.showLabelIcon, y = h === void 0 ? !1 : h, C = e.testid, b = e.titlify, v = e.xstyle, S = o("useWAWebModelValues").useModelValues(i, [
			"id",
			"formattedTitle",
			"broadcastMetadata"
		]), R = (t = S.broadcastMetadata) == null ? void 0 : t.recipients, L = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
		o("useWAWebListener").useListener(R, "add remove reset", L);
		var E = (n = o("useWAWebChatValues").useOptionalChatValues(i.id, [o("WAWebChatGetters").getLabels])) == null ? void 0 : n[0], k = p != null && p !== "" ? o("WAWebFormatConfiguration").SearchName({ terms: o("WAWebContactSearchGatingUtils").isTokenizedSearchEnabled() ? p.split(/\s+/).filter(Boolean) : [p] }) : void 0, I = _ || E;
		I != null && I.length && m != null && r("WAArrayMoveToFirst")(I, m);
		var T = o("WAWebListsGatingUtils").isListsEnabled(), D = y === !0 && I != null && I.length ? s.jsx(o("WAWebLabels.react").Labels, {
			labels: I,
			showName: !1,
			iconXstyle: u.labelIconPadding,
			isListsFeatureEnabled: T
		}) : null, x = s.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: S.formattedTitle,
			element: c,
			className: l,
			xstyle: v,
			formatters: k,
			titlify: b,
			ellipsify: d,
			breakWord: a,
			direction: "auto",
			inlineblock: !0,
			onClick: f,
			testid: C,
			selectable: g
		});
		return s.jsxs("span", {
			className: "x6s0dn4 x3nfvp2 x1c4vz4f xuce83p x1bft6iq x1i7k8ik xq9mrsl",
			children: [x, D]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.BroadcastName = c;
}), 98);
