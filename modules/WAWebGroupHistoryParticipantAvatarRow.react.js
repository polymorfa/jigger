__d("WAWebGroupHistoryParticipantAvatarRow.react", [
	"WAWebDetailImage.react",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = 56, c = 72, d = { cell: {
		alignItems: "x6s0dn4",
		rowGap: "x129bwdz",
		flexShrink: "x2lah0s",
		width: "xni59qk",
		$$css: !0
	} };
	function m(e) {
		var t = o("react-compiler-runtime").c(8), n = e.onAvatarClick, a = e.participants, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = { className: "x78zum5 x1q0g3np xl56j7k x1s70e7g xw2csxc x1nbhmlj" }, t[0] = i) : i = t[0];
		var l;
		if (t[1] !== n || t[2] !== a) {
			var c;
			t[4] !== n ? (c = function(t, a) {
				return s.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: d.cell,
					children: [s.jsx(o("WAWebDetailImage.react").DetailImage, {
						id: t.contact.id,
						size: u,
						onClick: n,
						testId: "group-history-post-join-avatar-" + a
					}), s.jsx("div", {
						className: "xmbed50 x6ikm8r x10wlt62 xlyipyv xuxw1ft x2b8uid",
						children: s.jsx(r("WDSText.react"), {
							type: "Body3",
							colorName: "contentDeemphasized",
							children: o("WAWebFrontendContactGetters").getFormattedShortName(t.contact)
						})
					})]
				}, t.id.toString());
			}, t[4] = n, t[5] = c) : c = t[5], l = a.map(c), t[1] = n, t[2] = a, t[3] = l;
		} else l = t[3];
		var m;
		return t[6] !== l ? (m = s.jsx("div", babelHelpers.extends({}, i, {
			"data-testid": "group-history-post-join-avatar-row",
			children: l
		})), t[6] = l, t[7] = m) : m = t[7], m;
	}
	l.default = m;
}), 98);
