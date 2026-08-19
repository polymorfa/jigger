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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(62), n = e.activeRef, a = e.flatListControllerRef, i = e.handleLeaveList, l = e.handleSelectionChanged, s = e.handleUsernameContactRowClicked, u = e.listRef, c = e.onLoading, d = e.outContactSelections, p = e.props, _ = e.searchText, f = e.selectionsRef, g = e.updateSelectedContactsState;
		switch (p.listType) {
			case C.ChatSelectModal: {
				var h, y, b, S = p.getInitialItems, R = f, L = (h = p.includeMetaAi) != null ? h : !1, E = (y = p.includeHatch) != null ? y : !1, k = (b = p.includeMyStatus) != null ? b : !1, I;
				return t[0] !== n || t[1] !== a || t[2] !== S || t[3] !== i || t[4] !== l || t[5] !== u || t[6] !== p.chatFilter || t[7] !== p.contactFilter || t[8] !== p.customItemSecondaryText || t[9] !== p.ephemeralIcon || t[10] !== p.excludeChat || t[11] !== p.excludeContacts || t[12] !== p.hasForwarded || t[13] !== p.hasFrequentlyForwarded || t[14] !== p.includeNewsletters || t[15] !== p.isDisabled || t[16] !== p.maxItems || t[17] !== p.maxItemsExceedErrorMsg || t[18] !== p.onDataLoaded || t[19] !== p.onEditStatusAudience || t[20] !== _ || t[21] !== R || t[22] !== L || t[23] !== E || t[24] !== k ? (I = m.jsx(r("WAWebMultiSelectChatList.react"), {
					ref: u,
					excludeChat: p.excludeChat,
					getInitialItems: S,
					searchText: _,
					active: n,
					selections: R,
					maxChats: p.maxItems,
					maxChatsExceedErrorMsg: p.maxItemsExceedErrorMsg,
					onLeaveList: i,
					onSelectionChanged: l,
					hasFrequentlyForwarded: p.hasFrequentlyForwarded,
					hasForwarded: p.hasForwarded,
					flatListController: a,
					isDisabled: p.isDisabled,
					ephemeralIcon: p.ephemeralIcon,
					customItemSecondaryText: p.customItemSecondaryText,
					onChatsLoaded: p.onDataLoaded,
					excludeContacts: p.excludeContacts,
					includeNewsletters: p.includeNewsletters,
					chatFilter: p.chatFilter,
					contactFilter: p.contactFilter,
					includeMetaAi: L,
					includeHatch: E,
					includeMyStatus: k,
					onEditStatusAudience: p.onEditStatusAudience
				}), t[0] = n, t[1] = a, t[2] = S, t[3] = i, t[4] = l, t[5] = u, t[6] = p.chatFilter, t[7] = p.contactFilter, t[8] = p.customItemSecondaryText, t[9] = p.ephemeralIcon, t[10] = p.excludeChat, t[11] = p.excludeContacts, t[12] = p.hasForwarded, t[13] = p.hasFrequentlyForwarded, t[14] = p.includeNewsletters, t[15] = p.isDisabled, t[16] = p.maxItems, t[17] = p.maxItemsExceedErrorMsg, t[18] = p.onDataLoaded, t[19] = p.onEditStatusAudience, t[20] = _, t[21] = R, t[22] = L, t[23] = E, t[24] = k, t[25] = I) : I = t[25], I;
			}
			case C.ParticipantManageModal:
			case C.ContactSelectModal: {
				var T = p.getInitialItems, D = f, x = p.customGetKnownContacts, $;
				t[26] !== p.contacts ? ($ = v(p.contacts), t[26] = p.contacts, t[27] = $) : $ = t[27];
				var P;
				return t[28] !== n || t[29] !== a || t[30] !== T || t[31] !== i || t[32] !== l || t[33] !== s || t[34] !== u || t[35] !== c || t[36] !== d || t[37] !== p.allowBlockedContacts || t[38] !== p.allowUnknownContactSearch || t[39] !== p.customGetKnownContacts || t[40] !== p.customSecondaryText || t[41] !== p.includeYouSection || t[42] !== p.isDisabled || t[43] !== p.isSelected || t[44] !== p.maxItems || t[45] !== p.maxItemsExceedErrorMsg || t[46] !== p.noResultsText || t[47] !== p.outContactInviteEntryPoint || t[48] !== p.outContacts || t[49] !== p.targetWindow || t[50] !== _ || t[51] !== D || t[52] !== $ || t[53] !== g ? (P = m.jsx(o("WAWebMultiSelectContactList.react").MultiSelectContactList, {
					handleUsernameContactRowClicked: s,
					ref: u,
					customGetKnownContacts: x,
					contacts: $,
					includeYouSection: p.includeYouSection,
					getInitialItems: T,
					searchText: _,
					active: n,
					selections: D,
					maxContacts: p.maxItems,
					maxContactsExceedErrorMsg: p.maxItemsExceedErrorMsg,
					onLeaveList: i,
					onSelectionChanged: l,
					isDisabled: p.isDisabled,
					isSelected: p.isSelected,
					customSecondaryText: p.customSecondaryText,
					allowBlockedContacts: p.allowBlockedContacts,
					flatListController: a,
					allowUnknownContactSearch: p.allowUnknownContactSearch,
					noResultsText: p.noResultsText,
					onLoading: c,
					outContacts: p.outContacts,
					outContactInviteEntryPoint: p.outContactInviteEntryPoint,
					outContactSelections: d,
					updateSelectedContactsState: g,
					targetWindow: p.targetWindow
				}), t[28] = n, t[29] = a, t[30] = T, t[31] = i, t[32] = l, t[33] = s, t[34] = u, t[35] = c, t[36] = d, t[37] = p.allowBlockedContacts, t[38] = p.allowUnknownContactSearch, t[39] = p.customGetKnownContacts, t[40] = p.customSecondaryText, t[41] = p.includeYouSection, t[42] = p.isDisabled, t[43] = p.isSelected, t[44] = p.maxItems, t[45] = p.maxItemsExceedErrorMsg, t[46] = p.noResultsText, t[47] = p.outContactInviteEntryPoint, t[48] = p.outContacts, t[49] = p.targetWindow, t[50] = _, t[51] = D, t[52] = $, t[53] = g, t[54] = P) : P = t[54], P;
			}
			case C.ProductSelectModal: {
				var N = f, M;
				return t[55] !== n || t[56] !== a || t[57] !== l || t[58] !== u || t[59] !== p.onDataLoaded || t[60] !== N ? (M = m.jsx(r("WAWebBizMultiSelectProductList.react"), {
					ref: u,
					flatListController: a,
					active: n,
					selections: N,
					onSelectionChanged: l,
					onProductsLoaded: p.onDataLoaded
				}), t[55] = n, t[56] = a, t[57] = l, t[58] = u, t[59] = p.onDataLoaded, t[60] = N, t[61] = M) : M = t[61], M;
			}
		}
	}
	function R(e) {
		var t = o("react-compiler-runtime").c(4), n = e.previewComponent, a = e.selectionsRef, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = [], t[0] = i) : i = t[0];
		var l = y(i), s = l[0], u = l[1], c, d;
		t[1] !== a ? (c = function() {
			var e = a.current, t = function() {
				var t = e.getSelected();
				u(t);
			};
			t();
			var n = function() {
				t();
			};
			return e.on("all", n), (function() {
				e.off("all", n);
			});
		}, d = [a], t[1] = a, t[2] = c, t[3] = d) : (c = t[2], d = t[3]), _(c, d);
		var m = s.length === 1, p = s[0];
		if (p == null || !m) return null;
		var f = !1;
		if (p.id != null) {
			var g = String(p.id);
			if (r("WAWebWid").isWid(g)) {
				var h = o("WAWebWidFactory").createWid(g);
				f = o("WAWebBotUtils").isMetaAiBot(h);
			}
		}
		return f ? n : null;
	}
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
