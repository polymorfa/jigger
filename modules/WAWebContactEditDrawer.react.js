__d("WAWebContactEditDrawer.react", [
	"fbt",
	"WALogger",
	"WAPromiseCache",
	"WAWebChatEntryPoint",
	"WAWebClickable.react",
	"WAWebCmd",
	"WAWebContactCollection",
	"WAWebContactLogging",
	"WAWebContactManagerGating",
	"WAWebContactPhoneNumberFields.react",
	"WAWebContactPhoneNumberReadOnlyField.react",
	"WAWebContactSyncLogger",
	"WAWebCustomerDataAction",
	"WAWebCustomerDataCollection",
	"WAWebDeleteContactAction",
	"WAWebDeleteContactPopup.react",
	"WAWebDeleteIcon.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebDrawerUtils",
	"WAWebFBLogger",
	"WAWebFailedToSaveContactPopup.react",
	"WAWebFindChatAction",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebIcSyncIcon.react",
	"WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
	"WAWebModalManager",
	"WAWebPhoneIcon.react",
	"WAWebPhoneNumberValidationUtils",
	"WAWebQueryExistsJob",
	"WAWebRichTextField.react",
	"WAWebRound.react",
	"WAWebSaveContactAction",
	"WAWebSpinner.react",
	"WAWebStopSyncContactToAddressbookPopup.react",
	"WAWebSyncToggleDisabledPopup.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUseContactManagementAvailability",
	"WAWebUserPrefsContactManagement",
	"WAWebUserPrefsMeUser",
	"WAWebUsernameContactField.react",
	"WAWebUsernameKeyVerificationFlow",
	"WAWebUsernamePhoneNumberMismatchModal.react",
	"WAWebUsernameUtils",
	"WAWebUsernameWorkerCompatibleGatingUtils",
	"WAWebVelocityTransitionGroup",
	"WAWebWidFactory",
	"WAWebWidToJid",
	"WDSIconIcCheck.react",
	"WDSIconIcPerson.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"WDSSwitch.react",
	"WDSText.react",
	"asyncToGeneratorRuntime",
	"isStringNullOrEmpty",
	"react",
	"useWAWebContactValues",
	"useWAWebDebouncedCallback",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useImperativeHandle, f = m.useMemo, g = m.useRef, h = m.useState, y = {
		paddingInline25: {
			paddingInlineStart: "xvahy20",
			paddingInlineEnd: "x1a4sjiy",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		marginTop10: {
			marginTop: "x1anpbxc",
			$$css: !0
		},
		marginInlineStart30: {
			marginInlineStart: "xymharo",
			$$css: !0
		},
		marginTop13: {
			marginTop: "xk9mzb7",
			$$css: !0
		},
		marginTop15: {
			marginTop: "xcxhlts",
			$$css: !0
		},
		marginTop30: {
			marginTop: "x11fxgd9",
			$$css: !0
		}
	}, C = {
		iconSection: {
			width: "x100vrsf",
			display: "x78zum5",
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			justifyContent: "x1nhvcw1",
			alignItems: "x6s0dn4",
			color: "xhslqc4",
			$$css: !0
		},
		deleteIconRefreshed: {
			color: "x14ug900",
			$$css: !0
		},
		deleteIconContainer: {
			borderStartStartRadius: "xvs2etk",
			borderStartEndRadius: "xg3wpu6",
			borderEndEndRadius: "x1jwbhkm",
			borderEndStartRadius: "xgg4q86",
			height: "x1vqgdyp",
			width: "x100vrsf",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			flex: "x1okw0bk",
			cursor: "x1ypdohk",
			":hover_backgroundColor": "x17gydlx",
			$$css: !0
		},
		saveButton: {
			color: "x1pse0pq",
			backgroundColor: "xfn3atn",
			$$css: !0
		}
	}, b = "sync-contact-switch";
	function v(t) {
		var a, i, l, c, m, v, S, R = t.contactData, L = t.onBack, E = t.onCancel, k = t.onSave, I = t.origin, T = t.ref, D = t.viewType, x = (R == null ? void 0 : R.isExistingContact) === !0, $ = R == null || (a = R.phoneNumber) == null ? void 0 : a.user, P = x ? $ : null, N = (i = R == null ? void 0 : R.lid) != null ? i : R == null ? void 0 : R.phoneNumber, M = (l = o("useWAWebContactValues").useOptionalContactValues(N, [o("WAWebFrontendContactGetters").getIsUsernameContact])) != null ? l : [], w = M[0], A = (c = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null ? void 0 : c.user, F = f(function() {
			if (r("isStringNullOrEmpty")($)) return r("isStringNullOrEmpty")(A) ? "" : o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").getCountryCodeIso(A);
			var e = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").cleanPhoneNumberInputValue($), t = e.countryCodeIso;
			return t != null ? t : "";
		}, [$, A]), O = h((m = R == null ? void 0 : R.firstName) != null ? m : ""), B = O[0], W = O[1], q = h((v = R == null ? void 0 : R.lastName) != null ? v : ""), U = q[0], V = q[1], H = h(F), G = H[0], z = H[1], j = h(function() {
			if (r("isStringNullOrEmpty")($)) return null;
			var e = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").cleanPhoneNumberInputValue($), t = e.phoneNumberWithoutCountryCode;
			return t.length > 0 ? t : null;
		}), K = j[0], Q = j[1], X = h(!1), Y = X[0], J = X[1], Z = h((S = R == null ? void 0 : R.syncToAddressbook) != null ? S : o("WAWebUserPrefsContactManagement").getSyncToAddressbookDefaultSetting()), ee = Z[0], te = Z[1], ne = h(R == null ? void 0 : R.username), re = ne[0], oe = ne[1], ae = h(null), ie = ae[0], le = ae[1], se = h(R == null ? void 0 : R.lid), ue = se[0], ce = se[1], de = o("WAWebContactManagerGating").contactManagerEnabled(), me = o("WAWebUsernameWorkerCompatibleGatingUtils").usernameContactUIEnabled(), pe = o("WAWebUseContactManagementAvailability").useContactManagementAvailability(), _e = pe.canSyncToAddressbook, fe = pe.isNativeContactOn, ge = g(null);
		_(T, function() {
			return {
				getElement: function() {
					return ge.current;
				},
				handleDismiss: function() {
					return Re.logCancel();
				}
			};
		});
		var he = g(new (r("WAPromiseCache"))((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				return yield o("WAWebQueryExistsJob").queryPhoneExists(e, o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.CONTACT_SAVE);
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), {
			maxCached: 100,
			maxAge: 1 / 0,
			shouldCache: function(t) {
				return !!t;
			}
		})), ye = h(null), Ce = ye[0], be = ye[1], ve = g(0), Se = r("useWAWebUnmountSignal")(), Re = f(function() {
			return new (o("WAWebContactLogging")).AddContactEvent(I, R);
		}, [I, R]);
		p(function() {
			Re.logOpen();
		}, [Re]);
		var Le = function(t) {
			var e;
			t === void 0 && (t = !1), !Y && (t && Re.logCancel(), (e = L || E) == null || e());
		}, Ee = function() {
			o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) }));
		}, ke = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var t;
				if (!Y) {
					var n = o("WAWebPhoneNumberValidationUtils").getValidPhoneNumber(G, K);
					if (!r("isStringNullOrEmpty")(n)) {
						var a = yield he.current.getOrRun(n);
						if (a == null) {
							Ee();
							return;
						}
					}
					var i = ue;
					if (me && !r("isStringNullOrEmpty")(re)) {
						if (ie === "key-required" && i == null) {
							if (Re.logUsernameKeyRequired(), i = yield o("WAWebUsernameKeyVerificationFlow").usernameKeyVerificationFlow({
								username: re,
								onInvalidKeyError: function() {
									Re.logUsernameKeySubmit();
								}
							}), i == null) return;
							Re.logUsernameKeySubmit(!0);
						}
						if (!r("isStringNullOrEmpty")(n)) {
							var l = yield he.current.getOrRun(n), c = l != null && l.username !== re;
							if (c) {
								Re.logUsernameAndPnMismatch(), o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebUsernamePhoneNumberMismatchModal.react"), {}));
								return;
							}
						}
					}
					if (x && B.trim() === (R == null ? void 0 : R.firstName) && U.trim() === (R == null ? void 0 : R.lastName) && n === P && re === (R == null ? void 0 : R.username) && ee === ((t = R == null ? void 0 : R.syncToAddressbook) != null ? t : !1)) {
						Le();
						return;
					}
					var m = n != null ? n : i, p = m != null ? o("WAWebContactCollection").ContactCollection.get(m) : null, _ = p != null && o("WAWebFrontendContactGetters").getIsMyContact(p), f = r("isStringNullOrEmpty")(re) ? void 0 : re !== (R == null ? void 0 : R.username), g = _ ? void 0 : (R == null ? void 0 : R.username) != null, h = _ ? (R == null ? void 0 : R.phoneNumber) != null : void 0;
					try {
						J(!0);
						var y = {
							firstName: B.trim(),
							lastName: U.trim(),
							isExistingContact: _ || x
						};
						if (!r("isStringNullOrEmpty")(n)) yield o("WAWebSaveContactAction").saveContactAction(babelHelpers.extends({}, y, {
							phoneNumber: n,
							prevPhoneNumber: P,
							syncToAddressbook: ee,
							username: re != null ? re : void 0,
							lid: i != null ? i : void 0,
							isConvertingContactType: w
						}));
						else if (i != null && !r("isStringNullOrEmpty")(re)) {
							var C, b, v = x && !w, S = n != null ? n : P, L = x && w === !0, E = L && (C = R == null ? void 0 : R.lid) != null ? C : void 0, I = L && !r("isStringNullOrEmpty")(R == null ? void 0 : R.username) && (b = R == null ? void 0 : R.username) != null ? b : void 0;
							yield o("WAWebSaveContactAction").saveContactAction(babelHelpers.extends({}, y, {
								lid: i,
								username: re,
								pn: S != null ? S : void 0,
								prevLid: E,
								prevUsername: I,
								isConvertingContactType: v
							}));
						} else o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[contact edit] saving contact action but args are not valid"]))).sendLogs("saving-contact-but-args-not-valid", { sampling: .01 });
						Re.logSave({
							firstName: B,
							lastName: U,
							syncToAddressbook: ee,
							usernameEdited: f,
							usernameAutofilled: g,
							phoneNumberAutofilled: h
						}), !x && !_ && o("WAWebUserPrefsContactManagement").setSyncToAddressbookLastSetting(ee);
						var T = n != null ? o("WAWebWidFactory").createUserWidOrThrow(n) : i;
						T == null ? o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[create contact] saving with no PN or LID"]))).sendLogs("create-contact-saving-with-no-pn-or-lid") : k({
							contactId: T,
							firstName: B,
							lastName: U,
							username: re != null ? re : void 0,
							phoneNumber: n != null ? n : void 0
						});
						var D;
						if (x || _) D = s._(
							/*BTDS*/
							""
						);
						else {
							var $ = (B + " " + U).trim(), N = r("isStringNullOrEmpty")($) ? re : $;
							D = s._(
								/*BTDS*/
								"",
								[s._param("full-name", N)]
							);
						}
						o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
							id: o("WAWebToast.react").genId(),
							msg: D
						}));
					} catch (e) {
						Re.logSave({
							firstName: B,
							lastName: U,
							syncToAddressbook: ee,
							error: e,
							usernameEdited: f,
							usernameAutofilled: g,
							phoneNumberAutofilled: h
						}), o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebFailedToSaveContactPopup.react"), { onOK: o("WAWebModalManager").closeModalManager }));
					} finally {
						J(!1);
					}
				}
			});
			return function() {
				return t.apply(this, arguments);
			};
		})(), Ie = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				var n = ++ve.current, a = function() {
					return n === ve.current;
				}, i = function(t, n) {
					a() && be(t == null ? null : {
						status: t,
						phoneNumber: n
					});
				};
				if (r("isStringNullOrEmpty")(t)) {
					i(null, null);
					return;
				}
				var l = o("WAWebPhoneNumberValidationUtils").getValidPhoneNumber(e, t);
				if (l == null) {
					i(o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType.Invalid, null);
					return;
				}
				var s = o("WAWebWidFactory").createUserWidOrThrow(l + "@c.us"), u = o("WAWebContactCollection").ContactCollection.get(s);
				if (u && o("WAWebFrontendContactGetters").getIsMyContact(u) && !x) {
					i(o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType.Duplicate, null);
					return;
				}
				var c = (yield he.current.getOrRun(l)) != null;
				Se.aborted || i(c ? o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType.Registered : o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType.Unregistered, c ? l : null);
			});
			return function(n, r) {
				return e.apply(this, arguments);
			};
		})(), Te = r("useWAWebDebouncedCallback")(Ie, 250), De = g(!1);
		p(function() {
			De.current || !r("isStringNullOrEmpty")($) && !r("isStringNullOrEmpty")(K) && (De.current = !0, Te(G, K));
		}, [
			$,
			G,
			K,
			Te
		]);
		var xe = function(t, n) {
			z(t), Q(n), r("isStringNullOrEmpty")(n) ? (Te.cancel(), ve.current++, be(null)) : Te(t, n);
		}, $e = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = o("WAWebPhoneNumberValidationUtils").getValidPhoneNumber(G, K);
				if (e != null) {
					var t = o("WAWebWidFactory").createWid(e + "@c.us"), n = yield o("WAWebFindChatAction").findOrCreateLatestChat(t, "createContact"), r = n.chat;
					yield o("WAWebCmd").Cmd.openChatAt({
						chat: r,
						msgContext: null,
						chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ContactEdit
					}), o("WAWebCmd").Cmd.chatInfoDrawer(r, {
						showFullGroupDescription: !1,
						scrollToParticipantList: !1
					}), Re.logDuplicate();
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), Pe = function() {
			var e = !ee;
			(R == null ? void 0 : R.syncToAddressbook) === !0 && !e ? o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebStopSyncContactToAddressbookPopup.react"), {
				onOK: function() {
					o("WAWebModalManager").ModalManager.close(), te(e);
				},
				onCancel: o("WAWebModalManager").closeModalManager
			})) : te(e);
		}, Ne = function() {
			_e || o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebSyncToggleDisabledPopup.react"), { onOK: o("WAWebModalManager").closeModalManager }));
		}, Me = x ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), we = Ce != null && Ce.status === o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType.Registered && o("WAWebPhoneNumberValidationUtils").getValidPhoneNumber(G, K) === Ce.phoneNumber, Ae = (!!B.trim() || !!U.trim()) && we, Fe = me && o("WAWebUsernameUtils").usernameInputStateIsValid(ie), Oe = fe && (Ae || Fe), Be = s._(
			/*BTDS*/
			""
		), We = Oe ? d.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			children: d.jsx(r("WAWebVelocityTransitionGroup"), {
				transitionName: "btn",
				xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingVer32,
				appear: !0,
				children: d.jsx(o("WAWebRound.react").Round, {
					testid: "save-contact-btn",
					xstyle: C.saveButton,
					onClick: Y ? null : ke,
					label: Be,
					children: Y ? d.jsx(o("WAWebSpinner.react").Spinner, {
						color: "white",
						size: 30
					}) : d.jsx(r("WDSIconIcCheck.react"), {})
				})
			})
		}) : null, qe;
		if (x && fe) {
			var Ue = (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var e, t = ue != null ? ue : R == null ? void 0 : R.lid, a = de && t != null && o("WAWebCustomerDataCollection").CustomerDataCollection.maybeGetCustomerDataByChatJid(o("WAWebWidToJid").widToChatJid(t)) != null;
					o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebDeleteContactPopup.react"), {
						syncToAddressbook: (e = R == null ? void 0 : R.syncToAddressbook) != null ? e : !1,
						hasCustomerData: a,
						onCancel: o("WAWebModalManager").closeModalManager,
						onOK: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
							J(!0), o("WAWebModalManager").ModalManager.close();
							try {
								var e = ue != null ? ue : R == null ? void 0 : R.lid;
								if (!w && !r("isStringNullOrEmpty")(P)) {
									var t = yield he.current.getOrRun(P);
									if (t == null) {
										Ee();
										return;
									}
									var n = o("WAWebWidFactory").createUserWidOrThrow(P + "@c.us");
									yield o("WAWebDeleteContactAction").deleteContactAction({ phoneNumber: n });
								} else !r("isStringNullOrEmpty")(re) && e != null && (yield o("WAWebDeleteContactAction").deleteContactAction({
									username: re,
									lid: e
								}));
								if (de && e != null) {
									var a = o("WAWebWidToJid").widToChatJid(e);
									try {
										yield o("WAWebCustomerDataAction").customerDataDeleteAction(a);
									} catch (e) {
										o("WAWebFBLogger").WAWebFBLogger().warn("Failed to delete customer data for %s: %s", a, String(e));
									}
								}
								Re.logDelete(), Le(), o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
									id: o("WAWebToast.react").genId(),
									msg: s._(
										/*BTDS*/
										""
									)
								}));
							} catch (e) {
								Re.logDelete(e), o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
									id: o("WAWebToast.react").genId(),
									msg: s._(
										/*BTDS*/
										""
									)
								}));
							} finally {
								J(!1);
							}
						})
					}));
				});
				return function() {
					return e.apply(this, arguments);
				};
			})();
			qe = d.jsx(o("WAWebClickable.react").Clickable, {
				dataTestId: "btn-delete-contact",
				onClick: Y ? null : Ue,
				ariaLabel: s._(
					/*BTDS*/
					""
				),
				xstyle: C.deleteIconContainer,
				children: d.jsx(o("WAWebDeleteIcon.react").DeleteIcon, {
					xstyle: C.deleteIconRefreshed,
					height: 24
				})
			});
		}
		var Ve = I === o("WAWebContactLogging").ContactSourceType.NewChat, He;
		x && !r("isStringNullOrEmpty")(K) && !o("WAWebUsernameWorkerCompatibleGatingUtils").usernameContactUIEnabled ? He = d.jsx(r("WAWebContactPhoneNumberReadOnlyField.react"), {
			countryCode: G,
			numberWithoutPrefix: K
		}) : He = d.jsx(o("WAWebContactPhoneNumberFields.react").ContactPhoneNumberFields, {
			status: Ce == null ? void 0 : Ce.status,
			countryCode: G,
			numberWithoutPrefix: K,
			onChange: xe,
			onViewDuplicateContact: $e,
			origin: I,
			fullPhoneNumber: o("WAWebPhoneNumberValidationUtils").getValidPhoneNumber(G, K)
		});
		var Ge = s._(
			/*BTDS*/
			""
		), ze = s._(
			/*BTDS*/
			""
		), je = s._(
			/*BTDS*/
			""
		), Ke = o("WAWebDrawerUtils").getDrawerHeaderType(D), Qe = d.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: [y.paddingInline25, o("WDSMargins.stylex").wdsMargins.marginTop24],
			align: "center",
			children: [
				d.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: C.iconSection,
					children: d.jsx(o("WAWebIcSyncIcon.react").IcSyncIcon, {})
				}),
				d.jsx(o("WAWebFlex.react").FlexItem, {
					grow: 1,
					shrink: 1,
					children: d.jsxs("label", babelHelpers.extends({ htmlFor: b }, {
						0: {},
						1: { className: "x1ypdohk" }
					}[!!_e << 0], { children: [je, d.jsx(r("WDSText.react"), {
						type: "Body3",
						colorName: "contentDeemphasized",
						xstyle: y.marginTop10,
						children: s._(
							/*BTDS*/
							""
						)
					})] }))
				}),
				d.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: y.marginInlineStart30,
					children: d.jsx(r("WDSSwitch.react"), {
						id: b,
						disabled: !_e || !we,
						value: ee,
						onChange: Pe,
						onClick: Ne,
						"aria-label": je
					})
				})
			]
		});
		return d.jsxs(r("WAWebDrawer.react"), {
			ref: ge,
			theme: Ve ? void 0 : "striped",
			testid: "save-contact-drawer",
			viewType: D,
			tsNavigationData: { surface: "contact-creation" },
			children: [
				d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: Me,
					type: Ke,
					onBack: L ? function() {
						return Le(!0);
					} : void 0,
					onCancel: E ? function() {
						return Le(!0);
					} : void 0,
					children: qe
				}),
				d.jsx(r("WAWebDrawerBody.react"), { children: d.jsxs(r("WAWebDrawerSection.react"), {
					theme: "full-height",
					xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingTop24,
					children: [
						d.jsxs(o("WAWebFlex.react").FlexRow, {
							xstyle: y.paddingInline25,
							children: [d.jsx(o("WAWebFlex.react").FlexItem, {
								xstyle: C.iconSection,
								children: d.jsx(r("WDSIconIcPerson.react"), {
									width: 27,
									xstyle: o("WDSMargins.stylex").wdsMargins.marginTop32
								})
							}), d.jsx(o("WAWebFlex.react").FlexItem, {
								grow: 1,
								shrink: 1,
								children: d.jsx(o("WAWebRichTextField.react").RichTextField, {
									placeholder: Ge,
									ariaLabel: Ge,
									value: B,
									onChange: function(t) {
										var e = t.text;
										return W(e);
									},
									focusOnMount: !0
								})
							})]
						}),
						d.jsxs(o("WAWebFlex.react").FlexRow, {
							xstyle: [y.paddingInline25, y.marginTop13],
							children: [d.jsx(o("WAWebFlex.react").FlexItem, { xstyle: C.iconSection }), d.jsx(o("WAWebFlex.react").FlexItem, {
								grow: 1,
								shrink: 1,
								children: d.jsx(o("WAWebRichTextField.react").RichTextField, {
									placeholder: ze,
									ariaLabel: ze,
									value: U,
									onChange: function(t) {
										var e = t.text;
										return V(e);
									}
								})
							})]
						}),
						me ? d.jsx(r("WAWebUsernameContactField.react"), {
							usernameInput: re,
							usernameState: ie,
							setUsernameInput: oe,
							setUsernameState: le,
							setContactLid: ce,
							contactLid: ue,
							origin: I,
							onInvalidUsername: function() {
								return Re.logInvalidUsername();
							}
						}) : null,
						d.jsxs(o("WAWebFlex.react").FlexRow, {
							xstyle: [y.paddingInline25, y.marginTop15],
							children: [d.jsx(o("WAWebFlex.react").FlexItem, {
								xstyle: C.iconSection,
								children: d.jsx(o("WAWebPhoneIcon.react").PhoneIcon, {
									width: 22,
									xstyle: [x ? o("WDSMargins.stylex").wdsMargins.marginTop32 : y.marginTop30, o("WDSMargins.stylex").wdsMargins.marginStart2]
								})
							}), d.jsx(o("WAWebFlex.react").FlexItem, {
								grow: 1,
								shrink: 1,
								children: He
							})]
						}),
						Qe
					]
				}) }),
				We
			]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);
