__d("WAWebCometLiteContactDetail.react", [
	"fbt",
	"WAWebCometLiteCallActions.react",
	"WAWebDetailImage.react",
	"WAWebFlex.react",
	"WAWebName.react",
	"WDSButton.react",
	"WDSIconIcChevronLeft.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = 112, d = {
		root: {
			boxSizing: "x9f619",
			width: "xh8yej3",
			height: "x5yr21d",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			paddingInlineStart: "x1m4z3lf",
			paddingInlineEnd: "x1evaxtz",
			paddingLeft: null,
			paddingRight: null,
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		header: {
			minHeight: "x1wxaq2x",
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			width: "xh8yej3",
			$$css: !0
		},
		body: {
			flexGrow: "x1iyjqo2",
			rowGap: "x1f0uite",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		nameText: {
			fontSize: "x579bpy",
			lineHeight: "x1cpheol",
			fontWeight: "x117nqv4",
			color: "x14ug900",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.chat, n = e.contact, a = e.headerEnd, i = e.onBack, l = e.wid, m = null;
		return t != null ? m = u.jsx(o("WAWebName.react").Name, {
			chat: t,
			titlify: !0,
			ellipsify: !0,
			xstyle: d.nameText
		}) : n != null && (m = u.jsx(o("WAWebName.react").Name, {
			contact: n,
			titlify: !0,
			ellipsify: !0,
			xstyle: d.nameText
		})), u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: d.root,
			testid: "wa-web-lite-contact-detail",
			grow: 1,
			children: [u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "all",
				xstyle: d.header,
				children: [u.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcChevronLeft.react"),
					variant: "borderless",
					size: "medium",
					directional: !0,
					onPress: i,
					testid: "wa-web-lite-contact-detail-back",
					"aria-label": s._(
						/*BTDS*/
						""
					)
				}), a]
			}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "start",
				justify: "center",
				xstyle: d.body,
				grow: 1,
				children: [
					u.jsx(o("WAWebDetailImage.react").DetailImage, {
						id: l,
						size: c,
						quality: o("WAWebDetailImage.react").DetailImageQuality.High
					}),
					u.jsx("div", {
						className: "x193iq5w x6ikm8r x10wlt62",
						children: m
					}),
					u.jsx(r("WAWebCometLiteCallActions.react"), { wid: l })
				]
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
