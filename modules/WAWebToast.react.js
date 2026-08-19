__d("WAWebToast.react", [
	"WAWebAccessibility.react",
	"WAWebFbtCommon",
	"WAWebFocusTracer",
	"WAWebKeyboardConstants",
	"WAWebKeyboardTabUtils",
	"WAWebToastManager",
	"WAWebXAltIcon.react",
	"WDSFocusStateStyles",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"uniqueID",
	"useLazyRef",
	"useWAWebTimeout"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useImperativeHandle, _ = d.useRef, f = { marginInlineStart15: {
		marginInlineStart: "xx6jrq6",
		$$css: !0
	} }, g = 4e3, h = {
		btnSuccess: {
			color: "x1du590y",
			fontWeight: "x117nqv4",
			$$css: !0
		},
		button: {
			color: "x17daq4n",
			cursor: "x1ypdohk",
			fontSize: "x1f6kntn",
			lineHeight: "x1evy7pa",
			flexShrink: "x2lah0s",
			":focus-visible_borderStartStartRadius": "xfuo7wg",
			":focus-visible_borderStartEndRadius": "xepj7l6",
			":focus-visible_borderEndEndRadius": "x1911790",
			":focus-visible_borderEndStartRadius": "xpxzo57",
			$$css: !0
		},
		close: {
			color: "xto31z9",
			":focus-visible_borderStartStartRadius": "xfuo7wg",
			":focus-visible_borderStartEndRadius": "xepj7l6",
			":focus-visible_borderEndEndRadius": "x1911790",
			":focus-visible_borderEndStartRadius": "xpxzo57",
			$$css: !0
		},
		right: {
			insetInlineEnd: "xtijo5x",
			left: null,
			right: null,
			$$css: !0
		},
		toast: {
			alignItems: "x6s0dn4",
			backgroundColor: "x1e6sl3u",
			borderStartStartRadius: "x2yqj0j",
			borderStartEndRadius: "x1u1eq46",
			borderEndEndRadius: "x1fxmhz6",
			borderEndStartRadius: "xr2wkf5",
			color: "x17t9dm2",
			display: "x78zum5",
			fontSize: "x1f6kntn",
			lineHeight: "x1evy7pa",
			$$css: !0
		}
	};
	function y(e) {
		return e === void 0 && (e = ""), r("uniqueID")(e || "toast");
	}
	function C(t) {
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.msg, s = i.action, u = i.duration, d = u === void 0 ? g : u, m = i.visible, _ = m === void 0 ? !0 : m, f = r("useLazyRef")(function() {
			return y();
		}).current, h = (n = i.id) != null ? n : f, C = o("useWAWebTimeout").useTimeout(function() {
			o("WAWebToastManager").ToastManager.close(h);
		}, d, { immediate: !0 }), v = C[0], R = function() {
			o("WAWebToastManager").ToastManager.close(h);
		};
		if (p(a, function() {
			return { restartDelay: v };
		}), !_) return c.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, {
			text: l,
			assertive: !0
		});
		var L;
		if (s) {
			var E = Array.isArray(s) ? s : [s];
			L = E.map(function(e, t) {
				return c.jsx(b, {
					buttonText: e.actionText,
					onClick: e.dismiss === !0 ? R : e.onAction,
					theme: e.theme
				}, e.actionText.toString() + t);
			});
		}
		return c.jsx(S, {
			actionText: l,
			actionButtons: L
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = o("react-compiler-runtime").c(7), n = e.buttonText, a = e.onClick, i = e.ref, l = e.theme, u;
		t[0] !== l ? (u = (s || (s = r("stylex"))).props(h.button, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, f.marginInlineStart15, l === "success" && h.btnSuccess), t[0] = l, t[1] = u) : u = t[1];
		var d;
		return t[2] !== n || t[3] !== a || t[4] !== i || t[5] !== u ? (d = c.jsx("button", babelHelpers.extends({}, u, {
			onClick: a,
			ref: i,
			children: n
		})), t[2] = n, t[3] = a, t[4] = i, t[5] = u, t[6] = d) : d = t[6], d;
	}
	function v(e) {
		var t = e.onClick, n = e.ref;
		return c.jsx("button", babelHelpers.extends({}, (s || (s = r("stylex"))).props(o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, h.close, f.marginInlineStart15), {
			onClick: t,
			"aria-label": r("WAWebFbtCommon")("Close"),
			ref: n,
			children: c.jsx(o("WAWebXAltIcon.react").XAltIcon, {})
		}));
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = o("react-compiler-runtime").c(16), n = e.actionButtons, a = e.actionText, i = e.dismissButton, l = e.focusButtonRef, u = e.toastPosition, d;
		t[0] !== l ? (d = function() {
			var e = l == null ? void 0 : l.current;
			e instanceof HTMLButtonElement && e.focus();
		}, t[0] = l, t[1] = d) : d = t[1];
		var p;
		t[2] !== a || t[3] !== l ? (p = [a, l], t[2] = a, t[3] = l, t[4] = p) : p = t[4], m(d, p);
		var f = _(null), g;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (g = function(t) {
			if (t.key === o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.TAB) {
				var e = f.current;
				if (e != null && e.contains(document.activeElement)) {
					var n = o("WAWebKeyboardTabUtils").getNextTabbableElement(e, t.shiftKey ? o("WAWebKeyboardTabUtils").TabDirection.BACKWARD : o("WAWebKeyboardTabUtils").TabDirection.FORWARD, o("WAWebKeyboardTabUtils").FocusType.TABBABLE);
					n != null && (t.stopPropagation(), t.preventDefault(), r("WAWebFocusTracer").focus(n));
				}
			}
		}, t[5] = g) : g = t[5];
		var y = g, C;
		t[6] !== u ? (C = (s || (s = r("stylex"))).props(h.toast, o("WDSPaddings.stylex").wdsPaddings.paddingVer12, o("WDSPaddings.stylex").wdsPaddings.paddingHor16, u === "RIGHT" && h.right), t[6] = u, t[7] = C) : C = t[7];
		var b;
		t[8] !== a ? (b = c.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, {
			text: a,
			assertive: !0
		}), t[8] = a, t[9] = b) : b = t[9];
		var v;
		return t[10] !== n || t[11] !== a || t[12] !== i || t[13] !== C || t[14] !== b ? (v = c.jsxs("div", babelHelpers.extends({}, C, {
			ref: f,
			tabIndex: 0,
			onKeyDown: y,
			"data-testid": "toast-body",
			children: [
				a,
				n,
				i,
				b
			]
		})), t[10] = n, t[11] = a, t[12] = i, t[13] = C, t[14] = b, t[15] = v) : v = t[15], v;
	}
	function R(e) {
		var t = e.action, n = e.msg, a = y(), i = null;
		o("WAWebToastManager").ToastManager.open(c.jsx(C, {
			id: a,
			msg: n,
			action: {
				actionText: r("WAWebFbtCommon")("Undo"),
				onAction: function() {
					i && (window.clearTimeout(i), i = null, o("WAWebToastManager").ToastManager.close(a));
				}
			}
		})), i = window.setTimeout(function() {
			t();
		}, g);
	}
	l.genId = y, l.Toast = C, l.ToastActionBtn = b, l.ToastDismissBtn = v, l.ToastBody = S, l.openUndoToast = R;
}), 98);
