__d("WAWebAddCustomerDialog.react", [
	"fbt",
	"WAWebAcquisitionSourceNames",
	"WAWebAddCustomerContactRow.react",
	"WAWebConfirmPopup.react",
	"WAWebContactCollection",
	"WAWebContactCollectionUtils",
	"WAWebContactLogging",
	"WAWebContactManagerSMBUserJourneyLogger",
	"WAWebContactPhoneNumberFields.react",
	"WAWebContactUtils",
	"WAWebCustomerDataCollection",
	"WAWebCustomerDataFieldSaver",
	"WAWebFindChatAction",
	"WAWebFrontendContactGetters",
	"WAWebL10NAccentFold",
	"WAWebLeadStage",
	"WAWebLeadStageNames",
	"WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebNoteAction",
	"WAWebPhoneNumberSearch",
	"WAWebPhoneNumberValidationUtils",
	"WAWebQueryExistsJob",
	"WAWebSaveContactAction",
	"WAWebUserPrefsMeUser",
	"WAWebWidToJid",
	"WDSIconIcArrowDropDown.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSText.react",
	"WDSTextField.react",
	"react",
	"useWAWebDebouncedCallback",
	"useWAWebUnmountSignal",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useDeferredValue, p = c.useEffect, _ = c.useEffectEvent, f = c.useMemo, g = c.useRef, h = c.useState;
	function y(e) {
		return u.jsx(r("WDSMenu.react"), { children: o("WAWebLeadStage").LEAD_STAGE_ORDER.map(function(t) {
			return u.jsx(r("WDSMenuItem.react"), {
				title: o("WAWebLeadStageNames").getLeadStageName(t),
				onPress: function() {
					return e(t);
				},
				testid: "add-customer-stage-" + t
			}, t);
		}) });
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		return u.jsx(r("WDSMenu.react"), { children: o("WAWebAcquisitionSourceNames").getRegisteredAcquisitionSourceIds().map(function(t) {
			var n;
			return u.jsx(r("WDSMenuItem.react"), {
				title: (n = o("WAWebAcquisitionSourceNames").getAcquisitionSourceDisplayName(t)) != null ? n : "",
				onPress: function() {
					return e(t);
				},
				testid: "add-customer-source-" + t
			}, t);
		}) });
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.entryPoint, n = t === void 0 ? "header_button" : t, a = h(""), i = a[0], l = a[1], c = h(""), b = c[0], v = c[1], S = h(!0), R = S[0], L = S[1], E = d(function(e) {
			l(e), L(!0);
		}, []), k = d(function(e) {
			v(e), L(!0);
		}, []), I = f(function() {
			return o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").getCountryCodeIso(o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().user);
		}, []), T = h(I), D = T[0], x = T[1], $ = h(null), P = $[0], N = $[1], M = h(null), w = M[0], A = M[1], F = h(null), O = F[0], B = F[1], W = h(!1), q = W[0], U = W[1], V = r("useWAWebUnmountSignal")(), H = async function(t, n) {
			A(null), B(null), U(!1);
			var e = o("WAWebPhoneNumberValidationUtils").getValidPhoneNumber(t, n);
			if (e == null) {
				A(o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType.Invalid);
				return;
			}
			var r = await o("WAWebQueryExistsJob").queryPhoneExists(e);
			if (!V.aborted) {
				if (r == null) {
					A(o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType.Unregistered);
					return;
				}
				B(r.wid);
				var a = o("WAWebContactCollection").ContactCollection.get(r.wid);
				if (a != null && o("WAWebCustomerDataCollection").CustomerDataCollection.isCustomer(a)) {
					A(o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType.IsCustomer);
					return;
				}
				a != null && U(o("WAWebFrontendContactGetters").getIsMyContact(a)), A(o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType.Registered);
			}
		}, G = r("useWAWebDebouncedCallback")(H, 250), z = d(function(e, t) {
			x(e), N(t), t != null && t !== "" ? G(e, t) : (A(null), B(null), U(!1));
		}, [G]), j = r("WAWebNoop"), K = h(""), Q = K[0], X = K[1], Y = h(""), J = Y[0], Z = Y[1], ee = h(""), te = ee[0], ne = ee[1], re = h(o("WAWebLeadStage").LeadStage.INTAKE), oe = re[0], ae = re[1], ie = h(null), le = ie[0], se = ie[1], ue = f(function() {
			var e = 0;
			return Q.trim() !== "" && e++, J.trim() !== "" && e++, te.trim() !== "" && e++, le != null && e++, oe !== o("WAWebLeadStage").LeadStage.INTAKE && e++, e;
		}, [
			J,
			Q,
			te,
			le,
			oe
		]), ce = _(function() {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.viewAddCustomer(n);
		});
		p(function() {
			ce();
		}, []);
		var de = d(async function() {
			if (O != null) {
				var e = o("WAWebPhoneNumberValidationUtils").getValidPhoneNumber(D, P);
				if (e != null) {
					var t = o("WAWebWidToJid").widToChatJid(O);
					o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickSaveCustomer(ue, q);
					var n = Date.now();
					try {
						await o("WAWebSaveContactAction").saveContactAction({
							firstName: i.trim(),
							lastName: b.trim(),
							isExistingContact: q,
							phoneNumber: e,
							prevPhoneNumber: q ? e : null,
							syncToAddressbook: !1
						}), await o("WAWebFindChatAction").findOrCreateLatestChat(O, "createContact"), await o("WAWebCustomerDataFieldSaver").upsertAsCustomer(t, oe, {
							email: Q.trim(),
							altPhoneNumbers: "",
							address: J.trim(),
							acquisitionSource: le != null ? le : void 0
						}), te.trim() !== "" && await o("WAWebNoteAction").addOrEditNoteAction({
							actionType: "add",
							noteType: "unstructured",
							chatJid: t,
							content: te.trim()
						}, !0), o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.saveCustomerResult(o("WAWebContactManagerSMBUserJourneyLogger").SaveResult.SUCCESS, Date.now() - n);
					} catch (e) {
						throw o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.saveCustomerResult(o("WAWebContactManagerSMBUserJourneyLogger").SaveResult.ERROR_UNKNOWN, Date.now() - n), e;
					}
					o("WAWebModalManager").closeModalManager();
				}
			}
		}, [
			J,
			D,
			Q,
			ue,
			i,
			q,
			b,
			te,
			P,
			le,
			oe,
			O
		]), me = d(function() {
			var e = i.trim() !== "" || b.trim() !== "" || P != null && P !== "" || ue > 0;
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.dismissAddCustomer(e, ue), o("WAWebModalManager").closeModalManager();
		}, [
			ue,
			i,
			b,
			P
		]), pe = g(null), _e = g(null), fe = g(null);
		p(function() {
			var e = function(t) {
				var e = t.target;
				e instanceof Node && fe.current != null && !fe.current.contains(e) && L(!1);
			};
			return document.addEventListener("mousedown", e), function() {
				document.removeEventListener("mousedown", e);
			};
		}, []);
		var ge = (i + " " + b).trim(), he = m(ge), ye = f(function() {
			if (he === "") return [];
			var e = o("WAWebL10NAccentFold").accentFold(he), t = o("WAWebPhoneNumberSearch").numberSearch(e), n = o("WAWebContactCollectionUtils").getFilteredContacts(o("WAWebContactCollection").ContactCollection, { showMe: !1 });
			return n.filter(function(n) {
				return n.searchMatchExact(e, t) != null;
			});
		}, [he]), Ce = d(async function(e) {
			var t;
			X(""), Z(""), ne(""), ae(o("WAWebLeadStage").LeadStage.INTAKE), se(null), A(null);
			var n = o("WAWebContactUtils").getContactDataFromContactModel(e);
			if (n != null) l(n.firstName), v(n.lastName);
			else {
				var r = o("WAWebFrontendContactGetters").getDisplayName(e), a = o("WAWebContactUtils").splitContactName(r), i = a.firstName, s = a.lastName;
				l(i), v(s);
			}
			L(!1);
			var u = (t = e.phoneNumber) != null ? t : e.id, c = u.user;
			if (c != null) {
				var d = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").cleanPhoneNumberInputValue(String(c)), m = d.countryCodeIso, p = d.phoneNumberWithoutCountryCode;
				m != null && x(m), p.length > 0 && (N(p), G(m != null ? m : D, p));
			}
			var _ = o("WAWebWidToJid").widToChatJid(e.id), f = o("WAWebCustomerDataCollection").CustomerDataCollection.maybeGetCustomerDataByChatJid(_);
			if (f != null) {
				var g, h, y, C;
				X((g = f.email) != null ? g : ""), Z((h = f.address) != null ? h : "");
				var b = f.leadStage;
				ae((y = b != null ? o("WAWebLeadStage").getLeadStageFromNumber(b) : null) != null ? y : o("WAWebLeadStage").LeadStage.INTAKE), se((C = f.acquisitionSource) != null ? C : null);
			}
			var S = await o("WAWebNoteAction").retrieveOnlyNoteForChatJid(_);
			if (S != null) {
				var R;
				ne((R = S.content) != null ? R : "");
			}
		}, [D, G]), be = d(function(e, t) {
			var n = o("WAWebWidToJid").widToChatJid(e.id), r = o("WAWebCustomerDataCollection").CustomerDataCollection.maybeGetCustomerDataByChatJid(n), a = 2;
			(r == null ? void 0 : r.email) != null && r.email !== "" && a++, (r == null ? void 0 : r.address) != null && r.address !== "" && a++, (r == null ? void 0 : r.acquisitionSource) != null && a++, (r == null ? void 0 : r.leadStage) != null && a++, o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickAddCustomerContactSuggestion(t, a), Ce(e);
		}, [Ce]), ve = ge !== "", Se = ye.length > 0, Re = d(function(e) {
			ae(e);
		}, []), Le = r("useWDSMenu")({
			targetRef: pe,
			menu: y(Re),
			dismissable: !0
		}), Ee = Le.closeMenu, ke = Le.isMenuOpen, Ie = Le.menuPortal, Te = Le.openMenu, De = d(function() {
			ke ? Ee() : (o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickAddCustomerLeadStageDropdown(oe), Te());
		}, [
			Ee,
			ke,
			Te,
			oe
		]), xe = d(function(e) {
			se(e);
		}, []), $e = r("useWDSMenu")({
			targetRef: _e,
			menu: C(xe),
			dismissable: !0
		}), Pe = $e.closeMenu, Ne = $e.isMenuOpen, Me = $e.menuPortal, we = $e.openMenu, Ae = d(function() {
			Ne ? Pe() : (o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickAddCustomerAcquisitionSource(le), we());
		}, [
			Pe,
			Ne,
			we,
			le
		]);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: s._(
				/*BTDS*/
				""
			),
			okText: s._(
				/*BTDS*/
				""
			),
			cancelText: s._(
				/*BTDS*/
				""
			),
			onOK: de,
			onCancel: me,
			okDisabled: i.trim() === "" || P == null || P.trim() === "" || w !== o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType.Registered,
			testid: "add-customer-dialog",
			children: u.jsxs("div", {
				className: "x78zum5 xdt5ytf x1f0uite",
				children: [
					u.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					}),
					u.jsx("div", { children: u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDefault",
						children: s._(
							/*BTDS*/
							""
						)
					}) }),
					u.jsxs("div", {
						className: "x1n2onr6",
						ref: fe,
						children: [
							u.jsxs("div", {
								className: "x78zum5 x1q0g3np x1s70e7g",
								children: [u.jsx("div", {
									className: "x1iyjqo2 xs83m0k x1r8uery",
									children: u.jsx(r("WDSTextField.react"), {
										value: i,
										onValueChange: E,
										onBlur: function() {
											return o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.enterAddCustomerField("name", {
												has_first_name: i.trim() !== "",
												has_last_name: b.trim() !== "",
												which: "first"
											});
										},
										label: s._(
											/*BTDS*/
											""
										),
										testid: "customer_manager_add_customer_first_name_textfield"
									})
								}), u.jsx("div", {
									className: "x1iyjqo2 xs83m0k x1r8uery",
									children: u.jsx(r("WDSTextField.react"), {
										value: b,
										onValueChange: k,
										onBlur: function() {
											return o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.enterAddCustomerField("name", {
												has_first_name: i.trim() !== "",
												has_last_name: b.trim() !== "",
												which: "last"
											});
										},
										label: s._(
											/*BTDS*/
											""
										),
										testid: "customer_manager_add_customer_last_name_textfield"
									})
								})]
							}),
							R && ve && Se && u.jsx("div", {
								className: "x10l6tqk x1o0tod xtijo5x xdsb8wn xfo81ep xw6alqk x1suzm8a x1p453bz x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs x972fbf x1kpx6y5 x1hkcv85 x1odjw0f",
								children: ye.map(function(e, t) {
									return u.jsx(r("WAWebAddCustomerContactRow.react"), {
										contact: e,
										onClick: be,
										position: t
									}, String(e.id));
								})
							}),
							R && ve && !Se && u.jsx("div", {
								className: "x10l6tqk x1o0tod xtijo5x xdsb8wn xfo81ep xw6alqk x1suzm8a x1p453bz x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs x972fbf x1kpx6y5 x1hkcv85 x1odjw0f x16ovd2e x12xbjc7 x1iw51ew xde1mab",
								children: u.jsx(r("WDSText.react"), {
									type: "Body2",
									colorName: "contentDeemphasized",
									children: s._(
										/*BTDS*/
										"",
										[s._param("query", ge)]
									)
								})
							})
						]
					}),
					u.jsx(r("WDSText.react"), {
						type: "Body3",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					}),
					u.jsx("div", {
						role: "group",
						"aria-label": s._(
							/*BTDS*/
							""
						),
						onBlur: function() {
							return o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.enterAddCustomerField("phone", { has_value: P != null && P !== "" });
						},
						children: u.jsx(o("WAWebContactPhoneNumberFields.react").ContactPhoneNumberFields, {
							countryCode: D,
							fullPhoneNumber: o("WAWebPhoneNumberValidationUtils").getValidPhoneNumber(D, P),
							numberWithoutPrefix: P,
							onChange: z,
							onViewDuplicateContact: j,
							origin: o("WAWebContactLogging").ContactSourceType.NewChat,
							status: w
						})
					}),
					u.jsx("div", {
						className: "x1ypdohk x1n2onr6 xh8yej3",
						ref: pe,
						onClick: De,
						onKeyDown: function(t) {
							(t.key === "Enter" || t.key === " ") && (t.preventDefault(), De());
						},
						role: "button",
						tabIndex: 0,
						"aria-haspopup": "menu",
						"aria-expanded": ke,
						"aria-label": s._(
							/*BTDS*/
							"",
							[s._param("selected stage name", o("WAWebLeadStageNames").getLeadStageName(oe))]
						),
						"data-testid": "add-customer-stage-select",
						children: u.jsx(r("WDSTextField.react"), {
							EndIcon: r("WDSIconIcArrowDropDown.react"),
							label: s._(
								/*BTDS*/
								""
							),
							onEndIconClick: r("WAWebNoop"),
							onValueChange: r("WAWebNoop"),
							readOnly: !0,
							testid: "customer_manager_add_customer_lead_stage_textfield",
							value: String(o("WAWebLeadStageNames").getLeadStageName(oe))
						})
					}),
					Ie,
					u.jsx("div", { children: u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDefault",
						children: s._(
							/*BTDS*/
							""
						)
					}) }),
					u.jsx(r("WDSTextField.react"), {
						value: Q,
						onValueChange: X,
						onBlur: function() {
							return o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.enterAddCustomerField("email", { has_value: Q.trim() !== "" });
						},
						label: s._(
							/*BTDS*/
							""
						),
						testid: "customer_manager_add_customer_email_textfield"
					}),
					u.jsx(r("WDSTextField.react"), {
						value: J,
						onValueChange: Z,
						onBlur: function() {
							return o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.enterAddCustomerField("address", { has_value: J.trim() !== "" });
						},
						label: s._(
							/*BTDS*/
							""
						),
						testid: "customer_manager_add_customer_address_textfield"
					}),
					u.jsx("textarea", {
						className: "x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs xyi3aci xwf5gio x1p453bz x1suzm8a x16ovd2e x12xbjc7 xdx6fka xvtqlqk xseoqlg x288g5 xjbqb8w x1heor9g xjb2p0i x1qlqyl8 x15bjb6t x1a2a7pz x9f619 xh8yej3",
						value: te,
						onChange: function(t) {
							return ne(t.currentTarget.value);
						},
						onBlur: function() {
							return o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.enterAddCustomerField("notes", {
								has_value: te.trim() !== "",
								length: te.trim().length
							});
						},
						"aria-label": s._(
							/*BTDS*/
							""
						),
						placeholder: s._(
							/*BTDS*/
							""
						),
						"data-testid": "add-customer-notes"
					}),
					u.jsxs("div", {
						className: "x78zum5 x1q0g3np x6s0dn4 x1qughib x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs xyi3aci xwf5gio x1p453bz x1suzm8a xnnlda6 xdx6fka xvtqlqk x1ypdohk x9f619",
						ref: _e,
						onClick: Ae,
						onKeyDown: function(t) {
							(t.key === "Enter" || t.key === " ") && (t.preventDefault(), Ae());
						},
						role: "button",
						tabIndex: 0,
						"aria-haspopup": "menu",
						"aria-expanded": Ne,
						"aria-label": (function(e) {
							if (le == null) return s._(
								/*BTDS*/
								""
							);
							var t = (e = o("WAWebAcquisitionSourceNames").getAcquisitionSourceDisplayName(le)) != null ? e : "";
							return s._(
								/*BTDS*/
								"",
								[s._param("selected source name", t)]
							);
						})(),
						"data-testid": "add-customer-source-select",
						children: [u.jsx(r("WDSText.react"), {
							type: "Body1",
							colorName: le != null ? "contentDefault" : "contentDeemphasized",
							children: le != null ? o("WAWebAcquisitionSourceNames").getAcquisitionSourceDisplayName(le) : s._(
								/*BTDS*/
								""
							)
						}), u.jsx(r("WDSIconIcArrowDropDown.react"), {
							height: 20,
							width: 20
						})]
					}),
					Me
				]
			})
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = b;
}), 226);
