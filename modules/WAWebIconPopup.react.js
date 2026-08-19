__d("WAWebIconPopup.react", [
	"WAWebButton.react",
	"WAWebFbtCommon",
	"WAWebFilledIcon.react",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebText.react",
	"WDSButton.react",
	"WDSButtonGroup.react",
	"WDSFlex.stylex",
	"asyncToGeneratorRuntime",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = { fullWidth: {
		width: "xh8yej3",
		$$css: !0
	} };
	function d(t) {
		var a = t.buttonGroupJustify, i = a === void 0 ? "end" : a, l = t.description, s = t.extraContent, d = t.filledIconBgColor, m = t.filledIconColor, p = t.icon, _ = t.iconSize, f = _ === void 0 ? "small" : _, g = t.onOverlayClick, h = t.onPrimaryActionClick, y = t.onSecondaryActionClick, C = t.primaryActionDisabled, b = C === void 0 ? !1 : C, v = t.primaryActionText, S = v === void 0 ? r("WAWebFbtCommon")("OK") : v, R = t.secondaryActionText, L = t.stretchButtons, E = L === void 0 ? !1 : L, k = t.testid, I = t.title, T = t.useFilledIcon, D = T === void 0 ? !0 : T, x = function() {
			n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				(yield h == null ? void 0 : h()) !== !1 && o("WAWebModalManager").ModalManager.close();
			})();
		}, $ = function() {
			n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				(yield y == null ? void 0 : y()) !== !1 && o("WAWebModalManager").ModalManager.close();
			})();
		}, P = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				(yield g == null ? void 0 : g()) !== !1 && o("WAWebModalManager").ModalManager.close();
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), N = E === !0 ? "flexible" : "fit", M = D ? null : p;
		return u.jsx(o("WAWebModal.react").Modal, {
			testid: k,
			type: o("WAWebModal.react").ModalTheme.Small,
			onOverlayClick: P,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [
				u.jsx(o("WAWebFlex.react").FlexItem, {
					align: "center",
					children: M == null ? u.jsx(r("WAWebFilledIcon.react"), {
						Icon: p,
						size: f,
						iconColor: m,
						backgroundColor: d
					}) : u.jsx(M, {})
				}),
				u.jsx(o("WAWebFlex.react").FlexItem, {
					align: "center",
					testid: "popup-title",
					children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
						paddingTop: 20,
						weight: "semibold",
						children: I
					})
				}),
				l != null && u.jsx(o("WAWebText.react").WAWebTextMuted, {
					testid: "popup-description",
					paddingTop: 16,
					children: l
				}),
				s,
				y != null && R != null ? u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.fullWidth, o("WDSFlex.stylex").wdsFlex.flex, o("WDSFlex.stylex").wdsFlex.justifyEnd), { children: u.jsx(r("WDSButtonGroup.react"), {
					orientation: "horizontal",
					tertiaryButtonProps: {
						variant: "borderless",
						type: "default",
						onPress: $,
						testid: "popup-controls-secondary",
						size: "medium",
						widthMode: N,
						label: R
					},
					primaryButtonProps: {
						variant: "filled",
						type: "default",
						onPress: x,
						disabled: b,
						testid: "popup-controls-primary",
						size: "medium",
						widthMode: N,
						label: S
					}
				}) })) : u.jsxs(o("WAWebButton.react").ButtonGroup, {
					paddingTop: 20,
					alignSelf: "stretch",
					justify: i,
					direction: "horizontal",
					children: [y != null && R != null && u.jsx(r("WDSButton.react"), {
						testid: "popup-controls-secondary",
						onPress: $,
						variant: "borderless",
						type: "default",
						size: "medium",
						widthMode: N,
						label: R
					}), u.jsx(r("WDSButton.react"), {
						testid: "popup-controls-primary",
						onPress: x,
						disabled: b,
						variant: "filled",
						type: "default",
						size: "medium",
						widthMode: N,
						label: S
					})]
				})
			] })
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
