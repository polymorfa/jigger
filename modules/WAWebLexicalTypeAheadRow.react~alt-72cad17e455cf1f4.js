__d("WAWebLexicalTypeAheadRow.react", [
	"ReactDOM",
	"WAWebAccessibility.react",
	"WAWebPortalThemeWrapper.react",
	"WAWebUnstyledButton.react",
	"react",
	"useWAWebLexicalTypeAheadContainer",
	"useWAWebLexicalTypeAheadKeyboardNavigation"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useMemo, m = u.useRef, p = { padding10: {
		paddingTop: "x889kno",
		paddingInlineEnd: "x2vl965",
		paddingBottom: "x1a8lsjc",
		paddingInlineStart: "xe2zdcy",
		$$css: !0
	} }, _ = 10, f = 7, g = { itemsContainer: {
		display: "x78zum5",
		flexDirection: "x1q0g3np",
		backgroundColor: "x1311tq3",
		boxShadow: "xvh3i5d",
		borderStartStartRadius: "x6nvzda",
		borderStartEndRadius: "x4i4b9w",
		borderEndEndRadius: "xhl9efl",
		borderEndStartRadius: "xj65ea0",
		overflowX: "x14aock7",
		$$css: !0
	} };
	function h(e) {
		var t, n = e.itemHeight, a = e.items, i = e.itemWidth, l = e.leadOffset, u = e.onCancel, h = a.length, y = m([]), C = d(function() {
			if (h > f) {
				var e = i / 2 + _;
				return i * f - e + _ * 2;
			}
			return i * h + _ * 2;
		}, [i, h]), b = a.length === 0 ? 0 : C, v = n + _ * 2, S = o("useWAWebLexicalTypeAheadContainer").useLexicalTypeAheadContainer(l, b, v), R = S.containerEle, L = S.hideContainer, E = o("useWAWebLexicalTypeAheadKeyboardNavigation").useLexicalTypeAheadKeyboardNavigation(a, 0, "row", {
			onSelect: function(t) {
				t.onSelect();
			},
			onCancel: function() {
				L(), u();
			}
		}), k = E.activeIndex, I = E.setActiveIndex;
		c(function() {
			var e = y.current[k];
			e && e.scrollIntoView();
		}, [k]);
		var T = a.map(function(e, t) {
			return s.jsx(r("WAWebUnstyledButton.react"), {
				ref: function(n) {
					return y.current[t] = n;
				},
				"aria-label": e.ariaLabel,
				onClick: function(n) {
					n.preventDefault(), n.stopPropagation(), e.onSelect();
				},
				onMouseEnter: function() {
					I(t);
				},
				children: e.renderFn(t === k)
			}, t);
		});
		if (T.length === 0) return null;
		var D = [g.itemsContainer, p.padding10], x = a[k], $ = (t = x == null ? void 0 : x.ariaLabel) != null ? t : "";
		return o("ReactDOM").createPortal(s.jsx(r("WAWebPortalThemeWrapper.react"), { children: s.jsxs("div", {
			onClick: L,
			className: "x78zum5 x1q0g3np x1311tq3 xvh3i5d x6nvzda x4i4b9w xhl9efl xj65ea0 x14aock7 x889kno x2vl965 x1a8lsjc xe2zdcy",
			children: [T, s.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, {
				text: $,
				assertive: !0
			})]
		}) }), R);
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 98);
