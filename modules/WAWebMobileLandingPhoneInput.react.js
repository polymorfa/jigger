__d("WAWebMobileLandingPhoneInput.react", [
	"fbt",
	"WAAbortError",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebL10N",
	"WAWebMobileLandingAcquisitionQpl",
	"WAWebMobileLandingReferrer",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUnstyledButton.react",
	"WAXWhatsAppWebRegistrationControllerRouteBuilder",
	"WDSIconIcChevronRight.react",
	"WDSText.react",
	"asyncToGeneratorRuntime",
	"err",
	"react",
	"useWAWebCallbackOnce",
	"useWAWebPhoneNumberInput",
	"useWAWebTimeout",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useMemo, m = c.useState, p = {
		root: {
			paddingTop: "x1p57kb1",
			width: "xh8yej3",
			$$css: !0
		},
		ctaChevron: {
			flexShrink: "x2lah0s",
			$$css: !0
		},
		ctaButton: {
			marginTop: "x98l61r",
			width: "xh8yej3",
			display: "x78zum5",
			justifyContent: "xl56j7k",
			alignItems: "x6s0dn4",
			paddingTop: "x134lwj9",
			paddingBottom: "x1i2zvha",
			paddingInlineStart: "xm1n0gq",
			paddingInlineEnd: "x5ta72y",
			paddingLeft: null,
			paddingRight: null,
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "x1sduauc",
			borderInlineEndColor: "xnzbf6g",
			borderBottomColor: "x1xjxi4w",
			borderInlineStartColor: "x1ntpqbo",
			backgroundColor: "xq4q3us",
			color: "x1tpmtvg",
			fontSize: "xlm9qay",
			fontWeight: "xk50ysn",
			fontFamily: "x1x14wtl",
			letterSpacing: "xgv3hf3",
			cursor: "x1ypdohk",
			boxSizing: "x9f619",
			columnGap: "x1amjocr",
			$$css: !0
		}
	}, _ = "for (;;);";
	function f(e, t, n) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			try {
				var a = r("WAXWhatsAppWebRegistrationControllerRouteBuilder").buildUri(babelHelpers.extends({
					phone: e,
					step: "otp",
					locale: r("WAWebL10N").getLocale()
				}, t != null ? { source: t } : {})).toString().concat("&__a=1"), i = yield window.fetch(a, {
					headers: { "Content-Type": "application/json" },
					signal: n
				});
				if (!i.ok) throw r("err")("HTTP " + i.status);
				var l = yield i.text();
				l.startsWith(_) && (l = l.substring(_.length));
				var u = JSON.parse(l).payload;
				return u;
			} catch (e) {
				return e instanceof Error && e.name === o("WAAbortError").ABORT_ERROR ? null : {
					status: 2,
					error_reason: s._(
						/*BTDS*/
						""
					),
					retry_after: 5
				};
			}
		}), g.apply(this, arguments);
	}
	function h() {
		var e = d(function() {
			return o("WAWebMobileLandingReferrer").getMobileLandingReferrer();
		}, []), t = o("WAWebMobileLandingReferrer").getSourceForReferrer(e), a = r("useWAWebPhoneNumberInput")(), i = a.disableSubmit, l = a.formattedValue, c = a.handleChange, _ = a.phoneNumber, g = m(!1), h = g[0], y = g[1], C = m(!1), b = C[0], v = C[1], S = o("useWAWebTimeout").useManualTimeout(function() {
			v(!1);
		}), R = S[0], L = r("useWAWebUnmountSignal")(), E = i || h || b, k = r("useWAWebCallbackOnce")(function(e) {
			o("WAWebMobileLandingAcquisitionQpl").logMobileLandingAcquisitionEvent("variant1_pn_input_focused");
		}), I = function(t, n) {
			o("WAWebMobileLandingAcquisitionQpl").logMobileLandingAcquisitionEvent("variant1_redirect");
			var e = new URLSearchParams({
				pn: t,
				referrer: "mobile_landing"
			});
			n != null && e.set("prov_num", n), o("WAWebExternalLink.react").openExternalLink(window.location.origin + "/mobile/reg/wacom?" + e.toString(), { target: o("WAWebExternalLink.react").ExternalLinkTarget.CURRENT_TAB });
		}, T = function(t) {
			var e;
			if ((t == null ? void 0 : t.status) === 1) {
				o("WAWebMobileLandingAcquisitionQpl").logMobileLandingAcquisitionEvent("variant1_sms_sent"), I(_, t.provider_number);
				return;
			}
			var n = t == null ? void 0 : t.retry_after;
			n != null && n > 0 && (v(!0), R(n * 1e3));
			var r = (e = t == null ? void 0 : t.error_reason) != null ? e : s._(
				/*BTDS*/
				""
			);
			o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: r }));
		}, D = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (o("WAWebMobileLandingAcquisitionQpl").logMobileLandingAcquisitionEvent("variant1_cta_clicked"), !E) {
					y(!0);
					try {
						var e = "1" + _, n = yield f(e, t, L);
						n != null && T(n);
					} finally {
						y(!1);
					}
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})();
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: p.root,
			testid: "mobile-landing-phone-input",
			children: [
				u.jsx("label", {
					htmlFor: "mobile-landing-phone-input",
					className: "x2b8uid x1c436fg xh8yej3",
					children: u.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: "persistentAlwaysBlack",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				u.jsxs("div", {
					className: "x6s0dn4 x12peec7 xnv0o1y x16r4355 x71elnl x1cve794 x1rmtndc x1odo9l3 x14p773d x1ruczk5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xt8t1vi x1xc408v x129tdwq x15urzxu x178xt8z xs2lk21 x1lun4ml x1o7urej xso031l x16hne5i xpilrb4 x15xq2pl x9f619 x78zum5 xnnlda6 x1phvje8 xcldk2z xh8yej3",
					children: [u.jsxs("span", {
						className: "x78zum5 x6s0dn4 x2lah0s xngnso2 x1uc92m",
						children: [u.jsx("span", { children: "🇺🇸" }), u.jsx("span", {
							className: "x1mpliya xo1l8bm x1qfxs89 xgv3hf3 x6s0dn4 xe2zdcy x1nn3v0j",
							children: s._(
								/*BTDS*/
								""
							)
						})]
					}), u.jsx("input", {
						id: "mobile-landing-phone-input",
						className: "x1mpliya xo1l8bm x1qfxs89 xgv3hf3 xjbqb8w x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1v8p93f x1o3jo1z x16stqrj xv5lvn5 x14ug900 x1iyjqo2 xs83m0k x1t1x2f9 x5yr21d x1a2a7pz xexx8yu x18d9i69 x1c1uobl xyri2b xh8yej3",
						ref: function(n) {
							n != null && e === o("WAWebMobileLandingReferrer").MobileLandingReferrer.MobileLanding && n.focus();
						},
						type: "tel",
						inputMode: "tel",
						dir: "ltr",
						value: l,
						onChange: function(t) {
							return c(t.target.value);
						},
						onFocus: k
					})]
				}),
				u.jsxs(r("WAWebUnstyledButton.react"), {
					xstyle: p.ctaButton,
					disabled: E,
					onClick: D,
					children: [h ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					), u.jsx(r("WDSIconIcChevronRight.react"), { iconXstyle: p.ctaChevron })]
				})
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
