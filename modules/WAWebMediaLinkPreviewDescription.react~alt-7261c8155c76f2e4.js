__d("WAWebMediaLinkPreviewDescription.react", [
	"WAWebEmojiText.react",
	"WAWebL10N",
	"react",
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
		var n = t.breakWord, a = t.children, i = t.isCompose, l = t.isComposeHQPreview, s = t.isFullPreview, _ = t.isHighQualityLayout, f = t.isStatus, g = t.testid, h = t.useTextLimit;
		if (a == null) return null;
		var y = r("WAWebL10N").isRTL() ? "rtl" : "ltr", C = typeof a == "string" ? y : void 0, b = h ? m : void 0;
		return u.jsx("div", babelHelpers.extends({ "data-testid": g != null ? g : "link-description" }, (e || (e = r("stylex"))).props([
			d.description,
			f && d.statusDescription,
			i && [d.composeDescription, c.marginBottom1],
			p({
				isCompose: i,
				isComposeHQPreview: l,
				isFullPreview: s,
				isHighQualityLayout: _
			})
		]), { children: typeof a == "string" ? u.jsx(o("WAWebEmojiText.react").EmojiText, babelHelpers.extends({
			text: a,
			textLimit: b,
			titlify: !0,
			direction: C,
			multiline: !0
		}, n === !0 && { breakWord: !0 })) : a }));
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
