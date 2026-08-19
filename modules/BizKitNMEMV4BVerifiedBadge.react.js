__d("BizKitNMEMV4BVerifiedBadge.react", [
	"ix",
	"Image.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = { image: {
		alignSelf: "xamitd3",
		display: "x3nfvp2",
		flexShrink: "x2lah0s",
		$$css: !0
	} }, m = {
		large: s("1630250"),
		medium: s("1630248"),
		small: s("1630246"),
		whatsAppLarge: s("392861"),
		whatsAppSmall: s("392856"),
		whatsAppXsmall: s("392854"),
		xsmall: s("206424")
	}, p = {
		large: s("1748244"),
		medium: s("1748238"),
		small: s("1748232"),
		whatsAppLarge: s("1748244"),
		whatsAppSmall: s("1748232"),
		whatsAppXsmall: s("206426"),
		xsmall: s("206426")
	};
	function _(e, t) {
		switch (e) {
			case "verified":
				switch (t) {
					case "small": return s("1630246");
				}
				return null;
			default: return null;
		}
	}
	function f(t) {
		var n = o("react-compiler-runtime").c(13), a = t.iconSrc, i = t.isDisabled, l = t.size, s = t.verified, u = t.xstyle, f = i === void 0 ? !1 : i, g = l;
		if (l === "whatsAppLarge" || l === "whatsAppSmall" || l === "whatsAppXsmall") {
			var y;
			n[0] !== l ? (y = h(l), n[0] = l, n[1] = y) : y = n[1], g = y;
		}
		var C;
		n[2] !== g || n[3] !== a ? (C = a != null ? _(a, g) : null, n[2] = g, n[3] = a, n[4] = C) : C = n[4];
		var b = C, v = b != null ? b : s === !0 ? m[g] : p[g], S;
		n[5] !== u ? (S = (e || (e = r("stylex")))(d.image, u), n[5] = u, n[6] = S) : S = n[6];
		var R = f ? .5 : 1, L;
		n[7] !== R ? (L = { opacity: R }, n[7] = R, n[8] = L) : L = n[8];
		var E;
		return n[9] !== v || n[10] !== S || n[11] !== L ? (E = c.jsx(r("Image.react"), {
			className: S,
			src: v,
			style: L
		}), n[9] = v, n[10] = S, n[11] = L, n[12] = E) : E = n[12], E;
	}
	function g(e, t) {
		if (e === "WHATSAPP_BUSINESS_ACCOUNT") switch (t) {
			case "large": return "whatsAppLarge";
			case "small": return "whatsAppSmall";
			case "xsmall": return "whatsAppXsmall";
		}
		return t;
	}
	function h(e) {
		switch (e) {
			case "whatsAppLarge": return "large";
			case "whatsAppSmall": return "small";
			case "whatsAppXsmall": return "xsmall";
		}
		return e;
	}
	l.BizKitNMEMV4BVerifiedBadge = f, l.getVerifiedBadgeSizeFromAssetType = g;
}), 98);
