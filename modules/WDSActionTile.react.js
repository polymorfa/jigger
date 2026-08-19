__d("WDSActionTile.react", [
	"WDSActionTileConfig",
	"WDSDisabledStateStyles",
	"WDSFocusStateStyles",
	"WDSPressMotionStyles",
	"WDSText.react",
	"WDSTooltip.react",
	"react",
	"react-strict-dom"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s = [
		"Icon",
		"disabled",
		"id",
		"label",
		"onPress",
		"platform",
		"tabOrder",
		"testid",
		"tooltip"
	], u, c = u || (u = o("react")), d = u.useState;
	function m(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.Icon, l = a.disabled, u = a.id, m = a.label, p = a.onPress, _ = a.platform, f = a.tabOrder, g = a.testid, h = a.tooltip, y = babelHelpers.objectWithoutPropertiesLoose(a, s), C = d(!1), b = C[0], v = C[1], S = d(!1), R = S[0], L = S[1], E = _ != null ? _ : navigator.userAgent.includes("Mac OS X") ? "macWeb" : "windowsWeb", k = o("WDSActionTileConfig").getButtonSizeStyles(E), I = o("WDSActionTileConfig").getIconSizeAndStyle(), T = I[0], D = I[1], x = b && !R && l !== !0, $ = c.jsxs(o("react-strict-dom").html.div, {
			style: k.content,
			children: [c.jsxs(o("react-strict-dom").html.div, {
				style: [
					o("WDSActionTileConfig").getIconContainerStyle(),
					o("WDSPressMotionStyles").WDSPressMotionStyles.pressable,
					R && o("WDSPressMotionStyles").WDSPressMotionStyles.small
				],
				children: [x && c.jsx(o("react-strict-dom").html.div, {
					"data-testid": void 0,
					style: o("WDSActionTileConfig").getIconHoverOverlayStyle()
				}), c.jsx(i, {
					height: T,
					xstyle: D,
					width: T,
					colorName: "contentActionDefault"
				})]
			}), c.jsx(o("react-strict-dom").html.div, {
				style: [o("WDSActionTileConfig").WDSActionTileStyles.label],
				children: c.jsx(r("WDSText.react"), {
					type: "Body3",
					maxLines: 1,
					colorName: "contentDefault",
					selectable: !1,
					children: m
				})
			})]
		});
		return c.jsx("div", {
			className: "x14atkfc x18qnofl",
			children: c.jsx(r("WDSTooltip.react"), {
				label: h != null ? h : "",
				disabled: !(l === !0 && h != null),
				children: c.jsx(o("react-strict-dom").html.button, babelHelpers.extends({}, y, {
					"data-tab": f,
					tabIndex: 0,
					onClick: l === !0 ? void 0 : p,
					onMouseEnter: function() {
						return v(!0);
					},
					onMouseLeave: function() {
						v(!1), L(!1);
					},
					onPointerDown: l !== !0 ? function() {
						return L(!0);
					} : void 0,
					onPointerCancel: l !== !0 ? function() {
						return L(!1);
					} : void 0,
					onPointerLeave: l !== !0 ? function() {
						return L(!1);
					} : void 0,
					onPointerUp: l !== !0 ? function() {
						return L(!1);
					} : void 0,
					ref: n,
					id: u,
					"data-testid": void 0,
					style: [
						k.container,
						o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
						l === !0 && o("WDSDisabledStateStyles").WDSDisabledStateStyles.genericDisabledPersistent
					],
					children: $
				}))
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
