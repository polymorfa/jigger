__d("WAWebBizMerchantDetailsFormFlow.react", [
	"fbt",
	"WAWebAssignmentIndIcon.react",
	"WAWebBizBusinessComplianceConfirmationModal",
	"WAWebBizCatalogGatingUtils",
	"WAWebBizComplianceUtil",
	"WAWebBusinessProfileCollection",
	"WAWebBusinessProfileEdit",
	"WAWebBusinessProfileIconSection.react",
	"WAWebCmd",
	"WAWebComplianceConstants",
	"WAWebComplianceInfo.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebDrawerStickyCtaButton.react",
	"WAWebEditFormBusinessAddressField.react",
	"WAWebFlex.react",
	"WAWebPhoneIcon.react",
	"WAWebPhoneUtils",
	"WAWebRichTextField.react",
	"WAWebText_DONOTUSE.react",
	"WAWebUserPrefsMeUser",
	"WAWebValidationUtils",
	"WDSIconIcAccountBalance.react",
	"WDSIconIcInfo.react",
	"WDSIconIcLocationOn.react",
	"WDSIconIcMail.react",
	"err",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useMemo, _ = c.useRef, f = c.useState, g = {
		complianceInfoHelpCenterBanner: {
			color: "xhslqc4",
			paddingTop: "x1cnzs8",
			paddingInlineEnd: "x5zjp28",
			paddingBottom: "xx6bls6",
			paddingInlineStart: "x162tt16",
			$$css: !0
		},
		containingBlock: {
			transform: "x17dzmu4",
			$$css: !0
		},
		formContainer: {
			marginBottom: "xyorhqc",
			paddingTop: "x1p5oq8j",
			paddingInlineEnd: "x5zjp28",
			paddingBottom: "xsag5q8",
			paddingInlineStart: "x162tt16",
			$$css: !0
		},
		formTitle: {
			marginBottom: "x1ibc7va",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		formTitleWithSubtitle: {
			marginBottom: "x4tpdpg",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		paddingVert8: {
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			$$css: !0
		},
		placeholderText: {
			color: "xhslqc4",
			$$css: !0
		},
		subtitle: {
			color: "xhslqc4",
			marginBottom: "x1ibc7va",
			$$css: !0
		}
	};
	function h(e) {
		var t = o("react-compiler-runtime").c(9), n;
		t[0] !== e ? (n = function() {
			return function() {
				return void (e.onUnmount == null ? void 0 : e.onUnmount());
			};
		}, t[0] = e, t[1] = n) : n = t[1], m(n, void 0);
		var r;
		t[2] !== e ? (r = function() {
			e.onBack();
		}, t[2] = e, t[3] = r) : r = t[3];
		var a;
		return t[4] !== e.contactId || t[5] !== e.enableCatalogCreationContext || t[6] !== e.onAddProduct || t[7] !== r ? (a = u.jsx(E, {
			contactId: e.contactId,
			enableCatalogCreationContext: e.enableCatalogCreationContext,
			onBack: r,
			onAddProduct: e.onAddProduct
		}), t[4] = e.contactId, t[5] = e.enableCatalogCreationContext, t[6] = e.onAddProduct, t[7] = r, t[8] = a) : a = t[8], a;
	}
	var y = function(t) {
		return t ? g.formTitleWithSubtitle : g.formTitle;
	}, C = function() {
		return s._(
			/*BTDS*/
			""
		);
	}, b = function() {
		return s._(
			/*BTDS*/
			""
		);
	}, v = function(t) {
		return t ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}, S = function() {
		return s._(
			/*BTDS*/
			""
		);
	}, R = function(t) {
		return t != null && t !== "" ? o("WAWebPhoneUtils").isPotentiallyPhoneNumber(t) : !0;
	}, L = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
	function E(e) {
		var t = e.contactId, n = e.enableCatalogCreationContext, a = e.onAddProduct, i = e.onBack, l = e.ref, c = f({}), h = c[0], E = c[1], I = f({}), D = I[0], x = I[1], $ = f({}), P = $[0], N = $[1], M = f(!0), w = M[0], A = M[1], F = f(!1), O = F[0], B = F[1], W = f(), q = W[0], U = W[1], V = f(!1), H = V[0], G = V[1];
		m(function() {
			var e = !0;
			return (async function() {
				var n = await Promise.all([o("WAWebComplianceInfo.react").getLegalEntityDetails(t), o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(t)]), r = n[0], a = n[1];
				e && (E(r), U(a.serialize()), A(!1));
			})(), function() {
				e = !1;
			};
		}, [t]), m(function() {
			G(!Object.keys(P).length && !Object.keys(D).length && o("WAWebBizComplianceUtil").isBusinessCompliant(q == null ? void 0 : q.address, h, t));
		}, [
			h,
			D,
			q == null ? void 0 : q.address,
			t,
			P
		]);
		var z = async function(t) {
			await o("WAWebBusinessProfileEdit").editBusinessCompliance(t);
			var e = await o("WAWebBusinessProfileCollection").BusinessProfileCollection.update(L, { getMerchantCompliance: !0 }), n = Array.isArray(e) ? e[0] : e;
			return n.serialize().legalEntityDetails;
		}, j = d(function(e) {
			N(function(t) {
				var n;
				return babelHelpers.extends({}, t, (n = {}, n[e] = !0, n));
			});
		}, []), K = d(function(e) {
			N(function(t) {
				var n = babelHelpers.extends({}, t);
				return Object.hasOwn(n, e) && delete n[e], n;
			});
		}, []), Q = d(async function(e, t) {
			var n, r = (n = {}, n[e] = t, n.isRegistered = h == null ? void 0 : h.isRegistered, n);
			K(e), E(babelHelpers.extends({}, h, r));
			var o = await z(r);
			E(o);
		}, [h, K]), X = d(function(e, t) {
			x(function(n) {
				var r;
				return babelHelpers.extends({}, n, (r = {}, r[e + "." + t] = !0, r));
			});
		}, []), Y = d(function(e, t) {
			x(function(n) {
				var r = babelHelpers.extends({}, n);
				return delete r[e + "." + t], r;
			});
		}, []), J = d(async function(e, t, n) {
			var o, a, i, l = (a = {}, a[e] = (o = {}, o[t] = n, o), a.isRegistered = h == null ? void 0 : h.isRegistered, a);
			E(babelHelpers.extends({}, h, (i = {}, i[e] = babelHelpers.extends({}, h == null ? void 0 : h[e], l[e]), i)));
			try {
				X(e, t);
				var s = await z(l);
				E(s), Y(e, t), K(e + "." + t);
			} catch (e) {
				throw r("err")(String(e));
			}
		}, [
			h,
			X,
			Y,
			K
		]), Z = d(async function(e) {
			U(e), K("businessAddress"), await o("WAWebBusinessProfileCollection").BusinessProfileCollection.update(L);
		}, [K]), ee = d(async function(e, n) {
			E(await o("WAWebComplianceInfo.react").getLegalEntityDetails(t)), Y(e, n);
		}, [t, Y]), te = d(async function(e) {
			var t = e.entityType, n = e.entityTypeCustom, r = e.isRegistered;
			if (t || n) {
				var o = {
					entityType: t,
					entityTypeCustom: n,
					isRegistered: r
				};
				B(!0);
				var a = await z(o);
				B(!1), E(a);
			}
		}, []), ne = h || {}, re = ne.customerCareDetails, oe = ne.entityName, ae = ne.grievanceOfficerDetails, ie = p(function() {
			return o("WAWebBizComplianceUtil").getEntityTypeText(h);
		}, [h]), le = d(function(e) {
			return o("WAWebBizComplianceUtil").existsField(e, t);
		}, [t]), se = _(null), ue = o("WAWebBizCatalogGatingUtils").canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney(L);
		return u.jsx("div", {
			ref: l,
			children: u.jsxs(r("WAWebDrawer.react"), {
				xstyle: g.containingBlock,
				tsNavigationData: {
					surface: "unknown",
					viewName: "biz-merchant-details-form"
				},
				children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: s._(
						/*BTDS*/
						""
					),
					onBack: i,
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
				}), u.jsx(r("WAWebDrawerBody.react"), {
					theme: w ? "center-content" : void 0,
					ref: se,
					children: w ? u.jsx(o("WAWebComplianceInfo.react").ComplianceInfoLoading, {}) : u.jsxs(u.Fragment, { children: [
						u.jsx(o("WAWebComplianceInfo.react").ComplianceInfoHelpCenterBanner, { xstyle: g.complianceInfoHelpCenterBanner }),
						u.jsxs(r("WAWebDrawerSection.react"), {
							titleXStyle: g.formTitle,
							xstyle: g.formContainer,
							children: [
								u.jsx(k, {
									value: oe,
									maxLength: o("WAWebComplianceConstants").COMPLIANCE_INFO_LENGTH.ENTITY_NAME,
									placeholder: s._(
										/*BTDS*/
										""
									),
									Icon: r("WDSIconIcInfo.react"),
									validate: le,
									errorFn: C,
									onSave: function(t) {
										return Q("entityName", t);
									},
									onError: function() {
										return j("entityName");
									}
								}),
								u.jsx(k, {
									value: ie,
									placeholder: s._(
										/*BTDS*/
										""
									),
									Icon: r("WDSIconIcAccountBalance.react"),
									testid: "merchant-details-entity-type",
									onEdit: function() {
										return o("WAWebCmd").Cmd.showMerchantDetailsEntityTypePopup(h, te);
									},
									isLoading: O
								}),
								ue ? u.jsx(T, {
									rawBusinessProfile: q,
									validate: le,
									onAfterSave: Z,
									errorFn: b,
									onError: function() {
										return j("businessAddress");
									}
								}) : null
							]
						}),
						u.jsxs(r("WAWebDrawerSection.react"), {
							title: s._(
								/*BTDS*/
								""
							),
							titleXStyle: y(ue),
							xstyle: g.formContainer,
							children: [
								ue ? u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
									xstyle: g.subtitle,
									children: s._(
										/*BTDS*/
										""
									)
								}) : null,
								u.jsx(k, {
									value: re == null ? void 0 : re.mobileNumber,
									maxLength: o("WAWebComplianceConstants").COMPLIANCE_INFO_LENGTH.MOBILE_NUMBER,
									placeholder: s._(
										/*BTDS*/
										""
									),
									Icon: o("WAWebPhoneIcon.react").PhoneIcon,
									validate: function(n) {
										return o("WAWebBizComplianceUtil").existsCustomerCareDetailsContact(re, t, "mobileNumber", n) && R(n);
									},
									onSave: function(t) {
										return J("customerCareDetails", "mobileNumber", t);
									},
									onCancel: function() {
										return ee("customerCareDetails", "mobileNumber");
									},
									onError: function(n) {
										return o("WAWebComplianceInfo.react").handleCustomerCareDetailsError({
											contactId: t,
											customerCareDetails: re,
											field: "mobileNumber",
											value: n
										});
									},
									errorFn: function(n) {
										return o("WAWebBizComplianceUtil").getCustomerCareDetailsError(re, "mobileNumber", n, s._(
											/*BTDS*/
											""
										), t);
									}
								}),
								u.jsx(k, {
									value: re == null ? void 0 : re.landlineNumber,
									maxLength: o("WAWebComplianceConstants").COMPLIANCE_INFO_LENGTH.LANDLINE_NUMBER,
									placeholder: s._(
										/*BTDS*/
										""
									),
									Icon: o("WAWebPhoneIcon.react").PhoneIcon,
									validate: function(n) {
										return o("WAWebBizComplianceUtil").existsCustomerCareDetailsContact(re, t, "landlineNumber", n) && R(n);
									},
									onSave: function(t) {
										return J("customerCareDetails", "landlineNumber", t);
									},
									onCancel: function() {
										return ee("customerCareDetails", "landlineNumber");
									},
									onError: function(n) {
										return o("WAWebComplianceInfo.react").handleCustomerCareDetailsError({
											contactId: t,
											customerCareDetails: re,
											field: "landlineNumber",
											value: n
										});
									},
									errorFn: function(n) {
										return o("WAWebBizComplianceUtil").getCustomerCareDetailsError(re, "landlineNumber", n, s._(
											/*BTDS*/
											""
										), t);
									}
								}),
								u.jsx(k, {
									value: re == null ? void 0 : re.email,
									maxLength: o("WAWebComplianceConstants").COMPLIANCE_INFO_LENGTH.EMAIL,
									placeholder: s._(
										/*BTDS*/
										""
									),
									Icon: r("WDSIconIcMail.react"),
									validate: function(t) {
										return le(t) && o("WAWebValidationUtils").validateEmail(t);
									},
									onSave: function(t) {
										return J("customerCareDetails", "email", t);
									},
									errorFn: v,
									onError: function() {
										return j("customerCareDetails.email");
									}
								})
							]
						}),
						u.jsxs(r("WAWebDrawerSection.react"), {
							title: s._(
								/*BTDS*/
								""
							),
							titleXStyle: y(ue),
							xstyle: g.formContainer,
							children: [
								ue ? u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
									xstyle: g.subtitle,
									children: s._(
										/*BTDS*/
										""
									)
								}) : null,
								u.jsx(k, {
									value: ae == null ? void 0 : ae.name,
									maxLength: o("WAWebComplianceConstants").COMPLIANCE_INFO_LENGTH.GRIEVANCE_OFFICER_NAME,
									placeholder: s._(
										/*BTDS*/
										""
									),
									validate: le,
									Icon: o("WAWebAssignmentIndIcon.react").AssignmentIndIcon,
									onSave: function(t) {
										return J("grievanceOfficerDetails", "name", t);
									},
									errorFn: S,
									onError: function() {
										return j("grievanceOfficerDetails.name");
									}
								}),
								u.jsx(k, {
									value: ae == null ? void 0 : ae.mobileNumber,
									maxLength: o("WAWebComplianceConstants").COMPLIANCE_INFO_LENGTH.MOBILE_NUMBER,
									placeholder: s._(
										/*BTDS*/
										""
									),
									Icon: o("WAWebPhoneIcon.react").PhoneIcon,
									validate: function(n) {
										return o("WAWebBizComplianceUtil").existsGrievanceOfficerDetailsContact(ae, t, "mobileNumber", n) && R(n);
									},
									onSave: function(t) {
										return J("grievanceOfficerDetails", "mobileNumber", t);
									},
									onCancel: function() {
										return ee("grievanceOfficerDetails", "mobileNumber");
									},
									onError: function(n) {
										return o("WAWebComplianceInfo.react").handleGrievanceOfficerDetailsError({
											contactId: t,
											field: "mobileNumber",
											grievanceOfficerDetails: ae,
											value: n
										});
									},
									errorFn: function(n) {
										return o("WAWebBizComplianceUtil").getGrievanceOfficerDetailsError(ae, "mobileNumber", n, s._(
											/*BTDS*/
											""
										), t);
									}
								}),
								u.jsx(k, {
									value: ae == null ? void 0 : ae.landlineNumber,
									maxLength: o("WAWebComplianceConstants").COMPLIANCE_INFO_LENGTH.LANDLINE_NUMBER,
									placeholder: s._(
										/*BTDS*/
										""
									),
									Icon: o("WAWebPhoneIcon.react").PhoneIcon,
									validate: function(n) {
										return o("WAWebBizComplianceUtil").existsGrievanceOfficerDetailsContact(ae, t, "landlineNumber", n) && R(n);
									},
									onSave: function(t) {
										return J("grievanceOfficerDetails", "landlineNumber", t);
									},
									onCancel: function() {
										return ee("grievanceOfficerDetails", "landlineNumber");
									},
									onError: function(n) {
										return o("WAWebComplianceInfo.react").handleGrievanceOfficerDetailsError({
											contactId: t,
											field: "landlineNumber",
											grievanceOfficerDetails: ae,
											value: n
										});
									},
									errorFn: function(n) {
										return o("WAWebBizComplianceUtil").getGrievanceOfficerDetailsError(ae, "landlineNumber", n, s._(
											/*BTDS*/
											""
										), t);
									}
								}),
								u.jsx(k, {
									value: ae == null ? void 0 : ae.email,
									maxLength: o("WAWebComplianceConstants").COMPLIANCE_INFO_LENGTH.EMAIL,
									placeholder: s._(
										/*BTDS*/
										""
									),
									Icon: r("WDSIconIcMail.react"),
									validate: function(n) {
										return o("WAWebBizComplianceUtil").existsGrievanceOfficerDetailsContact(ae, t, "email", n) && o("WAWebValidationUtils").validateEmail(n);
									},
									onSave: function(t) {
										return J("grievanceOfficerDetails", "email", t);
									},
									onError: function(n) {
										j("grievanceOfficerDetails.email"), o("WAWebComplianceInfo.react").handleGrievanceOfficerDetailsError({
											contactId: t,
											field: "email",
											grievanceOfficerDetails: ae,
											value: n
										});
									},
									errorFn: function(n) {
										return o("WAWebBizComplianceUtil").getGrievanceOfficerDetailsError(ae, "email", n, s._(
											/*BTDS*/
											""
										), t);
									}
								})
							]
						}),
						n != null && a != null ? u.jsx(r("WAWebDrawerStickyCtaButton.react"), {
							disabled: !H,
							rootRef: se.current,
							onClick: function() {
								return r("WAWebBizBusinessComplianceConfirmationModal")(a);
							},
							children: s._(
								/*BTDS*/
								""
							)
						}) : null
					] })
				})]
			})
		});
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		var t = e.Icon, n = e.errorFn, r = e.isLoading, a = r === void 0 ? !1 : r, i = e.maxLength, l = e.onCancel, s = e.onEdit, c = e.onError, d = e.onFocus, p = e.onSave, _ = e.placeholder, h = e.testid, y = e.validate, C = e.value, b = C === void 0 ? "" : C, v = f(b), S = v[0], R = v[1], L = f(), E = L[0], k = L[1], I = f(a), T = I[0], D = I[1];
		return m(function() {
			R(b);
		}, [b]), m(function() {
			y != null && y(S) && k(null);
		}, [
			S,
			y,
			n
		]), m(function() {
			D(a);
		}, [a]), u.jsx(o("WAWebBusinessProfileIconSection.react").IconSection, {
			Icon: t,
			theme: o("WAWebBusinessProfileIconSection.react").IconSectionTheme.NoMargin,
			onEdit: s,
			editPencilXstyle: s ? g.paddingVert8 : null,
			content: s != null ? u.jsx(o("WAWebFlex.react").FlexRow, {
				paddingTop: 8,
				paddingBottom: 8,
				testid: h,
				xstyle: S === "" && g.placeholderText,
				children: S || _
			}) : u.jsx(o("WAWebRichTextField.react").RichTextField, {
				value: S,
				editable: !0,
				maxLength: i,
				pending: T,
				inputPlaceholder: _,
				showRemaining: !0,
				managedError: !0,
				validate: y,
				error: E,
				onChange: function(t) {
					var e = t.text;
					return R(e);
				},
				onSave: async function() {
					D(!0);
					try {
						await (p == null ? void 0 : p(S));
					} catch (e) {
						n && k(n(S));
					}
					D(!1);
				},
				onCancel: function() {
					R(b), k(null), l == null || l();
				},
				onError: function() {
					n && k(n(S)), c == null || c(S);
				},
				theme: "text-input",
				onFocus: d,
				blockFocusOnLock: !!d,
				lockable: !0
			})
		});
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I(e, t, n) {
		return {
			address: e,
			categories: [],
			hours: { days: [] },
			latitude: n,
			longitude: t,
			memberSinceText: null,
			profileOptions: null
		};
	}
	function T(e) {
		var t = o("react-compiler-runtime").c(35), n = e.errorFn, a = e.onAfterSave, i = e.onError, l = e.rawBusinessProfile, s = e.validate, c = f(), d = c[0], p = c[1], _ = f(l == null ? void 0 : l.address), g = _[0], h = _[1], y = f(), C = y[0], b = y[1], v;
		t[0] !== l ? (v = l || {}, t[0] = l, t[1] = v) : v = t[1];
		var S = v, R = S.latitude, L = S.longitude, E;
		t[2] !== g || t[3] !== R || t[4] !== L ? (E = I(g, L, R), t[2] = g, t[3] = R, t[4] = L, t[5] = E) : E = t[5];
		var k = f(E), T = k[0], D = k[1], x, $;
		t[6] !== g || t[7] !== R || t[8] !== L ? (x = function() {
			return D(I(g, L, R));
		}, $ = [
			g,
			L,
			R
		], t[6] = g, t[7] = R, t[8] = L, t[9] = x, t[10] = $) : (x = t[9], $ = t[10]), m(x, $);
		var P, N;
		if (t[11] !== g || t[12] !== s ? (P = function() {
			s(g) && b(null);
		}, N = [g, s], t[11] = g, t[12] = s, t[13] = P, t[14] = N) : (P = t[13], N = t[14]), m(P, N), l == null || T == null) return null;
		var M;
		t[15] !== l.address ? (M = function() {
			h(l.address);
		}, t[15] = l.address, t[16] = M) : M = t[16];
		var w;
		t[17] !== g || t[18] !== a || t[19] !== l ? (w = async function() {
			await o("WAWebBusinessProfileEdit").editBusinessProfile({ address: g }), await a(babelHelpers.extends({}, l, { address: g }));
		}, t[17] = g, t[18] = a, t[19] = l, t[20] = w) : w = t[20];
		var A;
		t[21] !== g || t[22] !== n || t[23] !== i ? (A = function() {
			b(n(g)), i == null || i();
		}, t[21] = g, t[22] = n, t[23] = i, t[24] = A) : A = t[24];
		var F;
		return t[25] !== g || t[26] !== T || t[27] !== d || t[28] !== C || t[29] !== l || t[30] !== M || t[31] !== w || t[32] !== A || t[33] !== s ? (F = u.jsx(o("WAWebBusinessProfileIconSection.react").IconSection, {
			Icon: r("WDSIconIcLocationOn.react"),
			theme: o("WAWebBusinessProfileIconSection.react").IconSectionTheme.NoMargin,
			content: u.jsx(r("WAWebEditFormBusinessAddressField.react"), {
				businessProfile: T,
				activeField: d,
				rawBusinessProfile: l,
				value: g,
				validate: s,
				error: C,
				lowProfile: !1,
				onActive: p,
				onChange: h,
				onCancel: M,
				onSaveBusinessProfile: w,
				onError: A
			})
		}), t[25] = g, t[26] = T, t[27] = d, t[28] = C, t[29] = l, t[30] = M, t[31] = w, t[32] = A, t[33] = s, t[34] = F) : F = t[34], F;
	}
	l.default = h;
}), 226);
