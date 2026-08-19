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
	"asyncToGeneratorRuntime",
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
		var t = e.entryPoint, a = t === void 0 ? "header_button" : t, i = h(""), l = i[0], c = i[1], b = h(""), v = b[0], S = b[1], R = h(!0), L = R[0], E = R[1], k = d(function(e) {
			c(e), E(!0);
		}, []), I = d(function(e) {
			S(e), E(!0);
		}, []), T = f(function() {
			return o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").getCountryCodeIso(o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().user);
		}, []), D = h(T), x = D[0], $ = D[1], P = h(null), N = P[0], M = P[1], w = h(null), A = w[0], F = w[1], O = h(null), B = O[0], W = O[1], q = h(!1), U = q[0], V = q[1], H = r("useWAWebUnmountSignal")(), G = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				F(null), W(null), V(!1);
				var n = o("WAWebPhoneNumberValidationUtils").getValidPhoneNumber(e, t);
				if (n == null) {
					F(o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType.Invalid);
					return;
				}
				var r = yield o("WAWebQueryExistsJob").queryPhoneExists(n);
				if (!H.aborted) {
					if (r == null) {
						F(o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType.Unregistered);
						return;
					}
					W(r.wid);
					var a = o("WAWebContactCollection").ContactCollection.get(r.wid);
					if (a != null && o("WAWebCustomerDataCollection").CustomerDataCollection.isCustomer(a)) {
						F(o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType.IsCustomer);
						return;
					}
					a != null && V(o("WAWebFrontendContactGetters").getIsMyContact(a)), F(o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType.Registered);
				}
			});
			return function(n, r) {
				return e.apply(this, arguments);
			};
		})(), z = r("useWAWebDebouncedCallback")(G, 250), j = d(function(e, t) {
			$(e), M(t), t != null && t !== "" ? z(e, t) : (F(null), W(null), V(!1));
		}, [z]), K = r("WAWebNoop"), Q = h(""), X = Q[0], Y = Q[1], J = h(""), Z = J[0], ee = J[1], te = h(""), ne = te[0], re = te[1], oe = h(o("WAWebLeadStage").LeadStage.INTAKE), ae = oe[0], ie = oe[1], le = h(null), se = le[0], ue = le[1], ce = f(function() {
			var e = 0;
			return X.trim() !== "" && e++, Z.trim() !== "" && e++, ne.trim() !== "" && e++, se != null && e++, ae !== o("WAWebLeadStage").LeadStage.INTAKE && e++, e;
		}, [
			Z,
			X,
			ne,
			se,
			ae
		]), de = _(function() {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.viewAddCustomer(a);
		});
		p(function() {
			de();
		}, []);
		var me = d(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			if (B != null) {
				var e = o("WAWebPhoneNumberValidationUtils").getValidPhoneNumber(x, N);
				if (e != null) {
					var t = o("WAWebWidToJid").widToChatJid(B);
					o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickSaveCustomer(ce, U);
					var n = Date.now();
					try {
						yield o("WAWebSaveContactAction").saveContactAction({
							firstName: l.trim(),
							lastName: v.trim(),
							isExistingContact: U,
							phoneNumber: e,
							prevPhoneNumber: U ? e : null,
							syncToAddressbook: !1
						}), yield o("WAWebFindChatAction").findOrCreateLatestChat(B, "createContact"), yield o("WAWebCustomerDataFieldSaver").upsertAsCustomer(t, ae, {
							email: X.trim(),
							altPhoneNumbers: "",
							address: Z.trim(),
							acquisitionSource: se != null ? se : void 0
						}), ne.trim() !== "" && (yield o("WAWebNoteAction").addOrEditNoteAction({
							actionType: "add",
							noteType: "unstructured",
							chatJid: t,
							content: ne.trim()
						}, !0)), o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.saveCustomerResult(o("WAWebContactManagerSMBUserJourneyLogger").SaveResult.SUCCESS, Date.now() - n);
					} catch (e) {
						throw o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.saveCustomerResult(o("WAWebContactManagerSMBUserJourneyLogger").SaveResult.ERROR_UNKNOWN, Date.now() - n), e;
					}
					o("WAWebModalManager").closeModalManager();
				}
			}
		}), [
			Z,
			x,
			X,
			ce,
			l,
			U,
			v,
			ne,
			N,
			se,
			ae,
			B
		]), pe = d(function() {
			var e = l.trim() !== "" || v.trim() !== "" || N != null && N !== "" || ce > 0;
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.dismissAddCustomer(e, ce), o("WAWebModalManager").closeModalManager();
		}, [
			ce,
			l,
			v,
			N
		]), _e = g(null), fe = g(null), ge = g(null);
		p(function() {
			var e = function(t) {
				var e = t.target;
				e instanceof Node && ge.current != null && !ge.current.contains(e) && E(!1);
			};
			return document.addEventListener("mousedown", e), function() {
				document.removeEventListener("mousedown", e);
			};
		}, []);
		var he = (l + " " + v).trim(), ye = m(he), Ce = f(function() {
			if (ye === "") return [];
			var e = o("WAWebL10NAccentFold").accentFold(ye), t = o("WAWebPhoneNumberSearch").numberSearch(e), n = o("WAWebContactCollectionUtils").getFilteredContacts(o("WAWebContactCollection").ContactCollection, { showMe: !1 });
			return n.filter(function(n) {
				return n.searchMatchExact(e, t) != null;
			});
		}, [ye]), be = d((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t;
				Y(""), ee(""), re(""), ie(o("WAWebLeadStage").LeadStage.INTAKE), ue(null), F(null);
				var n = o("WAWebContactUtils").getContactDataFromContactModel(e);
				if (n != null) c(n.firstName), S(n.lastName);
				else {
					var r = o("WAWebFrontendContactGetters").getDisplayName(e), a = o("WAWebContactUtils").splitContactName(r), i = a.firstName, l = a.lastName;
					c(i), S(l);
				}
				E(!1);
				var s = (t = e.phoneNumber) != null ? t : e.id, u = s.user;
				if (u != null) {
					var d = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").cleanPhoneNumberInputValue(String(u)), m = d.countryCodeIso, p = d.phoneNumberWithoutCountryCode;
					m != null && $(m), p.length > 0 && (M(p), z(m != null ? m : x, p));
				}
				var _ = o("WAWebWidToJid").widToChatJid(e.id), f = o("WAWebCustomerDataCollection").CustomerDataCollection.maybeGetCustomerDataByChatJid(_);
				if (f != null) {
					var g, h, y, C;
					Y((g = f.email) != null ? g : ""), ee((h = f.address) != null ? h : "");
					var b = f.leadStage;
					ie((y = b != null ? o("WAWebLeadStage").getLeadStageFromNumber(b) : null) != null ? y : o("WAWebLeadStage").LeadStage.INTAKE), ue((C = f.acquisitionSource) != null ? C : null);
				}
				var v = yield o("WAWebNoteAction").retrieveOnlyNoteForChatJid(_);
				if (v != null) {
					var R;
					re((R = v.content) != null ? R : "");
				}
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), [x, z]), ve = d(function(e, t) {
			var n = o("WAWebWidToJid").widToChatJid(e.id), r = o("WAWebCustomerDataCollection").CustomerDataCollection.maybeGetCustomerDataByChatJid(n), a = 2;
			(r == null ? void 0 : r.email) != null && r.email !== "" && a++, (r == null ? void 0 : r.address) != null && r.address !== "" && a++, (r == null ? void 0 : r.acquisitionSource) != null && a++, (r == null ? void 0 : r.leadStage) != null && a++, o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickAddCustomerContactSuggestion(t, a), be(e);
		}, [be]), Se = he !== "", Re = Ce.length > 0, Le = d(function(e) {
			ie(e);
		}, []), Ee = r("useWDSMenu")({
			targetRef: _e,
			menu: y(Le),
			dismissable: !0
		}), ke = Ee.closeMenu, Ie = Ee.isMenuOpen, Te = Ee.menuPortal, De = Ee.openMenu, xe = d(function() {
			Ie ? ke() : (o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickAddCustomerLeadStageDropdown(ae), De());
		}, [
			ke,
			Ie,
			De,
			ae
		]), $e = d(function(e) {
			ue(e);
		}, []), Pe = r("useWDSMenu")({
			targetRef: fe,
			menu: C($e),
			dismissable: !0
		}), Ne = Pe.closeMenu, Me = Pe.isMenuOpen, we = Pe.menuPortal, Ae = Pe.openMenu, Fe = d(function() {
			Me ? Ne() : (o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickAddCustomerAcquisitionSource(se), Ae());
		}, [
			Ne,
			Me,
			Ae,
			se
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
			onOK: me,
			onCancel: pe,
			okDisabled: l.trim() === "" || N == null || N.trim() === "" || A !== o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType.Registered,
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
						ref: ge,
						children: [
							u.jsxs("div", {
								className: "x78zum5 x1q0g3np x1s70e7g",
								children: [u.jsx("div", {
									className: "x1iyjqo2 xs83m0k x1r8uery",
									children: u.jsx(r("WDSTextField.react"), {
										value: l,
										onValueChange: k,
										onBlur: function() {
											return o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.enterAddCustomerField("name", {
												has_first_name: l.trim() !== "",
												has_last_name: v.trim() !== "",
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
										value: v,
										onValueChange: I,
										onBlur: function() {
											return o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.enterAddCustomerField("name", {
												has_first_name: l.trim() !== "",
												has_last_name: v.trim() !== "",
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
							L && Se && Re && u.jsx("div", {
								className: "x10l6tqk x1o0tod xtijo5x xdsb8wn xfo81ep xw6alqk x1suzm8a x1p453bz x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs x972fbf x1kpx6y5 x1hkcv85 x1odjw0f",
								children: Ce.map(function(e, t) {
									return u.jsx(r("WAWebAddCustomerContactRow.react"), {
										contact: e,
										onClick: ve,
										position: t
									}, String(e.id));
								})
							}),
							L && Se && !Re && u.jsx("div", {
								className: "x10l6tqk x1o0tod xtijo5x xdsb8wn xfo81ep xw6alqk x1suzm8a x1p453bz x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs x972fbf x1kpx6y5 x1hkcv85 x1odjw0f x16ovd2e x12xbjc7 x1iw51ew xde1mab",
								children: u.jsx(r("WDSText.react"), {
									type: "Body2",
									colorName: "contentDeemphasized",
									children: s._(
										/*BTDS*/
										"",
										[s._param("query", he)]
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
							return o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.enterAddCustomerField("phone", { has_value: N != null && N !== "" });
						},
						children: u.jsx(o("WAWebContactPhoneNumberFields.react").ContactPhoneNumberFields, {
							countryCode: x,
							fullPhoneNumber: o("WAWebPhoneNumberValidationUtils").getValidPhoneNumber(x, N),
							numberWithoutPrefix: N,
							onChange: j,
							onViewDuplicateContact: K,
							origin: o("WAWebContactLogging").ContactSourceType.NewChat,
							status: A
						})
					}),
					u.jsx("div", {
						className: "x1ypdohk x1n2onr6 xh8yej3",
						ref: _e,
						onClick: xe,
						onKeyDown: function(t) {
							(t.key === "Enter" || t.key === " ") && (t.preventDefault(), xe());
						},
						role: "button",
						tabIndex: 0,
						"aria-haspopup": "menu",
						"aria-expanded": Ie,
						"aria-label": s._(
							/*BTDS*/
							"",
							[s._param("selected stage name", o("WAWebLeadStageNames").getLeadStageName(ae))]
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
							value: String(o("WAWebLeadStageNames").getLeadStageName(ae))
						})
					}),
					Te,
					u.jsx("div", { children: u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDefault",
						children: s._(
							/*BTDS*/
							""
						)
					}) }),
					u.jsx(r("WDSTextField.react"), {
						value: X,
						onValueChange: Y,
						onBlur: function() {
							return o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.enterAddCustomerField("email", { has_value: X.trim() !== "" });
						},
						label: s._(
							/*BTDS*/
							""
						),
						testid: "customer_manager_add_customer_email_textfield"
					}),
					u.jsx(r("WDSTextField.react"), {
						value: Z,
						onValueChange: ee,
						onBlur: function() {
							return o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.enterAddCustomerField("address", { has_value: Z.trim() !== "" });
						},
						label: s._(
							/*BTDS*/
							""
						),
						testid: "customer_manager_add_customer_address_textfield"
					}),
					u.jsx("textarea", {
						className: "x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs xyi3aci xwf5gio x1p453bz x1suzm8a x16ovd2e x12xbjc7 xdx6fka xvtqlqk xseoqlg x288g5 xjbqb8w x1heor9g xjb2p0i x1qlqyl8 x15bjb6t x1a2a7pz x9f619 xh8yej3",
						value: ne,
						onChange: function(t) {
							return re(t.currentTarget.value);
						},
						onBlur: function() {
							return o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.enterAddCustomerField("notes", {
								has_value: ne.trim() !== "",
								length: ne.trim().length
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
						ref: fe,
						onClick: Fe,
						onKeyDown: function(t) {
							(t.key === "Enter" || t.key === " ") && (t.preventDefault(), Fe());
						},
						role: "button",
						tabIndex: 0,
						"aria-haspopup": "menu",
						"aria-expanded": Me,
						"aria-label": (function(e) {
							if (se == null) return s._(
								/*BTDS*/
								""
							);
							var t = (e = o("WAWebAcquisitionSourceNames").getAcquisitionSourceDisplayName(se)) != null ? e : "";
							return s._(
								/*BTDS*/
								"",
								[s._param("selected source name", t)]
							);
						})(),
						"data-testid": "add-customer-source-select",
						children: [u.jsx(r("WDSText.react"), {
							type: "Body1",
							colorName: se != null ? "contentDefault" : "contentDeemphasized",
							children: se != null ? o("WAWebAcquisitionSourceNames").getAcquisitionSourceDisplayName(se) : s._(
								/*BTDS*/
								""
							)
						}), u.jsx(r("WDSIconIcArrowDropDown.react"), {
							height: 20,
							width: 20
						})]
					}),
					we
				]
			})
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = b;
}), 226);
