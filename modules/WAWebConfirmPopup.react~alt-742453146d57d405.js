__d("WAWebConfirmPopup.react", [
	"WAWebButton.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebNoop",
	"WDSButton.react",
	"WDSButtonGroup.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s = [
		"onCancel",
		"onOK",
		"onOverlayClick"
	], u, c = u || (u = o("react"));
	function d(t) {
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.buttonAlign, s = l === void 0 ? "end" : l, u = i.buttonWidth, d = u === void 0 ? "hug" : u, p = function(t) {
			t.stopPropagation(), t.preventDefault(), i.onOK == null || i.onOK();
		}, _ = function(t) {
			t.stopPropagation(), t.preventDefault(), i.onCancel == null || i.onCancel(t);
		}, f = i.onOK ? c.jsx(o("WAWebButton.react").Button, {
			testid: "popup-controls-ok",
			type: i.okButtonType ? i.okButtonType : "primary",
			onClick: p,
			disabled: i.okDisabled,
			spinner: i.okSpinner === !0,
			children: i.okText != null ? i.okText : r("WAWebFbtCommon")("OK")
		}) : null, g = null;
		i.onCancel && (g = c.jsx(r("WDSButton.react"), {
			variant: "borderless",
			onPress: _,
			testid: "popup-controls-cancel",
			disabled: i.cancelDisabled,
			size: "medium",
			type: "default",
			label: i.cancelText != null && i.cancelText !== "" ? i.cancelText : r("WAWebFbtCommon")("Cancel")
		}));
		var h = (n = i.extraButtonNode) != null ? n : i.extraButtonProps ? c.jsx(m, babelHelpers.extends({}, i.extraButtonProps)) : null, y = { escape: i.onCancel ? _ : r("WAWebNoop") }, C = null;
		if (h != null && i.splitLayout === !0) C = c.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "all",
			align: "center",
			grow: 1,
			children: [h, c.jsxs(o("WAWebFlex.react").FlexRow, {
				columnGap: 8,
				children: [g, f]
			})]
		});
		else if (h != null) {
			var b, v = [
				g,
				h,
				f
			];
			C = c.jsxs(o("WAWebButton.react").ButtonGroup, {
				direction: (b = i.buttonsDirection) != null ? b : "vertical",
				align: s,
				children: [
					v[0],
					v[1],
					v[2]
				]
			});
		} else if (g != null || f != null) {
			var S = g != null && f != null;
			if (S) {
				var R;
				C = c.jsx(r("WDSButtonGroup.react"), {
					width: d,
					orientation: ((R = i.buttonsDirection) != null ? R : "horizontal") === "horizontal" ? "horizontal" : "stacked",
					primaryButtonProps: {
						variant: "filled",
						onPress: p,
						testid: "popup-controls-ok",
						disabled: i.okDisabled,
						loading: i.okSpinner === !0,
						size: "medium",
						Icon: i.okIcon,
						type: i.okButtonType === "solid-warning" || i.okButtonType === "warning" || i.okButtonType === "negative-destructive" ? "destructive" : "default",
						label: i.okText != null ? i.okText : r("WAWebFbtCommon")("OK")
					},
					tertiaryButtonProps: {
						variant: "borderless",
						onPress: _,
						testid: "popup-controls-cancel",
						disabled: i.cancelDisabled,
						size: "medium",
						type: "default",
						label: i.cancelText != null && i.cancelText !== "" ? i.cancelText : r("WAWebFbtCommon")("Cancel")
					}
				});
			} else {
				var L, E;
				C = c.jsxs(o("WAWebButton.react").ButtonGroup, {
					direction: (L = i.buttonsDirection) != null ? L : "horizontal",
					columnGap: ((E = i.buttonsDirection) != null ? E : "horizontal") === "horizontal" ? 8 : void 0,
					align: s,
					children: [g, f]
				});
			}
		}
		return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			"data-testid": "confirm-popup",
			handlers: y,
			ref: a,
			children: c.jsx(o("WAWebModal.react").Modal, {
				actions: C,
				controlsStyle: i.buttonGroupStyle,
				children: i.children,
				cover: i.cover,
				onDragChange: i.onDragChange,
				onOverlayClick: i.onOverlayClick,
				onDrop: i.onDrop,
				type: i.type,
				title: i.title,
				testid: i.testid,
				overflow: i.overflow,
				ariaLabel: i.ariaLabel,
				contentRef: i.contentRef,
				tsNavigationData: i.tsNavigationData
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.disabled, n = t === void 0 ? !1 : t, r = e.onClick, a = e.primary, i = a === void 0 ? !1 : a, l = e.spinner, s = e.text, u = e.type, d = function(t) {
			t.stopPropagation(), t.preventDefault(), r();
		};
		return c.jsx(o("WAWebButton.react").Button, {
			testid: "popup-controls-extra",
			type: u != null ? u : i ? "primary" : "secondary",
			onClick: d,
			disabled: n,
			spinner: l,
			children: s
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	async function p(e) {
		var t = e.onCancel, n = e.onOK, r = e.onOverlayClick, a = babelHelpers.objectWithoutPropertiesLoose(e, s);
		return new Promise(function(e) {
			var i = function() {
				o("WAWebModalManager").ModalManager.off("close_modal", i), e(!1);
			}, l = function() {
				o("WAWebModalManager").ModalManager.off("close_modal", i), n == null || n(), o("WAWebModalManager").ModalManager.close(), e(!0);
			}, s = function(r) {
				o("WAWebModalManager").ModalManager.off("close_modal", i), t == null || t(r), o("WAWebModalManager").ModalManager.close(), e(!1);
			}, u = function(n) {
				o("WAWebModalManager").ModalManager.off("close_modal", i), r == null || r(n), o("WAWebModalManager").ModalManager.close(), e(!1);
			};
			o("WAWebModalManager").ModalManager.on("close_modal", i), o("WAWebModalManager").ModalManager.open(c.jsx(d, babelHelpers.extends({
				onOverlayClick: u,
				onCancel: s,
				onOK: l
			}, a)));
		});
	}
	l.ConfirmPopup = d, l.waitForConfirmPopup = p;
}), 98);
