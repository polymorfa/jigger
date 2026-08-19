__d("WAWebConfirmPopup.react", [
	"Promise",
	"WAWebButton.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebNoop",
	"WDSButton.react",
	"WDSButtonGroup.react",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s = [
		"onCancel",
		"onOK",
		"onOverlayClick"
	], u, c, d = c || (c = o("react"));
	function m(t) {
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.buttonAlign, s = l === void 0 ? "end" : l, u = i.buttonWidth, c = u === void 0 ? "hug" : u, m = function(t) {
			t.stopPropagation(), t.preventDefault(), i.onOK == null || i.onOK();
		}, _ = function(t) {
			t.stopPropagation(), t.preventDefault(), i.onCancel == null || i.onCancel(t);
		}, f = i.onOK ? d.jsx(o("WAWebButton.react").Button, {
			testid: "popup-controls-ok",
			type: i.okButtonType ? i.okButtonType : "primary",
			onClick: m,
			disabled: i.okDisabled,
			spinner: i.okSpinner === !0,
			children: i.okText != null ? i.okText : r("WAWebFbtCommon")("OK")
		}) : null, g = null;
		i.onCancel && (g = d.jsx(r("WDSButton.react"), {
			variant: "borderless",
			onPress: _,
			testid: "popup-controls-cancel",
			disabled: i.cancelDisabled,
			size: "medium",
			type: "default",
			label: i.cancelText != null && i.cancelText !== "" ? i.cancelText : r("WAWebFbtCommon")("Cancel")
		}));
		var h = (n = i.extraButtonNode) != null ? n : i.extraButtonProps ? d.jsx(p, babelHelpers.extends({}, i.extraButtonProps)) : null, y = { escape: i.onCancel ? _ : r("WAWebNoop") }, C = null;
		if (h != null && i.splitLayout === !0) C = d.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "all",
			align: "center",
			grow: 1,
			children: [h, d.jsxs(o("WAWebFlex.react").FlexRow, {
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
			C = d.jsxs(o("WAWebButton.react").ButtonGroup, {
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
				C = d.jsx(r("WDSButtonGroup.react"), {
					width: c,
					orientation: ((R = i.buttonsDirection) != null ? R : "horizontal") === "horizontal" ? "horizontal" : "stacked",
					primaryButtonProps: {
						variant: "filled",
						onPress: m,
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
				C = d.jsxs(o("WAWebButton.react").ButtonGroup, {
					direction: (L = i.buttonsDirection) != null ? L : "horizontal",
					columnGap: ((E = i.buttonsDirection) != null ? E : "horizontal") === "horizontal" ? 8 : void 0,
					align: s,
					children: [g, f]
				});
			}
		}
		return d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			"data-testid": "confirm-popup",
			handlers: y,
			ref: a,
			children: d.jsx(o("WAWebModal.react").Modal, {
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
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = o("react-compiler-runtime").c(8), n = e.disabled, r = e.onClick, a = e.primary, i = e.spinner, l = e.text, s = e.type, u = n === void 0 ? !1 : n, c = a === void 0 ? !1 : a, m;
		t[0] !== r ? (m = function(t) {
			t.stopPropagation(), t.preventDefault(), r();
		}, t[0] = r, t[1] = m) : m = t[1];
		var p = m, _ = s != null ? s : c ? "primary" : "secondary", f;
		return t[2] !== u || t[3] !== p || t[4] !== i || t[5] !== _ || t[6] !== l ? (f = d.jsx(o("WAWebButton.react").Button, {
			testid: "popup-controls-extra",
			type: _,
			onClick: p,
			disabled: u,
			spinner: i,
			children: l
		}), t[2] = u, t[3] = p, t[4] = i, t[5] = _, t[6] = l, t[7] = f) : f = t[7], f;
	}
	function _(e) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.onCancel, r = e.onOK, a = e.onOverlayClick, i = babelHelpers.objectWithoutPropertiesLoose(e, s);
			return new (u || (u = (n("Promise"))))(function(e) {
				var n = function() {
					o("WAWebModalManager").ModalManager.off("close_modal", n), e(!1);
				}, l = function() {
					o("WAWebModalManager").ModalManager.off("close_modal", n), r == null || r(), o("WAWebModalManager").ModalManager.close(), e(!0);
				}, s = function(a) {
					o("WAWebModalManager").ModalManager.off("close_modal", n), t == null || t(a), o("WAWebModalManager").ModalManager.close(), e(!1);
				}, u = function(r) {
					o("WAWebModalManager").ModalManager.off("close_modal", n), a == null || a(r), o("WAWebModalManager").ModalManager.close(), e(!1);
				};
				o("WAWebModalManager").ModalManager.on("close_modal", n), o("WAWebModalManager").ModalManager.open(d.jsx(m, babelHelpers.extends({
					onOverlayClick: u,
					onCancel: s,
					onOK: l
				}, i)));
			});
		}), f.apply(this, arguments);
	}
	l.ConfirmPopup = m, l.waitForConfirmPopup = _;
}), 98);
