__d("WAWebProfileDrawerBody.react", [
	"fbt",
	"WAWebABProps",
	"WAWebAboutPrompts",
	"WAWebAboutWamLogger",
	"WAWebBizCoexGatingUtils",
	"WAWebBizProfileGatingUtils",
	"WAWebBusinessContactProfile.react",
	"WAWebBusinessInfoProfile.react",
	"WAWebBusinessLinksProfile.react",
	"WAWebBusinessProductsAndServicesProfile.react",
	"WAWebBusinessProfileCoverPhotoRefreshed.react",
	"WAWebBusinessProfileLabels",
	"WAWebConfirmPopup.react",
	"WAWebContactCollection",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebMeTabSpeechBubble.react",
	"WAWebModalManager",
	"WAWebProfilePicThumbCollection",
	"WAWebProfileSectionHeader.react",
	"WAWebSmbUtils",
	"WAWebTextStatusEditModalLoadable",
	"WAWebTextStatusGatingUtils",
	"WAWebUserPrefsMeUser",
	"WAWebUsernameTypes",
	"WAWebWidFormat",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useState, d = 1e3, m = { mainContainer: {
		flexShrink: "x2lah0s",
		paddingTop: "xl7twdi",
		paddingInlineEnd: "xyo0t3i",
		paddingBottom: "xvg22vi",
		paddingInlineStart: "xb0esv5",
		$$css: !0
	} };
	function p(e) {
		var t, n, a, i, l = o("react-compiler-runtime").c(62), s = e.about, d = e.bizProfileValues, p = e.onFieldChange, f = e.onLocationSelect, h = e.onSave, y = e.onSaveGraphQL, C = e.onValidationChange, b = e.preloadedProfile, v = e.selectedLocation, S, R;
		if (l[0] === Symbol.for("react.memo_cache_sentinel")) {
			var L = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
			S = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.assertGet(L), R = o("WAWebContactCollection").ContactCollection.assertGet(L), l[0] = S, l[1] = R;
		} else S = l[0], R = l[1];
		var E = R, k;
		l[2] === Symbol.for("react.memo_cache_sentinel") ? (k = [
			"businessProfile",
			"username",
			"usernameKey"
		], l[2] = k) : k = l[2], o("useWAWebModelValues").useModelValues(E, k);
		var I;
		l[3] === Symbol.for("react.memo_cache_sentinel") ? (I = [
			"googlePlace",
			"googlePlaceId",
			"isAuthorizedAgent"
		], l[3] = I) : I = l[3];
		var T = o("useWAWebModelValues").useOptionalModelValues(E.businessProfile, I), D;
		l[4] !== (T == null ? void 0 : T.isAuthorizedAgent) ? (D = o("WAWebBizCoexGatingUtils").agentBizProfileFeatureControlEnabled() && (T == null ? void 0 : T.isAuthorizedAgent) === !0, l[4] = T == null ? void 0 : T.isAuthorizedAgent, l[5] = D) : D = l[5];
		var x = D, $ = _, P = c(!0), N = P[0], M = P[1], w = c(!0), A = w[0], F = w[1], O;
		l[6] !== A || l[7] !== C ? (O = function(t) {
			M(t);
			var e = t && A;
			C && C(e);
		}, l[6] = A, l[7] = C, l[8] = O) : O = l[8];
		var B = O, W;
		l[9] !== N || l[10] !== C ? (W = function(t) {
			F(t);
			var e = N && t;
			C && C(e);
		}, l[9] = N, l[10] = C, l[11] = W) : W = l[11];
		var q = W, U = E.businessProfile, V;
		l[12] !== b ? (V = b != null ? {
			businessHours: b.businessHours,
			categories: b.categories,
			latitude: b.latitude,
			longitude: b.longitude
		} : {
			businessHours: (U == null ? void 0 : U.businessHours) != null ? o("WAWebSmbUtils").getBusinessHoursForEdit(U.businessHours) : null,
			categories: U == null ? void 0 : U.categories,
			latitude: U == null ? void 0 : U.latitude,
			longitude: U == null ? void 0 : U.longitude
		}, l[12] = b, l[13] = V) : V = l[13];
		var H = V, G = (t = v == null ? void 0 : v.latitude) != null ? t : H.latitude, z = (n = v == null ? void 0 : v.longitude) != null ? n : H.longitude, j, K, Q, X;
		l[14] === Symbol.for("react.memo_cache_sentinel") ? (Q = { className: "xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 xdt5ytf x2lah0s x5yr21d x6ikm8r x10wlt62 x1n2onr6 xh8yej3" }, X = { className: "xw6alqk x1iyjqo2 xs83m0k x15icp18 x1odjw0f x1tvm86q x1hqvyuz" }, j = { className: "xvc5jky x11t971q xted6l9 xh8yej3" }, K = u.jsx(g, {
			contact: E,
			profilePicThumb: S
		}), l[14] = j, l[15] = K, l[16] = Q, l[17] = X) : (j = l[14], K = l[15], Q = l[16], X = l[17]);
		var Y;
		l[18] === Symbol.for("react.memo_cache_sentinel") ? (Y = u.jsx(r("WAWebProfileSectionHeader.react"), {
			showDivider: !1,
			testId: "profile-business-information",
			title: o("WAWebBusinessProfileLabels").getBusinessInformationTitleLabel()
		}), l[18] = Y) : Y = l[18];
		var J;
		l[19] !== d || l[20] !== H || l[21] !== (T == null ? void 0 : T.googlePlaceId) || l[22] !== x || l[23] !== G || l[24] !== z || l[25] !== p || l[26] !== f || l[27] !== h || l[28] !== y ? (J = d != null && u.jsx(r("WAWebBusinessInfoProfile.react"), {
			businessHours: H.businessHours,
			categories: H.categories,
			googlePlaceId: T == null ? void 0 : T.googlePlaceId,
			isAgentProfileLocked: x,
			latitude: G,
			longitude: z,
			onLocationSelect: f,
			onFieldChange: p,
			onLockedFieldClick: x ? $ : void 0,
			bizProfileValues: d,
			onSave: h,
			onSaveGraphQL: y
		}), l[19] = d, l[20] = H, l[21] = T == null ? void 0 : T.googlePlaceId, l[22] = x, l[23] = G, l[24] = z, l[25] = p, l[26] = f, l[27] = h, l[28] = y, l[29] = J) : J = l[29];
		var Z;
		l[30] === Symbol.for("react.memo_cache_sentinel") ? (Z = { className: "x16ovd2e" }, l[30] = Z) : Z = l[30];
		var ee;
		l[31] === Symbol.for("react.memo_cache_sentinel") ? (ee = u.jsx("div", babelHelpers.extends({}, Z, { children: u.jsx(r("WAWebProfileSectionHeader.react"), {
			showDivider: !0,
			title: o("WAWebBusinessProfileLabels").getProductsAndServicesTitleLabel()
		}) })), l[31] = ee) : ee = l[31];
		var te = E.businessProfile, ne, re, oe;
		l[32] === Symbol.for("react.memo_cache_sentinel") ? (ne = o("WAWebBizProfileGatingUtils").businessPriceTierEnabled(), re = o("WAWebBizProfileGatingUtils").businessProfileRefreshV2Enabled(), oe = o("WAWebABProps").getABPropConfigValue("smb_waldo_service_offerings_selection_enabled"), l[32] = ne, l[33] = re, l[34] = oe) : (ne = l[32], re = l[33], oe = l[34]);
		var ae;
		l[35] !== d || l[36] !== p ? (ae = u.jsx(r("WAWebBusinessProductsAndServicesProfile.react"), {
			businessProfile: te,
			bizProfileValues: d,
			isPriceTierEnabled: ne,
			isV2Enabled: re,
			isServiceOfferingsEnabled: oe,
			onFieldChange: p
		}), l[35] = d, l[36] = p, l[37] = ae) : ae = l[37];
		var ie;
		l[38] === Symbol.for("react.memo_cache_sentinel") ? (ie = { className: "x16ovd2e" }, l[38] = ie) : ie = l[38];
		var le;
		l[39] === Symbol.for("react.memo_cache_sentinel") ? (le = u.jsx("div", babelHelpers.extends({}, ie, { children: u.jsx(r("WAWebProfileSectionHeader.react"), {
			showDivider: !0,
			title: o("WAWebBusinessProfileLabels").getLinksTitleLabel()
		}) })), l[39] = le) : le = l[39];
		var se = T == null ? void 0 : T.googlePlace, ue = T == null ? void 0 : T.googlePlaceId, ce = x ? $ : void 0, de = d != null ? d.primaryWebsite : (a = E.businessProfile) == null || (a = a.website) == null || (a = a[0]) == null ? void 0 : a.url, me = d != null ? d.secondaryWebsite : (i = E.businessProfile) == null || (i = i.website) == null || (i = i[1]) == null ? void 0 : i.url, pe;
		l[40] !== q || l[41] !== x || l[42] !== p || l[43] !== se || l[44] !== ue || l[45] !== ce || l[46] !== de || l[47] !== me ? (pe = u.jsx(r("WAWebBusinessLinksProfile.react"), {
			googlePlace: se,
			googlePlaceId: ue,
			isAgentProfileLocked: x,
			onChange: p,
			onLockedFieldClick: ce,
			onValidationChange: q,
			primaryWebsite: de,
			secondaryWebsite: me
		}), l[40] = q, l[41] = x, l[42] = p, l[43] = se, l[44] = ue, l[45] = ce, l[46] = de, l[47] = me, l[48] = pe) : pe = l[48];
		var _e;
		l[49] === Symbol.for("react.memo_cache_sentinel") ? (_e = { className: "x16ovd2e" }, l[49] = _e) : _e = l[49];
		var fe;
		l[50] === Symbol.for("react.memo_cache_sentinel") ? (fe = u.jsx("div", babelHelpers.extends({}, _e, { children: u.jsx(r("WAWebProfileSectionHeader.react"), {
			showDivider: !0,
			title: o("WAWebBusinessProfileLabels").getContactInformationTitleLabel()
		}) })), l[50] = fe) : fe = l[50];
		var ge;
		l[51] !== s || l[52] !== d || l[53] !== B || l[54] !== x || l[55] !== p ? (ge = d != null && u.jsx(r("WAWebBusinessContactProfile.react"), {
			about: s,
			email: d.email,
			hideAbout: o("WAWebTextStatusGatingUtils").sendTextStatusEnabled(),
			isAgentProfileLocked: x,
			onChange: p,
			onLockedFieldClick: x ? $ : void 0,
			onValidationChange: B,
			phoneNumber: o("WAWebWidFormat").widToFormattedUser(o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE()),
			username: o("WAWebUsernameTypes").serializeMaybeUsername(E.username),
			usernameKey: E.usernameKey
		}), l[51] = s, l[52] = d, l[53] = B, l[54] = x, l[55] = p, l[56] = ge) : ge = l[56];
		var he;
		return l[57] !== J || l[58] !== ae || l[59] !== pe || l[60] !== ge ? (he = u.jsx(r("WAWebDrawerBody.react"), {
			xstyle: m.mainContainer,
			id: "profile-drawer-body",
			children: u.jsx("div", babelHelpers.extends({}, Q, { children: u.jsx("div", babelHelpers.extends({}, X, { children: u.jsxs("div", babelHelpers.extends({}, j, { children: [
				K,
				Y,
				J,
				ee,
				ae,
				le,
				pe,
				fe,
				ge
			] })) })) }))
		}), l[57] = J, l[58] = ae, l[59] = pe, l[60] = ge, l[61] = he) : he = l[61], he;
	}
	function _(e) {
		var t = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: u.jsx(r("WDSText.react"), {
				type: "Headline1",
				colorName: "contentDefault",
				children: s._(
					/*BTDS*/
					"",
					[s._param("field", e)]
				)
			}),
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
			onCancel: o("WAWebModalManager").closeModalManager
		});
		o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: t,
			cancelText: s._(
				/*BTDS*/
				""
			),
			onCancel: f,
			children: u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDefault",
				children: s._(
					/*BTDS*/
					"",
					[s._param("field", e)]
				)
			})
		}));
	}
	function f() {
		return o("WAWebModalManager").ModalManager.close();
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(10), n = e.contact, a = e.profilePicThumb, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(), t[0] = i) : i = t[0];
		var l = i, s;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (s = o("WAWebTextStatusGatingUtils").sendTextStatusEnabled(), t[1] = s) : s = t[1];
		var d = s, m = c(y), p = m[0], _ = h, f;
		t[2] !== n || t[3] !== a ? (f = n.businessProfile ? u.jsx(r("WAWebBusinessProfileCoverPhotoRefreshed.react"), {
			contact: n,
			businessProfile: n.businessProfile,
			editable: !0,
			profilePicThumb: a
		}) : null, t[2] = n, t[3] = a, t[4] = f) : f = t[4];
		var g = f, C;
		t[5] !== p ? (C = d && u.jsx("div", {
			className: "x6s0dn4 x19q1oq6 x78zum5 xdt5ytf xbudbmw x10l6tqk xuuh30 xupqr0c",
			children: u.jsx(r("WAWebMeTabSpeechBubble.react"), {
				contactId: l,
				onClick: _,
				promptKey: p
			})
		}), t[5] = p, t[6] = C) : C = t[6];
		var b;
		return t[7] !== g || t[8] !== C ? (b = u.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			children: [g, C]
		}), t[7] = g, t[8] = C, t[9] = b) : b = t[9], b;
	}
	function h(e) {
		o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebTextStatusEditModalLoadable").TextStatusEditModalLoadable, {
			entrypoint: o("WAWebAboutWamLogger").ABOUT_ENTRYPOINT_TYPE.ME_TAB,
			promptKey: e
		}));
	}
	function y() {
		return o("WAWebAboutPrompts").getRandomAboutPromptKey();
	}
	l.default = p;
}), 226);
