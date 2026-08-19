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
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.allowBot, u = l === void 0 ? !0 : l, c = i.allowMessageYourself, m = c === void 0 ? !0 : c, y = i.allowUnknownContacts, L = y === void 0 ? !0 : y, E = i.filterOptions, k = i.includeGroupsWithoutSearch, I = k === void 0 ? !1 : k, T = i.onBack, D = i.onClick, x = i.onDialerPad, $ = i.onNewBroadcast, P = i.onNewCommunity, N = i.onNewContact, M = i.onNewGroup, w = i.showCommunity, A = w === void 0 ? !0 : w, F = i.showContact, O = F === void 0 ? !0 : F, B = i.showDialerPad, W = B === void 0 ? !0 : B, q = i.showGroup, U = q === void 0 ? !0 : q, V = i.title, H = i.viewType, G = (n = E == null ? void 0 : E.filterFn) != null ? n : null, z = E == null ? void 0 : E.filterMessage, j = E == null ? void 0 : E.onFilterMessageDismiss, K = h(!1), Q = K[0], X = K[1], Y = h(""), J = Y[0], Z = Y[1], ee = h(o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndVisible()), te = ee[0], ne = ee[1], re = g(), oe = g(), ae = g(), ie = !!J, le = J.startsWith("@"), se = r("useLazyRef")(function() {
			return new (r("WAWebFlatListController"))();
		}), ue = o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastEnabledAndDeviceSupported(), ce = r("useWAWebNux")(o("WAWebNux").NUX.BUSINESS_BROADCAST_CHAT_LIST_UPSELL), de = ce[0], me = ce[1];
		_(function() {
			ue && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.newChatEntryPointViewed();
		}, [ue]);
		var pe = o("WAWebUsernameGatingUtils").usernameContactlessChatEnabled(), _e = s._(
			/*BTDS*/
			""
		), fe = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
		o("useWAWebListener").useListener(o("WAWebContactCollection").ContactCollection, "change:name", fe), r("useWAWebFilteredOutContacts")();
		var ge = r("useWAWebFrequentlyContactedContacts")();
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "reachout_timelock_state_change", function() {
			ne(o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndVisible());
		});
		var he = o("WAWebUseContactManagementAvailability").useAccountIntegrityState();
		pe ? _e = o("WAWebUsernameSearchPlaceholder").getUsernameSearchPlaceholder() : _e = r("WAWebFbtCommon")("Search name or number");
		var ye = p(function(e) {
			return S({
				allowMessageYourself: m,
				filterFn: G,
				includeGroupsWithoutSearch: I,
				searchText: J,
				searchText_: e
			});
		}, [
			m,
			G,
			I,
			J
		]), Ce = ye(), be = G != null ? ge.filter(function(e) {
			return G(e);
		}) : [].concat(ge), ve = ie ? new Set() : new Set(be), Se = ve.size > 0 ? Ce.filter(function(e) {
			return !ve.has(e);
		}) : Ce, Re = [];
		for (var Le of Se) Le instanceof r("WAWebOutContactModel") || Re.push(Le);
		o("WAWebReachoutTimelockActions").maybeSetCanSendMsgWhileTimelockedProp(Re);
		var Ee = r("useWAWebUnknownContact")({
			phoneOrUsername: J,
			searchPhoneNumber: !0,
			searchUsername: !0,
			requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN_CONTACT_SEARCH_NEW_CHAT
		}), ke = Ee.error, Ie = Ee.loading, Te = Ee.onRetry, De = Ee.unknownContactInfo, xe = g(null), $e = r("useWAWebStableCallback")(function(e) {
			var t;
			e == null || e.preventDefault(), (t = re.current) == null || t.focus();
		}), Pe = r("useWAWebStableCallback")(function() {
			var e = xe.current;
			if (e != null) {
				var t = e.querySelector("[tabindex=\"0\"]");
				t == null || t.focus();
			}
		}), Ne = Se.length > 0 || !ie && be.length > 0, Me = r("useWAWebStableCallback")(function(e) {
			if (e.keyCode === r("Keys").DOWN) if (Ne) {
				var t;
				e.preventDefault(), (t = oe.current) == null || t.focusFirst();
			} else De != null && (e.preventDefault(), Pe());
		}), we = r("useWAWebStableCallback")(function(e) {
			if (e.preventDefault(), e.stopPropagation(), Ne) {
				var t;
				(t = oe.current) == null || t.focusLast();
			} else $e(e);
		}), Ae = f(function() {
			return { up: we };
		}, [we]), Fe = r("useWAWebDebouncedCallback")(function(e) {
			return Z(e);
		}, 100), Oe = p(function(e) {
			ae.current = e, Fe(e);
		}, [Fe]), Be = p(function(e) {
			var t = e.chatOrigin, n = e.contact, r = e.event;
			D(r, n, void 0, t);
		}, [D]), We = r("useWAWebStableCallback")(async function(e) {
			var t;
			if (e.preventDefault(), e.stopPropagation(), De != null) {
				var n = De.isUsernameSearch, r;
				if ((De == null ? void 0 : De.wid) == null) {
					if (o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
						contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.NEW_CHAT,
						searchActionName: o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.VIEW_PIN_VERIFICATION,
						isUsernameSearch: n,
						searchStartsWithAt: le
					}), De.triedKey && R(le), r = await o("WAWebUsernameKeyVerificationFlow").usernameKeyVerificationFlow({
						username: De.username,
						initWithError: De.triedKey,
						onInvalidKeyError: function() {
							return R(le);
						}
					}), r == null) return;
				} else r = De.wid;
				var a = (t = De == null ? void 0 : De.chat) != null ? t : (await o("WAWebFindChatAction").findOrCreateLatestChat(r, "newChatFlow")).chat;
				if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked() && !o("WAWebReachoutTimelockUtils").canSendMsgWhileTimelocked({
					chat: a,
					contact: a.contact
				})) {
					o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
					return;
				}
				o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
				var i = await o("WAWebCmd").Cmd.openChatFromUnread({
					chat: a,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.NewChat
				});
				if (!i) {
					o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
						contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.NEW_CHAT,
						searchActionName: o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.INITIATION_FAILURE,
						isUsernameSearch: n,
						searchStartsWithAt: le
					});
					return;
				}
				o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
					contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.NEW_CHAT,
					searchActionName: o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.INITIATION_SUCCESS,
					isUsernameSearch: n,
					searchStartsWithAt: le
				}), o("WAWebNewChatMetricUtils").logInitiatedContactlessChat(a), o("WAWebNewChatMetricUtils").logContactListStartNewChatAction({
					chatType: o("WAWebWamEnumWebContactListStartNewChatType").WEB_CONTACT_LIST_START_NEW_CHAT_TYPE.CONTACTLESS,
					isSearchResult: !0
				}), o("WAWebComposeBoxActions").ComposeBoxActions.focus(a);
			}
		}), qe = p(function(e) {
			if (e.preventDefault(), e.stopPropagation(), !ie) {
				if (!m) return;
				var t = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), n = o("WAWebContactCollection").ContactCollection.assertGet(t);
				Be({
					contact: n,
					event: e
				});
				return;
			}
			var a = ye(ae.current)[0];
			if (a && !(a instanceof r("WAWebOutContactModel"))) {
				Be({
					contact: a,
					event: e
				});
				return;
			} else L && De && We(e);
		}, [
			m,
			L,
			ie,
			ye,
			De,
			Be,
			We
		]), Ue = [];
		if (!J) {
			if (U) {
				var Ve = d.jsx(r("WAWebDefaultAddProfilePicture.react"), {
					directional: !0,
					type: "group",
					size: 48
				});
				Ue.push({
					image: Ve,
					id: s._(
						/*BTDS*/
						""
					),
					detailRight: null,
					onClick: M,
					testid: "new-chat-drawer-new-group-cell"
				});
			}
			if (O && o("WAWebContactManagementGating").contactManagementEnabled()) {
				var He = d.jsx(r("WAWebDefaultAddProfilePicture.react"), {
					directional: !0,
					type: "contact",
					size: 48
				}), Ge = s._(
					/*BTDS*/
					""
				);
				Ue.push({
					image: He,
					id: Ge,
					detailRight: null,
					onClick: N,
					testid: "new-chat-drawer-new-contact-cell"
				});
			}
			if (ue) {
				var ze = d.jsx(r("WAWebDefaultAddProfilePicture.react"), {
					directional: !0,
					type: "business-broadcast",
					size: 48
				}), je = s._(
					/*BTDS*/
					""
				);
				Ue.push({
					image: ze,
					id: je,
					detailRight: de ? d.jsx("div", {
						"data-testid": "broadcast-nux-green-dot",
						className: "x1qe8gl4 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xdk7pt x1xc55vz"
					}) : null,
					onClick: function(t) {
						de && me(), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.newChatEntryPointClicked(), $(t);
					},
					testid: "new-chat-drawer-new-broadcast-cell"
				});
			}
			if (A && o("WAWebCommunityGatingUtils").communitiesCreationEnabled()) {
				var Ke = d.jsx(r("WAWebDefaultAddProfilePicture.react"), {
					directional: !0,
					type: "community",
					size: 48
				});
				Ue.push({
					image: Ke,
					id: s._(
						/*BTDS*/
						""
					),
					detailRight: null,
					onClick: P,
					testid: "new-chat-drawer-new-community-cell"
				});
			}
		}
		var Qe = null;
		he === o("WAWebUseContactManagementAvailability").AccountIntegrityState.TIMELOCK && (Qe = d.jsx(r("WAWebAccountTakeOverBanner.react"), {
			entryPoint: "new-chat",
			xstyle: C.atoBanner
		}));
		var Xe = [], Ye = De != null && !Se.some(function(e) {
			return !(e instanceof r("WAWebOutContactModel")) && (e.id.equals(De.wid) || o("WAWebUsernameTypes").serializeMaybeUsername(e.username) === De.username);
		}), Je = L && !!J && !Ie && !ke && Ye;
		Ne && Xe.push(d.jsx(r("WAWebChatContactList.react"), {
			ref: oe,
			contacts: Se,
			flatListController: se.current,
			onClick: D,
			onFocusAfterLast: Je ? Pe : void 0,
			onFocusSearch: $e,
			showMe: m && !ie,
			showBot: u && !ie,
			showPersonGroupDivisionHeader: !ie && be.length > 0,
			showHeaderSpinner: he === o("WAWebUseContactManagementAvailability").AccountIntegrityState.PENDING,
			searchText: J,
			searchEntrypoint: "new_chat",
			separateContacts: !ie && be.length > 0 ? {
				contacts: be,
				header: s._(
					/*BTDS*/
					""
				)
			} : void 0,
			personContactsHeader: !ie && be.length > 0 ? s._(
				/*BTDS*/
				""
			) : void 0
		}, "contact-list")), J && (Ie ? Xe.push(d.jsx(o("WAWebEmptyState.react").SearchingNonContactWithSpinner, {}, "spinner")) : ke ? Xe.push(d.jsx(o("WAWebEmptyState.react").SearchingNonContactError, {
			error: o("WAWebContactlessChatUtils").getErrorStr(ke),
			onClick: Te
		}, "error")) : Je && De != null && Xe.push(d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			ref: xe,
			handlers: Ae,
			children: d.jsx(r("WAWebUnknownContactSection.react"), {
				contactInfo: De,
				onUnknownContactClick: We,
				searchText: J
			})
		}, "unknown-contact")), Xe.length === 0 && Xe.push(d.jsx(o("WAWebEmptyState.react").SearchWithKeyword, { keyword: J }, "search")));
		var Ze = H === r("WAWebDrawerViewType").FLYOUT ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.FLYOUT : o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL, et = g(null), tt = g([]), nt = function(t, n) {
			tt.current[n] = t;
		}, rt = function(t) {
			t.target === et.current && at(0);
		}, ot = function() {
			var e = tt.current.findIndex(function(e) {
				return e === document.activeElement;
			});
			return e !== -1 ? e : null;
		}, at = function(t) {
			var e = tt.current[t];
			e && e.focus();
		}, it = function(t) {
			t.preventDefault();
			var e = ot();
			if (e == null) {
				at(0);
				return;
			}
			var n = Math.min(e + 1, Ue.length - 1);
			at(n);
		}, lt = function(t) {
			t.preventDefault();
			var e = ot();
			if (e == null) {
				at(0);
				return;
			}
			var n = Math.max(0, e - 1);
			at(n);
		}, st = {
			up: lt,
			down: it
		}, ut = null;
		if (W && o("WAWebABProps").getABPropConfigValue("dialer_pad_for_new_chats")) {
			var ct = s._(
				/*BTDS*/
				""
			);
			ut = d.jsx(r("WDSMenuBarItem.react"), {
				testid: "menu-bar-dialer-pad",
				icon: r("WDSIconIcDialpad.react"),
				onClick: x,
				title: ct,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER
			}, "btn-dialer-pad");
		}
		return d.jsxs(r("WAWebDrawer.react"), {
			ref: a,
			testid: "new-chat-drawer",
			tsNavigationData: b,
			viewType: H,
			children: [
				d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: V,
					type: Ze,
					onBack: H === r("WAWebDrawerViewType").FLYOUT ? void 0 : T,
					menu: [ut]
				}),
				d.jsx(o("WAWebChatListSearch.react").ListSearch, {
					ref: re,
					onSearch: Oe,
					onEnter: qe,
					placeholder: _e,
					type: o("WAWebChatListSearch.react").ListSearchType.NEW_CHAT_CONTACT_SEARCH,
					loading: Ie,
					showPlaceholderUntilType: !0,
					focusOnMount: !0,
					handleKeyDown: Me
				}),
				d.jsxs(r("WAWebDrawerBody.react"), {
					backgroundColor: "default",
					flatListControllers: [se.current],
					children: [
						z != null && !Q && d.jsx("div", {
							className: "x1380le5 x14mko6t x1uvdrpn x1h1h5sg",
							children: d.jsx(r("WDSBanner.react"), {
								type: "default",
								body: z,
								icon: r("WDSIconIcLock.react"),
								onDismiss: function() {
									X(!0), j == null || j();
								},
								testid: "new-chat-drawer-filter-banner"
							})
						}),
						te && d.jsx(o("WAWebReachoutTimelockButterBarLoadable.react").ReachoutTimelockButterBarLoadable, {}),
						d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
							ref: et,
							handlers: st,
							tabIndex: 0,
							"data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
							onFocus: rt,
							children: d.jsx("div", {
								className: "x889kno x2vl965 x1a8lsjc xe2zdcy",
								children: Ue.map(function(e, t) {
									var n = e.detailRight, r = e.id, o = e.image, a = e.onClick, i = e.testid;
									return d.jsx(v, {
										ref: function(n) {
											return nt(n, t);
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
						Qe,
						d.jsx(d.Fragment, { children: Xe })
					]
				})
			]
		}, "contact-modal");
	}
	L.displayName = L.name + " [from " + i.id + "]", l.default = L;
}), 226);
