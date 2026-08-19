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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = { container: {
		paddingInlineStart: "xdx6fka",
		position: "x1n2onr6",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(53), n = e.googlePlace, a = e.googlePlaceId, i = e.isAgentProfileLocked, l = e.onChange, d = e.onLockedFieldClick, p = e.onValidationChange, _ = e.primaryWebsite, f = e.secondaryWebsite, g = u(f != null && f !== ""), h = g[0], y = g[1], C = u(_ != null ? _ : ""), b = C[0], v = C[1], S = u(f != null ? f : ""), R = S[0], L = S[1], E = u(!1), k = E[0], I = E[1], T = u(!1), D = T[0], x = T[1], $;
		t[0] !== l || t[1] !== p || t[2] !== R ? ($ = function(t, n) {
			v(n);
			var e = o("WAWebValidationUtils").validateURL(m(n));
			I(!e);
			var r = o("WAWebValidationUtils").validateURL(m(R));
			p && p(e && r), l && l(t, n);
		}, t[0] = l, t[1] = p, t[2] = R, t[3] = $) : $ = t[3];
		var P = $, N;
		t[4] !== l || t[5] !== b ? (N = function(t, n) {
			var e = m(n);
			e !== b && (v(e), l && l(t, e));
		}, t[4] = l, t[5] = b, t[6] = N) : N = t[6];
		var M = N, w;
		t[7] !== l || t[8] !== p || t[9] !== b ? (w = function(t, n) {
			L(n);
			var e = o("WAWebValidationUtils").validateURL(m(n));
			x(!e);
			var r = o("WAWebValidationUtils").validateURL(m(b));
			p && p(r && e), l && l(t, n);
		}, t[7] = l, t[8] = p, t[9] = b, t[10] = w) : w = t[10];
		var A = w, F;
		t[11] !== l || t[12] !== R ? (F = function(t, n) {
			var e = m(n);
			e !== R && (L(e), l && l(t, e));
		}, t[11] = l, t[12] = R, t[13] = F) : F = t[13];
		var O = F, B;
		t[14] !== b ? (B = function() {
			var e = b != null && b.trim() !== "";
			o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.clickWebsite(e);
		}, t[14] = b, t[15] = B) : B = t[15];
		var W = B, q;
		t[16] !== b ? (q = function() {
			var e = b != null && b.trim() !== "";
			o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.clickAddAnotherWebsite(e), y(!0);
		}, t[16] = b, t[17] = q) : q = t[17];
		var U = q, V = o("WAWebBizProfileGatingUtils").isGoogleProfileIntegrationEnabled() && a != null && a !== "";
		if (V) {
			var H;
			t[18] === Symbol.for("react.memo_cache_sentinel") ? (H = s.jsx(r("WAWebBusinessGoogleProfileConnectionHeader.react"), {}), t[18] = H) : H = t[18];
			var G;
			t[19] !== n ? (G = n != null ? n : {}, t[19] = n, t[20] = G) : G = t[20];
			var z;
			return t[21] !== G ? (z = s.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: c.container,
				children: [H, s.jsx(r("WAWebBusinessGoogleProfilePreview.react"), { googlePlace: G })]
			}), t[21] = G, t[22] = z) : z = t[22], z;
		}
		var j, K;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (j = s.jsx(r("WDSIconIcLink.react"), { testid: "ic-link" }), K = o("WAWebBusinessProfileLabels").getWebsiteLabel(), t[23] = j, t[24] = K) : (j = t[23], K = t[24]);
		var Q;
		t[25] !== i || t[26] !== d ? (Q = i === !0 && d != null ? function() {
			return d(o("WAWebBusinessProfileLabels").getWebsiteLabel());
		} : void 0, t[25] = i, t[26] = d, t[27] = Q) : Q = t[27];
		var X;
		t[28] === Symbol.for("react.memo_cache_sentinel") ? (X = o("WAWebBusinessProfileLabels").getWebsiteErrorLabel(), t[28] = X) : X = t[28];
		var Y;
		t[29] !== M || t[30] !== P || t[31] !== W || t[32] !== k || t[33] !== i || t[34] !== b || t[35] !== Q ? (Y = s.jsx(r("WAWebBusinessProfileTextField.react"), {
			editable: !0,
			fieldName: "primaryWebsite",
			icon: j,
			label: K,
			locked: i,
			testid: "biz_profile_primary_website_textfield",
			value: b,
			onChange: P,
			onBlur: M,
			onClick: W,
			onLockedClick: Q,
			error: k,
			errorText: X
		}), t[29] = M, t[30] = P, t[31] = W, t[32] = k, t[33] = i, t[34] = b, t[35] = Q, t[36] = Y) : Y = t[36];
		var J;
		t[37] !== O || t[38] !== A || t[39] !== D || t[40] !== i || t[41] !== d || t[42] !== R || t[43] !== h ? (J = h ? s.jsx(r("WAWebBusinessProfileTextField.react"), {
			editable: !0,
			fieldName: "secondaryWebsite",
			label: o("WAWebBusinessProfileLabels").getWebsiteLabel(),
			locked: i,
			testid: "biz_profile_secondary_website_textfield",
			value: R,
			onChange: A,
			onBlur: O,
			onLockedClick: i === !0 && d != null ? function() {
				return d(o("WAWebBusinessProfileLabels").getWebsiteLabel());
			} : void 0,
			error: D,
			errorText: o("WAWebBusinessProfileLabels").getWebsiteErrorLabel()
		}) : null, t[37] = O, t[38] = A, t[39] = D, t[40] = i, t[41] = d, t[42] = R, t[43] = h, t[44] = J) : J = t[44];
		var Z;
		t[45] !== U || t[46] !== i || t[47] !== h ? (Z = !h && i !== !0 ? s.jsx("div", {
			className: "x17smslp xh7rcd0",
			children: s.jsx(r("WDSButton.react"), {
				label: o("WAWebBusinessProfileLabels").getAddWebsiteButtonLabel(),
				variant: "borderless",
				size: "small",
				onPress: U
			})
		}) : null, t[45] = U, t[46] = i, t[47] = h, t[48] = Z) : Z = t[48];
		var ee;
		return t[49] !== Y || t[50] !== J || t[51] !== Z ? (ee = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			gap: 12,
			xstyle: c.container,
			children: [
				Y,
				J,
				Z
			]
		}), t[49] = Y, t[50] = J, t[51] = Z, t[52] = ee) : ee = t[52], ee;
	}
	function m(e) {
		var t = e.trim();
		return t === "" ? "" : /\s/.test(t) ? t : !r("WAWebURLUtils").isHttps(t) && !r("WAWebURLUtils").isHttp(t) ? "https://" + t : t;
	}
	l.default = d;
}), 98);
