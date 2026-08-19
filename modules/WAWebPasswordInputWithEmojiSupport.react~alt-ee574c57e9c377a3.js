__d("WAWebPasswordInputWithEmojiSupport.react", [
	"fbt",
	"WAWebABProps",
	"WAWebClassnames",
	"WAWebClickable.react",
	"WAWebCopyPasteSelectable.react",
	"WAWebDropdown.react",
	"WAWebEmojiPanel.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WDSButton.react",
	"WDSIconIcMood.react",
	"WDSIconIcVisibility.react",
	"WDSIconIcVisibilityOff.react",
	"WDSMargins.stylex",
	"WDSRichTextField.react",
	"react",
	"react-gui-use-focus",
	"useMergeRefs",
	"useWAWebIsKeyboardUser",
	"useWAWebTextFieldEmojiPicker",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = c.useState;
	function _(e) {
		return o("WAWebABProps").getABPropConfigValue("wds_web_rich_text_field") ? u.jsx(f, babelHelpers.extends({}, e)) : u.jsx(b, babelHelpers.extends({}, e));
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t, n = e.focusOnMount, o = n === void 0 ? !1 : n, a = e.onValueChange, i = r("useWAWebTextFieldEmojiPicker")({ emojiPickerAriaLabel: s._(
			/*BTDS*/
			""
		) }), l = i.emojiPicker, c = i.nodes, m = i.openEmojiPicker, p = i.richTextFieldRef;
		return d(function() {
			if (o) {
				var e;
				(e = p.current) == null || e.focus();
			}
		}, [o, p]), u.jsxs("div", {
			className: "x78zum5 x6s0dn4 x1qvou4u x1s70e7g",
			children: [u.jsx("div", {
				className: "x1iyjqo2 xeuugli x6ikm8r x10wlt62",
				children: u.jsx(r("WDSRichTextField.react"), {
					ref: p,
					placeholder: e.placeholder,
					testid: (t = e.testid) != null ? t : "password-input",
					type: "password",
					onValueChange: a,
					onEnter: e.onSubmit,
					EndIcon: r("WDSIconIcMood.react"),
					endIconAriaLabel: s._(
						/*BTDS*/
						""
					),
					onEndIconClick: m,
					nodes: c,
					visibilityToggleButtonAriaLabel: g
				})
			}), l]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		return e ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	var h = {
		emojiButton: {
			color: "x1v5yvga",
			alignSelf: "xamitd3",
			$$css: !0
		},
		accentIconColor: {
			color: "x1v5yvga",
			$$css: !0
		}
	};
	function y(e) {
		return u.jsx(r("WDSIconIcVisibility.react"), babelHelpers.extends({}, e, { iconXstyle: [e.iconXstyle, h.accentIconColor] }));
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		return u.jsx(r("WDSIconIcVisibilityOff.react"), babelHelpers.extends({}, e, { iconXstyle: [e.iconXstyle, h.accentIconColor] }));
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.enableShowPassword, n = t === void 0 ? !1 : t, a = e.focusOnMount, i = a === void 0 ? !1 : a, l = e.onSubmit, c = e.onValueChange, _ = e.placeholder, f = e.testid, g = p(""), h = g[0], b = g[1], S = r("useWAWebToggle")(!1), R = S[0], L = S[1], E = m(null), k = p(!1), I = k[0], T = k[1], D = o("react-gui-use-focus").useFocus({ onFocusChange: T }), x = r("useMergeRefs")(E, D), $ = r("useWAWebIsKeyboardUser")(), P = $.isKeyboardUser, N = function() {
			var e;
			(e = E.current) == null || e.focus();
		};
		d(function() {
			if (i) {
				var e;
				(e = E.current) == null || e.focus();
			}
		}, [i]);
		var M = R ? y : C, w = R ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), A = m(null), F = p(null), O = F[0], B = F[1], W = function(t) {
			var e = t.currentTarget.value;
			b(e), c(e);
		}, q = function(t) {
			t.key === "Enter" && (l == null || l());
		}, U = function(t) {
			var e = E.current;
			if (e) {
				e.focus();
				var n = e.selectionStart, r = e.selectionEnd, o = e.value, a = o.substring(0, n) + t + o.substring(r);
				e.value = a, e.setSelectionRange(r + t.length, r + t.length), b(a), c(a);
			}
			P && V();
		}, V = function() {
			B(null), P && N();
		}, H = null;
		O && (H = u.jsx(o("WAWebUimUie.react").UIE, {
			dismissOnWindowResize: !0,
			displayName: "EmojiPicker",
			escapable: !0,
			popable: !0,
			ref: A,
			requestDismiss: V,
			children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: O })
		}));
		var G = function(t) {
			t.preventDefault(), t.stopPropagation();
			var e = u.jsx(r("WAWebEmojiPanel.react"), {
				onEmoji: U,
				onFocusNext: N,
				onFocusPrev: N
			});
			B({
				menu: e,
				dirY: o("WAWebDropdown.react").DirY.TOP,
				type: o("WAWebDropdown.react").MenuType.EmojiPicker,
				anchor: t.target
			}), N();
		};
		return u.jsxs("div", babelHelpers.extends({}, {
			0: { className: "x1n2onr6 x78zum5 xk7ee7b xt7fyls xso031l x1q0q8m5 x16pkwpw x1j85h84" },
			1: { className: "x1n2onr6 x78zum5 xk7ee7b xt7fyls xv7zg05 x1q0q8m5 x1rrvw3c x18d9i69" }
		}[!!I << 0], { children: [
			u.jsx("input", {
				className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(o("WAWebCopyPasteSelectable.react").SELECTABLE_CSS_CLASS, "x1jchvi3 x14ug900 x1iyjqo2 xsl91qr x1aq9cx1 xe0m388 xhe8bae xe73qa2 xsgwwv8 xuhg6hn xli3dgm x1isl193 x1e225iy x1bnlyaz x12ws5rt x1a2a7pz xk7ee7b x6ikm8r x10wlt62 x1yrsyyn x1icxu4v x10b6aqq x25sj25"),
				"data-testid": f,
				onChange: W,
				onKeyDown: q,
				placeholder: String(_),
				ref: x,
				type: R ? "text" : "password",
				value: h
			}),
			n && u.jsx(r("WDSButton.react"), {
				Icon: M,
				"aria-label": w,
				xstyle: o("WDSMargins.stylex").wdsMargins.marginEnd8,
				onPress: L,
				variant: "borderless"
			}),
			u.jsx(v, { onClick: G }),
			H
		] }));
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.onClick;
		return u.jsx(o("WAWebClickable.react").Clickable, {
			onClick: t,
			title: s._(
				/*BTDS*/
				""
			),
			xstyle: h.emojiButton,
			children: u.jsx(r("WDSIconIcMood.react"), {})
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = _;
}), 226);
