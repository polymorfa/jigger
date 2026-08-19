__d("WAWebCountryPhoneNumberInput.react", [
	"WAWebCountrySelect.react",
	"WAWebEmoji",
	"WAWebEmoji.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebHybridRegGating",
	"WAWebLinkDevicePhoneNumberEntryInput.react",
	"WDSMargins.stylex",
	"react"
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
		var t = e.countries, n = e.error, a = e.onBlur, i = e.onChangePhoneNumber, l = e.onChangeSelectedCountry, m = e.onFocus, p = e.onSubmit, _ = e.phoneNumberWithoutCountryCode, f = e.ref, g = e.selectedCountryId, h = e.shouldDisplayError, y = e.showCountrySelect, C = y === void 0 ? !0 : y, b = e.surface, v = e.theme, S = v != null ? v === "wds" : o("WAWebHybridRegGating").isHybridRegEnabled(), R = b === "link-device-phone-number", L = u(function() {
			if (g == null) return null;
			var e = o("WAWebCountrySelect.react").getCountryFlagEmoji(g), t = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(e);
			return t == null ? null : s.jsx(r("WAWebEmoji.react"), {
				emoji: t,
				selectable: !1
			});
		}, [g]);
		return S && R ? s.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: [
				o("WDSMargins.stylex").wdsMargins.marginBottom16,
				d.color,
				d.wdsInputWidth
			],
			children: [C && s.jsx(r("WAWebFlexItem.react"), {
				isFlexContainer: !0,
				xstyle: [d.countrySelectWrapperWDS, d.marginBottom12],
				children: s.jsx(o("WAWebCountrySelect.react").CountrySelect, {
					width: "100%",
					countries: t,
					testid: "phone-number-country-selector",
					onChange: l,
					initialActiveOptionId: g,
					theme: b === "link-device-phone-number" ? "link-devices-screen-wds" : "default"
				}, g)
			}), s.jsx(r("WAWebLinkDevicePhoneNumberEntryInput.react"), {
				ref: f,
				countryCodeIso: g,
				phoneNumberWithoutCountryPrefix: _,
				a11yErrorMessage: {
					errorShown: h,
					errorMessageDOMId: c,
					errorMessage: n
				},
				onChange: i,
				onEnter: p,
				onFocus: m,
				onBlur: a,
				icon: C ? null : L,
				theme: v != null ? v : "default"
			})]
		}) : s.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			children: [C && s.jsx(r("WAWebFlexItem.react"), {
				isFlexContainer: !0,
				xstyle: [d.countrySelectWrapper, d.marginBottom12],
				children: s.jsx(o("WAWebCountrySelect.react").CountrySelect, {
					width: "100%",
					countries: t,
					testid: "phone-number-country-selector",
					onChange: l,
					initialActiveOptionId: g,
					theme: b === "link-device-phone-number" ? "link-devices-screen" : "default"
				}, g)
			}), s.jsx(r("WAWebFlexItem.react"), {
				xstyle: h || R ? d.marginBottom8 : d.marginBottom32,
				children: s.jsx(r("WAWebLinkDevicePhoneNumberEntryInput.react"), {
					ref: f,
					countryCodeIso: g,
					phoneNumberWithoutCountryPrefix: _,
					a11yErrorMessage: {
						errorShown: h,
						errorMessageDOMId: c,
						errorMessage: n
					},
					onChange: i,
					onEnter: p,
					onFocus: m,
					icon: C ? null : L,
					theme: v != null ? v : "default",
					xstyle: R && d.linkDeviceInputOverride
				})
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
