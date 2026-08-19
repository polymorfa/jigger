__d("WAWebMediaLinkPreviewImageLayout.react", [
	"WAWebDisplayType",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = 90, d = 240, m = 330, p = 480, _ = .25, f = 1, g = 1, h = 1.4, y = {
		thumbnailContainer: {
			alignItems: "x6s0dn4",
			display: "x78zum5",
			justifyContent: "xl56j7k",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			position: "x1n2onr6",
			$$css: !0
		},
		highQualityLayoutThumbnailContainer: {
			width: "xh8yej3",
			$$css: !0
		},
		blurred: {
			filter: "x1df5jli",
			$$css: !0
		}
	};
	function C(e) {
		var t = e.height, n = e.highQuality, r = n === void 0 ? !1 : n, o = e.width, a = r ? [f, _] : [h, g], i = a[0], l = a[1];
		return Math.min(Math.max(t / o, l), i);
	}
	function b(e) {
		var t = e.displayType, n = e.isCompose, r = e.isLandscape;
		return n ? m : t === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT || t === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER ? p : r ? m : d;
	}
	function v(e) {
		var t = o("react-compiler-runtime").c(11), n = e.children, r = e.displayType, a = e.galleryView, i = e.height, l = e.isComposerHightQualityLayout, s = e.isHighQualityLayout, c = e.isStatus, d = e.thumbnailJpegDirectPath, m = e.thumbnailJpegHQ, p = e.width;
		if ((d != null && d !== "" || m != null && m !== "") && i != null && p != null && !a) {
			var _ = s || l ? S : R, f = m != null, g;
			return t[0] !== _ || t[1] !== n || t[2] !== r || t[3] !== i || t[4] !== l || t[5] !== f || t[6] !== p ? (g = u.jsx(_, {
				height: i,
				width: p,
				displayType: r,
				isCompose: l,
				hasHqThumbnail: f,
				children: n
			}), t[0] = _, t[1] = n, t[2] = r, t[3] = i, t[4] = l, t[5] = f, t[6] = p, t[7] = g) : g = t[7], g;
		}
		if (c && s) {
			var h;
			t[8] === Symbol.for("react.memo_cache_sentinel") ? (h = { className: "x78zum5 xs83m0k x6ikm8r x10wlt62 xmqja0k xh8yej3" }, t[8] = h) : h = t[8];
			var y;
			return t[9] !== n ? (y = u.jsx("div", babelHelpers.extends({}, h, { children: n })), t[9] = n, t[10] = y) : y = t[10], y;
		}
		return n;
	}
	function S(t) {
		var n = o("react-compiler-runtime").c(16), a = t.children, i = t.displayType, l = t.hasHqThumbnail, s = t.height, c = t.isCompose, d = t.width, m;
		n[0] !== s || n[1] !== d ? (m = C({
			height: s,
			highQuality: !0,
			width: d
		}), n[0] = s, n[1] = d, n[2] = m) : m = n[2];
		var p = m, _ = p < 1, f;
		n[3] !== i || n[4] !== c || n[5] !== _ ? (f = b({
			displayType: i,
			isCompose: c,
			isLandscape: _
		}), n[3] = i, n[4] = c, n[5] = _, n[6] = f) : f = n[6];
		var g = f, h = g * p, v;
		n[7] !== h ? (v = { height: h }, n[7] = h, n[8] = v) : v = n[8];
		var S = v, R;
		n[9] !== l || n[10] !== c ? (R = (e || (e = r("stylex")))([
			y.thumbnailContainer,
			!c && y.highQualityLayoutThumbnailContainer,
			!l && y.blurred
		]), n[9] = l, n[10] = c, n[11] = R) : R = n[11];
		var L;
		return n[12] !== a || n[13] !== S || n[14] !== R ? (L = u.jsx("div", {
			"data-testid": "high-quality-layout",
			className: R,
			style: S,
			children: a
		}), n[12] = a, n[13] = S, n[14] = R, n[15] = L) : L = n[15], L;
	}
	function R(t) {
		var n = o("react-compiler-runtime").c(12), a = t.children, i = t.hasHqThumbnail, l = t.height, s = t.width, d;
		n[0] !== l || n[1] !== s ? (d = C({
			height: l,
			width: s
		}), n[0] = l, n[1] = s, n[2] = d) : d = n[2];
		var m = d, p = c / m, _ = c / m, f;
		n[3] !== p || n[4] !== _ ? (f = {
			width: p,
			minWidth: _
		}, n[3] = p, n[4] = _, n[5] = f) : f = n[5];
		var g = f, h;
		n[6] !== i ? (h = (e || (e = r("stylex")))([y.thumbnailContainer, !i && y.blurred]), n[6] = i, n[7] = h) : h = n[7];
		var b;
		return n[8] !== a || n[9] !== g || n[10] !== h ? (b = u.jsx("div", {
			"data-testid": "standard-quality-layout",
			className: h,
			style: g,
			children: a
		}), n[8] = a, n[9] = g, n[10] = h, n[11] = b) : b = n[11], b;
	}
	l.default = v;
}), 98);
