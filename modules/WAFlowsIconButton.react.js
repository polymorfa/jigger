__d("WAFlowsIconButton.react", [
	"WAFlowsIcon.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["enabled"], s, u, c = u || (u = o("react"));
	function d(t) {
		var n, o, a, i = t.enabled, l = i === void 0 ? !0 : i, u = babelHelpers.objectWithoutPropertiesLoose(t, e), d = function(t, n) {
			n.preventDefault(), n.stopPropagation(), l && (t == null || t());
		};
		return c.jsx("button", babelHelpers.extends({
			ref: u.buttonRef,
			type: "button",
			"aria-describedby": (n = u.ariaDescribedBy) != null ? n : null,
			"aria-label": (o = u.ariaLabel) != null ? o : ""
		}, (s || (s = r("stylex"))).props(u.xstyleBackground), {
			disabled: !l,
			onClick: function(t) {
				return d(u.onClick, t);
			},
			onMouseDown: function(t) {
				return d(u.onMouseDown, t);
			},
			"data-testid": void 0,
			children: c.jsx(r("WAFlowsIcon.react"), {
				id: u.iconID,
				altText: (a = u.altText) != null ? a : "",
				responsiveFontContainerXStyle: u.xstyleResponsiveLayer,
				xstyle: u.xstyleIcon
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
