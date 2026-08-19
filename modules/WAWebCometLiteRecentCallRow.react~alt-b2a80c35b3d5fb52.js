__d("WAWebCometLiteRecentCallRow.react", [
	"fbt",
	"WAWebCellV2.react",
	"WAWebClock",
	"WAWebDetailImage.react",
	"WAWebFlex.react",
	"WAWebName.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = 72, d = {
		name: {
			fontSize: "x1603h9y",
			lineHeight: "xeqr9p9",
			fontWeight: "xk50ysn",
			color: "x14ug900",
			$$css: !0
		},
		subtitle: {
			columnGap: "x1s70e7g",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.call, n = e.index, a = e.onSelect, i = t.isMissed, l = t.isOutgoing, m = t.isVideo, p = t.item, _ = t.msg, f;
		p.chat != null ? f = u.jsx(o("WAWebName.react").Name, {
			chat: p.chat,
			titlify: !0,
			ellipsify: !0
		}) : p.contact != null ? f = u.jsx(o("WAWebName.react").Name, {
			contact: p.contact,
			titlify: !0,
			ellipsify: !0
		}) : f = s._(
			/*BTDS*/
			""
		);
		var g;
		return i ? g = m ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : l ? g = m ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : g = m ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), u.jsx("div", {
			className: "xh8yej3",
			role: "listitem",
			children: u.jsx(r("WAWebCellV2.react"), {
				size: "large",
				testid: "wa-web-lite-recent-call-" + n,
				ariaLabel: s._(
					/*BTDS*/
					""
				),
				onClick: function() {
					return a(p);
				},
				detailLeft: u.jsx(o("WAWebDetailImage.react").DetailImage, {
					id: p.wid,
					size: c,
					quality: o("WAWebDetailImage.react").DetailImageQuality.High
				}),
				primary: f,
				primaryXStyle: d.name,
				secondary: u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					xstyle: d.subtitle,
					children: [u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: g
					}), u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: o("WAWebClock").Clock.relativeStr(_.t)
					})]
				})
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
