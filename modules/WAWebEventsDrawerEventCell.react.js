__d("WAWebEventsDrawerEventCell.react", [
	"fbt",
	"WAWebCastToEventCreationMsg",
	"WAWebCellV2.react",
	"WAWebEmojiText.react",
	"WAWebEventDateBlock.react",
	"WAWebEventsGatingUtils",
	"WAWebFormatEventDateString",
	"WAWebFrontendMsgGetters",
	"WAWebL10N",
	"WAWebMsgGetters",
	"WAWebProtobufsE2E.pb",
	"WAWebTag.react",
	"WAWebText.react",
	"WAWebUserPrefsMeUser",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"useWAWebEventResponses",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { marginBlock6: {
		marginTop: "x1k70j0n",
		marginBottom: "xzueoph",
		$$css: !0
	} }, d = {
		eventDetailText: {
			display: "x1rg5ohu",
			maxWidth: "x193iq5w",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			$$css: !0
		},
		statusTag: {
			fontSize: "x1nxh6w3",
			$$css: !0
		}
	};
	function m(e) {
		var t, n = o("react-compiler-runtime").c(46), a = e.chat, i = e.msg, l = e.onClick, m = e.passed, _ = m === void 0 ? !1 : m, f;
		if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
			var g;
			f = [
				(g = o("WAWebMsgGetters")).getEventName,
				g.getEventStartTime,
				g.getEventEndTime,
				g.getEventLocation,
				g.getIsEventCanceled,
				g.getIsSentByMe
			], n[0] = f;
		} else f = n[0];
		var h = o("useWAWebMsgValues").useMsgValues(i.id, r("WAWebCastToEventCreationMsg"), f), y = h[0], C = h[1], b = h[2], v = h[3], S = h[4], R = h[5], L = o("useWAWebEventResponses").useEventResponses(i), E = L.find(p), k;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (k = { className: "x2b8uid xamitd3" }, n[1] = k) : k = n[1];
		var I;
		n[2] !== C || n[3] !== _ ? (I = u.jsx("div", babelHelpers.extends({}, k, { children: u.jsx(r("WAWebEventDateBlock.react"), {
			eventStartTime: C,
			passed: _
		}) })), n[2] = C, n[3] = _, n[4] = I) : I = n[4];
		var T = I, D;
		if (n[5] !== y) {
			var x;
			D = y.slice(0, (x = o("WAWebEventsGatingUtils").getEventsNameLengthLimit()) != null ? x : 100), n[5] = y, n[6] = D;
		} else D = n[6];
		var $ = D, P;
		n[7] !== i ? (P = o("WAWebFrontendMsgGetters").getRtl(i), n[7] = i, n[8] = P) : P = n[8];
		var N;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (N = r("WAWebL10N").isRTL(), n[9] = N) : N = n[9];
		var M = P !== N, w;
		n[10] !== i ? (w = o("WAWebFrontendMsgGetters").getDir(i), n[10] = i, n[11] = w) : w = n[11];
		var A;
		n[12] !== M || n[13] !== w || n[14] !== $ ? (A = u.jsx(o("WAWebText.react").WAWebTextTitle, {
			xstyle: d.eventDetailText,
			children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: $,
				dirMismatch: M,
				direction: w,
				inferLinesDirection: !0,
				selectable: !0,
				ellipsify: !0
			})
		}), n[12] = M, n[13] = w, n[14] = $, n[15] = A) : A = n[15];
		var F = A, O = null, B = null;
		if (S === !0) {
			var W;
			n[16] === Symbol.for("react.memo_cache_sentinel") ? (W = s._(
				/*BTDS*/
				""
			), n[16] = W) : W = n[16], O = W, B = o("WAWebTag.react").TagTheme.Secondary;
		} else if (R) {
			var q;
			n[17] === Symbol.for("react.memo_cache_sentinel") ? (q = s._(
				/*BTDS*/
				""
			), n[17] = q) : q = n[17], O = q, B = o("WAWebTag.react").TagTheme.Primary;
		} else if ((E == null ? void 0 : E.eventResponse) === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING) {
			var U;
			n[18] === Symbol.for("react.memo_cache_sentinel") ? (U = s._(
				/*BTDS*/
				""
			), n[18] = U) : U = n[18], O = U, B = o("WAWebTag.react").TagTheme.Primary;
		} else if ((E == null ? void 0 : E.eventResponse) === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.MAYBE) {
			var V;
			n[19] === Symbol.for("react.memo_cache_sentinel") ? (V = s._(
				/*BTDS*/
				""
			), n[19] = V) : V = n[19], O = V, B = o("WAWebTag.react").TagTheme.Secondary;
		} else if ((E == null ? void 0 : E.eventResponse) === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.NOT_GOING) {
			var H;
			n[20] === Symbol.for("react.memo_cache_sentinel") ? (H = s._(
				/*BTDS*/
				""
			), n[20] = H) : H = n[20], O = H, B = o("WAWebTag.react").TagTheme.Error;
		} else if ((E == null ? void 0 : E.eventResponse) == null || (E == null ? void 0 : E.eventResponse) === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.UNKNOWN) {
			var G;
			n[21] === Symbol.for("react.memo_cache_sentinel") ? (G = s._(
				/*BTDS*/
				""
			), n[21] = G) : G = n[21], O = G, B = o("WAWebTag.react").TagTheme.Secondary;
		}
		var z;
		n[22] !== O || n[23] !== i.id || n[24] !== B ? (z = O && B ? u.jsx(o("WAWebTag.react").Tag, {
			theme: B,
			testid: "event-tag-" + i.id.id,
			xstyle: [
				d.statusTag,
				o("WDSPaddings.stylex").wdsPaddings.paddingVer4,
				o("WDSPaddings.stylex").wdsPaddings.paddingHor8
			],
			children: s._(
				/*BTDS*/
				"",
				[s._param("eventStatusText", O)]
			)
		}) : null, n[22] = O, n[23] = i.id, n[24] = B, n[25] = z) : z = n[25];
		var j = z, K;
		n[26] !== b || n[27] !== C ? (K = o("WAWebFormatEventDateString").getEventDateStringFor(C, b), n[26] = b, n[27] = C, n[28] = K) : K = n[28];
		var Q = K, X;
		n[29] !== Q || n[30] !== C ? (X = C != null ? u.jsx(o("WAWebText.react").WAWebTextMuted, {
			xstyle: d.eventDetailText,
			children: s._(
				/*BTDS*/
				"",
				[s._param("Event-datetime-string", Q)]
			)
		}) : null, n[29] = Q, n[30] = C, n[31] = X) : X = n[31];
		var Y = X, J = (t = v == null ? void 0 : v.name) != null ? t : v == null ? void 0 : v.address, Z;
		n[32] !== J ? (Z = J != null ? u.jsx(o("WAWebText.react").WAWebTextMuted, {
			xstyle: d.eventDetailText,
			children: s._(
				/*BTDS*/
				"",
				[s._param("event-location", J)]
			)
		}) : null, n[32] = J, n[33] = Z) : Z = n[33];
		var ee = Z, te;
		n[34] === Symbol.for("react.memo_cache_sentinel") ? (te = [c.marginBlock6, o("WDSMargins.stylex").wdsMargins.marginHor4], n[34] = te) : te = n[34];
		var ne;
		n[35] !== a || n[36] !== i || n[37] !== l ? (ne = function() {
			return l(i, a);
		}, n[35] = a, n[36] = i, n[37] = l, n[38] = ne) : ne = n[38];
		var re;
		return n[39] !== T || n[40] !== j || n[41] !== F || n[42] !== Y || n[43] !== ee || n[44] !== ne ? (re = u.jsx(r("WAWebCellV2.react"), {
			containerXStyle: te,
			detailLeft: T,
			detailTop: F,
			primary: Y,
			detailRight: j,
			secondary: ee,
			alignPrimary: "start",
			size: "medium",
			onClick: ne
		}), n[39] = T, n[40] = j, n[41] = F, n[42] = Y, n[43] = ee, n[44] = ne, n[45] = re) : re = n[45], re;
	}
	function p(e) {
		return o("WAWebUserPrefsMeUser").isMeAccount(e.sender);
	}
	l.default = m;
}), 226);
