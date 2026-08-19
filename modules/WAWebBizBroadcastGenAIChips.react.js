__d("WAWebBizBroadcastGenAIChips.react", [
	"fbt",
	"WAWebFlex.react",
	"WDSButton.react",
	"WDSChip.react",
	"WDSIconIcChevronLeft.react",
	"WDSIconIcChevronRight.react",
	"react",
	"react-compiler-runtime",
	"useWAWebHover"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState, f = .8, g = 1;
	function h(e) {
		var t = o("react-compiler-runtime").c(27), n = e.chips, a = e.disabled, i = e.onChipTap, l = p(null), c = p(null), d = o("useWAWebHover").useWAWebHover(l), h = _(!1), C = h[0], b = h[1], v = _(!1), S = v[0], R = v[1], L;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (L = function() {
			var e = c.current;
			if (e != null) {
				var t = getComputedStyle(e).direction === "rtl", n = t ? -e.scrollLeft : e.scrollLeft;
				b(n > g), R(n + e.clientWidth < e.scrollWidth - g);
			}
		}, t[0] = L) : L = t[0];
		var E = L, k, I;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (k = function() {
			var e = c.current;
			if (e != null) {
				var t = new ResizeObserver(function() {
					E();
				});
				t.observe(e);
				var n = e.firstElementChild;
				return n != null && t.observe(n), (function() {
					t.disconnect();
				});
			}
		}, I = [E], t[1] = k, t[2] = I) : (k = t[1], I = t[2]), m(k, I);
		var T;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (T = function(t) {
			var e = c.current;
			if (e != null) {
				var n = getComputedStyle(e).direction === "rtl", r = e.clientWidth * f, o = t === "end" ? r : -r;
				n && (o = -o), e.scrollBy({
					behavior: "smooth",
					left: o
				});
			}
		}, t[3] = T) : T = t[3];
		var D = T, x;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (x = { className: "x1n2onr6" }, t[4] = x) : x = t[4];
		var $;
		t[5] !== C || t[6] !== a || t[7] !== d ? ($ = d && C && u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: [y.chevronAnchor, y.chevronAnchorStart],
			children: u.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: [y.chevronSlot, y.chevronSlotStart],
				testid: "biz_broadcasts_creation_genai_chips_scroll_prev",
				children: u.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcChevronLeft.react"),
					"aria-label": s._(
						/*BTDS*/
						""
					),
					disabled: a,
					onPress: function() {
						return D("start");
					},
					size: "small",
					type: "media",
					variant: "tonal",
					xstyle: y.chevronButton
				})
			})
		}), t[5] = C, t[6] = a, t[7] = d, t[8] = $) : $ = t[8];
		var P;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (P = { className: "xw2csxc x1nbhmlj x1rohswg" }, t[9] = P) : P = t[9];
		var N;
		if (t[10] !== n || t[11] !== a || t[12] !== i) {
			var M;
			t[14] !== a || t[15] !== i ? (M = function(t) {
				return u.jsx(o("WAWebFlex.react").FlexItem, {
					shrink: 0,
					children: u.jsx(r("WDSChip.react"), {
						isDisabled: a,
						isNeutral: !1,
						label: t,
						onPress: function() {
							return i(t);
						},
						testid: "biz_broadcasts_creation_genai_suggestion_chip"
					})
				}, t);
			}, t[14] = a, t[15] = i, t[16] = M) : M = t[16], N = n.map(M), t[10] = n, t[11] = a, t[12] = i, t[13] = N;
		} else N = t[13];
		var w;
		t[17] !== N ? (w = u.jsx("div", babelHelpers.extends({}, P, {
			onScroll: E,
			ref: c,
			children: u.jsx(o("WAWebFlex.react").FlexRow, {
				gap: 8,
				children: N
			})
		})), t[17] = N, t[18] = w) : w = t[18];
		var A;
		t[19] !== S || t[20] !== a || t[21] !== d ? (A = d && S && u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: [y.chevronAnchor, y.chevronAnchorEnd],
			children: u.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: [y.chevronSlot, y.chevronSlotEnd],
				testid: "biz_broadcasts_creation_genai_chips_scroll_next",
				children: u.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcChevronRight.react"),
					"aria-label": s._(
						/*BTDS*/
						""
					),
					disabled: a,
					onPress: function() {
						return D("end");
					},
					size: "small",
					type: "media",
					variant: "tonal",
					xstyle: y.chevronButton
				})
			})
		}), t[19] = S, t[20] = a, t[21] = d, t[22] = A) : A = t[22];
		var F;
		return t[23] !== $ || t[24] !== w || t[25] !== A ? (F = u.jsxs("div", babelHelpers.extends({}, x, {
			ref: l,
			children: [
				$,
				w,
				A
			]
		})), t[23] = $, t[24] = w, t[25] = A, t[26] = F) : F = t[26], F;
	}
	var y = {
		chevronAnchor: {
			bottom: "xajswfj",
			position: "x10l6tqk",
			top: "x13vifvy",
			zIndex: "x1vjfegm",
			$$css: !0
		},
		chevronAnchorEnd: {
			insetInlineEnd: "xtijo5x",
			left: null,
			right: null,
			$$css: !0
		},
		chevronAnchorStart: {
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			$$css: !0
		},
		chevronButton: {
			backgroundColor: "x1abdmlv",
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			color: "xk4n5i7",
			height: "xzpcc6d",
			minHeight: "x5fffle",
			minWidth: "x1iqlys7",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			width: "x1xephfl",
			$$css: !0
		},
		chevronSlot: {
			boxSizing: "x9f619",
			height: "xsdox4t",
			width: "x100vrsf",
			$$css: !0
		},
		chevronSlotEnd: {
			backgroundImage: "x1xl1d99",
			borderEndStartRadius: "x15urzxu",
			borderStartStartRadius: "xt8t1vi",
			paddingInlineStart: "x12w63v0",
			$$css: !0
		},
		chevronSlotStart: {
			backgroundImage: "x1x7ezrh",
			borderEndEndRadius: "x129tdwq",
			borderStartEndRadius: "x1xc408v",
			paddingInlineEnd: "x1nzty39",
			$$css: !0
		}
	};
	l.default = h;
}), 226);
