__d("WAWebFacePile.react", [
	"WAWebChatCollection",
	"WAWebChatParticipantColor",
	"WAWebDetailImage.react",
	"WAWebFlex.react",
	"WAWebProfileImage.react",
	"WAWebQuotedMessageUserJourneyLogger",
	"WAWebWid",
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(16), n = e.borderColor, a = e.borderWidth, i = e.chatWid, l = e.faceSize, c = e.idOrUrl, d = e.isFirst, m = e.theme, p = e.zIndex, _;
		if (t[0] !== i || t[1] !== c) {
			var f, g = i ? o("WAWebChatCollection").ChatCollection.get(i) : null;
			_ = g && c instanceof r("WAWebWid") ? o("WAWebChatParticipantColor").getAssignedColor(g, c, "WAWebFacePile-" + ((f = o("WAWebQuotedMessageUserJourneyLogger").getChatType(g.id)) != null ? f : "")) : 1, t[0] = i, t[1] = c, t[2] = _;
		} else _ = t[2];
		var h = _, y;
		t[3] !== p ? (y = { zIndex: p }, t[3] = p, t[4] = y) : y = t[4];
		var C;
		t[5] !== h || t[6] !== n || t[7] !== a || t[8] !== l || t[9] !== c || t[10] !== d || t[11] !== m ? (C = c instanceof r("WAWebWid") ? s.jsx(o("WAWebDetailImage.react").DetailImage, babelHelpers.extends({
			id: c,
			size: l,
			xstyle: [
				!d && u.hiddenBehind,
				u.border,
				n != null ? n : u.defaultBorderColor,
				a != null ? a : u.defaultBorderWidth
			],
			authorColor: h,
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
		}), t[5] = h, t[6] = n, t[7] = a, t[8] = l, t[9] = c, t[10] = d, t[11] = m, t[12] = C) : C = t[12];
		var b;
		return t[13] !== y || t[14] !== C ? (b = s.jsx("div", {
			style: y,
			children: C
		}), t[13] = y, t[14] = C, t[15] = b) : b = t[15], b;
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(16), n = e.borderColor, r = e.borderWidth, a = e.count, i = e.faceSize, l = e.zIndex, c;
		t[0] !== l ? (c = { zIndex: l }, t[0] = l, t[1] = c) : c = t[1];
		var d = n != null ? n : u.defaultBorderColor, m = r != null ? r : u.defaultBorderWidth, p;
		t[2] !== d || t[3] !== m ? (p = [
			u.overflowFace,
			u.hiddenBehind,
			u.border,
			d,
			m
		], t[2] = d, t[3] = m, t[4] = p) : p = t[4];
		var _ = Math.max(4, Math.floor(i * .3)), f = Math.max(8, Math.floor(i * .5)), g;
		t[5] !== i || t[6] !== _ || t[7] !== f ? (g = {
			height: i,
			minWidth: i,
			paddingInline: _,
			borderRadius: i,
			fontSize: f
		}, t[5] = i, t[6] = _, t[7] = f, t[8] = g) : g = t[8];
		var h;
		t[9] !== a || t[10] !== p || t[11] !== g ? (h = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: p,
			style: g,
			children: ["+", a]
		}), t[9] = a, t[10] = p, t[11] = g, t[12] = h) : h = t[12];
		var y;
		return t[13] !== c || t[14] !== h ? (y = s.jsx("div", {
			style: c,
			children: h
		}), t[13] = c, t[14] = h, t[15] = y) : y = t[15], y;
	}
	function p(e) {
		var t, n = o("react-compiler-runtime").c(31), r = e.borderColor, a = e.borderWidth, i = e.chatWid, l = e.faceSize, u = e.idsOrUrls, p = e.keyName, _ = e.maxVisible, f = e.overflowThreshold, g = e.theme, h = e.xstyle, y = (t = f != null ? f : _) != null ? t : u.length, C = _ != null && u.length > y, b;
		n[0] !== u || n[1] !== _ || n[2] !== C ? (b = C ? u.slice(0, _) : u, n[0] = u, n[1] = _, n[2] = C, n[3] = b) : b = n[3];
		var v = b, S = C ? u.length - (_ != null ? _ : 0) : 0, R = l != null ? l : c, L;
		if (n[4] !== r || n[5] !== a || n[6] !== i || n[7] !== u || n[8] !== p || n[9] !== R || n[10] !== g || n[11] !== v) {
			var E;
			n[13] !== r || n[14] !== a || n[15] !== i || n[16] !== u || n[17] !== p || n[18] !== R || n[19] !== g ? (E = function(t, n) {
				return s.jsx(d, {
					idOrUrl: t,
					isFirst: n === 0,
					zIndex: u.length - n,
					borderColor: r,
					faceSize: R,
					chatWid: i,
					theme: g,
					borderWidth: a
				}, t.toString() + "-" + n + "-" + (p != null ? p : ""));
			}, n[13] = r, n[14] = a, n[15] = i, n[16] = u, n[17] = p, n[18] = R, n[19] = g, n[20] = E) : E = n[20], L = v.map(E), n[4] = r, n[5] = a, n[6] = i, n[7] = u, n[8] = p, n[9] = R, n[10] = g, n[11] = v, n[12] = L;
		} else L = n[12];
		var k;
		n[21] !== r || n[22] !== a || n[23] !== S || n[24] !== R || n[25] !== C ? (k = C && s.jsx(m, {
			count: S,
			faceSize: R,
			zIndex: 0,
			borderColor: r,
			borderWidth: a
		}), n[21] = r, n[22] = a, n[23] = S, n[24] = R, n[25] = C, n[26] = k) : k = n[26];
		var I;
		return n[27] !== L || n[28] !== k || n[29] !== h ? (I = s.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "end",
			xstyle: h,
			children: [L, k]
		}), n[27] = L, n[28] = k, n[29] = h, n[30] = I) : I = n[30], I;
	}
	l.default = p;
}), 98);
