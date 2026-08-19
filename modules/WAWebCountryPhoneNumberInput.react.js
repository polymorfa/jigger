__d("WAWebCountryPhoneNumberInput.react", [
	"WAWebCountrySelect.react",
	"WAWebEmoji",
	"WAWebEmoji.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebHybridRegGating",
	"WAWebLinkDevicePhoneNumberEntryInput.react",
	"WDSMargins.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useMemo, c = "link-device-phone-number-entry-screen-error", d = {
		countrySelectWrapper: {
			height: "xdd8jsf",
			$$css: !0
		},
		countrySelectWrapperWDS: {
			height: "x1vqgdyp",
			$$css: !0
		},
		marginBottom12: {
			marginBottom: "xcytdqz",
			$$css: !0
		},
		marginBottom8: {
			marginBottom: "xefnzgg",
			$$css: !0
		},
		marginBottom32: {
			marginBottom: "xg6s713",
			$$css: !0
		},
		color: {
			color: "x14ug900",
			$$css: !0
		},
		wdsInputWidth: {
			width: "x1x62fxo",
			$$css: !0
		},
		linkDeviceInputOverride: {
			borderTopColor: "x18aof6w",
			borderInlineEndColor: "xoz6bk6",
			borderBottomColor: "x1ct8bjc",
			borderInlineStartColor: "x357qen",
			backgroundColor: "x1p8t8ri",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(54), n = e.countries, a = e.error, i = e.onBlur, l = e.onChangePhoneNumber, u = e.onChangeSelectedCountry, m = e.onFocus, p = e.onSubmit, _ = e.phoneNumberWithoutCountryCode, f = e.ref, g = e.selectedCountryId, h = e.shouldDisplayError, y = e.showCountrySelect, C = e.surface, b = e.theme, v = y === void 0 ? !0 : y, S = b != null ? b === "wds" : o("WAWebHybridRegGating").isHybridRegEnabled(), R = C === "link-device-phone-number", L;
		e: {
			if (g == null) {
				L = null;
				break e;
			}
			var E;
			if (t[0] !== g) {
				var k = o("WAWebCountrySelect.react").getCountryFlagEmoji(g);
				E = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(k), t[0] = g, t[1] = E;
			} else E = t[1];
			var I = E;
			if (I == null) {
				L = null;
				break e;
			}
			var T;
			t[2] !== I ? (T = s.jsx(r("WAWebEmoji.react"), {
				emoji: I,
				selectable: !1
			}), t[2] = I, t[3] = T) : T = t[3], L = T;
		}
		var D = L;
		if (S && R) {
			var x;
			t[4] === Symbol.for("react.memo_cache_sentinel") ? (x = [
				o("WDSMargins.stylex").wdsMargins.marginBottom16,
				d.color,
				d.wdsInputWidth
			], t[4] = x) : x = t[4];
			var $;
			t[5] !== n || t[6] !== u || t[7] !== g || t[8] !== v || t[9] !== C ? ($ = v && s.jsx(r("WAWebFlexItem.react"), {
				isFlexContainer: !0,
				xstyle: [d.countrySelectWrapperWDS, d.marginBottom12],
				children: s.jsx(o("WAWebCountrySelect.react").CountrySelect, {
					width: "100%",
					countries: n,
					testid: "phone-number-country-selector",
					onChange: u,
					initialActiveOptionId: g,
					theme: C === "link-device-phone-number" ? "link-devices-screen-wds" : "default"
				}, g)
			}), t[5] = n, t[6] = u, t[7] = g, t[8] = v, t[9] = C, t[10] = $) : $ = t[10];
			var P;
			t[11] !== a || t[12] !== h ? (P = {
				errorShown: h,
				errorMessageDOMId: c,
				errorMessage: a
			}, t[11] = a, t[12] = h, t[13] = P) : P = t[13];
			var N = v ? null : D, M = b != null ? b : "default", w;
			t[14] !== i || t[15] !== l || t[16] !== m || t[17] !== p || t[18] !== _ || t[19] !== f || t[20] !== g || t[21] !== P || t[22] !== N || t[23] !== M ? (w = s.jsx(r("WAWebLinkDevicePhoneNumberEntryInput.react"), {
				ref: f,
				countryCodeIso: g,
				phoneNumberWithoutCountryPrefix: _,
				a11yErrorMessage: P,
				onChange: l,
				onEnter: p,
				onFocus: m,
				onBlur: i,
				icon: N,
				theme: M
			}), t[14] = i, t[15] = l, t[16] = m, t[17] = p, t[18] = _, t[19] = f, t[20] = g, t[21] = P, t[22] = N, t[23] = M, t[24] = w) : w = t[24];
			var A;
			return t[25] !== $ || t[26] !== w ? (A = s.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: x,
				children: [$, w]
			}), t[25] = $, t[26] = w, t[27] = A) : A = t[27], A;
		}
		var F;
		t[28] !== n || t[29] !== u || t[30] !== g || t[31] !== v || t[32] !== C ? (F = v && s.jsx(r("WAWebFlexItem.react"), {
			isFlexContainer: !0,
			xstyle: [d.countrySelectWrapper, d.marginBottom12],
			children: s.jsx(o("WAWebCountrySelect.react").CountrySelect, {
				width: "100%",
				countries: n,
				testid: "phone-number-country-selector",
				onChange: u,
				initialActiveOptionId: g,
				theme: C === "link-device-phone-number" ? "link-devices-screen" : "default"
			}, g)
		}), t[28] = n, t[29] = u, t[30] = g, t[31] = v, t[32] = C, t[33] = F) : F = t[33];
		var O = h || R ? d.marginBottom8 : d.marginBottom32, B;
		t[34] !== a || t[35] !== h ? (B = {
			errorShown: h,
			errorMessageDOMId: c,
			errorMessage: a
		}, t[34] = a, t[35] = h, t[36] = B) : B = t[36];
		var W = v ? null : D, q = b != null ? b : "default", U = R && d.linkDeviceInputOverride, V;
		t[37] !== l || t[38] !== m || t[39] !== p || t[40] !== _ || t[41] !== f || t[42] !== g || t[43] !== B || t[44] !== W || t[45] !== q || t[46] !== U ? (V = s.jsx(r("WAWebLinkDevicePhoneNumberEntryInput.react"), {
			ref: f,
			countryCodeIso: g,
			phoneNumberWithoutCountryPrefix: _,
			a11yErrorMessage: B,
			onChange: l,
			onEnter: p,
			onFocus: m,
			icon: W,
			theme: q,
			xstyle: U
		}), t[37] = l, t[38] = m, t[39] = p, t[40] = _, t[41] = f, t[42] = g, t[43] = B, t[44] = W, t[45] = q, t[46] = U, t[47] = V) : V = t[47];
		var H;
		t[48] !== O || t[49] !== V ? (H = s.jsx(r("WAWebFlexItem.react"), {
			xstyle: O,
			children: V
		}), t[48] = O, t[49] = V, t[50] = H) : H = t[50];
		var G;
		return t[51] !== H || t[52] !== F ? (G = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			children: [F, H]
		}), t[51] = H, t[52] = F, t[53] = G) : G = t[53], G;
	}
	l.default = m;
}), 98);
