__d("WAWebLexicalTypeAheadList.react", [
	"ReactDOM",
	"WAWebPortalThemeWrapper.react",
	"WAWebUnstyledButton.react",
	"react",
	"sumBy",
	"useWAWebLexicalTypeAheadContainer",
	"useWAWebLexicalTypeAheadKeyboardNavigation"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useMemo, m = u.useRef, p = { padding10: {
		paddingTop: "x889kno",
		paddingInlineEnd: "x2vl965",
		paddingBottom: "x1a8lsjc",
		paddingInlineStart: "xe2zdcy",
		$$css: !0
	} }, _ = 10, f = { itemsContainer: {
		display: "x78zum5",
		height: "x5yr21d",
		width: "xh8yej3",
		overflowX: "x6ikm8r",
		overflowY: "x1odjw0f",
		flexDirection: "xdt5ytf",
		backgroundColor: "x1280gxy",
		boxShadow: "xvh3i5d",
		boxSizing: "x9f619",
		borderStartStartRadius: "x6nvzda",
		borderStartEndRadius: "x4i4b9w",
		borderEndEndRadius: "xhl9efl",
		borderEndStartRadius: "xj65ea0",
		$$css: !0
	} };
	function g(e) {
		var t = e.anchorElRef, n = e.items, a = e.leadOffset, i = e.maxVisibleItems, l = i === void 0 ? 7 : i, u = e.onCancel, g = e.startingIndex, h = g === void 0 ? 0 : g, y = d(function() {
			var e = r("sumBy")(n.slice(0, l), function(e) {
				return e.height;
			});
			return e + _ * 2;
		}, [n, l]), C = d(function() {
			return n.reduce(function(e, t) {
				return Math.max(e, t.width);
			}, 0);
		}, [n]), b = n.length === 0 ? 0 : C + _ * 2, v = o("useWAWebLexicalTypeAheadContainer").useLexicalTypeAheadContainer(a, b, y, t), S = v.containerEle, R = v.hideContainer, L = o("useWAWebLexicalTypeAheadKeyboardNavigation").useLexicalTypeAheadKeyboardNavigation(n, h, "column", {
			onSelect: function(t) {
				t.onSelect();
			},
			onCancel: function() {
				R(), u();
			}
		}), E = L.activeIndex, k = L.setActiveIndex, I = m(null);
		if (c(function() {
			var e;
			(e = I.current) == null || e.scrollIntoView({ block: "nearest" });
		}, [E]), n.length !== 0) {
			var T = n.map(function(e, t) {
				return s.jsx(r("WAWebUnstyledButton.react"), {
					ref: function(n) {
						t === E && (I.current = n);
					},
					onClick: function() {
						e.onSelect();
					},
					onMouseEnter: function() {
						k(t);
					},
					children: e.renderFn(t === E)
				}, t);
			}), D = [f.itemsContainer, p.padding10];
			return o("ReactDOM").createPortal(s.jsx(r("WAWebPortalThemeWrapper.react"), { children: s.jsx("div", {
				onClick: R,
				className: "x78zum5 x5yr21d xh8yej3 x6ikm8r x1odjw0f xdt5ytf x1280gxy xvh3i5d x9f619 x6nvzda x4i4b9w xhl9efl xj65ea0 x889kno x2vl965 x1a8lsjc xe2zdcy",
				children: T
			}) }), S);
		}
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);
