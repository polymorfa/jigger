__d("WAWebPasswordInput.react", [
	"fbt",
	"WAWebClassnames",
	"WAWebCopyPasteSelectable.react",
	"WDSButton.react",
	"WDSIconIcVisibility.react",
	"WDSIconIcVisibilityOff.react",
	"WDSMargins.stylex",
	"react",
	"react-gui-use-focus",
	"useMergeRefs",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useRef, _ = d.useState, f = { accentIconColor: {
		color: "x1v5yvga",
		$$css: !0
	} };
	function g(e) {
		return c.jsx(r("WDSIconIcVisibility.react"), babelHelpers.extends({}, e, { iconXstyle: [e.iconXstyle, f.accentIconColor] }));
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		return c.jsx(r("WDSIconIcVisibilityOff.react"), babelHelpers.extends({}, e, { iconXstyle: [e.iconXstyle, f.accentIconColor] }));
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.enableShowPassword, l = i === void 0 ? !1 : i, u = a.focusOnMount, d = u === void 0 ? !1 : u, f = a.showByDefault, y = f === void 0 ? !1 : f, C = r("useWAWebToggle")(y), b = C[0], v = C[1], S = p(null), R = _(!1), L = R[0], E = R[1], k = o("react-gui-use-focus").useFocus({ onFocusChange: E }), I = r("useMergeRefs")(S, k, n);
		m(function() {
			if (d) {
				var e;
				(e = S.current) == null || e.focus();
			}
		}, [d]);
		var T = b ? g : h, D = b ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		return c.jsxs("div", babelHelpers.extends({}, {
			0: { className: "x1n2onr6 x78zum5 xk7ee7b xt7fyls xso031l x1q0q8m5 x16pkwpw x1j85h84" },
			1: { className: "x1n2onr6 x78zum5 xk7ee7b xt7fyls xv7zg05 x1q0q8m5 x1rrvw3c x18d9i69" }
		}[!!L << 0], { children: [c.jsx("input", {
			className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(o("WAWebCopyPasteSelectable.react").SELECTABLE_CSS_CLASS, a.appLockUpsellEnabled === !0 ? "x1jchvi3 x14ug900 x1iyjqo2 xsl91qr x1aq9cx1 xe0m388 xhe8bae xe73qa2 xsgwwv8 xuhg6hn xli3dgm x1isl193 x1e225iy x1bnlyaz x12ws5rt x1a2a7pz x6ikm8r x10wlt62 x16w0wmm x1yrsyyn x10b6aqq x1icxu4v" : "x1jchvi3 x14ug900 x1iyjqo2 xsl91qr x1aq9cx1 xe0m388 xhe8bae xe73qa2 xsgwwv8 xuhg6hn xli3dgm x1isl193 x1e225iy x1bnlyaz x12ws5rt x1a2a7pz xk7ee7b x6ikm8r x10wlt62 x1yrsyyn x1icxu4v x10b6aqq x25sj25"),
			"data-testid": a.testid,
			onBlur: a.onBlur,
			onChange: a.onChange,
			onKeyDown: a.onKeyDown,
			pattern: a.pattern,
			placeholder: a.placeholder,
			ref: I,
			required: a.required,
			title: a.title,
			type: b ? "text" : "password",
			value: a.value
		}), l && c.jsx(r("WDSButton.react"), {
			Icon: T,
			"aria-label": D,
			xstyle: o("WDSMargins.stylex").wdsMargins.marginEnd8,
			onPress: v,
			variant: "borderless"
		})] }));
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
