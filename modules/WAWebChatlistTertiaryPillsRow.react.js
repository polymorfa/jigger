__d("WAWebChatlistTertiaryPillsRow.react", [
	"fbt",
	"WAWebBizAiAgentStatusUtils",
	"WAWebChatListPillUtils",
	"WAWebChatlistAiStatusKind",
	"WAWebChatlistPillOverflow",
	"WAWebChatlistTertiaryPillsLogEvents",
	"WAWebEmojiText.react",
	"WAWebLabelPillColors",
	"WAWebProtobufsE2E.pb",
	"WAWebThemeContext",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebChatPreviewState"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useLayoutEffect, f = d.useState, g = 38, h = "11px", y = 400, C = "0.5px", b = "11px", v = "13px", S = 500, R = "18px", L = 4, E = {
		display: "x3nfvp2",
		alignItems: "x6s0dn4",
		height: "xmix8c7",
		boxSizing: "x9f619",
		paddingLeft: "x11iknt3",
		paddingRight: "x1nx2rwh",
		paddingInlineStart: "",
		paddingInlineEnd: "",
		paddingTop: "xyqdw3p",
		paddingBottom: "x1nbhmlj",
		rowGap: "x129bwdz",
		columnGap: "x1trrmfo",
		borderStartStartRadius: "xbrszos",
		borderStartEndRadius: "xea3l6g",
		borderEndEndRadius: "x18isctg",
		borderEndStartRadius: "x2q3nzr",
		flexShrink: "x2lah0s",
		fontSize: "x1ncwhqj",
		fontWeight: "xo1l8bm",
		textTransform: "xtvhhri",
		fontVariant: "x1j8cyr6",
		letterSpacing: "xbac8wx",
		whiteSpace: "xuxw1ft",
		maxWidth: "xzfcrpp",
		lineHeight: "x1b1uo88",
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		$$css: !0
	}, k = {
		pill: function(t, n) {
			return [
				E,
				{
					backgroundColor: t != null ? "xl8spv7" : t,
					color: n != null ? "x14rh7hd" : n,
					$$css: !0
				},
				{
					"--x-backgroundColor": t != null ? t : void 0,
					"--x-color": n != null ? n : void 0
				}
			];
		},
		aiPill: {
			maxWidth: "x1x1rfll",
			$$css: !0
		},
		pillEmojiTextWeight: {
			fontWeight: "xo1l8bm",
			$$css: !0
		},
		pillEmoji: {
			transform: "xst6bnn",
			transformOrigin: "x1g0ag68",
			display: "x1rg5ohu",
			verticalAlign: "x16dsc37",
			marginTop: "x1rdy4ex",
			marginBottom: "x4vbgl9",
			marginInlineStart: "x165d6jo",
			marginInlineEnd: "x1lxpwgx",
			marginLeft: null,
			marginRight: null,
			$$css: !0
		}
	};
	function I(e) {
		var t = o("react-compiler-runtime").c(12), n = f(null), r = n[0], a = n[1], i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = function(t) {
			a(t);
		}, t[0] = i) : i = t[0];
		var l = i, s = f(o("WAWebChatlistPillOverflow").EMPTY_RESULT), u = s[0], c = s[1], d = f(0), m = d[0], p = d[1], h = f(0), y = h[0], C = h[1], b = f(0), v = b[0], S = b[1], R = f(0), E = R[0], k = R[1], I = u.hiddenCount > 0;
		e !== m && (p(e), I && c(o("WAWebChatlistPillOverflow").EMPTY_RESULT), k(D)), Math.abs(v - y) > .5 && (C(v), I && c(o("WAWebChatlistPillOverflow").EMPTY_RESULT), k(T));
		var x, $;
		t[1] !== r ? (x = function() {
			if (r != null) {
				var e = new ResizeObserver(function(e) {
					var t, n, r = (t = (n = e[0]) == null ? void 0 : n.contentRect.width) != null ? t : 0;
					S(r);
				});
				return e.observe(r), (function() {
					e.disconnect();
				});
			}
		}, $ = [r], t[1] = r, t[2] = x, t[3] = $) : (x = t[2], $ = t[3]), _(x, $);
		var P, N;
		t[4] !== r || t[5] !== I || t[6] !== E || t[7] !== m ? (P = function() {
			if (!(r == null || m === 0 || I || E < 0)) {
				var e = o("WAWebChatlistPillOverflow").measureOverflow(r, L, g);
				e.hiddenCount > 0 && c(e);
			}
		}, N = [
			r,
			I,
			m,
			E
		], t[4] = r, t[5] = I, t[6] = E, t[7] = m, t[8] = P, t[9] = N) : (P = t[8], N = t[9]), _(P, N);
		var M;
		return t[10] !== u ? (M = [l, u], t[10] = u, t[11] = M) : M = t[11], M;
	}
	function T(e) {
		return e + 1;
	}
	function D(e) {
		return e + 1;
	}
	function x(e) {
		return o("WAWebBizAiAgentStatusUtils").shouldShowAiChipsForChat(e) ? e.capiThreadControl === o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN ? o("WAWebChatlistAiStatusKind").AiStatusKind.RESPONDING : e.capiThreadControl === o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_PASSED ? o("WAWebChatlistAiStatusKind").AiStatusKind.HANDOFF : null : null;
	}
	function $(t, n) {
		var a = t === o("WAWebChatlistAiStatusKind").AiStatusKind.RESPONDING ? o("WAWebLabelPillColors").AI_RESPONDING_COLOR_INDEX : o("WAWebLabelPillColors").AI_HANDOFF_COLOR_INDEX, i = o("WAWebLabelPillColors").getPillColors(a, n), l = i.bg, u = i.text;
		return t === o("WAWebChatlistAiStatusKind").AiStatusKind.RESPONDING ? c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(k.pill(l, u), k.aiPill), {
			"data-testid": "ai-responding-pill",
			children: s._(
				/*BTDS*/
				""
			)
		}), o("WAWebChatlistAiStatusKind").AiStatusKind.RESPONDING) : c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(k.pill(l, u), k.aiPill), {
			"data-testid": "ai-handoff-pill",
			children: s._(
				/*BTDS*/
				""
			)
		}), o("WAWebChatlistAiStatusKind").AiStatusKind.HANDOFF);
	}
	$.displayName = $.name + " [from " + i.id + "]";
	function P(t, n) {
		var a, i = o("WAWebLabelPillColors").getPillColors((a = t.colorIndex) != null ? a : o("WAWebLabelPillColors").DEFAULT_COLOR_INDEX, n), l = i.bg, s = i.text;
		return c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(k.pill(l, s)), {
			title: t.name,
			"data-testid": "label-pill-" + t.id,
			children: c.jsx("span", {
				className: "x6ikm8r x10wlt62 xlyipyv xo1l8bm xeuugli",
				children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
					text: t.name,
					emojiXstyle: k.pillEmoji,
					xstyle: k.pillEmojiTextWeight
				})
			})
		}), "label_" + t.id);
	}
	P.displayName = P.name + " [from " + i.id + "]";
	function N(e) {
		var t = e.chat, n = e.hasAiChip, r = e.hasAnyPill;
		return r ? n ? t.capiThreadControl === o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN ? o("WAWebChatlistTertiaryPillsLogEvents").TertiaryPillsChipKind.AI_RESPONDING : o("WAWebChatlistTertiaryPillsLogEvents").TertiaryPillsChipKind.AI_HANDOFF : o("WAWebChatlistTertiaryPillsLogEvents").TertiaryPillsChipKind.LABELS_ONLY : null;
	}
	function M(e, t, n, r) {
		var a = o("react-compiler-runtime").c(6), i, l;
		a[0] !== e || a[1] !== t || a[2] !== r || a[3] !== n ? (i = function() {
			if (t == null) {
				o("WAWebChatlistTertiaryPillsLogEvents").logTertiaryPillsRowMismatch(o("WAWebChatlistTertiaryPillsLogEvents").TertiaryPillsMismatchReason.EMPTY_AFTER_RESERVATION);
				return;
			}
			o("WAWebChatlistTertiaryPillsLogEvents").logTertiaryPillsRowImpression(e, t, n, r);
		}, l = [
			e,
			t,
			n,
			r
		], a[0] = e, a[1] = t, a[2] = r, a[3] = n, a[4] = i, a[5] = l) : (i = a[4], l = a[5]), p(i, l);
	}
	function w(e) {
		var t = o("react-compiler-runtime").c(20), n = e.chat;
		o("useWAWebChatPreviewState").useChatPreviewState(n);
		var r = o("WAWebThemeContext").useIsDarkTheme(), a;
		if (t[0] !== n || t[1] !== r) {
			var i = x(n);
			a = i != null ? $(i, r) : null, t[0] = n, t[1] = r, t[2] = a;
		} else a = t[2];
		var l = a, u = n.labels, d = o("WAWebBizAiAgentStatusUtils").shouldShowLabelPillsForChat(n) && u != null ? o("WAWebChatListPillUtils").selectVisiblePills(u, null) : {
			overflowCount: 0,
			overflowedLabels: [],
			visibleLabels: []
		}, m = d.overflowCount, p = d.overflowedLabels, _ = d.visibleLabels, f;
		t[3] !== r ? (f = function(t) {
			return P(t, r);
		}, t[3] = r, t[4] = f) : f = t[4];
		var g = _.map(f), h = (l != null ? 1 : 0) + g.length, y = I(h), C = y[0], b = y[1], v = m + b.hiddenCount, S = l != null, R = h > 0, L;
		t[5] !== n || t[6] !== S || t[7] !== R ? (L = N({
			chat: n,
			hasAiChip: S,
			hasAnyPill: R
		}), t[5] = n, t[6] = S, t[7] = R, t[8] = L) : L = t[8];
		var E = L, k;
		if (t[9] !== n.id ? (k = n.id.toString(), t[9] = n.id, t[10] = k) : k = t[10], M(k, E, h, v), h === 0) return null;
		var T = Math.min(b.hiddenCount, g.length), D = T > 0 ? g.slice(0, g.length - T) : g, w = v > 0 ? o("WAWebChatlistPillOverflow").computeOverflowTooltip(_, p, T) : "", A;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (A = { className: "x78zum5 x1a02dak x1b73lln x1trrmfo x1cy8zhl x1tiyuxx xbcllsc x6ikm8r x10wlt62" }, t[11] = A) : A = t[11];
		var F;
		t[12] !== w || t[13] !== v ? (F = v > 0 && c.jsx("span", {
			className: "x3nfvp2 x6s0dn4 xmix8c7 x9f619 x1gxa6cn xa0aww2 x4tra6z x1j8ymqv x1nxh6w3 xk50ysn xhslqc4 xuxw1ft x2lah0s xd4r4e8",
			title: w,
			"data-testid": "overflow-count",
			children: s._(
				/*BTDS*/
				"",
				[s._param("count", v, [0, v])]
			)
		}), t[12] = w, t[13] = v, t[14] = F) : F = t[14];
		var O;
		return t[15] !== l || t[16] !== C || t[17] !== D || t[18] !== F ? (O = c.jsxs("div", babelHelpers.extends({ ref: C }, A, {
			role: "group",
			"data-testid": "chatlist-tertiary-pills-row",
			children: [
				l,
				D,
				F
			]
		})), t[15] = l, t[16] = C, t[17] = D, t[18] = F, t[19] = O) : O = t[19], O;
	}
	l.default = w;
}), 226);
