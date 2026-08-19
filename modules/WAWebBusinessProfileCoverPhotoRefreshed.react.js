__d("WAWebBusinessProfileCoverPhotoRefreshed.react", [
	"fbt",
	"WAWebBizCoverPhotoPicker.react",
	"WAWebDetailImage.react",
	"WAWebFlex.react",
	"WAWebMiscGatingUtils",
	"WAWebProfilePicPicker.react",
	"WDSButton.react",
	"WDSIconIcPhotoCamera.react",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = 120, d = 165, m = { editButtonColor: {
		backgroundColor: "x1280gxy",
		$$css: !0
	} };
	function p(e) {
		var t, n, a = o("react-compiler-runtime").c(45), i = e.businessProfile, l = e.contact, d = e.editable, p = e.onLoad, _ = e.profilePicThumb, f;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (f = ["coverPhoto", "profileOptions"], a[0] = f) : f = a[0];
		var g = o("useWAWebModelValues").useModelValues(i, f), h = r("useWAWebUnmountSignal")(), y = o("WAWebMiscGatingUtils").isBlueLockingEnabled() && ((t = g.profileOptions) == null ? void 0 : t.isProfileEditDisabled) === !0, C, b, v;
		a[1] !== l.id || a[2] !== p ? (v = u.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: l.id,
			size: c,
			loader: !0,
			onLoad: p,
			quality: o("WAWebDetailImage.react").DetailImageQuality.High
		}), a[1] = l.id, a[2] = p, a[3] = v) : v = a[3];
		var S = v;
		if (d === !0 && _ != null && !y) {
			var R;
			a[4] === Symbol.for("react.memo_cache_sentinel") ? (R = { className: "xtijo5x x1o0tod xvc5jky x11t971q xg01cxk x67bb7w x10l6tqk x1cb1t30 xeq5yr9 xzkaem6" }, a[4] = R) : R = a[4];
			var L;
			a[5] !== _ ? (L = u.jsx("div", babelHelpers.extends({}, R, { children: u.jsx(r("WAWebProfilePicPicker.react"), {
				profilePicThumb: _,
				size: c
			}) })), a[5] = _, a[6] = L) : L = a[6], C = L;
			var E;
			a[7] === Symbol.for("react.memo_cache_sentinel") ? (E = { className: "xtijo5x x1o0tod xvc5jky x11t971q x47corl x10l6tqk x1cb1t30 xeq5yr9 xhtitgo" }, a[7] = E) : E = a[7];
			var k;
			a[8] === Symbol.for("react.memo_cache_sentinel") ? (k = s._(
				/*BTDS*/
				""
			), a[8] = k) : k = a[8];
			var I;
			a[9] === Symbol.for("react.memo_cache_sentinel") ? (I = u.jsx("div", babelHelpers.extends({}, E, { children: u.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcPhotoCamera.react"),
				label: k,
				variant: "outline",
				xstyle: m.editButtonColor,
				"aria-label": s._(
					/*BTDS*/
					""
				)
			}) })), a[9] = I) : I = a[9], b = I;
		}
		var T;
		if (a[10] !== ((n = g.coverPhoto) == null ? void 0 : n.url)) {
			var D, x;
			T = (D = g.coverPhoto) == null ? void 0 : D.url.toString(), a[10] = (x = g.coverPhoto) == null ? void 0 : x.url, a[11] = T;
		} else T = a[11];
		var $ = T, P, N;
		if (d != null) {
			var M;
			a[12] === Symbol.for("react.memo_cache_sentinel") ? (M = s._(
				/*BTDS*/
				""
			), a[12] = M) : M = a[12];
			var w = M, A = g.coverPhoto != null, F;
			a[13] === Symbol.for("react.memo_cache_sentinel") ? (F = { className: "xffp2at x47corl x10l6tqk x1ctoq22 x1n327nk" }, a[13] = F) : F = a[13];
			var O = A ? "filled" : "outline", B = !A && m.editButtonColor, W;
			a[14] === Symbol.for("react.memo_cache_sentinel") ? (W = s._(
				/*BTDS*/
				""
			), a[14] = W) : W = a[14];
			var q;
			a[15] !== O || a[16] !== B ? (q = u.jsx("div", babelHelpers.extends({}, F, { children: u.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcPhotoCamera.react"),
				label: w,
				variant: O,
				xstyle: B,
				"aria-label": W
			}) })), a[15] = O, a[16] = B, a[17] = q) : q = a[17], N = q;
			var U;
			a[18] === Symbol.for("react.memo_cache_sentinel") ? (U = { className: "x1vqgdyp xffp2at xktpd3l xg01cxk x67bb7w x10l6tqk x1ctoq22 x1of6sz5" }, a[18] = U) : U = a[18];
			var V = g.coverPhoto != null ? g.coverPhoto : void 0, H;
			a[19] !== V || a[20] !== h ? (H = u.jsx("div", babelHelpers.extends({}, U, { children: u.jsx(r("WAWebBizCoverPhotoPicker.react"), {
				coverPhoto: V,
				signal: h
			}) })), a[19] = V, a[20] = h, a[21] = H) : H = a[21], P = H;
		}
		var G;
		if ($ != null) {
			var z;
			a[22] === Symbol.for("react.memo_cache_sentinel") ? (z = s._(
				/*BTDS*/
				""
			), a[22] = z) : z = a[22];
			var j = z, K;
			a[23] !== $ ? (K = $ !== "" ? { backgroundImage: "url(" + $ + ")" } : null, a[23] = $, a[24] = K) : K = a[24];
			var Q = K, X;
			a[25] === Symbol.for("react.memo_cache_sentinel") ? (X = "xiy17q3 x18d0r48 x1ey2m1c xtijo5x x1o0tod x10l6tqk x13vifvy", a[25] = X) : X = a[25];
			var Y;
			a[26] !== Q ? (Y = u.jsx("div", {
				className: X,
				style: Q,
				"data-testid": "cover-photo-img",
				role: "img",
				"aria-label": j
			}), a[26] = Q, a[27] = Y) : Y = a[27], G = Y;
		}
		var J;
		a[28] === Symbol.for("react.memo_cache_sentinel") ? (J = { className: "xw6alqk xiigf6y xl7twdi" }, a[28] = J) : J = a[28];
		var Z;
		a[29] !== d ? (Z = {
			0: { className: "xyi3aci xwf5gio x1p453bz x1suzm8a xtbh88u xtijo5x x1o0tod xvc5jky x11t971q x6ikm8r x10wlt62 x10l6tqk x1l2rt3b" },
			1: { className: "xyi3aci xwf5gio x1p453bz x1suzm8a xtbh88u xtijo5x x1o0tod xvc5jky x11t971q x6ikm8r x10wlt62 x10l6tqk x1l2rt3b x6egj2d" }
		}[!!d << 0], a[29] = d, a[30] = Z) : Z = a[30];
		var ee;
		a[31] !== N || a[32] !== G || a[33] !== P || a[34] !== Z ? (ee = u.jsxs("div", babelHelpers.extends({}, Z, { children: [
			G,
			P,
			N
		] })), a[31] = N, a[32] = G, a[33] = P, a[34] = Z, a[35] = ee) : ee = a[35];
		var te, ne;
		a[36] === Symbol.for("react.memo_cache_sentinel") ? (te = "x1n2onr6 xge4jfe xzkaem6", ne = { className: "xisoiy x347gel xfl8pta x1svocj7 xt8t1vi x1xc408v x129tdwq x15urzxu x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xl8et2f xuc0g9m x1dmim90 xs4xcjr" }, a[36] = te, a[37] = ne) : (te = a[36], ne = a[37]);
		var re;
		a[38] !== S || a[39] !== b || a[40] !== C ? (re = u.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			className: te,
			children: u.jsxs("div", babelHelpers.extends({}, ne, { children: [
				S,
				C,
				b
			] }))
		}), a[38] = S, a[39] = b, a[40] = C, a[41] = re) : re = a[41];
		var oe;
		return a[42] !== ee || a[43] !== re ? (oe = u.jsxs("div", babelHelpers.extends({}, J, { children: [ee, re] })), a[42] = ee, a[43] = re, a[44] = oe) : oe = a[44], oe;
	}
	l.default = p;
}), 226);
