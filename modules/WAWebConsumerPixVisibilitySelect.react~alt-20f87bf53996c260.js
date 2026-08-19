__d("WAWebConsumerPixVisibilitySelect.react", [
	"WAWebConsumerPixStrings",
	"WAWebFlex.react",
	"WAWebNoop",
	"WDSIconIcChevronDown.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSTextField.react",
	"react",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useRef, m = {
		row: {
			height: "xdd8jsf",
			paddingBottom: "x1l90r2v",
			width: "xh8yej3",
			$$css: !0
		},
		column: {
			width: "xh8yej3",
			$$css: !0
		}
	};
	function p() {
		var e;
		return [
			{
				value: "all",
				label: (e = o("WAWebConsumerPixStrings")).getConsumerPixVisibilityEveryone()
			},
			{
				value: "contacts",
				label: e.getConsumerPixVisibilityMyContacts()
			},
			{
				value: "contact_blacklist",
				label: e.getConsumerPixVisibilityMyContactsExcept()
			},
			{
				value: "none",
				label: e.getConsumerPixVisibilityNobody()
			}
		];
	}
	function _(e) {
		var t, n, a = e.onOpenExcludePicker, i = e.onVisibilityChange, l = e.visibility, u = d(null), _ = d(r("WAWebNoop")), f = d(!1), g = p(), h = (t = g.find(function(e) {
			return e.value === l;
		})) == null ? void 0 : t.label, y = function(t) {
			if (_.current(), f.current = !0, t === "contact_blacklist") {
				a();
				return;
			}
			i(t);
		}, C = s.jsx(r("WDSMenu.react"), { children: g.map(function(e) {
			return s.jsx(r("WDSMenuItem.react"), {
				isToggleable: !0,
				onPress: function() {
					return y(e.value);
				},
				testid: "pix-visibility-" + e.value,
				title: e.label,
				toggled: e.value === l
			}, e.value);
		}) }), b = r("useWDSMenu")({
			targetRef: u,
			menu: C,
			dismissable: !0
		}), v = b.closeMenu, S = b.isMenuOpen, R = b.menuPortal, L = b.openMenu;
		c(function() {
			_.current = v;
		}, [v]);
		var E = function(t) {
			S ? v() : L(), t == null || t.currentTarget.blur();
		}, k = function() {
			if (f.current) {
				f.current = !1;
				var e = document.activeElement;
				e instanceof HTMLElement && e.blur();
				return;
			}
			E();
		};
		return s.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: m.row,
			align: "start",
			justify: "start",
			children: s.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: m.column,
				align: "start",
				justify: "center",
				children: s.jsxs("div", {
					className: "xh8yej3",
					ref: u,
					"data-testid": "pix-visibility-select",
					children: [s.jsx(r("WDSTextField.react"), {
						label: o("WAWebConsumerPixStrings").getConsumerPixVisibilityLabel(),
						EndIcon: r("WDSIconIcChevronDown.react"),
						onEndIconClick: E,
						value: (n = h == null ? void 0 : h.toString()) != null ? n : "",
						onFocus: k,
						testid: "pix_visibility_textfield"
					}), R]
				})
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
