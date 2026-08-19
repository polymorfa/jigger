__d("WAWebAlbumMessageComponent.react", [
	"WAWebDisplayType",
	"WAWebElevatedPushNamesFlag",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebMediaAlbumGrid.react",
	"WAWebMediaAlbumGridConstants",
	"WAWebMessageAuthor.react",
	"WAWebMessageCaption.react",
	"WAWebMessageForwardedIndicator.react",
	"WAWebMessageListAlbums",
	"WAWebMessageMeta.react",
	"WAWebMsgModelPropUtils",
	"WAWebMsgSelectors",
	"WAWebTypesMedia",
	"WDSPaddings.stylex",
	"compactMap",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useMemo, d = {
		paddingTop3: {
			paddingTop: "xyqdw3p",
			$$css: !0
		},
		paddingBottom5: {
			paddingBottom: "xs9asl8",
			$$css: !0
		},
		paddingInlineStart6: {
			paddingInlineStart: "x25sj25",
			$$css: !0
		},
		paddingBlock3: {
			paddingTop: "xyqdw3p",
			paddingBottom: "xg8j3zb",
			$$css: !0
		},
		paddingInline3: {
			paddingInlineStart: "x1djpfga",
			paddingInlineEnd: "x1im30kd",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	}, m = { metaWithCaption: {
		bottom: "xy1j3rs",
		position: "x10l6tqk",
		insetInlineEnd: "x11dcrhx",
		left: null,
		right: null,
		zIndex: "xhtitgo",
		$$css: !0
	} };
	function p(t) {
		var n = o("react-compiler-runtime").c(61), a = t.associatedMessages, i = t.chat, l = t.displayAuthor, s = t.displayType, c = t.isMsgVisible, p = t.msg, g = t.quotedMsg, h = t.trusted, y;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (y = [o("WAWebFrontendMsgGetters").getSenderObj], n[0] = y) : y = n[0];
		var C = o("useWAWebMsgValues").useMsgValues(p.id, y), b = C[0], v, S;
		n[1] !== i || n[2] !== l || n[3] !== s || n[4] !== p || n[5] !== b ? (v = o("WAWebMsgSelectors").showForwarded(p), S = l ? u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.paddingTop3, d.paddingBottom5, d.paddingInlineStart6, v && o("WDSPaddings.stylex").wdsPaddings.paddingBottom0, o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(i) && o("WDSPaddings.stylex").wdsPaddings.paddingEnd4), { children: u.jsx(r("WAWebMessageAuthor.react"), {
			msg: p,
			contact: b,
			displayType: s
		}) })) : null, n[1] = i, n[2] = l, n[3] = s, n[4] = p, n[5] = b, n[6] = v, n[7] = S) : (v = n[6], S = n[7]);
		var R = S, L;
		n[8] !== l || n[9] !== p || n[10] !== v ? (L = v ? u.jsx(r("WAWebMessageForwardedIndicator.react"), {
			msg: p.unsafe(),
			xstyle: [
				d.paddingBlock3,
				o("WDSPaddings.stylex").wdsPaddings.paddingEnd0,
				d.paddingInlineStart6,
				l && o("WDSPaddings.stylex").wdsPaddings.paddingTop0
			]
		}) : null, n[8] = l, n[9] = p, n[10] = v, n[11] = L) : L = n[11];
		var E = L, k, I, T, D, x, $, P, N, M, w;
		if (n[12] !== a || n[13] !== R || n[14] !== s || n[15] !== E || n[16] !== g || n[17] !== h) {
			var A = o("WAWebDisplayType").isWideDisplay(s), F;
			n[28] !== a ? (F = r("compactMap")(a, f), n[28] = a, n[29] = F) : F = n[29], I = F;
			var O = I.find(_);
			k = O != null ? u.jsx("div", babelHelpers.extends({}, {
				0: { className: "x9f619 x1xtabgy xm7lytj x1icxu4v xs9asl8 x25sj25" },
				1: { className: "x9f619 xm7lytj x1icxu4v xs9asl8 x25sj25 xno0opx" }
			}[!!A << 0], { children: u.jsx(r("WAWebMessageCaption.react"), {
				msg: O.unsafe(),
				trusted: h && o("WAWebMsgModelPropUtils").isTrusted(O.unsafe()),
				spacer: !0,
				testId: "album-caption"
			}) })) : null, T = I.length > o("WAWebMessageListAlbums").ALBUM_MIN_SIZE ? I.length - o("WAWebMessageListAlbums").ALBUM_MIN_SIZE + 1 : null, w = I.length > o("WAWebMessageListAlbums").ALBUM_MIN_SIZE ? I[0] : null;
			var B;
			n[30] !== g ? (B = g ? u.jsx("div", {
				className: "xahult9",
				children: g
			}) : null, n[30] = g, n[31] = B) : B = n[31];
			var W = B;
			x = {
				0: { className: "xyqdw3p x1im30kd xg8j3zb x1djpfga xgf70vc" },
				1: { className: "xyqdw3p x1im30kd xg8j3zb x1djpfga xm28ga1" }
			}[!!A << 0], $ = "media-album", P = R, N = E, M = W, D = {
				0: { className: "xgf70vc x1k3r3g5 x6ikm8r x10wlt62 xrvj5dj xn2kgx5" },
				1: { className: "x6ikm8r x10wlt62 xrvj5dj xn2kgx5 xm28ga1 x1uaihgu" }
			}[!!A << 0], n[12] = a, n[13] = R, n[14] = s, n[15] = E, n[16] = g, n[17] = h, n[18] = k, n[19] = I, n[20] = T, n[21] = D, n[22] = x, n[23] = $, n[24] = P, n[25] = N, n[26] = M, n[27] = w;
		} else k = n[18], I = n[19], T = n[20], D = n[21], x = n[22], $ = n[23], P = n[24], N = n[25], M = n[26], w = n[27];
		var q;
		n[32] !== s || n[33] !== c || n[34] !== I || n[35] !== T || n[36] !== w ? (q = I.slice(0, o("WAWebMediaAlbumGridConstants").ALBUM_GRID_MAX_THUMBNAIL).map(function(e, t) {
			var n = t === o("WAWebMediaAlbumGridConstants").ALBUM_GRID_MAX_THUMBNAIL - 1 ? {
				numAdditionalMedia: T,
				zoomMsg: w
			} : null;
			return u.jsx(r("WAWebMediaAlbumGrid.react"), babelHelpers.extends({
				msg: e,
				albumMsgs: I,
				currentAlbumMessageIndex: t,
				albumPosition: o("WAWebMediaAlbumGridConstants").ALBUM_GRID_POSITIONS[t % o("WAWebMediaAlbumGridConstants").ALBUM_GRID_MAX_THUMBNAIL],
				isMsgVisible: c,
				displayType: s,
				albumTheme: o("WAWebTypesMedia").DisplayTheme.AlbumV2
			}, n), e.id.toString());
		}), n[32] = s, n[33] = c, n[34] = I, n[35] = T, n[36] = w, n[37] = q) : q = n[37];
		var U;
		n[38] !== q || n[39] !== D ? (U = u.jsx("div", babelHelpers.extends({}, D, { children: q })), n[38] = q, n[39] = D, n[40] = U) : U = n[40];
		var V = k && m.metaWithCaption, H;
		n[41] !== k ? (H = !k && [d.paddingInline3, d.paddingTop3], n[41] = k, n[42] = H) : H = n[42];
		var G;
		n[43] !== V || n[44] !== H ? (G = [V, H], n[43] = V, n[44] = H, n[45] = G) : G = n[45];
		var z;
		n[46] !== a || n[47] !== p ? (z = u.jsx(o("WAWebMessageMeta.react").Meta, {
			msg: p,
			associatedMessages: a
		}), n[46] = a, n[47] = p, n[48] = z) : z = n[48];
		var j;
		n[49] !== G || n[50] !== z ? (j = u.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "end",
			xstyle: G,
			children: z
		}), n[49] = G, n[50] = z, n[51] = j) : j = n[51];
		var K;
		return n[52] !== k || n[53] !== U || n[54] !== j || n[55] !== x || n[56] !== $ || n[57] !== P || n[58] !== N || n[59] !== M ? (K = u.jsxs("div", babelHelpers.extends({}, x, {
			"data-testid": $,
			children: [
				P,
				N,
				M,
				U,
				k,
				j
			]
		})), n[52] = k, n[53] = U, n[54] = j, n[55] = x, n[56] = $, n[57] = P, n[58] = N, n[59] = M, n[60] = K) : K = n[60], K;
	}
	function _(e) {
		var t = e.caption;
		return t != null;
	}
	function f(e) {
		return o("WAWebFrontendMsgGetters").getAsAlbumAsset(e.unsafe());
	}
	l.default = p;
}), 98);
