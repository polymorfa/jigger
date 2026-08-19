__d("GeoMenuSubmenu.react", [
	"GeoBaseLayerCard.react",
	"GeoBaseListRow.react",
	"GeoIcon.react",
	"GeoMenu.react",
	"GeoPrivateAnimationLayerContainer.react",
	"GeoPrivateMakeComponent",
	"GeoPrivateMenuItemWrapper.react",
	"Locale",
	"RTLKeys",
	"gkx",
	"meta-brand-caret-left-outline-16",
	"meta-brand-caret-right-outline-16",
	"react",
	"useGeoSelection",
	"useOnClickOutside",
	"useUniqueID"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"badge",
		"children",
		"containerRef",
		"icon",
		"isDisabled",
		"onToggle",
		"xstyle"
	], s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = r("gkx")("24835"), f = o("Locale").isRTL(), g = 4, h = { layerNext: {
		height: "xt7dq6l",
		$$css: !0
	} };
	function y(t) {
		var n = t.badge, a = t.children, i = t.containerRef, l = t.icon, s = t.isDisabled, c = s === void 0 ? !1 : s, g = t.onToggle, y = t.xstyle, C = babelHelpers.objectWithoutPropertiesLoose(t, e), b = r("useUniqueID")(), v = p(null), S = r("useGeoSelection")(b), R = S.clearSelection, L = S.isSelected, E = S.setSelection, k = S.toggleSelection, I = d(function() {
			return R();
		}, [R]);
		r("useOnClickOutside")({
			isShown: L,
			onClickOutside: I,
			ref: v
		});
		function T(e) {
			if (e.keyCode === r("RTLKeys").getRight()) return e.stopPropagation(), E();
		}
		function D(e) {
			e.keyCode === r("RTLKeys").getLeft() && (e.stopPropagation(), R(), v.current != null && v.current.focus());
		}
		m(function() {
			g != null && g(L);
		}, [L, g]);
		var x = L && !c && v.current != null, $ = u.jsx("div", {
			className: "x1iorvi4 x11lfxj5 xjkvuk6 x135b78x x5w4yej",
			onKeyDown: D,
			children: u.jsx(r("GeoMenu.react"), { children: a })
		}), P = v.current != null && u.jsx(r("GeoBaseLayerCard.react"), {
			align: "start",
			context: v.current,
			onHide: I,
			position: "end",
			xstyle: [h.layerNext, y],
			children: $
		});
		return u.jsxs(r("GeoPrivateMenuItemWrapper.react"), {
			containerRef: i,
			onKeyDown: T,
			onMouseEnter: E,
			children: [u.jsx(r("GeoBaseListRow.react"), babelHelpers.extends({
				accessibilityRole: "button",
				align: "center",
				badge: n,
				containerRef: v,
				endContent: f ? u.jsx(r("GeoIcon.react"), { icon: o("meta-brand-caret-left-outline-16").metaBrandCaretLeftOutline16 }) : u.jsx(r("GeoIcon.react"), { icon: o("meta-brand-caret-right-outline-16").metaBrandCaretRightOutline16 }),
				isDisabled: c,
				isFocusable: !0,
				isVisuallyFocused: !c && L ? L : void 0,
				media: l,
				onPress: k
			}, C)), _ ? u.jsx(r("GeoPrivateAnimationLayerContainer.react"), {
				isLayerShown: x,
				children: P
			}) : x && P]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	var C = o("GeoPrivateMakeComponent").makeGeoComponent("GeoMenuSubmenu", y);
	l.default = C;
}), 98);
