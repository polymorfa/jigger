__d("WAWebServiceAreaRadiusDropdown.react", [
	"WAWebBusinessProfileTextField.react",
	"WAWebFlex.react",
	"WAWebServiceAreaRadiusConstants",
	"WDSIconIcArrowDropDown.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSVars.stylex",
	"react",
	"useWAWebOnOutsideClick"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useId, m = u.useRef, p = u.useState, _ = "calc(" + o("WDSVars.stylex").WDSVars.spacingTriple + " + " + o("WDSVars.stylex").WDSVars.spacingSingle + " * 2 + 12px + " + o("WDSVars.stylex").WDSVars.spacingSingle + ")", f = { menuContainer: {
		backgroundColor: "x16w0wmm",
		borderStartStartRadius: "x6nvzda",
		borderStartEndRadius: "x4i4b9w",
		borderEndEndRadius: "xhl9efl",
		borderEndStartRadius: "xj65ea0",
		boxShadow: "x1sr759z",
		color: "x14ug900",
		insetInlineStart: "xxb5yu8",
		left: null,
		right: null,
		marginTop: "x1wgys3m",
		maxHeight: "xuyqlj2",
		overflowX: "x6ikm8r",
		overflowY: "x1odjw0f",
		position: "x10l6tqk",
		top: "xdsb8wn",
		width: "x116kdbm",
		zIndex: "xfo81ep",
		$$css: !0
	} };
	function g(e) {
		var t = e.fieldName, n = t === void 0 ? "serviceAreaRadius" : t, a = e.icon, i = e.label, l = e.onChange, u = e.value, _ = e.xstyle, g = m(null), h = p(!1), y = h[0], C = h[1], b = d(), v = Number(u) || 0, S = o("WAWebServiceAreaRadiusConstants").radiusMetersToOptionValue(v), R = o("WAWebServiceAreaRadiusConstants").getServiceAreaRadiusOptions(), L = R.find(function(e) {
			return e.value === S;
		}), E = L != null ? L.label() : R[0].label(), k = c(function() {
			C(!1);
		}, []);
		o("useWAWebOnOutsideClick").useOnOutsideClick(g, k);
		var I = c(function(e) {
			l != null && l(n, String(e)), C(!1);
		}, [n, l]), T = c(function() {
			C(function(e) {
				return !e;
			});
		}, []), D = c(function(e) {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), T());
		}, [T]);
		return s.jsxs("div", {
			className: "x1ypdohk x1n2onr6 xh8yej3",
			onClick: T,
			onKeyDown: D,
			ref: g,
			role: "button",
			tabIndex: 0,
			"aria-haspopup": "listbox",
			"aria-expanded": y,
			"aria-controls": y ? b : void 0,
			children: [s.jsx(r("WAWebBusinessProfileTextField.react"), {
				EndIcon: r("WDSIconIcArrowDropDown.react"),
				editable: !0,
				fieldName: n,
				icon: a,
				label: i,
				readOnly: !0,
				testid: "biz_profile_service_area_radius_textfield",
				value: String(E),
				xstyle: _
			}), y && s.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: f.menuContainer,
				id: b,
				role: "listbox",
				"aria-label": i,
				children: s.jsx(r("WDSMenu.react"), {
					useMaxWidth: !1,
					children: R.map(function(e) {
						return s.jsx(r("WDSMenuItem.react"), {
							isToggleable: !0,
							onPress: function() {
								return I(e.value);
							},
							title: e.label(),
							toggled: e.value === S
						}, e.value);
					})
				})
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);
