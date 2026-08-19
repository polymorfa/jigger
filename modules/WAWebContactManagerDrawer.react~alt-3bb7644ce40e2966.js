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
	"react",
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
		var e = g(h), t = e[0], n = e[1], a = g(""), i = a[0], l = a[1], c = g([]), S = c[0], R = c[1], L = g(null), E = L[0], k = L[1], I = g(null), T = I[0], D = I[1], x = g(null), $ = x[0], P = x[1], N = g(null), M = N[0], w = N[1], A = d(function(e) {
			n(e), e === y && R([]), o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickToggleView(e);
		}, []), F = r("useWAWebStableCallback")(function(e) {
			var t = S, n = t.includes(e) ? t.filter(function(t) {
				return t !== e;
			}) : [].concat(t, [e]);
			R(n), o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.changeLeadStageFilter(n, t);
		}), O = r("useWAWebStableCallback")(function() {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.changeLeadStageFilter([], S), R([]);
		}), B = d(function(e) {
			k(e), o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.changeLabelFilter(e);
		}, []), W = d(function() {
			k(null), o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.changeLabelFilter(null);
		}, []), q = d(function(e) {
			D(e), o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.changeAcquisitionSourceFilter(e);
		}, []), U = d(function() {
			D(null), o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.changeAcquisitionSourceFilter(null);
		}, []), V = d(function(e) {
			P(e), w(null), o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.changeLastMessageFilter(e);
		}, []), H = d(function(e) {
			w(e), P(null);
		}, []), G = _(function() {
			return {
				acquisitionSource: T,
				labelId: E,
				lastMessageCustomRange: M,
				lastMessageRange: $,
				leadStages: S,
				query: i
			};
		}, [
			T,
			M,
			E,
			$,
			S,
			i
		]), z = r("useWAWebCustomerData")(), j = _(function() {
			return o("WAWebCustomerDataCollection").CustomerDataCollection.filterCustomers(z, G);
		}, [z, G]), K = _(function() {
			return j.map(function(e) {
				return e.chatJid;
			});
		}, [j]), Q = r("useWAWebContactManagerSelection")(K), X = g(!1), Y = X[0], J = X[1], Z = f(null), ee = f(null), te = f(null), ne = d(function() {
			if (Y) {
				Q.clear();
				var e = o("WAWebContactManagerGating").contactManagerHeaderMenuEnabled() ? ee.current : Z.current;
				e == null || e.focus();
			}
			J(!Y);
		}, [Y, Q]);
		m(function() {
			var e = te.current;
			if (e != null) {
				var t = function(t) {
					Y && t.key === "Escape" && (t.preventDefault(), t.stopPropagation(), ne());
				};
				return e.addEventListener("keydown", t), function() {
					e.removeEventListener("keydown", t);
				};
			}
		}, [Y, ne]);
		var re = o("WAWebContactManagerGating").contactManagerExportEnabled(), oe = g(!1), ae = oe[0], ie = oe[1], le = d(function() {
			if (!ae) {
				var e = j.filter(function(e) {
					return Q.isSelected(e.chatJid);
				}), t = e.length > 0 ? e : j;
				o("WAWebContactManagerExportConfirm.react").openExportConfirmDialog(t, function() {
					ie(!0);
					async function e() {
						try {
							await o("WAWebContactManagerExportAction").exportCustomers(t);
						} catch (e) {} finally {
							ie(!1);
						}
					}
					e();
				});
			}
		}, [
			j,
			ae,
			Q
		]), se = g(null), ue = se[0], ce = se[1], de = g(!1), me = de[0], pe = de[1], _e = _(function() {
			var e;
			return ue != null && (e = o("WAWebContactCollection").ContactCollection.get(ue.chatJid)) != null ? e : null;
		}, [ue]), fe = g(null), ge = fe[0], he = fe[1], ye = g("profile"), Ce = ye[0], be = ye[1], ve = f(null), Se = d(function(e, t) {
			var n = o("WAWebContactCollection").ContactCollection.get(e.chatJid);
			n != null && (pe(!1), ce(e), he(null), be(t), ve.current = e, o("WAWebContactManagerFindOrCreateChat").contactManagerFindOrCreateChat(n.id).then(function(t) {
				ve.current === e && he(t);
			}).catch(function() {
				ve.current === e && (ce(null), he(null), ve.current = null);
			}));
		}, []), Re = d(function(e) {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickRow(), Se(e, "profile");
		}, [Se]), Le = d(function(e) {
			var t = z.find(function(t) {
				return t.chatJid === e;
			});
			t != null && Se(t, "chat");
		}, [z, Se]), Ee = d(function() {
			ce(null), he(null), ve.current = null;
		}, []), ke = d(function(e) {
			ve.current != null && ve.current.chatJid === e && Ee();
		}, [Ee]), Ie = d(function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebAddCustomerDialog.react"), { entryPoint: "header_button" }));
		}, []), Te = d(function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebAddCustomerDialog.react"), { entryPoint: "empty_state" }));
		}, []), De = d(function() {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickAddCustomerOnList(), Ie();
		}, [Ie]), xe = d(function() {
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
		}, []), $e = p(function() {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.viewList(null, {
				customer_count: j.length,
				has_last_message_filter: $ != null,
				has_lead_stage_filter: S.length > 0,
				has_search_query: i.length > 0
			});
		});
		m(function() {
			$e();
		}, []);
		var Pe = r("useWAWebNux")(o("WAWebNux").NUX.CUSTOMER_MANAGER_INTRO), Ne = Pe[0], Me = Pe[2], we = p(function() {
			Ne && o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebContactManagerNuxModal.react"), { onAcknowledge: Me }));
		});
		m(function() {
			we();
		}, []);
		var Ae = r("useWAWebDebouncedCallback")(function() {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.searchList(i.length, j.length);
		}, 500);
		m(function() {
			if (i.length === 0) {
				Ae.cancel();
				return;
			}
			Ae();
		}, [i, Ae]);
		var Fe = d(function() {
			Ee(), pe(!0);
		}, [Ee]), Oe = d(function() {
			pe(!1);
		}, []), Be = d(function() {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickLearnMore(), o("WAWebExternalLink.react").openExternalLink("https://faq.whatsapp.com/1500187031836082");
		}, []), We = Y ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), qe = u.jsx(r("WDSButton.react"), {
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
			onPress: De,
			testid: "customer-manager-add-customer-btn"
		});
		return u.jsx(r("WAWebDrawer.react"), {
			theme: "catalog",
			testid: "customer-manager-panel",
			children: u.jsxs("div", {
				className: "x78zum5 x1q0g3np x98rzlu x2lwn1j x6ikm8r x10wlt62",
				children: [
					me && u.jsx("div", {
						className: "x1n2onr6 x1czfd9k x2lah0s x1lun4ml x18b5jzi xbogo7e x6ikm8r x10wlt62",
						children: u.jsx(o("WAWebLabelFlowLoadable").LabelFlowLoadable, {
							isInitialStep: !0,
							onEnd: Oe,
							entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_SETTINGS
						})
					}),
					u.jsxs("div", {
						className: "x1n2onr6 x78zum5 xdt5ytf x98rzlu xeuugli x6ikm8r x10wlt62",
						ref: te,
						children: [
							u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
								title: s._(
									/*BTDS*/
									""
								),
								type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
								rightActionElement: u.jsx("div", {
									className: "x78zum5 x6s0dn4 x1s70e7g",
									children: o("WAWebContactManagerGating").contactManagerHeaderMenuEnabled() ? u.jsxs(u.Fragment, { children: [qe, u.jsx(v, {
										bulkEditEnabled: t === h && o("WAWebContactManagerGating").contactManagerBulkEditEnabled(),
										exportEnabled: re,
										onExportContacts: le,
										onHelpCenter: Be,
										onImportContacts: xe,
										onSelectContacts: ne,
										triggerRef: ee
									})] }) : u.jsxs(u.Fragment, { children: [
										u.jsx(r("WDSButton.react"), {
											variant: "tonal",
											type: "default",
											Icon: r("WDSIconIcUpload.react"),
											label: s._(
												/*BTDS*/
												""
											),
											onPress: xe,
											testid: "customer-manager-import-btn"
										}),
										re && u.jsx(r("WDSButton.react"), {
											variant: "tonal",
											type: "default",
											Icon: r("WDSIconIcDownload.react"),
											label: s._(
												/*BTDS*/
												""
											),
											onPress: le,
											disabled: ae,
											testid: "customer-manager-export-btn"
										}),
										qe
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
												[s._plural(j.length, "number")]
											)
										})
									}),
									u.jsx("div", {
										className: "x78zum5 x6s0dn4 x2lah0s",
										"data-testid": "customer-manager-toolbar-chip-slot",
										children: u.jsx(r("WAWebViewSwitcher.react"), {
											items: C,
											currentValue: t,
											onValueChange: A,
											testid: "customer_manager_view_switch_chip"
										})
									}),
									u.jsx("div", {
										className: "x78zum5 x6s0dn4 x2lah0s",
										"data-testid": "customer-manager-toolbar-chip-slot",
										children: u.jsx(r("WAWebContactManagerLastMessageFilter.react"), {
											customRange: M,
											dateRangeFilterEnabled: o("WAWebContactManagerGating").contactManagerDateRangeFilterEnabled(),
											onSelectCustomRange: H,
											onSelectRange: V,
											selectedRange: $,
											testid: "customer_manager_last_message_filter_chip"
										})
									}),
									u.jsx(r("WAWebContactManagerSearchInput.react"), {
										value: i,
										onChange: l,
										testid: "customer-manager-search"
									}),
									u.jsx(r("WAWebContactManagerFilterBar.react"), {
										hideLeadStage: t === y,
										onClear: O,
										onClearAcquisitionSource: U,
										onClearLabel: W,
										onSelectAcquisitionSource: q,
										onSelectLabel: B,
										onToggleStage: F,
										selectedAcquisitionSource: T,
										selectedLabelId: E,
										selectedStages: S,
										testid: "customer-manager-lead-stage-filter"
									}),
									t === h && o("WAWebContactManagerGating").contactManagerBulkEditEnabled() && !o("WAWebContactManagerGating").contactManagerHeaderMenuEnabled() && u.jsx(r("WDSButton.react"), {
										ref: Z,
										variant: Y ? "filled" : "tonal",
										type: "default",
										size: "small",
										Icon: r("WDSIconIcChecklist.react"),
										label: We,
										onPress: ne,
										"aria-pressed": Y,
										testid: "customer_manager_bulk_edit_toggle"
									})
								]
							}),
							u.jsx(r("WAWebDrawerBody.react"), { children: u.jsx("div", {
								className: "x5yr21d",
								children: t === h ? u.jsx(r("WAWebContactManagerListView.react"), {
									bulkEditMode: Y,
									customers: j,
									hasActiveFilter: o("WAWebContactManagerSearchUtils").hasActiveFilter(G),
									onAddCustomer: Te,
									onChatClick: Le,
									onCustomerClick: Re,
									onDeleteCustomer: ke,
									onExitBulkEdit: ne,
									onLearnMore: Be,
									onManageLabels: Fe,
									selectedCustomerJid: ue == null ? void 0 : ue.chatJid,
									selection: Q
								}) : u.jsx(r("WAWebContactManagerPipelineView.react"), {
									onCustomerClick: Re,
									searchOptions: G
								})
							}) })
						]
					}),
					ue != null && ge != null && _e != null && u.jsx("div", {
						className: "x1n2onr6 x1czfd9k x2lah0s xpilrb4 x1t7ytsu x1vb5itz x6ikm8r x10wlt62",
						children: u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
							chat: ge,
							initialContactInfoTab: Ce,
							initialStep: o("WAWebInfoFlowStep").InfoFlowStep.ContactInfo,
							contactProp: _e,
							onEnd: Ee,
							showChatTabInContactInfoDrawer: !0
						}, _e.id.toString() + "-" + Ce)
					})
				]
			})
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.bulkEditEnabled, n = e.exportEnabled, o = e.onExportContacts, a = e.onHelpCenter, i = e.onImportContacts, l = e.onSelectContacts, c = e.triggerRef, d = r("useWDSMenu")({
			targetRef: c,
			menu: u.jsxs(r("WDSMenu.react"), { children: [
				t && u.jsx(r("WDSMenuItem.react"), {
					Icon: r("WDSIconIcCheckBox.react"),
					title: s._(
						/*BTDS*/
						""
					),
					onPress: l,
					testid: "customer_manager_menu_select"
				}),
				u.jsx(r("WDSMenuItem.react"), {
					Icon: r("WDSIconIcUpload.react"),
					title: s._(
						/*BTDS*/
						""
					),
					onPress: i,
					testid: "customer_manager_menu_import"
				}),
				n && u.jsx(r("WDSMenuItem.react"), {
					Icon: r("WDSIconIcDownload.react"),
					title: s._(
						/*BTDS*/
						""
					),
					onPress: o,
					testid: "customer_manager_menu_export"
				}),
				u.jsx(r("WDSMenuItem.react"), {
					Icon: r("WDSIconIcHelp.react"),
					title: s._(
						/*BTDS*/
						""
					),
					onPress: a,
					testid: "customer_manager_menu_help"
				})
			] })
		}), m = d.closeMenu, p = d.isMenuOpen, _ = d.menuPortal, f = d.openMenu, g = function() {
			p ? m() : f();
		};
		return u.jsxs("div", {
			className: "x78zum5 x6s0dn4 x2lah0s",
			"data-testid": "customer_manager_header_menu_slot",
			children: [u.jsx(r("WDSButton.react"), {
				ref: c,
				variant: "tonal",
				type: "default",
				Icon: r("WDSIconIcMoreVert.react"),
				"aria-haspopup": "menu",
				"aria-expanded": p,
				"aria-label": s._(
					/*BTDS*/
					""
				),
				onPress: g,
				testid: "customer_manager_header_menu_btn"
			}), _]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = b;
}), 226);
