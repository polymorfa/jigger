__d("WAWebMediaEditorFilmstripAttachMediaThumb.react", [
	"fbt",
	"WAWebAudioFileIcon.react",
	"WAWebClickable.react",
	"WAWebDocumentFileIcon",
	"WAWebKeyboardIsKeyActivation",
	"WAWebMediaEditorFilmstripThumbAriaLabel",
	"WAWebMimeTypes",
	"WAWebMsgType",
	"WAWebStateUtils",
	"WAWebXAltIcon.react",
	"react",
	"react-compiler-runtime",
	"useMergeRefs",
	"useWAWebHover",
	"useWAWebIsKeyboardUser",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useRef, _ = d.useState, f = {
		closeButton: {
			position: "x10l6tqk",
			top: "xnfr1j",
			insetInlineEnd: "x1h1655f",
			left: null,
			right: null,
			zIndex: "x16uhe5s",
			color: "x1u01il4",
			opacity: "xg01cxk",
			$$css: !0
		},
		closeButtonVisible: {
			opacity: "x1hc1fzr",
			$$css: !0
		}
	};
	function g(e) {
		var t = o("react-compiler-runtime").c(5), n = e.previewUrl, r, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = { className: "x1n2onr6 x13vifvy x1o0tod xhtitgo xvni27 xdd8jsf" }, a = { className: "xh8yej3 x5yr21d xl1xv1r x47corl" }, t[0] = r, t[1] = a) : (r = t[0], a = t[1]);
		var i;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		), t[2] = i) : i = t[2];
		var l;
		return t[3] !== n ? (l = c.jsx("div", babelHelpers.extends({}, r, { children: c.jsx("img", babelHelpers.extends({}, a, {
			src: n,
			alt: i
		})) })), t[3] = n, t[4] = l) : l = t[4], l;
	}
	function h(e) {
		var t, n = o("react-compiler-runtime").c(12), a = e.attachMedia, i;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (i = [
			"mimetype",
			"preview",
			"type",
			"fullPreview",
			"fullPreviewSize",
			"documentPageCount",
			"fileExt"
		], n[0] = i) : i = n[0];
		var l = o("useWAWebModelValues").useModelValues(a, i);
		if (l.type === o("WAWebMsgType").MSG_TYPE.IMAGE) {
			var s;
			return n[1] !== l.preview ? (s = c.jsx(g, { previewUrl: l.preview }), n[1] = l.preview, n[2] = s) : s = n[2], s;
		} else if (l.type === o("WAWebMsgType").MSG_TYPE.VIDEO) {
			var u = "data:image/jpeg;base64," + l.preview, d;
			return n[3] !== u ? (d = c.jsx(g, { previewUrl: u }), n[3] = u, n[4] = d) : d = n[4], d;
		} else if (o("WAWebMimeTypes").previewType(l.mimetype) === "pdf") {
			var m = l.fullPreview && l.fullPreviewSize && l.documentPageCount != null && l.documentPageCount > 0;
			if (m) {
				var p;
				return n[5] !== l.fullPreview ? (p = c.jsx(g, { previewUrl: l.fullPreview }), n[5] = l.fullPreview, n[6] = p) : p = n[6], p;
			}
		}
		if (l.type === o("WAWebMsgType").MSG_TYPE.AUDIO) {
			var _;
			return n[7] === Symbol.for("react.memo_cache_sentinel") ? (_ = c.jsx("div", {
				className: "x1n2onr6 x13vifvy x1o0tod xhtitgo xvni27 xdd8jsf",
				children: c.jsx(o("WAWebAudioFileIcon.react").AudioFileIcon, {})
			}), n[7] = _) : _ = n[7], _;
		}
		var f;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (f = { className: "x1n2onr6 x13vifvy x1o0tod xhtitgo xvni27 xdd8jsf xiy17q3 x1lvsgvq x1eerg3b x78zum5 xl56j7k x6s0dn4" }, n[8] = f) : f = n[8];
		var h = (t = l.fileExt) != null ? t : "", y;
		return n[9] !== l.mimetype || n[10] !== h ? (y = c.jsx("div", babelHelpers.extends({}, f, { children: c.jsx(r("WAWebDocumentFileIcon"), {
			width: 26,
			mimeType: l.mimetype,
			ext: h
		}) })), n[9] = l.mimetype, n[10] = h, n[11] = y) : y = n[11], y;
	}
	function y(t) {
		var n = o("react-compiler-runtime").c(48), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, u = l.attachMedia, d = l.index, m = l.onClick, g = l.onClose, y = l.totalCount, b;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (b = ["originalFilename"], n[3] = b) : b = n[3];
		var v = o("useWAWebModelValues").useModelValues(u, b), S = v.originalFilename, R = r("useWAWebIsKeyboardUser")(), L = R.isKeyboardUser, E = p(null), k = o("useWAWebHover").useWAWebHover(E), I = r("useMergeRefs")(i, E), T = _(!1), D = T[0], x = T[1], $;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? ($ = function() {
			return x(!0);
		}, n[4] = $) : $ = n[4];
		var P = $, N;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (N = function(t) {
			E.current != null && t.relatedTarget instanceof Node && E.current.contains(t.relatedTarget) || x(!1);
		}, n[5] = N) : N = n[5];
		var M = N, w = k || L && D, A;
		n[6] !== u || n[7] !== m ? (A = function(t) {
			m(o("WAWebStateUtils").unproxy(u), t);
		}, n[6] = u, n[7] = m, n[8] = A) : A = n[8];
		var F = A, O = C, B;
		n[9] !== F ? (B = function(t) {
			t.target === t.currentTarget && r("WAWebKeyboardIsKeyActivation")(t) && (t.stopPropagation(), t.preventDefault(), F(t));
		}, n[9] = F, n[10] = B) : B = n[10];
		var W = B, q;
		n[11] !== u || n[12] !== g ? (q = function(t) {
			t.stopPropagation(), t.preventDefault(), g(o("WAWebStateUtils").unproxy(u), t);
		}, n[11] = u, n[12] = g, n[13] = q) : q = n[13];
		var U = q, V;
		n[14] !== a.active ? (V = {
			0: { className: "x1n2onr6 xupqr0c x9f619 x1rg5ohu x1c4vz4f x2lah0s xdl72j9 x1xmf6yo xyorhqc xpcyujq xf6vk7d x6ikm8r x10wlt62 xxymvpz x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xd2d216 x18rkx93 x1xqxb9d x1muwwg7 x13t61ll x1kchd1x x1u0fnx4 xbxn0j6 x1277o0a" },
			1: { className: "x1n2onr6 xupqr0c x9f619 x1rg5ohu x1c4vz4f x2lah0s xdl72j9 x6ikm8r x10wlt62 xxymvpz x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x13t61ll x1kchd1x x1u0fnx4 xbxn0j6 x1277o0a x1k70j0n x1e56ztr x7phf20 x1p8j9ns xmn4e3e x1if355w x2x41l1 xct1zlm x1whkhu0 x3emv5x x1ydeqjr xyg86qh" }
		}[!!a.active << 0], n[14] = a.active, n[15] = V) : V = n[15];
		var H;
		n[16] !== u.isGif || n[17] !== u.type || n[18] !== d || n[19] !== S || n[20] !== y ? (H = o("WAWebMediaEditorFilmstripThumbAriaLabel").getThumbAriaLabel({
			filename: S,
			index: d,
			isGif: u.isGif,
			totalCount: y,
			type: u.type
		}), n[16] = u.isGif, n[17] = u.type, n[18] = d, n[19] = S, n[20] = y, n[21] = H) : H = n[21];
		var G = a.active, z;
		n[22] !== w ? (z = {
			0: { className: "x10l6tqk x13vifvy x1o0tod xtijo5x x1ey2m1c x1honnu5 xg01cxk x1vq37if x47corl x1pb5qga" },
			1: { className: "x10l6tqk x13vifvy x1o0tod xtijo5x x1ey2m1c x1honnu5 x1vq37if x47corl x1pb5qga x1hc1fzr" }
		}[!!w << 0], n[22] = w, n[23] = z) : z = n[23];
		var j;
		n[24] !== z ? (j = c.jsx("div", babelHelpers.extends({}, z)), n[24] = z, n[25] = j) : j = n[25];
		var K;
		n[26] === Symbol.for("react.memo_cache_sentinel") ? (K = s._(
			/*BTDS*/
			""
		), n[26] = K) : K = n[26];
		var Q = w && f.closeButtonVisible, X;
		n[27] !== Q ? (X = [f.closeButton, Q], n[27] = Q, n[28] = X) : X = n[28];
		var Y;
		n[29] === Symbol.for("react.memo_cache_sentinel") ? (Y = c.jsx(o("WAWebXAltIcon.react").XAltIcon, {}), n[29] = Y) : Y = n[29];
		var J;
		n[30] !== U || n[31] !== X ? (J = c.jsx(o("WAWebClickable.react").Clickable, {
			onClick: U,
			ariaLabel: K,
			xstyle: X,
			children: Y
		}), n[30] = U, n[31] = X, n[32] = J) : J = n[32];
		var Z;
		n[33] === Symbol.for("react.memo_cache_sentinel") ? (Z = { className: "x6ikm8r x10wlt62 x1280gxy" }, n[33] = Z) : Z = n[33];
		var ee;
		n[34] !== u ? (ee = c.jsx("div", babelHelpers.extends({}, Z, { children: c.jsx(h, { attachMedia: u }) })), n[34] = u, n[35] = ee) : ee = n[35];
		var te;
		return n[36] !== F || n[37] !== W || n[38] !== d || n[39] !== I || n[40] !== a.active || n[41] !== j || n[42] !== J || n[43] !== ee || n[44] !== V || n[45] !== H || n[46] !== y ? (te = c.jsxs("div", babelHelpers.extends({
			tabIndex: 0,
			role: "tab"
		}, V, {
			onClick: F,
			onKeyDown: O,
			onKeyPress: W,
			onFocus: P,
			onBlur: M,
			"aria-label": H,
			"aria-selected": G,
			"aria-posinset": d,
			"aria-setsize": y,
			ref: I,
			children: [
				j,
				J,
				ee
			]
		})), n[36] = F, n[37] = W, n[38] = d, n[39] = I, n[40] = a.active, n[41] = j, n[42] = J, n[43] = ee, n[44] = V, n[45] = H, n[46] = y, n[47] = te) : te = n[47], te;
	}
	function C(e) {
		e.target !== e.currentTarget && r("WAWebKeyboardIsKeyActivation")(e) && e.stopPropagation();
	}
	l.default = y;
}), 226);
