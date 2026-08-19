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
		var t = f(null), n = t[0], r = t[1], a = m(function(e) {
			r(e);
		}, []), i = f(o("WAWebChatlistPillOverflow").EMPTY_RESULT), l = i[0], s = i[1], u = f(0), c = u[0], d = u[1], p = f(0), h = p[0], y = p[1], C = f(0), b = C[0], v = C[1], S = f(0), R = S[0], E = S[1], k = l.hiddenCount > 0;
		return e !== c && (d(e), k && s(o("WAWebChatlistPillOverflow").EMPTY_RESULT), E(function(e) {
			return e + 1;
		})), Math.abs(b - h) > .5 && (y(b), k && s(o("WAWebChatlistPillOverflow").EMPTY_RESULT), E(function(e) {
			return e + 1;
		})), _(function() {
			if (n != null) {
				var e = new ResizeObserver(function(e) {
					var t, n, r = (t = (n = e[0]) == null ? void 0 : n.contentRect.width) != null ? t : 0;
					v(r);
				});
				return e.observe(n), function() {
					e.disconnect();
				};
			}
		}, [n]), _(function() {
			if (!(n == null || c === 0 || k || R < 0)) {
				var e = o("WAWebChatlistPillOverflow").measureOverflow(n, L, g);
				e.hiddenCount > 0 && s(e);
			}
		}, [
			n,
			k,
			c,
			R
		]), [a, l];
	}
	function T(e) {
		return o("WAWebBizAiAgentStatusUtils").shouldShowAiChipsForChat(e) ? e.capiThreadControl === o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN ? o("WAWebChatlistAiStatusKind").AiStatusKind.RESPONDING : e.capiThreadControl === o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_PASSED ? o("WAWebChatlistAiStatusKind").AiStatusKind.HANDOFF : null : null;
	}
	function D(t, n) {
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
	D.displayName = D.name + " [from " + i.id + "]";
	function x(t, n) {
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
	x.displayName = x.name + " [from " + i.id + "]";
	function $(e) {
		var t = e.chat, n = e.hasAiChip, r = e.hasAnyPill;
		return r ? n ? t.capiThreadControl === o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN ? o("WAWebChatlistTertiaryPillsLogEvents").TertiaryPillsChipKind.AI_RESPONDING : o("WAWebChatlistTertiaryPillsLogEvents").TertiaryPillsChipKind.AI_HANDOFF : o("WAWebChatlistTertiaryPillsLogEvents").TertiaryPillsChipKind.LABELS_ONLY : null;
	}
	function P(e, t, n, r) {
		p(function() {
			if (t == null) {
				o("WAWebChatlistTertiaryPillsLogEvents").logTertiaryPillsRowMismatch(o("WAWebChatlistTertiaryPillsLogEvents").TertiaryPillsMismatchReason.EMPTY_AFTER_RESERVATION);
				return;
			}
			o("WAWebChatlistTertiaryPillsLogEvents").logTertiaryPillsRowImpression(e, t, n, r);
		}, [
			e,
			t,
			n,
			r
		]);
	}
	function N(e) {
		var t = e.chat;
		o("useWAWebChatPreviewState").useChatPreviewState(t);
		var n = o("WAWebThemeContext").useIsDarkTheme(), r = T(t), a = r != null ? D(r, n) : null, i = t.labels, l = o("WAWebBizAiAgentStatusUtils").shouldShowLabelPillsForChat(t) && i != null ? o("WAWebChatListPillUtils").selectVisiblePills(i, null) : {
			overflowCount: 0,
			overflowedLabels: [],
			visibleLabels: []
		}, u = l.overflowCount, d = l.overflowedLabels, m = l.visibleLabels, p = m.map(function(e) {
			return x(e, n);
		}), _ = (a != null ? 1 : 0) + p.length, f = I(_), g = f[0], h = f[1], y = u + h.hiddenCount, C = $({
			chat: t,
			hasAiChip: a != null,
			hasAnyPill: _ > 0
		});
		if (P(t.id.toString(), C, _, y), _ === 0) return null;
		var b = Math.min(h.hiddenCount, p.length), v = b > 0 ? p.slice(0, p.length - b) : p, S = y > 0 ? o("WAWebChatlistPillOverflow").computeOverflowTooltip(m, d, b) : "";
		return c.jsxs("div", {
			ref: g,
			className: "x78zum5 x1a02dak x1b73lln x1trrmfo x1cy8zhl x1tiyuxx xbcllsc x6ikm8r x10wlt62",
			role: "group",
			"data-testid": "chatlist-tertiary-pills-row",
			children: [
				a,
				v,
				y > 0 && c.jsx("span", {
					className: "x3nfvp2 x6s0dn4 xmix8c7 x9f619 x1gxa6cn xa0aww2 x4tra6z x1j8ymqv x1nxh6w3 xk50ysn xhslqc4 xuxw1ft x2lah0s xd4r4e8",
					title: S,
					"data-testid": "overflow-count",
					children: s._(
						/*BTDS*/
						"",
						[s._param("count", y, [0, y])]
					)
				})
			]
		});
	}
	N.displayName = N.name + " [from " + i.id + "]", l.default = N;
}), 226);
