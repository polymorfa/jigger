__d("WAWebBizMerchantDetailsFormFlow.react", [
	"fbt",
	"Promise",
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
	"asyncToGeneratorRuntime",
	"err",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useMemo, f = d.useRef, g = d.useState, h = {
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
	function y(e) {
		return p(function() {
			return function() {
				return void (e.onUnmount == null ? void 0 : e.onUnmount());
			};
		}, void 0), c.jsx(k, {
			contactId: e.contactId,
			enableCatalogCreationContext: e.enableCatalogCreationContext,
			onBack: function() {
				e.onBack();
			},
			onAddProduct: e.onAddProduct
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	var C = function(t) {
		return t ? h.formTitleWithSubtitle : h.formTitle;
	}, b = function() {
		return s._(
			/*BTDS*/
			""
		);
	}, v = function() {
		return s._(
			/*BTDS*/
			""
		);
	}, S = function(t) {
		return t ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}, R = function() {
		return s._(
			/*BTDS*/
			""
		);
	}, L = function(t) {
		return t != null && t !== "" ? o("WAWebPhoneUtils").isPotentiallyPhoneNumber(t) : !0;
	}, E = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
	function k(t) {
		var a = t.contactId, i = t.enableCatalogCreationContext, l = t.onAddProduct, u = t.onBack, d = t.ref, y = g({}), k = y[0], T = y[1], x = g({}), $ = x[0], P = x[1], N = g({}), M = N[0], w = N[1], A = g(!0), F = A[0], O = A[1], B = g(!1), W = B[0], q = B[1], U = g(), V = U[0], H = U[1], G = g(!1), z = G[0], j = G[1];
		p(function() {
			var t = !0;
			return n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var r = yield (e || (e = n("Promise"))).all([o("WAWebComplianceInfo.react").getLegalEntityDetails(a), o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(a)]), i = r[0], l = r[1];
				t && (T(i), H(l.serialize()), O(!1));
			})(), function() {
				t = !1;
			};
		}, [a]), p(function() {
			j(!Object.keys(M).length && !Object.keys($).length && o("WAWebBizComplianceUtil").isBusinessCompliant(V == null ? void 0 : V.address, k, a));
		}, [
			k,
			$,
			V == null ? void 0 : V.address,
			a,
			M
		]);
		var K = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				yield o("WAWebBusinessProfileEdit").editBusinessCompliance(e);
				var t = yield o("WAWebBusinessProfileCollection").BusinessProfileCollection.update(E, { getMerchantCompliance: !0 }), n = Array.isArray(t) ? t[0] : t;
				return n.serialize().legalEntityDetails;
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), Q = m(function(e) {
			w(function(t) {
				var n;
				return babelHelpers.extends({}, t, (n = {}, n[e] = !0, n));
			});
		}, []), X = m(function(e) {
			w(function(t) {
				var n = babelHelpers.extends({}, t);
				return Object.hasOwn(n, e) && delete n[e], n;
			});
		}, []), Y = m((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				var n, r = (n = {}, n[e] = t, n.isRegistered = k == null ? void 0 : k.isRegistered, n);
				X(e), T(babelHelpers.extends({}, k, r));
				var o = yield K(r);
				T(o);
			});
			return function(t, n) {
				return e.apply(this, arguments);
			};
		})(), [k, X]), J = m(function(e, t) {
			P(function(n) {
				var r;
				return babelHelpers.extends({}, n, (r = {}, r[e + "." + t] = !0, r));
			});
		}, []), Z = m(function(e, t) {
			P(function(n) {
				var r = babelHelpers.extends({}, n);
				return delete r[e + "." + t], r;
			});
		}, []), ee = m((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
				var o, a, i, l = (a = {}, a[e] = (o = {}, o[t] = n, o), a.isRegistered = k == null ? void 0 : k.isRegistered, a);
				T(babelHelpers.extends({}, k, (i = {}, i[e] = babelHelpers.extends({}, k == null ? void 0 : k[e], l[e]), i)));
				try {
					J(e, t);
					var s = yield K(l);
					T(s), Z(e, t), X(e + "." + t);
				} catch (e) {
					throw r("err")(String(e));
				}
			});
			return function(t, n, r) {
				return e.apply(this, arguments);
			};
		})(), [
			k,
			J,
			Z,
			X
		]), te = m((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				H(e), X("businessAddress"), yield o("WAWebBusinessProfileCollection").BusinessProfileCollection.update(E);
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), [X]), ne = m((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				T(yield o("WAWebComplianceInfo.react").getLegalEntityDetails(a)), Z(e, t);
			});
			return function(t, n) {
				return e.apply(this, arguments);
			};
		})(), [a, Z]), re = m((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = e.entityType, n = e.entityTypeCustom, r = e.isRegistered;
				if (t || n) {
					var o = {
						entityType: t,
						entityTypeCustom: n,
						isRegistered: r
					};
					q(!0);
					var a = yield K(o);
					q(!1), T(a);
				}
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), []), oe = k || {}, ae = oe.customerCareDetails, ie = oe.entityName, le = oe.grievanceOfficerDetails, se = _(function() {
			return o("WAWebBizComplianceUtil").getEntityTypeText(k);
		}, [k]), ue = m(function(e) {
			return o("WAWebBizComplianceUtil").existsField(e, a);
		}, [a]), ce = f(null), de = o("WAWebBizCatalogGatingUtils").canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney(E);
		return c.jsx("div", {
			ref: d,
			children: c.jsxs(r("WAWebDrawer.react"), {
				xstyle: h.containingBlock,
				tsNavigationData: {
					surface: "unknown",
					viewName: "biz-merchant-details-form"
				},
				children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: s._(
						/*BTDS*/
						""
					),
					onBack: u,
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
				}), c.jsx(r("WAWebDrawerBody.react"), {
					theme: F ? "center-content" : void 0,
					ref: ce,
					children: F ? c.jsx(o("WAWebComplianceInfo.react").ComplianceInfoLoading, {}) : c.jsxs(c.Fragment, { children: [
						c.jsx(o("WAWebComplianceInfo.react").ComplianceInfoHelpCenterBanner, { xstyle: h.complianceInfoHelpCenterBanner }),
						c.jsxs(r("WAWebDrawerSection.react"), {
							titleXStyle: h.formTitle,
							xstyle: h.formContainer,
							children: [
								c.jsx(I, {
									value: ie,
									maxLength: o("WAWebComplianceConstants").COMPLIANCE_INFO_LENGTH.ENTITY_NAME,
									placeholder: s._(
										/*BTDS*/
										""
									),
									Icon: r("WDSIconIcInfo.react"),
									validate: ue,
									errorFn: b,
									onSave: function(t) {
										return Y("entityName", t);
									},
									onError: function() {
										return Q("entityName");
									}
								}),
								c.jsx(I, {
									value: se,
									placeholder: s._(
										/*BTDS*/
										""
									),
									Icon: r("WDSIconIcAccountBalance.react"),
									testid: "merchant-details-entity-type",
									onEdit: function() {
										return o("WAWebCmd").Cmd.showMerchantDetailsEntityTypePopup(k, re);
									},
									isLoading: W
								}),
								de ? c.jsx(D, {
									rawBusinessProfile: V,
									validate: ue,
									onAfterSave: te,
									errorFn: v,
									onError: function() {
										return Q("businessAddress");
									}
								}) : null
							]
						}),
						c.jsxs(r("WAWebDrawerSection.react"), {
							title: s._(
								/*BTDS*/
								""
							),
							titleXStyle: C(de),
							xstyle: h.formContainer,
							children: [
								de ? c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
									xstyle: h.subtitle,
									children: s._(
										/*BTDS*/
										""
									)
								}) : null,
								c.jsx(I, {
									value: ae == null ? void 0 : ae.mobileNumber,
									maxLength: o("WAWebComplianceConstants").COMPLIANCE_INFO_LENGTH.MOBILE_NUMBER,
									placeholder: s._(
										/*BTDS*/
										""
									),
									Icon: o("WAWebPhoneIcon.react").PhoneIcon,
									validate: function(t) {
										return o("WAWebBizComplianceUtil").existsCustomerCareDetailsContact(ae, a, "mobileNumber", t) && L(t);
									},
									onSave: function(t) {
										return ee("customerCareDetails", "mobileNumber", t);
									},
									onCancel: function() {
										return ne("customerCareDetails", "mobileNumber");
									},
									onError: function(t) {
										return o("WAWebComplianceInfo.react").handleCustomerCareDetailsError({
											contactId: a,
											customerCareDetails: ae,
											field: "mobileNumber",
											value: t
										});
									},
									errorFn: function(t) {
										return o("WAWebBizComplianceUtil").getCustomerCareDetailsError(ae, "mobileNumber", t, s._(
											/*BTDS*/
											""
										), a);
									}
								}),
								c.jsx(I, {
									value: ae == null ? void 0 : ae.landlineNumber,
									maxLength: o("WAWebComplianceConstants").COMPLIANCE_INFO_LENGTH.LANDLINE_NUMBER,
									placeholder: s._(
										/*BTDS*/
										""
									),
									Icon: o("WAWebPhoneIcon.react").PhoneIcon,
									validate: function(t) {
										return o("WAWebBizComplianceUtil").existsCustomerCareDetailsContact(ae, a, "landlineNumber", t) && L(t);
									},
									onSave: function(t) {
										return ee("customerCareDetails", "landlineNumber", t);
									},
									onCancel: function() {
										return ne("customerCareDetails", "landlineNumber");
									},
									onError: function(t) {
										return o("WAWebComplianceInfo.react").handleCustomerCareDetailsError({
											contactId: a,
											customerCareDetails: ae,
											field: "landlineNumber",
											value: t
										});
									},
									errorFn: function(t) {
										return o("WAWebBizComplianceUtil").getCustomerCareDetailsError(ae, "landlineNumber", t, s._(
											/*BTDS*/
											""
										), a);
									}
								}),
								c.jsx(I, {
									value: ae == null ? void 0 : ae.email,
									maxLength: o("WAWebComplianceConstants").COMPLIANCE_INFO_LENGTH.EMAIL,
									placeholder: s._(
										/*BTDS*/
										""
									),
									Icon: r("WDSIconIcMail.react"),
									validate: function(t) {
										return ue(t) && o("WAWebValidationUtils").validateEmail(t);
									},
									onSave: function(t) {
										return ee("customerCareDetails", "email", t);
									},
									errorFn: S,
									onError: function() {
										return Q("customerCareDetails.email");
									}
								})
							]
						}),
						c.jsxs(r("WAWebDrawerSection.react"), {
							title: s._(
								/*BTDS*/
								""
							),
							titleXStyle: C(de),
							xstyle: h.formContainer,
							children: [
								de ? c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
									xstyle: h.subtitle,
									children: s._(
										/*BTDS*/
										""
									)
								}) : null,
								c.jsx(I, {
									value: le == null ? void 0 : le.name,
									maxLength: o("WAWebComplianceConstants").COMPLIANCE_INFO_LENGTH.GRIEVANCE_OFFICER_NAME,
									placeholder: s._(
										/*BTDS*/
										""
									),
									validate: ue,
									Icon: o("WAWebAssignmentIndIcon.react").AssignmentIndIcon,
									onSave: function(t) {
										return ee("grievanceOfficerDetails", "name", t);
									},
									errorFn: R,
									onError: function() {
										return Q("grievanceOfficerDetails.name");
									}
								}),
								c.jsx(I, {
									value: le == null ? void 0 : le.mobileNumber,
									maxLength: o("WAWebComplianceConstants").COMPLIANCE_INFO_LENGTH.MOBILE_NUMBER,
									placeholder: s._(
										/*BTDS*/
										""
									),
									Icon: o("WAWebPhoneIcon.react").PhoneIcon,
									validate: function(t) {
										return o("WAWebBizComplianceUtil").existsGrievanceOfficerDetailsContact(le, a, "mobileNumber", t) && L(t);
									},
									onSave: function(t) {
										return ee("grievanceOfficerDetails", "mobileNumber", t);
									},
									onCancel: function() {
										return ne("grievanceOfficerDetails", "mobileNumber");
									},
									onError: function(t) {
										return o("WAWebComplianceInfo.react").handleGrievanceOfficerDetailsError({
											contactId: a,
											field: "mobileNumber",
											grievanceOfficerDetails: le,
											value: t
										});
									},
									errorFn: function(t) {
										return o("WAWebBizComplianceUtil").getGrievanceOfficerDetailsError(le, "mobileNumber", t, s._(
											/*BTDS*/
											""
										), a);
									}
								}),
								c.jsx(I, {
									value: le == null ? void 0 : le.landlineNumber,
									maxLength: o("WAWebComplianceConstants").COMPLIANCE_INFO_LENGTH.LANDLINE_NUMBER,
									placeholder: s._(
										/*BTDS*/
										""
									),
									Icon: o("WAWebPhoneIcon.react").PhoneIcon,
									validate: function(t) {
										return o("WAWebBizComplianceUtil").existsGrievanceOfficerDetailsContact(le, a, "landlineNumber", t) && L(t);
									},
									onSave: function(t) {
										return ee("grievanceOfficerDetails", "landlineNumber", t);
									},
									onCancel: function() {
										return ne("grievanceOfficerDetails", "landlineNumber");
									},
									onError: function(t) {
										return o("WAWebComplianceInfo.react").handleGrievanceOfficerDetailsError({
											contactId: a,
											field: "landlineNumber",
											grievanceOfficerDetails: le,
											value: t
										});
									},
									errorFn: function(t) {
										return o("WAWebBizComplianceUtil").getGrievanceOfficerDetailsError(le, "landlineNumber", t, s._(
											/*BTDS*/
											""
										), a);
									}
								}),
								c.jsx(I, {
									value: le == null ? void 0 : le.email,
									maxLength: o("WAWebComplianceConstants").COMPLIANCE_INFO_LENGTH.EMAIL,
									placeholder: s._(
										/*BTDS*/
										""
									),
									Icon: r("WDSIconIcMail.react"),
									validate: function(t) {
										return o("WAWebBizComplianceUtil").existsGrievanceOfficerDetailsContact(le, a, "email", t) && o("WAWebValidationUtils").validateEmail(t);
									},
									onSave: function(t) {
										return ee("grievanceOfficerDetails", "email", t);
									},
									onError: function(t) {
										Q("grievanceOfficerDetails.email"), o("WAWebComplianceInfo.react").handleGrievanceOfficerDetailsError({
											contactId: a,
											field: "email",
											grievanceOfficerDetails: le,
											value: t
										});
									},
									errorFn: function(t) {
										return o("WAWebBizComplianceUtil").getGrievanceOfficerDetailsError(le, "email", t, s._(
											/*BTDS*/
											""
										), a);
									}
								})
							]
						}),
						i != null && l != null ? c.jsx(r("WAWebDrawerStickyCtaButton.react"), {
							disabled: !z,
							rootRef: ce.current,
							onClick: function() {
								return r("WAWebBizBusinessComplianceConfirmationModal")(l);
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
	k.displayName = k.name + " [from " + i.id + "]";
	function I(e) {
		var t = e.Icon, r = e.errorFn, a = e.isLoading, i = a === void 0 ? !1 : a, l = e.maxLength, s = e.onCancel, u = e.onEdit, d = e.onError, m = e.onFocus, _ = e.onSave, f = e.placeholder, y = e.testid, C = e.validate, b = e.value, v = b === void 0 ? "" : b, S = g(v), R = S[0], L = S[1], E = g(), k = E[0], I = E[1], T = g(i), D = T[0], x = T[1];
		return p(function() {
			L(v);
		}, [v]), p(function() {
			C != null && C(R) && I(null);
		}, [
			R,
			C,
			r
		]), p(function() {
			x(i);
		}, [i]), c.jsx(o("WAWebBusinessProfileIconSection.react").IconSection, {
			Icon: t,
			theme: o("WAWebBusinessProfileIconSection.react").IconSectionTheme.NoMargin,
			onEdit: u,
			editPencilXstyle: u ? h.paddingVert8 : null,
			content: u != null ? c.jsx(o("WAWebFlex.react").FlexRow, {
				paddingTop: 8,
				paddingBottom: 8,
				testid: y,
				xstyle: R === "" && h.placeholderText,
				children: R || f
			}) : c.jsx(o("WAWebRichTextField.react").RichTextField, {
				value: R,
				editable: !0,
				maxLength: l,
				pending: D,
				inputPlaceholder: f,
				showRemaining: !0,
				managedError: !0,
				validate: C,
				error: k,
				onChange: function(t) {
					var e = t.text;
					return L(e);
				},
				onSave: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					x(!0);
					try {
						yield _ == null ? void 0 : _(R);
					} catch (e) {
						r && I(r(R));
					}
					x(!1);
				}),
				onCancel: function() {
					L(v), I(null), s == null || s();
				},
				onError: function() {
					r && I(r(R)), d == null || d(R);
				},
				theme: "text-input",
				onFocus: m,
				blockFocusOnLock: !!m,
				lockable: !0
			})
		});
	}
	I.displayName = I.name + " [from " + i.id + "]";
	function T(e, t, n) {
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
	function D(e) {
		var t = e.errorFn, a = e.onAfterSave, i = e.onError, l = e.rawBusinessProfile, s = e.validate, u = g(), d = u[0], m = u[1], _ = g(l == null ? void 0 : l.address), f = _[0], h = _[1], y = g(), C = y[0], b = y[1], v = l || {}, S = v.latitude, R = v.longitude, L = g(T(f, R, S)), E = L[0], k = L[1];
		return p(function() {
			return k(T(f, R, S));
		}, [
			f,
			R,
			S
		]), p(function() {
			s(f) && b(null);
		}, [f, s]), l == null || E == null ? null : c.jsx(o("WAWebBusinessProfileIconSection.react").IconSection, {
			Icon: r("WDSIconIcLocationOn.react"),
			theme: o("WAWebBusinessProfileIconSection.react").IconSectionTheme.NoMargin,
			content: c.jsx(r("WAWebEditFormBusinessAddressField.react"), {
				businessProfile: E,
				activeField: d,
				rawBusinessProfile: l,
				value: f,
				validate: s,
				error: C,
				lowProfile: !1,
				onActive: m,
				onChange: h,
				onCancel: function() {
					h(l.address);
				},
				onSaveBusinessProfile: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					yield o("WAWebBusinessProfileEdit").editBusinessProfile({ address: f }), yield a(babelHelpers.extends({}, l, { address: f }));
				}),
				onError: function() {
					b(t(f)), i == null || i();
				}
			})
		});
	}
	D.displayName = D.name + " [from " + i.id + "]", l.default = y;
}), 226);
