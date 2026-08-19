__d("WAWebBusinessProfileTextField.react", [
	"fbt",
	"WAWebFlex.react",
	"WDSButton.react",
	"WDSText.react",
	"WDSTextField.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		editButton: {
			paddingTop: "x889kno",
			paddingBottom: "x1a8lsjc",
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		fieldContainer: {
			alignSelf: "xkh2ocl",
			paddingBottom: "x12xbjc7",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "x12w63v0",
			paddingTop: "x16ovd2e",
			$$css: !0
		},
		iconContainer: {
			color: "xhslqc4",
			height: "x1nqnulx",
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			width: "x1xvr5cs",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.EndIcon, n = e.editable, a = n === void 0 ? !0 : n, i = e.error, l = e.errorText, d = e.fieldName, m = e.icon, p = e.label, _ = e.locked, f = e.onBlur, g = e.onChange, h = e.onClick, y = e.onEditClick, C = e.onEndIconClick, b = e.onLockedClick, v = e.readOnly, S = e.ref, R = e.testid, L = e.trailing, E = e.value, k = e.xstyle, I = function(t) {
			g != null && d != null && g(d, t);
		}, T = function() {
			f != null && d != null && f(d, E);
		}, D = function() {
			if (_ === !0) {
				b != null && b();
				return;
			}
			h != null && h();
		};
		if (a) return u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 12,
			ref: S,
			role: "group",
			"aria-label": p,
			xstyle: [c.fieldContainer, k],
			children: [u.jsx(o("WAWebFlex.react").FlexItem, {
				align: "center",
				justify: "center",
				xstyle: c.iconContainer,
				children: m
			}), u.jsx("div", {
				className: "x98rzlu",
				children: u.jsx(r("WDSTextField.react"), {
					EndIcon: t,
					label: p,
					value: E,
					onValueChange: I,
					onFocus: D,
					onBlur: f != null ? T : void 0,
					onEndIconClick: C,
					error: i,
					errorText: l,
					readOnly: _ === !0 ? !0 : v,
					testid: R
				})
			})]
		});
		var x = p !== "";
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 12,
			ref: S,
			role: "group",
			"aria-label": x ? p : E,
			xstyle: [c.fieldContainer, k],
			children: [
				u.jsx(o("WAWebFlex.react").FlexItem, {
					align: "center",
					justify: "center",
					xstyle: c.iconContainer,
					children: m
				}),
				u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "start",
					grow: 1,
					children: [x && u.jsx(r("WDSText.react"), {
						type: "Body3",
						colorName: "contentDeemphasized",
						children: p
					}), L != null ? u.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						gap: 4,
						children: [u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDefault",
							children: E
						}), L]
					}) : u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDefault",
						children: E
					})]
				}),
				y != null && u.jsx(r("WDSButton.react"), {
					variant: "tonal",
					label: s._(
						/*BTDS*/
						""
					),
					xstyle: c.editButton,
					onPress: y
				})
			]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
