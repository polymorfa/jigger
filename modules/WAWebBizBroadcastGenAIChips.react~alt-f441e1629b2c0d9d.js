__d("WAWebBizBroadcastGenAIChips.react", [
	"fbt",
	"WAWebFlex.react",
	"WDSButton.react",
	"WDSChip.react",
	"WDSIconIcChevronLeft.react",
	"WDSIconIcChevronRight.react",
	"react",
	"useWAWebHover"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState, f = .8, g = 1;
	function h(e) {
		var t = e.chips, n = e.disabled, a = e.onChipTap, i = p(null), l = p(null), c = o("useWAWebHover").useWAWebHover(i), h = _(!1), C = h[0], b = h[1], v = _(!1), S = v[0], R = v[1], L = d(function() {
			var e = l.current;
			if (e != null) {
				var t = getComputedStyle(e).direction === "rtl", n = t ? -e.scrollLeft : e.scrollLeft;
				b(n > g), R(n + e.clientWidth < e.scrollWidth - g);
			}
		}, []);
		m(function() {
			var e = l.current;
			if (e != null) {
				var t = new ResizeObserver(function() {
					L();
				});
				t.observe(e);
				var n = e.firstElementChild;
				return n != null && t.observe(n), function() {
					t.disconnect();
				};
			}
		}, [L]);
		var E = d(function(e) {
			var t = l.current;
			if (t != null) {
				var n = getComputedStyle(t).direction === "rtl", r = t.clientWidth * f, o = e === "end" ? r : -r;
				n && (o = -o), t.scrollBy({
					behavior: "smooth",
					left: o
				});
			}
		}, []);
		return u.jsxs("div", {
			className: "x1n2onr6",
			ref: i,
			children: [
				c && C && u.jsx(o("WAWebFlex.react").FlexRow, {
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
							disabled: n,
							onPress: function() {
								return E("start");
							},
							size: "small",
							type: "media",
							variant: "tonal",
							xstyle: y.chevronButton
						})
					})
				}),
				u.jsx("div", {
					className: "xw2csxc x1nbhmlj x1rohswg",
					onScroll: L,
					ref: l,
					children: u.jsx(o("WAWebFlex.react").FlexRow, {
						gap: 8,
						children: t.map(function(e) {
							return u.jsx(o("WAWebFlex.react").FlexItem, {
								shrink: 0,
								children: u.jsx(r("WDSChip.react"), {
									isDisabled: n,
									isNeutral: !1,
									label: e,
									onPress: function() {
										return a(e);
									},
									testid: "biz_broadcasts_creation_genai_suggestion_chip"
								})
							}, e);
						})
					})
				}),
				c && S && u.jsx(o("WAWebFlex.react").FlexRow, {
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
							disabled: n,
							onPress: function() {
								return E("end");
							},
							size: "small",
							type: "media",
							variant: "tonal",
							xstyle: y.chevronButton
						})
					})
				})
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
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
