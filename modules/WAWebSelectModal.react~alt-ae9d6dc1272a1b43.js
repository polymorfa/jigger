__d("WAWebSelectModal.react", [
	"fbt",
	"$InternalEnum",
	"Promise",
	"WAWebBizMultiSelectProductList.react",
	"WAWebBotUtils",
	"WAWebChatContact.react",
	"WAWebChatListSearch.react",
	"WAWebChatModel",
	"WAWebContactCollection",
	"WAWebContactCollectionUtils",
	"WAWebContactComparator",
	"WAWebContactModel",
	"WAWebContactUtils",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebFbtCommon",
	"WAWebFindChatAction",
	"WAWebFlatListController",
	"WAWebFocusTracer",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebMultiSelectChatList.react",
	"WAWebMultiSelectContactList.react",
	"WAWebMultiSelection",
	"WAWebOutContactModel",
	"WAWebOutContactPillItem.react",
	"WAWebSelectAllMenuBarItem.react",
	"WAWebSelectModalFooter.react",
	"WAWebSelectModalSearchBox.react",
	"WAWebSelectModalSelectedChatList.react",
	"WAWebShareContentUserJourneyLogger",
	"WAWebSingleSelection",
	"WAWebSpinner.react",
	"WAWebUsernameGatingUtils",
	"WAWebUsernameSearchPlaceholder",
	"WAWebWid",
	"WAWebWidFactory",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useLazyRef",
	"useVisibility"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d, m = d || (d = o("react")), p = d, _ = p.useEffect, f = p.useImperativeHandle, g = p.useMemo, h = p.useRef, y = p.useState, C = n("$InternalEnum").Mirrored([
		"ChatSelectModal",
		"ContactSelectModal",
		"ParticipantManageModal",
		"ProductSelectModal"
	]), b = {
		footer: {
			boxShadow: "xpx74rz",
			$$css: !0
		},
		spinner: {
			justifyContent: "xl56j7k",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		pillContainer: {
			display: "x78zum5",
			flexWrap: "x1a02dak",
			maxHeight: "x1aoj0v",
			overflowX: "xw2csxc",
			overflowY: "x1odjw0f",
			backgroundColor: "x1280gxy",
			$$css: !0
		}
	};
	function v(e) {
		return e != null ? e : o("WAWebContactCollectionUtils").getFilteredContacts(o("WAWebContactCollection").ContactCollection, {});
	}
	function S(e) {
		var t = e.activeRef, n = e.flatListControllerRef, a = e.handleLeaveList, i = e.handleSelectionChanged, l = e.handleUsernameContactRowClicked, s = e.listRef, u = e.onLoading, c = e.outContactSelections, d = e.props, p = e.searchText, _ = e.selectionsRef, f = e.updateSelectedContactsState;
		switch (d.listType) {
			case C.ChatSelectModal: {
				var g, h, y, b = d.getInitialItems, S = _;
				return m.jsx(r("WAWebMultiSelectChatList.react"), {
					ref: s,
					excludeChat: d.excludeChat,
					getInitialItems: b,
					searchText: p,
					active: t,
					selections: S,
					maxChats: d.maxItems,
					maxChatsExceedErrorMsg: d.maxItemsExceedErrorMsg,
					onLeaveList: a,
					onSelectionChanged: i,
					hasFrequentlyForwarded: d.hasFrequentlyForwarded,
					hasForwarded: d.hasForwarded,
					flatListController: n,
					isDisabled: d.isDisabled,
					ephemeralIcon: d.ephemeralIcon,
					customItemSecondaryText: d.customItemSecondaryText,
					onChatsLoaded: d.onDataLoaded,
					excludeContacts: d.excludeContacts,
					includeNewsletters: d.includeNewsletters,
					chatFilter: d.chatFilter,
					contactFilter: d.contactFilter,
					includeMetaAi: (g = d.includeMetaAi) != null ? g : !1,
					includeHatch: (h = d.includeHatch) != null ? h : !1,
					includeMyStatus: (y = d.includeMyStatus) != null ? y : !1,
					onEditStatusAudience: d.onEditStatusAudience
				});
			}
			case C.ParticipantManageModal:
			case C.ContactSelectModal: {
				var R = d.getInitialItems, L = _;
				return m.jsx(o("WAWebMultiSelectContactList.react").MultiSelectContactList, {
					handleUsernameContactRowClicked: l,
					ref: s,
					customGetKnownContacts: d.customGetKnownContacts,
					contacts: v(d.contacts),
					includeYouSection: d.includeYouSection,
					getInitialItems: R,
					searchText: p,
					active: t,
					selections: L,
					maxContacts: d.maxItems,
					maxContactsExceedErrorMsg: d.maxItemsExceedErrorMsg,
					onLeaveList: a,
					onSelectionChanged: i,
					isDisabled: d.isDisabled,
					isSelected: d.isSelected,
					customSecondaryText: d.customSecondaryText,
					allowBlockedContacts: d.allowBlockedContacts,
					flatListController: n,
					allowUnknownContactSearch: d.allowUnknownContactSearch,
					noResultsText: d.noResultsText,
					onLoading: u,
					outContacts: d.outContacts,
					outContactInviteEntryPoint: d.outContactInviteEntryPoint,
					outContactSelections: c,
					updateSelectedContactsState: f,
					targetWindow: d.targetWindow
				});
			}
			case C.ProductSelectModal: {
				var E = _;
				return m.jsx(r("WAWebBizMultiSelectProductList.react"), {
					ref: s,
					flatListController: n,
					active: t,
					selections: E,
					onSelectionChanged: i,
					onProductsLoaded: d.onDataLoaded
				});
			}
		}
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t = e.previewComponent, n = e.selectionsRef, a = y([]), i = a[0], l = a[1];
		_(function() {
			var e = n.current, t = function() {
				var t = e.getSelected();
				l(t);
			};
			t();
			var r = function() {
				t();
			};
			return e.on("all", r), function() {
				e.off("all", r);
			};
		}, [n]);
		var s = i.length === 1, u = i[0];
		if (u == null || !s) return null;
		var c = !1;
		if (u.id != null) {
			var d = String(u.id);
			if (r("WAWebWid").isWid(d)) {
				var m = o("WAWebWidFactory").createWid(d);
				c = o("WAWebBotUtils").isMetaAiBot(m);
			}
		}
		return c ? t : null;
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(t) {
		var a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.activeWithoutSelection, d = i.disclaimer, p = i.enableSelectAll, L = i.getAnnouncementSummary, E = i.getInitialOutContacts, k = i.getSelectionSummary, I = i.groupWid, T = i.handleClearSelectedContacts, D = i.handleUsernameContactRowClicked, x = i.hasDirtyAppendMsgComposeBox, $ = x === void 0 ? !1 : x, P = i.hasForwarded, N = i.headerRightActionElement, M = i.hideFooter, w = M === void 0 ? !1 : M, A = i.isNonMediaForward, F = A === void 0 ? !1 : A, O = i.listType, B = i.loadingInitialItems, W = i.maxItems, q = i.multipleSelectionFooterType, U = i.onBack, V = i.onCancel, H = i.onConfirm, G = i.onOverlayClick, z = i.onSelectionChanged, j = i.previewComponent, K = i.shouldShowSelectedChatList, Q = K === void 0 ? !1 : K, X = i.shouldShowSelectionSummary, Y = i.singleSelectionFooterType, J = i.testid, Z = i.tsNavigationData, ee = i.updateSelectedContactsState, te = i.useShortName, ne = h(null), re = h(null), oe = h(null), ae = r("useVisibility")({ onVisible: function() {
			o("WAWebShareContentUserJourneyLogger").ShareContentUserJourneyLogger.contactPickerDisplayed();
		} }), ie = ae[0], le = r("useLazyRef")(function() {
			return new (r("WAWebSingleSelection"))([], function(e) {
				return e.id.toString();
			});
		}), se = r("useLazyRef")(function() {
			return new (r("WAWebMultiSelection"))([], function(e) {
				return e.id.toString();
			});
		}), ue = g(function() {
			return new (r("WAWebMultiSelection"))([], function(e) {
				return "" + e.id;
			});
		}, []), ce = r("useLazyRef")(function() {
			return new (r("WAWebFlatListController"))();
		}), de = y(""), me = de[0], pe = de[1], _e = y(!1), fe = _e[0], ge = _e[1], he = y(!1), ye = he[0], Ce = he[1], be = y(!1), ve = be[0], Se = be[1], Re = y([]), Le = Re[0], Ee = Re[1], ke = y([]), Ie = ke[0], Te = ke[1], De = g(function() {
			var e, t;
			return v(i.contacts).length + ((e = (t = i.outContacts) == null ? void 0 : t.length) != null ? e : 0);
		}, [i.contacts, i.outContacts]), xe = (i.getInitialItems ? i.getInitialItems().length !== 0 : !1) || (E ? E().length !== 0 : !1);
		_(function() {
			E && E().forEach(function(e) {
				ue.setVal(e, !0);
			});
		}, [E, ue]), _(function() {
			var e = se.current, t = function() {
				var t = e.getSelected(), n = ue.getSelected(), o = t.length + n.length;
				Ce(o > 0), Ee(n), Se(De > 0 && o === De), O === C.ParticipantManageModal && Te(t.filter(function(e) {
					return e instanceof r("WAWebContactModel");
				}));
			};
			t();
			var n = function() {
				t();
			}, o = function() {
				t();
			};
			return e.on("all", n), ue.on("all", o), function() {
				e.off("all", n), ue.off("all", o);
			};
		}, [
			O,
			se,
			ue,
			De
		]);
		var $e = function(t) {
			t && (t.preventDefault(), t.stopPropagation());
		};
		f(a, function() {
			return {
				handleFocusList: $e,
				getElement: function() {
					return ne.current;
				}
			};
		});
		var Pe = function(t) {
			le.current.setFirst(!0);
		}, Ne = function(t) {
			var e;
			(e = oe.current) != null && e.updateForScrollEvent && oe.current.updateForScrollEvent(t);
		}, Me = function(t) {
			le.current.unset();
		}, we = function(t) {
			r("WAWebFocusTracer").focus(re.current);
		}, Ae = function(t) {
			var e;
			(e = oe.current) == null || e.toggleFirst(!1);
		}, Fe = function() {
			var e = se.current.getSelected(), t = ue.getSelected(), a = !1;
			i.includeMyStatus === !0 && (a = e.some(function(e) {
				return e instanceof o("WAWebChatModel").Chat && e.id.isStatus();
			})), o("WAWebShareContentUserJourneyLogger").ShareContentUserJourneyLogger.recipientsSelected(e.length, a), O === C.ParticipantManageModal ? H({
				selectedItems: e.filter(function(e) {
					return e instanceof r("WAWebContactModel");
				}),
				outContacts: t
			}) : O === C.ContactSelectModal || O === C.ProductSelectModal ? H({ selectedItems: e }) : (c || (c = n("Promise"))).all(e.map(function(e) {
				return e instanceof r("WAWebContactModel") ? o("WAWebFindChatAction").findOrCreateLatestChat(e.id, "forwardSelectedModals").then(function(e) {
					var t = e.chat;
					return t;
				}) : e;
			})).then(function(e) {
				H({
					selectedItems: e,
					isSearchResult: !!me
				});
			});
		}, Oe = function(t, n) {
			var e;
			if ((e = re.current) == null || e.select(), z != null) {
				var r = se.current.getSelected();
				z({
					item: t,
					selected: n,
					selectedItems: r
				});
			}
		}, Be = function(t, n) {
			var e = se.current.getSelected(), r = e.find(function(e) {
				var t, r = (t = e.contact) != null ? t : e;
				return r.id.equals(n.id);
			});
			if (r != null) {
				if (se.current.setVal(r, !1), z != null) {
					var o = se.current.getSelected();
					z({
						item: n,
						selected: !1,
						selectedItems: o
					});
				}
				ee == null || ee(n, !0);
			}
		}, We = function() {
			var e;
			(e = oe.current) != null && e.selectAll && oe.current.selectAll();
		}, qe = function() {
			if (V != null) {
				var e = se.current.getSelected();
				V(e);
			} else o("WAWebModalManager").ModalManager.close();
			T == null || T(), o("WAWebShareContentUserJourneyLogger").ShareContentUserJourneyLogger.cancel();
		}, Ue = function() {
			if (p !== !0 || O !== C.ContactSelectModal) return !1;
			var e = v(i.contacts);
			return W == null || e.length <= W;
		}, Ve = function(t) {
			ue.setVal(t, !1);
		}, He = g(function() {
			var e = [].concat(Ie).sort(o("WAWebContactComparator").ContactComparator), t = [].concat(Le).sort(o("WAWebContactComparator").ContactComparator);
			return o("WAWebContactUtils").mergeSortedContacts(e, t);
		}, [Ie, Le]), Ge = O === C.ParticipantManageModal && He.length > 0 ? m.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(b.pillContainer, o("WDSPaddings.stylex").wdsPaddings.paddingTop20, o("WDSPaddings.stylex").wdsPaddings.paddingEnd24, o("WDSPaddings.stylex").wdsPaddings.paddingBottom4, o("WDSPaddings.stylex").wdsPaddings.paddingStart24), { children: He.map(function(e) {
			return e instanceof r("WAWebOutContactModel") ? m.jsx(r("WAWebOutContactPillItem.react"), {
				outContact: e,
				onDelete: Ve
			}, e.id.toString()) : m.jsx(o("WAWebChatContact.react").Contact, {
				contact: e,
				useShortName: te != null ? te : !1,
				onDelete: i.isDisabled != null && i.isDisabled(e) ? void 0 : Be,
				type: o("WAWebChatContact.react").ContactCellType.SMALL,
				theme: "list-names",
				waitIdle: !0,
				truncateName: !0
			}, e.id.toString());
		}) })) : null, ze = O === C.ChatSelectModal && Q ? m.jsx(r("WAWebSelectModalSelectedChatList.react"), {
			chats: se.current,
			onDelete: Be
		}) : null, je = function() {
			if (!$) {
				if (G != null) {
					G();
					return;
				}
				o("WAWebModalManager").ModalManager.existsSupportModal(function(e) {
					e ? o("WAWebModalManager").ModalManager.closeSupportModal() : o("WAWebModalManager").ModalManager.close();
				}), T == null || T();
			}
		}, Ke = O === C.ContactSelectModal ? s._(
			/*BTDS*/
			""
		) : null, Qe = O === C.ContactSelectModal ? s._(
			/*BTDS*/
			""
		) : null, Xe = U ? { onBack: U } : { onCancel: qe };
		return B === !0 ? m.jsx(o("WAWebModal.react").Modal, {
			tsNavigationData: Z != null ? Z : void 0,
			ref: ne,
			type: o("WAWebModal.react").ModalTheme.Tower,
			onOverlayClick: je,
			children: m.jsx(r("WAWebDrawer.react"), {
				testid: J != null ? J : "chat-modal",
				disableNavigationLogging: !0,
				xstyle: b.spinner,
				children: m.jsx(o("WAWebSpinner.react").Spinner, {})
			}, "chat-modal")
		}) : m.jsx(o("WAWebModal.react").Modal, {
			tsNavigationData: Z != null ? Z : void 0,
			ref: ne,
			type: o("WAWebModal.react").ModalTheme.Tower,
			onOverlayClick: je,
			children: m.jsxs(r("WAWebDrawer.react"), {
				ref: ie,
				testid: J != null ? J : "chat-modal",
				disableNavigationLogging: !0,
				children: [
					m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, babelHelpers.extends({
						menu: Ue() ? m.jsx(r("WAWebSelectAllMenuBarItem.react"), {
							isAllSelected: ve,
							onClick: We
						}) : null,
						title: i.title,
						type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
						rightActionElement: N
					}, Xe, { children: i.headerChildren })),
					m.jsx(r("WAWebSelectModalSearchBox.react"), babelHelpers.extends({
						ref: re,
						ariaLabel: Ke,
						setSearchText: pe,
						onDown: Pe,
						onEnter: Ae,
						onFocus: Me,
						enabled: i.enableSearchBox,
						placeholder: (i.allowUnknownContactSearch == null || i.allowUnknownContactSearch === !0) && o("WAWebUsernameGatingUtils").usernameContactlessChatEnabled() ? o("WAWebUsernameSearchPlaceholder").getUsernameSearchPlaceholder() : r("WAWebFbtCommon")("Search name or number"),
						showPlaceholderUntilType: !0,
						loading: fe
					}, P != null && { searchType: o("WAWebChatListSearch.react").ListSearchType.FORWARD_MSG_SEARCH }, { focusOnMount: !0 })),
					i.hideCustomHeaderWhenSelected === !0 && ye ? null : i.customHeader,
					ze,
					Ge,
					m.jsxs(r("WAWebDrawerBody.react"), {
						flatListControllers: [ce.current],
						onScroll: Ne,
						children: [i.scrollableHeader, m.jsx(S, {
							handleUsernameContactRowClicked: D,
							props: i,
							selectionsRef: se.current,
							activeRef: le.current,
							listRef: oe,
							flatListControllerRef: ce.current,
							searchText: me,
							handleLeaveList: we,
							handleSelectionChanged: Oe,
							onLoading: ge,
							outContactSelections: ue,
							updateSelectedContactsState: ee
						})]
					}),
					!F || j == null ? j : m.jsx(R, {
						previewComponent: j,
						selectionsRef: se
					}),
					!w && m.jsx(o("WAWebSelectModalFooter.react").SelectModalFooter, {
						singleSelectionType: Y,
						multipleSelectionType: q,
						selections: se.current,
						onForward: Fe,
						startActive: xe,
						getSelectionSummary: k,
						getAnnouncementSummary: L,
						shouldShowSelectionSummary: X,
						activeWithoutSelection: l,
						additionalSelectedCount: Le.length,
						listType: O,
						disclaimer: d,
						xstyle: j == null && b.footer,
						sendButtonAriaLabel: Qe,
						groupWid: I
					})
				]
			}, "chat-modal")
		});
	}
	L.displayName = L.name + " [from " + i.id + "]", l.ListType = C, l.SelectModal = L;
}), 226);
