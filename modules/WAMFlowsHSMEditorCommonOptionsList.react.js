__d("WAMFlowsHSMEditorCommonOptionsList.react", [
	"fbt",
	"GeoButton.react",
	"GeoHStack.react",
	"GeoIcon.react",
	"GeoText.react",
	"GeoVStack.react",
	"WAMFlowsFlowProvider.react",
	"WAMFlowsHSMEditorCommonOptionsUtils.react",
	"WAMFlowsHSMEditorInputField.react",
	"WAMFlowsHSMFbt",
	"meta-brand-container-with-lid-filled-16",
	"meta-brand-plus-outline-16",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState;
	function p(e) {
		var t = e.dataSource, n = e.isDisabled, a = n === void 0 ? !1 : n, i = e.maxLabelLength, l = e.maxOptions, c = e.minOptions, p = e.onItemAdd, _ = e.onItemRemove, f = e.onItemTitleChange, g = e.setDataSource, h = m(!1), y = h[0], C = h[1], b = o("WAMFlowsFlowProvider.react").useWAMFlow(), v = b.setIsFlowVisible;
		return d(function() {
			g(o("WAMFlowsHSMEditorCommonOptionsUtils.react").replaceOptionIds(t)), C(!0);
		}, []), y ? u.jsxs(u.Fragment, { children: [
			u.jsx(r("GeoText.react"), { children: s._(
				/*BTDS*/
				""
			) }),
			t.map(function(e, n) {
				return u.jsx(r("GeoVStack.react"), { children: u.jsxs(r("GeoHStack.react"), { children: [u.jsx(r("WAMFlowsHSMEditorInputField.react"), {
					isDisabled: a,
					isLabelHidden: !0,
					isRequired: !0,
					label: s._(
						/*BTDS*/
						"",
						[s._param("number", n + 1)]
					),
					maxLength: i,
					onChange: function(n) {
						return f(e.id, n);
					},
					value: e.title
				}), u.jsx(r("GeoButton.react"), {
					disabledMessage: o("WAMFlowsHSMFbt").MIN_OPTIONS_LIMIT_REACHED_TOOLTIP(c),
					icon: u.jsx(r("GeoIcon.react"), {
						color: a || t.length === c ? "placeholder" : "default",
						icon: o("meta-brand-container-with-lid-filled-16").metaBrandContainerWithLidTrashFilled16
					}),
					isDisabled: a || t.length === c,
					isLabelHidden: !0,
					label: s._(
						/*BTDS*/
						""
					),
					onClick: function() {
						v(!0), _(e.id);
					},
					variant: "flat"
				})] }) }, e.id.split("_")[0]);
			}),
			u.jsx(r("GeoButton.react"), {
				disabledMessage: o("WAMFlowsHSMFbt").MAX_OPTIONS_LIMIT_REACHED_TOOLTIP(l),
				icon: o("meta-brand-plus-outline-16").metaBrandPlusPlusOutline16,
				isDisabled: a || l != null && t.length >= l,
				label: s._(
					/*BTDS*/
					""
				),
				onClick: function() {
					v(!0), p();
				}
			})
		] }) : null;
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
