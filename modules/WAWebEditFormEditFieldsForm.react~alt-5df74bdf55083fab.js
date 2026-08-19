__d("WAWebEditFormEditFieldsForm.react", [
	"fbt",
	"WAWebBizBusinessComplianceAddressRequiredModal",
	"WAWebBizCatalogGatingUtils",
	"WAWebBizComplianceUtil",
	"WAWebBusinessCategoriesResultCollection",
	"WAWebBusinessCategoryIcon.react",
	"WAWebBusinessHours",
	"WAWebBusinessProfileIconSection.react",
	"WAWebBusinessProfileModel",
	"WAWebBusinessProfilePhoneSection.react",
	"WAWebBusinessProfileTypes",
	"WAWebCategories",
	"WAWebCheckmarkInfoModal.react",
	"WAWebCheckmarkInfoModalLogEvents",
	"WAWebConfirmPopup.react",
	"WAWebConnModel",
	"WAWebContactCollection",
	"WAWebContactGetters",
	"WAWebDescriptionRefreshedIcon.react",
	"WAWebDrawerSection.react",
	"WAWebEditFormBusinessAddressField.react",
	"WAWebEditFormBusinessProfileFormField.react",
	"WAWebEditFormLogEvents",
	"WAWebEditFormParsers",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFbtIntlList",
	"WAWebFlex.react",
	"WAWebLocationRefreshedOutlineIcon.react",
	"WAWebMiscGatingUtils",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebStorefrontIcon.react",
	"WAWebSubscriptionsGatingUtils",
	"WAWebURLUtils",
	"WAWebUserPrefsMeUser",
	"WAWebUtilsLogQplEvents",
	"WAWebValidationUtils",
	"WAWebWamEnumBusinessProfileField",
	"WDSIconIcAccountCircle.react",
	"WDSIconIcCategory.react",
	"WDSIconIcLocationOn.react",
	"WDSIconIcMail.react",
	"WDSIconIcPublic.react",
	"WDSIconIcSchedule.react",
	"WDSIconIcStore.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useState, f = { marginTop10: {
		marginTop: "x1anpbxc",
		$$css: !0
	} }, g = {
		businessHoursSection: {
			display: "x78zum5",
			$$css: !0
		},
		infoText: {
			color: "xhslqc4",
			fontSize: "x1pg5gke",
			lineHeight: "x37zpob",
			$$css: !0
		},
		verifiedNameIcon: {
			marginTop: "x1kgmq87",
			$$css: !0
		}
	};
	function h(t) {
		var n = t.hours, a = n.days, i = n.mode;
		return i == null ? null : c.jsx("div", { children: a.map(function(t, n) {
			var a = t.closed, l = t.dayKey, s = t.dayName, u = t.hours;
			return c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(g.businessHoursSection, n !== 0 && o("WDSMargins.stylex").wdsMargins.marginTop28), {
				"data-testid": "business-hours-section-row",
				children: [c.jsx("div", {
					className: "x1r8uery x1ikap7u xs83m0k xn80e1m",
					children: s
				}), c.jsx("div", {
					className: "x1r8uery x1bhwmg6 xs83m0k",
					children: c.jsx(y, {
						mode: i,
						closed: a,
						hours: u
					})
				})]
			}), l);
		}) });
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(t) {
		var n = t.closed, a = t.hours, i = t.mode;
		if (n) return s._(
			/*BTDS*/
			""
		);
		switch (i) {
			case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.SPECIFIC_HOURS: return c.jsx(c.Fragment, { children: a && a.map(function(t, n) {
				var a = t[0], i = t[1];
				return c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(n !== 0 && o("WDSMargins.stylex").wdsMargins.marginTop16), {
					"data-testid": "business-hours-time",
					children: [
						a,
						" - ",
						i
					]
				}), n);
			}) });
			case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.APPOINTMENT_ONLY: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.OPEN_24H: return s._(
				/*BTDS*/
				""
			);
			default: return null;
		}
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.categories;
		return t.length === 0 ? null : c.jsx("div", {
			"data-testid": "biz-profile-category-input",
			children: r("WAWebFbtIntlList")(t.map(function(e) {
				return e.localized_display_name;
			}), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA)
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.config;
		return c.jsx(o("WAWebBusinessProfileIconSection.react").IconSection, babelHelpers.extends({}, t));
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(t) {
		var n = t.isRefreshed, a = o("useWAWebModelValues").useModelValues(o("WAWebConnModel").Conn, ["pushname"]), i = a.pushname;
		return i == null ? null : c.jsx(b, { config: {
			Icon: n ? o("WAWebStorefrontIcon.react").StorefrontIcon : r("WDSIconIcAccountCircle.react"),
			content: c.jsxs("div", { children: [c.jsx("div", { children: i }), o("WAWebMiscGatingUtils").isBlueLockingEnabled() === !1 && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(g.infoText, o("WDSMargins.stylex").wdsMargins.marginTop24), { children: s._(
				/*BTDS*/
				""
			) }))] }),
			testid: "biz-profile-name-input",
			theme: o("WAWebBusinessProfileIconSection.react").IconSectionTheme.NoMargin,
			xstyle: g.verifiedNameIcon
		} });
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = e.categories, n = o("useWAWebModelValues").useModelValues(o("WAWebConnModel").Conn, ["pushname"]), a = n.pushname, i = o("WAWebContactCollection").ContactCollection.getMeContact(), l = function() {
			o("WAWebMiscGatingUtils").isBlueEducationEnabled() && (i && o("WAWebCheckmarkInfoModalLogEvents").logClickProfileBadge(i), o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebCheckmarkInfoModal.react"), {})));
		}, s;
		if (i != null) {
			var u = o("WAWebContactGetters").getShowBusinessCheckmarkInChatlist(i);
			s = c.jsx(o("WAWebName.react").Name, {
				contact: i,
				useVerifiedName: !0,
				showBusinessCheckmark: u,
				makeCheckmarkClickable: !0,
				checkmarkLarge: !0,
				onClick: u && o("WAWebMiscGatingUtils").isBlueEducationEnabled() ? l : null
			});
		} else s = a;
		return c.jsxs(o("WAWebFlex.react").FlexColumn, {
			justify: "center",
			align: "center",
			children: [c.jsx(o("WAWebFlex.react").FlexItem, {
				paddingBottom: 8,
				xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom2,
				className: "xngnso2 x1o2sk6j",
				children: s
			}), c.jsx(o("WAWebFlex.react").FlexItem, {
				className: "xhslqc4 x1jchvi3 x1o2sk6j",
				children: c.jsx(C, { categories: t })
			})]
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t = e.isProfileLocked, n = e.url;
		return n == null ? null : c.jsx(b, { config: {
			Icon: r("WDSIconIcPublic.react"),
			content: c.jsx("div", {
				className: "x1yn0g08",
				children: n
			}),
			fieldName: s._(
				/*BTDS*/
				""
			),
			onEdit: t === !1 ? I : void 0,
			testid: "biz-profile-custom-url-input",
			xstyle: g.verifiedNameIcon
		} });
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		return e != null && e !== "";
	}
	function E(e) {
		var t = e.businessProfile, n = e.isRefreshed, a = e.saveBusinessProfile, i = e.sessionId, l = _(), u = l[0], d = l[1], f = _(), g = f[0], y = f[1], E = _(), I = E[0], D = E[1], x = _(), $ = x[0], P = x[1], N = _(), M = N[0], w = N[1], A = _(), F = A[0], O = A[1], B = _(), W = B[0], q = B[1], U = _(), V = U[0], H = U[1], G = _(), z = G[0], j = G[1], K = _(!1), Q = K[0], X = K[1], Y = _(!1), J = Y[0], Z = Y[1], ee = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(), te = o("WAWebBizCatalogGatingUtils").canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney(ee), ne = _(), re = ne[0], oe = ne[1];
		p(function() {
			var e, n = o("WAWebEditFormParsers").convertRawBusinessProfile(t);
			d(n.description), D(n.email), y(n.address), P(n.primaryWebsite), w(n.secondaryWebsite), O(L(n.primaryWebsite) && !n.secondaryWebsite), Z(o("WAWebMiscGatingUtils").isBlueLockingEnabled() && ((e = n.profileOptions) == null ? void 0 : e.isProfileEditDisabled) === !0);
		}, [t]), p(function() {
			o("WAWebValidationUtils").validateEmail(I) && q(null);
		}, [I]), p(function() {
			o("WAWebValidationUtils").validateURL($) && H(null);
		}, [$]), p(function() {
			o("WAWebValidationUtils").validateURL(M) && j(null);
		}, [M]);
		var ae = function() {
			var e = [];
			return L($) && e.push($), L(M) && e.push(M), { website: e.map(function(e, t) {
				if (!r("WAWebURLUtils").isHttps(e) && !r("WAWebURLUtils").isHttp(e)) {
					var n = "https://" + e;
					return t === 0 ? P(n) : w(n), { url: n };
				}
				return { url: e };
			}) };
		}, ie = m(function() {
			return te ? r("WAWebBizBusinessComplianceAddressRequiredModal")() : void 0;
		}, [te]), le = o("WAWebEditFormParsers").convertRawBusinessProfile(t), se;
		t.customUrlPath != null && (se = c.jsx(R, {
			url: "" + o("WAWebBusinessProfileModel").BUSINESS_URL_DOMAIN + t.customUrlPath,
			isProfileLocked: J === !0
		}));
		var ue = L(M) || !F, ce = J ? c.jsx(S, { categories: le.categories }) : c.jsx(v, { isRefreshed: n }), de = c.jsx(r("WAWebBusinessProfilePhoneSection.react"), { isProfileLocked: J }), me = c.jsx(b, { config: {
			Icon: n ? o("WAWebDescriptionRefreshedIcon.react").DescriptionRefreshedIcon : r("WDSIconIcStore.react"),
			content: c.jsx(r("WAWebEditFormBusinessProfileFormField.react"), {
				activeField: re,
				fieldKey: "description",
				fieldMetric: o("WAWebWamEnumBusinessProfileField").BUSINESS_PROFILE_FIELD.DESCRIPTION,
				formatForSave: function() {
					return { description: u == null ? void 0 : u.trim() };
				},
				lowProfile: !0,
				originalValue: le.description,
				placeholder: s._(
					/*BTDS*/
					""
				),
				rawBusinessProfile: t,
				sessionId: i,
				maxLength: o("WAWebBusinessProfileTypes").BUSINESS_PROFILE_FIELDS_LENGTH.DESCRIPTION,
				emojiBtnPosition: "side",
				value: u,
				onActive: oe,
				onChange: d,
				onSaveBusinessProfile: a,
				blockFocusOnLock: !0
			}),
			testid: "biz-profile-description-input"
		} }), pe = c.jsx(b, { config: {
			Icon: n ? r("WDSIconIcCategory.react") : o("WAWebBusinessCategoryIcon.react").BusinessCategoryIcon,
			content: le.categories.length === 0 ? null : c.jsx(C, { categories: le.categories }),
			emptyText: s._(
				/*BTDS*/
				""
			),
			fieldName: s._(
				/*BTDS*/
				""
			),
			onEdit: function() {
				o("WAWebUtilsLogQplEvents").qplStartProfileCatsView("Profile"), o("WAWebEditFormLogEvents").logProfileFieldOpen(o("WAWebWamEnumBusinessProfileField").BUSINESS_PROFILE_FIELD.CATEGORY, t, i), o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebCategories"), {
					initialCategories: le.categories,
					saveBusinessProfile: a,
					searchCategories: function(t) {
						return o("WAWebBusinessCategoriesResultCollection").BusinessCategoriesResultCollection.find(t);
					},
					afterSave: function() {
						return o("WAWebEditFormLogEvents").logProfileFieldSave(o("WAWebWamEnumBusinessProfileField").BUSINESS_PROFILE_FIELD.CATEGORY, t, i);
					},
					onCancel: function() {
						o("WAWebEditFormLogEvents").logProfileFieldDiscard(o("WAWebWamEnumBusinessProfileField").BUSINESS_PROFILE_FIELD.CATEGORY, t, i);
					}
				}));
			},
			testid: "biz-profile-category-input",
			type: "container"
		} }), _e = c.jsx(b, { config: {
			Icon: n ? o("WAWebLocationRefreshedOutlineIcon.react").LocationRefreshedOutlineIcon : r("WDSIconIcLocationOn.react"),
			content: c.jsx(r("WAWebEditFormBusinessAddressField.react"), {
				businessProfile: le,
				activeField: re,
				rawBusinessProfile: t,
				sessionId: i,
				value: g,
				onActive: oe,
				onChange: y,
				onSaveBusinessProfile: a,
				validate: function(t) {
					return o("WAWebBizComplianceUtil").existsField(t, ee);
				},
				onError: ie,
				disabled: J
			}),
			disabled: J,
			testid: "biz-profile-address-input"
		} }), fe = c.jsx(b, { config: {
			Icon: r("WDSIconIcSchedule.react"),
			content: le.hours.mode == null ? null : c.jsx(h, { hours: le.hours }),
			emptyText: s._(
				/*BTDS*/
				""
			),
			fieldName: s._(
				/*BTDS*/
				""
			),
			onEdit: function() {
				o("WAWebEditFormLogEvents").logProfileFieldOpen(o("WAWebWamEnumBusinessProfileField").BUSINESS_PROFILE_FIELD.HOURS, t, i), o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebBusinessHours"), {
					businessHours: le.hours,
					saveBusinessProfile: a,
					onCancel: function() {
						o("WAWebEditFormLogEvents").logProfileFieldDiscard(o("WAWebWamEnumBusinessProfileField").BUSINESS_PROFILE_FIELD.HOURS, t, i);
					},
					afterSave: function() {
						return o("WAWebEditFormLogEvents").logProfileFieldSave(o("WAWebWamEnumBusinessProfileField").BUSINESS_PROFILE_FIELD.HOURS, t, i);
					}
				}));
			},
			testid: "biz-profile-hours-input",
			type: "container"
		} }), ge = c.jsx(b, { config: {
			Icon: r("WDSIconIcMail.react"),
			content: c.jsx(r("WAWebEditFormBusinessProfileFormField.react"), {
				activeField: re,
				error: W,
				fieldKey: "email",
				fieldMetric: o("WAWebWamEnumBusinessProfileField").BUSINESS_PROFILE_FIELD.EMAIL,
				formatForSave: function() {
					return { email: I };
				},
				lowProfile: !1,
				originalValue: le.email,
				placeholder: s._(
					/*BTDS*/
					""
				),
				rawBusinessProfile: t,
				sessionId: i,
				maxLength: o("WAWebBusinessProfileTypes").BUSINESS_PROFILE_FIELDS_LENGTH.EMAIL,
				validate: k,
				value: I,
				onActive: oe,
				onChange: D,
				onError: function() {
					q(s._(
						/*BTDS*/
						""
					));
				},
				onSaveBusinessProfile: a,
				disabled: J
			}),
			disabled: J,
			testid: "biz-profile-email-input"
		} }), he = c.jsx(b, { config: {
			Icon: r("WDSIconIcPublic.react"),
			content: c.jsx("div", { children: c.jsx(r("WAWebEditFormBusinessProfileFormField.react"), {
				activeField: re,
				error: V,
				fieldKey: "primaryWebsite",
				fieldMetric: o("WAWebWamEnumBusinessProfileField").BUSINESS_PROFILE_FIELD.WEBSITE,
				formatForSave: ae,
				lowProfile: !1,
				originalValue: le.primaryWebsite,
				placeholder: s._(
					/*BTDS*/
					""
				),
				rawBusinessProfile: t,
				sessionId: i,
				maxLength: o("WAWebBusinessProfileTypes").BUSINESS_PROFILE_FIELDS_LENGTH.WEBSITE,
				validate: o("WAWebValidationUtils").validateURL,
				value: $,
				onActive: oe,
				onChange: P,
				onError: function() {
					H(s._(
						/*BTDS*/
						""
					));
				},
				onSaveBusinessProfile: a,
				disabled: J
			}) }),
			disabled: J,
			testid: "biz-profile-website-input",
			theme: o("WAWebBusinessProfileIconSection.react").IconSectionTheme.SmallMargin
		} }), ye;
		le.primaryWebsite !== void 0 && (ue ? ye = c.jsx(b, { config: {
			Icon: r("WDSIconIcPublic.react"),
			content: c.jsx("div", { children: c.jsx(r("WAWebEditFormBusinessProfileFormField.react"), {
				activeField: re,
				error: z,
				fieldKey: "secondaryWebsite",
				fieldMetric: o("WAWebWamEnumBusinessProfileField").BUSINESS_PROFILE_FIELD.WEBSITE,
				formatForSave: ae,
				lowProfile: !1,
				originalValue: le.secondaryWebsite,
				placeholder: s._(
					/*BTDS*/
					""
				),
				rawBusinessProfile: t,
				sessionId: i,
				startActive: Q,
				maxLength: o("WAWebBusinessProfileTypes").BUSINESS_PROFILE_FIELDS_LENGTH.WEBSITE,
				validate: o("WAWebValidationUtils").validateURL,
				value: M,
				onActive: oe,
				onChange: w,
				onError: function() {
					j(s._(
						/*BTDS*/
						""
					));
				},
				onSaveBusinessProfile: a,
				disabled: J
			}) }),
			disabled: J,
			testid: "biz-profile-secondary-website-input",
			theme: o("WAWebBusinessProfileIconSection.react").IconSectionTheme.NoMargin
		} }) : (!o("WAWebMiscGatingUtils").isBlueLockingEnabled() || !J) && (ye = c.jsx(b, { config: {
			Icon: r("WDSIconIcPublic.react"),
			content: c.jsx("div", { children: c.jsx("button", {
				className: "xo1mcw5 x1f6kntn xtvhhri",
				onClick: function() {
					O(!1), X(!0);
				},
				children: s._(
					/*BTDS*/
					""
				)
			}) }),
			testid: "biz-profile-secondary-website-input",
			theme: o("WAWebBusinessProfileIconSection.react").IconSectionTheme.NoMargin
		} })));
		var Ce = T({
			businessAddress: _e,
			businessCategory: pe,
			businessDescription: me,
			businessEmail: ge,
			businessHours: fe,
			businessSecondaryWebsite: ye,
			businessWebsite: he,
			customUrl: se,
			isProfileLocked: J,
			nameSection: ce,
			phoneNumber: de
		});
		return c.jsx(r("WAWebDrawerSection.react"), {
			theme: "refresh",
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingTop0,
			animation: !1,
			children: Ce
		});
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		return o("WAWebValidationUtils").validateEmail(e);
	}
	function I() {
		o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			okText: r("WAWebFbtCommon")("OK"),
			onOK: o("WAWebModalManager").closeModalManager,
			children: s._(
				/*BTDS*/
				""
			)
		}));
	}
	function T(e) {
		var t = e.businessAddress, n = e.businessCategory, r = e.businessDescription, a = e.businessEmail, i = e.businessHours, l = e.businessSecondaryWebsite, u = e.businessWebsite, d = e.customUrl, m = e.isProfileLocked, p = e.nameSection, _ = e.phoneNumber;
		if (!o("WAWebMiscGatingUtils").isBlueLockingEnabled()) return c.jsxs(c.Fragment, { children: [
			p,
			d,
			r,
			n,
			t,
			i,
			a,
			u,
			l
		] });
		if (!m) return c.jsxs(c.Fragment, { children: [
			p,
			_,
			n,
			t,
			a,
			u,
			l,
			i,
			r
		] });
		var g = o("WAWebSubscriptionsGatingUtils").isMetaVerifiedLockedProfileEditingV1Enabled() ? s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m1", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebFaqUrl").getBlueFaqUrl(),
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		) : s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebFaqUrl").getBlueFaqUrl(),
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		), h = c.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: f.marginTop10,
			className: "xhslqc4 x1nxh6w3 x37zpob",
			children: c.jsx(o("WAWebFlex.react").FlexItem, { children: g })
		});
		return c.jsxs(c.Fragment, { children: [
			p,
			_,
			t,
			a,
			u,
			l,
			h,
			i,
			r
		] });
	}
	T.displayName = T.name + " [from " + i.id + "]", l.default = E;
}), 226);
