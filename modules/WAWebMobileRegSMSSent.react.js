__d("WAWebMobileRegSMSSent.react", [
	"fbt",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
	"WAWebLockOutlineIcon.react",
	"WAWebMobileLandingReferrer",
	"WAWebWaLogoIcon.react",
	"WAWebWaWordmarkIcon.react",
	"WAXWhatsAppWebMobileControllerRouteBuilder",
	"WDSText.react",
	"WDSThemes",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u.useMemo, m = {
		fullHeight: {
			position: "xixxii4",
			top: "x13vifvy",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			width: "xh8yej3",
			height: "x5yr21d",
			overflowY: "x1odjw0f",
			$$css: !0
		},
		page: {
			backgroundColor: "xq1354q",
			minHeight: "x1us19tq",
			width: "xh8yej3",
			fontFamily: "x1x14wtl",
			$$css: !0
		},
		container: {
			paddingTop: "x4i7bpe",
			width: "xh8yej3",
			maxWidth: "x1j9u4d2",
			marginInlineStart: "xbt2mb3",
			marginInlineEnd: "xyu1916",
			marginLeft: null,
			marginRight: null,
			boxSizing: "x9f619",
			$$css: !0
		},
		content: {
			marginTop: "xg87l8a",
			marginInlineStart: "xyxtwap",
			marginInlineEnd: "x7vsco6",
			marginLeft: null,
			marginRight: null,
			borderStartStartRadius: "xuqqiot",
			borderStartEndRadius: "x1lkg3h2",
			borderEndEndRadius: "x17mbzc4",
			borderEndStartRadius: "xcouhex",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "x2ubtbe",
			borderInlineEndColor: "x1fwa7gd",
			borderBottomColor: "x1esgvb3",
			borderInlineStartColor: "x17vd3jm",
			backgroundColor: "x1280gxy",
			paddingTop: "x1stpksq",
			paddingInlineEnd: "x1yo0pi1",
			paddingBottom: "x1s51fez",
			paddingInlineStart: "x1wjr2jv",
			$$css: !0
		},
		brandColor: {
			color: "x1y4xi8",
			$$css: !0
		},
		centerText: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		subtitle: {
			marginBottom: "x1xka2u1",
			$$css: !0
		},
		checkMessages: {
			textDecorationLine: "xujl8zx",
			textDecorationColor: "x1kqcxns",
			textUnderlineOffset: "x3pynha",
			$$css: !0
		},
		smsFrom: {
			marginBottom: "x91k8ka",
			$$css: !0
		},
		helpLink: {
			textDecorationLine: "xujl8zx",
			$$css: !0
		},
		helpRow: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		encryptedRow: {
			marginTop: "x1hmvnq2",
			$$css: !0
		}
	};
	function p(t) {
		var n = o("react-compiler-runtime").c(20), a = t.phoneNumber, i = t.providerNumber, l = f, u = _, d;
		if (n[0] !== a) {
			e: {
				if (a == null) {
					d = "";
					break e;
				}
				var p = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").formatPhoneNumberInput({
					countryCodeIso: "US",
					phoneNumberWithoutCountryCode: a
				});
				if (p == null) {
					d = a;
					break e;
				}
				d = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").getFullFormattedInputValue(!1, 1, p.formattedInputValue);
			}
			n[0] = a, n[1] = d;
		} else d = n[1];
		var h = d, y;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (y = (e || (e = r("stylex"))).props(o("WDSThemes").WDSLightTheme, m.fullHeight), n[2] = y) : y = n[2];
		var C;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (C = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			columnGap: 8,
			children: [c.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
				height: 33,
				iconXstyle: m.brandColor
			}), c.jsx(o("WAWebWaWordmarkIcon.react").WaWordmarkIcon, {
				height: 24,
				iconXstyle: m.brandColor
			})]
		}), n[3] = C) : C = n[3];
		var b;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (b = c.jsx(r("WDSText.react"), {
			type: "LargeTitle2",
			colorName: "persistentAlwaysBlack",
			xstyle: m.centerText,
			children: s._(
				/*BTDS*/
				""
			)
		}), n[4] = b) : b = n[4];
		var v;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (v = [m.centerText, m.subtitle], n[5] = v) : v = n[5];
		var S;
		n[6] !== h ? (S = c.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "persistentAlwaysBlack",
			xstyle: v,
			children: s._(
				/*BTDS*/
				"",
				[s._param("phoneNumber", c.jsx(r("WDSText.react"), {
					type: "Body1Emphasized",
					colorName: "persistentAlwaysBlack",
					children: h
				}))]
			)
		}), n[6] = h, n[7] = S) : S = n[7];
		var R;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (R = c.jsx(r("WDSText.react"), {
			type: "Body1Emphasized",
			colorName: "contentDefault",
			xstyle: [m.centerText, m.checkMessages],
			children: s._(
				/*BTDS*/
				""
			)
		}), n[8] = R) : R = n[8];
		var L;
		n[9] !== i ? (L = i != null && c.jsx(r("WDSText.react"), {
			type: "Body1Emphasized",
			colorName: "contentDefault",
			xstyle: [m.centerText, m.smsFrom],
			children: s._(
				/*BTDS*/
				"",
				[s._param("providerNumber", i)]
			)
		}), n[9] = i, n[10] = L) : L = n[10];
		var E;
		n[11] === Symbol.for("react.memo_cache_sentinel") ? (E = c.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			xstyle: [m.centerText, m.helpRow],
			children: s._(
				/*BTDS*/
				"",
				[s._param("edit_number", c.jsx(g, {
					testid: "mobile_reg_sms_sent_edit_number",
					onPress: l,
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			)
		}), n[11] = E) : E = n[11];
		var k;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (k = c.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			xstyle: [m.centerText, m.helpRow],
			children: s._(
				/*BTDS*/
				"",
				[s._param("contact_whatsapp", c.jsx(g, {
					testid: "mobile_reg_sms_sent_contact_support",
					onPress: u,
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			)
		}), n[12] = k) : k = n[12];
		var I;
		n[13] !== S || n[14] !== L ? (I = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: m.container,
			children: [C, c.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				xstyle: m.content,
				children: [
					b,
					S,
					R,
					L,
					E,
					k
				]
			})]
		}), n[13] = S, n[14] = L, n[15] = I) : I = n[15];
		var T;
		n[16] === Symbol.for("react.memo_cache_sentinel") ? (T = c.jsx(o("WAWebLockOutlineIcon.react").LockOutlineIcon, {
			height: 23,
			width: 23,
			"aria-hidden": !0
		}), n[16] = T) : T = n[16];
		var D;
		n[17] === Symbol.for("react.memo_cache_sentinel") ? (D = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			columnGap: 4,
			xstyle: m.encryptedRow,
			children: [T, c.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDefault",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), n[17] = D) : D = n[17];
		var x;
		return n[18] !== I ? (x = c.jsx("div", babelHelpers.extends({}, y, { children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			grow: 1,
			xstyle: m.page,
			children: [I, D]
		}) })), n[18] = I, n[19] = x) : x = n[19], x;
	}
	function _() {
		o("WAWebExternalLink.react").openExternalLink("https://www.whatsapp.com/contact");
	}
	function f() {
		var e = o("WAWebMobileLandingReferrer").getMobileLandingReferrer(), t = r("WAXWhatsAppWebMobileControllerRouteBuilder").buildUri({ referrer: e }).toString();
		o("WAWebExternalLink.react").openExternalLink(window.location.origin + t, { target: o("WAWebExternalLink.react").ExternalLinkTarget.CURRENT_TAB });
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(7), n = e.children, a = e.onPress, i = e.testid, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = { className: "x11g6tue x1ejq31n x18oe1m7 x1sy0etr xstzfhl xexx8yu xyri2b x18d9i69 x1c1uobl xdj266r x14z9mp xat24cr x1lziwak x1ypdohk xt0psk2 x1qlqyl8 xjb2p0i x1pd3egz x1t35e8" }, t[0] = l) : l = t[0];
		var s;
		t[1] !== n ? (s = c.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			xstyle: m.helpLink,
			children: n
		}), t[1] = n, t[2] = s) : s = t[2];
		var u;
		return t[3] !== a || t[4] !== s || t[5] !== i ? (u = c.jsx("button", babelHelpers.extends({
			type: "button",
			"data-testid": i,
			onClick: a
		}, l, { children: s })), t[3] = a, t[4] = s, t[5] = i, t[6] = u) : u = t[6], u;
	}
	l.default = p;
}), 226);
