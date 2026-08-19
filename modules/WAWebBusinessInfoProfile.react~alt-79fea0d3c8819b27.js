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
		var t, n = e.bizProfileValues, a = e.businessHours, i = e.categories, l = e.googlePlaceId, u = e.isAgentProfileLocked, _ = e.latitude, f = e.longitude, g = e.onFieldChange, h = e.onLocationSelect, y = e.onLockedFieldClick, C = e.onSave, b = e.onSaveGraphQL, v = o("useWAWebModelValues").useModelValues(o("WAWebConnModel").Conn, ["pushname"]), S = o("WAWebContactCollection").ContactCollection.getMeContact(), R = S != null && o("WAWebContactGetters").getShowBusinessCheckmarkInChatlist(S), L = null;
		R && (L = o("WAWebMiscGatingUtils").isBlueEnabled() ? s.jsx(o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon, {}) : s.jsx(o("WAWebPsaVerifiedIcon.react").PsaVerifiedIcon, {}));
		var E = m(_ != null && f != null ? {
			latitude: _,
			longitude: f
		} : null), k = E[0], I = E[1], T = c(function(e) {
			I({
				latitude: e.latitude,
				longitude: e.longitude
			}), h != null && h(e);
		}, [h]), D = c(function(e, t) {
			e === "address" && I(null), g != null && g(e, t);
		}, [g]), x = function() {
			var e = n.description != null && n.description.trim() !== "";
			o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.clickDescription(e);
		}, $ = function() {
			var e = n.address != null && n.address.trim() !== "";
			o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.clickAddress(e);
		}, P = o("WAWebBizProfileGatingUtils").businessProfileRefreshV2Enabled(), N = o("WAWebBizProfileGatingUtils").isGoogleProfileIntegrationEnabled() && l != null && l !== "", M = d(function() {
			return k != null ? k : o("WAWebCountryCenterCoordinates").getDefaultCenter();
		}, [k]), w = s.jsx(r("WAWebBizProfileAddressFieldMap.react"), {
			value: n.address,
			latitude: M.latitude,
			longitude: M.longitude,
			serviceAreaRadius: n.serviceAreaRadius != null ? Number(n.serviceAreaRadius) : void 0
		});
		return s.jsxs(o("WAWebFlex.react").FlexColumn, {
			gap: 12,
			xstyle: p.container,
			children: [
				s.jsx(r("WDSTooltip.react"), {
					label: o("WAWebBusinessProfileLabels").getBusinessNameNotEditableLabel(),
					position: "end",
					children: s.jsx(r("WAWebBusinessProfileTextField.react"), {
						editable: !1,
						icon: s.jsx(o("WAWebStorefrontIcon.react").StorefrontIcon, {}),
						label: o("WAWebBusinessProfileLabels").getBusinessNameLabel(),
						testid: "biz_profile_business_name_textfield",
						value: (t = v.pushname) != null ? t : "",
						trailing: L
					})
				}),
				s.jsx(r("WAWebBusinessProfileTextField.react"), {
					editable: !0,
					fieldName: "description",
					icon: s.jsx(o("WAWebDescriptionRefreshedIcon.react").DescriptionRefreshedIcon, {}),
					label: o("WAWebBusinessProfileLabels").getDescriptionLabel(),
					locked: u,
					testid: "biz_profile_description_textfield",
					value: n.description,
					onChange: g,
					onClick: x,
					onLockedClick: u === !0 && y != null ? function() {
						return y(o("WAWebBusinessProfileLabels").getDescriptionLabel());
					} : void 0
				}),
				!N && s.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: p.addressContainer,
					children: [
						P ? s.jsx(r("WAWebBizProfileAddressAutocomplete.react"), {
							defaultValue: n.address,
							fieldName: "address",
							initialLatitude: k == null ? void 0 : k.latitude,
							initialLongitude: k == null ? void 0 : k.longitude,
							label: o("WAWebBusinessProfileLabels").getLocationLabel(),
							locationNotesValue: n.locationNotes,
							onChange: D,
							onClick: $,
							onLocationSelect: T,
							serviceAreaRadiusValue: n.serviceAreaRadius
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
									children: n.address
								})]
							})]
						}),
						w,
						!P && s.jsx(o("WAWebFlex.react").FlexRow, {
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
				}),
				a != null && s.jsx(r("WAWebBusinessHoursField.react"), {
					businessHours: a,
					label: o("WAWebBusinessProfileLabels").getBusinessHoursLabel(),
					saveBusinessProfile: C,
					saveBusinessProfileGraphQL: b
				}),
				s.jsx(o("WAWebBusinessCategoryField.react").WAWebBusinessCategoryField, {
					categories: i,
					locked: u,
					onLockedClick: u === !0 && y != null ? function() {
						return y(o("WAWebBusinessProfileLabels").getCategoryLabel());
					} : void 0,
					saveBusinessProfile: C,
					saveBusinessProfileGraphQL: b
				})
			]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
