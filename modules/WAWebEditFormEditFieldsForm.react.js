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
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(7), a = t.hours, i = a.days, l = a.mode;
		if (l == null) return null;
		var s;
		if (n[0] !== i || n[1] !== l) {
			var u;
			n[3] !== l ? (u = function(n, a) {
				var t = n.closed, i = n.dayKey, s = n.dayName, u = n.hours;
				return c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(g.businessHoursSection, a !== 0 && o("WDSMargins.stylex").wdsMargins.marginTop28), {
					"data-testid": "business-hours-section-row",
					children: [c.jsx("div", {
						className: "x1r8uery x1ikap7u xs83m0k xn80e1m",
						children: s
					}), c.jsx("div", {
						className: "x1r8uery x1bhwmg6 xs83m0k",
						children: c.jsx(y, {
							mode: l,
							closed: t,
							hours: u
						})
					})]
				}), i);
			}, n[3] = l, n[4] = u) : u = n[4], s = i.map(u), n[0] = i, n[1] = l, n[2] = s;
		} else s = n[2];
		var d;
		return n[5] !== s ? (d = c.jsx("div", { children: s }), n[5] = s, n[6] = d) : d = n[6], d;
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(7), n = e.closed, r = e.hours, a = e.mode;
		if (n) {
			var i;
			return t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
				/*BTDS*/
				""
			), t[0] = i) : i = t[0], i;
		}
		switch (a) {
			case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.SPECIFIC_HOURS: {
				var l;
				t[1] !== r ? (l = r && r.map(C), t[1] = r, t[2] = l) : l = t[2];
				var u;
				return t[3] !== l ? (u = c.jsx(c.Fragment, { children: l }), t[3] = l, t[4] = u) : u = t[4], u;
			}
			case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.APPOINTMENT_ONLY: {
				var d;
				return t[5] === Symbol.for("react.memo_cache_sentinel") ? (d = s._(
					/*BTDS*/
					""
				), t[5] = d) : d = t[5], d;
			}
			case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.OPEN_24H: {
				var m;
				return t[6] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
					/*BTDS*/
					""
				), t[6] = m) : m = t[6], m;
			}
			default: return null;
		}
	}
	function C(t, n) {
		var a = t[0], i = t[1];
		return c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(n !== 0 && o("WDSMargins.stylex").wdsMargins.marginTop16), {
			"data-testid": "business-hours-time",
			children: [
				a,
				" - ",
				i
			]
		}), n);
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.categories;
		return t.length === 0 ? null : c.jsx("div", {
			"data-testid": "biz-profile-category-input",
			children: r("WAWebFbtIntlList")(t.map(function(e) {
				return e.localized_display_name;
			}), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA)
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = o("react-compiler-runtime").c(2), n = e.config, r;
		return t[0] !== n ? (r = c.jsx(o("WAWebBusinessProfileIconSection.react").IconSection, babelHelpers.extends({}, n)), t[0] = n, t[1] = r) : r = t[1], r;
	}
	function S(t) {
		var n = o("react-compiler-runtime").c(9), a = t.isRefreshed, i;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (i = ["pushname"], n[0] = i) : i = n[0];
		var l = o("useWAWebModelValues").useModelValues(o("WAWebConnModel").Conn, i), u = l.pushname;
		if (u == null) return null;
		var d = a ? o("WAWebStorefrontIcon.react").StorefrontIcon : r("WDSIconIcAccountCircle.react"), m;
		n[1] !== u ? (m = c.jsx("div", { children: u }), n[1] = u, n[2] = m) : m = n[2];
		var p;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (p = o("WAWebMiscGatingUtils").isBlueLockingEnabled() === !1 && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(g.infoText, o("WDSMargins.stylex").wdsMargins.marginTop24), { children: s._(
			/*BTDS*/
			""
		) })), n[3] = p) : p = n[3];
		var _;
		n[4] !== m ? (_ = c.jsxs("div", { children: [m, p] }), n[4] = m, n[5] = _) : _ = n[5];
		var f;
		return n[6] !== d || n[7] !== _ ? (f = c.jsx(v, { config: {
			Icon: d,
			content: _,
			testid: "biz-profile-name-input",
			theme: o("WAWebBusinessProfileIconSection.react").IconSectionTheme.NoMargin,
			xstyle: g.verifiedNameIcon
		} }), n[6] = d, n[7] = _, n[8] = f) : f = n[8], f;
	}
	function R(e) {
		var t = o("react-compiler-runtime").c(13), n = e.categories, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = ["pushname"], t[0] = a) : a = t[0];
		var i = o("useWAWebModelValues").useModelValues(o("WAWebConnModel").Conn, a), l = i.pushname, s;
		if (t[1] !== l) {
			var u = o("WAWebContactCollection").ContactCollection.getMeContact(), d = function() {
				o("WAWebMiscGatingUtils").isBlueEducationEnabled() && (u && o("WAWebCheckmarkInfoModalLogEvents").logClickProfileBadge(u), o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebCheckmarkInfoModal.react"), {})));
			};
			if (u != null) {
				var m = o("WAWebContactGetters").getShowBusinessCheckmarkInChatlist(u), p;
				t[3] === Symbol.for("react.memo_cache_sentinel") ? (p = c.jsx(o("WAWebName.react").Name, {
					contact: u,
					useVerifiedName: !0,
					showBusinessCheckmark: m,
					makeCheckmarkClickable: !0,
					checkmarkLarge: !0,
					onClick: m && o("WAWebMiscGatingUtils").isBlueEducationEnabled() ? d : null
				}), t[3] = p) : p = t[3], s = p;
			} else s = l;
			t[1] = l, t[2] = s;
		} else s = t[2];
		var _;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = "xngnso2 x1o2sk6j", t[4] = _) : _ = t[4];
		var f;
		t[5] !== s ? (f = c.jsx(o("WAWebFlex.react").FlexItem, {
			paddingBottom: 8,
			xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom2,
			className: _,
			children: s
		}), t[5] = s, t[6] = f) : f = t[6];
		var g;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (g = "xhslqc4 x1jchvi3 x1o2sk6j", t[7] = g) : g = t[7];
		var h;
		t[8] !== n ? (h = c.jsx(o("WAWebFlex.react").FlexItem, {
			className: g,
			children: c.jsx(b, { categories: n })
		}), t[8] = n, t[9] = h) : h = t[9];
		var y;
		return t[10] !== f || t[11] !== h ? (y = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			justify: "center",
			align: "center",
			children: [f, h]
		}), t[10] = f, t[11] = h, t[12] = y) : y = t[12], y;
	}
	function L(e) {
		var t = o("react-compiler-runtime").c(7), n = e.isProfileLocked, a = e.url;
		if (a == null) return null;
		var i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = { className: "x1yn0g08" }, t[0] = i) : i = t[0];
		var l;
		t[1] !== a ? (l = c.jsx("div", babelHelpers.extends({}, i, { children: a })), t[1] = a, t[2] = l) : l = t[2];
		var u;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (u = s._(
			/*BTDS*/
			""
		), t[3] = u) : u = t[3];
		var d = n === !1 ? D : void 0, m;
		return t[4] !== l || t[5] !== d ? (m = c.jsx(v, { config: {
			Icon: r("WDSIconIcPublic.react"),
			content: l,
			fieldName: u,
			onEdit: d,
			testid: "biz-profile-custom-url-input",
			xstyle: g.verifiedNameIcon
		} }), t[4] = l, t[5] = d, t[6] = m) : m = t[6], m;
	}
	function E(e) {
		return e != null && e !== "";
	}
	function k(e) {
		var t = o("react-compiler-runtime").c(144), n = e.businessProfile, a = e.isRefreshed, i = e.saveBusinessProfile, l = e.sessionId, u = _(), d = u[0], m = u[1], f = _(), g = f[0], y = f[1], C = _(), k = C[0], D = C[1], $ = _(), P = $[0], N = $[1], M = _(), w = M[0], A = M[1], F = _(), O = F[0], B = F[1], W = _(), q = W[0], U = W[1], V = _(), H = V[0], G = V[1], z = _(), j = z[0], K = z[1], Q = _(!1), X = Q[0], Y = Q[1], J = _(!1), Z = J[0], ee = J[1], te, ne;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (te = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(), ne = o("WAWebBizCatalogGatingUtils").canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney(te), t[0] = te, t[1] = ne) : (te = t[0], ne = t[1]);
		var re = ne, oe = _(), ae = oe[0], ie = oe[1], le, se;
		t[2] !== n ? (le = function() {
			var e, t = o("WAWebEditFormParsers").convertRawBusinessProfile(n);
			m(t.description), D(t.email), y(t.address), N(t.primaryWebsite), A(t.secondaryWebsite), B(E(t.primaryWebsite) && !t.secondaryWebsite), ee(o("WAWebMiscGatingUtils").isBlueLockingEnabled() && ((e = t.profileOptions) == null ? void 0 : e.isProfileEditDisabled) === !0);
		}, se = [n], t[2] = n, t[3] = le, t[4] = se) : (le = t[3], se = t[4]), p(le, se);
		var ue, ce;
		t[5] !== k ? (ue = function() {
			o("WAWebValidationUtils").validateEmail(k) && U(null);
		}, ce = [k], t[5] = k, t[6] = ue, t[7] = ce) : (ue = t[6], ce = t[7]), p(ue, ce);
		var de, me;
		t[8] !== P ? (de = function() {
			o("WAWebValidationUtils").validateURL(P) && G(null);
		}, me = [P], t[8] = P, t[9] = de, t[10] = me) : (de = t[9], me = t[10]), p(de, me);
		var pe, _e;
		t[11] !== w ? (pe = function() {
			o("WAWebValidationUtils").validateURL(w) && K(null);
		}, _e = [w], t[11] = w, t[12] = pe, t[13] = _e) : (pe = t[12], _e = t[13]), p(pe, _e);
		var fe;
		t[14] !== P || t[15] !== w ? (fe = function() {
			var e = [];
			return E(P) && e.push(P), E(w) && e.push(w), { website: e.map(function(e, t) {
				if (!r("WAWebURLUtils").isHttps(e) && !r("WAWebURLUtils").isHttp(e)) {
					var n = "https://" + e;
					return t === 0 ? N(n) : A(n), { url: n };
				}
				return { url: e };
			}) };
		}, t[14] = P, t[15] = w, t[16] = fe) : fe = t[16];
		var ge = fe, he;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (he = function() {
			return re ? r("WAWebBizBusinessComplianceAddressRequiredModal")() : void 0;
		}, t[17] = he) : he = t[17];
		var ye = he, Ce;
		t[18] !== n ? (Ce = o("WAWebEditFormParsers").convertRawBusinessProfile(n), t[18] = n, t[19] = Ce) : Ce = t[19];
		var be = Ce, ve;
		if (n.customUrlPath != null) {
			var Se = "" + o("WAWebBusinessProfileModel").BUSINESS_URL_DOMAIN + n.customUrlPath, Re = Z === !0, Le;
			t[20] !== Se || t[21] !== Re ? (Le = c.jsx(L, {
				url: Se,
				isProfileLocked: Re
			}), t[20] = Se, t[21] = Re, t[22] = Le) : Le = t[22], ve = Le;
		}
		var Ee = E(w) || !O, ke;
		t[23] !== be.categories || t[24] !== Z || t[25] !== a ? (ke = Z ? c.jsx(R, { categories: be.categories }) : c.jsx(S, { isRefreshed: a }), t[23] = be.categories, t[24] = Z, t[25] = a, t[26] = ke) : ke = t[26];
		var Ie = ke, Te;
		t[27] !== Z ? (Te = c.jsx(r("WAWebBusinessProfilePhoneSection.react"), { isProfileLocked: Z }), t[27] = Z, t[28] = Te) : Te = t[28];
		var De = Te, xe = a ? o("WAWebDescriptionRefreshedIcon.react").DescriptionRefreshedIcon : r("WDSIconIcStore.react"), $e;
		t[29] !== d ? ($e = function() {
			return { description: d == null ? void 0 : d.trim() };
		}, t[29] = d, t[30] = $e) : $e = t[30];
		var Pe = be.description, Ne;
		t[31] === Symbol.for("react.memo_cache_sentinel") ? (Ne = s._(
			/*BTDS*/
			""
		), t[31] = Ne) : Ne = t[31];
		var Me;
		t[32] !== ae || t[33] !== be.description || t[34] !== d || t[35] !== n || t[36] !== i || t[37] !== l || t[38] !== $e ? (Me = c.jsx(r("WAWebEditFormBusinessProfileFormField.react"), {
			activeField: ae,
			fieldKey: "description",
			fieldMetric: o("WAWebWamEnumBusinessProfileField").BUSINESS_PROFILE_FIELD.DESCRIPTION,
			formatForSave: $e,
			lowProfile: !0,
			originalValue: Pe,
			placeholder: Ne,
			rawBusinessProfile: n,
			sessionId: l,
			maxLength: o("WAWebBusinessProfileTypes").BUSINESS_PROFILE_FIELDS_LENGTH.DESCRIPTION,
			emojiBtnPosition: "side",
			value: d,
			onActive: ie,
			onChange: m,
			onSaveBusinessProfile: i,
			blockFocusOnLock: !0
		}), t[32] = ae, t[33] = be.description, t[34] = d, t[35] = n, t[36] = i, t[37] = l, t[38] = $e, t[39] = Me) : Me = t[39];
		var we;
		t[40] !== xe || t[41] !== Me ? (we = c.jsx(v, { config: {
			Icon: xe,
			content: Me,
			testid: "biz-profile-description-input"
		} }), t[40] = xe, t[41] = Me, t[42] = we) : we = t[42];
		var Ae = we, Fe = a ? r("WDSIconIcCategory.react") : o("WAWebBusinessCategoryIcon.react").BusinessCategoryIcon, Oe;
		t[43] !== be.categories ? (Oe = be.categories.length === 0 ? null : c.jsx(b, { categories: be.categories }), t[43] = be.categories, t[44] = Oe) : Oe = t[44];
		var Be, We;
		t[45] === Symbol.for("react.memo_cache_sentinel") ? (Be = s._(
			/*BTDS*/
			""
		), We = s._(
			/*BTDS*/
			""
		), t[45] = Be, t[46] = We) : (Be = t[45], We = t[46]);
		var qe;
		t[47] !== be.categories || t[48] !== n || t[49] !== i || t[50] !== l ? (qe = function() {
			o("WAWebUtilsLogQplEvents").qplStartProfileCatsView("Profile"), o("WAWebEditFormLogEvents").logProfileFieldOpen(o("WAWebWamEnumBusinessProfileField").BUSINESS_PROFILE_FIELD.CATEGORY, n, l), o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebCategories"), {
				initialCategories: be.categories,
				saveBusinessProfile: i,
				searchCategories: I,
				afterSave: function() {
					return o("WAWebEditFormLogEvents").logProfileFieldSave(o("WAWebWamEnumBusinessProfileField").BUSINESS_PROFILE_FIELD.CATEGORY, n, l);
				},
				onCancel: function() {
					o("WAWebEditFormLogEvents").logProfileFieldDiscard(o("WAWebWamEnumBusinessProfileField").BUSINESS_PROFILE_FIELD.CATEGORY, n, l);
				}
			}));
		}, t[47] = be.categories, t[48] = n, t[49] = i, t[50] = l, t[51] = qe) : qe = t[51];
		var Ue;
		t[52] !== Fe || t[53] !== Oe || t[54] !== qe ? (Ue = c.jsx(v, { config: {
			Icon: Fe,
			content: Oe,
			emptyText: Be,
			fieldName: We,
			onEdit: qe,
			testid: "biz-profile-category-input",
			type: "container"
		} }), t[52] = Fe, t[53] = Oe, t[54] = qe, t[55] = Ue) : Ue = t[55];
		var Ve = Ue, He = a ? o("WAWebLocationRefreshedOutlineIcon.react").LocationRefreshedOutlineIcon : r("WDSIconIcLocationOn.react"), Ge;
		t[56] === Symbol.for("react.memo_cache_sentinel") ? (Ge = function(t) {
			return o("WAWebBizComplianceUtil").existsField(t, te);
		}, t[56] = Ge) : Ge = t[56];
		var ze;
		t[57] !== ae || t[58] !== g || t[59] !== be || t[60] !== Z || t[61] !== n || t[62] !== i || t[63] !== l ? (ze = c.jsx(r("WAWebEditFormBusinessAddressField.react"), {
			businessProfile: be,
			activeField: ae,
			rawBusinessProfile: n,
			sessionId: l,
			value: g,
			onActive: ie,
			onChange: y,
			onSaveBusinessProfile: i,
			validate: Ge,
			onError: ye,
			disabled: Z
		}), t[57] = ae, t[58] = g, t[59] = be, t[60] = Z, t[61] = n, t[62] = i, t[63] = l, t[64] = ze) : ze = t[64];
		var je;
		t[65] !== Z || t[66] !== He || t[67] !== ze ? (je = c.jsx(v, { config: {
			Icon: He,
			content: ze,
			disabled: Z,
			testid: "biz-profile-address-input"
		} }), t[65] = Z, t[66] = He, t[67] = ze, t[68] = je) : je = t[68];
		var Ke = je, Qe;
		t[69] !== be.hours ? (Qe = be.hours.mode == null ? null : c.jsx(h, { hours: be.hours }), t[69] = be.hours, t[70] = Qe) : Qe = t[70];
		var Xe, Ye;
		t[71] === Symbol.for("react.memo_cache_sentinel") ? (Xe = s._(
			/*BTDS*/
			""
		), Ye = s._(
			/*BTDS*/
			""
		), t[71] = Xe, t[72] = Ye) : (Xe = t[71], Ye = t[72]);
		var Je;
		t[73] !== be.hours || t[74] !== n || t[75] !== i || t[76] !== l ? (Je = function() {
			o("WAWebEditFormLogEvents").logProfileFieldOpen(o("WAWebWamEnumBusinessProfileField").BUSINESS_PROFILE_FIELD.HOURS, n, l), o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebBusinessHours"), {
				businessHours: be.hours,
				saveBusinessProfile: i,
				onCancel: function() {
					o("WAWebEditFormLogEvents").logProfileFieldDiscard(o("WAWebWamEnumBusinessProfileField").BUSINESS_PROFILE_FIELD.HOURS, n, l);
				},
				afterSave: function() {
					return o("WAWebEditFormLogEvents").logProfileFieldSave(o("WAWebWamEnumBusinessProfileField").BUSINESS_PROFILE_FIELD.HOURS, n, l);
				}
			}));
		}, t[73] = be.hours, t[74] = n, t[75] = i, t[76] = l, t[77] = Je) : Je = t[77];
		var Ze;
		t[78] !== Qe || t[79] !== Je ? (Ze = c.jsx(v, { config: {
			Icon: r("WDSIconIcSchedule.react"),
			content: Qe,
			emptyText: Xe,
			fieldName: Ye,
			onEdit: Je,
			testid: "biz-profile-hours-input",
			type: "container"
		} }), t[78] = Qe, t[79] = Je, t[80] = Ze) : Ze = t[80];
		var et = Ze, tt;
		t[81] !== k ? (tt = function() {
			return { email: k };
		}, t[81] = k, t[82] = tt) : tt = t[82];
		var nt = be.email, rt;
		t[83] === Symbol.for("react.memo_cache_sentinel") ? (rt = s._(
			/*BTDS*/
			""
		), t[83] = rt) : rt = t[83];
		var ot;
		t[84] === Symbol.for("react.memo_cache_sentinel") ? (ot = function() {
			U(s._(
				/*BTDS*/
				""
			));
		}, t[84] = ot) : ot = t[84];
		var at;
		t[85] !== ae || t[86] !== be.email || t[87] !== k || t[88] !== q || t[89] !== Z || t[90] !== n || t[91] !== i || t[92] !== l || t[93] !== tt ? (at = c.jsx(r("WAWebEditFormBusinessProfileFormField.react"), {
			activeField: ae,
			error: q,
			fieldKey: "email",
			fieldMetric: o("WAWebWamEnumBusinessProfileField").BUSINESS_PROFILE_FIELD.EMAIL,
			formatForSave: tt,
			lowProfile: !1,
			originalValue: nt,
			placeholder: rt,
			rawBusinessProfile: n,
			sessionId: l,
			maxLength: o("WAWebBusinessProfileTypes").BUSINESS_PROFILE_FIELDS_LENGTH.EMAIL,
			validate: T,
			value: k,
			onActive: ie,
			onChange: D,
			onError: ot,
			onSaveBusinessProfile: i,
			disabled: Z
		}), t[85] = ae, t[86] = be.email, t[87] = k, t[88] = q, t[89] = Z, t[90] = n, t[91] = i, t[92] = l, t[93] = tt, t[94] = at) : at = t[94];
		var it;
		t[95] !== Z || t[96] !== at ? (it = c.jsx(v, { config: {
			Icon: r("WDSIconIcMail.react"),
			content: at,
			disabled: Z,
			testid: "biz-profile-email-input"
		} }), t[95] = Z, t[96] = at, t[97] = it) : it = t[97];
		var lt = it, st = be.primaryWebsite, ut;
		t[98] === Symbol.for("react.memo_cache_sentinel") ? (ut = s._(
			/*BTDS*/
			""
		), t[98] = ut) : ut = t[98];
		var ct;
		t[99] === Symbol.for("react.memo_cache_sentinel") ? (ct = function() {
			G(s._(
				/*BTDS*/
				""
			));
		}, t[99] = ct) : ct = t[99];
		var dt;
		t[100] !== ae || t[101] !== be.primaryWebsite || t[102] !== ge || t[103] !== Z || t[104] !== P || t[105] !== H || t[106] !== n || t[107] !== i || t[108] !== l ? (dt = c.jsx("div", { children: c.jsx(r("WAWebEditFormBusinessProfileFormField.react"), {
			activeField: ae,
			error: H,
			fieldKey: "primaryWebsite",
			fieldMetric: o("WAWebWamEnumBusinessProfileField").BUSINESS_PROFILE_FIELD.WEBSITE,
			formatForSave: ge,
			lowProfile: !1,
			originalValue: st,
			placeholder: ut,
			rawBusinessProfile: n,
			sessionId: l,
			maxLength: o("WAWebBusinessProfileTypes").BUSINESS_PROFILE_FIELDS_LENGTH.WEBSITE,
			validate: o("WAWebValidationUtils").validateURL,
			value: P,
			onActive: ie,
			onChange: N,
			onError: ct,
			onSaveBusinessProfile: i,
			disabled: Z
		}) }), t[100] = ae, t[101] = be.primaryWebsite, t[102] = ge, t[103] = Z, t[104] = P, t[105] = H, t[106] = n, t[107] = i, t[108] = l, t[109] = dt) : dt = t[109];
		var mt;
		t[110] !== Z || t[111] !== dt ? (mt = c.jsx(v, { config: {
			Icon: r("WDSIconIcPublic.react"),
			content: dt,
			disabled: Z,
			testid: "biz-profile-website-input",
			theme: o("WAWebBusinessProfileIconSection.react").IconSectionTheme.SmallMargin
		} }), t[110] = Z, t[111] = dt, t[112] = mt) : mt = t[112];
		var pt = mt, _t;
		if (be.primaryWebsite !== void 0) {
			if (Ee) {
				var ft = be.secondaryWebsite, gt;
				t[113] === Symbol.for("react.memo_cache_sentinel") ? (gt = s._(
					/*BTDS*/
					""
				), t[113] = gt) : gt = t[113];
				var ht;
				t[114] === Symbol.for("react.memo_cache_sentinel") ? (ht = function() {
					K(s._(
						/*BTDS*/
						""
					));
				}, t[114] = ht) : ht = t[114];
				var yt;
				t[115] !== ae || t[116] !== X || t[117] !== be.secondaryWebsite || t[118] !== ge || t[119] !== Z || t[120] !== n || t[121] !== i || t[122] !== w || t[123] !== j || t[124] !== l ? (yt = c.jsx("div", { children: c.jsx(r("WAWebEditFormBusinessProfileFormField.react"), {
					activeField: ae,
					error: j,
					fieldKey: "secondaryWebsite",
					fieldMetric: o("WAWebWamEnumBusinessProfileField").BUSINESS_PROFILE_FIELD.WEBSITE,
					formatForSave: ge,
					lowProfile: !1,
					originalValue: ft,
					placeholder: gt,
					rawBusinessProfile: n,
					sessionId: l,
					startActive: X,
					maxLength: o("WAWebBusinessProfileTypes").BUSINESS_PROFILE_FIELDS_LENGTH.WEBSITE,
					validate: o("WAWebValidationUtils").validateURL,
					value: w,
					onActive: ie,
					onChange: A,
					onError: ht,
					onSaveBusinessProfile: i,
					disabled: Z
				}) }), t[115] = ae, t[116] = X, t[117] = be.secondaryWebsite, t[118] = ge, t[119] = Z, t[120] = n, t[121] = i, t[122] = w, t[123] = j, t[124] = l, t[125] = yt) : yt = t[125];
				var Ct;
				t[126] !== Z || t[127] !== yt ? (Ct = c.jsx(v, { config: {
					Icon: r("WDSIconIcPublic.react"),
					content: yt,
					disabled: Z,
					testid: "biz-profile-secondary-website-input",
					theme: o("WAWebBusinessProfileIconSection.react").IconSectionTheme.NoMargin
				} }), t[126] = Z, t[127] = yt, t[128] = Ct) : Ct = t[128], _t = Ct;
			} else if (!o("WAWebMiscGatingUtils").isBlueLockingEnabled() || !Z) {
				var bt;
				t[129] === Symbol.for("react.memo_cache_sentinel") ? (bt = c.jsx(v, { config: {
					Icon: r("WDSIconIcPublic.react"),
					content: c.jsx("div", { children: c.jsx("button", {
						className: "xo1mcw5 x1f6kntn xtvhhri",
						onClick: function() {
							B(!1), Y(!0);
						},
						children: s._(
							/*BTDS*/
							""
						)
					}) }),
					testid: "biz-profile-secondary-website-input",
					theme: o("WAWebBusinessProfileIconSection.react").IconSectionTheme.NoMargin
				} }), t[129] = bt) : bt = t[129], _t = bt;
			}
		}
		var vt;
		t[130] !== Ke || t[131] !== Ve || t[132] !== Ae || t[133] !== lt || t[134] !== et || t[135] !== _t || t[136] !== pt || t[137] !== ve || t[138] !== Z || t[139] !== Ie || t[140] !== De ? (vt = x({
			businessAddress: Ke,
			businessCategory: Ve,
			businessDescription: Ae,
			businessEmail: lt,
			businessHours: et,
			businessSecondaryWebsite: _t,
			businessWebsite: pt,
			customUrl: ve,
			isProfileLocked: Z,
			nameSection: Ie,
			phoneNumber: De
		}), t[130] = Ke, t[131] = Ve, t[132] = Ae, t[133] = lt, t[134] = et, t[135] = _t, t[136] = pt, t[137] = ve, t[138] = Z, t[139] = Ie, t[140] = De, t[141] = vt) : vt = t[141];
		var St = vt, Rt;
		return t[142] !== St ? (Rt = c.jsx(r("WAWebDrawerSection.react"), {
			theme: "refresh",
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingTop0,
			animation: !1,
			children: St
		}), t[142] = St, t[143] = Rt) : Rt = t[143], Rt;
	}
	function I(e) {
		return o("WAWebBusinessCategoriesResultCollection").BusinessCategoriesResultCollection.find(e);
	}
	function T(e) {
		return o("WAWebValidationUtils").validateEmail(e);
	}
	function D() {
		o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			okText: r("WAWebFbtCommon")("OK"),
			onOK: o("WAWebModalManager").closeModalManager,
			children: s._(
				/*BTDS*/
				""
			)
		}));
	}
	function x(e) {
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
	x.displayName = x.name + " [from " + i.id + "]", l.default = k;
}), 226);
