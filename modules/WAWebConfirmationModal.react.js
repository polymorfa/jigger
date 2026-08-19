__d("WAWebConfirmationModal.react", [
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebText.react",
	"WDSButtonGroup.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useCallback, c = { marginBottom10: {
		marginBottom: "xyorhqc",
		$$css: !0
	} };
	function d(e, t) {
		return t ? "default" : e === "solid-warning" || e === "warning" || e === "warning-secondary" ? "destructive" : "default";
	}
	function m(e, t) {
		return t || e === "solid-warning" || e === "primary" ? "filled" : "outline";
	}
	function p(e) {
		var t = e.actionFailure, n = e.actionText, a = e.actionType, i = e.children, l = e.contentText, p = e.failureText, _ = e.isInputEmpty, f = e.isRunningAction, g = e.onCancel, h = e.onSubmit, y = e.testidPrefix, C = e.tsNavigationData, b = u(function() {
			o("WAWebModalManager").ModalManager.close(), g == null || g();
		}, [g]), v = t ? r("WAWebFbtCommon")("Try again") : n, S = s.jsx(r("WDSButtonGroup.react"), {
			width: "hug",
			orientation: "horizontal",
			primaryButtonProps: {
				variant: m(a, t),
				type: d(a, t),
				onPress: h,
				testid: y + "-action-button",
				disabled: _ || f,
				loading: f,
				label: v
			},
			tertiaryButtonProps: {
				variant: "outline",
				type: "default",
				onPress: b,
				testid: y + "-cancel-button",
				disabled: f,
				label: r("WAWebFbtCommon")("Cancel")
			}
		}), R = t ? s.jsx(o("WAWebText.react").WAWebTextMuted, {
			testid: y + "-failure-text",
			children: p
		}) : s.jsx(o("WAWebText.react").WAWebTextLarge, {
			testid: y + "-content",
			children: l
		});
		return s.jsxs(o("WAWebModal.react").Modal, {
			testid: y,
			type: t ? o("WAWebModal.react").ModalTheme.Small : o("WAWebModal.react").ModalTheme.DeleteNewsletter,
			actions: S,
			overflow: "visible",
			tsNavigationData: C,
			children: [s.jsx(o("WAWebFlex.react").FlexRow, {
				xstyle: c.marginBottom10,
				children: R
			}), t ? null : i]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
