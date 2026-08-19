__d("WAWebProfileImage.story", [
	"WAWebCheckBox.react",
	"WAWebDetailImage.react",
	"WAWebProfileImage.react",
	"WAWebShowroomUtils",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useState;
	function m() {
		var e = o("react-compiler-runtime").c(53), t = d("null"), n = t[0], a = t[1], i = d(null), l = i[0], u = i[1], m = d(!1), _ = m[0], f = m[1], g = d(!1), h = g[0], y = g[1], C;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (C = [
			"null",
			"voip",
			"voip-dimmed",
			"voip-large",
			"voip-large-dimmed"
		], e[0] = C) : C = e[0];
		var b = C, v;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (v = function(t) {
			a(t.currentTarget.value);
		}, e[1] = v) : v = e[1];
		var S = v, R, L;
		if (e[2] === Symbol.for("react.memo_cache_sentinel") ? (R = function() {
			u([
				o("WAWebShowroomUtils").maybeGetProfilePicOfRandomContact(),
				o("WAWebShowroomUtils").maybeGetProfilePicOfRandomContact(),
				o("WAWebShowroomUtils").maybeGetProfilePicOfRandomContact()
			]);
		}, L = [], e[2] = R, e[3] = L) : (R = e[2], L = e[3]), c(R, L), !l) return null;
		var E = n === "null" ? void 0 : n, k = h ? o("WAWebDetailImage.react").DetailImageShape.Square : o("WAWebDetailImage.react").DetailImageShape.Circle, I;
		e[4] !== E || e[5] !== k ? (I = {
			size: 138,
			theme: E,
			shape: k
		}, e[4] = E, e[5] = k, e[6] = I) : I = e[6];
		var T = I, D;
		e[7] === Symbol.for("react.memo_cache_sentinel") ? (D = s.jsxs("div", { children: ["Theme:", s.jsx("select", {
			onChange: S,
			children: b.map(p)
		})] }), e[7] = D) : D = e[7];
		var x;
		e[8] !== _ ? (x = function() {
			return f(!_);
		}, e[8] = _, e[9] = x) : x = e[9];
		var $;
		e[10] !== x || e[11] !== _ ? ($ = s.jsxs("div", { children: ["Use default profile:", s.jsx(o("WAWebCheckBox.react").CheckBox, {
			checked: _,
			onChange: x
		})] }), e[10] = x, e[11] = _, e[12] = $) : $ = e[12];
		var P;
		e[13] !== h ? (P = function() {
			return y(!h);
		}, e[13] = h, e[14] = P) : P = e[14];
		var N;
		e[15] !== P || e[16] !== h ? (N = s.jsxs("div", { children: ["Square:", s.jsx(o("WAWebCheckBox.react").CheckBox, {
			checked: h,
			onChange: P
		})] }), e[15] = P, e[16] = h, e[17] = N) : N = e[17];
		var M;
		e[18] === Symbol.for("react.memo_cache_sentinel") ? (M = s.jsx("h2", { children: "1 image" }), e[18] = M) : M = e[18];
		var w;
		e[19] !== l || e[20] !== _ ? (w = _ ? [null] : l.slice(0, 1), e[19] = l, e[20] = _, e[21] = w) : w = e[21];
		var A;
		e[22] !== T || e[23] !== w ? (A = s.jsx(r("WAWebProfileImage.react"), babelHelpers.extends({ thumbs: w }, T)), e[22] = T, e[23] = w, e[24] = A) : A = e[24];
		var F;
		e[25] === Symbol.for("react.memo_cache_sentinel") ? (F = s.jsx("h2", { children: "2 images" }), e[25] = F) : F = e[25];
		var O;
		e[26] !== l || e[27] !== _ ? (O = _ ? [null, null] : l.slice(0, 2), e[26] = l, e[27] = _, e[28] = O) : O = e[28];
		var B;
		e[29] !== T || e[30] !== O ? (B = s.jsx(r("WAWebProfileImage.react"), babelHelpers.extends({ thumbs: O }, T)), e[29] = T, e[30] = O, e[31] = B) : B = e[31];
		var W;
		e[32] === Symbol.for("react.memo_cache_sentinel") ? (W = s.jsx("h2", { children: "3 images" }), e[32] = W) : W = e[32];
		var q;
		e[33] !== l || e[34] !== _ ? (q = _ ? [
			null,
			null,
			null
		] : l.slice(0, 3), e[33] = l, e[34] = _, e[35] = q) : q = e[35];
		var U;
		e[36] !== T || e[37] !== q ? (U = s.jsx(r("WAWebProfileImage.react"), babelHelpers.extends({ thumbs: q }, T)), e[36] = T, e[37] = q, e[38] = U) : U = e[38];
		var V;
		e[39] === Symbol.for("react.memo_cache_sentinel") ? (V = s.jsx("h2", { children: "3 images (mixed)" }), e[39] = V) : V = e[39];
		var H;
		e[40] !== l[0] || e[41] !== l[1] ? (H = [
			l[0],
			null,
			l[1]
		], e[40] = l[0], e[41] = l[1], e[42] = H) : H = e[42];
		var G;
		e[43] !== T || e[44] !== H ? (G = s.jsx(r("WAWebProfileImage.react"), babelHelpers.extends({ thumbs: H }, T)), e[43] = T, e[44] = H, e[45] = G) : G = e[45];
		var z;
		return e[46] !== N || e[47] !== A || e[48] !== B || e[49] !== U || e[50] !== G || e[51] !== $ ? (z = s.jsxs("div", { children: [
			D,
			$,
			N,
			M,
			A,
			F,
			B,
			W,
			U,
			V,
			G
		] }), e[46] = N, e[47] = A, e[48] = B, e[49] = U, e[50] = G, e[51] = $, e[52] = z) : z = e[52], z;
	}
	function p(e) {
		return s.jsx("option", {
			value: e,
			children: e != null ? e : "null"
		}, e);
	}
	p.displayName = p.name + " [from " + i.id + "]";
	var _ = {
		storyName: "WAWebProfileImage",
		component: r("WAWebProfileImage.react"),
		description: "\n        Render profile image\n    ",
		examples: [{
			example: s.jsx(m, {}),
			title: "Default"
		}]
	};
	l.default = _;
}), 98);
