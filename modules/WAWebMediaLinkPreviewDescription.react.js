__d("WAWebMediaLinkPreviewDescription.react", [
	"WAWebEmojiText.react",
	"WAWebL10N",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = { marginBottom1: {
		marginBottom: "x1ty9z65",
		$$css: !0
	} }, d = {
		description: {
			color: "xhslqc4",
			flexGrow: "x1c4vz4f",
			flexShrink: "x7f0hsc",
			flexBasis: "xdl72j9",
			fontSize: "x1pg5gke",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			$$css: !0
		},
		statusDescription: {
			color: "xa2ctma",
			fontSize: "x1f6kntn",
			$$css: !0
		},
		oneLineClamp: {
			maxHeight: "x1h4inun",
			WebkitBoxOrient: "x1ua5tub",
			display: "x104kibb",
			WebkitLineClamp: "xh0615m",
			$$css: !0
		},
		twoLinesClamp: {
			maxHeight: "x1ot9ia1",
			WebkitBoxOrient: "x1ua5tub",
			display: "x104kibb",
			$$css: !0
		},
		composeDescription: {
			maxWidth: "x17fpy1y",
			lineHeight: "x1o168i8",
			fontSize: "x1f6kntn",
			$$css: !0
		},
		tenLinesClamp: {
			WebkitBoxOrient: "x1ua5tub",
			WebkitLineClamp: "x1but23e",
			display: "x104kibb",
			$$css: !0
		},
		fullPreviewNotHighQualityLayoutDescription: {
			overflowX: "x1plvlek",
			overflowY: "xryxfnj",
			$$css: !0
		}
	}, m = 280;
	function p(e) {
		var t = e.isCompose, n = e.isComposeHQPreview, r = e.isFullPreview, o = e.isHighQualityLayout;
		return t ? n ? d.twoLinesClamp : d.oneLineClamp : r ? o ? d.tenLinesClamp : d.fullPreviewNotHighQualityLayoutDescription : d.twoLinesClamp;
	}
	function _(t) {
		var n = o("react-compiler-runtime").c(15), a = t.breakWord, i = t.children, l = t.isCompose, s = t.isComposeHQPreview, _ = t.isFullPreview, f = t.isHighQualityLayout, g = t.isStatus, h = t.testid, y = t.useTextLimit;
		if (i == null) return null;
		var C = r("WAWebL10N").isRTL() ? "rtl" : "ltr", b = typeof i == "string" ? C : void 0, v = y ? m : void 0, S = h != null ? h : "link-description", R;
		n[0] !== l || n[1] !== s || n[2] !== _ || n[3] !== f || n[4] !== g ? (R = (e || (e = r("stylex"))).props([
			d.description,
			g && d.statusDescription,
			l && [d.composeDescription, c.marginBottom1],
			p({
				isCompose: l,
				isComposeHQPreview: s,
				isFullPreview: _,
				isHighQualityLayout: f
			})
		]), n[0] = l, n[1] = s, n[2] = _, n[3] = f, n[4] = g, n[5] = R) : R = n[5];
		var L;
		n[6] !== a || n[7] !== i || n[8] !== b || n[9] !== v ? (L = typeof i == "string" ? u.jsx(o("WAWebEmojiText.react").EmojiText, babelHelpers.extends({
			text: i,
			textLimit: v,
			titlify: !0,
			direction: b,
			multiline: !0
		}, a === !0 && { breakWord: !0 })) : i, n[6] = a, n[7] = i, n[8] = b, n[9] = v, n[10] = L) : L = n[10];
		var E;
		return n[11] !== S || n[12] !== R || n[13] !== L ? (E = u.jsx("div", babelHelpers.extends({ "data-testid": S }, R, { children: L })), n[11] = S, n[12] = R, n[13] = L, n[14] = E) : E = n[14], E;
	}
	l.default = _;
}), 98);
