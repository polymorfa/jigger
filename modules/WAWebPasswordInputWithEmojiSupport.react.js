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
	"react-compiler-runtime",
	"react-gui-use-focus",
	"useMergeRefs",
	"useWAWebIsKeyboardUser",
	"useWAWebTextFieldEmojiPicker",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = c.useState;
	function _(e) {
		var t = o("react-compiler-runtime").c(4);
		if (o("WAWebABProps").getABPropConfigValue("wds_web_rich_text_field")) {
			var n;
			return t[0] !== e ? (n = u.jsx(f, babelHelpers.extends({}, e)), t[0] = e, t[1] = n) : n = t[1], n;
		}
		var r;
		return t[2] !== e ? (r = u.jsx(b, babelHelpers.extends({}, e)), t[2] = e, t[3] = r) : r = t[3], r;
	}
	function f(e) {
		var t, n = o("react-compiler-runtime").c(19), a = e.focusOnMount, i = e.onValueChange, l = a === void 0 ? !1 : a, c;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (c = { emojiPickerAriaLabel: s._(
			/*BTDS*/
			""
		) }, n[0] = c) : c = n[0];
		var m = r("useWAWebTextFieldEmojiPicker")(c), p = m.emojiPicker, _ = m.nodes, f = m.openEmojiPicker, h = m.richTextFieldRef, y, C;
		n[1] !== l || n[2] !== h ? (y = function() {
			if (l) {
				var e;
				(e = h.current) == null || e.focus();
			}
		}, C = [l, h], n[1] = l, n[2] = h, n[3] = y, n[4] = C) : (y = n[3], C = n[4]), d(y, C);
		var b, v;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (b = { className: "x78zum5 x6s0dn4 x1qvou4u x1s70e7g" }, v = { className: "x1iyjqo2 xeuugli x6ikm8r x10wlt62" }, n[5] = b, n[6] = v) : (b = n[5], v = n[6]);
		var S = (t = e.testid) != null ? t : "password-input", R;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
			/*BTDS*/
			""
		), n[7] = R) : R = n[7];
		var L;
		n[8] !== _ || n[9] !== i || n[10] !== f || n[11] !== e.onSubmit || n[12] !== e.placeholder || n[13] !== h || n[14] !== S ? (L = u.jsx("div", babelHelpers.extends({}, v, { children: u.jsx(r("WDSRichTextField.react"), {
			ref: h,
			placeholder: e.placeholder,
			testid: S,
			type: "password",
			onValueChange: i,
			onEnter: e.onSubmit,
			EndIcon: r("WDSIconIcMood.react"),
			endIconAriaLabel: R,
			onEndIconClick: f,
			nodes: _,
			visibilityToggleButtonAriaLabel: g
		}) })), n[8] = _, n[9] = i, n[10] = f, n[11] = e.onSubmit, n[12] = e.placeholder, n[13] = h, n[14] = S, n[15] = L) : L = n[15];
		var E;
		return n[16] !== p || n[17] !== L ? (E = u.jsxs("div", babelHelpers.extends({}, b, { children: [L, p] })), n[16] = p, n[17] = L, n[18] = E) : E = n[18], E;
	}
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
		var t = o("react-compiler-runtime").c(5), n;
		t[0] !== e.iconXstyle ? (n = [e.iconXstyle, h.accentIconColor], t[0] = e.iconXstyle, t[1] = n) : n = t[1];
		var a;
		return t[2] !== e || t[3] !== n ? (a = u.jsx(r("WDSIconIcVisibility.react"), babelHelpers.extends({}, e, { iconXstyle: n })), t[2] = e, t[3] = n, t[4] = a) : a = t[4], a;
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(5), n;
		t[0] !== e.iconXstyle ? (n = [e.iconXstyle, h.accentIconColor], t[0] = e.iconXstyle, t[1] = n) : n = t[1];
		var a;
		return t[2] !== e || t[3] !== n ? (a = u.jsx(r("WDSIconIcVisibilityOff.react"), babelHelpers.extends({}, e, { iconXstyle: n })), t[2] = e, t[3] = n, t[4] = a) : a = t[4], a;
	}
	function b(e) {
		var t = o("react-compiler-runtime").c(46), n = e.enableShowPassword, a = e.focusOnMount, i = e.onSubmit, l = e.onValueChange, c = e.placeholder, _ = e.testid, f = n === void 0 ? !1 : n, g = a === void 0 ? !1 : a, h = p(""), b = h[0], S = h[1], R = r("useWAWebToggle")(!1), L = R[0], E = R[1], k = m(null), I = p(!1), T = I[0], D = I[1], x;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (x = { onFocusChange: D }, t[0] = x) : x = t[0];
		var $ = o("react-gui-use-focus").useFocus(x), P = r("useMergeRefs")(k, $), N = r("useWAWebIsKeyboardUser")(), M = N.isKeyboardUser, w;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (w = function() {
			var e;
			(e = k.current) == null || e.focus();
		}, t[1] = w) : w = t[1];
		var A = w, F, O;
		t[2] !== g ? (F = function() {
			if (g) {
				var e;
				(e = k.current) == null || e.focus();
			}
		}, O = [g], t[2] = g, t[3] = F, t[4] = O) : (F = t[3], O = t[4]), d(F, O);
		var B = L ? y : C, W;
		t[5] !== L ? (W = L ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[5] = L, t[6] = W) : W = t[6];
		var q = W, U = m(null), V = p(null), H = V[0], G = V[1], z;
		t[7] !== l ? (z = function(t) {
			var e = t.currentTarget.value;
			S(e), l(e);
		}, t[7] = l, t[8] = z) : z = t[8];
		var j = z, K;
		t[9] !== i ? (K = function(t) {
			t.key === "Enter" && (i == null || i());
		}, t[9] = i, t[10] = K) : K = t[10];
		var Q = K, X, Y;
		t[11] !== M || t[12] !== l ? (X = function(t) {
			var e = k.current;
			if (e) {
				e.focus();
				var n = e.selectionStart, r = e.selectionEnd, o = e.value, a = o.substring(0, n) + t + o.substring(r);
				e.value = a, e.setSelectionRange(r + t.length, r + t.length), S(a), l(a);
			}
			M && Y();
		}, Y = function() {
			G(null), M && A();
		}, t[11] = M, t[12] = l, t[13] = X, t[14] = Y) : (X = t[13], Y = t[14]);
		var J = null;
		if (H) {
			var Z;
			t[15] !== H ? (Z = u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: H }), t[15] = H, t[16] = Z) : Z = t[16];
			var ee;
			t[17] !== Y || t[18] !== Z ? (ee = u.jsx(o("WAWebUimUie.react").UIE, {
				dismissOnWindowResize: !0,
				displayName: "EmojiPicker",
				escapable: !0,
				popable: !0,
				ref: U,
				requestDismiss: Y,
				children: Z
			}), t[17] = Y, t[18] = Z, t[19] = ee) : ee = t[19], J = ee;
		}
		var te;
		t[20] !== X ? (te = function(t) {
			t.preventDefault(), t.stopPropagation();
			var e = u.jsx(r("WAWebEmojiPanel.react"), {
				onEmoji: X,
				onFocusNext: A,
				onFocusPrev: A
			});
			G({
				menu: e,
				dirY: o("WAWebDropdown.react").DirY.TOP,
				type: o("WAWebDropdown.react").MenuType.EmojiPicker,
				anchor: t.target
			}), A();
		}, t[20] = X, t[21] = te) : te = t[21];
		var ne = te, re;
		t[22] !== T ? (re = {
			0: { className: "x1n2onr6 x78zum5 xk7ee7b xt7fyls xso031l x1q0q8m5 x16pkwpw x1j85h84" },
			1: { className: "x1n2onr6 x78zum5 xk7ee7b xt7fyls xv7zg05 x1q0q8m5 x1rrvw3c x18d9i69" }
		}[!!T << 0], t[22] = T, t[23] = re) : re = t[23];
		var oe;
		t[24] === Symbol.for("react.memo_cache_sentinel") ? (oe = o("WAWebClassnames").classnamesConvertMeToStylexPlease(o("WAWebCopyPasteSelectable.react").SELECTABLE_CSS_CLASS, "x1jchvi3 x14ug900 x1iyjqo2 xsl91qr x1aq9cx1 xe0m388 xhe8bae xe73qa2 xsgwwv8 xuhg6hn xli3dgm x1isl193 x1e225iy x1bnlyaz x12ws5rt x1a2a7pz xk7ee7b x6ikm8r x10wlt62 x1yrsyyn x1icxu4v x10b6aqq x25sj25"), t[24] = oe) : oe = t[24];
		var ae = String(c), ie = L ? "text" : "password", le;
		t[25] !== j || t[26] !== Q || t[27] !== P || t[28] !== ae || t[29] !== ie || t[30] !== _ || t[31] !== b ? (le = u.jsx("input", {
			className: oe,
			"data-testid": _,
			onChange: j,
			onKeyDown: Q,
			placeholder: ae,
			ref: P,
			type: ie,
			value: b
		}), t[25] = j, t[26] = Q, t[27] = P, t[28] = ae, t[29] = ie, t[30] = _, t[31] = b, t[32] = le) : le = t[32];
		var se;
		t[33] !== B || t[34] !== q || t[35] !== f || t[36] !== E ? (se = f && u.jsx(r("WDSButton.react"), {
			Icon: B,
			"aria-label": q,
			xstyle: o("WDSMargins.stylex").wdsMargins.marginEnd8,
			onPress: E,
			variant: "borderless"
		}), t[33] = B, t[34] = q, t[35] = f, t[36] = E, t[37] = se) : se = t[37];
		var ue;
		t[38] !== ne ? (ue = u.jsx(v, { onClick: ne }), t[38] = ne, t[39] = ue) : ue = t[39];
		var ce;
		return t[40] !== re || t[41] !== le || t[42] !== se || t[43] !== ue || t[44] !== J ? (ce = u.jsxs("div", babelHelpers.extends({}, re, { children: [
			le,
			se,
			ue,
			J
		] })), t[40] = re, t[41] = le, t[42] = se, t[43] = ue, t[44] = J, t[45] = ce) : ce = t[45], ce;
	}
	function v(e) {
		var t = o("react-compiler-runtime").c(4), n = e.onClick, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = s._(
			/*BTDS*/
			""
		), t[0] = a) : a = t[0];
		var i;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsx(r("WDSIconIcMood.react"), {}), t[1] = i) : i = t[1];
		var l;
		return t[2] !== n ? (l = u.jsx(o("WAWebClickable.react").Clickable, {
			onClick: n,
			title: a,
			xstyle: h.emojiButton,
			children: i
		}), t[2] = n, t[3] = l) : l = t[3], l;
	}
	l.default = _;
}), 226);
