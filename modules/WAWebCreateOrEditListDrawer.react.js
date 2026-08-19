__d("WAWebCreateOrEditListDrawer.react", [
	"fbt",
	"Promise",
	"WAWebABProps",
	"WAWebAddToFavoritesAction",
	"WAWebAddToListModal.react",
	"WAWebAutomaticEventsUserJourneyWamEvent",
	"WAWebButton.react",
	"WAWebCTWAConstants",
	"WAWebCellFrame.react",
	"WAWebCellV2.react",
	"WAWebChatGetters",
	"WAWebChatSearchFilters",
	"WAWebChatstateInfo.react",
	"WAWebClickableLink.react",
	"WAWebCmd",
	"WAWebContactGetters",
	"WAWebDBFavoriteDatabaseApi",
	"WAWebDOIntroPopup.react",
	"WAWebDetailImage.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebErrorBoundary.react",
	"WAWebFbtCommon",
	"WAWebFlatList.react",
	"WAWebFlatListController",
	"WAWebFlex.react",
	"WAWebGroupChatImage.react",
	"WAWebInboxFiltersGatingUtils",
	"WAWebLabelCollection",
	"WAWebLabelEditInput.react",
	"WAWebListIcon.react",
	"WAWebListNameValidation",
	"WAWebListUtils",
	"WAWebListsActions",
	"WAWebListsGatingUtils",
	"WAWebListsLogging",
	"WAWebListsUtil",
	"WAWebMobilePlatforms",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebNonEmptyString",
	"WAWebNoop",
	"WAWebNux",
	"WAWebOrderConfirmDiscardModal",
	"WAWebRemoveFromFavoritesAction",
	"WAWebSchemaLabel",
	"WAWebStackedCirclesImage.react",
	"WAWebSuggestedLists.react",
	"WAWebTabOrder",
	"WAWebText.react",
	"WAWebUserPrefsGeneral",
	"WAWebWamEnumAutomaticEventsTargetComponentEnum",
	"WAWebWamEnumFavoritesUpdateEntryPoint",
	"WAWebWamEnumLabelOperations",
	"WAWebWamEnumLabelTargets",
	"WAWebWamEnumListAction",
	"WAWebWamEnumListUpdateUserJourneyAction",
	"WAWebWamEnumSmbListFeatureNameType",
	"WAWebWamEnumSmbListSurfaceType",
	"WAWebWamEnumSmbUserActionTypeEnum",
	"WAWebWamEnumSurfaceType",
	"WAWebWamSmbListEventReporter",
	"WDSBanner.react",
	"WDSButton.react",
	"WDSFontTokenStyles",
	"WDSIconIcAdd.react",
	"WDSIconIcDelete.react",
	"WDSIconIcMoreVert.react",
	"WDSMenu.react",
	"WDSMenuBarItem.react",
	"WDSMenuItem.react",
	"WDSToast.react",
	"asyncToGeneratorRuntime",
	"isStringNullOrEmpty",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebNux",
	"useWAWebOnUnmount"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d, m = d || (d = o("react")), p = d, _ = p.useEffect, f = p.useMemo, g = p.useRef, h = p.useState, y = {
		sectionHeader: {
			height: "x1gnnpzl",
			paddingBottom: "x18d9i69",
			$$css: !0
		},
		sectionHeaderTopPadding: {
			paddingTop: "x1sk1jro",
			$$css: !0
		},
		chatsListPadding: {
			paddingInlineStart: "xe2zdcy",
			$$css: !0
		},
		buttonPadding: {
			paddingInlineStart: "xzm8p2n",
			$$css: !0
		},
		inputRowPadding: {
			paddingInlineStart: "x12w63v0",
			$$css: !0
		},
		noShrink: {
			flexShrink: "x2lah0s",
			$$css: !0
		},
		ctaPadding: {
			paddingBottom: "xvpt6g3",
			paddingTop: "x14a8spa",
			$$css: !0
		},
		educationalTextPadding: {
			paddingTop: "x1p57kb1",
			$$css: !0
		},
		paddingHoriz24: {
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		disableButtonRow: {
			justifyContent: "xl56j7k",
			alignItems: "x6s0dn4",
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		mutedTextColor: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function C() {
		var e = o("react-compiler-runtime").c(2), t = h(b), n = t[0], a;
		e[0] !== n ? (a = function() {
			n != null && document.body != null && document.body.contains(n) && n.focus();
		}, e[0] = n, e[1] = a) : a = e[1], r("useWAWebOnUnmount")(a);
	}
	function b() {
		var e = document.activeElement;
		return e instanceof HTMLElement ? e : null;
	}
	function v(t) {
		var a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e);
		C();
		var l = i.entryPoint, u = i.listId, d = i.onBack, p = i.onClose, b = i.preselectedChats, v = h(!1), R = v[0], L = v[1], E = o("WAWebMobilePlatforms").isSMB(), k = o("WDSToast.react").useWDSToast(), I = k.showToast, T = u != null, D = f(function() {
			if (u == null) {
				var e = b != null ? [].concat(b) : [];
				return [
					null,
					e,
					null,
					null
				];
			}
			var t = o("WAWebLabelCollection").LabelCollection.get(u);
			if (t == null) return [
				null,
				[],
				null,
				null
			];
			var n = o("WAWebListsUtil").getAllChatsInList(t), a = r("isStringNullOrEmpty")(t.name) ? null : t.name, i = t.colorIndex;
			return [
				t,
				n,
				a,
				i
			];
		}, [u, b]), x = D[0], $ = D[1], P = D[2], N = D[3], M = E && o("WAWebListsGatingUtils").isListsEnabled() && (x == null ? void 0 : x.isImmutable) === !0, w = o("WAWebListUtils").isBuiltInList(x == null ? void 0 : x.type) || o("WAWebListUtils").isAiList(x == null ? void 0 : x.type), A = (x == null ? void 0 : x.type) === o("WAWebSchemaLabel").ListType.FAVORITES, F = o("WAWebListUtils").getPresetListHelperText(x == null ? void 0 : x.type), O = h(P), B = O[0], W = O[1], q = h(N), U = q[0], V = q[1], H = h($), G = H[0], z = H[1], j = h(0), K = j[0], Q = j[1], X = h(!1), Y = X[0], J = X[1], Z = g(!1), ee = h(""), te = ee[0], ne = ee[1], re = f(function() {
			return new (r("WAWebFlatListController"))();
		}, []);
		_(function() {
			T || o("WAWebListsLogging").logListUpdateUserJorney({
				listAction: o("WAWebWamEnumListAction").LIST_ACTION.CREATE,
				userJorneyAction: o("WAWebWamEnumListUpdateUserJourneyAction").LIST_UPDATE_USER_JOURNEY_ACTION.START,
				entryPoint: l
			});
		}, [T, l]), _(function() {
			T && u != null ? o("WAWebWamSmbListEventReporter").logSmbListEvent({
				labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.VIEW,
				labelTarget: o("WAWebWamEnumLabelTargets").LABEL_TARGETS.EDIT_LABEL_DIALOG,
				updateEntryPoint: l,
				listId: Number(u)
			}) : T || o("WAWebWamSmbListEventReporter").logSmbListEvent({
				labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.VIEW,
				labelTarget: o("WAWebWamEnumLabelTargets").LABEL_TARGETS.ADD_LABEL_DIALOG,
				updateEntryPoint: l
			});
		}, [
			T,
			u,
			l
		]);
		var oe = function() {
			x != null && o("WAWebListsUtil").openListDisableConfirmPopup(x, p);
		}, ae = function(t, n) {
			W((t || "").trim()), V(n), E && (ne(t), (t != null ? t : "").trim() !== (B != null ? B : "") && (J(!1), Z.current = !1));
		}, ie = function(t) {
			var e, n;
			W((e = (n = t.displayName) == null ? void 0 : n.toString()) != null ? e : t.name), V(t.colorIndex), J(!0), Z.current = !0, Q(function(e) {
				return e + 1;
			}), o("WAWebWamSmbListEventReporter").logSmbListEvent({
				labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.SUGGESTION_CLICKED,
				updateEntryPoint: l,
				predefinedId: t.predefinedId
			});
		}, le = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (!o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()) return !1;
				var e = o("WAWebListsUtil").getTwoArraysDifference($, G), t = e.addedItems, r = e.removedItems;
				if (t.length === 0 && r.length === 0) return !1;
				if (t.length > 0) {
					var a, i = yield o("WAWebDBFavoriteDatabaseApi").getAllFavorites(), l = (a = o("WAWebABProps").getABPropConfigValue("favorites_limit")) != null ? a : 100, u = i.length - r.length + t.length;
					if (u > l) return o("WAWebAddToFavoritesAction").showFavoritesLimitExceededPopup(l), !1;
				}
				return yield r.reduce(function(e, t) {
					return e.then(function() {
						return o("WAWebRemoveFromFavoritesAction").removeFromFavoritesAction(t.id, {
							suppressToast: !0,
							entryPoint: o("WAWebWamEnumFavoritesUpdateEntryPoint").FAVORITES_UPDATE_ENTRY_POINT.FILTER_MANAGE_FAVORITE_ACTION
						});
					});
				}, (c || (c = n("Promise"))).resolve()), t.length > 0 && (yield o("WAWebAddToFavoritesAction").addToFavoritesAction(t.map(function(e) {
					return e.id;
				}), {
					suppressToast: !0,
					entryPoint: o("WAWebWamEnumFavoritesUpdateEntryPoint").FAVORITES_UPDATE_ENTRY_POINT.FILTER_MANAGE_FAVORITE_ACTION
				})), I({
					type: "success",
					message: s._(
						/*BTDS*/
						""
					)
				}), !0;
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), se = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (B != null) {
					L(!0);
					try {
						var e;
						if (u != null && x != null) if (A) {
							var t = yield le();
							if (!t) return;
						} else {
							var n = B !== x.name || U !== x.colorIndex;
							yield o("WAWebListsActions").editListAction({
								newName: B,
								newColor: U,
								labelModel: x,
								updatedAssociatedChats: G,
								entryPoint: l
							}), n && I({
								type: "success",
								message: s._(
									/*BTDS*/
									""
								)
							});
						}
						else {
							o("WAWebWamSmbListEventReporter").logSmbListEvent({
								labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.CLICK_POSITIVE,
								updateEntryPoint: l,
								smbListSurface: o("WAWebWamEnumSmbListSurfaceType").SMB_LIST_SURFACE_TYPE.NEW_LIST,
								smbListFeatureName: o("WAWebWamEnumSmbListFeatureNameType").SMB_LIST_FEATURE_NAME_TYPE.LISTS_CREATION,
								userActionTarget: "toolbar_done_button",
								extraAttributes: JSON.stringify({ is_suggestion: Z.current })
							});
							var r = yield o("WAWebListsActions").createNewListAction({
								chats: G,
								color: U,
								entryPoint: l,
								name: B
							});
							e = r != null ? String(r) : void 0, r != null && (o("WAWebListsLogging").logListUpdateUserJorney({
								listId: "" + r,
								listAction: o("WAWebWamEnumListAction").LIST_ACTION.CREATE,
								userJorneyAction: o("WAWebWamEnumListUpdateUserJourneyAction").LIST_UPDATE_USER_JOURNEY_ACTION.CREATE_LIST,
								entryPoint: l
							}), G.length > 0 ? o("WAWebCmd").Cmd.trigger("set_active_filter", o("WAWebChatSearchFilters").SearchFilters.LABELS, String(r)) : I({
								type: "success",
								message: s._(
									/*BTDS*/
									""
								)
							}));
						}
						p(e);
					} finally {
						L(!1);
					}
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), ue = function() {
			o("WAWebModalManager").ModalManager.open(m.jsx(r("WAWebAddToListModal.react"), {
				preselectedChats: G,
				isEditMode: T,
				onClose: function(t) {
					z(t), o("WAWebModalManager").ModalManager.close();
				}
			}));
		}, ce = x == null ? void 0 : x.name, de = x == null ? void 0 : x.colorIndex, me = function() {
			if (T) {
				if (!M && (B !== ce || E && U !== de)) return !0;
				var e = o("WAWebListsUtil").getTwoArraysDifference($, G), t = e.addedItems, n = e.removedItems;
				return t.length > 0 || n.length > 0;
			}
			return !r("isStringNullOrEmpty")(B) || G.length > 0;
		}, pe = function() {
			me() ? o("WAWebModalManager").ModalManager.open(m.jsx(r("WAWebOrderConfirmDiscardModal"), { onOK: d })) : d();
		}, _e = function(t) {
			z(function(e) {
				return e.filter(function(e) {
					return e !== t;
				});
			});
		}, fe = function(t) {
			return m.jsx(S, {
				chat: t.data,
				onRemove: _e,
				showRemove: !w || A,
				disableRemove: G.length <= 1 && !E && !A
			});
		}, ge = G.map(function(e) {
			return {
				itemKey: "chat-" + e.id.toString(),
				data: e
			};
		}), he = f(function() {
			return function() {
				if (R) return !0;
				if (T) {
					if (!M) {
						if (r("isStringNullOrEmpty")(B) || B !== ce && o("WAWebListNameValidation").isListNameDuplicate(B)) return !0;
						if (B !== ce || E && U !== de) return !1;
					}
					if ($.length !== G.length) return !1;
					var e = o("WAWebListsUtil").getTwoArraysDifference($, G), t = e.addedItems, n = e.removedItems;
					return t.length === 0 && n.length === 0;
				}
				var a = E && U == null, i = E ? 0 : 1;
				return r("isStringNullOrEmpty")(B) || o("WAWebListNameValidation").isListNameDuplicate(B) || G.length < i || a;
			};
		}, [
			R,
			T,
			B,
			U,
			E,
			M,
			de,
			ce,
			G,
			$
		]), ye = u != null && x == null, Ce = r("useWAWebNux")(o("WAWebNux").NUX.DO_AUTOMATIC_LABEL), be = Ce[1], ve = x == null ? void 0 : x.predefinedId, Se = G.length > 0, Re = o("WAWebUserPrefsGeneral").getDetectedOutcomeOnboardingStatus(), Le = g(!1);
		_(function() {
			!Le.current && E && Re && (ve === o("WAWebCTWAConstants").NEW_ORDER_PREDEFINED_ID || ve === o("WAWebCTWAConstants").LEAD_PREDEFINED_ID) && Se && (Le.current = !0, new (o("WAWebAutomaticEventsUserJourneyWamEvent")).AutomaticEventsUserJourneyWamEvent({
				surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.LABEL_DETAILS,
				smbUserActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW,
				automaticEventsTargetComponent: o("WAWebWamEnumAutomaticEventsTargetComponentEnum").AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM.LEARN_MORE
			}).commit());
		}, [
			E,
			ve,
			Se,
			Re
		]);
		var Ee = E && Re && (ve === o("WAWebCTWAConstants").NEW_ORDER_PREDEFINED_ID || ve === o("WAWebCTWAConstants").LEAD_PREDEFINED_ID) && m.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: [y.educationalTextPadding, y.paddingHoriz24],
			children: m.jsxs(o("WAWebText.react").WAWebTextMuted, { children: [
				s._(
					/*BTDS*/
					""
				),
				" ",
				m.jsx(r("WAWebClickableLink.react"), {
					onClick: function() {
						o("WAWebModalManager").ModalManager.open(m.jsx(r("WAWebDOIntroPopup.react"), {
							onContinue: function() {
								be(), o("WAWebModalManager").ModalManager.close();
							},
							surfaceType: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.LABEL_DETAILS
						})), new (o("WAWebAutomaticEventsUserJourneyWamEvent")).AutomaticEventsUserJourneyWamEvent({
							surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.LABEL_DETAILS,
							smbUserActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
							automaticEventsTargetComponent: o("WAWebWamEnumAutomaticEventsTargetComponentEnum").AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM.LEARN_MORE
						}).commit();
					},
					children: r("WAWebFbtCommon")("Learn more")
				})
			] })
		}), ke = T ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), Ie = x != null ? o("WAWebListUtils").getPresetListLocalizedName(x.type) : null, Te = Ie != null ? Ie : s._(
			/*BTDS*/
			""
		), De = w ? Te : s._(
			/*BTDS*/
			""
		), xe = T ? De : s._(
			/*BTDS*/
			""
		), $e = y.chatsListPadding, Pe = T && u != null && !M && !w && m.jsx(r("WDSMenuBarItem.react"), {
			testid: "edit-list-menu-button",
			icon: r("WDSIconIcMoreVert.react"),
			title: s._(
				/*BTDS*/
				""
			),
			wdsMenuToRender: m.jsx(r("WDSMenu.react"), { children: m.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcDelete.react"),
				title: s._(
					/*BTDS*/
					""
				),
				onPress: function() {
					return o("WAWebListsUtil").openListDeleteConfirmPopup(o("WAWebNonEmptyString").asNonEmptyString(u), l, p);
				},
				destructive: !0,
				testid: "mi-delete-list"
			}) }),
			menuAlign: "end"
		}), Ne;
		return M ? Ne = m.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: [
				y.inputRowPadding,
				y.paddingHoriz24,
				y.noShrink
			],
			children: [m.jsx(r("WAWebListIcon.react"), {
				color: (x == null ? void 0 : x.colorIndex) != null ? o("WAWebListUtils").colorIndexToHex(x.colorIndex) : null,
				size: 16
			}), m.jsx("span", {
				className: "x1lkfr7t xo1l8bm x12w63v0",
				children: x == null ? void 0 : x.name
			})]
		}) : Ne = m.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: y.noShrink,
			children: m.jsx("div", {
				className: "xh8yej3",
				children: m.jsx(r("WAWebLabelEditInput.react"), {
					editable: !w,
					label: x,
					initialName: B != null ? B : void 0,
					initialColorIndex: U != null ? U : void 0,
					onSave: w ? r("WAWebNoop") : ae,
					onCancel: r("WAWebNoop"),
					listsFlow: !0,
					rowTheme: E ? "create-new-list-smb" : "create-new-list-consumer",
					entryPoint: null
				}, K)
			})
		}), m.jsxs(r("WAWebDrawer.react"), {
			ref: a,
			theme: "settings",
			testid: "create-new-list-drawer-container",
			tsNavigationData: { surface: "smb-lists-create" },
			children: [m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				testid: "create-new-list-drawer-header",
				onBack: pe,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				title: xe,
				children: Pe
			}), m.jsxs(r("WAWebDrawerBody.react"), {
				flatListControllers: [re],
				children: [
					ye || w ? null : Ne,
					F != null && m.jsx("div", {
						className: "xb0esv5 xyo0t3i x1p57kb1 x2lah0s",
						children: m.jsx(r("WDSBanner.react"), {
							type: "tip",
							body: F,
							testid: "preset-list-helper-banner"
						})
					}),
					Ee,
					!T && E && !Y && m.jsx(r("WAWebSuggestedLists.react"), {
						filterText: te,
						onSelect: ie,
						suggestedListTheme: "list-creation-drawer"
					}),
					m.jsx(r("WAWebDrawerSection.react"), {
						title: s._(
							/*BTDS*/
							""
						),
						theme: "list-section",
						animation: !1,
						xstyle: [!Ee && y.sectionHeaderTopPadding, y.noShrink],
						titleXStyle: y.sectionHeader
					}),
					(!w || A) && m.jsx(o("WAWebFlex.react").FlexRow, {
						align: "center",
						xstyle: y.noShrink,
						children: m.jsx("div", {
							className: "xh8yej3 xuzvuw4",
							children: m.jsx(r("WAWebCellFrame.react"), {
								testid: "list-add-chats-button",
								theme: "label-selection-new-label",
								onClick: ue,
								focusable: !0,
								tabIndex: 0,
								tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
								image: m.jsx("div", {
									className: "x78zum5 x6s0dn4 xl56j7k x100vrsf x16wdlz0 xt8t1vi x1xc408v x129tdwq x15urzxu xfn3atn x1pse0pq x1ypdohk x1m2oepg",
									children: m.jsx(r("WDSIconIcAdd.react"), { viewBox: {
										x: 3,
										y: 3,
										width: 18,
										height: 18
									} })
								}),
								primary: T ? s._(
									/*BTDS*/
									""
								) : s._(
									/*BTDS*/
									""
								)
							})
						})
					}),
					m.jsx("div", {
						className: "xe2zdcy xvtqlqk",
						children: m.jsx(o("WAWebFlatList.react").FlatList, {
							"aria-label": s._(
								/*BTDS*/
								""
							),
							testid: "new-list-chat-list",
							data: ge,
							renderItem: fe,
							flatListController: re,
							direction: "vertical",
							role: "grid",
							"aria-rowcount": G.length
						})
					}),
					(!w || A) && m.jsx(o("WAWebFlex.react").FlexRow, {
						xstyle: [
							y.ctaPadding,
							y.buttonPadding,
							y.noShrink
						],
						children: m.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
							testid: "list-save-button",
							onClick: se,
							spinner: R,
							disabled: he(),
							children: ke
						})
					}),
					o("WAWebListUtils").isDisableablePresetList(x == null ? void 0 : x.type) && m.jsx(o("WAWebFlex.react").FlexRow, {
						xstyle: y.disableButtonRow,
						children: m.jsx(r("WDSButton.react"), {
							variant: "borderless",
							widthMode: "constrained",
							size: "small",
							type: "destructive",
							testid: "disable-preset-list-button",
							label: s._(
								/*BTDS*/
								""
							),
							onPress: oe
						})
					})
				]
			})]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = o("react-compiler-runtime").c(28), n = e.chat, a = e.disableRemove, i = e.onRemove, l = e.showRemove, c;
		t[0] !== n || t[1] !== i ? (c = function() {
			i(n);
		}, t[0] = n, t[1] = i, t[2] = c) : c = t[2];
		var d = c, p;
		t[3] !== n.id ? (p = m.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: n.id,
			size: 40,
			waitIdle: !0
		}), t[3] = n.id, t[4] = p) : p = t[4];
		var _ = p, f;
		t[5] !== n || t[6] !== _ ? (f = o("WAWebChatGetters").getIsGroup(n) ? m.jsx(r("WAWebGroupChatImage.react"), {
			chat: n,
			regularChatImage: _,
			showCommunityInfo: !1,
			size: 40,
			theme: o("WAWebStackedCirclesImage.react").SubgroupImageTheme.CHAT_LIST
		}) : _, t[5] = n, t[6] = _, t[7] = f) : f = t[7];
		var g = f, h = n.contact, C;
		if (o("WAWebChatGetters").getIsGroup(n)) {
			var b;
			t[8] !== n ? (b = m.jsx(o("WAWebName.react").Name, {
				chat: n,
				ellipsify: !0,
				titlify: !0
			}), t[8] = n, t[9] = b) : b = t[9], C = b;
		} else {
			var v;
			t[10] !== h ? (v = h != null ? m.jsx(o("WAWebName.react").Name, {
				contact: h,
				ellipsify: !0,
				showBusinessCheckmark: o("WAWebContactGetters").getShowBusinessCheckmarkAsPrimary(h),
				titlify: !0,
				you: !0
			}) : null, t[10] = h, t[11] = v) : v = t[11], C = v;
		}
		var S;
		t[12] !== g ? (S = m.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "chat-cell-image",
			children: g
		}), t[12] = g, t[13] = S) : S = t[13];
		var R;
		t[14] !== C ? (R = m.jsx(o("WAWebText.react").WAWebTextTitle, { children: C }), t[14] = C, t[15] = R) : R = t[15];
		var L;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (L = (u || (u = r("stylex"))).props(y.mutedTextColor, o("WDSFontTokenStyles").WDSFontTokenStyles.Body2), t[16] = L) : L = t[16];
		var E;
		t[17] !== n ? (E = m.jsx("span", babelHelpers.extends({}, L, { children: m.jsx(r("WAWebChatstateInfo.react"), { chat: n }) })), t[17] = n, t[18] = E) : E = t[18];
		var k;
		t[19] !== a || t[20] !== d || t[21] !== l ? (k = l ? m.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcDelete.react"),
			variant: "borderless",
			size: "small",
			type: "destructive",
			onPress: d,
			disabled: a,
			"aria-label": s._(
				/*BTDS*/
				""
			),
			testid: "remove-chat-from-list"
		}) : null, t[19] = a, t[20] = d, t[21] = l, t[22] = k) : k = t[22];
		var I;
		return t[23] !== S || t[24] !== R || t[25] !== E || t[26] !== k ? (I = m.jsx(r("WAWebCellV2.react"), {
			size: "medium",
			interactive: !1,
			detailLeft: S,
			primary: R,
			secondary: E,
			detailRight: k
		}), t[23] = S, t[24] = R, t[25] = E, t[26] = k, t[27] = I) : I = t[27], I;
	}
	l.default = v;
}), 226);
