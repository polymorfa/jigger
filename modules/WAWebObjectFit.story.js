__d("WAWebObjectFit.story", [
	"WAWebObjectFit.react",
	"WAWebShowroomStory.react",
	"bx",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = r("bx").getURL(r("bx")("9560"));
	function d() {
		var e = o("react-compiler-runtime").c(34), t = u("contain"), n = t[0], a = t[1], i;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (i = function() {
			return a("contain");
		}, e[0] = i) : i = e[0];
		var l = n === "contain", d;
		e[1] !== l ? (d = s.jsx("input", {
			type: "radio",
			name: "fit",
			value: "contain",
			onChange: i,
			id: "contain",
			checked: l
		}), e[1] = l, e[2] = d) : d = e[2];
		var m, p;
		e[3] === Symbol.for("react.memo_cache_sentinel") ? (m = s.jsx("label", {
			htmlFor: "contain",
			children: "Contain"
		}), p = s.jsx("br", {}), e[3] = m, e[4] = p) : (m = e[3], p = e[4]);
		var _;
		e[5] === Symbol.for("react.memo_cache_sentinel") ? (_ = function() {
			return a("cover");
		}, e[5] = _) : _ = e[5];
		var f = n === "cover", g;
		e[6] !== f ? (g = s.jsx("input", {
			type: "radio",
			name: "fit",
			value: "cover",
			onChange: _,
			id: "cover",
			checked: f
		}), e[6] = f, e[7] = g) : g = e[7];
		var h, y;
		e[8] === Symbol.for("react.memo_cache_sentinel") ? (h = s.jsx("label", {
			htmlFor: "cover",
			children: "Cover"
		}), y = s.jsx("br", {}), e[8] = h, e[9] = y) : (h = e[8], y = e[9]);
		var C;
		e[10] === Symbol.for("react.memo_cache_sentinel") ? (C = function() {
			return a("scaleDown");
		}, e[10] = C) : C = e[10];
		var b = n === "scaleDown", v;
		e[11] !== b ? (v = s.jsx("input", {
			type: "radio",
			name: "fit",
			value: "scaleDown",
			onChange: C,
			id: "scaleDown",
			checked: b
		}), e[11] = b, e[12] = v) : v = e[12];
		var S, R;
		e[13] === Symbol.for("react.memo_cache_sentinel") ? (S = s.jsx("label", {
			htmlFor: "scaleDown",
			children: "Scale Down"
		}), R = s.jsx("br", {}), e[13] = S, e[14] = R) : (S = e[13], R = e[14]);
		var L;
		e[15] === Symbol.for("react.memo_cache_sentinel") ? (L = function() {
			return a("zoomIn");
		}, e[15] = L) : L = e[15];
		var E = n === "zoomIn", k;
		e[16] !== E ? (k = s.jsx("input", {
			type: "radio",
			name: "fit",
			value: "zoomIn",
			onChange: L,
			id: "zoomIn",
			checked: E
		}), e[16] = E, e[17] = k) : k = e[17];
		var I, T, D, x, $;
		e[18] === Symbol.for("react.memo_cache_sentinel") ? (I = s.jsx("label", {
			htmlFor: "zoomIn",
			children: "Zoom-In"
		}), T = s.jsx("br", {}), D = s.jsx("br", {}), x = {
			position: "relative",
			width: 200,
			height: 200,
			background: "white"
		}, $ = {
			position: "absolute",
			width: 200,
			height: 150,
			background: "lightgray",
			overflow: "hidden",
			top: 25
		}, e[18] = I, e[19] = T, e[20] = D, e[21] = x, e[22] = $) : (I = e[18], T = e[19], D = e[20], x = e[21], $ = e[22]);
		var P, N;
		e[23] === Symbol.for("react.memo_cache_sentinel") ? (P = {
			width: 150,
			height: 150
		}, N = {
			factor: 1.5,
			translateX: 0,
			translateY: 0
		}, e[23] = P, e[24] = N) : (P = e[23], N = e[24]);
		var M;
		e[25] === Symbol.for("react.memo_cache_sentinel") ? (M = s.jsx("img", {
			src: c,
			alt: "test",
			style: {
				width: "100%",
				height: "100%"
			}
		}), e[25] = M) : M = e[25];
		var w;
		e[26] !== n ? (w = s.jsx("div", {
			style: x,
			children: s.jsx("div", {
				style: $,
				children: s.jsx(r("WAWebObjectFit.react"), {
					type: n,
					size: P,
					zoomIn: N,
					children: M
				})
			})
		}), e[26] = n, e[27] = w) : w = e[27];
		var A;
		return e[28] !== v || e[29] !== k || e[30] !== d || e[31] !== w || e[32] !== g ? (A = s.jsxs(s.Fragment, { children: [
			d,
			m,
			p,
			g,
			h,
			y,
			v,
			S,
			R,
			k,
			I,
			T,
			D,
			w
		] }), e[28] = v, e[29] = k, e[30] = d, e[31] = w, e[32] = g, e[33] = A) : A = e[33], A;
	}
	var m = {
		storyName: "WAWebObjectFit",
		section: o("WAWebShowroomStory.react").StorySectionType.UTIL,
		component: r("WAWebObjectFit.react"),
		description: "\n        Component that implements a functionality similar to CSS's object-fit with some\n        extra functionality like \"Zoom-In\".\n    ",
		examples: [{
			example: d,
			title: "Customizable Object Fit"
		}]
	};
	l.default = m;
}), 98);
