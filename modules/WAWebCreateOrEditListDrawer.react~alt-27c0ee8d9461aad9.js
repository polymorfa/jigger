__d("WAWebCreateOrEditListDrawer.react", [
	"fbt",
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
	"isStringNullOrEmpty",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebNux",
	"useWAWebOnUnmount"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useMemo, f = m.useRef, g = m.useState, h = {
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
	function y() {
		var e = o("react-compiler-runtime").c(2), t = g(C), n = t[0], a;
		e[0] !== n ? (a = function() {
			n != null && document.body != null && document.body.contains(n) && n.focus();
		}, e[0] = n, e[1] = a) : a = e[1], r("useWAWebOnUnmount")(a);
	}
	function C() {
		var e = document.activeElement;
		return e instanceof HTMLElement ? e : null;
	}
	function b(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e);
		y();
		var i = a.entryPoint, l = a.listId, u = a.onBack, c = a.onClose, m = a.preselectedChats, C = g(!1), b = C[0], S = C[1], R = o("WAWebMobilePlatforms").isSMB(), L = o("WDSToast.react").useWDSToast(), E = L.showToast, k = l != null, I = _(function() {
			if (l == null) {
				var e = m != null ? [].concat(m) : [];
				return [
					null,
					e,
					null,
					null
				];
			}
			var t = o("WAWebLabelCollection").LabelCollection.get(l);
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
		}, [l, m]), T = I[0], D = I[1], x = I[2], $ = I[3], P = R && o("WAWebListsGatingUtils").isListsEnabled() && (T == null ? void 0 : T.isImmutable) === !0, N = o("WAWebListUtils").isBuiltInList(T == null ? void 0 : T.type) || o("WAWebListUtils").isAiList(T == null ? void 0 : T.type), M = (T == null ? void 0 : T.type) === o("WAWebSchemaLabel").ListType.FAVORITES, w = o("WAWebListUtils").getPresetListHelperText(T == null ? void 0 : T.type), A = g(x), F = A[0], O = A[1], B = g($), W = B[0], q = B[1], U = g(D), V = U[0], H = U[1], G = g(0), z = G[0], j = G[1], K = g(!1), Q = K[0], X = K[1], Y = f(!1), J = g(""), Z = J[0], ee = J[1], te = _(function() {
			return new (r("WAWebFlatListController"))();
		}, []);
		p(function() {
			k || o("WAWebListsLogging").logListUpdateUserJorney({
				listAction: o("WAWebWamEnumListAction").LIST_ACTION.CREATE,
				userJorneyAction: o("WAWebWamEnumListUpdateUserJourneyAction").LIST_UPDATE_USER_JOURNEY_ACTION.START,
				entryPoint: i
			});
		}, [k, i]), p(function() {
			k && l != null ? o("WAWebWamSmbListEventReporter").logSmbListEvent({
				labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.VIEW,
				labelTarget: o("WAWebWamEnumLabelTargets").LABEL_TARGETS.EDIT_LABEL_DIALOG,
				updateEntryPoint: i,
				listId: Number(l)
			}) : k || o("WAWebWamSmbListEventReporter").logSmbListEvent({
				labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.VIEW,
				labelTarget: o("WAWebWamEnumLabelTargets").LABEL_TARGETS.ADD_LABEL_DIALOG,
				updateEntryPoint: i
			});
		}, [
			k,
			l,
			i
		]);
		var ne = function() {
			T != null && o("WAWebListsUtil").openListDisableConfirmPopup(T, c);
		}, re = function(t, n) {
			O((t || "").trim()), q(n), R && (ee(t), (t != null ? t : "").trim() !== (F != null ? F : "") && (X(!1), Y.current = !1));
		}, oe = function(t) {
			var e, n;
			O((e = (n = t.displayName) == null ? void 0 : n.toString()) != null ? e : t.name), q(t.colorIndex), X(!0), Y.current = !0, j(function(e) {
				return e + 1;
			}), o("WAWebWamSmbListEventReporter").logSmbListEvent({
				labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.SUGGESTION_CLICKED,
				updateEntryPoint: i,
				predefinedId: t.predefinedId
			});
		}, ae = async function() {
			if (!o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()) return !1;
			var e = o("WAWebListsUtil").getTwoArraysDifference(D, V), t = e.addedItems, n = e.removedItems;
			if (t.length === 0 && n.length === 0) return !1;
			if (t.length > 0) {
				var r, a = await o("WAWebDBFavoriteDatabaseApi").getAllFavorites(), i = (r = o("WAWebABProps").getABPropConfigValue("favorites_limit")) != null ? r : 100, l = a.length - n.length + t.length;
				if (l > i) return o("WAWebAddToFavoritesAction").showFavoritesLimitExceededPopup(i), !1;
			}
			return await n.reduce(function(e, t) {
				return e.then(function() {
					return o("WAWebRemoveFromFavoritesAction").removeFromFavoritesAction(t.id, {
						suppressToast: !0,
						entryPoint: o("WAWebWamEnumFavoritesUpdateEntryPoint").FAVORITES_UPDATE_ENTRY_POINT.FILTER_MANAGE_FAVORITE_ACTION
					});
				});
			}, Promise.resolve()), t.length > 0 && await o("WAWebAddToFavoritesAction").addToFavoritesAction(t.map(function(e) {
				return e.id;
			}), {
				suppressToast: !0,
				entryPoint: o("WAWebWamEnumFavoritesUpdateEntryPoint").FAVORITES_UPDATE_ENTRY_POINT.FILTER_MANAGE_FAVORITE_ACTION
			}), E({
				type: "success",
				message: s._(
					/*BTDS*/
					""
				)
			}), !0;
		}, ie = async function() {
			if (F != null) {
				S(!0);
				try {
					var e;
					if (l != null && T != null) if (M) {
						var t = await ae();
						if (!t) return;
					} else {
						var n = F !== T.name || W !== T.colorIndex;
						await o("WAWebListsActions").editListAction({
							newName: F,
							newColor: W,
							labelModel: T,
							updatedAssociatedChats: V,
							entryPoint: i
						}), n && E({
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
							updateEntryPoint: i,
							smbListSurface: o("WAWebWamEnumSmbListSurfaceType").SMB_LIST_SURFACE_TYPE.NEW_LIST,
							smbListFeatureName: o("WAWebWamEnumSmbListFeatureNameType").SMB_LIST_FEATURE_NAME_TYPE.LISTS_CREATION,
							userActionTarget: "toolbar_done_button",
							extraAttributes: JSON.stringify({ is_suggestion: Y.current })
						});
						var r = await o("WAWebListsActions").createNewListAction({
							chats: V,
							color: W,
							entryPoint: i,
							name: F
						});
						e = r != null ? String(r) : void 0, r != null && (o("WAWebListsLogging").logListUpdateUserJorney({
							listId: "" + r,
							listAction: o("WAWebWamEnumListAction").LIST_ACTION.CREATE,
							userJorneyAction: o("WAWebWamEnumListUpdateUserJourneyAction").LIST_UPDATE_USER_JOURNEY_ACTION.CREATE_LIST,
							entryPoint: i
						}), V.length > 0 ? o("WAWebCmd").Cmd.trigger("set_active_filter", o("WAWebChatSearchFilters").SearchFilters.LABELS, String(r)) : E({
							type: "success",
							message: s._(
								/*BTDS*/
								""
							)
						}));
					}
					c(e);
				} finally {
					S(!1);
				}
			}
		}, le = function() {
			o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebAddToListModal.react"), {
				preselectedChats: V,
				isEditMode: k,
				onClose: function(t) {
					H(t), o("WAWebModalManager").ModalManager.close();
				}
			}));
		}, se = T == null ? void 0 : T.name, ue = T == null ? void 0 : T.colorIndex, ce = function() {
			if (k) {
				if (!P && (F !== se || R && W !== ue)) return !0;
				var e = o("WAWebListsUtil").getTwoArraysDifference(D, V), t = e.addedItems, n = e.removedItems;
				return t.length > 0 || n.length > 0;
			}
			return !r("isStringNullOrEmpty")(F) || V.length > 0;
		}, de = function() {
			ce() ? o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebOrderConfirmDiscardModal"), { onOK: u })) : u();
		}, me = function(t) {
			H(function(e) {
				return e.filter(function(e) {
					return e !== t;
				});
			});
		}, pe = function(t) {
			return d.jsx(v, {
				chat: t.data,
				onRemove: me,
				showRemove: !N || M,
				disableRemove: V.length <= 1 && !R && !M
			});
		}, _e = V.map(function(e) {
			return {
				itemKey: "chat-" + e.id.toString(),
				data: e
			};
		}), fe = _(function() {
			return function() {
				if (b) return !0;
				if (k) {
					if (!P) {
						if (r("isStringNullOrEmpty")(F) || F !== se && o("WAWebListNameValidation").isListNameDuplicate(F)) return !0;
						if (F !== se || R && W !== ue) return !1;
					}
					if (D.length !== V.length) return !1;
					var e = o("WAWebListsUtil").getTwoArraysDifference(D, V), t = e.addedItems, n = e.removedItems;
					return t.length === 0 && n.length === 0;
				}
				var a = R && W == null, i = R ? 0 : 1;
				return r("isStringNullOrEmpty")(F) || o("WAWebListNameValidation").isListNameDuplicate(F) || V.length < i || a;
			};
		}, [
			b,
			k,
			F,
			W,
			R,
			P,
			ue,
			se,
			V,
			D
		]), ge = l != null && T == null, he = r("useWAWebNux")(o("WAWebNux").NUX.DO_AUTOMATIC_LABEL), ye = he[1], Ce = T == null ? void 0 : T.predefinedId, be = V.length > 0, ve = o("WAWebUserPrefsGeneral").getDetectedOutcomeOnboardingStatus(), Se = f(!1);
		p(function() {
			!Se.current && R && ve && (Ce === o("WAWebCTWAConstants").NEW_ORDER_PREDEFINED_ID || Ce === o("WAWebCTWAConstants").LEAD_PREDEFINED_ID) && be && (Se.current = !0, new (o("WAWebAutomaticEventsUserJourneyWamEvent")).AutomaticEventsUserJourneyWamEvent({
				surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.LABEL_DETAILS,
				smbUserActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW,
				automaticEventsTargetComponent: o("WAWebWamEnumAutomaticEventsTargetComponentEnum").AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM.LEARN_MORE
			}).commit());
		}, [
			R,
			Ce,
			be,
			ve
		]);
		var Re = R && ve && (Ce === o("WAWebCTWAConstants").NEW_ORDER_PREDEFINED_ID || Ce === o("WAWebCTWAConstants").LEAD_PREDEFINED_ID) && d.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: [h.educationalTextPadding, h.paddingHoriz24],
			children: d.jsxs(o("WAWebText.react").WAWebTextMuted, { children: [
				s._(
					/*BTDS*/
					""
				),
				" ",
				d.jsx(r("WAWebClickableLink.react"), {
					onClick: function() {
						o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebDOIntroPopup.react"), {
							onContinue: function() {
								ye(), o("WAWebModalManager").ModalManager.close();
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
		}), Le = k ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), Ee = T != null ? o("WAWebListUtils").getPresetListLocalizedName(T.type) : null, ke = Ee != null ? Ee : s._(
			/*BTDS*/
			""
		), Ie = N ? ke : s._(
			/*BTDS*/
			""
		), Te = k ? Ie : s._(
			/*BTDS*/
			""
		), De = h.chatsListPadding, xe = k && l != null && !P && !N && d.jsx(r("WDSMenuBarItem.react"), {
			testid: "edit-list-menu-button",
			icon: r("WDSIconIcMoreVert.react"),
			title: s._(
				/*BTDS*/
				""
			),
			wdsMenuToRender: d.jsx(r("WDSMenu.react"), { children: d.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcDelete.react"),
				title: s._(
					/*BTDS*/
					""
				),
				onPress: function() {
					return o("WAWebListsUtil").openListDeleteConfirmPopup(o("WAWebNonEmptyString").asNonEmptyString(l), i, c);
				},
				destructive: !0,
				testid: "mi-delete-list"
			}) }),
			menuAlign: "end"
		}), $e;
		return P ? $e = d.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: [
				h.inputRowPadding,
				h.paddingHoriz24,
				h.noShrink
			],
			children: [d.jsx(r("WAWebListIcon.react"), {
				color: (T == null ? void 0 : T.colorIndex) != null ? o("WAWebListUtils").colorIndexToHex(T.colorIndex) : null,
				size: 16
			}), d.jsx("span", {
				className: "x1lkfr7t xo1l8bm x12w63v0",
				children: T == null ? void 0 : T.name
			})]
		}) : $e = d.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: h.noShrink,
			children: d.jsx("div", {
				className: "xh8yej3",
				children: d.jsx(r("WAWebLabelEditInput.react"), {
					editable: !N,
					label: T,
					initialName: F != null ? F : void 0,
					initialColorIndex: W != null ? W : void 0,
					onSave: N ? r("WAWebNoop") : re,
					onCancel: r("WAWebNoop"),
					listsFlow: !0,
					rowTheme: R ? "create-new-list-smb" : "create-new-list-consumer",
					entryPoint: null
				}, z)
			})
		}), d.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			theme: "settings",
			testid: "create-new-list-drawer-container",
			tsNavigationData: { surface: "smb-lists-create" },
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				testid: "create-new-list-drawer-header",
				onBack: de,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				title: Te,
				children: xe
			}), d.jsxs(r("WAWebDrawerBody.react"), {
				flatListControllers: [te],
				children: [
					ge || N ? null : $e,
					w != null && d.jsx("div", {
						className: "xb0esv5 xyo0t3i x1p57kb1 x2lah0s",
						children: d.jsx(r("WDSBanner.react"), {
							type: "tip",
							body: w,
							testid: "preset-list-helper-banner"
						})
					}),
					Re,
					!k && R && !Q && d.jsx(r("WAWebSuggestedLists.react"), {
						filterText: Z,
						onSelect: oe,
						suggestedListTheme: "list-creation-drawer"
					}),
					d.jsx(r("WAWebDrawerSection.react"), {
						title: s._(
							/*BTDS*/
							""
						),
						theme: "list-section",
						animation: !1,
						xstyle: [!Re && h.sectionHeaderTopPadding, h.noShrink],
						titleXStyle: h.sectionHeader
					}),
					(!N || M) && d.jsx(o("WAWebFlex.react").FlexRow, {
						align: "center",
						xstyle: h.noShrink,
						children: d.jsx("div", {
							className: "xh8yej3 xuzvuw4",
							children: d.jsx(r("WAWebCellFrame.react"), {
								testid: "list-add-chats-button",
								theme: "label-selection-new-label",
								onClick: le,
								focusable: !0,
								tabIndex: 0,
								tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
								image: d.jsx("div", {
									className: "x78zum5 x6s0dn4 xl56j7k x100vrsf x16wdlz0 xt8t1vi x1xc408v x129tdwq x15urzxu xfn3atn x1pse0pq x1ypdohk x1m2oepg",
									children: d.jsx(r("WDSIconIcAdd.react"), { viewBox: {
										x: 3,
										y: 3,
										width: 18,
										height: 18
									} })
								}),
								primary: k ? s._(
									/*BTDS*/
									""
								) : s._(
									/*BTDS*/
									""
								)
							})
						})
					}),
					d.jsx("div", {
						className: "xe2zdcy xvtqlqk",
						children: d.jsx(o("WAWebFlatList.react").FlatList, {
							"aria-label": s._(
								/*BTDS*/
								""
							),
							testid: "new-list-chat-list",
							data: _e,
							renderItem: pe,
							flatListController: te,
							direction: "vertical",
							role: "grid",
							"aria-rowcount": V.length
						})
					}),
					(!N || M) && d.jsx(o("WAWebFlex.react").FlexRow, {
						xstyle: [
							h.ctaPadding,
							h.buttonPadding,
							h.noShrink
						],
						children: d.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
							testid: "list-save-button",
							onClick: ie,
							spinner: b,
							disabled: fe(),
							children: Le
						})
					}),
					o("WAWebListUtils").isDisableablePresetList(T == null ? void 0 : T.type) && d.jsx(o("WAWebFlex.react").FlexRow, {
						xstyle: h.disableButtonRow,
						children: d.jsx(r("WDSButton.react"), {
							variant: "borderless",
							widthMode: "constrained",
							size: "small",
							type: "destructive",
							testid: "disable-preset-list-button",
							label: s._(
								/*BTDS*/
								""
							),
							onPress: ne
						})
					})
				]
			})]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = o("react-compiler-runtime").c(28), n = e.chat, a = e.disableRemove, i = e.onRemove, l = e.showRemove, c;
		t[0] !== n || t[1] !== i ? (c = function() {
			i(n);
		}, t[0] = n, t[1] = i, t[2] = c) : c = t[2];
		var m = c, p;
		t[3] !== n.id ? (p = d.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: n.id,
			size: 40,
			waitIdle: !0
		}), t[3] = n.id, t[4] = p) : p = t[4];
		var _ = p, f;
		t[5] !== n || t[6] !== _ ? (f = o("WAWebChatGetters").getIsGroup(n) ? d.jsx(r("WAWebGroupChatImage.react"), {
			chat: n,
			regularChatImage: _,
			showCommunityInfo: !1,
			size: 40,
			theme: o("WAWebStackedCirclesImage.react").SubgroupImageTheme.CHAT_LIST
		}) : _, t[5] = n, t[6] = _, t[7] = f) : f = t[7];
		var g = f, y = n.contact, C;
		if (o("WAWebChatGetters").getIsGroup(n)) {
			var b;
			t[8] !== n ? (b = d.jsx(o("WAWebName.react").Name, {
				chat: n,
				ellipsify: !0,
				titlify: !0
			}), t[8] = n, t[9] = b) : b = t[9], C = b;
		} else {
			var v;
			t[10] !== y ? (v = y != null ? d.jsx(o("WAWebName.react").Name, {
				contact: y,
				ellipsify: !0,
				showBusinessCheckmark: o("WAWebContactGetters").getShowBusinessCheckmarkAsPrimary(y),
				titlify: !0,
				you: !0
			}) : null, t[10] = y, t[11] = v) : v = t[11], C = v;
		}
		var S;
		t[12] !== g ? (S = d.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "chat-cell-image",
			children: g
		}), t[12] = g, t[13] = S) : S = t[13];
		var R;
		t[14] !== C ? (R = d.jsx(o("WAWebText.react").WAWebTextTitle, { children: C }), t[14] = C, t[15] = R) : R = t[15];
		var L;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (L = (u || (u = r("stylex"))).props(h.mutedTextColor, o("WDSFontTokenStyles").WDSFontTokenStyles.Body2), t[16] = L) : L = t[16];
		var E;
		t[17] !== n ? (E = d.jsx("span", babelHelpers.extends({}, L, { children: d.jsx(r("WAWebChatstateInfo.react"), { chat: n }) })), t[17] = n, t[18] = E) : E = t[18];
		var k;
		t[19] !== a || t[20] !== m || t[21] !== l ? (k = l ? d.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcDelete.react"),
			variant: "borderless",
			size: "small",
			type: "destructive",
			onPress: m,
			disabled: a,
			"aria-label": s._(
				/*BTDS*/
				""
			),
			testid: "remove-chat-from-list"
		}) : null, t[19] = a, t[20] = m, t[21] = l, t[22] = k) : k = t[22];
		var I;
		return t[23] !== S || t[24] !== R || t[25] !== E || t[26] !== k ? (I = d.jsx(r("WAWebCellV2.react"), {
			size: "medium",
			interactive: !1,
			detailLeft: S,
			primary: R,
			secondary: E,
			detailRight: k
		}), t[23] = S, t[24] = R, t[25] = E, t[26] = k, t[27] = I) : I = t[27], I;
	}
	l.default = b;
}), 226);
