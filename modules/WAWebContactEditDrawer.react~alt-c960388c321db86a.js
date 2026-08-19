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
		var n, a, i, l, c, m, v, S = t.contactData, R = t.onBack, L = t.onCancel, E = t.onSave, k = t.origin, I = t.ref, T = t.viewType, D = (S == null ? void 0 : S.isExistingContact) === !0, x = S == null || (n = S.phoneNumber) == null ? void 0 : n.user, $ = D ? x : null, P = (a = S == null ? void 0 : S.lid) != null ? a : S == null ? void 0 : S.phoneNumber, N = (i = o("useWAWebContactValues").useOptionalContactValues(P, [o("WAWebFrontendContactGetters").getIsUsernameContact])) != null ? i : [], M = N[0], w = (l = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null ? void 0 : l.user, A = f(function() {
			if (r("isStringNullOrEmpty")(x)) return r("isStringNullOrEmpty")(w) ? "" : o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").getCountryCodeIso(w);
			var e = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").cleanPhoneNumberInputValue(x), t = e.countryCodeIso;
			return t != null ? t : "";
		}, [x, w]), F = h((c = S == null ? void 0 : S.firstName) != null ? c : ""), O = F[0], B = F[1], W = h((m = S == null ? void 0 : S.lastName) != null ? m : ""), q = W[0], U = W[1], V = h(A), H = V[0], G = V[1], z = h(function() {
			if (r("isStringNullOrEmpty")(x)) return null;
			var e = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").cleanPhoneNumberInputValue(x), t = e.phoneNumberWithoutCountryCode;
			return t.length > 0 ? t : null;
		}), j = z[0], K = z[1], Q = h(!1), X = Q[0], Y = Q[1], J = h((v = S == null ? void 0 : S.syncToAddressbook) != null ? v : o("WAWebUserPrefsContactManagement").getSyncToAddressbookDefaultSetting()), Z = J[0], ee = J[1], te = h(S == null ? void 0 : S.username), ne = te[0], re = te[1], oe = h(null), ae = oe[0], ie = oe[1], le = h(S == null ? void 0 : S.lid), se = le[0], ue = le[1], ce = o("WAWebContactManagerGating").contactManagerEnabled(), de = o("WAWebUsernameWorkerCompatibleGatingUtils").usernameContactUIEnabled(), me = o("WAWebUseContactManagementAvailability").useContactManagementAvailability(), pe = me.canSyncToAddressbook, _e = me.isNativeContactOn, fe = g(null);
		_(I, function() {
			return {
				getElement: function() {
					return fe.current;
				},
				handleDismiss: function() {
					return Se.logCancel();
				}
			};
		});
		var ge = g(new (r("WAPromiseCache"))(async function(e) {
			return await o("WAWebQueryExistsJob").queryPhoneExists(e, o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.CONTACT_SAVE);
		}, {
			maxCached: 100,
			maxAge: 1 / 0,
			shouldCache: function(t) {
				return !!t;
			}
		})), he = h(null), ye = he[0], Ce = he[1], be = g(0), ve = r("useWAWebUnmountSignal")(), Se = f(function() {
			return new (o("WAWebContactLogging")).AddContactEvent(k, S);
		}, [k, S]);
		p(function() {
			Se.logOpen();
		}, [Se]);
		var Re = function(t) {
			var e;
			t === void 0 && (t = !1), !X && (t && Se.logCancel(), (e = R || L) == null || e());
		}, Le = function() {
			o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) }));
		}, Ee = async function() {
			var t;
			if (!X) {
				var n = o("WAWebPhoneNumberValidationUtils").getValidPhoneNumber(H, j);
				if (!r("isStringNullOrEmpty")(n)) {
					var a = await ge.current.getOrRun(n);
					if (a == null) {
						Le();
						return;
					}
				}
				var i = se;
				if (de && !r("isStringNullOrEmpty")(ne)) {
					if (ae === "key-required" && i == null) {
						if (Se.logUsernameKeyRequired(), i = await o("WAWebUsernameKeyVerificationFlow").usernameKeyVerificationFlow({
							username: ne,
							onInvalidKeyError: function() {
								Se.logUsernameKeySubmit();
							}
						}), i == null) return;
						Se.logUsernameKeySubmit(!0);
					}
					if (!r("isStringNullOrEmpty")(n)) {
						var l = await ge.current.getOrRun(n), c = l != null && l.username !== ne;
						if (c) {
							Se.logUsernameAndPnMismatch(), o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebUsernamePhoneNumberMismatchModal.react"), {}));
							return;
						}
					}
				}
				if (D && O.trim() === (S == null ? void 0 : S.firstName) && q.trim() === (S == null ? void 0 : S.lastName) && n === $ && ne === (S == null ? void 0 : S.username) && Z === ((t = S == null ? void 0 : S.syncToAddressbook) != null ? t : !1)) {
					Re();
					return;
				}
				var m = n != null ? n : i, p = m != null ? o("WAWebContactCollection").ContactCollection.get(m) : null, _ = p != null && o("WAWebFrontendContactGetters").getIsMyContact(p), f = r("isStringNullOrEmpty")(ne) ? void 0 : ne !== (S == null ? void 0 : S.username), g = _ ? void 0 : (S == null ? void 0 : S.username) != null, h = _ ? (S == null ? void 0 : S.phoneNumber) != null : void 0;
				try {
					Y(!0);
					var y = {
						firstName: O.trim(),
						lastName: q.trim(),
						isExistingContact: _ || D
					};
					if (!r("isStringNullOrEmpty")(n)) await o("WAWebSaveContactAction").saveContactAction(babelHelpers.extends({}, y, {
						phoneNumber: n,
						prevPhoneNumber: $,
						syncToAddressbook: Z,
						username: ne != null ? ne : void 0,
						lid: i != null ? i : void 0,
						isConvertingContactType: M
					}));
					else if (i != null && !r("isStringNullOrEmpty")(ne)) {
						var C, b, v = D && !M, R = n != null ? n : $, L = D && M === !0, k = L && (C = S == null ? void 0 : S.lid) != null ? C : void 0, I = L && !r("isStringNullOrEmpty")(S == null ? void 0 : S.username) && (b = S == null ? void 0 : S.username) != null ? b : void 0;
						await o("WAWebSaveContactAction").saveContactAction(babelHelpers.extends({}, y, {
							lid: i,
							username: ne,
							pn: R != null ? R : void 0,
							prevLid: k,
							prevUsername: I,
							isConvertingContactType: v
						}));
					} else o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[contact edit] saving contact action but args are not valid"]))).sendLogs("saving-contact-but-args-not-valid", { sampling: .01 });
					Se.logSave({
						firstName: O,
						lastName: q,
						syncToAddressbook: Z,
						usernameEdited: f,
						usernameAutofilled: g,
						phoneNumberAutofilled: h
					}), !D && !_ && o("WAWebUserPrefsContactManagement").setSyncToAddressbookLastSetting(Z);
					var T = n != null ? o("WAWebWidFactory").createUserWidOrThrow(n) : i;
					T == null ? o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[create contact] saving with no PN or LID"]))).sendLogs("create-contact-saving-with-no-pn-or-lid") : E({
						contactId: T,
						firstName: O,
						lastName: q,
						username: ne != null ? ne : void 0,
						phoneNumber: n != null ? n : void 0
					});
					var x;
					if (D || _) x = s._(
						/*BTDS*/
						""
					);
					else {
						var P = (O + " " + q).trim(), N = r("isStringNullOrEmpty")(P) ? ne : P;
						x = s._(
							/*BTDS*/
							"",
							[s._param("full-name", N)]
						);
					}
					o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
						id: o("WAWebToast.react").genId(),
						msg: x
					}));
				} catch (e) {
					Se.logSave({
						firstName: O,
						lastName: q,
						syncToAddressbook: Z,
						error: e,
						usernameEdited: f,
						usernameAutofilled: g,
						phoneNumberAutofilled: h
					}), o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebFailedToSaveContactPopup.react"), { onOK: o("WAWebModalManager").closeModalManager }));
				} finally {
					Y(!1);
				}
			}
		}, ke = async function(t, n) {
			var e = ++be.current, a = function() {
				return e === be.current;
			}, i = function(t, n) {
				a() && Ce(t == null ? null : {
					status: t,
					phoneNumber: n
				});
			};
			if (r("isStringNullOrEmpty")(n)) {
				i(null, null);
				return;
			}
			var l = o("WAWebPhoneNumberValidationUtils").getValidPhoneNumber(t, n);
			if (l == null) {
				i(o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType.Invalid, null);
				return;
			}
			var s = o("WAWebWidFactory").createUserWidOrThrow(l + "@c.us"), u = o("WAWebContactCollection").ContactCollection.get(s);
			if (u && o("WAWebFrontendContactGetters").getIsMyContact(u) && !D) {
				i(o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType.Duplicate, null);
				return;
			}
			var c = await ge.current.getOrRun(l) != null;
			ve.aborted || i(c ? o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType.Registered : o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType.Unregistered, c ? l : null);
		}, Ie = r("useWAWebDebouncedCallback")(ke, 250), Te = g(!1);
		p(function() {
			Te.current || !r("isStringNullOrEmpty")(x) && !r("isStringNullOrEmpty")(j) && (Te.current = !0, Ie(H, j));
		}, [
			x,
			H,
			j,
			Ie
		]);
		var De = function(t, n) {
			G(t), K(n), r("isStringNullOrEmpty")(n) ? (Ie.cancel(), be.current++, Ce(null)) : Ie(t, n);
		}, xe = async function() {
			var e = o("WAWebPhoneNumberValidationUtils").getValidPhoneNumber(H, j);
			if (e != null) {
				var t = o("WAWebWidFactory").createWid(e + "@c.us"), n = await o("WAWebFindChatAction").findOrCreateLatestChat(t, "createContact"), r = n.chat;
				await o("WAWebCmd").Cmd.openChatAt({
					chat: r,
					msgContext: null,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ContactEdit
				}), o("WAWebCmd").Cmd.chatInfoDrawer(r, {
					showFullGroupDescription: !1,
					scrollToParticipantList: !1
				}), Se.logDuplicate();
			}
		}, $e = function() {
			var e = !Z;
			(S == null ? void 0 : S.syncToAddressbook) === !0 && !e ? o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebStopSyncContactToAddressbookPopup.react"), {
				onOK: function() {
					o("WAWebModalManager").ModalManager.close(), ee(e);
				},
				onCancel: o("WAWebModalManager").closeModalManager
			})) : ee(e);
		}, Pe = function() {
			pe || o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebSyncToggleDisabledPopup.react"), { onOK: o("WAWebModalManager").closeModalManager }));
		}, Ne = D ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), Me = ye != null && ye.status === o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType.Registered && o("WAWebPhoneNumberValidationUtils").getValidPhoneNumber(H, j) === ye.phoneNumber, we = (!!O.trim() || !!q.trim()) && Me, Ae = de && o("WAWebUsernameUtils").usernameInputStateIsValid(ae), Fe = _e && (we || Ae), Oe = s._(
			/*BTDS*/
			""
		), Be = Fe ? d.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			children: d.jsx(r("WAWebVelocityTransitionGroup"), {
				transitionName: "btn",
				xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingVer32,
				appear: !0,
				children: d.jsx(o("WAWebRound.react").Round, {
					testid: "save-contact-btn",
					xstyle: C.saveButton,
					onClick: X ? null : Ee,
					label: Oe,
					children: X ? d.jsx(o("WAWebSpinner.react").Spinner, {
						color: "white",
						size: 30
					}) : d.jsx(r("WDSIconIcCheck.react"), {})
				})
			})
		}) : null, We;
		if (D && _e) {
			var qe = async function() {
				var e, t = se != null ? se : S == null ? void 0 : S.lid, n = ce && t != null && o("WAWebCustomerDataCollection").CustomerDataCollection.maybeGetCustomerDataByChatJid(o("WAWebWidToJid").widToChatJid(t)) != null;
				o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebDeleteContactPopup.react"), {
					syncToAddressbook: (e = S == null ? void 0 : S.syncToAddressbook) != null ? e : !1,
					hasCustomerData: n,
					onCancel: o("WAWebModalManager").closeModalManager,
					onOK: async function() {
						Y(!0), o("WAWebModalManager").ModalManager.close();
						try {
							var e = se != null ? se : S == null ? void 0 : S.lid;
							if (!M && !r("isStringNullOrEmpty")($)) {
								var t = await ge.current.getOrRun($);
								if (t == null) {
									Le();
									return;
								}
								var n = o("WAWebWidFactory").createUserWidOrThrow($ + "@c.us");
								await o("WAWebDeleteContactAction").deleteContactAction({ phoneNumber: n });
							} else !r("isStringNullOrEmpty")(ne) && e != null && await o("WAWebDeleteContactAction").deleteContactAction({
								username: ne,
								lid: e
							});
							if (ce && e != null) {
								var a = o("WAWebWidToJid").widToChatJid(e);
								try {
									await o("WAWebCustomerDataAction").customerDataDeleteAction(a);
								} catch (e) {
									o("WAWebFBLogger").WAWebFBLogger().warn("Failed to delete customer data for %s: %s", a, String(e));
								}
							}
							Se.logDelete(), Re(), o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
								id: o("WAWebToast.react").genId(),
								msg: s._(
									/*BTDS*/
									""
								)
							}));
						} catch (e) {
							Se.logDelete(e), o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
								id: o("WAWebToast.react").genId(),
								msg: s._(
									/*BTDS*/
									""
								)
							}));
						} finally {
							Y(!1);
						}
					}
				}));
			};
			We = d.jsx(o("WAWebClickable.react").Clickable, {
				dataTestId: "btn-delete-contact",
				onClick: X ? null : qe,
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
		var Ue = k === o("WAWebContactLogging").ContactSourceType.NewChat, Ve;
		D && !r("isStringNullOrEmpty")(j) && !o("WAWebUsernameWorkerCompatibleGatingUtils").usernameContactUIEnabled ? Ve = d.jsx(r("WAWebContactPhoneNumberReadOnlyField.react"), {
			countryCode: H,
			numberWithoutPrefix: j
		}) : Ve = d.jsx(o("WAWebContactPhoneNumberFields.react").ContactPhoneNumberFields, {
			status: ye == null ? void 0 : ye.status,
			countryCode: H,
			numberWithoutPrefix: j,
			onChange: De,
			onViewDuplicateContact: xe,
			origin: k,
			fullPhoneNumber: o("WAWebPhoneNumberValidationUtils").getValidPhoneNumber(H, j)
		});
		var He = s._(
			/*BTDS*/
			""
		), Ge = s._(
			/*BTDS*/
			""
		), ze = s._(
			/*BTDS*/
			""
		), je = o("WAWebDrawerUtils").getDrawerHeaderType(T), Ke = d.jsxs(o("WAWebFlex.react").FlexRow, {
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
					}[!!pe << 0], { children: [ze, d.jsx(r("WDSText.react"), {
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
						disabled: !pe || !Me,
						value: Z,
						onChange: $e,
						onClick: Pe,
						"aria-label": ze
					})
				})
			]
		});
		return d.jsxs(r("WAWebDrawer.react"), {
			ref: fe,
			theme: Ue ? void 0 : "striped",
			testid: "save-contact-drawer",
			viewType: T,
			tsNavigationData: { surface: "contact-creation" },
			children: [
				d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: Ne,
					type: je,
					onBack: R ? function() {
						return Re(!0);
					} : void 0,
					onCancel: L ? function() {
						return Re(!0);
					} : void 0,
					children: We
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
									placeholder: He,
									ariaLabel: He,
									value: O,
									onChange: function(t) {
										var e = t.text;
										return B(e);
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
									placeholder: Ge,
									ariaLabel: Ge,
									value: q,
									onChange: function(t) {
										var e = t.text;
										return U(e);
									}
								})
							})]
						}),
						de ? d.jsx(r("WAWebUsernameContactField.react"), {
							usernameInput: ne,
							usernameState: ae,
							setUsernameInput: re,
							setUsernameState: ie,
							setContactLid: ue,
							contactLid: se,
							origin: k,
							onInvalidUsername: function() {
								return Se.logInvalidUsername();
							}
						}) : null,
						d.jsxs(o("WAWebFlex.react").FlexRow, {
							xstyle: [y.paddingInline25, y.marginTop15],
							children: [d.jsx(o("WAWebFlex.react").FlexItem, {
								xstyle: C.iconSection,
								children: d.jsx(o("WAWebPhoneIcon.react").PhoneIcon, {
									width: 22,
									xstyle: [D ? o("WDSMargins.stylex").wdsMargins.marginTop32 : y.marginTop30, o("WDSMargins.stylex").wdsMargins.marginStart2]
								})
							}), d.jsx(o("WAWebFlex.react").FlexItem, {
								grow: 1,
								shrink: 1,
								children: Ve
							})]
						}),
						Ke
					]
				}) }),
				Be
			]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);
