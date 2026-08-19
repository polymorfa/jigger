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
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = { fullWidth: {
		width: "xh8yej3",
		$$css: !0
	} };
	function d(t) {
		var n = t.buttonGroupJustify, a = n === void 0 ? "end" : n, i = t.description, l = t.extraContent, s = t.filledIconBgColor, d = t.filledIconColor, m = t.icon, p = t.iconSize, _ = p === void 0 ? "small" : p, f = t.onOverlayClick, g = t.onPrimaryActionClick, h = t.onSecondaryActionClick, y = t.primaryActionDisabled, C = y === void 0 ? !1 : y, b = t.primaryActionText, v = b === void 0 ? r("WAWebFbtCommon")("OK") : b, S = t.secondaryActionText, R = t.stretchButtons, L = R === void 0 ? !1 : R, E = t.testid, k = t.title, I = t.useFilledIcon, T = I === void 0 ? !0 : I, D = function() {
			(async function() {
				await (g == null ? void 0 : g()) !== !1 && o("WAWebModalManager").ModalManager.close();
			})();
		}, x = function() {
			(async function() {
				await (h == null ? void 0 : h()) !== !1 && o("WAWebModalManager").ModalManager.close();
			})();
		}, $ = async function() {
			await (f == null ? void 0 : f()) !== !1 && o("WAWebModalManager").ModalManager.close();
		}, P = L === !0 ? "flexible" : "fit", N = T ? null : m;
		return u.jsx(o("WAWebModal.react").Modal, {
			testid: E,
			type: o("WAWebModal.react").ModalTheme.Small,
			onOverlayClick: $,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [
				u.jsx(o("WAWebFlex.react").FlexItem, {
					align: "center",
					children: N == null ? u.jsx(r("WAWebFilledIcon.react"), {
						Icon: m,
						size: _,
						iconColor: d,
						backgroundColor: s
					}) : u.jsx(N, {})
				}),
				u.jsx(o("WAWebFlex.react").FlexItem, {
					align: "center",
					testid: "popup-title",
					children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
						paddingTop: 20,
						weight: "semibold",
						children: k
					})
				}),
				i != null && u.jsx(o("WAWebText.react").WAWebTextMuted, {
					testid: "popup-description",
					paddingTop: 16,
					children: i
				}),
				l,
				h != null && S != null ? u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.fullWidth, o("WDSFlex.stylex").wdsFlex.flex, o("WDSFlex.stylex").wdsFlex.justifyEnd), { children: u.jsx(r("WDSButtonGroup.react"), {
					orientation: "horizontal",
					tertiaryButtonProps: {
						variant: "borderless",
						type: "default",
						onPress: x,
						testid: "popup-controls-secondary",
						size: "medium",
						widthMode: P,
						label: S
					},
					primaryButtonProps: {
						variant: "filled",
						type: "default",
						onPress: D,
						disabled: C,
						testid: "popup-controls-primary",
						size: "medium",
						widthMode: P,
						label: v
					}
				}) })) : u.jsxs(o("WAWebButton.react").ButtonGroup, {
					paddingTop: 20,
					alignSelf: "stretch",
					justify: a,
					direction: "horizontal",
					children: [h != null && S != null && u.jsx(r("WDSButton.react"), {
						testid: "popup-controls-secondary",
						onPress: x,
						variant: "borderless",
						type: "default",
						size: "medium",
						widthMode: P,
						label: S
					}), u.jsx(r("WDSButton.react"), {
						testid: "popup-controls-primary",
						onPress: D,
						disabled: C,
						variant: "filled",
						type: "default",
						size: "medium",
						widthMode: P,
						label: v
					})]
				})
			] })
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
