__d("WAWebBusinessLinksProfile.react", [
	"WAWebBizProfileGatingUtils",
	"WAWebBusinessGoogleProfileConnectionHeader.react",
	"WAWebBusinessGoogleProfilePreview.react",
	"WAWebBusinessProfileLabels",
	"WAWebBusinessProfileSMBUserJourneyLogger",
	"WAWebBusinessProfileTextField.react",
	"WAWebFlex.react",
	"WAWebURLUtils",
	"WAWebValidationUtils",
	"WDSButton.react",
	"WDSIconIcLink.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = { container: {
		paddingInlineStart: "xdx6fka",
		position: "x1n2onr6",
		$$css: !0
	} };
	function d(e) {
		var t = e.googlePlace, n = e.googlePlaceId, a = e.isAgentProfileLocked, i = e.onChange, l = e.onLockedFieldClick, d = e.onValidationChange, p = e.primaryWebsite, _ = e.secondaryWebsite, f = u(_ != null && _ !== ""), g = f[0], h = f[1], y = u(p != null ? p : ""), C = y[0], b = y[1], v = u(_ != null ? _ : ""), S = v[0], R = v[1], L = u(!1), E = L[0], k = L[1], I = u(!1), T = I[0], D = I[1], x = function(t, n) {
			b(n);
			var e = o("WAWebValidationUtils").validateURL(m(n));
			k(!e);
			var r = o("WAWebValidationUtils").validateURL(m(S));
			d && d(e && r), i && i(t, n);
		}, $ = function(t, n) {
			var e = m(n);
			e !== C && (b(e), i && i(t, e));
		}, P = function(t, n) {
			R(n);
			var e = o("WAWebValidationUtils").validateURL(m(n));
			D(!e);
			var r = o("WAWebValidationUtils").validateURL(m(C));
			d && d(r && e), i && i(t, n);
		}, N = function(t, n) {
			var e = m(n);
			e !== S && (R(e), i && i(t, e));
		}, M = function() {
			var e = C != null && C.trim() !== "";
			o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.clickWebsite(e);
		}, w = function() {
			var e = C != null && C.trim() !== "";
			o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.clickAddAnotherWebsite(e), h(!0);
		}, A = o("WAWebBizProfileGatingUtils").isGoogleProfileIntegrationEnabled() && n != null && n !== "";
		return A ? s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: c.container,
			children: [s.jsx(r("WAWebBusinessGoogleProfileConnectionHeader.react"), {}), s.jsx(r("WAWebBusinessGoogleProfilePreview.react"), { googlePlace: t != null ? t : {} })]
		}) : s.jsxs(o("WAWebFlex.react").FlexColumn, {
			gap: 12,
			xstyle: c.container,
			children: [
				s.jsx(r("WAWebBusinessProfileTextField.react"), {
					editable: !0,
					fieldName: "primaryWebsite",
					icon: s.jsx(r("WDSIconIcLink.react"), { testid: "ic-link" }),
					label: o("WAWebBusinessProfileLabels").getWebsiteLabel(),
					locked: a,
					testid: "biz_profile_primary_website_textfield",
					value: C,
					onChange: x,
					onBlur: $,
					onClick: M,
					onLockedClick: a === !0 && l != null ? function() {
						return l(o("WAWebBusinessProfileLabels").getWebsiteLabel());
					} : void 0,
					error: E,
					errorText: o("WAWebBusinessProfileLabels").getWebsiteErrorLabel()
				}),
				g ? s.jsx(r("WAWebBusinessProfileTextField.react"), {
					editable: !0,
					fieldName: "secondaryWebsite",
					label: o("WAWebBusinessProfileLabels").getWebsiteLabel(),
					locked: a,
					testid: "biz_profile_secondary_website_textfield",
					value: S,
					onChange: P,
					onBlur: N,
					onLockedClick: a === !0 && l != null ? function() {
						return l(o("WAWebBusinessProfileLabels").getWebsiteLabel());
					} : void 0,
					error: T,
					errorText: o("WAWebBusinessProfileLabels").getWebsiteErrorLabel()
				}) : null,
				!g && a !== !0 ? s.jsx("div", {
					className: "x17smslp xh7rcd0",
					children: s.jsx(r("WDSButton.react"), {
						label: o("WAWebBusinessProfileLabels").getAddWebsiteButtonLabel(),
						variant: "borderless",
						size: "small",
						onPress: w
					})
				}) : null
			]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.trim();
		return t === "" ? "" : /\s/.test(t) ? t : !r("WAWebURLUtils").isHttps(t) && !r("WAWebURLUtils").isHttp(t) ? "https://" + t : t;
	}
	l.default = d;
}), 98);
