__d("WAWebMediaVideoLinkPreview.react", [
	"fbt",
	"WAWebABProps",
	"WAWebClientFeatureFlags",
	"WAWebEmojiText.react",
	"WAWebExternalLink.react",
	"WAWebMediaLinkPreviewUtils",
	"WAWebMediaStateControls.react",
	"WAWebMsgGetters",
	"WAWebPipAttributionIcon",
	"WAWebPipConst",
	"WAWebPipController",
	"WAWebPipOverlay.react",
	"WAWebStateUtils",
	"WAWebURLUtils",
	"WAWebUnstyledButton.react",
	"WAWebUtilsYoutubeUrlParser",
	"WAWebVideoPipLargeIcon.react",
	"err",
	"isStringNullOrEmpty",
	"react",
	"react-compiler-runtime",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useRef, m = c.useState, p = { thumbnailWrapper: {
		position: "x1n2onr6",
		display: "x78zum5",
		alignItems: "x6s0dn4",
		justifyContent: "xl56j7k",
		width: "xh8yej3",
		maxHeight: "x1wtasar",
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		boxSizing: "x9f619",
		borderStartStartRadius: "xyi3aci",
		borderStartEndRadius: "xwf5gio",
		borderEndEndRadius: "x1p453bz",
		borderEndStartRadius: "x1suzm8a",
		borderTopWidth: "xl8et2f",
		borderInlineEndWidth: "xuc0g9m",
		borderBottomWidth: "x1dmim90",
		borderInlineStartWidth: "xs4xcjr",
		borderTopStyle: "x13fuv20",
		borderInlineEndStyle: "x18b5jzi",
		borderBottomStyle: "x1q0q8m5",
		borderInlineStartStyle: "x1t7ytsu",
		borderTopColor: "x1v8p93f x1878o1q",
		borderInlineEndColor: "x1o3jo1z xf2y0h5",
		borderBottomColor: "x16stqrj xnv9r3m",
		borderInlineStartColor: "xv5lvn5 xo81p9n",
		$$css: !0
	} }, _ = {
		PREVIEW: "PREVIEW",
		FLOATER: "FLOATER"
	}, f = [
		o("WAWebPipConst").HOSTNAME.YOUTUBE,
		o("WAWebPipConst").HOSTNAME.YOUTUBE_MOBILE,
		o("WAWebPipConst").HOSTNAME.YOUTUBE_SHORTENED
	];
	function g(e) {
		return f.includes(e);
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(2), n = e.Icon, r;
		return t[0] !== n ? (r = u.jsx(n, {}), t[0] = n, t[1] = r) : r = t[1], r;
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(86), n = e.msg, a = d(null), i;
		t[0] !== n ? (i = function() {
			return r("WAWebPipController").isOpened(o("WAWebStateUtils").unproxy(n)) ? _.FLOATER : _.PREVIEW;
		}, t[0] = n, t[1] = i) : i = t[1];
		var l = m(i), c = l[0], f = l[1], y;
		t[2] !== c ? (y = function() {
			c !== _.FLOATER && f(_.FLOATER);
		}, t[2] = c, t[3] = y) : y = t[3];
		var b = y, v;
		t[4] !== c ? (v = function() {
			c !== _.PREVIEW && f(_.PREVIEW);
		}, t[4] = c, t[5] = v) : v = t[5];
		var S = v, R;
		t[6] !== n.id ? (R = n.id.toString(), t[6] = n.id, t[7] = R) : R = t[7], o("useWAWebListener").useListener(r("WAWebPipController"), R + "_pip_did_open", b);
		var L;
		t[8] !== n.id ? (L = n.id.toString(), t[8] = n.id, t[9] = L) : L = t[9], o("useWAWebListener").useListener(r("WAWebPipController"), L + "_pip_did_close", S);
		var E;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (E = function() {
			return a.current ? a.current.getBoundingClientRect() : null;
		}, t[10] = E) : E = t[10];
		var k = E, I = C, T;
		t[11] !== n.description ? (T = r("isStringNullOrEmpty")(n.description) ? null : u.jsx("div", {
			className: "x1c4vz4f x7f0hsc xdl72j9 x6ikm8r x10wlt62 x1pg5gke xhslqc4",
			title: n.description,
			children: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: n.description })
		}), t[11] = n.description, t[12] = T) : T = t[12];
		var D = T, x, $;
		t[13] !== e.msg.matchedText ? (x = r("WAWebURLUtils").hostname(e.msg.matchedText), $ = r("WAWebURLUtils").withoutWww(x), t[13] = e.msg.matchedText, t[14] = x, t[15] = $) : (x = t[14], $ = t[15]), x = $, x === o("WAWebPipConst").HOSTNAME.YOUTUBE_SHORTENED && (x = o("WAWebPipConst").HOSTNAME.YOUTUBE);
		var P;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (P = { className: "x4p5aij x1pg5gke xhslqc4" }, t[16] = P) : P = t[16];
		var N;
		t[17] !== x ? (N = u.jsx("div", babelHelpers.extends({}, P, { children: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: x }) })), t[17] = x, t[18] = N) : N = t[18];
		var M = N, w;
		t[19] !== e.msg.thumbnail ? (w = {
			0: "x9f619 x78zum5 xdt5ytf xl56j7k xh8yej3 x1upyj8d x1yrsyyn x2vl965 x10b6aqq xe2zdcy x6ikm8r x10wlt62 x17fgdl5",
			1: "x9f619 x78zum5 xdt5ytf xl56j7k xh8yej3 x1upyj8d x1yrsyyn x2vl965 x10b6aqq xe2zdcy x6ikm8r x10wlt62 x17fgdl5 x193iq5w"
		}[!e.msg.thumbnail << 0], t[19] = e.msg.thumbnail, t[20] = w) : w = t[20];
		var A = w, F;
		t[21] !== n.t ? (F = o("WAWebMediaLinkPreviewUtils").hqLinkPreviewExpired(n.t), t[21] = n.t, t[22] = F) : F = t[22];
		var O = F, B = !O && e.msg.thumbnailHQ ? e.msg.thumbnailHQ : e.msg.thumbnail, W;
		t[23] !== x ? (W = (x === o("WAWebPipConst").HOSTNAME.YOUTUBE || x === o("WAWebPipConst").HOSTNAME.YOUTUBE_MOBILE) && o("WAWebABProps").getABPropConfigValue("youtube_inline_playback_killswitch"), t[23] = x, t[24] = W) : W = t[24];
		var q = W, U;
		if (c === _.PREVIEW) e: switch (x) {
			case o("WAWebPipConst").HOSTNAME.YOUTUBE:
			case o("WAWebPipConst").HOSTNAME.YOUTUBE_MOBILE: {
				if (q) {
					var V;
					t[25] !== e.msg.matchedText ? (V = function(n) {
						n && n.stopPropagation(), o("WAWebExternalLink.react").openExternalLink(e.msg.matchedText);
					}, t[25] = e.msg.matchedText, t[26] = V) : V = t[26], U = V;
					break e;
				}
				var H, G;
				if (t[27] !== e.msg.matchedText ? (G = o("WAWebUtilsYoutubeUrlParser").parseYoutubeVideoId(e.msg.matchedText), H = r("isStringNullOrEmpty")(G), t[27] = e.msg.matchedText, t[28] = H, t[29] = G) : (H = t[28], G = t[29]), !H) {
					var z;
					t[30] !== e.msg.matchedText ? (z = I(e.msg.matchedText), t[30] = e.msg.matchedText, t[31] = z) : z = t[31];
					var j = z, K;
					t[32] !== e.msg || t[33] !== G || t[34] !== j ? (K = function(n) {
						n && n.stopPropagation(), r("WAWebPipController").openYoutubePiP(G, e.msg, j, k());
					}, t[32] = e.msg, t[33] = G, t[34] = j, t[35] = K) : K = t[35], U = K;
				}
				break e;
			}
			case o("WAWebPipConst").HOSTNAME.INSTAGRAM:
			case o("WAWebPipConst").HOSTNAME.STREAMABLE:
			case o("WAWebPipConst").HOSTNAME.FACEBOOK:
			case o("WAWebPipConst").HOSTNAME.FBWATCH:
			case o("WAWebPipConst").HOSTNAME.FBWATCH_ALT:
			case o("WAWebPipConst").HOSTNAME.SHARECHAT: {
				var Q;
				t[36] !== e.msg || t[37] !== B ? (Q = function(n) {
					throw r("WAWebPipController").openOgVideoPiP("", B, e.msg, 0, k()), r("err")("This call is not supported");
				}, t[36] = e.msg, t[37] = B, t[38] = Q) : Q = t[38], U = Q;
				break e;
			}
			default: return null;
		}
		var X;
		t[39] !== e.msg ? (X = {
			0: "x6ikm8r x10wlt62 x1wl59ut x1fc57z9 x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1bu39yj",
			1: "x6ikm8r x10wlt62 x1wl59ut x1fc57z9 x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1bu39yj"
		}[!!o("WAWebMsgGetters").getIsSentByMe(e.msg) << 0], t[39] = e.msg, t[40] = X) : X = t[40];
		var Y = X, J;
		t[41] !== c || t[42] !== q ? (J = c === _.PREVIEW && !q ? u.jsx("div", {
			className: "x10l6tqk x13vifvy x1o0tod x1ja2u2z xh8yej3 x5yr21d x1ypdohk",
			children: u.jsx(o("WAWebMediaStateControls.react").Play, {})
		}) : null, t[41] = c, t[42] = q, t[43] = J) : J = t[43];
		var Z = J, ee;
		t[44] !== c ? (ee = c === _.FLOATER ? u.jsx(r("WAWebPipOverlay.react"), {
			icon: u.jsx(o("WAWebVideoPipLargeIcon.react").VideoPipLargeIcon, {}),
			children: s._(
				/*BTDS*/
				""
			)
		}) : null, t[44] = c, t[45] = ee) : ee = t[45];
		var te = ee, ne, re;
		if (B && Object.values(o("WAWebPipConst").HOSTNAME).includes(x)) {
			var oe, ae;
			if (t[46] !== x || t[47] !== O || t[48] !== e.msg.thumbnailHQ) {
				var ie = g(x);
				oe = "", ae = {
					0: { className: "x1n2onr6 xjibb99 x3v4nfg x1h1h5sg x1ypdohk x1df5jli" },
					2: { className: "x1n2onr6 xjibb99 x3v4nfg x1h1h5sg x1ypdohk x1df5jli x1a842fp xl1xv1r" },
					1: { className: "x1n2onr6 xjibb99 x3v4nfg x1h1h5sg x1ypdohk xkcp37y" },
					3: { className: "x1n2onr6 xjibb99 x3v4nfg x1h1h5sg x1ypdohk x1a842fp xl1xv1r xkcp37y" }
				}[!!ie << 1 | !!(ie && o("WAWebClientFeatureFlags").isFeatureEnabled("youtube_video_preview_without_blur") || !O && e.msg.thumbnailHQ) << 0], t[46] = x, t[47] = O, t[48] = e.msg.thumbnailHQ, t[49] = oe, t[50] = ae;
			} else oe = t[49], ae = t[50];
			var le = "data:image/jpeg;base64," + B, se;
			t[51] !== oe || t[52] !== ae || t[53] !== le ? (se = u.jsx("img", babelHelpers.extends({ alt: oe }, ae, { src: le })), t[51] = oe, t[52] = ae, t[53] = le, t[54] = se) : se = t[54], ne = se;
			var ue;
			t[55] !== x ? (ue = o("WAWebPipAttributionIcon").getAttributionIcon(x), t[55] = x, t[56] = ue) : ue = t[56];
			var ce = ue;
			if (ce) {
				var de;
				t[57] === Symbol.for("react.memo_cache_sentinel") ? (de = { className: "x10l6tqk x1bv8kjd x1jn9clo x1vjfegm" }, t[57] = de) : de = t[57];
				var me;
				t[58] !== ce ? (me = u.jsx("div", babelHelpers.extends({}, de, { children: u.jsx(h, { Icon: ce }) })), t[58] = ce, t[59] = me) : me = t[59], re = me;
			}
		} else {
			var pe;
			t[60] === Symbol.for("react.memo_cache_sentinel") ? (pe = u.jsx("div", { className: "x1n2onr6 xh8yej3 xnjobev x8du59y" }), t[60] = pe) : pe = t[60], ne = pe;
		}
		var _e;
		t[61] !== q ? (_e = q ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[61] = q, t[62] = _e) : _e = t[62];
		var fe;
		t[63] !== re || t[64] !== U || t[65] !== Z || t[66] !== te || t[67] !== _e || t[68] !== ne ? (fe = u.jsxs(r("WAWebUnstyledButton.react"), {
			tabIndex: 0,
			ref: a,
			xstyle: p.thumbnailWrapper,
			onClick: U,
			"aria-label": _e,
			children: [
				re,
				ne,
				Z,
				te
			]
		}), t[63] = re, t[64] = U, t[65] = Z, t[66] = te, t[67] = _e, t[68] = ne, t[69] = fe) : fe = t[69];
		var ge = e.msg.matchedText, he;
		t[70] === Symbol.for("react.memo_cache_sentinel") ? (he = { className: "x104kibb x1c4vz4f xs83m0k xdl72j9 x13m54ha x6ikm8r x10wlt62 x14ug900 xlyipyv x1h7i4cw x1ua5tub" }, t[70] = he) : he = t[70];
		var ye;
		t[71] !== e.msg.title ? (ye = u.jsx(o("WAWebEmojiText.react").EmojiText, { text: e.msg.title }), t[71] = e.msg.title, t[72] = ye) : ye = t[72];
		var Ce;
		t[73] !== e.msg.title || t[74] !== ye ? (Ce = u.jsx("div", babelHelpers.extends({}, he, {
			title: e.msg.title,
			children: ye
		})), t[73] = e.msg.title, t[74] = ye, t[75] = Ce) : Ce = t[75];
		var be;
		t[76] !== A || t[77] !== D || t[78] !== e.msg.matchedText || t[79] !== Ce || t[80] !== M ? (be = u.jsxs(o("WAWebExternalLink.react").ExternalLink, {
			className: A,
			href: ge,
			tabIndex: -1,
			children: [
				Ce,
				D,
				M
			]
		}), t[76] = A, t[77] = D, t[78] = e.msg.matchedText, t[79] = Ce, t[80] = M, t[81] = be) : be = t[81];
		var ve;
		return t[82] !== Y || t[83] !== fe || t[84] !== be ? (ve = u.jsxs("div", {
			className: Y,
			children: [fe, be]
		}), t[82] = Y, t[83] = fe, t[84] = be, t[85] = ve) : ve = t[85], ve;
	}
	function C(e) {
		var t = e.split("?");
		if (t.length !== 2) return 0;
		var n = t[1], a = new URLSearchParams(n).get(o("WAWebPipConst").YOUTUBE_URL_TIME_PARAM_NAME);
		if (r("isStringNullOrEmpty")(a)) return 0;
		var i = a.match(o("WAWebPipConst").YOUTUBE_URL_TIME_PARAM_PATTERN), l = 0;
		if (i != null && i.length) for (var s = 1; s < i.length; s++) {
			var u = i[s];
			if (u) {
				var c = parseInt(u, 10);
				if (Number.isNaN(c)) return 0;
				u.endsWith("h") && (l = l + c * 3600), u.endsWith("m") && (l = l + c * 60), u.endsWith("s") && (l = l + c), /^\d+$/.test(u) && (l = l + c);
			}
		}
		return l;
	}
	l.default = y;
}), 226);
