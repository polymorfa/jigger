__d("WAWebBusinessInfoProfile.react", [
	"WAWebBizProfileAddressAutocomplete.react",
	"WAWebBizProfileAddressFieldMap.react",
	"WAWebBizProfileGatingUtils",
	"WAWebBusinessCategoryField.react",
	"WAWebBusinessHoursField.react",
	"WAWebBusinessProfileLabels",
	"WAWebBusinessProfileSMBUserJourneyLogger",
	"WAWebBusinessProfileTextField.react",
	"WAWebConnModel",
	"WAWebContactCollection",
	"WAWebContactGetters",
	"WAWebCountryCenterCoordinates",
	"WAWebDescriptionRefreshedIcon.react",
	"WAWebFlex.react",
	"WAWebMiscGatingUtils",
	"WAWebPsaVerifiedBlueIcon.react",
	"WAWebPsaVerifiedIcon.react",
	"WAWebStorefrontIcon.react",
	"WDSText.react",
	"WDSTooltip.react",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useMemo, m = u.useState, p = {
		addressContainer: {
			alignSelf: "xkh2ocl",
			$$css: !0
		},
		container: {
			paddingInlineStart: "xdx6fka",
			position: "x1n2onr6",
			$$css: !0
		},
		fieldContainer: {
			alignSelf: "xkh2ocl",
			paddingBottom: "x12xbjc7",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "x12w63v0",
			paddingTop: "x16ovd2e",
			$$css: !0
		},
		iconContainer: {
			color: "xhslqc4",
			height: "x1nqnulx",
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			width: "x1xvr5cs",
			$$css: !0
		},
		mapEditText: {
			paddingInlineStart: "x17smslp",
			$$css: !0
		}
	};
	function _(e) {
		var t, n = o("react-compiler-runtime").c(68), a = e.bizProfileValues, i = e.businessHours, l = e.categories, u = e.googlePlaceId, c = e.isAgentProfileLocked, d = e.latitude, _ = e.longitude, f = e.onFieldChange, g = e.onLocationSelect, h = e.onLockedFieldClick, y = e.onSave, C = e.onSaveGraphQL, b;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (b = ["pushname"], n[0] = b) : b = n[0];
		var v = o("useWAWebModelValues").useModelValues(o("WAWebConnModel").Conn, b), S = o("WAWebContactCollection").ContactCollection.getMeContact(), R = S != null && o("WAWebContactGetters").getShowBusinessCheckmarkInChatlist(S), L = null;
		if (R) {
			var E;
			n[1] === Symbol.for("react.memo_cache_sentinel") ? (E = o("WAWebMiscGatingUtils").isBlueEnabled() ? s.jsx(o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon, {}) : s.jsx(o("WAWebPsaVerifiedIcon.react").PsaVerifiedIcon, {}), n[1] = E) : E = n[1], L = E;
		}
		var k;
		n[2] !== d || n[3] !== _ ? (k = d != null && _ != null ? {
			latitude: d,
			longitude: _
		} : null, n[2] = d, n[3] = _, n[4] = k) : k = n[4];
		var I = m(k), T = I[0], D = I[1], x;
		n[5] !== g ? (x = function(t) {
			D({
				latitude: t.latitude,
				longitude: t.longitude
			}), g != null && g(t);
		}, n[5] = g, n[6] = x) : x = n[6];
		var $ = x, P;
		n[7] !== f ? (P = function(t, n) {
			t === "address" && D(null), f != null && f(t, n);
		}, n[7] = f, n[8] = P) : P = n[8];
		var N = P, M;
		n[9] !== a.description ? (M = function() {
			var e = a.description != null && a.description.trim() !== "";
			o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.clickDescription(e);
		}, n[9] = a.description, n[10] = M) : M = n[10];
		var w = M, A;
		n[11] !== a.address ? (A = function() {
			var e = a.address != null && a.address.trim() !== "";
			o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.clickAddress(e);
		}, n[11] = a.address, n[12] = A) : A = n[12];
		var F = A, O;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (O = o("WAWebBizProfileGatingUtils").businessProfileRefreshV2Enabled(), n[13] = O) : O = n[13];
		var B = O, W;
		n[14] !== u ? (W = o("WAWebBizProfileGatingUtils").isGoogleProfileIntegrationEnabled() && u != null && u !== "", n[14] = u, n[15] = W) : W = n[15];
		var q = W, U;
		e: {
			if (T != null) {
				U = T;
				break e;
			}
			var V;
			n[16] === Symbol.for("react.memo_cache_sentinel") ? (V = o("WAWebCountryCenterCoordinates").getDefaultCenter(), n[16] = V) : V = n[16], U = V;
		}
		var H = U, G = a.serviceAreaRadius != null ? Number(a.serviceAreaRadius) : void 0, z;
		n[17] !== a.address || n[18] !== H.latitude || n[19] !== H.longitude || n[20] !== G ? (z = s.jsx(r("WAWebBizProfileAddressFieldMap.react"), {
			value: a.address,
			latitude: H.latitude,
			longitude: H.longitude,
			serviceAreaRadius: G
		}), n[17] = a.address, n[18] = H.latitude, n[19] = H.longitude, n[20] = G, n[21] = z) : z = n[21];
		var j = z, K;
		n[22] === Symbol.for("react.memo_cache_sentinel") ? (K = o("WAWebBusinessProfileLabels").getBusinessNameNotEditableLabel(), n[22] = K) : K = n[22];
		var Q, X;
		n[23] === Symbol.for("react.memo_cache_sentinel") ? (Q = s.jsx(o("WAWebStorefrontIcon.react").StorefrontIcon, {}), X = o("WAWebBusinessProfileLabels").getBusinessNameLabel(), n[23] = Q, n[24] = X) : (Q = n[23], X = n[24]);
		var Y = (t = v.pushname) != null ? t : "", J;
		n[25] !== Y ? (J = s.jsx(r("WDSTooltip.react"), {
			label: K,
			position: "end",
			children: s.jsx(r("WAWebBusinessProfileTextField.react"), {
				editable: !1,
				icon: Q,
				label: X,
				testid: "biz_profile_business_name_textfield",
				value: Y,
				trailing: L
			})
		}), n[25] = Y, n[26] = J) : J = n[26];
		var Z, ee;
		n[27] === Symbol.for("react.memo_cache_sentinel") ? (Z = s.jsx(o("WAWebDescriptionRefreshedIcon.react").DescriptionRefreshedIcon, {}), ee = o("WAWebBusinessProfileLabels").getDescriptionLabel(), n[27] = Z, n[28] = ee) : (Z = n[27], ee = n[28]);
		var te;
		n[29] !== c || n[30] !== h ? (te = c === !0 && h != null ? function() {
			return h(o("WAWebBusinessProfileLabels").getDescriptionLabel());
		} : void 0, n[29] = c, n[30] = h, n[31] = te) : te = n[31];
		var ne;
		n[32] !== a.description || n[33] !== w || n[34] !== c || n[35] !== f || n[36] !== te ? (ne = s.jsx(r("WAWebBusinessProfileTextField.react"), {
			editable: !0,
			fieldName: "description",
			icon: Z,
			label: ee,
			locked: c,
			testid: "biz_profile_description_textfield",
			value: a.description,
			onChange: f,
			onClick: w,
			onLockedClick: te
		}), n[32] = a.description, n[33] = w, n[34] = c, n[35] = f, n[36] = te, n[37] = ne) : ne = n[37];
		var re;
		n[38] !== j || n[39] !== a.address || n[40] !== a.locationNotes || n[41] !== a.serviceAreaRadius || n[42] !== F || n[43] !== N || n[44] !== $ || n[45] !== (T == null ? void 0 : T.latitude) || n[46] !== (T == null ? void 0 : T.longitude) || n[47] !== q ? (re = !q && s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: p.addressContainer,
			children: [
				B ? s.jsx(r("WAWebBizProfileAddressAutocomplete.react"), {
					defaultValue: a.address,
					fieldName: "address",
					initialLatitude: T == null ? void 0 : T.latitude,
					initialLongitude: T == null ? void 0 : T.longitude,
					label: o("WAWebBusinessProfileLabels").getLocationLabel(),
					locationNotesValue: a.locationNotes,
					onChange: N,
					onClick: F,
					onLocationSelect: $,
					serviceAreaRadiusValue: a.serviceAreaRadius
				}) : s.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					gap: 12,
					xstyle: p.fieldContainer,
					children: [s.jsx(o("WAWebFlex.react").FlexItem, {
						align: "center",
						justify: "center",
						xstyle: p.iconContainer,
						children: s.jsx(o("WAWebStorefrontIcon.react").StorefrontIcon, {})
					}), s.jsxs(o("WAWebFlex.react").FlexColumn, {
						align: "start",
						grow: 1,
						children: [s.jsx(r("WDSText.react"), {
							type: "Body3",
							colorName: "contentDeemphasized",
							children: o("WAWebBusinessProfileLabels").getLocationLabel()
						}), s.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDefault",
							children: a.address
						})]
					})]
				}),
				j,
				!B && s.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					gap: 12,
					xstyle: [p.fieldContainer, p.mapEditText],
					children: s.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: o("WAWebBusinessProfileLabels").getAddressEditMobileLabel()
					})
				})
			]
		}), n[38] = j, n[39] = a.address, n[40] = a.locationNotes, n[41] = a.serviceAreaRadius, n[42] = F, n[43] = N, n[44] = $, n[45] = T == null ? void 0 : T.latitude, n[46] = T == null ? void 0 : T.longitude, n[47] = q, n[48] = re) : re = n[48];
		var oe;
		n[49] !== i || n[50] !== y || n[51] !== C ? (oe = i != null && s.jsx(r("WAWebBusinessHoursField.react"), {
			businessHours: i,
			label: o("WAWebBusinessProfileLabels").getBusinessHoursLabel(),
			saveBusinessProfile: y,
			saveBusinessProfileGraphQL: C
		}), n[49] = i, n[50] = y, n[51] = C, n[52] = oe) : oe = n[52];
		var ae;
		n[53] !== c || n[54] !== h ? (ae = c === !0 && h != null ? function() {
			return h(o("WAWebBusinessProfileLabels").getCategoryLabel());
		} : void 0, n[53] = c, n[54] = h, n[55] = ae) : ae = n[55];
		var ie;
		n[56] !== l || n[57] !== c || n[58] !== y || n[59] !== C || n[60] !== ae ? (ie = s.jsx(o("WAWebBusinessCategoryField.react").WAWebBusinessCategoryField, {
			categories: l,
			locked: c,
			onLockedClick: ae,
			saveBusinessProfile: y,
			saveBusinessProfileGraphQL: C
		}), n[56] = l, n[57] = c, n[58] = y, n[59] = C, n[60] = ae, n[61] = ie) : ie = n[61];
		var le;
		return n[62] !== J || n[63] !== ne || n[64] !== re || n[65] !== oe || n[66] !== ie ? (le = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			gap: 12,
			xstyle: p.container,
			children: [
				J,
				ne,
				re,
				oe,
				ie
			]
		}), n[62] = J, n[63] = ne, n[64] = re, n[65] = oe, n[66] = ie, n[67] = le) : le = n[67], le;
	}
	l.default = _;
}), 98);
