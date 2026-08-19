__d("WAWebMediaThumbMediaImageThumb.react", [
	"WAWebMediaData",
	"WAWebMediaOpaqueData",
	"WAWebMediaTypes",
	"WAWebMediaUrlProvider",
	"WAWebUnstyledButton.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(17), n = e.ref, a = e.children, i = e.className, l = e.onClick, s = e.onDragStart, c = e.shade, d = e.tabIndex, m = e.testid, p = e.url, _;
		t[0] !== c ? (_ = c === !0 ? u.jsx("div", { className: "xtc4mwu x1ey2m1c x1qx5ct2 xu96u03 x47corl x10l6tqk xh8yej3" }) : null, t[0] = c, t[1] = _) : _ = t[1];
		var f = _, g;
		t[2] !== p ? (g = p != null && p !== "" ? { backgroundImage: "url(" + p + ")" } : null, t[2] = p, t[3] = g) : g = t[3];
		var h = g, y = m != null ? "media-canvas-img " + m : "media-canvas-img", C = d != null ? d : 0, b = s == null ? null : !0, v;
		t[4] !== a || t[5] !== i || t[6] !== y || t[7] !== s || t[8] !== n || t[9] !== f || t[10] !== h || t[11] !== b ? (v = u.jsxs("div", {
			ref: n,
			style: h,
			className: i,
			"data-testid": y,
			onDragStart: s,
			draggable: b,
			children: [a, f]
		}), t[4] = a, t[5] = i, t[6] = y, t[7] = s, t[8] = n, t[9] = f, t[10] = h, t[11] = b, t[12] = v) : v = t[12];
		var S;
		return t[13] !== l || t[14] !== C || t[15] !== v ? (S = u.jsx(r("WAWebUnstyledButton.react"), {
			onClick: l,
			tabIndex: C,
			children: v
		}), t[13] = l, t[14] = C, t[15] = v, t[16] = S) : S = t[16], S;
	}
	function d(e) {
		var t = o("react-compiler-runtime").c(17), n = e.ref, a = e.isRefreshed, i = e.mediaData, l = e.onClick, s = e.onDragStart, d = e.shade, m = e.shouldApplyBlur, p = e.tabIndex, _ = e.url, f = a === void 0 ? !1 : a, g = !!m, h = p != null ? p : 0, y;
		t[0] !== f || t[1] !== g ? (y = {
			0: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm",
			2: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm",
			1: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm xhe8x8x",
			3: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm xhe8x8x"
		}[!!f << 1 | !!g << 0], t[0] = f, t[1] = g, t[2] = y) : y = t[2];
		var C;
		t[3] !== i.preview ? (C = i.preview instanceof r("WAWebMediaOpaqueData") ? i.preview.url() : null, t[3] = i.preview, t[4] = C) : C = t[4];
		var b;
		t[5] !== f || t[6] !== _ ? (b = _ != null ? u.jsx("div", {
			className: {
				0: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm",
				1: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm"
			}[!!f << 0],
			style: { backgroundImage: "url(" + _ + ")" }
		}) : null, t[5] = f, t[6] = _, t[7] = b) : b = t[7];
		var v;
		return t[8] !== l || t[9] !== s || t[10] !== n || t[11] !== d || t[12] !== h || t[13] !== y || t[14] !== C || t[15] !== b ? (v = u.jsx(c, {
			ref: n,
			tabIndex: h,
			onClick: l,
			onDragStart: s,
			className: y,
			shade: d,
			url: C,
			children: b
		}), t[8] = l, t[9] = s, t[10] = n, t[11] = d, t[12] = h, t[13] = y, t[14] = C, t[15] = b, t[16] = v) : v = t[16], v;
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(8), n = e.ref, r = e.isRefreshed, a = e.mediaData, i = e.onClick, l = e.onDragStart, s = e.shade, m = e.tabIndex, p;
		return t[0] !== r || t[1] !== a || t[2] !== i || t[3] !== l || t[4] !== n || t[5] !== s || t[6] !== m ? (p = a.preview != null ? u.jsx(d, {
			tabIndex: m,
			ref: n,
			onClick: i,
			onDragStart: l,
			mediaData: a,
			isRefreshed: r
		}) : u.jsx(c, {
			ref: n,
			tabIndex: m,
			onClick: i,
			onDragStart: l,
			className: {
				0: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm",
				1: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm"
			}[(r === !0) << 0],
			shade: s,
			isRefreshed: r
		}), t[0] = r, t[1] = a, t[2] = i, t[3] = l, t[4] = n, t[5] = s, t[6] = m, t[7] = p) : p = t[7], p;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(45), n = e.ref, a = e.downloadMedia, i = e.msg, l = e.onClick, s = e.onDragStart, p = e.preferPreview, _ = e.tabIndex, f = e.isRefreshed, g = _ === void 0 ? -1 : _, h = f === void 0 ? !1 : f, y = i.mediaData, C;
		t[0] !== l || t[1] !== s || t[2] !== n || t[3] !== g ? (C = {
			onClick: l,
			onDragStart: s,
			ref: n,
			tabIndex: g
		}, t[0] = l, t[1] = s, t[2] = n, t[3] = g, t[4] = C) : C = t[4];
		var b = C;
		switch (y.type) {
			case r("WAWebMediaData").TYPE.AUDIO: {
				var v;
				t[5] === Symbol.for("react.memo_cache_sentinel") ? (v = "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm x1epgcli", t[5] = v) : v = t[5];
				var S;
				return t[6] !== b ? (S = u.jsx(c, babelHelpers.extends({}, b, {
					className: v,
					testid: "media-canvas-audio-thumb"
				})), t[6] = b, t[7] = S) : S = t[7], S;
			}
			case r("WAWebMediaData").TYPE.VIDEO: {
				var R, L = y.fullPreviewData == null && y.preview == null, E = (R = y.fullPreviewData) != null ? R : y.preview, k = y.isGif && !y.preview, I;
				t[8] !== h || t[9] !== L || t[10] !== k ? (I = {
					0: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm",
					4: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm",
					2: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm xhe8x8x",
					6: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm xhe8x8x",
					1: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm xihcpt0",
					5: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm xihcpt0",
					3: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm xhe8x8x xihcpt0",
					7: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm xhe8x8x xihcpt0"
				}[!!h << 2 | !!L << 1 | !!k << 0], t[8] = h, t[9] = L, t[10] = k, t[11] = I) : I = t[11];
				var T = k ? "media-canvas-video-thumb" : null, D;
				t[12] !== E ? (D = E instanceof r("WAWebMediaOpaqueData") ? E.url() : null, t[12] = E, t[13] = D) : D = t[13];
				var x;
				return t[14] !== b || t[15] !== I || t[16] !== T || t[17] !== D ? (x = u.jsx(c, babelHelpers.extends({}, b, {
					className: I,
					testid: T,
					shade: !0,
					url: D
				})), t[14] = b, t[15] = I, t[16] = T, t[17] = D, t[18] = x) : x = t[18], x;
			}
			case r("WAWebMediaData").TYPE.IMAGE: {
				var $ = y.preview != null && y.mediaStage === o("WAWebMediaTypes").MediaDataStage.NEED_POKE;
				if (p === !0) {
					var P;
					return t[19] !== h || t[20] !== y || t[21] !== i.star || t[22] !== b || t[23] !== $ ? (P = u.jsx(m, babelHelpers.extends({}, b, {
						mediaData: y,
						shade: i.star,
						shouldApplyBlur: $,
						isRefreshed: h
					})), t[19] = h, t[20] = y, t[21] = i.star, t[22] = b, t[23] = $, t[24] = P) : P = t[24], P;
				}
				var N;
				t[25] !== h || t[26] !== y || t[27] !== i.star || t[28] !== b || t[29] !== $ ? (N = function() {
					return u.jsx(m, babelHelpers.extends({}, b, {
						mediaData: y,
						shade: i.star,
						shouldApplyBlur: $,
						isRefreshed: h
					}));
				}, t[25] = h, t[26] = y, t[27] = i.star, t[28] = b, t[29] = $, t[30] = N) : N = t[30];
				var M;
				t[31] !== h || t[32] !== y || t[33] !== i.star || t[34] !== b || t[35] !== $ ? (M = function(t) {
					return u.jsx(d, babelHelpers.extends({}, b, {
						mediaData: y,
						shade: i.star,
						shouldApplyBlur: $,
						url: t,
						isRefreshed: h
					}));
				}, t[31] = h, t[32] = y, t[33] = i.star, t[34] = b, t[35] = $, t[36] = M) : M = t[36];
				var w;
				return t[37] !== a || t[38] !== y || t[39] !== N || t[40] !== M ? (w = u.jsx(r("WAWebMediaUrlProvider"), {
					mediaData: y,
					placeholderRenderer: N,
					renderProgressively: !0,
					downloadMedia: a,
					children: M
				}), t[37] = a, t[38] = y, t[39] = N, t[40] = M, t[41] = w) : w = t[41], w;
			}
			default: {
				var A;
				return t[42] !== i.star || t[43] !== b ? (A = u.jsx(c, babelHelpers.extends({}, b, { shade: i.star })), t[42] = i.star, t[43] = b, t[44] = A) : A = t[44], A;
			}
		}
	}
	function _(t) {
		var n, r = o("react-compiler-runtime").c(11), a, i;
		r[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), r[0] = t, r[1] = a, r[2] = i) : (a = r[1], i = r[2]);
		var l = (n = a.isRefreshed) != null ? n : !1, s;
		r[3] !== l ? (s = {
			0: { className: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm" },
			1: { className: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm" }
		}[!!l << 0], r[3] = l, r[4] = s) : s = r[4];
		var c;
		r[5] !== a || r[6] !== i ? (c = u.jsx(p, babelHelpers.extends({ ref: i }, a)), r[5] = a, r[6] = i, r[7] = c) : c = r[7];
		var d;
		return r[8] !== s || r[9] !== c ? (d = u.jsx("div", babelHelpers.extends({}, s, { children: c })), r[8] = s, r[9] = c, r[10] = d) : d = r[10], d;
	}
	l.default = _;
}), 98);
