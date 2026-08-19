__d("WAWebPDFNMetaModal.react", [
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebPDFNContentElement.react",
	"WAWebPDFNHeaderImage.react",
	"WAWebPDFNSanitizedSvg.react",
	"WAWebThemeContext",
	"WDSPaddings.stylex",
	"WaWebPDFNCommonUtils",
	"XMDSButton.react",
	"XMDSDialogHeader.react",
	"XMDSDialogPage.react",
	"XMDSDialogTitle.react",
	"XMDSText.react",
	"XMDSTheme.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		paddingTop10: {
			paddingTop: "x889kno",
			$$css: !0
		},
		paddingBottom6: {
			paddingBottom: "x10b6aqq",
			$$css: !0
		}
	}, c = {
		cdsContainer: {
			fontFamily: "xjn6cdj",
			$$css: !0
		},
		bulletSubtitle: {
			fontSize: "x6prxxf",
			lineHeight: "x17fgdl5",
			fontWeight: "xo1l8bm",
			$$css: !0
		},
		secondaryText: {
			color: "xb6zdsr",
			$$css: !0
		},
		secondaryTextDark: {
			color: "x1rmb33y",
			$$css: !0
		},
		link: {
			fontWeight: "x1xlr1w8",
			$$css: !0
		},
		blueLink: {
			color: "x1aejobo",
			$$css: !0
		},
		blueLinkDark: {
			color: "x180kvt1",
			$$css: !0
		},
		cdsFooterText: {
			fontSize: "x1nxh6w3",
			lineHeight: "xuy8w9f",
			$$css: !0
		}
	};
	function d(e) {
		var t, n = o("react-compiler-runtime").c(31), a = e.onAccept, i = e.onCancel, l = e.pdfnNotice, u = o("WAWebThemeContext").useIsDarkTheme(), d = u ? c.blueLinkDark : c.blueLink, m;
		n[0] !== l || n[1] !== d ? (m = o("WaWebPDFNCommonUtils").getFormattedPdfnContent(l, { linkXstyle: [c.link, d] }), n[0] = l, n[1] = d, n[2] = m) : m = n[2];
		var _ = m, f = _.bulletContent, g = _.footerContent, h = _.headerContent, y = _.okText, C;
		n[3] !== f ? (C = f != null ? s.jsx(p, { bullets: f }) : null, n[3] = f, n[4] = C) : C = n[4];
		var b = C, v;
		n[5] !== g || n[6] !== u ? (v = g != null ? s.jsx(r("WAWebPDFNContentElement.react"), {
			as: "div",
			content: g,
			xstyle: [
				c.cdsFooterText,
				u ? c.secondaryTextDark : c.secondaryText,
				o("WDSPaddings.stylex").wdsPaddings.paddingBottom12
			]
		}) : null, n[5] = g, n[6] = u, n[7] = v) : v = n[7];
		var S = v, R;
		n[8] !== h ? (R = s.jsx(r("WAWebPDFNHeaderImage.react"), {
			content: h,
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingBottom16
		}), n[8] = h, n[9] = R) : R = n[9];
		var L = R, E = u ? "dark" : "light", k;
		n[10] !== i ? (k = s.jsx(r("XMDSDialogHeader.react"), { onClose: i }), n[10] = i, n[11] = k) : k = n[11];
		var I;
		n[12] !== L ? (I = s.jsx(o("WAWebFlex.react").FlexRow, {
			alignSelf: "center",
			children: L
		}), n[12] = L, n[13] = I) : I = n[13];
		var T = l == null || (t = l.privacyDisclosureModal) == null ? void 0 : t.title, D;
		n[14] !== T ? (D = s.jsx(r("XMDSDialogTitle.react"), { children: s.jsx(r("XMDSText.react"), {
			textStyle: "headline2",
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingVer16,
			children: T
		}) }), n[14] = T, n[15] = D) : D = n[15];
		var x;
		n[16] !== y || n[17] !== a ? (x = s.jsx(r("XMDSButton.react"), {
			label: y,
			onPress: a
		}), n[16] = y, n[17] = a, n[18] = x) : x = n[18];
		var $;
		n[19] !== b || n[20] !== S || n[21] !== D || n[22] !== x || n[23] !== I ? ($ = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			paddingStart: 20,
			paddingEnd: 20,
			xstyle: c.cdsContainer,
			children: [
				I,
				D,
				b,
				S,
				x
			]
		}), n[19] = b, n[20] = S, n[21] = D, n[22] = x, n[23] = I, n[24] = $) : $ = n[24];
		var P;
		n[25] !== $ || n[26] !== k ? (P = s.jsx(r("XMDSDialogPage.react"), {
			footer: null,
			header: k,
			inline: !0,
			children: $
		}), n[25] = $, n[26] = k, n[27] = P) : P = n[27];
		var N;
		return n[28] !== P || n[29] !== E ? (N = s.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.CDS,
			children: s.jsx(r("XMDSTheme.react"), {
				displayMode: E,
				children: P
			})
		}), n[28] = P, n[29] = E, n[30] = N) : N = n[30], N;
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(14), n = e.iconSvg, a = e.secondaryText, i = e.text, l = o("WAWebThemeContext").useIsDarkTheme(), d;
		t[0] !== l || t[1] !== a ? (d = a != null ? s.jsx(r("WAWebPDFNContentElement.react"), {
			as: "span",
			xstyle: [c.bulletSubtitle, l ? c.secondaryTextDark : c.secondaryText],
			content: a
		}) : null, t[0] = l, t[1] = a, t[2] = d) : d = t[2];
		var m = d, p;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (p = [u.paddingTop10, u.paddingBottom6], t[3] = p) : p = t[3];
		var _;
		t[4] !== n ? (_ = s.jsx(r("WAWebPDFNSanitizedSvg.react"), { iconSvg: n }), t[4] = n, t[5] = _) : _ = t[5];
		var f;
		t[6] !== i ? (f = s.jsx(r("XMDSText.react"), {
			textStyle: "primaryLabel",
			children: i
		}), t[6] = i, t[7] = f) : f = t[7];
		var g;
		t[8] !== m || t[9] !== f ? (g = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			rowGap: 4,
			children: [f, m]
		}), t[8] = m, t[9] = f, t[10] = g) : g = t[10];
		var h;
		return t[11] !== _ || t[12] !== g ? (h = s.jsxs(o("WAWebFlex.react").FlexRow, {
			columnGap: 12,
			xstyle: p,
			children: [_, g]
		}), t[11] = _, t[12] = g, t[13] = h) : h = t[13], h;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(4), n = e.bullets, r;
		t[0] !== n ? (r = n.map(_), t[0] = n, t[1] = r) : r = t[1];
		var a;
		return t[2] !== r ? (a = s.jsx(o("WAWebFlex.react").FlexColumn, {
			paddingBottom: 16,
			children: r
		}), t[2] = r, t[3] = a) : a = t[3], a;
	}
	function _(e, t) {
		return s.jsx(m, {
			text: e.text,
			icon: e.icon,
			iconSvg: e.iconSvg,
			secondaryText: e.secondaryText
		}, t);
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = d;
}), 98);
