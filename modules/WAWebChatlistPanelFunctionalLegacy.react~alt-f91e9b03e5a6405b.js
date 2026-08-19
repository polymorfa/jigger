__d("WAWebChatlistPanelFunctionalLegacy.react", [
	"fbt",
	"WAAbortError",
	"WAFtsIsSearchQueryEligibleForMessageSearch",
	"WALogger",
	"WAPromiseRaceAbort",
	"WATimeUtils",
	"WAWebABProps",
	"WAWebAccessibility.react",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebBizAiAgentStatusUtils",
	"WAWebBizAiHandoffRemovalTimingModel",
	"WAWebBizBroadcastDeviceCapabilityCommon",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebChatArchivedEntryPoint.react",
	"WAWebChatAssignmentCollection",
	"WAWebChatAssignmentUtils",
	"WAWebChatCollection",
	"WAWebChatEntryPoint",
	"WAWebChatGetters",
	"WAWebChatListFilters.react",
	"WAWebChatListSearch.react",
	"WAWebChatLockUtils",
	"WAWebChatLockedEntryPoint.react",
	"WAWebChatMessageSearch",
	"WAWebChatModel",
	"WAWebChatSearchFilters",
	"WAWebChatSearchQuery",
	"WAWebChatlistBanners.react",
	"WAWebChatlistFunctional.react",
	"WAWebChatlistPanelMode",
	"WAWebChatlistPanelUtils",
	"WAWebChatlistUtils",
	"WAWebChatlist_DEPRECATED.react",
	"WAWebChevronCustomIcons",
	"WAWebClientFeatureFlags",
	"WAWebCmd",
	"WAWebCommandCollection",
	"WAWebCommandModel",
	"WAWebCommunityGroupJourneyEventImpl",
	"WAWebComposeBoxActions",
	"WAWebConnModel",
	"WAWebConsumerMultiSelectBar.react",
	"WAWebContactCollection",
	"WAWebContactGetters",
	"WAWebContactModel",
	"WAWebContactSearchGatingUtils",
	"WAWebContactSyncLogger",
	"WAWebContactlessChatUtils",
	"WAWebCoreActionsODS",
	"WAWebDesktopUpsellChatlistToastbar.react",
	"WAWebDesktopUpsellSearchToastbar.react",
	"WAWebDrawerManager",
	"WAWebDrawerManagerContext",
	"WAWebEmptyState.react",
	"WAWebEnvironment",
	"WAWebErrorBoundary.react",
	"WAWebFilterLogging",
	"WAWebFilterSession",
	"WAWebFindCommonGroupsContactAction",
	"WAWebFlatList.react",
	"WAWebFlatListContainer.react",
	"WAWebFlatListController",
	"WAWebFocusTracer",
	"WAWebFrontendChatGetters",
	"WAWebFrontendConstants",
	"WAWebFrontendContactGetters",
	"WAWebFrontendMsgGetters",
	"WAWebFtsConstants",
	"WAWebFtsMsgsCallLogCollection",
	"WAWebFtsMsgsCollection",
	"WAWebGroupType",
	"WAWebHistorySyncComponents.react",
	"WAWebInboxFiltersGatingUtils",
	"WAWebKeyboardHotKeys.react",
	"WAWebKeyboardRun",
	"WAWebL10NAccentFold",
	"WAWebListsGatingUtils",
	"WAWebListsLabelGatingUtils",
	"WAWebMessageYourselfMetricUtils",
	"WAWebMiscGatingUtils",
	"WAWebMixedMultiSelectBar.react",
	"WAWebModalManager",
	"WAWebMsgCollection",
	"WAWebMsgModel",
	"WAWebMultiSelectEntryPointConstants",
	"WAWebMultiSelection",
	"WAWebNonContactPushNameSearchModel",
	"WAWebNoop",
	"WAWebOfflineHandler",
	"WAWebOfflineResumeProgressToastbar.react",
	"WAWebOfflineResumeTypes",
	"WAWebOutContactCollection",
	"WAWebOutContactInviteJourney",
	"WAWebPREGatingUtils",
	"WAWebParticipantListUtils",
	"WAWebPhoneNumberSearch",
	"WAWebPrivacyNarrativeE2EMessage.react",
	"WAWebPttOocPlayer",
	"WAWebSearchLogging",
	"WAWebSearchUserJourneyLogger",
	"WAWebSearchZeroStateGatingUtils",
	"WAWebSelectableState",
	"WAWebSettingsConst",
	"WAWebSettingsFlowLoadable",
	"WAWebSingleSelection",
	"WAWebSlicedMatcher",
	"WAWebSpinner.react",
	"WAWebStylesEnv",
	"WAWebUimUie.react",
	"WAWebUnknownContactSection.react",
	"WAWebUseRecentlySearchedChats",
	"WAWebUsernameKeyVerificationFlow",
	"WAWebUsernameSearchLogger",
	"WAWebUsernameTypes",
	"WAWebVelocityAnimate",
	"WAWebVelocityTransitionGroup",
	"WAWebVoipCallsTabPanelManager",
	"WAWebWamEnumChatFilterActionTypes",
	"WAWebWamEnumContactSearchEntrypoint",
	"WAWebWamEnumLandingSurface",
	"WAWebWamEnumSearchActionName",
	"WAWebWamEnumSearchUjItemType",
	"WAWebWamEnumSurfaceType",
	"WAWebWamEnumTsSurface",
	"WAWebWamEnumUnlockEntryPoint",
	"WAWebWid",
	"countWhere",
	"cr:5923",
	"cr:5932",
	"cr:5959",
	"err",
	"getErrorSafe",
	"gkx",
	"isEmptyObject",
	"nullthrows",
	"react",
	"useLazyRef",
	"useWAWebCallbackAfterRender",
	"useWAWebChatLockRestriction",
	"useWAWebDebouncedCallback",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebOnUnmount",
	"useWAWebShiftTimerCallback",
	"useWAWebStableCallback",
	"useWAWebThrottledCallback",
	"useWAWebUnknownContact",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["signal"], u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N, M, w, A, F, O, B, W, q, U, V, H, G, z, j, K, Q, X, Y, J, Z, ee, te, ne, re, oe, ae = oe || (oe = o("react")), ie = oe, le = ie.startTransition, se = ie.useCallback, ue = ie.useEffect, ce = ie.useImperativeHandle, de = ie.useMemo, me = ie.useRef, pe = ie.useState, _e = [], fe = {
		unreadContainer: {
			zIndex: "x11uqc5h",
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			flexBasis: "xdl72j9",
			overflowX: "x1plvlek",
			overflowY: "xryxfnj",
			$$css: !0
		},
		unreadIcon: {
			verticalAlign: "xwgq4w4",
			$$css: !0
		}
	}, ge = n("cr:5959") == null ? void 0 : n("cr:5959").executeDebugCommand, he = 50, ye = 75, Ce = { THROTTLE: 450 }, be = [o("WAWebChatSearchFilters").SearchFilters.UNREAD], ve = [].concat(be, [
		o("WAWebChatSearchFilters").SearchFilters.CONTACT,
		o("WAWebChatSearchFilters").SearchFilters.GROUP,
		o("WAWebChatSearchFilters").SearchFilters.FAVORITES
	]), Se = [].concat(ve, [o("WAWebChatSearchFilters").SearchFilters.LABELS]), Re = new Set(be), Le = new Set(ve), Ee = new Set(Se), ke = new Set([
		o("WAWebChatSearchFilters").SearchFilters.UNREAD,
		o("WAWebChatSearchFilters").SearchFilters.CONTACT,
		o("WAWebChatSearchFilters").SearchFilters.GROUP,
		o("WAWebChatSearchFilters").SearchFilters.FAVORITES,
		o("WAWebChatSearchFilters").SearchFilters.LABELS,
		o("WAWebChatSearchFilters").SearchFilters.COMMUNITY,
		o("WAWebChatSearchFilters").SearchFilters.CHANNELS,
		o("WAWebChatSearchFilters").SearchFilters.TO_YOU
	]);
	function Ie() {
		return o("WAWebListsGatingUtils").isListsEnabled() ? ke : o("WAWebInboxFiltersGatingUtils").inboxCustomFiltersEnabled() ? Ee : o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() ? Le : Re;
	}
	function Te(e) {
		return e.map(function(e) {
			return babelHelpers.extends({}, e, { showsTertiaryRow: o("WAWebBizAiAgentStatusUtils").shouldShowTertiaryRowForChat(e.chat) });
		});
	}
	var De = [];
	function xe() {
		return o("WAWebABProps").getABPropConfigValue("web_anr_batch_and_queue_bulk_contacts_db_writes_enabled") ? De : [];
	}
	function $e(t) {
		"use no forget";
		var a, i, l = t.chatlistPanelRef, oe = l === void 0 ? null : l, ie = t.endMultiSelect, be = t.hideLockedChats, ve = t.hideMultiSelectBar, Se = t.labelFilter, Re = t.mode, Le = t.multiSelectEntryPoint, Ee = t.multiSelection, ke = t.selectable, De = t.showArchiveV2, $e = t.startChatInteraction, Pe = t.unknownContactPhoneSearchEnabled, Ne = t.unknownContactUsernameSearchEnabled, Me = Se ? { label: Se } : void 0, we = o("WAWebOfflineHandler").OfflineMessageHandler.getResumeUIProgressBarType() === o("WAWebOfflineResumeTypes").ResumeUIProgressBarType.Toastbar, Ae = pe(!1), Fe = Ae[0], Oe = Ae[1], Be = pe(!1), We = Be[0], qe = Be[1], Ue = pe(void 0), Ve = Ue[0], He = Ue[1], Ge = pe([]), ze = Ge[0], je = Ge[1], Ke = pe(o("WAWebNonContactPushNameSearchModel").EMPTY_NON_CONTACT_PUSHNAMES), Qe = Ke[0], Xe = Ke[1], Ye = pe(!1), Je = Ye[0], Ze = Ye[1], et = pe(Le), tt = et[0], nt = et[1], rt = pe(Me), ot = rt[0], at = rt[1], it = pe(void 0), lt = it[0], st = it[1], ut = pe(we), ct = ut[0], dt = ut[1], mt = pe(!1), pt = mt[0], _t = mt[1], ft = o("WAWebABProps").getABPropConfigValue("web_chatlist_fts_listener_cleanup"), gt = function() {
			return Re === r("WAWebChatlistPanelMode").CallsTab ? new (r("WAWebFtsMsgsCallLogCollection"))() : new (r("WAWebFtsMsgsCollection"))();
		}, ht = r("useLazyRef")(gt);
		ft || gt(), r("useWAWebOnUnmount")(function() {
			ft && ht.current.delete(!0);
		});
		var yt = me(new (r("WAWebSingleSelection"))([], function(e) {
			return e.id.toString();
		})), Ct = me(new (o("WAWebChatSearchQuery")).SearchQuery()), bt = me(null), vt = me(null), St = me(null), Rt = me(null), Lt = me(null), Et = me(null), kt = me(null), It = se(function(e) {
			vt.current = e;
		}, []), Tt = me(new (r("WAWebFlatListController"))()), Dt = me(Ee || new (r("WAWebMultiSelection"))([], function(e) {
			return e.id.toString();
		})), xt = me(new (r("WAWebSelectableState"))(ke || !1)), $t = me(new (r("WAWebFilterSession"))()), Pt = me({}), Nt = me(new Set()), Mt = me(null), wt = me(null), At = me(null), Ft = me(null), Ot = me(!1), Bt = me(null), Wt = me(null), qt = me(null), Ut = r("useWAWebUnmountSignal")(), Vt = se(function(e) {
			return !e || !e.label && !e.kind;
		}, []), Ht = se(function(e, t, n) {
			var r = o("WAWebL10NAccentFold").accentFold(e);
			if (!r || !o("WAWebContactSearchGatingUtils").isFuzzySearchEnabled() || !o("WAWebContactSearchGatingUtils").canTermsMeetFuzzySearchThreshold(r.split(/\s+/).filter(Boolean))) return null;
			var a = n.includeActiveChat, i = a === void 0 ? !1 : a, l = n.includeStickyChats, s = Ie(), c = o("WAWebChatCollection").ChatCollection.getModelsArray(), d = o("WAWebContactSearchGatingUtils").getFuzzySearchTimeoutThreshold() * 1e3, m = new (o("WATimeUtils")).MonotonicTimer(), p = !1;
			return {
				candidates: c,
				isTimedOut: function() {
					if (p) return !0;
					var e = m.elapsed();
					return e > d ? (o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
						"Fuzzy chat search timeout ",
						"ms (limit ",
						"ms)"
					])), e, d), p = !0, !0) : !1;
				},
				matchOne: function(n) {
					if (!o("WAWebFrontendChatGetters").getShouldAppearInList(n)) return null;
					var e = i && yt.current.getVal() === n;
					if (e) return { chat: n };
					var a = n.archive && t.kind != null && s.has(t.kind);
					if (a) return null;
					if (l != null && l.has(n.id.toString())) return { chat: n };
					var u = n.contact.searchMatchFuzzy(r);
					if (u == null) return null;
					var c = t.kind == null && t.label == null || o("WAWebChatMessageSearch").matchFilter(n, t);
					return c ? {
						chat: n,
						searchMatch: u
					} : null;
				}
			};
		}, []), Gt = se(function(e) {
			var t = e.filter, n = e.options, a = e.searchText, i = t != null ? t : {}, l = n != null ? n : {}, s = l.excludeFuzzy, u = s === void 0 ? !1 : s, c = l.includeActiveChat, d = c === void 0 ? !1 : c, m = l.includeStickyChats, p = Ie(), _ = (a || "").trim();
			if (_ || !Vt(i)) {
				_ = o("WAWebL10NAccentFold").accentFold(_);
				var f = o("WAWebPhoneNumberSearch").numberSearch(_), g = [];
				o("WAWebChatCollection").ChatCollection.filter(function(e) {
					if (!o("WAWebFrontendChatGetters").getShouldAppearInList(e)) return !1;
					var t = d && yt.current.getVal() === e;
					if (t) return g.push({ chat: e }), !0;
					var n = e.archive && i.kind != null && p.has(i.kind);
					if (n) return !1;
					if (m != null && m.has(e.id.toString())) return g.push({ chat: e }), !0;
					if (i.label != null) {
						var a = e.contact.searchMatchExact(_, f, i.label);
						if (a != null) return g.push({
							chat: e,
							searchMatch: a
						}), !0;
					}
					if (_) {
						var l = e.contact.searchMatchExact(_, f);
						if (l != null) {
							var s = i.kind == null && i.label == null || o("WAWebChatMessageSearch").matchFilter(e, i);
							if (s) return g.push({
								chat: e,
								searchMatch: l
							}), !0;
						}
					} else {
						var u = i.kind == null && i.label == null || o("WAWebChatMessageSearch").matchFilter(e, i);
						if (u) return g.push({ chat: e }), !0;
					}
					var c = !1;
					if (o("WAWebChatGetters").getIsGroup(e) && (c = r("nullthrows")(e.groupMetadata).isUnnamed && o("WAWebParticipantListUtils").calculateUnnamedGroupFullParticipantsList(r("nullthrows")(e.groupMetadata)).includes(_)), c) {
						var h = i.kind == null && i.label == null || o("WAWebChatMessageSearch").matchFilter(e, i);
						if (h) return g.push({ chat: e }), !0;
					}
					return !1;
				});
				var h = g;
				if (!u && g.length === 0 && _) {
					var y = Ht(_, i, {
						includeActiveChat: d,
						includeStickyChats: m
					});
					y != null && (h = o("WAWebSlicedMatcher").drainMatcherSync(y));
				}
				return Te(h);
			}
			var C = o("WAWebChatCollection").ChatCollection.filter(function(e) {
				return !e.archive && o("WAWebFrontendChatGetters").getShouldAppearInList(e);
			});
			return Te(C.map(function(e) {
				return { chat: e };
			}));
		}, [Ht, Vt]), zt = se(async function(e, t, n, r) {
			var a = await o("WAWebSlicedMatcher").searchFuzzyAsync(function() {
				return Ht(e, t, n);
			}, r);
			return Te(a);
		}, [Ht]), jt = pe(function() {
			return Gt({
				filter: ot,
				searchText: ""
			});
		}), Kt = jt[0], Qt = jt[1], Xt = se(function(e) {
			var t = e.searchText, n = e.filter, r = n === void 0 ? {} : n, a = e.includeChats, i = a === void 0 ? !1 : a, l = e.includeNonContacts, s = l === void 0 ? !1 : l;
			if (r.kind === o("WAWebChatSearchFilters").SearchFilters.CONTACT || r.kind === o("WAWebChatSearchFilters").SearchFilters.NON_CONTACT || r.kind === o("WAWebChatSearchFilters").SearchFilters.UNREAD || r.kind === o("WAWebChatSearchFilters").SearchFilters.FAVORITES) return null;
			var u = (t || "").trim();
			if (!u && Vt(r)) return null;
			var c = o("WAWebL10NAccentFold").accentFold(u), d = o("WAWebPhoneNumberSearch").numberSearch(c);
			return {
				query: {
					text: c,
					number: d,
					label: r.label
				},
				filter: {
					showMe: !!c,
					showWithoutName: s,
					cancelAt: e.cancelAt,
					filterFn: function(t) {
						if (i) return !0;
						var e = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(t.id);
						return e == null || !o("WAWebFrontendChatGetters").getShouldAppearInList(e);
					}
				}
			};
		}, [Vt]), Yt = se(function(e) {
			var t = Xt(e != null ? e : {});
			return t == null ? xe() : o("WAWebContactCollection").ContactCollection.searchContacts(t);
		}, [Xt]), Jt = se(function(e) {
			var t = Xt(e);
			return t == null ? xe() : o("WAWebContactCollection").ContactCollection.searchContactsExact(t);
		}, [Xt]), Zt = se(function(t) {
			var n = t.signal, r = babelHelpers.objectWithoutPropertiesLoose(t, e), a = Xt(r);
			return a == null ? Promise.resolve([]) : o("WAWebContactCollection").ContactCollection.searchContactsFuzzy(babelHelpers.extends({}, a, { signal: n }));
		}, [Xt]), en = pe(function() {
			return Yt({
				searchText: "",
				filter: ot
			});
		}), tn = en[0], nn = en[1], rn = de(function() {
			var e = new Map();
			if (tn != null) for (var t of tn) {
				var n = t.contact, r = t.searchMatch;
				e.set(n.id.toString(), r);
			}
			return e;
		}, [tn]), on = se(function(e) {
			e.length > 0 && !Ot.current && (o("WAWebOutContactInviteJourney").startOutContactInviteJourney(), Ot.current = !0);
		}, []), an = se(function(e, t) {
			var n = (e || "").trim();
			if (!n) return Ot.current = !1, [];
			var r = o("WAWebL10NAccentFold").accentFold(n), a = o("WAWebOutContactCollection").OutContactCollection.searchOutContacts({
				query: {
					text: r,
					number: o("WAWebPhoneNumberSearch").numberSearch(n)
				},
				skipFuzzySearch: t == null ? void 0 : t.skipFuzzySearch
			});
			return on(a), a;
		}, [on]), ln = se(function(e) {
			var t = (e || "").trim();
			if (!t) return Ot.current = !1, [];
			var n = o("WAWebOutContactCollection").OutContactCollection.searchOutContactsExact({ query: {
				text: o("WAWebL10NAccentFold").accentFold(t),
				number: o("WAWebPhoneNumberSearch").numberSearch(t)
			} });
			return on(n), n;
		}, [on]), sn = se(async function(e, t) {
			var n = e.trim();
			if (!n) return [];
			var r = await o("WAWebOutContactCollection").OutContactCollection.searchOutContactsFuzzy({
				query: {
					text: o("WAWebL10NAccentFold").accentFold(n),
					number: o("WAWebPhoneNumberSearch").numberSearch(n)
				},
				signal: t
			});
			return t.aborted ? [] : (on(r), r);
		}, [on]), un = pe(function() {
			return [];
		}), cn = un[0], dn = un[1], mn = de(function() {
			var e = new Map();
			for (var t of cn) {
				var n = t.outContact, r = t.searchMatch;
				e.set(n.id.toString(), r);
			}
			return e;
		}, [cn]), pn = de(function() {
			var e = new Map();
			for (var t of Kt) {
				var n = t.chat, r = t.searchMatch;
				r != null && e.set(n.id.toString(), r);
			}
			return e;
		}, [Kt]), _n = de(function() {
			return Kt.map(function(e) {
				var t = e.chat;
				return t;
			});
		}, [Kt]), fn = de(function() {
			return (tn == null ? void 0 : tn.map(function(e) {
				var t = e.contact;
				return t;
			})) || [];
		}, [tn]), gn = pe(""), hn = gn[0], yn = gn[1], Cn = se(function(e) {
			var t = (e || "").trim();
			return !t || Re !== r("WAWebChatlistPanelMode").CommandPalette ? [] : o("WAWebCommandCollection").CommandCollection.query({
				query: t,
				type: "action"
			});
		}, [Re]), bn = pe(function() {
			return Cn("");
		}), vn = bn[0], Sn = bn[1], Rn = se(function(e) {
			var t, a = (e || "").trim();
			return !a || Re !== r("WAWebChatlistPanelMode").CommandPalette || !o("WAWebClientFeatureFlags").isFeatureEnabled("debug_commands") ? [] : (t = n("cr:5923") == null ? void 0 : n("cr:5923").query(a).slice(0, 3)) != null ? t : [];
		}, [Re]), Ln = pe(function() {
			return Rn("");
		}), En = Ln[0], kn = Ln[1], In = se(function(e) {
			var t = (e || "").trim().toLowerCase();
			if (!t || Re !== r("WAWebChatlistPanelMode").CommandPalette) return [];
			var n = o("WAWebChatCollection").ChatCollection.filter(function(e) {
				var n;
				return ((n = e.groupMetadata) == null ? void 0 : n.groupType) === o("WAWebGroupType").GroupType.COMMUNITY && e.formattedTitle.toLowerCase().includes(t);
			});
			return n;
		}, [Re]), Tn = pe(function() {
			return In("");
		}), Dn = Tn[0], xn = Tn[1], $n = se(function(e) {
			var t = (e || "").trim();
			return !t || Re !== r("WAWebChatlistPanelMode").CommandPalette ? [] : o("WAWebCommandCollection").CommandCollection.query({
				query: t,
				type: "setting"
			});
		}, [Re]), Pn = pe(function() {
			return $n("");
		}), Nn = Pn[0], Mn = Pn[1], wn = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), An = r("useWAWebDebouncedCallback")(function(e) {
			var t;
			e === void 0 && (e = !1), Se || io();
			var n = Ct.current.trimmed();
			(t = wt.current) == null || t.abort(), wt.current = new AbortController();
			var a = wt.current.signal;
			qe(!0);
			var i = Promise.resolve().then(function() {
				!e && !Fe && Yn({ searching: !0 }, ye);
			}).then(function() {
				return e && ht.current.resetSearch(), ht.current.search({
					count: o("WAWebFtsConstants").FTS_NUM_RESULTS,
					filter: Ct.current.filter,
					searchTerm: n
				});
			});
			Mt.current = r("WAPromiseRaceAbort")(i, a).then(function(t) {
				t && !t.canceled && (Yn({ searching: !1 }, ye), e && wn());
			}).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).finally(function() {
				var e;
				((e = wt.current) == null ? void 0 : e.signal) === a && (qe(!1), Mt.current = void 0, wt.current = void 0);
			}).catch(function() {
				Fe && Yn({ searching: !1 }, ye);
			});
		}, o("WAWebFtsConstants").FTS_TYPING_DELAY), Fn = se(function(e, t) {
			var n, r, o, a, i = Ct.current, l = i.filter;
			return e === i.trimmed() && ((n = t == null ? void 0 : t.kind) != null ? n : void 0) === ((r = l.kind) != null ? r : void 0) && ((o = t == null ? void 0 : t.label) != null ? o : void 0) === ((a = l.label) != null ? a : void 0);
		}, []), On = r("useWAWebThrottledCallback")(function(e, t) {
			if (!o("WAWebContactSearchGatingUtils").isAsyncFuzzySearchEnabled()) {
				var n = Gt({
					filter: t,
					searchText: e
				});
				lr(n) && Yn({ chats: n }, ye, he);
				return;
			}
			var a = Gt({
				filter: t,
				options: { excludeFuzzy: !0 },
				searchText: e
			}), i = (e || "").trim(), l = i !== "" && a.length === 0;
			if (!l && lr(a) && Yn({ chats: a }, ye, he), l) {
				Bt.current = new AbortController();
				var s = Bt.current.signal;
				return zt(i, t != null ? t : {}, {}, s).then(function(e) {
					if (!(s.aborted || !Fn(i, t))) {
						if (e.length === 0) {
							lr(a) && Yn({ chats: a }, ye, he);
							return;
						}
						Yn({ chats: e }, ye, he);
					}
				}).catch(function(e) {
					o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["runChatFuzzyTimeSliced failed"]))).catching(r("getErrorSafe")(e)).sendLogs("chatlist:chat-fuzzy-refinement-failed");
				});
			}
		}, Ce.THROTTLE, {
			leading: !1,
			trailing: !0
		}), Bn = r("useWAWebThrottledCallback")(function(e, t) {
			if (!o("WAWebContactSearchGatingUtils").isAsyncFuzzySearchEnabled()) {
				var n = Yt({
					searchText: e,
					filter: t,
					includeChats: Re === r("WAWebChatlistPanelMode").CallsTab
				}), a = an(e);
				o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: Updating contacts via throttledFilteredContacts, count: ", ""])), n.length), Yn({
					contacts: n,
					outContacts: a
				}, ye, he);
				return;
			}
			var i = Jt({
				searchText: e,
				filter: t,
				includeChats: Re === r("WAWebChatlistPanelMode").CallsTab
			}), l = ln(e);
			o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: Updating contacts via throttledFilteredContacts, count: ", ""])), i.length);
			var s = (e || "").trim(), u = s !== "" && i.length === 0, c = s !== "" && l.length === 0, g = {};
			if (u || (g.contacts = i), c || (g.outContacts = l), Yn(g, ye, he), !!s) {
				var h = [];
				if (u) {
					Wt.current = new AbortController();
					var y = Wt.current.signal;
					h.push(Zt({
						searchText: s,
						filter: t,
						includeChats: Re === r("WAWebChatlistPanelMode").CallsTab,
						signal: y
					}).then(function(e) {
						if (!(y.aborted || !Fn(s, t))) {
							if (e.length === 0) {
								Yn({ contacts: i }, ye, he);
								return;
							}
							o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: Refining contacts via fuzzy time-sliced pass, count: ", ""])), e.length), Yn({ contacts: e }, ye, he);
						}
					}).catch(function(e) {
						o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["getFilteredContactsFuzzy failed"]))).catching(r("getErrorSafe")(e)).sendLogs("chatlist:contact-fuzzy-refinement-failed");
					}));
				}
				if (c) {
					qt.current = new AbortController();
					var C = qt.current.signal;
					h.push(sn(s, C).then(function(e) {
						if (!(C.aborted || !Fn(s, t))) {
							if (e.length === 0) {
								Yn({ outContacts: l }, ye, he);
								return;
							}
							Yn({ outContacts: e }, ye, he);
						}
					}).catch(function(e) {
						o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["getFilteredOutContactsFuzzy failed"]))).catching(r("getErrorSafe")(e)).sendLogs("chatlist:out-contact-fuzzy-refinement-failed");
					}));
				}
				if (h.length > 0) return Promise.all(h).then(r("WAWebNoop"));
			}
		}, Ce.THROTTLE, {
			leading: !1,
			trailing: !0
		}), Wn = r("useWAWebThrottledCallback")(function(e) {
			var t = Cn(e);
			Yn({ actions: t }, ye, he);
		}, Ce.THROTTLE, {
			leading: !1,
			trailing: !0
		}), qn = r("useWAWebThrottledCallback")(function(e) {
			var t = Rn(e);
			Yn({ debugCommands: t }, ye, he);
		}, Ce.THROTTLE, {
			leading: !1,
			trailing: !0
		}), Un = r("useWAWebThrottledCallback")(function(e) {
			var t = In(e);
			Yn({ communities: t }, ye, he);
		}, Ce.THROTTLE, {
			leading: !1,
			trailing: !0
		}), Vn = r("useWAWebThrottledCallback")(function(e) {
			var t = $n(e);
			Yn({ settingsCommands: t }, ye, he);
		}, Ce.THROTTLE, {
			leading: !1,
			trailing: !0
		}), Hn = r("useWAWebThrottledCallback")(function() {
			if (!Jn()) {
				Bn.cancel();
				var e = Yt({ filter: Ct.current.filter });
				o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: Updating contacts via ContactCollection sort, count: ", ""])), e.length), Yn({ contacts: e });
			}
		}, Ce.THROTTLE), Gn = r("useWAWebThrottledCallback")(function(e) {
			Er(e) && $r();
		}, 100), zn = r("useWAWebDebouncedCallback")(function() {
			var e = Ct.current.trimmed();
			if (!e) {
				je([]);
				return;
			}
			var t = Ct.current.filter;
			if (t.kind === o("WAWebChatSearchFilters").SearchFilters.CONTACT || t.kind === o("WAWebChatSearchFilters").SearchFilters.NON_CONTACT || t.kind === o("WAWebChatSearchFilters").SearchFilters.FAVORITES) {
				je([]);
				return;
			}
			var n = o("WAWebABProps").getABPropConfigValue("wa_web_groups_in_common_multi_contact");
			if (n && o("WAWebFindCommonGroupsContactAction").shouldRunMultiContactTokenSearch(e)) {
				var a, i = e.split(/\s+/).filter(Boolean), l = o("WAWebABProps").getABPropConfigValue("web_max_contacts_to_show_common_groups"), s = i.map(function(e) {
					return Yt({
						searchText: e,
						filter: t,
						includeChats: !0,
						includeNonContacts: !0,
						cancelAt: l + 1
					});
				});
				if (s.some(function(e) {
					return e.length === 0;
				})) {
					je([]);
					return;
				}
				var u = new Set(), c = [];
				for (var d of s) for (var m of d) {
					var p = m.contact, _ = p.id.toString();
					u.has(_) || (u.add(_), c.push(p));
				}
				(a = Ft.current) == null || a.abort(), Ft.current = new AbortController();
				var f = Ft.current.signal;
				At.current = r("WAPromiseRaceAbort")(o("WAWebFindCommonGroupsContactAction").findCommonGroupsForContacts(c), f).then(function() {
					if (e === Ct.current.trimmed()) {
						var t = o("WAWebABProps").getABPropConfigValue("web_max_found_common_groups_displayed"), n = o("WAWebFindCommonGroupsContactAction").findGroupsWithContactGroups(s, t);
						je(n);
					}
				}).catch(r("WAWebNoop")).finally(function() {
					At.current = null, Ft.current = null;
				});
			} else {
				var g, y = o("WAWebABProps").getABPropConfigValue("web_max_contacts_to_show_common_groups"), C = Yt({
					searchText: e,
					filter: t,
					includeChats: !0,
					includeNonContacts: !0,
					cancelAt: y + 1
				});
				if (C.length === 0) {
					je([]);
					return;
				}
				var b = C.map(async function(e) {
					var t = e.contact;
					try {
						return await o("WAWebFindCommonGroupsContactAction").findCommonGroups(t), t.commonGroups;
					} catch (e) {
						var n = String(e);
						throw o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose(["get from participants table failed"]))).verbose().sendLogs("get from participants table failed when finding common groups: " + n), r("err")("get from participants table failed");
					}
				});
				(g = Ft.current) == null || g.abort(), Ft.current = new AbortController();
				var v = Ft.current.signal;
				At.current = r("WAPromiseRaceAbort")(Promise.all(b), v).then(function(t) {
					if (e === Ct.current.trimmed()) {
						var n = kr(t, C.map(function(e) {
							var t = e.contact;
							return t;
						}));
						je(n);
					}
				}).catch(r("WAWebNoop")).finally(function() {
					At.current = null, Ft.current = null;
				});
			}
		}, 750), jn = r("useWAWebDebouncedCallback")(function() {
			var e = Ct.current.trimmed(), t = Ct.current.filter;
			if (!e || t.kind === o("WAWebChatSearchFilters").SearchFilters.CONTACT || t.kind === o("WAWebChatSearchFilters").SearchFilters.NON_CONTACT || t.kind === o("WAWebChatSearchFilters").SearchFilters.FAVORITES) {
				Xe(o("WAWebNonContactPushNameSearchModel").EMPTY_NON_CONTACT_PUSHNAMES);
				return;
			}
			Xe(o("WAWebNonContactPushNameSearchModel").searchNonContactPushnames(e));
		}, o("WAWebNonContactPushNameSearchModel").NON_CONTACT_PUSHNAME_SEARCH_DEBOUNCE_MS), Kn = r("useWAWebDebouncedCallback")(function(e) {
			Ir(e);
		}, 1e3), Qn = se(function(e) {
			r("isEmptyObject")(e) || (e.searching !== void 0 && Oe(e.searching), e.chats !== void 0 && Qt(e.chats), e.contacts !== void 0 && nn(e.contacts), e.outContacts !== void 0 && dn(e.outContacts), e.messages !== void 0 && He(e.messages), e.actions !== void 0 && Sn(e.actions), e.communities !== void 0 && xn(e.communities), e.debugCommands !== void 0 && kn(e.debugCommands), e.settingsCommands !== void 0 && Mn(e.settingsCommands), e.commonGroups !== void 0 && je(e.commonGroups), e.showMultiSelectBar !== void 0 && Ze(e.showMultiSelectBar), e.multiSelectEntryPoint !== void 0 && nt(e.multiSelectEntryPoint), e.filterPreset !== void 0 && at(e.filterPreset), e.unreadButton !== void 0 && st(e.unreadButton), e.showOfflineToastbar !== void 0 && dt(e.showOfflineToastbar), e.lockedChatsEntryPointVisible !== void 0 && _t(e.lockedChatsEntryPointVisible));
		}, []), Xn = r("useWAWebShiftTimerCallback")(function() {
			Qn(Pt.current), Pt.current = {};
		}), Yn = se(function(e, t, n) {
			if (!r("isEmptyObject")(e)) {
				var o = Object.keys(e).some(function(t) {
					return Pt.current[t] !== e[t];
				});
				o && (Object.assign(Pt.current, e), Xn(t, n));
			}
		}, [Xn]), Jn = se(function() {
			return Re === r("WAWebChatlistPanelMode").CallsTab || !!Ct.current.query;
		}, [Re]), Zn = (Re === r("WAWebChatlistPanelMode").Chatlist || Re === r("WAWebChatlistPanelMode").CallsTab) && Jn(), er = Zn && Pe === !0, tr = Zn && Ne === !0, nr = r("useWAWebUnknownContact")({
			phoneOrUsername: hn,
			searchPhoneNumber: er,
			searchUsername: tr,
			alwaysRequireUsernameAtPrefix: !0,
			requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN_CONTACT_SEARCH_GLOBAL
		}), rr = nr.error, or = nr.loading, ar = nr.onRetry, ir = nr.unknownContactInfo, lr = se(function(e) {
			if (!o("WAWebPREGatingUtils").isPREMessageSendEnabled()) return !0;
			var t = Kt.length === e.length;
			if (!t) return !0;
			var n = Kt.some(function(t, n) {
				return t.chat.id !== e[n].chat.id || t.showsTertiaryRow !== e[n].showsTertiaryRow;
			});
			return n;
		}, [Kt]), sr = me(0), ur = me(null), cr = me(null), dr = me(!1);
		o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "remove", function(e) {
			if (o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: ChatCollection remove event, isSearching: ", ""])), !!Ct.current.query), Ct.current.query) {
				var t;
				(t = Bt.current) == null || t.abort();
				var n = Kt.filter(function(t) {
					return t.chat !== e;
				});
				Kt && n.length !== Kt.length && Yn({ chats: n });
			} else On.cancel(), Yn({ chats: Gt({ filter: Ct.current.filter }) });
		}), o("useWAWebListener").useListener(o("WAWebContactCollection").ContactCollection, "remove", function(e) {
			if (Jn()) {
				var t;
				(t = Wt.current) == null || t.abort();
				var n = tn.filter(function(t) {
					return t.contact !== e;
				});
				tn && n.length !== tn.length && (o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
					"WAWebChatlistPanelFunctional: Updating contacts via ContactCollection remove (searching), old count: ",
					", new count: ",
					""
				])), tn.length, n.length), Yn({ contacts: n }));
			} else {
				Bn.cancel();
				var r = Yt({
					searchText: void 0,
					filter: Ct.current.filter
				});
				o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: Updating contacts via ContactCollection remove (not searching), count: ", ""])), r.length), Yn({ contacts: r });
			}
		}), o("useWAWebListener").useListener(Jn() ? o("WAWebOutContactCollection").OutContactCollection : null, [
			"add",
			"change",
			"remove",
			"reset"
		], function() {
			var e;
			(e = qt.current) == null || e.abort();
			var t = Ct.current.query;
			Yn({ outContacts: t ? an(t, { skipFuzzySearch: !0 }) : [] });
		}), o("useWAWebListener").useListener(o("WAWebChatAssignmentCollection").ChatAssignmentCollection, "add remove", function(e) {
			if (o("WAWebChatAssignmentUtils").canAssignChats() && Ct.current.filter.kind === o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU) if (Ct.current.query) {
				var t;
				(t = Bt.current) == null || t.abort();
				var n = Kt.filter(function(t) {
					return t.chat !== e;
				});
				Kt && n.length !== Kt.length && Yn({ chats: n });
			} else On.cancel(), Yn({ chats: Gt({ filter: Ct.current.filter }) });
		});
		var mr = r("useWAWebThrottledCallback")(function(e) {
			if (!(Jn() || Ct.current.filter.kind !== o("WAWebChatSearchFilters").SearchFilters.UNREAD && (!o("WAWebChatAssignmentUtils").canAssignChats() || Ct.current.filter.kind !== o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU))) {
				On.cancel();
				var t = Ct.current.filter.kind === o("WAWebChatSearchFilters").SearchFilters.UNREAD, n = t && o("WAWebABProps").getABPropConfigValue("wa_web_feature_parity_small_wins");
				n && e && Nt.current.add(e.id.toString());
				var r = Gt({
					filter: Ct.current.filter,
					options: {
						includeActiveChat: !0,
						includeStickyChats: n ? Nt.current : void 0
					}
				});
				n && r.forEach(function(e) {
					return Nt.current.add(e.chat.id.toString());
				}), e && !n && (r = r.filter(function(t) {
					return t.chat !== e;
				})), Yn({ chats: r });
			}
		}, Ce.THROTTLE);
		o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, o("WAWebABProps").getABPropConfigValue("web_anr_group_metadata_yield") ? "sort change:archive change:isParentGroup" : "sort change:archive", function() {
			var e;
			if (o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
				"WAWebChatlistPanelFunctional: ChatCollection sort/archive/isParentGroup event, isSearching: ",
				", filter: ",
				""
			])), Jn(), (e = Ct.current.filter.kind) != null ? e : "none"), !Jn()) {
				if (Ct.current.filter.kind === o("WAWebChatSearchFilters").SearchFilters.UNREAD) {
					mr();
					return;
				}
				if (Ct.current.filter.kind === o("WAWebChatSearchFilters").SearchFilters.FAVORITES) {
					pr();
					return;
				}
				if (Ct.current.filter.kind === o("WAWebChatSearchFilters").SearchFilters.TO_YOU) {
					_r();
					return;
				}
				On.cancel();
				var t = Gt({ filter: Ct.current.filter }), n = Kt.length !== t.length || Kt.some(function(e, n) {
					var r, o;
					return e.chat.id !== ((r = t[n]) == null ? void 0 : r.chat.id) || e.showsTertiaryRow !== ((o = t[n]) == null ? void 0 : o.showsTertiaryRow);
				});
				n && Yn(babelHelpers.extends({ chats: t }, void 0));
			}
		}), o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:unreadCount change:isAssignedToMe", function() {
			return mr();
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_chat", function(e) {
			mr(e);
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "chatlock:lock", function() {
			_t(!1);
		});
		var pr = r("useWAWebThrottledCallback")(function() {
			if (!(Jn() || Ct.current.filter.kind !== o("WAWebChatSearchFilters").SearchFilters.FAVORITES)) {
				On.cancel();
				var e = Gt({
					filter: Ct.current.filter,
					options: { includeActiveChat: !1 }
				});
				Yn({ chats: e });
			}
		}, Ce.THROTTLE);
		o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:isFavorite", function() {
			return pr();
		});
		var _r = r("useWAWebThrottledCallback")(function() {
			if (!(Jn() || Ct.current.filter.kind !== o("WAWebChatSearchFilters").SearchFilters.TO_YOU)) {
				On.cancel();
				var e = Gt({
					filter: Ct.current.filter,
					options: { includeActiveChat: !0 }
				});
				Yn({ chats: e });
			}
		}, Ce.THROTTLE);
		o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:hasUnreadMention", function() {
			return _r();
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "offline_progress_update_from_bridge offline_delivery_end_from_bridge", function() {
			return lo();
		}), o("useWAWebListener").useListener(o("WAWebContactCollection").ContactCollection, "sort", Hn), o("useWAWebListener").useListener(ht.current, "bulk_remove reset", function() {
			Jn() || (On.cancel(), Yn({ chats: Gt({ filter: Ct.current.filter }) }));
		}), o("useWAWebListener").useListener(r("WAWebVoipCallsTabPanelManager"), "onWriteCallLogMessage", function() {
			On.cancel(), An(!0);
		}), o("useWAWebListener").useListener(o("WAWebMsgCollection").MsgCollection, "new_msg_sent", function() {
			Jn() ? Nr().then(function() {
				return Rr();
			}) : Rr();
		}), o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:unreadCount", function(e) {}), o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:archive remove", function(e) {}), o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "reset", function() {}), o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "open_modal open_media", function() {
			o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: ModalManager open_modal/open_media event received"]))), Re === r("WAWebChatlistPanelMode").Chatlist && o("WAWebABProps").getABPropConfigValue("inbox_filters_reset_timeout") > 0 && o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() && (o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: Calling handleChatlistDisplayUpdate(true) from open_modal/open_media event"]))), so(!0));
		}), o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal close_media", function() {
			o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: ModalManager close_modal/close_media event received"]))), Re === r("WAWebChatlistPanelMode").Chatlist && o("WAWebABProps").getABPropConfigValue("inbox_filters_reset_timeout") > 0 && o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() && (o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: Calling handleChatlistDisplayUpdate() from close_modal/close_media event"]))), so());
		}), o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:contact.labels", function() {
			o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() && Ct.current.filter.kind === o("WAWebChatSearchFilters").SearchFilters.LABELS && Ct.current.filter.label != null && (On.cancel(), Yn({ chats: Gt({ filter: Ct.current.filter }) }));
		}), o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:capiThreadControl change:isAiHandoff change:labels", function() {
			Jn() || (On.cancel(), Yn({ chats: Gt({ filter: Ct.current.filter }) }));
		}), o("useWAWebListener").useListener(o("WAWebBizAiHandoffRemovalTimingModel").BizAiHandoffRemovalTimingEventBus, "updated", function() {
			Jn() || (On.cancel(), Yn({ chats: Gt({ filter: Ct.current.filter }) }));
		});
		var fr = se(function() {
			var e;
			return !1;
			var t;
			if (ur.current && !((e = ur.current) != null && e.archive)) {
				var n;
				sr.current = (n + .5) * o("WAWebFlatList.react").DEFAULT_ITEM_HEIGHT, t || (t = bt.current != null && bt.current.scrollTop > sr.current), ur.current = void 0;
			}
		}, [lt]), gr = se(function() {
			lt === !0 && (ur.current = void 0, st(!1));
		}, [lt]), hr = se(function(e) {
			if (!e.active) {
				var t = ur.current != null && r("WAWebWid").equals(ur.current.id, e.id);
				e.isDirty() ? t || (ur.current = e) : t && gr();
			}
		}, [gr]), yr = se(function(e) {
			ur.current && r("WAWebWid").equals(ur.current.id, e.id) && gr();
		}, [gr]), Cr = se(function() {
			var e;
			Lt.current && ((e = Lt.current) == null || e.focusFirst());
		}, []), br = se(function() {
			var e = Dt.current && Dt.current.getSelected().length > 0 && !ve;
			Je !== e && Yn({ showMultiSelectBar: e });
		}, [
			Je,
			ve,
			Yn
		]);
		o("useWAWebListener").useListener(Dt.current, "all", br);
		var vr = se(function(e) {
			e.key === "ArrowDown" && (vt.current && !vt.current.cursorIsAtEnd() || (e == null || e.preventDefault(), Cr()));
		}, [Cr]), Sr = se(function(e) {
			e !== tt && nt(e);
		}, [tt]), Rr = se(function() {
			var e = bt.current;
			if (e) {
				var t = e.scrollTop;
				e.scrollTop !== 0 && (t < e.clientHeight ? r("WAWebVelocityAnimate")(e, "scroll", {
					duration: 300,
					container: e,
					offset: -(e.scrollTop + e.getBoundingClientRect().top)
				}) : e.scrollTop = 0);
			}
		}, [gr]), Lr = se(function() {
			var e = Pt.current;
			return e != null && "searching" in e ? e.searching || !1 : Fe;
		}, [Fe]), Er = se(function(e) {
			return !ht.current.hasMoreMsgs || Lr() || Re !== r("WAWebChatlistPanelMode").CallsTab && !r("WAFtsIsSearchQueryEligibleForMessageSearch")(Ct.current.query || "") ? !1 : e.scrollTop + o("WAWebFrontendConstants").SCROLL_FUDGE > e.scrollHeight - e.clientHeight;
		}, [
			ht,
			Lr,
			Re
		]), kr = se(function(e, t) {
			for (var n = new Map(), r = function(o) {
				var r = e[o];
				r && r.forEach(function(e) {
					e && (n.has(e) || n.set(e, []), n.get(e).push(t[o]));
				});
			}, a = 0; a < e.length; a++) r(a);
			var i = [];
			return n.forEach(function(e, t) {
				i.push([t, e]);
			}), i.sort(function(e, t) {
				return e[1].length === t[1].length ? e[0].t != null && t[0].t != null ? t[0].t - e[0].t : e[0].t != null ? -1 : 1 : t[1].length - e[1].length;
			}), i.slice(0, o("WAWebABProps").getABPropConfigValue("web_max_found_common_groups_displayed"));
		}, []), Ir = se(async function(e) {
			if (o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
				"WAWebChatlistPanelFunctional: handleSecretCodeSearch called, searchTextLength: ",
				", hideLockedChats: ",
				""
			])), e.length, be != null ? be : !1), be !== !0) {
				o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: handleSecretCodeSearch early return - hideLockedChats is not true"])));
				return;
			}
			var t = await o("WAWebChatLockUtils").validateSecretCode(e, {
				unlockAppOnSuccess: !0,
				unlockEntryPoint: o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT.SEARCH,
				landingSurface: o("WAWebWamEnumLandingSurface").LANDING_SURFACE.FOLDER
			});
			o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
				"WAWebChatlistPanelFunctional: handleSecretCodeSearch validation result: ",
				", lockedChatsEntryPointVisible: ",
				", chatLockComponentIsMounted: ",
				""
			])), t, pt, o("useWAWebChatLockRestriction").chatLockComponentIsMounted()), !t && pt && !o("useWAWebChatLockRestriction").chatLockComponentIsMounted() && (o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: handleSecretCodeSearch locking chats (validation failed)"]))), o("WAWebChatLockUtils").lockChats()), o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: handleSecretCodeSearch calling debounceSetState, setting lockedChatsEntryPointVisible to: ", ""])), t), Yn({ lockedChatsEntryPointVisible: t });
		}, [
			be,
			pt,
			Yn
		]), Tr = se(function() {
			var e, t = Kt.length, n = tn.length, r = (e = Ve == null ? void 0 : Ve.length) != null ? e : 0, o = ze.length, a = ht.current.length;
			return {
				chatsCount: t,
				contactsCount: n,
				messagesCount: r,
				groupsInCommonCount: o,
				ftsMessagesCount: a
			};
		}, [
			Kt.length,
			tn.length,
			Ve == null ? void 0 : Ve.length,
			ze.length,
			ht
		]);
		ue(function() {
			if (Ct.current.query) {
				var e = Tr(), t = e.chatsCount, n = e.contactsCount, r = e.ftsMessagesCount, a = e.groupsInCommonCount, i = e.messagesCount;
				(t > 0 || n > 0 || r > 0 || a > 0 || i > 0) && o("WAWebCoreActionsODS").logGlobalSearchHasResults(), o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.resultPageShow(babelHelpers.extends({}, e));
			}
		}, [Tr]);
		var Dr = se(function() {
			On.cancel(), Bn.cancel(), Wn.cancel(), qn.cancel(), Un.cancel(), Vn.cancel(), Gn.cancel();
		}, [
			On,
			Bn,
			Wn,
			qn,
			Un,
			Vn,
			Gn
		]), xr = se(function() {
			var e, t, n, r, a;
			An.cancel(), zn.cancel(), jn.cancel(), ht.current.resetSearch(), ht.current.reset(), (e = wt.current) == null || e.abort(), (t = Ft.current) == null || t.abort(), (n = Bt.current) == null || n.abort(), (r = Wt.current) == null || r.abort(), (a = qt.current) == null || a.abort(), qe(!1), je([]), Xe(o("WAWebNonContactPushNameSearchModel").EMPTY_NON_CONTACT_PUSHNAMES), Lr() && Yn({ searching: !1 }, ye);
		}, [
			zn,
			Yn,
			An,
			ht,
			Lr,
			jn
		]), $r = se(function(e, t) {
			var n = e || Ct.current.query;
			Re === r("WAWebChatlistPanelMode").CallsTab || r("WAFtsIsSearchQueryEligibleForMessageSearch")(n) || t != null && t.label ? (Fe || le(function() {
				Oe(!0);
			}), An()) : Lr() ? xr() : ht.current.reset();
		}, [
			Re,
			Lr,
			Fe,
			An,
			xr,
			ht
		]), Pr = r("useWAWebCallbackAfterRender")([
			Kt,
			tn,
			vn,
			En,
			Dn,
			Nn,
			Fe
		]), Nr = se(function() {
			return new Promise(function(e) {
				if (o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: handleStopSearch called"]))), Vt(Ct.current.filter) || o("WAWebFilterLogging").logSearchWithFilterEvent($t.current.sessionId), xr(), o("WAWebNonContactPushNameSearchModel").getNonContactPushNameSearch().invalidateCache(), Ct.current.clear(), Dr(), vt.current != null && (vt.current.clearSearch == null || vt.current.clearSearch()), Pr(e), Ut.aborted) {
					o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: Skipping setState in handleStopSearch because component is unmounting"])));
					return;
				}
				o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: Proceeding with setState in handleStopSearch, updating 8 fields"]))), Qn({
					chats: Gt({}),
					contacts: Yt(),
					outContacts: [],
					actions: Cn(),
					debugCommands: Rn(),
					communities: In(),
					settingsCommands: $n(),
					searching: !1
				});
			});
		}, [
			Vt,
			xr,
			Dr,
			Qn,
			Gt,
			Yt,
			Cn,
			Rn,
			In,
			$n,
			Pr,
			Ut.aborted
		]), Mr = se(function(e, t) {
			var n;
			if (o("WALogger").LOG(M || (M = babelHelpers.taggedTemplateLiteralLoose([
				"WAWebChatlistPanelFunctional: handleSearch called hasSearchText: ",
				", hasLabel: ",
				", filterKind: ",
				""
			])), !!e, !!(t != null && t.label), (n = t == null ? void 0 : t.kind) != null ? n : "none"), Kn(e), yn(e), Re !== r("WAWebChatlistPanelMode").CallsTab && !e && Vt(t)) {
				o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: handleSearch clearing search (empty text and no filter)"]))), Ct.current.updateQuery(e), Ct.current.updateLabelQuery({}), Nr();
				return;
			}
			var a = Ct.current.query;
			if (Re !== r("WAWebChatlistPanelMode").CallsTab && Ct.current.equals(e, t)) {
				o("WALogger").LOG(A || (A = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: handleSearch query unchanged, skipping"])));
				return;
			}
			if (Ct.current.updateQuery(e), Ct.current.updateLabelQuery(t), Jn()) {
				var i, l, s;
				Tt.current.setScrollFromStart(0), (i = Bt.current) == null || i.abort(), (l = Wt.current) == null || l.abort(), (s = qt.current) == null || s.abort(), $r(e, t), zn(), jn(), On(e, t), Bn(e, t), Wn(e), qn(e), Un(e), Vn(e);
			} else a && !e && Nr(), Qt(Gt({ filter: t }));
		}, [
			Kn,
			Re,
			Vt,
			Jn,
			Nr,
			$r,
			zn,
			jn,
			On,
			Bn,
			Wn,
			qn,
			Un,
			Vn,
			Gt
		]), wr = me(Mr);
		ue(function() {
			o("WALogger").LOG(F || (F = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: useEffect[handleSearchRef] running, updating ref with latest handleSearch"]))), wr.current = Mr;
		}, [Mr]), ue(function() {
			if (o("WALogger").LOG(O || (O = babelHelpers.taggedTemplateLiteralLoose([
				"WAWebChatlistPanelFunctional: useEffect[mount] running (component mount), mode: ",
				", hasLabelFilter: ",
				""
			])), Re, !!Se), Re === r("WAWebChatlistPanelMode").CallsTab && (o("WALogger").LOG(B || (B = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: useEffect[mount] initializing CallsTab search"]))), Mr("")), Re === r("WAWebChatlistPanelMode").CommandPalette && (o("WALogger").LOG(W || (W = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: useEffect[mount] initializing CommandPalette"]))), o("WAWebCommandCollection").CommandCollection.reset(), o("WAWebCommandCollection").CommandCollection.initializeCommands()), Se && (o("WALogger").LOG(q || (q = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: useEffect[mount] initializing labelFilter search"]))), Mr("", { label: Se })), o("WAWebChatCollection").ChatCollection.some(function(e) {
				return o("WAWebChatGetters").getIsBroadcast(e);
			})) {
				var e = Kt.some(function(e) {
					var t = e.chat;
					return o("WAWebChatGetters").getIsBroadcast(t);
				}), t = r("countWhere")(Kt, function(e) {
					var t = e.chat;
					return o("WAWebChatGetters").getIsBroadcast(t);
				}), n = o("WAWebChatCollection").ChatCollection.some(function(e) {
					var t, n;
					return o("WAWebChatGetters").getIsBroadcast(e) && ((t = (n = e.broadcastMetadata) == null || (n = n.recipients) == null ? void 0 : n.length) != null ? t : 0) === 0;
				}), a = o("WAWebChatCollection").ChatCollection.some(function(e) {
					var t, n;
					return o("WAWebChatGetters").getIsBroadcast(e) && ((t = (n = e.broadcastMetadata) == null || (n = n.recipients) == null ? void 0 : n.length) != null ? t : 0) !== 0;
				});
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.broadcastChatListItemViewed(e, t, n, a, o("WAWebBizBroadcastDeviceCapabilityCommon").getPrimarySupportsBusinessBroadcast());
			}
		}, []), ue(function() {
			return function() {
				var e, t, n;
				(e = Bt.current) == null || e.abort(), (t = Wt.current) == null || t.abort(), (n = qt.current) == null || n.abort();
			};
		}, []);
		var Ar = se(function() {
			return !!Ct.current.query;
		}, []), Fr = se(function(e, t) {
			if (t != null && o("WAWebContactGetters").getIsMe(t.contact) && o("WAWebMessageYourselfMetricUtils").UiMessageYourselfSearchAction.logMessageYourselfOpenedEvent(t, Jn()), o("WAWebListsLabelGatingUtils").smartFiltersEnabled() && !Se && (!Vt(Ct.current.filter) || Ar())) {
				var n = Ct.current.filter, r = $t.current.sessionId;
				o("WAWebFilterLogging").logSearchItemSelectedFilterEvent({
					chatId: t == null ? void 0 : t.id,
					filter: n,
					searchResult: e,
					sessionId: r
				}), t && o("WAWebComposeBoxActions").ComposeBoxActions.addMsgSendingLogAttributes(t, { handleOnce: function() {
					o("WAWebFilterLogging").logSearchMsgSentFilterEvent(r, n, e, t.id);
				} });
			}
		}, [
			Se,
			Jn,
			Vt,
			Ar
		]), Or = se(function(e) {
			e == null || e.preventDefault(), r("WAWebFocusTracer").focus(St.current);
		}, []), Br = se(async function(e, t, n, r) {
			await o("WAWebChatlistUtils").openExistingChat(t.id, n, r), Fr("message", t);
		}, [Fr]), Wr = se(async function(e, t) {
			var n = o("WAWebFrontendContactGetters").getIsMyContact(t.contact), r = n ? o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_CONTACT_WITH_EXISTING_CHAT : o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_NON_CONTACT_WITH_EXISTING_CHAT;
			o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
				contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.CHATS_LIST_GLOBAL_SEARCH,
				searchActionName: r,
				searchStartsWithAt: Ct.current.query.startsWith("@")
			}), o("WALogger").LOG(U || (U = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: handleChatClick, isSearching: ", ""])), Jn()), Jn() && o("WAWebSearchZeroStateGatingUtils").isSearchZeroStateEnabled() && o("WAWebUseRecentlySearchedChats").addChatToRecentSearches(t.id.toString());
			var a = await o("WAWebChatlistUtils").openExistingChat(t.id) != null, i = a ? o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.INITIATION_SUCCESS : o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.INITIATION_FAILURE;
			o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
				contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.CHATS_LIST_GLOBAL_SEARCH,
				searchActionName: i,
				searchStartsWithAt: Ct.current.query.startsWith("@")
			}), o("WAWebChatGetters").getIsBroadcast(t) ? Fr("broadcast_list", t) : o("WAWebChatGetters").getIsGroup(t) ? (new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
				action: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.GROUP_NAVIGATION,
				surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
				chat: t
			}).commit(), Fr("group", t)) : Fr("chat", t);
		}, [Fr, Jn]), qr = se(async function(e, t) {
			var n = o("WAWebFrontendContactGetters").getIsMyContact(t), a = n ? o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_CONTACT : o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_NON_CONTACT;
			o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
				contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.CHATS_LIST_GLOBAL_SEARCH,
				searchActionName: a,
				searchStartsWithAt: Ct.current.query.startsWith("@")
			});
			var i = await o("WAWebChatlistUtils").openOrCreateLatestChat(t.id), l = i != null ? o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.INITIATION_SUCCESS : o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.INITIATION_FAILURE;
			o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
				contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.CHATS_LIST_GLOBAL_SEARCH,
				searchActionName: l,
				searchStartsWithAt: Ct.current.query.startsWith("@")
			}), Fr("contact", i), Re === r("WAWebChatlistPanelMode").CallsTab && o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
		}, [Re, Fr]), Ur = r("useWAWebStableCallback")(async function(e) {
			var t;
			if (e.preventDefault(), e.stopPropagation(), ir != null) {
				var n = hn.startsWith("@"), r = ir.isUsernameSearch;
				o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
					contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.CHATS_LIST_GLOBAL_SEARCH,
					searchActionName: o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_NON_CONTACT,
					isUsernameSearch: r,
					searchStartsWithAt: n
				});
				var a;
				if ((ir == null ? void 0 : ir.wid) == null) {
					o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
						contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.CHATS_LIST_GLOBAL_SEARCH,
						searchActionName: o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.VIEW_PIN_VERIFICATION,
						isUsernameSearch: r,
						searchStartsWithAt: n
					});
					var i = function() {
						o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
							contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.CHATS_LIST_GLOBAL_SEARCH,
							searchActionName: o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.PIN_VERFICATION_ERROR_SHOWN,
							isUsernameSearch: r,
							searchStartsWithAt: n
						});
					};
					if (a = await o("WAWebUsernameKeyVerificationFlow").usernameKeyVerificationFlow({
						username: ir.username,
						initWithError: ir.triedKey,
						onInvalidKeyError: i
					}), a == null) return;
				} else a = ir.wid;
				var l = (t = ir == null ? void 0 : ir.chat) != null ? t : await o("WAWebChatlistUtils").openOrCreateLatestChat(a);
				o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.resultItemClick(babelHelpers.extends({
					item: l,
					itemTypeOverride: o("WAWebWamEnumSearchUjItemType").SEARCH_UJ_ITEM_TYPE.UNKNOWN_CONTACT
				}, Tr()));
				var s = await o("WAWebCmd").Cmd.openChatFromUnread({
					chat: l,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist
				}), u = s ? o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.INITIATION_SUCCESS : o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.INITIATION_FAILURE;
				o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
					contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.CHATS_LIST_GLOBAL_SEARCH,
					searchActionName: u,
					isUsernameSearch: r,
					searchStartsWithAt: n
				}), s && o("WAWebComposeBoxActions").ComposeBoxActions.focus(l);
			}
		}), Vr = se(function(e, t, a, i) {
			var l;
			e.preventDefault(), e.stopPropagation(), o("WAWebSearchLogging").logSearchActionTypeAheadItemClick(t, i);
			var s;
			t instanceof o("WAWebChatModel").Chat && ((l = t.groupMetadata) == null ? void 0 : l.groupType) === o("WAWebGroupType").GroupType.COMMUNITY && (s = o("WAWebWamEnumSearchUjItemType").SEARCH_UJ_ITEM_TYPE.COMMUNITY);
			var u = Tr();
			if (o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.resultItemClick(babelHelpers.extends({
				item: i != null ? i : t,
				itemTypeOverride: s
			}, u)), $e && $e(), Re === r("WAWebChatlistPanelMode").CommandPalette && o("WAWebModalManager").ModalManager.close(), t instanceof o("WAWebMsgModel").Msg) {
				var c = o("WAWebFrontendMsgGetters").getChat(t);
				c.getEventMsgs().initialize();
				var d = o("WAWebChatMessageSearch").getSearchContext({
					chat: c,
					msgKey: t.id
				});
				d.msg = t, Br(e, c, d);
			} else if (t instanceof o("WAWebChatModel").Chat) {
				var m;
				t.getEventMsgs().initialize(), a != null ? Br(e, t, a, i) : ((m = t.groupMetadata) == null ? void 0 : m.groupType) === o("WAWebGroupType").GroupType.COMMUNITY ? o("WAWebCmd").Cmd.openCommunityHome(t.id, !1) : Wr(e, t);
			} else if (t instanceof r("WAWebContactModel")) qr(e, t);
			else if (t instanceof r("WAWebCommandModel")) switch (t.type) {
				case "setting": {
					o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
						descriptorType: "settings",
						initialStep: o("WAWebSettingsConst").SettingsSteps.cast(t.id)
					} : ae.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, { initialStep: o("WAWebSettingsConst").SettingsSteps.cast(t.id) }));
					break;
				}
				case "action": {
					r("WAWebKeyboardRun")(t.name);
					break;
				}
			}
			else !r("gkx")("26258") && n("cr:5932") && t instanceof n("cr:5932") && (ge == null || ge(t));
		}, [
			Tr,
			$e,
			Re,
			Br,
			Wr,
			qr
		]), Hr = se(function(e) {
			var t, n, r, o, a, i, l, s, u = Ct.current.query, c = Ct.current.filter, d = (t = (n = (r = (o = (a = (i = Rn(u)[0]) != null ? i : Cn(u)[0]) != null ? a : $n(u)[0]) != null ? o : In(u)[0]) != null ? r : (l = Gt({
				filter: c,
				searchText: u
			})[0]) == null ? void 0 : l.chat) != null ? n : (s = Yt({
				searchText: u,
				filter: c
			})[0]) == null ? void 0 : s.contact) != null ? t : ht.current.at(0);
			d && Vr(e, d);
		}, [
			Rn,
			Cn,
			$n,
			In,
			Gt,
			Yt,
			ht,
			Vr
		]), Gr = o("WAWebDrawerManagerContext").useDrawerManagerContext("left"), zr = se(function() {
			var e, t, n = (e = Gr.existsDrawer()) != null ? e : !1;
			n && Re !== r("WAWebChatlistPanelMode").CommandPalette || (r("WAWebFocusTracer").focus(vt.current), (t = vt.current) == null || t.focus == null || t.focus());
		}, [Re, Gr]);
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "focus_chat_search", zr);
		var jr = r("useWAWebStableCallback")(function() {
			var e = kt.current;
			if (e != null) {
				var t = e.querySelector("[tabindex=\"0\"]");
				t == null || t.focus();
			}
		}), Kr = r("useWAWebStableCallback")(function(e) {
			e.preventDefault(), e.stopPropagation();
			var t = Lt.current;
			Kt.length > 0 && t != null && !(t instanceof r("WAWebChatlist_DEPRECATED.react")) ? t.focusLast() : zr();
		}), Qr = de(function() {
			return { up: Kr };
		}, [Kr]), Xr = se(function(e) {
			e.target instanceof HTMLElement && Gn(e.target);
		}, [Gn]), Yr = se(function() {
			var e;
			(e = vt.current) == null || e.clearFilter();
		}, []), Jr = se(function() {
			var e;
			(e = vt.current) == null || e.focus == null || e.focus();
		}, []), Zr = se(function(e) {
			if (Kt != null && Kt.length || tn != null && tn.length || cn != null && cn.length || e.length || Ve != null && Ve.length || Dn != null && Dn.length || En != null && En.length || vn != null && vn.length || Nn != null && Nn.length || ir != null || ze != null && ze.length) return [null, null];
			if (Se) return Fe ? [ae.jsx("span", {}, "null"), null] : [ae.jsx(o("WAWebEmptyState.react").NoResultForLabel, { labelId: Se }, "no-result-for-label"), o("WAWebEmptyState.react").noResultForLabelFbt(Se)];
			if (Ct.current.query) return Fe ? [ae.jsx(o("WAWebEmptyState.react").Searching, {}, "searching"), o("WAWebEmptyState.react").searchingFbt()] : [ae.jsx(o("WAWebEmptyState.react").Search, {
				hasFilter: Ct.current.hasFilter(),
				onClearFilter: Yr
			}, "search"), o("WAWebEmptyState.react").searchFbt()];
			var t = Ct.current.filter.kind;
			if (!Jn() && t != null && [
				o("WAWebChatSearchFilters").SearchFilters.UNREAD,
				o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU,
				o("WAWebChatSearchFilters").SearchFilters.AI_RESPONDING,
				o("WAWebChatSearchFilters").SearchFilters.AI_HANDOFF
			].concat(o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() ? [
				o("WAWebChatSearchFilters").SearchFilters.CONTACT,
				o("WAWebChatSearchFilters").SearchFilters.GROUP,
				o("WAWebChatSearchFilters").SearchFilters.LABELS,
				o("WAWebChatSearchFilters").SearchFilters.COMMUNITY
			] : []).concat(o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled() ? [o("WAWebChatSearchFilters").SearchFilters.FAVORITES] : []).concat(o("WAWebInboxFiltersGatingUtils").inboxToYouFilterEnabled() ? [o("WAWebChatSearchFilters").SearchFilters.TO_YOU] : []).includes(t)) {
				var n, r = (n = o("WAWebEmptyState.react").getNoFilteredChatsStrings(t)) == null ? void 0 : n.title;
				return [ae.jsx(o("WAWebEmptyState.react").NoFilteredChats, {
					filter: Ct.current.filter,
					filterSession: $t.current,
					onClearFilter: Yr,
					onShowSearch: Jr
				}, "no-filtered-chats"), r];
			}
			return o("WAWebChatCollection").ChatCollection.some(function(e) {
				return o("WAWebFrontendChatGetters").getShouldAppearInList(e);
			}) ? [ae.jsx(o("WAWebEmptyState.react").AllArchived, {}, "all-archived"), o("WAWebEmptyState.react").allArchivedFbt()] : [ae.jsx(o("WAWebEmptyState.react").ListChats, {}, "list-chats"), o("WAWebEmptyState.react").listChatsFbt()];
		}, [
			Kt,
			tn,
			Ve,
			Dn,
			En,
			vn,
			Nn,
			Fe,
			Se,
			Jn,
			Yr,
			Jr,
			ir,
			ze,
			cn.length
		]), eo = se(function(e) {
			bt.current = e;
		}, []), to = se(function() {
			Yn({ showMultiSelectBar: !1 }), Dt.current && Dt.current.unsetAll(), xt.current && xt.current.setSelectable(!!ke), ie == null || ie();
		}, [
			Yn,
			ke,
			ie
		]), no = se(function() {
			return !1;
		}, [lt]), ro = function() {
			return o("WAWebChatCollection").ChatCollection.some(function(e) {
				return e.archive && o("WAWebFrontendChatGetters").getShouldAppearInList(e);
			});
		}, oo = se(function() {
			var e;
			return !!(Re === r("WAWebChatlistPanelMode").Chatlist && De === !0 && !Je && Ct.current.isEmptyQuery() && !Ct.current.hasFilter() && Kt && Kt.length > 0 && ((e = xt.current) == null ? void 0 : e.isSelectable) !== !0 && ro());
		}, [
			Re,
			De,
			Je,
			Kt
		]), ao = se(function() {
			return o("WAWebChatlistPanelUtils").shouldShowLockedChatsPanel({
				mode: Re,
				selectableState: xt.current,
				showMultiSelectBar: Je,
				hideLockedChats: be === !0,
				lockedChatsEntryPointVisible: pt,
				searchQuery: Ct.current
			});
		}, [
			Re,
			be,
			Je,
			pt
		]), io = se(function() {
			o("WAWebListsLabelGatingUtils").smartFiltersEnabled() && o("WAWebFilterLogging").logSearchFilterEvent($t.current.sessionId, Ct.current.filter);
		}, []), lo = se(function() {
			Yn({ showOfflineToastbar: o("WAWebOfflineHandler").OfflineMessageHandler.getResumeUIProgressBarType() === o("WAWebOfflineResumeTypes").ResumeUIProgressBarType.Toastbar });
		}, [Yn]), so = se(function(e) {
			var t;
			if (e === void 0 && (e = !1), o("WALogger").LOG(V || (V = babelHelpers.taggedTemplateLiteralLoose([
				"WAWebChatlistPanelFunctional: handleChatlistDisplayUpdate called, open: ",
				", chatlistHidden: ",
				", filterKind: ",
				""
			])), e, dr.current, (t = Ct.current.filter.kind) != null ? t : "none"), o("WAWebCmd").Cmd.chatListVisibilityChange(!e), !Ct.current.filter.kind) {
				o("WALogger").LOG(H || (H = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistDisplayUpdate: Early return - no filter selected"])));
				return;
			}
			if (e && dr.current) {
				o("WALogger").LOG(G || (G = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistDisplayUpdate: Early return - chatlist already hidden"])));
				return;
			}
			var n = new Promise(function(e) {
				self.setTimeout(function() {
					var t, n = (t = Gr.existsDrawer()) != null ? t : !1;
					e(n);
				}, 0);
			}), a = new Promise(function(e) {
				self.setTimeout(function() {
					return o("WAWebModalManager").ModalManager.exists(e);
				}, 0);
			}), i = new Promise(function(e) {
				self.setTimeout(function() {
					return o("WAWebModalManager").ModalManager.existsMedia(e);
				}, 0);
			});
			Promise.all([
				n,
				a,
				i
			]).then(function(e) {
				var t = e[0], n = e[1], a = e[2];
				if (Ut.aborted) {
					o("WALogger").LOG(z || (z = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistDisplayUpdate: Unmount signal aborted, skipping processing"])));
					return;
				}
				var i = t || n || a;
				if (o("WALogger").LOG(j || (j = babelHelpers.taggedTemplateLiteralLoose([
					"WAWebChatlistDisplayUpdate: Checked overlays - drawer: ",
					", modal: ",
					", media: ",
					", hovered: ",
					""
				])), t, n, a, i), i) o("WALogger").LOG(K || (K = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistDisplayUpdate: Marking chatlist as hidden (user left chats screen)"]))), dr.current = !0;
				else if (dr.current) if (o("WALogger").LOG(Q || (Q = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistDisplayUpdate: Marking chatlist as visible (user returned to chats screen)"]))), dr.current = !1, cr.current != null) {
					var l = Date.now() - r("nullthrows")(cr.current), s = o("WAWebABProps").getABPropConfigValue("inbox_filters_reset_timeout") * 1e3;
					o("WALogger").LOG(X || (X = babelHelpers.taggedTemplateLiteralLoose([
						"WAWebChatlistDisplayUpdate: Filters set timespan: ",
						"ms, reset timeout: ",
						"ms"
					])), l, s), l >= s ? (o("WALogger").LOG(Y || (Y = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistDisplayUpdate: Resetting filters via handleSearchRef.current (timeout exceeded)"]))), wr.current(Ct.current.query, { kind: null })) : o("WALogger").LOG(J || (J = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistDisplayUpdate: Filters NOT reset (timeout not exceeded)"])));
				} else o("WALogger").LOG(Z || (Z = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistDisplayUpdate: No filter set time tracked"])));
				else o("WALogger").LOG(ee || (ee = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistDisplayUpdate: Chatlist remains visible (no state change)"])));
			}).catch(r("WAWebNoop"));
		}, [Gr, Ut.aborted]), uo = se(function() {
			if (Ar()) return !0;
			var e = o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled();
			if (e === !1 && Ct.current.hasLabelFilter()) return !0;
			if (Ct.current.filter.kind == null) return !1;
			var t = e ? o("WAWebChatSearchFilters").isFilterExcludedFromSearchTreatmentInInboxFlow : o("WAWebChatSearchFilters").isFilterExcludedFromSearchTreatmentInNormalFlow;
			return !t(Ct.current.filter.kind);
		}, [Ar]), co = se(function() {
			Re === r("WAWebChatlistPanelMode").Chatlist && o("WAWebABProps").getABPropConfigValue("inbox_filters_reset_timeout") > 0 && o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() && (o("WALogger").LOG(te || (te = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: Calling handleChatlistDisplayUpdate(true) from handleDrawerOpenLeft"]))), so(!0));
		}, [Re, so]), mo = se(function() {
			Re === r("WAWebChatlistPanelMode").Chatlist && o("WAWebABProps").getABPropConfigValue("inbox_filters_reset_timeout") > 0 && o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() && (o("WALogger").LOG(ne || (ne = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: Calling handleChatlistDisplayUpdate() from handleLeftDrawerClose"]))), so());
		}, [Re, so]);
		ce(oe, function() {
			return {
				containsDOMNode: function(t) {
					return Et.current ? Et.current.contains(t) : !1;
				},
				onLeftDrawerOpen: co,
				onLeftDrawerClose: mo
			};
		}, [co, mo]);
		var po = ht.current, _o = po.length > 0 ? po.toArray() : _e, fo = Zr(_o), go = fo[1], ho = fo[0], yo, Co = o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled(), bo = uo(), vo = null, So = !1, Ro = ((a = Ct.current) == null ? void 0 : a.query) || "";
		if (bo && (er || tr) && Ro) {
			var Lo = ir == null ? void 0 : ir.wid, Eo = ir == null ? void 0 : ir.username, ko = !tn.some(function(e) {
				var t = e.contact;
				return Lo != null && t.id.equals(Lo) || Eo != null && o("WAWebUsernameTypes").serializeMaybeUsername(t.username) === Eo;
			}) && (Re === r("WAWebChatlistPanelMode").CallsTab || !Kt.some(function(e) {
				var t = e.chat;
				return Lo != null && t.id.equals(Lo) || Eo != null && o("WAWebUsernameTypes").serializeMaybeUsername(t.contact.username) === Eo;
			}));
			or ? vo = ae.jsx("div", {
				className: "x78zum5 x1c4vz4f x2lah0s xdl72j9 xl56j7k x1p5oq8j xwxc41k",
				children: ae.jsx(o("WAWebSpinner.react").Spinner, {
					stroke: 6,
					size: 24
				})
			}, "unknown-contact-loading") : rr ? vo = ae.jsx(o("WAWebEmptyState.react").SearchingNonContactError, {
				error: o("WAWebContactlessChatUtils").getErrorStr(rr),
				onClick: ar
			}, "error") : ir && ko && (So = !0, vo = ae.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
				ref: kt,
				handlers: Qr,
				children: ae.jsx(r("WAWebUnknownContactSection.react"), {
					contactInfo: ir,
					onUnknownContactClick: Ur,
					searchText: Ro
				})
			}, "unknown-contact"));
		}
		if (ho == null && (Re === r("WAWebChatlistPanelMode").CallsTab || Re === r("WAWebChatlistPanelMode").Chatlist || Re === r("WAWebChatlistPanelMode").CommandPalette && Ct.current.query.length > 0)) {
			var Io, To = o("WAWebAdaptiveLayoutGatingUtils").shouldUseFunctionalChatlist(), Do = {
				flatListController: Tt.current,
				chats: _n,
				contacts: fn,
				contactSearchMatches: rn,
				messages: Ve || [],
				actions: vn || [],
				debugCommands: En || [],
				communities: Dn || [],
				settings: Nn || [],
				filterPreset: ot,
				commonGroups: ze,
				nonContactPushnames: Qe,
				isSearching: bo,
				isSearchInputFocused: !!((Io = vt.current) != null && Io.hasFocus()),
				searchQuery: Ct.current,
				ftsResult: _o,
				selection: yt.current,
				onFocusSearch: zr,
				multiSelection: Dt.current,
				onStartMultiSelect: Sr,
				selectableState: xt.current,
				onItemClick: Vr,
				mode: Re
			};
			To ? ho = ae.jsx(r("WAWebChatlistFunctional.react"), babelHelpers.extends({}, Do, {
				outContacts: cn,
				outContactSearchMatches: mn,
				chatSearchMatches: pn,
				onFocusAfterLast: So ? jr : void 0,
				ref: Lt
			})) : ho = ae.jsx(r("WAWebChatlist_DEPRECATED.react"), babelHelpers.extends({}, Do, {
				onFocusFilters: Or,
				chatSearchMatches: pn,
				ref: Lt
			}));
		}
		ct === !0 && (yo = ae.jsx(r("WAWebOfflineResumeProgressToastbar.react"), {})), yo == null && ho != null && Re === r("WAWebChatlistPanelMode").Chatlist && (yo = Jn() ? ae.jsx(r("WAWebDesktopUpsellSearchToastbar.react"), {}) : ae.jsx(r("WAWebDesktopUpsellChatlistToastbar.react"), {}));
		var xo = Fe && Se || Fe && ht.current.length ? ae.jsx("div", {
			className: "x78zum5 x1c4vz4f x2lah0s xdl72j9 xl56j7k x1p5oq8j xwxc41k",
			children: ae.jsx(o("WAWebSpinner.react").Spinner, {
				stroke: 6,
				size: 24
			})
		}, "spinner") : null, $o = Re === r("WAWebChatlistPanelMode").CommandPalette, Po = ht.current.hasMoreMsgs && An.length || no() ? Xr : void 0, No, Mo = null, wo, Ao = se(function(e) {
			var t;
			Ct.current.filter.kind === o("WAWebChatSearchFilters").SearchFilters.UNREAD && e.kind !== o("WAWebChatSearchFilters").SearchFilters.UNREAD && o("WAWebABProps").getABPropConfigValue("wa_web_feature_parity_small_wins") && Nt.current.clear(), cr.current = e.kind == null ? void 0 : Date.now(), o("WALogger").LOG(re || (re = babelHelpers.taggedTemplateLiteralLoose([
				"WAWebChatlistPanelFunctional: Calling handleSearch from handleFilterChange, hasQuery: ",
				", filterKind: ",
				""
			])), !!Ct.current.query, (t = e.kind) != null ? t : "none"), wr.current(Ct.current.query, e);
		}, []), Fo = se(function() {
			var e;
			(e = vt.current) == null || e.dismissZeroState();
		}, []), Oo, Bo;
		if (Je || tt === o("WAWebMultiSelectEntryPointConstants").MultiSelectEntryPoint.ChatListHeaderDropdown) {
			var Wo = o("WAWebConnModel").Conn.isSMB && (tt !== o("WAWebMultiSelectEntryPointConstants").MultiSelectEntryPoint.ChatListHeaderDropdown || !o("WAWebABProps").getABPropConfigValue("wa_web_feature_parity_small_wins"));
			No = ae.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "MultiSelect",
				escapable: !0,
				dismissOnWindowResize: !0,
				requestDismiss: to,
				children: Wo ? ae.jsx(r("WAWebMixedMultiSelectBar.react"), {
					theme: "chatlist-panel",
					selectedModels: Dt.current,
					labelEditEnabled: tt === o("WAWebMultiSelectEntryPointConstants").MultiSelectEntryPoint.Label,
					multiSelectEntryPoint: tt,
					onCancel: to
				}) : ae.jsx(r("WAWebConsumerMultiSelectBar.react"), {
					selectedModels: Dt.current,
					onCancel: to
				})
			}, "multiSelectBar"), go = go == null && No != null ? s._(
				/*BTDS*/
				""
			) : go;
		} else if (wo = ae.jsx("div", babelHelpers.extends({ ref: Rt }, {
			0: { className: "x1c4vz4f x2lah0s xdl72j9 x1280gxy" },
			1: { className: "x1c4vz4f x2lah0s xdl72j9 x1280gxy x18wx58x" }
		}[!!$o << 0], { children: ae.jsx(o("WAWebChatListSearch.react").ListSearch, {
			ref: It,
			handleKeyDown: vr,
			onSearch: Mr,
			onEnter: Hr,
			filterSession: $t.current,
			listFilterEnabled: Re === r("WAWebChatlistPanelMode").Chatlist && !Co,
			chatlistFilterEnabled: Re === r("WAWebChatlistPanelMode").Chatlist && !Co,
			inboxFiltersEnabled: Re === r("WAWebChatlistPanelMode").Chatlist && Co,
			inboxFilter: Ct.current.filter,
			focusOnMount: Re === r("WAWebChatlistPanelMode").CommandPalette,
			loading: We,
			mode: Re,
			showPlaceholderUntilType: !0,
			usernameSearchEnabled: Ne === !0,
			tsSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_LIST,
			searchZeroStateAllowed: Re === r("WAWebChatlistPanelMode").Chatlist,
			askMetaAiButtonAllowed: Re === r("WAWebChatlistPanelMode").Chatlist
		}) })), Re === r("WAWebChatlistPanelMode").Chatlist && Co) {
			var qo = function(t) {
				var e;
				(e = vt.current) != null && e.hasFocus() && t.button === 0 && t.preventDefault();
			};
			Oo = ae.jsx(o("WAWebChatListFilters.react").ChatListFilters, {
				ref: St,
				filter: Ct.current.filter,
				filterSession: $t.current,
				onDropdownOpen: Fo,
				onFilterChange: Ao,
				onMouseDown: qo
			});
		}
		if (!Se) {
			var Uo;
			!r("gkx")("26258") && lt === !0 && (Uo = ae.jsx("div", {
				className: "x10l6tqk x78zum5 xuk3077 xl56j7k xh8yej3 x16wdlz0 x2b8uid",
				children: ae.jsxs("div", {
					className: "x9f619 x1rg5ohu xq8v1hd x1fgtraw xexx8yu x18d9i69 xwn43p0 x1x5flf6 x6ikm8r x10wlt62 x1nxh6w3 xk50ysn xgif2c7 x1pse0pq xlyipyv xuxw1ft xyp3urf x6nvzda x4i4b9w xhl9efl xj65ea0 x1wpep30",
					onClick: Rr,
					role: "button",
					children: [ae.jsx("span", {
						className: "xqf2s3x",
						children: ae.jsx(o("WAWebChevronCustomIcons").ChevronUpCustomIcon, {
							xstyle: fe.unreadIcon,
							height: 19,
							displayInline: !0
						})
					}), s._(
						/*BTDS*/
						""
					)]
				})
			}));
			var Vo = Re === r("WAWebChatlistPanelMode").CallsTab || $o || bo || No ? null : ae.jsx(r("WAWebChatlistBanners.react"), {});
			Mo = ae.jsxs(ae.Fragment, { children: [
				wo,
				Oo,
				Vo,
				No,
				null
			] });
		}
		oo() && (Bo = ae.jsx(r("WAWebChatArchivedEntryPoint.react"), {}));
		var Ho;
		ao() && (Ho = ae.jsx(r("WAWebChatLockedEntryPoint.react"), { onOpen: function() {
			Nr();
		} }));
		var Go;
		yo == null && (Ar() || Ct.current.hasLabelFilter()) && (Go = ae.jsx(o("WAWebHistorySyncComponents.react").HistorySyncSearchIncompletePlaceholder, {}));
		var zo = (i = Kt == null ? void 0 : Kt.length) != null ? i : 0, jo = o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled() && zo > 0 ? ae.jsx(o("WAWebPrivacyNarrativeE2EMessage.react").E2eMessageChatList, {}) : null, Ko = Re === r("WAWebChatlistPanelMode").CallsTab && o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled() ? ae.jsx(o("WAWebPrivacyNarrativeE2EMessage.react").E2eMessageCallsList, {}) : null, Qo = go != null ? ae.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, { text: go }) : null;
		return ae.jsxs("div", babelHelpers.extends({ id: "side" }, {
			0: { className: "x78zum5 x1n2onr6 xdt5ytf x5yr21d x6ikm8r x10wlt62 x1280gxy" },
			2: { className: "x78zum5 x1n2onr6 xdt5ytf x5yr21d x1280gxy x1p5oq8j xwxc41k x1g0dm76 xpdmqnj x6ikm8r x10wlt62" },
			1: { className: "x78zum5 x1n2onr6 xdt5ytf x5yr21d x6ikm8r x10wlt62 x1280gxy xd0qcmr xsh6knr x1n13l81 xv8lwpf" },
			3: { className: "x78zum5 x1n2onr6 xdt5ytf x5yr21d x1280gxy x1p5oq8j xwxc41k x1g0dm76 xpdmqnj x6ikm8r x10wlt62 xd0qcmr xsh6knr x1n13l81 xv8lwpf" }
		}[!!$o << 1 | !!$o << 0], {
			ref: Et,
			children: [
				ae.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
					name: "app-header",
					children: Mo
				}),
				ae.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
					name: "chat-list",
					type: "fatal",
					children: ae.jsxs(r("WAWebFlatListContainer.react"), {
						flatListControllers: [Tt.current],
						ref: eo,
						className: {
							0: { className: "x1vjfegm x78zum5 xdt5ytf x1iyjqo2 x1odjw0f x1280gxy" },
							2: { className: "x1vjfegm x78zum5 xdt5ytf x1iyjqo2 x1odjw0f x1280gxy x5u1c9j" },
							1: { className: "x1vjfegm x78zum5 xdt5ytf x1iyjqo2 x1odjw0f x1280gxy xe09je3 x1rohswg xfk6m8" },
							3: { className: "x1vjfegm x78zum5 xdt5ytf x1iyjqo2 x1odjw0f x1280gxy x5u1c9j xe09je3 x1rohswg xfk6m8" }
						}[!!o("WAWebStylesEnv").hasSafariFix << 1 | (Re === r("WAWebChatlistPanelMode").CommandPalette) << 0].className,
						onScroll: Po,
						id: "pane-side",
						"data-scrolltracepolicy": "wa.web.chatlist",
						children: [
							Ho,
							!r("WAWebEnvironment").isWindows && Bo,
							Qo,
							ho,
							vo,
							xo,
							Re === r("WAWebChatlistPanelMode").Chatlist && (Go != null ? Go : jo),
							Re === r("WAWebChatlistPanelMode").CallsTab && Ko
						]
					})
				}),
				ae.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
					name: "out-of-chat-player",
					children: ae.jsx(r("WAWebPttOocPlayer"), {})
				}),
				ae.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
					name: "chat-list-toastbar",
					children: yo != null ? yo : null
				})
			]
		}));
	}
	$e.displayName = $e.name + " [from " + i.id + "]", l.getFiltersWhichArchivedChats = Ie, l.ChatlistPanelFunctional = $e;
}), 226);
