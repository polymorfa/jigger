__d("WAWebContactManagerDrawer.react", [
	"fbt",
	"WAWebAddCustomerDialog.react",
	"WAWebContactCollection",
	"WAWebContactManagerExportAction",
	"WAWebContactManagerExportConfirm.react",
	"WAWebContactManagerFilterBar.react",
	"WAWebContactManagerFindOrCreateChat",
	"WAWebContactManagerGating",
	"WAWebContactManagerImportReviewDrawer.react",
	"WAWebContactManagerImportUploadModal.react",
	"WAWebContactManagerLastMessageFilter.react",
	"WAWebContactManagerListView.react",
	"WAWebContactManagerNuxModal.react",
	"WAWebContactManagerPipelineView.react",
	"WAWebContactManagerSMBUserJourneyLogger",
	"WAWebContactManagerSearchInput.react",
	"WAWebContactManagerSearchUtils",
	"WAWebCustomerDataCollection",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebExternalLink.react",
	"WAWebInfoFlowLoadable",
	"WAWebInfoFlowStep",
	"WAWebKeyboardTabUtils",
	"WAWebLabelFlowLoadable",
	"WAWebModalManager",
	"WAWebNux",
	"WAWebViewSwitcher.react",
	"WAWebWamEnumUpdateEntryPoint",
	"WDSButton.react",
	"WDSIconIcAdd.react",
	"WDSIconIcCheckBox.react",
	"WDSIconIcChecklist.react",
	"WDSIconIcDownload.react",
	"WDSIconIcFormatListBulleted.react",
	"WDSIconIcHelp.react",
	"WDSIconIcMoreVert.react",
	"WDSIconIcSpaceDashboard.react",
	"WDSIconIcUpload.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSText.react",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"useWAWebContactManagerSelection",
	"useWAWebCustomerData",
	"useWAWebDebouncedCallback",
	"useWAWebNux",
	"useWAWebStableCallback",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useEffectEvent, _ = c.useMemo, f = c.useRef, g = c.useState, h = "list", y = "pipeline", C = [{
		value: h,
		label: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		Icon: r("WDSIconIcFormatListBulleted.react"),
		testid: "customer-manager-view-list"
	}, {
		value: y,
		label: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		Icon: r("WDSIconIcSpaceDashboard.react"),
		testid: "customer-manager-view-pipeline"
	}];
	function b() {
		var e = g(h), t = e[0], a = e[1], i = g(""), l = i[0], c = i[1], S = g([]), R = S[0], L = S[1], E = g(null), k = E[0], I = E[1], T = g(null), D = T[0], x = T[1], $ = g(null), P = $[0], N = $[1], M = g(null), w = M[0], A = M[1], F = d(function(e) {
			a(e), e === y && L([]), o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickToggleView(e);
		}, []), O = r("useWAWebStableCallback")(function(e) {
			var t = R, n = t.includes(e) ? t.filter(function(t) {
				return t !== e;
			}) : [].concat(t, [e]);
			L(n), o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.changeLeadStageFilter(n, t);
		}), B = r("useWAWebStableCallback")(function() {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.changeLeadStageFilter([], R), L([]);
		}), W = d(function(e) {
			I(e), o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.changeLabelFilter(e);
		}, []), q = d(function() {
			I(null), o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.changeLabelFilter(null);
		}, []), U = d(function(e) {
			x(e), o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.changeAcquisitionSourceFilter(e);
		}, []), V = d(function() {
			x(null), o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.changeAcquisitionSourceFilter(null);
		}, []), H = d(function(e) {
			N(e), A(null), o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.changeLastMessageFilter(e);
		}, []), G = d(function(e) {
			A(e), N(null);
		}, []), z = _(function() {
			return {
				acquisitionSource: D,
				labelId: k,
				lastMessageCustomRange: w,
				lastMessageRange: P,
				leadStages: R,
				query: l
			};
		}, [
			D,
			w,
			k,
			P,
			R,
			l
		]), j = r("useWAWebCustomerData")(), K = _(function() {
			return o("WAWebCustomerDataCollection").CustomerDataCollection.filterCustomers(j, z);
		}, [j, z]), Q = _(function() {
			return K.map(function(e) {
				return e.chatJid;
			});
		}, [K]), X = r("useWAWebContactManagerSelection")(Q), Y = g(!1), J = Y[0], Z = Y[1], ee = f(null), te = f(null), ne = f(null), re = d(function() {
			if (J) {
				X.clear();
				var e = o("WAWebContactManagerGating").contactManagerHeaderMenuEnabled() ? te.current : ee.current;
				e == null || e.focus();
			}
			Z(!J);
		}, [J, X]);
		m(function() {
			var e = ne.current;
			if (e != null) {
				var t = function(t) {
					J && t.key === "Escape" && (t.preventDefault(), t.stopPropagation(), re());
				};
				return e.addEventListener("keydown", t), function() {
					e.removeEventListener("keydown", t);
				};
			}
		}, [J, re]);
		var oe = o("WAWebContactManagerGating").contactManagerExportEnabled(), ae = g(!1), ie = ae[0], le = ae[1], se = d(function() {
			if (!ie) {
				var e = K.filter(function(e) {
					return X.isSelected(e.chatJid);
				}), t = e.length > 0 ? e : K;
				o("WAWebContactManagerExportConfirm.react").openExportConfirmDialog(t, function() {
					le(!0);
					function e() {
						return r.apply(this, arguments);
					}
					function r() {
						return r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
							try {
								yield o("WAWebContactManagerExportAction").exportCustomers(t);
							} catch (e) {} finally {
								le(!1);
							}
						}), r.apply(this, arguments);
					}
					e();
				});
			}
		}, [
			K,
			ie,
			X
		]), ue = g(null), ce = ue[0], de = ue[1], me = g(!1), pe = me[0], _e = me[1], fe = _(function() {
			var e;
			return ce != null && (e = o("WAWebContactCollection").ContactCollection.get(ce.chatJid)) != null ? e : null;
		}, [ce]), ge = g(null), he = ge[0], ye = ge[1], Ce = g("profile"), be = Ce[0], ve = Ce[1], Se = f(null), Re = d(function(e, t) {
			var n = o("WAWebContactCollection").ContactCollection.get(e.chatJid);
			n != null && (_e(!1), de(e), ye(null), ve(t), Se.current = e, o("WAWebContactManagerFindOrCreateChat").contactManagerFindOrCreateChat(n.id).then(function(t) {
				Se.current === e && ye(t);
			}).catch(function() {
				Se.current === e && (de(null), ye(null), Se.current = null);
			}));
		}, []), Le = d(function(e) {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickRow(), Re(e, "profile");
		}, [Re]), Ee = d(function(e) {
			var t = j.find(function(t) {
				return t.chatJid === e;
			});
			t != null && Re(t, "chat");
		}, [j, Re]), ke = d(function() {
			de(null), ye(null), Se.current = null;
		}, []), Ie = d(function(e) {
			Se.current != null && Se.current.chatJid === e && ke();
		}, [ke]), Te = d(function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebAddCustomerDialog.react"), { entryPoint: "header_button" }));
		}, []), De = d(function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebAddCustomerDialog.react"), { entryPoint: "empty_state" }));
		}, []), xe = d(function() {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickAddCustomerOnList(), Te();
		}, [Te]), $e = d(function() {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickImportOnList(), o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebContactManagerImportUploadModal.react"), {
				onCancel: o("WAWebModalManager").closeModalManager,
				onUploadSuccess: function(t, n) {
					o("WAWebModalManager").ModalManager.close(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(u.jsx(r("WAWebContactManagerImportReviewDrawer.react"), {
						initialContacts: t,
						initialErrorList: n,
						onClose: function() {
							return o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(u.jsx(b, {}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
						}
					}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
				}
			}));
		}, []), Pe = p(function() {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.viewList(null, {
				customer_count: K.length,
				has_last_message_filter: P != null,
				has_lead_stage_filter: R.length > 0,
				has_search_query: l.length > 0
			});
		});
		m(function() {
			Pe();
		}, []);
		var Ne = r("useWAWebNux")(o("WAWebNux").NUX.CUSTOMER_MANAGER_INTRO), Me = Ne[0], we = Ne[2], Ae = p(function() {
			Me && o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebContactManagerNuxModal.react"), { onAcknowledge: we }));
		});
		m(function() {
			Ae();
		}, []);
		var Fe = r("useWAWebDebouncedCallback")(function() {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.searchList(l.length, K.length);
		}, 500);
		m(function() {
			if (l.length === 0) {
				Fe.cancel();
				return;
			}
			Fe();
		}, [l, Fe]);
		var Oe = d(function() {
			ke(), _e(!0);
		}, [ke]), Be = d(function() {
			_e(!1);
		}, []), We = d(function() {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickLearnMore(), o("WAWebExternalLink.react").openExternalLink("https://faq.whatsapp.com/1500187031836082");
		}, []), qe = J ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), Ue = u.jsx(r("WDSButton.react"), {
			variant: "filled",
			type: "default",
			Icon: r("WDSIconIcAdd.react"),
			label: o("WAWebContactManagerGating").contactManagerHeaderMenuEnabled() ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			"aria-label": s._(
				/*BTDS*/
				""
			),
			onPress: xe,
			testid: "customer-manager-add-customer-btn"
		});
		return u.jsx(r("WAWebDrawer.react"), {
			theme: "catalog",
			testid: "customer-manager-panel",
			children: u.jsxs("div", {
				className: "x78zum5 x1q0g3np x98rzlu x2lwn1j x6ikm8r x10wlt62",
				children: [
					pe && u.jsx("div", {
						className: "x1n2onr6 x1czfd9k x2lah0s x1lun4ml x18b5jzi xbogo7e x6ikm8r x10wlt62",
						children: u.jsx(o("WAWebLabelFlowLoadable").LabelFlowLoadable, {
							isInitialStep: !0,
							onEnd: Be,
							entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_SETTINGS
						})
					}),
					u.jsxs("div", {
						className: "x1n2onr6 x78zum5 xdt5ytf x98rzlu xeuugli x6ikm8r x10wlt62",
						ref: ne,
						children: [
							u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
								title: s._(
									/*BTDS*/
									""
								),
								type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
								rightActionElement: u.jsx("div", {
									className: "x78zum5 x6s0dn4 x1s70e7g",
									children: o("WAWebContactManagerGating").contactManagerHeaderMenuEnabled() ? u.jsxs(u.Fragment, { children: [Ue, u.jsx(v, {
										bulkEditEnabled: t === h && o("WAWebContactManagerGating").contactManagerBulkEditEnabled(),
										exportEnabled: oe,
										onExportContacts: se,
										onHelpCenter: We,
										onImportContacts: $e,
										onSelectContacts: re,
										triggerRef: te
									})] }) : u.jsxs(u.Fragment, { children: [
										u.jsx(r("WDSButton.react"), {
											variant: "tonal",
											type: "default",
											Icon: r("WDSIconIcUpload.react"),
											label: s._(
												/*BTDS*/
												""
											),
											onPress: $e,
											testid: "customer-manager-import-btn"
										}),
										oe && u.jsx(r("WDSButton.react"), {
											variant: "tonal",
											type: "default",
											Icon: r("WDSIconIcDownload.react"),
											label: s._(
												/*BTDS*/
												""
											),
											onPress: se,
											disabled: ie,
											testid: "customer-manager-export-btn"
										}),
										Ue
									] })
								})
							}),
							u.jsxs("div", {
								className: "x78zum5 x6s0dn4 x1s70e7g xdx6fka x16ovd2e x12xbjc7",
								role: "toolbar",
								"aria-label": s._(
									/*BTDS*/
									""
								),
								children: [
									u.jsx("span", {
										role: "status",
										"aria-live": "polite",
										"aria-atomic": "true",
										children: u.jsx(r("WDSText.react"), {
											type: "Body2",
											colorName: "contentDeemphasized",
											testid: "customer-manager-count",
											children: s._(
												/*BTDS*/
												"",
												[s._plural(K.length, "number")]
											)
										})
									}),
									u.jsx("div", {
										className: "x78zum5 x6s0dn4 x2lah0s",
										"data-testid": "customer-manager-toolbar-chip-slot",
										children: u.jsx(r("WAWebViewSwitcher.react"), {
											items: C,
											currentValue: t,
											onValueChange: F,
											testid: "customer_manager_view_switch_chip"
										})
									}),
									u.jsx("div", {
										className: "x78zum5 x6s0dn4 x2lah0s",
										"data-testid": "customer-manager-toolbar-chip-slot",
										children: u.jsx(r("WAWebContactManagerLastMessageFilter.react"), {
											customRange: w,
											dateRangeFilterEnabled: o("WAWebContactManagerGating").contactManagerDateRangeFilterEnabled(),
											onSelectCustomRange: G,
											onSelectRange: H,
											selectedRange: P,
											testid: "customer_manager_last_message_filter_chip"
										})
									}),
									u.jsx(r("WAWebContactManagerSearchInput.react"), {
										value: l,
										onChange: c,
										testid: "customer-manager-search"
									}),
									u.jsx(r("WAWebContactManagerFilterBar.react"), {
										hideLeadStage: t === y,
										onClear: B,
										onClearAcquisitionSource: V,
										onClearLabel: q,
										onSelectAcquisitionSource: U,
										onSelectLabel: W,
										onToggleStage: O,
										selectedAcquisitionSource: D,
										selectedLabelId: k,
										selectedStages: R,
										testid: "customer-manager-lead-stage-filter"
									}),
									t === h && o("WAWebContactManagerGating").contactManagerBulkEditEnabled() && !o("WAWebContactManagerGating").contactManagerHeaderMenuEnabled() && u.jsx(r("WDSButton.react"), {
										ref: ee,
										variant: J ? "filled" : "tonal",
										type: "default",
										size: "small",
										Icon: r("WDSIconIcChecklist.react"),
										label: qe,
										onPress: re,
										"aria-pressed": J,
										testid: "customer_manager_bulk_edit_toggle"
									})
								]
							}),
							u.jsx(r("WAWebDrawerBody.react"), { children: u.jsx("div", {
								className: "x5yr21d",
								children: t === h ? u.jsx(r("WAWebContactManagerListView.react"), {
									bulkEditMode: J,
									customers: K,
									hasActiveFilter: o("WAWebContactManagerSearchUtils").hasActiveFilter(z),
									onAddCustomer: De,
									onChatClick: Ee,
									onCustomerClick: Le,
									onDeleteCustomer: Ie,
									onExitBulkEdit: re,
									onLearnMore: We,
									onManageLabels: Oe,
									selectedCustomerJid: ce == null ? void 0 : ce.chatJid,
									selection: X
								}) : u.jsx(r("WAWebContactManagerPipelineView.react"), {
									onCustomerClick: Le,
									searchOptions: z
								})
							}) })
						]
					}),
					ce != null && he != null && fe != null && u.jsx("div", {
						className: "x1n2onr6 x1czfd9k x2lah0s xpilrb4 x1t7ytsu x1vb5itz x6ikm8r x10wlt62",
						children: u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
							chat: he,
							initialContactInfoTab: be,
							initialStep: o("WAWebInfoFlowStep").InfoFlowStep.ContactInfo,
							contactProp: fe,
							onEnd: ke,
							showChatTabInContactInfoDrawer: !0
						}, fe.id.toString() + "-" + be)
					})
				]
			})
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = o("react-compiler-runtime").c(33), n = e.bulkEditEnabled, a = e.exportEnabled, i = e.onExportContacts, l = e.onHelpCenter, c = e.onImportContacts, d = e.onSelectContacts, m = e.triggerRef, p;
		t[0] !== n || t[1] !== d ? (p = n && u.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcCheckBox.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onPress: d,
			testid: "customer_manager_menu_select"
		}), t[0] = n, t[1] = d, t[2] = p) : p = t[2];
		var _;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), t[3] = _) : _ = t[3];
		var f;
		t[4] !== c ? (f = u.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcUpload.react"),
			title: _,
			onPress: c,
			testid: "customer_manager_menu_import"
		}), t[4] = c, t[5] = f) : f = t[5];
		var g;
		t[6] !== a || t[7] !== i ? (g = a && u.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcDownload.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onPress: i,
			testid: "customer_manager_menu_export"
		}), t[6] = a, t[7] = i, t[8] = g) : g = t[8];
		var h;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
			/*BTDS*/
			""
		), t[9] = h) : h = t[9];
		var y;
		t[10] !== l ? (y = u.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcHelp.react"),
			title: h,
			onPress: l,
			testid: "customer_manager_menu_help"
		}), t[10] = l, t[11] = y) : y = t[11];
		var C;
		t[12] !== p || t[13] !== f || t[14] !== g || t[15] !== y ? (C = u.jsxs(r("WDSMenu.react"), { children: [
			p,
			f,
			g,
			y
		] }), t[12] = p, t[13] = f, t[14] = g, t[15] = y, t[16] = C) : C = t[16];
		var b;
		t[17] !== C || t[18] !== m ? (b = {
			targetRef: m,
			menu: C
		}, t[17] = C, t[18] = m, t[19] = b) : b = t[19];
		var v = r("useWDSMenu")(b), S = v.closeMenu, R = v.isMenuOpen, L = v.menuPortal, E = v.openMenu, k;
		t[20] !== S || t[21] !== R || t[22] !== E ? (k = function() {
			R ? S() : E();
		}, t[20] = S, t[21] = R, t[22] = E, t[23] = k) : k = t[23];
		var I = k, T;
		t[24] === Symbol.for("react.memo_cache_sentinel") ? (T = { className: "x78zum5 x6s0dn4 x2lah0s" }, t[24] = T) : T = t[24];
		var D;
		t[25] === Symbol.for("react.memo_cache_sentinel") ? (D = s._(
			/*BTDS*/
			""
		), t[25] = D) : D = t[25];
		var x;
		t[26] !== I || t[27] !== R || t[28] !== m ? (x = u.jsx(r("WDSButton.react"), {
			ref: m,
			variant: "tonal",
			type: "default",
			Icon: r("WDSIconIcMoreVert.react"),
			"aria-haspopup": "menu",
			"aria-expanded": R,
			"aria-label": D,
			onPress: I,
			testid: "customer_manager_header_menu_btn"
		}), t[26] = I, t[27] = R, t[28] = m, t[29] = x) : x = t[29];
		var $;
		return t[30] !== L || t[31] !== x ? ($ = u.jsxs("div", babelHelpers.extends({}, T, {
			"data-testid": "customer_manager_header_menu_slot",
			children: [x, L]
		})), t[30] = L, t[31] = x, t[32] = $) : $ = t[32], $;
	}
	l.default = b;
}), 226);
