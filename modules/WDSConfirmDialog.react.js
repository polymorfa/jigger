__d("WDSConfirmDialog.react", [
	"fbt",
	"WDSButtonGroup.react",
	"WDSDialog.react",
	"WDSSwitch.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useId, d = -8;
	function m(e) {
		var t = e.cancelLabel, n = t === void 0 ? s._(
			/*BTDS*/
			""
		) : t, o = e.conditional, a = e.confirmLabel, i = e.description, l = e.destructive, d = l === void 0 ? !1 : l, m = e.onConfirm, p = e.onDismiss, _ = e.onSecondary, f = e.open, g = e.secondaryLabel, h = e.title, y = u.jsx(r("WDSButtonGroup.react"), {
			orientation: "stacked",
			width: "fill",
			primaryButtonProps: {
				label: a,
				onPress: m,
				testid: "popup-controls-ok",
				type: d ? "destructive" : "default",
				variant: d ? "outline" : "filled"
			},
			secondaryButtonProps: g != null && _ != null ? {
				label: g,
				onPress: _,
				testid: "popup-controls-extra",
				type: "default",
				variant: d ? "outline" : "borderless"
			} : void 0,
			tertiaryButtonProps: {
				label: n,
				onPress: p,
				testid: "popup-controls-cancel",
				variant: "borderless"
			}
		}), C = c(), b = o != null ? u.jsxs("div", {
			className: "x6s0dn4 x1h3rtpe x6nvzda x4i4b9w xhl9efl xj65ea0 x78zum5 x1f0uite xs2akgl x1qughib x1qfufaz x1w5wx5t x1xrf6ya xscbp6u xdx6fka xvtqlqk",
			"data-testid": void 0,
			children: [u.jsxs("div", {
				className: "x78zum5 xdt5ytf x1b73lln x46w9ns",
				"data-testid": void 0,
				children: [u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDefault",
					children: o.title
				}), o.description != null && u.jsx(r("WDSText.react"), {
					id: C,
					type: "Body3",
					colorName: "contentDeemphasized",
					children: o.description
				})]
			}), u.jsx(r("WDSSwitch.react"), {
				"aria-label": o.title,
				"aria-describedby": o.description != null ? C : void 0,
				testid: void 0,
				value: o.checked,
				onChange: function(t) {
					return o.onChange(t);
				}
			})]
		}) : null;
		return u.jsx(r("WDSDialog.react"), {
			closeButton: !1,
			description: i,
			footer: y,
			headerType: "expressive",
			layoutType: "expressive",
			onDismiss: p,
			open: f,
			size: "sm",
			testid: void 0,
			title: h,
			children: b
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
