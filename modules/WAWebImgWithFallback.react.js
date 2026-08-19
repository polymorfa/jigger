__d("WAWebImgWithFallback.react", [
	"$InternalEnum",
	"WAWebAvatarSpinner.react",
	"WAWebDetailImage.react",
	"WAWebImg.react",
	"isEmptyObject",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = {
		SMALL: "SMALL",
		MEDIUM: "MEDIUM",
		LARGE: "LARGE",
		AUTO: "AUTO",
		NONE: "NONE"
	}, d = n("$InternalEnum").Mirrored(["Default", "Transparent"]);
	function m(e) {
		switch (e) {
			case c.SMALL: return 49;
			case c.MEDIUM: return 100;
			case c.LARGE: return 200;
			case c.NONE: return;
			default: return e;
		}
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(48), n = e.size, a = e.fallbackSVG, i = e.className, l = e.loader, p = e.wrapOptions, _ = e.transition, f = e.imgProps, g = e.theme, h = e.shape, y = n === void 0 ? c.SMALL : n, C = l === void 0 ? !1 : l, b;
		t[0] !== p ? (b = p === void 0 ? {} : p, t[0] = p, t[1] = b) : b = t[1];
		var v = b, S = h === void 0 ? o("WAWebDetailImage.react").DetailImageShape.Circle : h, R = u(!1), L = R[0], E = R[1], k;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (k = function() {
			E(!0);
		}, t[2] = k) : k = t[2];
		var I = k, T = f.alt, D = f.crossOrigin, x = f.draggable, $ = f.src, P = v.centerWrapperChild, N = v.wrapperClassName, M = S === o("WAWebDetailImage.react").DetailImageShape.Squircle, w;
		t[3] !== L || t[4] !== M || t[5] !== _ ? (w = {
			0: "x1n2onr6 xupqr0c x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 xlshs6z xg01cxk",
			4: "x1n2onr6 xupqr0c x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 xnpuxes x1hc1fzr",
			2: "x1n2onr6 xupqr0c x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 xlshs6z xg01cxk x19991ni xx6bhzk x9lcvmn",
			6: "x1n2onr6 xupqr0c x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 xnpuxes x1hc1fzr x19991ni xx6bhzk x9lcvmn",
			1: "x1n2onr6 xupqr0c x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 xlshs6z xg01cxk x1f2iure x1bczwif x17un8ov x1e7945m x11o6v7j",
			5: "x1n2onr6 xupqr0c x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 xnpuxes x1hc1fzr x1f2iure x1bczwif x17un8ov x1e7945m x11o6v7j",
			3: "x1n2onr6 xupqr0c x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 xlshs6z xg01cxk x19991ni xx6bhzk x9lcvmn x1f2iure x1bczwif x17un8ov x1e7945m x11o6v7j",
			7: "x1n2onr6 xupqr0c x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 xnpuxes x1hc1fzr x19991ni xx6bhzk x9lcvmn x1f2iure x1bczwif x17un8ov x1e7945m x11o6v7j"
		}[!!L << 2 | (_ === !0) << 1 | !!M << 0], t[3] = L, t[4] = M, t[5] = _, t[6] = w) : w = t[6];
		var A = w, F;
		t[7] !== y ? (F = m(y), t[7] = y, t[8] = F) : F = t[8];
		var O;
		t[9] !== y ? (O = m(y), t[9] = y, t[10] = O) : O = t[10];
		var B;
		t[11] !== F || t[12] !== O ? (B = {
			height: F,
			width: O
		}, t[11] = F, t[12] = O, t[13] = B) : B = t[13];
		var W = B, q;
		if (C && !L) {
			var U;
			t[14] === Symbol.for("react.memo_cache_sentinel") ? (U = s.jsx(r("WAWebAvatarSpinner.react"), {}), t[14] = U) : U = t[14], q = U;
		}
		var V;
		t[15] !== T || t[16] !== D || t[17] !== x || t[18] !== $ || t[19] !== A ? (V = s.jsx(r("WAWebImg.react"), {
			src: $,
			className: A,
			onLoad: I,
			alt: T,
			crossOrigin: D,
			draggable: x
		}), t[15] = T, t[16] = D, t[17] = x, t[18] = $, t[19] = A, t[20] = V) : V = t[20];
		var H = V, G;
		t[21] !== P || t[22] !== H || t[23] !== L || t[24] !== g || t[25] !== v || t[26] !== N ? (G = v != null && !r("isEmptyObject")(v) ? s.jsx("div", {
			className: "" + {
				0: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x15e7hw7 xupqr0c xlshs6z xg01cxk",
				4: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x15e7hw7 xupqr0c xlshs6z xg01cxk x78zum5 x6s0dn4 xl56j7k",
				2: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x15e7hw7 xupqr0c xnpuxes x1hc1fzr",
				6: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x15e7hw7 xupqr0c x78zum5 x6s0dn4 xl56j7k xnpuxes x1hc1fzr",
				1: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d xupqr0c xlshs6z xg01cxk xjbqb8w",
				5: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d xupqr0c xlshs6z xg01cxk x78zum5 x6s0dn4 xl56j7k xjbqb8w",
				3: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d xupqr0c xnpuxes x1hc1fzr xjbqb8w",
				7: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d xupqr0c x78zum5 x6s0dn4 xl56j7k xnpuxes x1hc1fzr xjbqb8w"
			}[!!P << 2 | !!L << 1 | (g === d.Transparent) << 0] + (N ? " " + N : ""),
			children: H
		}) : H, t[21] = P, t[22] = H, t[23] = L, t[24] = g, t[25] = v, t[26] = N, t[27] = G) : G = t[27];
		var z = G, j;
		t[28] !== q || t[29] !== $ || t[30] !== z ? (j = $ !== "" ? s.jsxs(s.Fragment, { children: [q, z] }) : null, t[28] = q, t[29] = $, t[30] = z, t[31] = j) : j = t[31];
		var K = j, Q;
		t[32] !== M || t[33] !== S || t[34] !== g ? (Q = {
			0: "x1n2onr6 x6ikm8r x10wlt62 x15e7hw7",
			4: "x1n2onr6 x6ikm8r x10wlt62 x15e7hw7 x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
			2: "x1n2onr6 x6ikm8r x10wlt62 xjbqb8w",
			6: "x1n2onr6 x6ikm8r x10wlt62 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xjbqb8w",
			1: "x1n2onr6 x6ikm8r x10wlt62 x15e7hw7 x1f2iure x1bczwif x17un8ov x1e7945m x11o6v7j",
			5: "x1n2onr6 x6ikm8r x10wlt62 x15e7hw7 x1f2iure x1bczwif x17un8ov x1e7945m x11o6v7j",
			3: "x1n2onr6 x6ikm8r x10wlt62 xjbqb8w x1f2iure x1bczwif x17un8ov x1e7945m x11o6v7j",
			7: "x1n2onr6 x6ikm8r x10wlt62 xjbqb8w x1f2iure x1bczwif x17un8ov x1e7945m x11o6v7j"
		}[(S === o("WAWebDetailImage.react").DetailImageShape.Circle) << 2 | (g === d.Transparent) << 1 | !!M << 0], t[32] = M, t[33] = S, t[34] = g, t[35] = Q) : Q = t[35];
		var X = "" + Q + (i != null ? " " + i : ""), Y;
		t[36] !== P || t[37] !== a || t[38] !== L || t[39] !== g || t[40] !== _ || t[41] !== N ? (Y = !L && s.jsx("div", {
			className: "" + {
				0: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x15e7hw7",
				4: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x15e7hw7 x78zum5 x6s0dn4 xl56j7k",
				2: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x15e7hw7 x19991ni xx6bhzk x9lcvmn",
				6: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x15e7hw7 x78zum5 x6s0dn4 xl56j7k x19991ni xx6bhzk x9lcvmn",
				1: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d xjbqb8w",
				5: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x78zum5 x6s0dn4 xl56j7k xjbqb8w",
				3: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x19991ni xx6bhzk x9lcvmn xjbqb8w",
				7: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x78zum5 x6s0dn4 xl56j7k x19991ni xx6bhzk x9lcvmn xjbqb8w"
			}[!!P << 2 | (_ === !0) << 1 | (g === d.Transparent) << 0] + (N ? " " + N : ""),
			children: a
		}), t[36] = P, t[37] = a, t[38] = L, t[39] = g, t[40] = _, t[41] = N, t[42] = Y) : Y = t[42];
		var J;
		return t[43] !== K || t[44] !== W || t[45] !== X || t[46] !== Y ? (J = s.jsxs("div", {
			className: X,
			style: W,
			children: [K, Y]
		}), t[43] = K, t[44] = W, t[45] = X, t[46] = Y, t[47] = J) : J = t[47], J;
	}
	l.Theme = d, l.ImgWithFallback = p;
}), 98);
