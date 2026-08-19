__d("WAWebPhoneNumberInput.react", [
	"WAIsoToCc",
	"WAWebClassnames",
	"WAWebCopyPasteSelectable.react",
	"WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
	"WAWebUA",
	"WDSPaddings.stylex",
	"WDSTextField.react",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useMergeRefs"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useRef, p = c.useState, _ = {
		phoneNumberText: {
			fontSize: "x1jchvi3",
			fontVariantNumeric: "xss6m8b",
			$$css: !0
		},
		input: {
			position: "x1n2onr6",
			color: "x14ug900",
			zIndex: "x1n327nk",
			width: "xh8yej3",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			backgroundColor: "xjbqb8w",
			":focus_outline": "x1uvtmcs",
			$$css: !0
		}
	};
	function f(t) {
		var n = o("react-compiler-runtime").c(43), a = t.ariaLabel, i = t.countryCodeIso, l = t.errorMessage, s = t.errorMessageDOMId, c = t.errorShown, f = t.icon, h = t.onBlur, y = t.onChange, C = t.onEnter, b = t.onFocus, v = t.phoneNumberWithoutCountryPrefix, S = t.ref, R = t.showCountryPrefix, L = t.theme, E = R === void 0 ? !0 : R, k = L === void 0 ? "default" : L, I = k === "wds", T = p(null), D = T[0], x = T[1], $ = m(null), P = r("useMergeRefs")(S, $), N = p(!0), M = N[0], w = N[1], A = i == null ? null : r("WAIsoToCc")[i], F, O;
		if (n[0] !== i || n[1] !== M || n[2] !== A || n[3] !== v || n[4] !== E) {
			var B = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").formatPhoneNumberInput({
				countryCodeIso: i,
				phoneNumberWithoutCountryCode: v != null ? v : ""
			}), W = r("nullthrows")(B, "Unexpected null phone number format result, likely because of invalid country code"), q = W.formattedInputValue, U = W.placeholder;
			F = U, O = E ? o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").getFullFormattedInputValue(M, A, q) : q, n[0] = i, n[1] = M, n[2] = A, n[3] = v, n[4] = E, n[5] = F, n[6] = O;
		} else F = n[5], O = n[6];
		var V = O, H, G;
		n[7] !== D || n[8] !== V ? (H = function() {
			var e = null;
			if (D != null) if (D.shouldPositionNextToDigit) {
				var t = Array.from(V.matchAll(/\d/g));
				t.length > D.selectionStart && (e = t[D.selectionStart].index);
			} else e = D.selectionStart;
			e != null && $.current instanceof HTMLInputElement && $.current.setSelectionRange(e, e), x(null);
		}, G = [D, V], n[7] = D, n[8] = V, n[9] = H, n[10] = G) : (H = n[9], G = n[10]), d(H, G);
		var z;
		n[11] !== i || n[12] !== y || n[13] !== A || n[14] !== v || n[15] !== E ? (z = function(t) {
			var e = t.target, n = e.value, r = e.selectionStart, a = E ? n : "" + (A != null ? A : "") + n, l = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").cleanPhoneNumberInputValue(a), s = l.countryCodeIso, u = l.phoneNumberWithoutCountryCode;
			if (s === i && u === v) x({
				selectionStart: r,
				shouldPositionNextToDigit: !1
			});
			else {
				var c, d = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").cleanPhoneNumberInputValue(n.substr(0, r)), m = d.fullRawPhoneNumber;
				x({
					selectionStart: E && A != null && m.length === 0 ? (c = A == null ? void 0 : A.toString().length) != null ? c : 0 : m.length,
					shouldPositionNextToDigit: !0
				});
			}
			s == null ? w(n.includes("+")) : w(!0), y(s, u);
		}, n[11] = i, n[12] = y, n[13] = A, n[14] = v, n[15] = E, n[16] = z) : z = n[16];
		var j = z, K;
		n[17] !== V.length || n[18] !== b ? (K = function() {
			x({
				selectionStart: V.length,
				shouldPositionNextToDigit: !1
			}), b == null || b();
		}, n[17] = V.length, n[18] = b, n[19] = K) : K = n[19];
		var Q = K, X;
		n[20] !== I ? (X = {
			0: { className: "x1n2onr6" },
			1: { className: "x1n2onr6 xh8yej3" }
		}[!!I << 0], n[20] = I, n[21] = X) : X = n[21];
		var Y;
		n[22] !== C ? (Y = function(t) {
			t.preventDefault(), C == null || C();
		}, n[22] = C, n[23] = Y) : Y = n[23];
		var J;
		n[24] !== a || n[25] !== l || n[26] !== s || n[27] !== c || n[28] !== V || n[29] !== j || n[30] !== Q || n[31] !== f || n[32] !== I || n[33] !== P || n[34] !== h || n[35] !== F ? (J = I ? u.jsx(r("WDSTextField.react"), {
			ref: P,
			testid: "phone-number-input",
			label: a,
			prefix: f != null ? f : void 0,
			error: c,
			errorText: l,
			value: V,
			onChange: j,
			onFocus: Q,
			onBlur: h
		}) : u.jsxs(u.Fragment, { children: [u.jsx(g, {
			formattedInputValue: V,
			placeholder: F
		}), u.jsx("input", {
			ref: P,
			dir: "ltr",
			"data-testid": "phone-number-input",
			"aria-label": a,
			"aria-describedby": c ? s : "",
			"aria-required": "true",
			"aria-invalid": c ? "true" : "false",
			className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(o("WAWebCopyPasteSelectable.react").SELECTABLE_CSS_CLASS, (e || (e = r("stylex")))(_.input, _.phoneNumberText, o("WDSPaddings.stylex").wdsPaddings.padding0)),
			type: "text",
			value: V,
			onChange: j,
			onFocus: Q,
			onBlur: h
		})] }), n[24] = a, n[25] = l, n[26] = s, n[27] = c, n[28] = V, n[29] = j, n[30] = Q, n[31] = f, n[32] = I, n[33] = P, n[34] = h, n[35] = F, n[36] = J) : J = n[36];
		var Z;
		n[37] !== J || n[38] !== Y ? (Z = u.jsx("form", {
			onSubmit: Y,
			children: J
		}), n[37] = J, n[38] = Y, n[39] = Z) : Z = n[39];
		var ee;
		return n[40] !== Z || n[41] !== X ? (ee = u.jsx("div", babelHelpers.extends({}, X, { children: Z })), n[40] = Z, n[41] = X, n[42] = ee) : ee = n[42], ee;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(9), n = e.formattedInputValue, r = e.placeholder, a;
		t[0] !== r ? (a = r.split(/(_+)/).map(h), t[0] = r, t[1] = a) : a = t[1];
		var i = a, l;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = { className: "x10l6tqk xs7f9wi xu96u03 xhslqc4 x126k92a x87ps6o x1jchvi3 xss6m8b" }, t[2] = l) : l = t[2];
		var s;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (s = { className: "x19co3pv" }, t[3] = s) : s = t[3];
		var c;
		t[4] !== n ? (c = u.jsx("span", babelHelpers.extends({}, s, { children: n })), t[4] = n, t[5] = c) : c = t[5];
		var d;
		return t[6] !== i || t[7] !== c ? (d = u.jsxs("div", babelHelpers.extends({}, l, {
			"aria-hidden": "true",
			children: [c, i]
		})), t[6] = i, t[7] = c, t[8] = d) : d = t[8], d;
	}
	function h(e, t) {
		var n = t % 2 === 1;
		return u.jsx("span", babelHelpers.extends({}, {
			0: {},
			2: { className: "x1rg5ohu x1qcr5yj xahfe03" },
			1: { className: "x1rg5ohu xtf6cww xkivrog" },
			3: { className: "x1rg5ohu xtf6cww xkivrog" }
		}[!!(n && o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.WINDOWS) << 1 | !!(n && o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC) << 0], { children: e }), t + ":" + e);
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = f;
}), 98);
