__d("WAWebGroupHistoryParticipantAvatarRow.react", [
	"WAWebDetailImage.react",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WDSText.react",
	"react"
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
		var t = e.onAvatarClick, n = e.participants;
		return s.jsx("div", {
			className: "x78zum5 x1q0g3np xl56j7k x1s70e7g xw2csxc x1nbhmlj",
			"data-testid": "group-history-post-join-avatar-row",
			children: n.map(function(e, n) {
				return s.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: d.cell,
					children: [s.jsx(o("WAWebDetailImage.react").DetailImage, {
						id: e.contact.id,
						size: u,
						onClick: t,
						testId: "group-history-post-join-avatar-" + n
					}), s.jsx("div", {
						className: "xmbed50 x6ikm8r x10wlt62 xlyipyv xuxw1ft x2b8uid",
						children: s.jsx(r("WDSText.react"), {
							type: "Body3",
							colorName: "contentDeemphasized",
							children: o("WAWebFrontendContactGetters").getFormattedShortName(e.contact)
						})
					})]
				}, e.id.toString());
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
