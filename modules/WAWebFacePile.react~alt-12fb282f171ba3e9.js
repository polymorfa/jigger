__d("WAWebFacePile.react", [
	"WAWebChatCollection",
	"WAWebChatParticipantColor",
	"WAWebDetailImage.react",
	"WAWebFlex.react",
	"WAWebProfileImage.react",
	"WAWebQuotedMessageUserJourneyLogger",
	"WAWebWid",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		hiddenBehind: {
			marginInlineStart: "x2459kn",
			$$css: !0
		},
		border: {
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			$$css: !0
		},
		defaultBorderColor: {
			borderTopColor: null,
			borderInlineEndColor: null,
			borderBottomColor: null,
			borderInlineStartColor: null,
			$$css: !0
		},
		defaultBorderWidth: {
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			$$css: !0
		},
		urlImage: {
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			$$css: !0
		},
		overflowFace: {
			backgroundColor: "x1od0jb8",
			boxSizing: "x9f619",
			color: "x14ug900",
			fontWeight: "xk50ysn",
			lineHeight: "xo5v014",
			$$css: !0
		}
	}, c = 24;
	function d(e) {
		var t, n = e.borderColor, a = e.borderWidth, i = e.chatWid, l = e.faceSize, c = e.idOrUrl, d = e.isFirst, m = e.theme, p = e.zIndex, _ = i ? o("WAWebChatCollection").ChatCollection.get(i) : null, f = _ && c instanceof r("WAWebWid") ? o("WAWebChatParticipantColor").getAssignedColor(_, c, "WAWebFacePile-" + ((t = o("WAWebQuotedMessageUserJourneyLogger").getChatType(_.id)) != null ? t : "")) : 1;
		return s.jsx("div", {
			style: { zIndex: p },
			children: c instanceof r("WAWebWid") ? s.jsx(o("WAWebDetailImage.react").DetailImage, babelHelpers.extends({
				id: c,
				size: l,
				xstyle: [
					!d && u.hiddenBehind,
					u.border,
					n != null ? n : u.defaultBorderColor,
					a != null ? a : u.defaultBorderWidth
				],
				authorColor: f,
				theme: m
			}, m === "typing_indicator" ? { loadAnimation: !1 } : {})) : s.jsx(o("WAWebFlex.react").FlexRow, {
				xstyle: [
					!d && u.hiddenBehind,
					u.border,
					n != null ? n : u.defaultBorderColor,
					u.urlImage
				],
				children: s.jsx(r("WAWebProfileImage.react"), {
					thumb: c,
					size: l
				})
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.borderColor, n = e.borderWidth, r = e.count, a = e.faceSize, i = e.zIndex;
		return s.jsx("div", {
			style: { zIndex: i },
			children: s.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				xstyle: [
					u.overflowFace,
					u.hiddenBehind,
					u.border,
					t != null ? t : u.defaultBorderColor,
					n != null ? n : u.defaultBorderWidth
				],
				style: {
					height: a,
					minWidth: a,
					paddingInline: Math.max(4, Math.floor(a * .3)),
					borderRadius: a,
					fontSize: Math.max(8, Math.floor(a * .5))
				},
				children: ["+", r]
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t, n = e.borderColor, r = e.borderWidth, a = e.chatWid, i = e.faceSize, l = e.idsOrUrls, u = e.keyName, p = e.maxVisible, _ = e.overflowThreshold, f = e.theme, g = e.xstyle, h = (t = _ != null ? _ : p) != null ? t : l.length, y = p != null && l.length > h, C = y ? l.slice(0, p) : l, b = y ? l.length - (p != null ? p : 0) : 0, v = i != null ? i : c;
		return s.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "end",
			xstyle: g,
			children: [C.map(function(e, t) {
				return s.jsx(d, {
					idOrUrl: e,
					isFirst: t === 0,
					zIndex: l.length - t,
					borderColor: n,
					faceSize: v,
					chatWid: a,
					theme: f,
					borderWidth: r
				}, e.toString() + "-" + t + "-" + (u != null ? u : ""));
			}), y && s.jsx(m, {
				count: b,
				faceSize: v,
				zIndex: 0,
				borderColor: n,
				borderWidth: r
			})]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
