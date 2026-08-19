__d("WAWebNewChatDrawer.react", [
	"fbt",
	"Keys",
	"WAWebABProps",
	"WAWebAccountTakeOverBanner.react",
	"WAWebBizBroadcastDeviceCapabilityCommon",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebCellV2.react",
	"WAWebChatContactList.react",
	"WAWebChatEntryPoint",
	"WAWebChatListSearch.react",
	"WAWebCmd",
	"WAWebCommunityGatingUtils",
	"WAWebComposeBoxActions",
	"WAWebContactCollection",
	"WAWebContactCollectionUtils",
	"WAWebContactGetters",
	"WAWebContactManagementGating",
	"WAWebContactSyncLogger",
	"WAWebContactUtils",
	"WAWebContactlessChatUtils",
	"WAWebDefaultAddProfilePicture.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebDrawerViewType",
	"WAWebEmptyState.react",
	"WAWebFbtCommon",
	"WAWebFindChatAction",
	"WAWebFlatListController",
	"WAWebKeyboardHotKeys.react",
	"WAWebL10NAccentFold",
	"WAWebModalManager",
	"WAWebNewChatMetricUtils",
	"WAWebNux",
	"WAWebOutContactCollection",
	"WAWebOutContactModel",
	"WAWebPhoneNumberSearch",
	"WAWebReachoutTimelockActions",
	"WAWebReachoutTimelockButterBarLoadable.react",
	"WAWebReachoutTimelockRestrictedModalLoadable",
	"WAWebReachoutTimelockUtils",
	"WAWebTabOrder",
	"WAWebText.react",
	"WAWebUnknownContactSection.react",
	"WAWebUseContactManagementAvailability",
	"WAWebUserPrefsMeUser",
	"WAWebUsernameGatingUtils",
	"WAWebUsernameKeyVerificationFlow",
	"WAWebUsernameSearchLogger",
	"WAWebUsernameSearchPlaceholder",
	"WAWebUsernameTypes",
	"WAWebWamEnumContactSearchEntrypoint",
	"WAWebWamEnumSearchActionName",
	"WAWebWamEnumWebContactListStartNewChatType",
	"WDSBanner.react",
	"WDSFlex.stylex",
	"WDSIconIcDialpad.react",
	"WDSIconIcLock.react",
	"WDSMenuBarItem.react",
	"asyncToGeneratorRuntime",
	"react",
	"stylex",
	"useLazyRef",
	"useWAWebDebouncedCallback",
	"useWAWebFilteredOutContacts",
	"useWAWebForceUpdate",
	"useWAWebFrequentlyContactedContacts",
	"useWAWebListener",
	"useWAWebNux",
	"useWAWebStableCallback",
	"useWAWebUnknownContact"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useEffect, f = m.useMemo, g = m.useRef, h = m.useState, y = { paddingInlineStart13: {
		paddingInlineStart: "xbmws1g",
		$$css: !0
	} }, C = {
		atoBanner: {
			paddingTop: "x1cnzs8",
			paddingBottom: "x1a8lsjc",
			marginTop: "x1kgmq87",
			marginBottom: "xmgb6t1",
			backgroundColor: "x1280gxy",
			zIndex: "xupqr0c",
			position: "x1n2onr6",
			$$css: !0
		},
		pinnedItem: {
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		}
	}, b = { surface: "new-chat" };
	function v(e) {
		var t = e.detailRight, n = e.image, a = e.onClick, i = e.primary, l = e.ref, c = e.testid, m = s._(
			/*BTDS*/
			"",
			[s._param("item-title", i.toString())]
		);
		return d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flex, C.pinnedItem), { children: d.jsx(r("WAWebCellV2.react"), {
			ref: l,
			size: "medium",
			material: !0,
			detailLeft: n,
			detailLeftXStyle: [y.paddingInlineStart13],
			detailRight: t,
			primary: d.jsxs(o("WAWebText.react").WAWebTextTitle, { children: [i, " "] }),
			onClick: a,
			ariaLabel: m,
			testid: c
		}) }));
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = e.allowMessageYourself, n = e.filterFn, r = e.includeGroupsWithoutSearch, a = e.searchText, i = e.searchText_;
		o("WAWebContactCollection").ContactCollection.ensureSorted();
		var l = typeof i == "string" ? i : a, s = {
			showMe: t && !!l,
			filterFn: n
		};
		if (!l) {
			var u = o("WAWebContactCollectionUtils").getFilteredContacts(o("WAWebContactCollection").ContactCollection, s), c = o("WAWebOutContactCollection").OutContactCollection.getFilteredContacts(), d = o("WAWebContactUtils").mergeSortedContacts(u, c);
			if (!r) return d;
			var m = o("WAWebContactCollection").ContactCollection.filter(function(e) {
				var t;
				return ((t = e.id) == null ? void 0 : t.isGroup()) === !0 && (n == null ? void 0 : n(e)) === !0;
			});
			return d.concat(m);
		}
		var p = o("WAWebL10NAccentFold").accentFold(l), _ = o("WAWebPhoneNumberSearch").numberSearch(p), f = o("WAWebOutContactCollection").OutContactCollection.getFilteredContacts(p), g = o("WAWebContactCollectionUtils").getFilteredContacts(o("WAWebContactCollection").ContactCollection, s).filter(function(e) {
			return e.searchMatchExact(p, _) != null;
		}), h = o("WAWebContactUtils").mergeSortedContacts(g, f), y = o("WAWebContactCollection").ContactCollection.filter(function(e) {
			return (n == null ? void 0 : n(e)) !== !0 ? !1 : e.name && !o("WAWebContactGetters").getIsMe(e) && !o("WAWebContactGetters").getIsPSA(e) && !o("WAWebContactGetters").getIsWAContact(e) && !o("WAWebContactGetters").getIsNewsletter(e) && !o("WAWebContactGetters").getIsBot(e);
		}).filter(function(e) {
			return e.searchMatchExact(p, _) != null;
		});
		return h.concat(y);
	}
	var R = function(t, n) {
		o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
			contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.NEW_CHAT,
			searchActionName: o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.PIN_VERFICATION_ERROR_SHOWN,
			isUsernameSearch: n,
			searchStartsWithAt: t
		});
	};
	function L(t) {
		"use no forget";
		var a, i = t.ref, l = babelHelpers.objectWithoutPropertiesLoose(t, e), u = l.allowBot, c = u === void 0 ? !0 : u, m = l.allowMessageYourself, y = m === void 0 ? !0 : m, L = l.allowUnknownContacts, E = L === void 0 ? !0 : L, k = l.filterOptions, I = l.includeGroupsWithoutSearch, T = I === void 0 ? !1 : I, D = l.onBack, x = l.onClick, $ = l.onDialerPad, P = l.onNewBroadcast, N = l.onNewCommunity, M = l.onNewContact, w = l.onNewGroup, A = l.showCommunity, F = A === void 0 ? !0 : A, O = l.showContact, B = O === void 0 ? !0 : O, W = l.showDialerPad, q = W === void 0 ? !0 : W, U = l.showGroup, V = U === void 0 ? !0 : U, H = l.title, G = l.viewType, z = (a = k == null ? void 0 : k.filterFn) != null ? a : null, j = k == null ? void 0 : k.filterMessage, K = k == null ? void 0 : k.onFilterMessageDismiss, Q = h(!1), X = Q[0], Y = Q[1], J = h(""), Z = J[0], ee = J[1], te = h(o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndVisible()), ne = te[0], re = te[1], oe = g(), ae = g(), ie = g(), le = !!Z, se = Z.startsWith("@"), ue = r("useLazyRef")(function() {
			return new (r("WAWebFlatListController"))();
		}), ce = o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastEnabledAndDeviceSupported(), de = r("useWAWebNux")(o("WAWebNux").NUX.BUSINESS_BROADCAST_CHAT_LIST_UPSELL), me = de[0], pe = de[1];
		_(function() {
			ce && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.newChatEntryPointViewed();
		}, [ce]);
		var _e = o("WAWebUsernameGatingUtils").usernameContactlessChatEnabled(), fe = s._(
			/*BTDS*/
			""
		), ge = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
		o("useWAWebListener").useListener(o("WAWebContactCollection").ContactCollection, "change:name", ge), r("useWAWebFilteredOutContacts")();
		var he = r("useWAWebFrequentlyContactedContacts")();
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "reachout_timelock_state_change", function() {
			re(o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndVisible());
		});
		var ye = o("WAWebUseContactManagementAvailability").useAccountIntegrityState();
		_e ? fe = o("WAWebUsernameSearchPlaceholder").getUsernameSearchPlaceholder() : fe = r("WAWebFbtCommon")("Search name or number");
		var Ce = p(function(e) {
			return S({
				allowMessageYourself: y,
				filterFn: z,
				includeGroupsWithoutSearch: T,
				searchText: Z,
				searchText_: e
			});
		}, [
			y,
			z,
			T,
			Z
		]), be = Ce(), ve = z != null ? he.filter(function(e) {
			return z(e);
		}) : [].concat(he), Se = le ? new Set() : new Set(ve), Re = Se.size > 0 ? be.filter(function(e) {
			return !Se.has(e);
		}) : be, Le = [];
		for (var Ee of Re) Ee instanceof r("WAWebOutContactModel") || Le.push(Ee);
		o("WAWebReachoutTimelockActions").maybeSetCanSendMsgWhileTimelockedProp(Le);
		var ke = r("useWAWebUnknownContact")({
			phoneOrUsername: Z,
			searchPhoneNumber: !0,
			searchUsername: !0,
			requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN_CONTACT_SEARCH_NEW_CHAT
		}), Ie = ke.error, Te = ke.loading, De = ke.onRetry, xe = ke.unknownContactInfo, $e = g(null), Pe = r("useWAWebStableCallback")(function(e) {
			var t;
			e == null || e.preventDefault(), (t = oe.current) == null || t.focus();
		}), Ne = r("useWAWebStableCallback")(function() {
			var e = $e.current;
			if (e != null) {
				var t = e.querySelector("[tabindex=\"0\"]");
				t == null || t.focus();
			}
		}), Me = Re.length > 0 || !le && ve.length > 0, we = r("useWAWebStableCallback")(function(e) {
			if (e.keyCode === r("Keys").DOWN) if (Me) {
				var t;
				e.preventDefault(), (t = ae.current) == null || t.focusFirst();
			} else xe != null && (e.preventDefault(), Ne());
		}), Ae = r("useWAWebStableCallback")(function(e) {
			if (e.preventDefault(), e.stopPropagation(), Me) {
				var t;
				(t = ae.current) == null || t.focusLast();
			} else Pe(e);
		}), Fe = f(function() {
			return { up: Ae };
		}, [Ae]), Oe = r("useWAWebDebouncedCallback")(function(e) {
			return ee(e);
		}, 100), Be = p(function(e) {
			ie.current = e, Oe(e);
		}, [Oe]), We = p(function(e) {
			var t = e.chatOrigin, n = e.contact, r = e.event;
			x(r, n, void 0, t);
		}, [x]), qe = r("useWAWebStableCallback")((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t;
				if (e.preventDefault(), e.stopPropagation(), xe != null) {
					var n = xe.isUsernameSearch, r;
					if ((xe == null ? void 0 : xe.wid) == null) {
						if (o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
							contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.NEW_CHAT,
							searchActionName: o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.VIEW_PIN_VERIFICATION,
							isUsernameSearch: n,
							searchStartsWithAt: se
						}), xe.triedKey && R(se), r = yield o("WAWebUsernameKeyVerificationFlow").usernameKeyVerificationFlow({
							username: xe.username,
							initWithError: xe.triedKey,
							onInvalidKeyError: function() {
								return R(se);
							}
						}), r == null) return;
					} else r = xe.wid;
					var a = (t = xe == null ? void 0 : xe.chat) != null ? t : (yield o("WAWebFindChatAction").findOrCreateLatestChat(r, "newChatFlow")).chat;
					if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked() && !o("WAWebReachoutTimelockUtils").canSendMsgWhileTimelocked({
						chat: a,
						contact: a.contact
					})) {
						o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
						return;
					}
					o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
					var i = yield o("WAWebCmd").Cmd.openChatFromUnread({
						chat: a,
						chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.NewChat
					});
					if (!i) {
						o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
							contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.NEW_CHAT,
							searchActionName: o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.INITIATION_FAILURE,
							isUsernameSearch: n,
							searchStartsWithAt: se
						});
						return;
					}
					o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
						contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.NEW_CHAT,
						searchActionName: o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.INITIATION_SUCCESS,
						isUsernameSearch: n,
						searchStartsWithAt: se
					}), o("WAWebNewChatMetricUtils").logInitiatedContactlessChat(a), o("WAWebNewChatMetricUtils").logContactListStartNewChatAction({
						chatType: o("WAWebWamEnumWebContactListStartNewChatType").WEB_CONTACT_LIST_START_NEW_CHAT_TYPE.CONTACTLESS,
						isSearchResult: !0
					}), o("WAWebComposeBoxActions").ComposeBoxActions.focus(a);
				}
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})()), Ue = p(function(e) {
			if (e.preventDefault(), e.stopPropagation(), !le) {
				if (!y) return;
				var t = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), n = o("WAWebContactCollection").ContactCollection.assertGet(t);
				We({
					contact: n,
					event: e
				});
				return;
			}
			var a = Ce(ie.current)[0];
			if (a && !(a instanceof r("WAWebOutContactModel"))) {
				We({
					contact: a,
					event: e
				});
				return;
			} else E && xe && qe(e);
		}, [
			y,
			E,
			le,
			Ce,
			xe,
			We,
			qe
		]), Ve = [];
		if (!Z) {
			if (V) {
				var He = d.jsx(r("WAWebDefaultAddProfilePicture.react"), {
					directional: !0,
					type: "group",
					size: 48
				});
				Ve.push({
					image: He,
					id: s._(
						/*BTDS*/
						""
					),
					detailRight: null,
					onClick: w,
					testid: "new-chat-drawer-new-group-cell"
				});
			}
			if (B && o("WAWebContactManagementGating").contactManagementEnabled()) {
				var Ge = d.jsx(r("WAWebDefaultAddProfilePicture.react"), {
					directional: !0,
					type: "contact",
					size: 48
				}), ze = s._(
					/*BTDS*/
					""
				);
				Ve.push({
					image: Ge,
					id: ze,
					detailRight: null,
					onClick: M,
					testid: "new-chat-drawer-new-contact-cell"
				});
			}
			if (ce) {
				var je = d.jsx(r("WAWebDefaultAddProfilePicture.react"), {
					directional: !0,
					type: "business-broadcast",
					size: 48
				}), Ke = s._(
					/*BTDS*/
					""
				);
				Ve.push({
					image: je,
					id: Ke,
					detailRight: me ? d.jsx("div", {
						"data-testid": "broadcast-nux-green-dot",
						className: "x1qe8gl4 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xdk7pt x1xc55vz"
					}) : null,
					onClick: function(t) {
						me && pe(), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.newChatEntryPointClicked(), P(t);
					},
					testid: "new-chat-drawer-new-broadcast-cell"
				});
			}
			if (F && o("WAWebCommunityGatingUtils").communitiesCreationEnabled()) {
				var Qe = d.jsx(r("WAWebDefaultAddProfilePicture.react"), {
					directional: !0,
					type: "community",
					size: 48
				});
				Ve.push({
					image: Qe,
					id: s._(
						/*BTDS*/
						""
					),
					detailRight: null,
					onClick: N,
					testid: "new-chat-drawer-new-community-cell"
				});
			}
		}
		var Xe = null;
		ye === o("WAWebUseContactManagementAvailability").AccountIntegrityState.TIMELOCK && (Xe = d.jsx(r("WAWebAccountTakeOverBanner.react"), {
			entryPoint: "new-chat",
			xstyle: C.atoBanner
		}));
		var Ye = [], Je = xe != null && !Re.some(function(e) {
			return !(e instanceof r("WAWebOutContactModel")) && (e.id.equals(xe.wid) || o("WAWebUsernameTypes").serializeMaybeUsername(e.username) === xe.username);
		}), Ze = E && !!Z && !Te && !Ie && Je;
		Me && Ye.push(d.jsx(r("WAWebChatContactList.react"), {
			ref: ae,
			contacts: Re,
			flatListController: ue.current,
			onClick: x,
			onFocusAfterLast: Ze ? Ne : void 0,
			onFocusSearch: Pe,
			showMe: y && !le,
			showBot: c && !le,
			showPersonGroupDivisionHeader: !le && ve.length > 0,
			showHeaderSpinner: ye === o("WAWebUseContactManagementAvailability").AccountIntegrityState.PENDING,
			searchText: Z,
			searchEntrypoint: "new_chat",
			separateContacts: !le && ve.length > 0 ? {
				contacts: ve,
				header: s._(
					/*BTDS*/
					""
				)
			} : void 0,
			personContactsHeader: !le && ve.length > 0 ? s._(
				/*BTDS*/
				""
			) : void 0
		}, "contact-list")), Z && (Te ? Ye.push(d.jsx(o("WAWebEmptyState.react").SearchingNonContactWithSpinner, {}, "spinner")) : Ie ? Ye.push(d.jsx(o("WAWebEmptyState.react").SearchingNonContactError, {
			error: o("WAWebContactlessChatUtils").getErrorStr(Ie),
			onClick: De
		}, "error")) : Ze && xe != null && Ye.push(d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			ref: $e,
			handlers: Fe,
			children: d.jsx(r("WAWebUnknownContactSection.react"), {
				contactInfo: xe,
				onUnknownContactClick: qe,
				searchText: Z
			})
		}, "unknown-contact")), Ye.length === 0 && Ye.push(d.jsx(o("WAWebEmptyState.react").SearchWithKeyword, { keyword: Z }, "search")));
		var et = G === r("WAWebDrawerViewType").FLYOUT ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.FLYOUT : o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL, tt = g(null), nt = g([]), rt = function(t, n) {
			nt.current[n] = t;
		}, ot = function(t) {
			t.target === tt.current && it(0);
		}, at = function() {
			var e = nt.current.findIndex(function(e) {
				return e === document.activeElement;
			});
			return e !== -1 ? e : null;
		}, it = function(t) {
			var e = nt.current[t];
			e && e.focus();
		}, lt = function(t) {
			t.preventDefault();
			var e = at();
			if (e == null) {
				it(0);
				return;
			}
			var n = Math.min(e + 1, Ve.length - 1);
			it(n);
		}, st = function(t) {
			t.preventDefault();
			var e = at();
			if (e == null) {
				it(0);
				return;
			}
			var n = Math.max(0, e - 1);
			it(n);
		}, ut = {
			up: st,
			down: lt
		}, ct = null;
		if (q && o("WAWebABProps").getABPropConfigValue("dialer_pad_for_new_chats")) {
			var dt = s._(
				/*BTDS*/
				""
			);
			ct = d.jsx(r("WDSMenuBarItem.react"), {
				testid: "menu-bar-dialer-pad",
				icon: r("WDSIconIcDialpad.react"),
				onClick: $,
				title: dt,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER
			}, "btn-dialer-pad");
		}
		return d.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			testid: "new-chat-drawer",
			tsNavigationData: b,
			viewType: G,
			children: [
				d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: H,
					type: et,
					onBack: G === r("WAWebDrawerViewType").FLYOUT ? void 0 : D,
					menu: [ct]
				}),
				d.jsx(o("WAWebChatListSearch.react").ListSearch, {
					ref: oe,
					onSearch: Be,
					onEnter: Ue,
					placeholder: fe,
					type: o("WAWebChatListSearch.react").ListSearchType.NEW_CHAT_CONTACT_SEARCH,
					loading: Te,
					showPlaceholderUntilType: !0,
					focusOnMount: !0,
					handleKeyDown: we
				}),
				d.jsxs(r("WAWebDrawerBody.react"), {
					backgroundColor: "default",
					flatListControllers: [ue.current],
					children: [
						j != null && !X && d.jsx("div", {
							className: "x1380le5 x14mko6t x1uvdrpn x1h1h5sg",
							children: d.jsx(r("WDSBanner.react"), {
								type: "default",
								body: j,
								icon: r("WDSIconIcLock.react"),
								onDismiss: function() {
									Y(!0), K == null || K();
								},
								testid: "new-chat-drawer-filter-banner"
							})
						}),
						ne && d.jsx(o("WAWebReachoutTimelockButterBarLoadable.react").ReachoutTimelockButterBarLoadable, {}),
						d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
							ref: tt,
							handlers: ut,
							tabIndex: 0,
							"data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
							onFocus: ot,
							children: d.jsx("div", {
								className: "x889kno x2vl965 x1a8lsjc xe2zdcy",
								children: Ve.map(function(e, t) {
									var n = e.detailRight, r = e.id, o = e.image, a = e.onClick, i = e.testid;
									return d.jsx(v, {
										ref: function(n) {
											return rt(n, t);
										},
										detailRight: n,
										image: o,
										primary: r,
										onClick: a,
										testid: i
									}, t);
								})
							})
						}),
						Xe,
						d.jsx(d.Fragment, { children: Ye })
					]
				})
			]
		}, "contact-modal");
	}
	L.displayName = L.name + " [from " + i.id + "]", l.default = L;
}), 226);
