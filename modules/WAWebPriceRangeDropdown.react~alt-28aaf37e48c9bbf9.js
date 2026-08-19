__d("WAWebPriceRangeDropdown.react", [
	"fbt",
	"WAWebBusinessProfileTextField.react",
	"WAWebFlex.react",
	"WDSIconIcArrowDropDown.react",
	"WDSIconIcSell.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSVars.stylex",
	"react",
	"useWAWebOnOutsideClick"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useId, p = c.useMemo, _ = c.useRef, f = c.useState, g = "calc(" + o("WDSVars.stylex").WDSVars.spacingTriple + " + " + o("WDSVars.stylex").WDSVars.spacingSingle + " * 2 + 12px + " + o("WDSVars.stylex").WDSVars.spacingSingle + ")", h = { menuContainer: {
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
	} }, y = [
		{
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			value: "0"
		},
		{
			label: function() {
				return "$";
			},
			value: "1"
		},
		{
			label: function() {
				return "$$";
			},
			value: "2"
		},
		{
			label: function() {
				return "$$$";
			},
			value: "3"
		},
		{
			label: function() {
				return "$$$$";
			},
			value: "4"
		}
	];
	function C(e) {
		var t = e.dynamicOptions, n = e.fieldName, a = n === void 0 ? "priceTier" : n, i = e.label, l = e.onChange, s = e.onOpen, c = e.value, g = _(null), C = f(!1), b = C[0], v = C[1], S = m(), R = p(function() {
			return t != null && t.length > 0 ? [y[0]].concat(t.map(function(e) {
				return {
					label: function() {
						return e.description !== "" ? e.description : e.symbol;
					},
					subtitle: e.description !== "" ? function() {
						return e.symbol;
					} : void 0,
					value: e.id
				};
			})) : y;
		}, [t]), L = R.find(function(e) {
			return e.value === c;
		}), E = L != null ? L.subtitle : null, k;
		L == null ? k = R[0].label() : E != null ? k = String(L.label()) + " (" + E() + ")" : k = L.label();
		var I = d(function() {
			v(!1);
		}, []);
		o("useWAWebOnOutsideClick").useOnOutsideClick(g, I);
		var T = d(function(e) {
			l != null && l(a, e), v(!1);
		}, [a, l]), D = d(function() {
			v(function(e) {
				return e || s == null || s(), !e;
			});
		}, [s]), x = d(function(e) {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), D());
		}, [D]);
		return u.jsxs("div", {
			className: "x1ypdohk x1n2onr6 xh8yej3",
			onClick: D,
			onKeyDown: x,
			ref: g,
			role: "button",
			tabIndex: 0,
			"aria-haspopup": "listbox",
			"aria-expanded": b,
			"aria-controls": b ? S : void 0,
			children: [u.jsx(r("WAWebBusinessProfileTextField.react"), {
				EndIcon: r("WDSIconIcArrowDropDown.react"),
				editable: !0,
				fieldName: a,
				icon: u.jsx(r("WDSIconIcSell.react"), {}),
				label: i,
				readOnly: !0,
				testid: "biz_profile_price_range_textfield",
				value: String(k)
			}), b && u.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: h.menuContainer,
				id: S,
				role: "listbox",
				"aria-label": i,
				children: u.jsx(r("WDSMenu.react"), {
					useMaxWidth: !1,
					children: R.map(function(e) {
						return u.jsx(r("WDSMenuItem.react"), {
							isToggleable: !0,
							onPress: function() {
								return T(e.value);
							},
							subtitle: e.subtitle != null ? e.subtitle() : void 0,
							title: e.label(),
							toggled: e.value === c
						}, e.value);
					})
				})
			})]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 226);
