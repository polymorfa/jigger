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
		var t, n, a, i, l = e.about, d = e.bizProfileValues, p = e.onFieldChange, f = e.onLocationSelect, g = e.onSave, h = e.onSaveGraphQL, y = e.onValidationChange, C = e.preloadedProfile, b = e.selectedLocation, v = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(), S = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.assertGet(v), R = o("WAWebContactCollection").ContactCollection.assertGet(v);
		o("useWAWebModelValues").useModelValues(R, [
			"businessProfile",
			"username",
			"usernameKey"
		]);
		var L = o("useWAWebModelValues").useOptionalModelValues(R.businessProfile, [
			"googlePlace",
			"googlePlaceId",
			"isAuthorizedAgent"
		]), E = o("WAWebBizCoexGatingUtils").agentBizProfileFeatureControlEnabled() && (L == null ? void 0 : L.isAuthorizedAgent) === !0, k = function(t) {
			var e = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: u.jsx(r("WDSText.react"), {
					type: "Headline1",
					colorName: "contentDefault",
					children: s._(
						/*BTDS*/
						"",
						[s._param("field", t)]
					)
				}),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
				onCancel: o("WAWebModalManager").closeModalManager
			});
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				title: e,
				cancelText: s._(
					/*BTDS*/
					""
				),
				onCancel: function() {
					return o("WAWebModalManager").ModalManager.close();
				},
				children: u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDefault",
					children: s._(
						/*BTDS*/
						"",
						[s._param("field", t)]
					)
				})
			}));
		}, I = c(!0), T = I[0], D = I[1], x = c(!0), $ = x[0], P = x[1], N = function(t) {
			D(t);
			var e = t && $;
			y && y(e);
		}, M = function(t) {
			P(t);
			var e = T && t;
			y && y(e);
		}, w = R.businessProfile, A = C != null ? {
			businessHours: C.businessHours,
			categories: C.categories,
			latitude: C.latitude,
			longitude: C.longitude
		} : {
			businessHours: (w == null ? void 0 : w.businessHours) != null ? o("WAWebSmbUtils").getBusinessHoursForEdit(w.businessHours) : null,
			categories: w == null ? void 0 : w.categories,
			latitude: w == null ? void 0 : w.latitude,
			longitude: w == null ? void 0 : w.longitude
		}, F = (t = b == null ? void 0 : b.latitude) != null ? t : A.latitude, O = (n = b == null ? void 0 : b.longitude) != null ? n : A.longitude;
		return u.jsx(r("WAWebDrawerBody.react"), {
			xstyle: m.mainContainer,
			id: "profile-drawer-body",
			children: u.jsx("div", {
				className: "xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 xdt5ytf x2lah0s x5yr21d x6ikm8r x10wlt62 x1n2onr6 xh8yej3",
				children: u.jsx("div", {
					className: "xw6alqk x1iyjqo2 xs83m0k x15icp18 x1odjw0f x1tvm86q x1hqvyuz",
					children: u.jsxs("div", {
						className: "xvc5jky x11t971q xted6l9 xh8yej3",
						children: [
							u.jsx(_, {
								contact: R,
								profilePicThumb: S
							}),
							u.jsx(r("WAWebProfileSectionHeader.react"), {
								showDivider: !1,
								testId: "profile-business-information",
								title: o("WAWebBusinessProfileLabels").getBusinessInformationTitleLabel()
							}),
							d != null && u.jsx(r("WAWebBusinessInfoProfile.react"), {
								businessHours: A.businessHours,
								categories: A.categories,
								googlePlaceId: L == null ? void 0 : L.googlePlaceId,
								isAgentProfileLocked: E,
								latitude: F,
								longitude: O,
								onLocationSelect: f,
								onFieldChange: p,
								onLockedFieldClick: E ? k : void 0,
								bizProfileValues: d,
								onSave: g,
								onSaveGraphQL: h
							}),
							u.jsx("div", {
								className: "x16ovd2e",
								children: u.jsx(r("WAWebProfileSectionHeader.react"), {
									showDivider: !0,
									title: o("WAWebBusinessProfileLabels").getProductsAndServicesTitleLabel()
								})
							}),
							u.jsx(r("WAWebBusinessProductsAndServicesProfile.react"), {
								businessProfile: R.businessProfile,
								bizProfileValues: d,
								isPriceTierEnabled: o("WAWebBizProfileGatingUtils").businessPriceTierEnabled(),
								isV2Enabled: o("WAWebBizProfileGatingUtils").businessProfileRefreshV2Enabled(),
								isServiceOfferingsEnabled: o("WAWebABProps").getABPropConfigValue("smb_waldo_service_offerings_selection_enabled"),
								onFieldChange: p
							}),
							u.jsx("div", {
								className: "x16ovd2e",
								children: u.jsx(r("WAWebProfileSectionHeader.react"), {
									showDivider: !0,
									title: o("WAWebBusinessProfileLabels").getLinksTitleLabel()
								})
							}),
							u.jsx(r("WAWebBusinessLinksProfile.react"), {
								googlePlace: L == null ? void 0 : L.googlePlace,
								googlePlaceId: L == null ? void 0 : L.googlePlaceId,
								isAgentProfileLocked: E,
								onChange: p,
								onLockedFieldClick: E ? k : void 0,
								onValidationChange: M,
								primaryWebsite: d != null ? d.primaryWebsite : (a = R.businessProfile) == null || (a = a.website) == null || (a = a[0]) == null ? void 0 : a.url,
								secondaryWebsite: d != null ? d.secondaryWebsite : (i = R.businessProfile) == null || (i = i.website) == null || (i = i[1]) == null ? void 0 : i.url
							}),
							u.jsx("div", {
								className: "x16ovd2e",
								children: u.jsx(r("WAWebProfileSectionHeader.react"), {
									showDivider: !0,
									title: o("WAWebBusinessProfileLabels").getContactInformationTitleLabel()
								})
							}),
							d != null && u.jsx(r("WAWebBusinessContactProfile.react"), {
								about: l,
								email: d.email,
								hideAbout: o("WAWebTextStatusGatingUtils").sendTextStatusEnabled(),
								isAgentProfileLocked: E,
								onChange: p,
								onLockedFieldClick: E ? k : void 0,
								onValidationChange: N,
								phoneNumber: o("WAWebWidFormat").widToFormattedUser(o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE()),
								username: o("WAWebUsernameTypes").serializeMaybeUsername(R.username),
								usernameKey: R.usernameKey
							})
						]
					})
				})
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.contact, n = e.profilePicThumb, a = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(), i = o("WAWebTextStatusGatingUtils").sendTextStatusEnabled(), l = c(function() {
			return o("WAWebAboutPrompts").getRandomAboutPromptKey();
		}), s = l[0], d = function(t) {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebTextStatusEditModalLoadable").TextStatusEditModalLoadable, {
				entrypoint: o("WAWebAboutWamLogger").ABOUT_ENTRYPOINT_TYPE.ME_TAB,
				promptKey: t
			}));
		}, m = t.businessProfile ? u.jsx(r("WAWebBusinessProfileCoverPhotoRefreshed.react"), {
			contact: t,
			businessProfile: t.businessProfile,
			editable: !0,
			profilePicThumb: n
		}) : null;
		return u.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			children: [m, i && u.jsx("div", {
				className: "x6s0dn4 x19q1oq6 x78zum5 xdt5ytf xbudbmw x10l6tqk xuuh30 xupqr0c",
				children: u.jsx(r("WAWebMeTabSpeechBubble.react"), {
					contactId: a,
					onClick: d,
					promptKey: s
				})
			})]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = p;
}), 226);
