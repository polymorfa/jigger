__d("WAWebComplianceInfo.react", [
	"fbt",
	"WALogger",
	"WAWebBizBusinessComplianceContactErrorModal",
	"WAWebBizComplianceUtil",
	"WAWebBusinessProfileCollection",
	"WAWebDrawerBlock.react",
	"WAWebDrawerSection.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebL10N",
	"WAWebSpinner.react",
	"WAWebText.react",
	"WDSPaddings.stylex",
	"asyncToGeneratorRuntime",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = { helpCenterBanner: {
		fontSize: "x1f6kntn",
		lineHeight: "x37zpob",
		$$css: !0
	} }, p = function() {
		return s._(
			/*BTDS*/
			""
		);
	};
	function _(e) {
		var t = e.children, n = e.title;
		return d.jsx(r("WAWebDrawerSection.react"), {
			title: n,
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingVer8,
			children: t
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.forceLTR, n = e.label, r = e.value;
		return d.jsxs(h, { children: [d.jsx(L, {
			value: r,
			forceLTR: t
		}), d.jsx(R, { label: n })] });
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.keys, n = e.label, r = e.valuesMap, o = t.reduce(function(e, t) {
			return r[t] ? e.concat(r[t]) : e;
		}, []), a = o.length ? o.join(", ") : p();
		return d.jsxs(h, { children: [d.jsx(L, { value: a }), d.jsx(R, { label: n })] });
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.children;
		return d.jsx(r("WAWebDrawerBlock.react"), {
			multiline: !0,
			restrictSpacing: !0,
			children: d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.paddingVer8), { children: t }))
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y() {
		return d.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			testid: "compliance-info-loading",
			children: d.jsx(r("WAWebFlexItem.react"), { children: d.jsx(o("WAWebSpinner.react").Spinner, {}) })
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.xstyle;
		return d.jsxs("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(m.helpCenterBanner, t), {
			"data-testid": "compliance-help-center-banner",
			children: [
				s._(
					/*BTDS*/
					""
				),
				" ",
				d.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getIndiaEcommerceComplianceFaqUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				})
			]
		}));
	}
	C.displayName = C.name + " [from " + i.id + "]";
	var b = function(t) {
		var e = Array.isArray(t) ? t[0] : t;
		return e.serialize();
	};
	function v(e) {
		return S.apply(this, arguments);
	}
	function S() {
		return S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = yield o("WAWebBusinessProfileCollection").BusinessProfileCollection.update(t, { getMerchantCompliance: !0 }), r = b(n);
			if (r) return r.legalEntityDetails || void 0;
			o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["compliance: cannot fetch business details (", ")"])), t.toString());
		}), S.apply(this, arguments);
	}
	function R(e) {
		var t = e.label;
		return d.jsx("div", {
			className: "x1lliihq xo5v014",
			"data-testid": "compliance-info-field-label",
			children: d.jsx(o("WAWebText.react").WAWebTextMuted, {
				as: "span",
				children: t
			})
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = e.forceLTR, n = t === void 0 ? !1 : t, o = e.value, a = r("WAWebL10N").isRTL();
		return d.jsx("div", babelHelpers.extends({}, {
			0: { className: "x1lliihq x13faqbe xti2ec1 x7r5mf7 xahult9" },
			1: { className: "x1lliihq x13faqbe xti2ec1 x7r5mf7 xahult9 xp4054r" }
		}[!!(a && n) << 0], {
			dir: n || !a ? "ltr" : "rtl",
			"data-testid": "compliance-info-field-value",
			children: o == null || o === "" || o === 0 || o === !1 ? p() : o
		}));
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		var t = e.contactId, n = e.customerCareDetails, a = e.field, i = e.value;
		o("WAWebBizComplianceUtil").existsCustomerCareDetailsContact(n, t, a, i) || r("WAWebBizBusinessComplianceContactErrorModal")(s._(
			/*BTDS*/
			""
		));
	}
	function k(e) {
		var t = e.contactId, n = e.field, a = e.grievanceOfficerDetails, i = e.value;
		o("WAWebBizComplianceUtil").existsGrievanceOfficerDetailsContact(a, t, n, i) || r("WAWebBizBusinessComplianceContactErrorModal")(s._(
			/*BTDS*/
			""
		));
	}
	l.ComplianceInfoGroup = _, l.ComplianceInfoPrimitiveField = f, l.ComplianceInfoStructuralField = g, l.ComplianceInfoLoading = y, l.ComplianceInfoHelpCenterBanner = C, l.getLegalEntityDetails = v, l.handleCustomerCareDetailsError = E, l.handleGrievanceOfficerDetailsError = k;
}), 226);
