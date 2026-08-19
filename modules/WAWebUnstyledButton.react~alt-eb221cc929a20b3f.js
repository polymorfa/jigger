__d("WAWebUnstyledButton.react", [
	"WAWebClassnames",
	"WAWebKeyboardIsKeyActivation",
	"WAWebUnstyledButtonStyles",
	"WDSFocusStateStyles",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useMergeRefs"
], (function(t, n, r, o, a, i, l) {
	var e = [
		"ref",
		"children",
		"customDataAttr",
		"dataTab",
		"dir",
		"disabled",
		"onBlur",
		"onClick",
		"onContextMenu",
		"onDisabledClick",
		"onFocus",
		"onKeyDown",
		"onMouseDown",
		"onMouseEnter",
		"onMouseLeave",
		"onMouseOver",
		"onMouseUp",
		"onPaste",
		"role",
		"tabIndex",
		"testid",
		"title",
		"type",
		"xstyle"
	], s, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useRef;
	function _(t) {
		var n, a = t.ref, i = t.children, l = t.customDataAttr, u = t.dataTab, d = t.dir, _ = t.disabled, f = t.onBlur, g = t.onClick, h = t.onContextMenu, y = t.onDisabledClick, C = t.onFocus, b = t.onKeyDown, v = t.onMouseDown, S = t.onMouseEnter, R = t.onMouseLeave, L = t.onMouseOver, E = t.onMouseUp, k = t.onPaste, I = t.role, T = t.tabIndex, D = T === void 0 ? 0 : T, x = t.testid, $ = t.title, P = t.type, N = P === void 0 ? "button" : P, M = t.xstyle, w = babelHelpers.objectWithoutPropertiesLoose(t, e), A = p(null), F = r("useMergeRefs")(a, A), O = (n = w["aria-label"]) != null ? n : $, B = m(function(e) {
			if (r("WAWebKeyboardIsKeyActivation")(e)) {
				var t;
				e.stopPropagation(), e.preventDefault(), (t = A.current) == null || t.click();
			}
		}, []), W = _ === !0 ? y : g, q = m(function(e) {
			W != null && (_ === !0 && (e.stopPropagation(), e.preventDefault()), W(e));
		}, [W, _]);
		return c.jsx("button", babelHelpers.extends({
			className: o("WAWebClassnames").classnamesConvertMeToStylexPlease((s || (s = r("stylex")))(r("WAWebUnstyledButtonStyles").button, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, o("WDSPaddings.stylex").wdsPaddings.padding0, _ === !0 && r("WAWebUnstyledButtonStyles").disabled, M)),
			tabIndex: D,
			"data-tab": u != null ? u : void 0,
			"data-testid": x,
			disabled: _ === !0 && y == null,
			"aria-disabled": _ === !0,
			onClick: W == null ? null : q,
			onContextMenu: h,
			onMouseEnter: S,
			onMouseOver: L,
			onMouseLeave: R,
			onMouseDown: v,
			onMouseUp: E,
			onKeyDown: b,
			onKeyPress: B,
			onPaste: k,
			onFocus: C,
			onBlur: f,
			ref: F,
			title: $,
			type: N,
			role: I,
			dir: d,
			"aria-label": O,
			"data-custom-attr": l
		}, w, { children: i }));
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
