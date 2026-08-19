__d("WAWebChatlistPanelFunctionalLegacy.react", [
	"fbt",
	"Promise",
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
	"asyncToGeneratorRuntime",
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
	var e = ["signal"], u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N, M, w, A, F, O, B, W, q, U, V, H, G, z, j, K, Q, X, Y, J, Z, ee, te, ne, re, oe, ae, ie = ae || (ae = o("react")), le = ae, se = le.startTransition, ue = le.useCallback, ce = le.useEffect, de = le.useImperativeHandle, me = le.useMemo, pe = le.useRef, _e = le.useState, fe = [], ge = {
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
	}, he = n("cr:5959") == null ? void 0 : n("cr:5959").executeDebugCommand, ye = 50, Ce = 75, be = { THROTTLE: 450 }, ve = [o("WAWebChatSearchFilters").SearchFilters.UNREAD], Se = [].concat(ve, [
		o("WAWebChatSearchFilters").SearchFilters.CONTACT,
		o("WAWebChatSearchFilters").SearchFilters.GROUP,
		o("WAWebChatSearchFilters").SearchFilters.FAVORITES
	]), Re = [].concat(Se, [o("WAWebChatSearchFilters").SearchFilters.LABELS]), Le = new Set(ve), Ee = new Set(Se), ke = new Set(Re), Ie = new Set([
		o("WAWebChatSearchFilters").SearchFilters.UNREAD,
		o("WAWebChatSearchFilters").SearchFilters.CONTACT,
		o("WAWebChatSearchFilters").SearchFilters.GROUP,
		o("WAWebChatSearchFilters").SearchFilters.FAVORITES,
		o("WAWebChatSearchFilters").SearchFilters.LABELS,
		o("WAWebChatSearchFilters").SearchFilters.COMMUNITY,
		o("WAWebChatSearchFilters").SearchFilters.CHANNELS,
		o("WAWebChatSearchFilters").SearchFilters.TO_YOU
	]);
	function Te() {
		return o("WAWebListsGatingUtils").isListsEnabled() ? Ie : o("WAWebInboxFiltersGatingUtils").inboxCustomFiltersEnabled() ? ke : o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() ? Ee : Le;
	}
	function De(e) {
		return e.map(function(e) {
			return babelHelpers.extends({}, e, { showsTertiaryRow: o("WAWebBizAiAgentStatusUtils").shouldShowTertiaryRowForChat(e.chat) });
		});
	}
	var xe = [];
	function $e() {
		return o("WAWebABProps").getABPropConfigValue("web_anr_batch_and_queue_bulk_contacts_db_writes_enabled") ? xe : [];
	}
	function Pe(t) {
		"use no forget";
		var a, i, l = t.chatlistPanelRef, ae = l === void 0 ? null : l, le = t.endMultiSelect, ve = t.hideLockedChats, Se = t.hideMultiSelectBar, Re = t.labelFilter, Le = t.mode, Ee = t.multiSelectEntryPoint, ke = t.multiSelection, Ie = t.selectable, xe = t.showArchiveV2, Pe = t.startChatInteraction, Ne = t.unknownContactPhoneSearchEnabled, Me = t.unknownContactUsernameSearchEnabled, we = Re ? { label: Re } : void 0, Ae = o("WAWebOfflineHandler").OfflineMessageHandler.getResumeUIProgressBarType() === o("WAWebOfflineResumeTypes").ResumeUIProgressBarType.Toastbar, Fe = _e(!1), Oe = Fe[0], Be = Fe[1], We = _e(!1), qe = We[0], Ue = We[1], Ve = _e(void 0), He = Ve[0], Ge = Ve[1], ze = _e([]), je = ze[0], Ke = ze[1], Qe = _e(o("WAWebNonContactPushNameSearchModel").EMPTY_NON_CONTACT_PUSHNAMES), Xe = Qe[0], Ye = Qe[1], Je = _e(!1), Ze = Je[0], et = Je[1], tt = _e(Ee), nt = tt[0], rt = tt[1], ot = _e(we), at = ot[0], it = ot[1], lt = _e(void 0), st = lt[0], ut = lt[1], ct = _e(Ae), dt = ct[0], mt = ct[1], pt = _e(!1), _t = pt[0], ft = pt[1], gt = o("WAWebABProps").getABPropConfigValue("web_chatlist_fts_listener_cleanup"), ht = function() {
			return Le === r("WAWebChatlistPanelMode").CallsTab ? new (r("WAWebFtsMsgsCallLogCollection"))() : new (r("WAWebFtsMsgsCollection"))();
		}, yt = r("useLazyRef")(ht);
		gt || ht(), r("useWAWebOnUnmount")(function() {
			gt && yt.current.delete(!0);
		});
		var Ct = pe(new (r("WAWebSingleSelection"))([], function(e) {
			return e.id.toString();
		})), bt = pe(new (o("WAWebChatSearchQuery")).SearchQuery()), vt = pe(null), St = pe(null), Rt = pe(null), Lt = pe(null), Et = pe(null), kt = pe(null), It = pe(null), Tt = ue(function(e) {
			St.current = e;
		}, []), Dt = pe(new (r("WAWebFlatListController"))()), xt = pe(ke || new (r("WAWebMultiSelection"))([], function(e) {
			return e.id.toString();
		})), $t = pe(new (r("WAWebSelectableState"))(Ie || !1)), Pt = pe(new (r("WAWebFilterSession"))()), Nt = pe({}), Mt = pe(new Set()), wt = pe(null), At = pe(null), Ft = pe(null), Ot = pe(null), Bt = pe(!1), Wt = pe(null), qt = pe(null), Ut = pe(null), Vt = r("useWAWebUnmountSignal")(), Ht = ue(function(e) {
			return !e || !e.label && !e.kind;
		}, []), Gt = ue(function(e, t, n) {
			var r = o("WAWebL10NAccentFold").accentFold(e);
			if (!r || !o("WAWebContactSearchGatingUtils").isFuzzySearchEnabled() || !o("WAWebContactSearchGatingUtils").canTermsMeetFuzzySearchThreshold(r.split(/\s+/).filter(Boolean))) return null;
			var a = n.includeActiveChat, i = a === void 0 ? !1 : a, l = n.includeStickyChats, s = Te(), c = o("WAWebChatCollection").ChatCollection.getModelsArray(), d = o("WAWebContactSearchGatingUtils").getFuzzySearchTimeoutThreshold() * 1e3, m = new (o("WATimeUtils")).MonotonicTimer(), p = !1;
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
					var e = i && Ct.current.getVal() === n;
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
		}, []), zt = ue(function(e) {
			var t = e.filter, n = e.options, a = e.searchText, i = t != null ? t : {}, l = n != null ? n : {}, s = l.excludeFuzzy, u = s === void 0 ? !1 : s, c = l.includeActiveChat, d = c === void 0 ? !1 : c, m = l.includeStickyChats, p = Te(), _ = (a || "").trim();
			if (_ || !Ht(i)) {
				_ = o("WAWebL10NAccentFold").accentFold(_);
				var f = o("WAWebPhoneNumberSearch").numberSearch(_), g = [];
				o("WAWebChatCollection").ChatCollection.filter(function(e) {
					if (!o("WAWebFrontendChatGetters").getShouldAppearInList(e)) return !1;
					var t = d && Ct.current.getVal() === e;
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
					var y = Gt(_, i, {
						includeActiveChat: d,
						includeStickyChats: m
					});
					y != null && (h = o("WAWebSlicedMatcher").drainMatcherSync(y));
				}
				return De(h);
			}
			var C = o("WAWebChatCollection").ChatCollection.filter(function(e) {
				return !e.archive && o("WAWebFrontendChatGetters").getShouldAppearInList(e);
			});
			return De(C.map(function(e) {
				return { chat: e };
			}));
		}, [Gt, Ht]), jt = ue((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r) {
				var a = yield o("WAWebSlicedMatcher").searchFuzzyAsync(function() {
					return Gt(e, t, n);
				}, r);
				return De(a);
			});
			return function(t, n, r, o) {
				return e.apply(this, arguments);
			};
		})(), [Gt]), Kt = _e(function() {
			return zt({
				filter: at,
				searchText: ""
			});
		}), Qt = Kt[0], Xt = Kt[1], Yt = ue(function(e) {
			var t = e.searchText, n = e.filter, r = n === void 0 ? {} : n, a = e.includeChats, i = a === void 0 ? !1 : a, l = e.includeNonContacts, s = l === void 0 ? !1 : l;
			if (r.kind === o("WAWebChatSearchFilters").SearchFilters.CONTACT || r.kind === o("WAWebChatSearchFilters").SearchFilters.NON_CONTACT || r.kind === o("WAWebChatSearchFilters").SearchFilters.UNREAD || r.kind === o("WAWebChatSearchFilters").SearchFilters.FAVORITES) return null;
			var u = (t || "").trim();
			if (!u && Ht(r)) return null;
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
		}, [Ht]), Jt = ue(function(e) {
			var t = Yt(e != null ? e : {});
			return t == null ? $e() : o("WAWebContactCollection").ContactCollection.searchContacts(t);
		}, [Yt]), Zt = ue(function(e) {
			var t = Yt(e);
			return t == null ? $e() : o("WAWebContactCollection").ContactCollection.searchContactsExact(t);
		}, [Yt]), en = ue(function(t) {
			var r = t.signal, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = Yt(a);
			return i == null ? (oe || (oe = n("Promise"))).resolve([]) : o("WAWebContactCollection").ContactCollection.searchContactsFuzzy(babelHelpers.extends({}, i, { signal: r }));
		}, [Yt]), tn = _e(function() {
			return Jt({
				searchText: "",
				filter: at
			});
		}), nn = tn[0], rn = tn[1], on = me(function() {
			var e = new Map();
			if (nn != null) for (var t of nn) {
				var n = t.contact, r = t.searchMatch;
				e.set(n.id.toString(), r);
			}
			return e;
		}, [nn]), an = ue(function(e) {
			e.length > 0 && !Bt.current && (o("WAWebOutContactInviteJourney").startOutContactInviteJourney(), Bt.current = !0);
		}, []), ln = ue(function(e, t) {
			var n = (e || "").trim();
			if (!n) return Bt.current = !1, [];
			var r = o("WAWebL10NAccentFold").accentFold(n), a = o("WAWebOutContactCollection").OutContactCollection.searchOutContacts({
				query: {
					text: r,
					number: o("WAWebPhoneNumberSearch").numberSearch(n)
				},
				skipFuzzySearch: t == null ? void 0 : t.skipFuzzySearch
			});
			return an(a), a;
		}, [an]), sn = ue(function(e) {
			var t = (e || "").trim();
			if (!t) return Bt.current = !1, [];
			var n = o("WAWebOutContactCollection").OutContactCollection.searchOutContactsExact({ query: {
				text: o("WAWebL10NAccentFold").accentFold(t),
				number: o("WAWebPhoneNumberSearch").numberSearch(t)
			} });
			return an(n), n;
		}, [an]), un = ue((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				var n = e.trim();
				if (!n) return [];
				var r = yield o("WAWebOutContactCollection").OutContactCollection.searchOutContactsFuzzy({
					query: {
						text: o("WAWebL10NAccentFold").accentFold(n),
						number: o("WAWebPhoneNumberSearch").numberSearch(n)
					},
					signal: t
				});
				return t.aborted ? [] : (an(r), r);
			});
			return function(t, n) {
				return e.apply(this, arguments);
			};
		})(), [an]), cn = _e(function() {
			return [];
		}), dn = cn[0], mn = cn[1], pn = me(function() {
			var e = new Map();
			for (var t of dn) {
				var n = t.outContact, r = t.searchMatch;
				e.set(n.id.toString(), r);
			}
			return e;
		}, [dn]), _n = me(function() {
			var e = new Map();
			for (var t of Qt) {
				var n = t.chat, r = t.searchMatch;
				r != null && e.set(n.id.toString(), r);
			}
			return e;
		}, [Qt]), fn = me(function() {
			return Qt.map(function(e) {
				var t = e.chat;
				return t;
			});
		}, [Qt]), gn = me(function() {
			return (nn == null ? void 0 : nn.map(function(e) {
				var t = e.contact;
				return t;
			})) || [];
		}, [nn]), hn = _e(""), yn = hn[0], Cn = hn[1], bn = ue(function(e) {
			var t = (e || "").trim();
			return !t || Le !== r("WAWebChatlistPanelMode").CommandPalette ? [] : o("WAWebCommandCollection").CommandCollection.query({
				query: t,
				type: "action"
			});
		}, [Le]), vn = _e(function() {
			return bn("");
		}), Sn = vn[0], Rn = vn[1], Ln = ue(function(e) {
			var t, a = (e || "").trim();
			return !a || Le !== r("WAWebChatlistPanelMode").CommandPalette || !o("WAWebClientFeatureFlags").isFeatureEnabled("debug_commands") ? [] : (t = n("cr:5923") == null ? void 0 : n("cr:5923").query(a).slice(0, 3)) != null ? t : [];
		}, [Le]), En = _e(function() {
			return Ln("");
		}), kn = En[0], In = En[1], Tn = ue(function(e) {
			var t = (e || "").trim().toLowerCase();
			if (!t || Le !== r("WAWebChatlistPanelMode").CommandPalette) return [];
			var n = o("WAWebChatCollection").ChatCollection.filter(function(e) {
				var n;
				return ((n = e.groupMetadata) == null ? void 0 : n.groupType) === o("WAWebGroupType").GroupType.COMMUNITY && e.formattedTitle.toLowerCase().includes(t);
			});
			return n;
		}, [Le]), Dn = _e(function() {
			return Tn("");
		}), xn = Dn[0], $n = Dn[1], Pn = ue(function(e) {
			var t = (e || "").trim();
			return !t || Le !== r("WAWebChatlistPanelMode").CommandPalette ? [] : o("WAWebCommandCollection").CommandCollection.query({
				query: t,
				type: "setting"
			});
		}, [Le]), Nn = _e(function() {
			return Pn("");
		}), Mn = Nn[0], wn = Nn[1], An = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), Fn = r("useWAWebDebouncedCallback")(function(e) {
			var t;
			e === void 0 && (e = !1), Re || lo();
			var a = bt.current.trimmed();
			(t = At.current) == null || t.abort(), At.current = new AbortController();
			var i = At.current.signal;
			Ue(!0);
			var l = (oe || (oe = n("Promise"))).resolve().then(function() {
				!e && !Oe && Jn({ searching: !0 }, Ce);
			}).then(function() {
				return e && yt.current.resetSearch(), yt.current.search({
					count: o("WAWebFtsConstants").FTS_NUM_RESULTS,
					filter: bt.current.filter,
					searchTerm: a
				});
			});
			wt.current = r("WAPromiseRaceAbort")(l, i).then(function(t) {
				t && !t.canceled && (Jn({ searching: !1 }, Ce), e && An());
			}).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).finally(function() {
				var e;
				((e = At.current) == null ? void 0 : e.signal) === i && (Ue(!1), wt.current = void 0, At.current = void 0);
			}).catch(function() {
				Oe && Jn({ searching: !1 }, Ce);
			});
		}, o("WAWebFtsConstants").FTS_TYPING_DELAY), On = ue(function(e, t) {
			var n, r, o, a, i = bt.current, l = i.filter;
			return e === i.trimmed() && ((n = t == null ? void 0 : t.kind) != null ? n : void 0) === ((r = l.kind) != null ? r : void 0) && ((o = t == null ? void 0 : t.label) != null ? o : void 0) === ((a = l.label) != null ? a : void 0);
		}, []), Bn = r("useWAWebThrottledCallback")(function(e, t) {
			if (!o("WAWebContactSearchGatingUtils").isAsyncFuzzySearchEnabled()) {
				var n = zt({
					filter: t,
					searchText: e
				});
				sr(n) && Jn({ chats: n }, Ce, ye);
				return;
			}
			var a = zt({
				filter: t,
				options: { excludeFuzzy: !0 },
				searchText: e
			}), i = (e || "").trim(), l = i !== "" && a.length === 0;
			if (!l && sr(a) && Jn({ chats: a }, Ce, ye), l) {
				Wt.current = new AbortController();
				var s = Wt.current.signal;
				return jt(i, t != null ? t : {}, {}, s).then(function(e) {
					if (!(s.aborted || !On(i, t))) {
						if (e.length === 0) {
							sr(a) && Jn({ chats: a }, Ce, ye);
							return;
						}
						Jn({ chats: e }, Ce, ye);
					}
				}).catch(function(e) {
					o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["runChatFuzzyTimeSliced failed"]))).catching(r("getErrorSafe")(e)).sendLogs("chatlist:chat-fuzzy-refinement-failed");
				});
			}
		}, be.THROTTLE, {
			leading: !1,
			trailing: !0
		}), Wn = r("useWAWebThrottledCallback")(function(e, t) {
			if (!o("WAWebContactSearchGatingUtils").isAsyncFuzzySearchEnabled()) {
				var a = Jt({
					searchText: e,
					filter: t,
					includeChats: Le === r("WAWebChatlistPanelMode").CallsTab
				}), i = ln(e);
				o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: Updating contacts via throttledFilteredContacts, count: ", ""])), a.length), Jn({
					contacts: a,
					outContacts: i
				}, Ce, ye);
				return;
			}
			var l = Zt({
				searchText: e,
				filter: t,
				includeChats: Le === r("WAWebChatlistPanelMode").CallsTab
			}), s = sn(e);
			o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: Updating contacts via throttledFilteredContacts, count: ", ""])), l.length);
			var u = (e || "").trim(), c = u !== "" && l.length === 0, g = u !== "" && s.length === 0, h = {};
			if (c || (h.contacts = l), g || (h.outContacts = s), Jn(h, Ce, ye), !!u) {
				var y = [];
				if (c) {
					qt.current = new AbortController();
					var C = qt.current.signal;
					y.push(en({
						searchText: u,
						filter: t,
						includeChats: Le === r("WAWebChatlistPanelMode").CallsTab,
						signal: C
					}).then(function(e) {
						if (!(C.aborted || !On(u, t))) {
							if (e.length === 0) {
								Jn({ contacts: l }, Ce, ye);
								return;
							}
							o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: Refining contacts via fuzzy time-sliced pass, count: ", ""])), e.length), Jn({ contacts: e }, Ce, ye);
						}
					}).catch(function(e) {
						o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["getFilteredContactsFuzzy failed"]))).catching(r("getErrorSafe")(e)).sendLogs("chatlist:contact-fuzzy-refinement-failed");
					}));
				}
				if (g) {
					Ut.current = new AbortController();
					var b = Ut.current.signal;
					y.push(un(u, b).then(function(e) {
						if (!(b.aborted || !On(u, t))) {
							if (e.length === 0) {
								Jn({ outContacts: s }, Ce, ye);
								return;
							}
							Jn({ outContacts: e }, Ce, ye);
						}
					}).catch(function(e) {
						o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["getFilteredOutContactsFuzzy failed"]))).catching(r("getErrorSafe")(e)).sendLogs("chatlist:out-contact-fuzzy-refinement-failed");
					}));
				}
				if (y.length > 0) return (oe || (oe = n("Promise"))).all(y).then(r("WAWebNoop"));
			}
		}, be.THROTTLE, {
			leading: !1,
			trailing: !0
		}), qn = r("useWAWebThrottledCallback")(function(e) {
			var t = bn(e);
			Jn({ actions: t }, Ce, ye);
		}, be.THROTTLE, {
			leading: !1,
			trailing: !0
		}), Un = r("useWAWebThrottledCallback")(function(e) {
			var t = Ln(e);
			Jn({ debugCommands: t }, Ce, ye);
		}, be.THROTTLE, {
			leading: !1,
			trailing: !0
		}), Vn = r("useWAWebThrottledCallback")(function(e) {
			var t = Tn(e);
			Jn({ communities: t }, Ce, ye);
		}, be.THROTTLE, {
			leading: !1,
			trailing: !0
		}), Hn = r("useWAWebThrottledCallback")(function(e) {
			var t = Pn(e);
			Jn({ settingsCommands: t }, Ce, ye);
		}, be.THROTTLE, {
			leading: !1,
			trailing: !0
		}), Gn = r("useWAWebThrottledCallback")(function() {
			if (!Zn()) {
				Wn.cancel();
				var e = Jt({ filter: bt.current.filter });
				o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: Updating contacts via ContactCollection sort, count: ", ""])), e.length), Jn({ contacts: e });
			}
		}, be.THROTTLE), zn = r("useWAWebThrottledCallback")(function(e) {
			kr(e) && Pr();
		}, 100), jn = r("useWAWebDebouncedCallback")(function() {
			var e = bt.current.trimmed();
			if (!e) {
				Ke([]);
				return;
			}
			var t = bt.current.filter;
			if (t.kind === o("WAWebChatSearchFilters").SearchFilters.CONTACT || t.kind === o("WAWebChatSearchFilters").SearchFilters.NON_CONTACT || t.kind === o("WAWebChatSearchFilters").SearchFilters.FAVORITES) {
				Ke([]);
				return;
			}
			var a = o("WAWebABProps").getABPropConfigValue("wa_web_groups_in_common_multi_contact");
			if (a && o("WAWebFindCommonGroupsContactAction").shouldRunMultiContactTokenSearch(e)) {
				var i, l = e.split(/\s+/).filter(Boolean), s = o("WAWebABProps").getABPropConfigValue("web_max_contacts_to_show_common_groups"), u = l.map(function(e) {
					return Jt({
						searchText: e,
						filter: t,
						includeChats: !0,
						includeNonContacts: !0,
						cancelAt: s + 1
					});
				});
				if (u.some(function(e) {
					return e.length === 0;
				})) {
					Ke([]);
					return;
				}
				var c = new Set(), d = [];
				for (var m of u) for (var p of m) {
					var _ = p.contact, f = _.id.toString();
					c.has(f) || (c.add(f), d.push(_));
				}
				(i = Ot.current) == null || i.abort(), Ot.current = new AbortController();
				var g = Ot.current.signal;
				Ft.current = r("WAPromiseRaceAbort")(o("WAWebFindCommonGroupsContactAction").findCommonGroupsForContacts(d), g).then(function() {
					if (e === bt.current.trimmed()) {
						var t = o("WAWebABProps").getABPropConfigValue("web_max_found_common_groups_displayed"), n = o("WAWebFindCommonGroupsContactAction").findGroupsWithContactGroups(u, t);
						Ke(n);
					}
				}).catch(r("WAWebNoop")).finally(function() {
					Ft.current = null, Ot.current = null;
				});
			} else {
				var y, C = o("WAWebABProps").getABPropConfigValue("web_max_contacts_to_show_common_groups"), b = Jt({
					searchText: e,
					filter: t,
					includeChats: !0,
					includeNonContacts: !0,
					cancelAt: C + 1
				});
				if (b.length === 0) {
					Ke([]);
					return;
				}
				var v = b.map((function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						var t = e.contact;
						try {
							return yield o("WAWebFindCommonGroupsContactAction").findCommonGroups(t), t.commonGroups;
						} catch (e) {
							var n = String(e);
							throw o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose(["get from participants table failed"]))).verbose().sendLogs("get from participants table failed when finding common groups: " + n), r("err")("get from participants table failed");
						}
					});
					return function(t) {
						return e.apply(this, arguments);
					};
				})());
				(y = Ot.current) == null || y.abort(), Ot.current = new AbortController();
				var S = Ot.current.signal;
				Ft.current = r("WAPromiseRaceAbort")((oe || (oe = n("Promise"))).all(v), S).then(function(t) {
					if (e === bt.current.trimmed()) {
						var n = Ir(t, b.map(function(e) {
							var t = e.contact;
							return t;
						}));
						Ke(n);
					}
				}).catch(r("WAWebNoop")).finally(function() {
					Ft.current = null, Ot.current = null;
				});
			}
		}, 750), Kn = r("useWAWebDebouncedCallback")(function() {
			var e = bt.current.trimmed(), t = bt.current.filter;
			if (!e || t.kind === o("WAWebChatSearchFilters").SearchFilters.CONTACT || t.kind === o("WAWebChatSearchFilters").SearchFilters.NON_CONTACT || t.kind === o("WAWebChatSearchFilters").SearchFilters.FAVORITES) {
				Ye(o("WAWebNonContactPushNameSearchModel").EMPTY_NON_CONTACT_PUSHNAMES);
				return;
			}
			Ye(o("WAWebNonContactPushNameSearchModel").searchNonContactPushnames(e));
		}, o("WAWebNonContactPushNameSearchModel").NON_CONTACT_PUSHNAME_SEARCH_DEBOUNCE_MS), Qn = r("useWAWebDebouncedCallback")(function(e) {
			Tr(e);
		}, 1e3), Xn = ue(function(e) {
			r("isEmptyObject")(e) || (e.searching !== void 0 && Be(e.searching), e.chats !== void 0 && Xt(e.chats), e.contacts !== void 0 && rn(e.contacts), e.outContacts !== void 0 && mn(e.outContacts), e.messages !== void 0 && Ge(e.messages), e.actions !== void 0 && Rn(e.actions), e.communities !== void 0 && $n(e.communities), e.debugCommands !== void 0 && In(e.debugCommands), e.settingsCommands !== void 0 && wn(e.settingsCommands), e.commonGroups !== void 0 && Ke(e.commonGroups), e.showMultiSelectBar !== void 0 && et(e.showMultiSelectBar), e.multiSelectEntryPoint !== void 0 && rt(e.multiSelectEntryPoint), e.filterPreset !== void 0 && it(e.filterPreset), e.unreadButton !== void 0 && ut(e.unreadButton), e.showOfflineToastbar !== void 0 && mt(e.showOfflineToastbar), e.lockedChatsEntryPointVisible !== void 0 && ft(e.lockedChatsEntryPointVisible));
		}, []), Yn = r("useWAWebShiftTimerCallback")(function() {
			Xn(Nt.current), Nt.current = {};
		}), Jn = ue(function(e, t, n) {
			if (!r("isEmptyObject")(e)) {
				var o = Object.keys(e).some(function(t) {
					return Nt.current[t] !== e[t];
				});
				o && (Object.assign(Nt.current, e), Yn(t, n));
			}
		}, [Yn]), Zn = ue(function() {
			return Le === r("WAWebChatlistPanelMode").CallsTab || !!bt.current.query;
		}, [Le]), er = (Le === r("WAWebChatlistPanelMode").Chatlist || Le === r("WAWebChatlistPanelMode").CallsTab) && Zn(), tr = er && Ne === !0, nr = er && Me === !0, rr = r("useWAWebUnknownContact")({
			phoneOrUsername: yn,
			searchPhoneNumber: tr,
			searchUsername: nr,
			alwaysRequireUsernameAtPrefix: !0,
			requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN_CONTACT_SEARCH_GLOBAL
		}), or = rr.error, ar = rr.loading, ir = rr.onRetry, lr = rr.unknownContactInfo, sr = ue(function(e) {
			if (!o("WAWebPREGatingUtils").isPREMessageSendEnabled()) return !0;
			var t = Qt.length === e.length;
			if (!t) return !0;
			var n = Qt.some(function(t, n) {
				return t.chat.id !== e[n].chat.id || t.showsTertiaryRow !== e[n].showsTertiaryRow;
			});
			return n;
		}, [Qt]), ur = pe(0), cr = pe(null), dr = pe(null), mr = pe(!1);
		o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "remove", function(e) {
			if (o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: ChatCollection remove event, isSearching: ", ""])), !!bt.current.query), bt.current.query) {
				var t;
				(t = Wt.current) == null || t.abort();
				var n = Qt.filter(function(t) {
					return t.chat !== e;
				});
				Qt && n.length !== Qt.length && Jn({ chats: n });
			} else Bn.cancel(), Jn({ chats: zt({ filter: bt.current.filter }) });
		}), o("useWAWebListener").useListener(o("WAWebContactCollection").ContactCollection, "remove", function(e) {
			if (Zn()) {
				var t;
				(t = qt.current) == null || t.abort();
				var n = nn.filter(function(t) {
					return t.contact !== e;
				});
				nn && n.length !== nn.length && (o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
					"WAWebChatlistPanelFunctional: Updating contacts via ContactCollection remove (searching), old count: ",
					", new count: ",
					""
				])), nn.length, n.length), Jn({ contacts: n }));
			} else {
				Wn.cancel();
				var r = Jt({
					searchText: void 0,
					filter: bt.current.filter
				});
				o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: Updating contacts via ContactCollection remove (not searching), count: ", ""])), r.length), Jn({ contacts: r });
			}
		}), o("useWAWebListener").useListener(Zn() ? o("WAWebOutContactCollection").OutContactCollection : null, [
			"add",
			"change",
			"remove",
			"reset"
		], function() {
			var e;
			(e = Ut.current) == null || e.abort();
			var t = bt.current.query;
			Jn({ outContacts: t ? ln(t, { skipFuzzySearch: !0 }) : [] });
		}), o("useWAWebListener").useListener(o("WAWebChatAssignmentCollection").ChatAssignmentCollection, "add remove", function(e) {
			if (o("WAWebChatAssignmentUtils").canAssignChats() && bt.current.filter.kind === o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU) if (bt.current.query) {
				var t;
				(t = Wt.current) == null || t.abort();
				var n = Qt.filter(function(t) {
					return t.chat !== e;
				});
				Qt && n.length !== Qt.length && Jn({ chats: n });
			} else Bn.cancel(), Jn({ chats: zt({ filter: bt.current.filter }) });
		});
		var pr = r("useWAWebThrottledCallback")(function(e) {
			if (!(Zn() || bt.current.filter.kind !== o("WAWebChatSearchFilters").SearchFilters.UNREAD && (!o("WAWebChatAssignmentUtils").canAssignChats() || bt.current.filter.kind !== o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU))) {
				Bn.cancel();
				var t = bt.current.filter.kind === o("WAWebChatSearchFilters").SearchFilters.UNREAD, n = t && o("WAWebABProps").getABPropConfigValue("wa_web_feature_parity_small_wins");
				n && e && Mt.current.add(e.id.toString());
				var r = zt({
					filter: bt.current.filter,
					options: {
						includeActiveChat: !0,
						includeStickyChats: n ? Mt.current : void 0
					}
				});
				n && r.forEach(function(e) {
					return Mt.current.add(e.chat.id.toString());
				}), e && !n && (r = r.filter(function(t) {
					return t.chat !== e;
				})), Jn({ chats: r });
			}
		}, be.THROTTLE);
		o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, o("WAWebABProps").getABPropConfigValue("web_anr_group_metadata_yield") ? "sort change:archive change:isParentGroup" : "sort change:archive", function() {
			var e;
			if (o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
				"WAWebChatlistPanelFunctional: ChatCollection sort/archive/isParentGroup event, isSearching: ",
				", filter: ",
				""
			])), Zn(), (e = bt.current.filter.kind) != null ? e : "none"), !Zn()) {
				if (bt.current.filter.kind === o("WAWebChatSearchFilters").SearchFilters.UNREAD) {
					pr();
					return;
				}
				if (bt.current.filter.kind === o("WAWebChatSearchFilters").SearchFilters.FAVORITES) {
					_r();
					return;
				}
				if (bt.current.filter.kind === o("WAWebChatSearchFilters").SearchFilters.TO_YOU) {
					fr();
					return;
				}
				Bn.cancel();
				var t = zt({ filter: bt.current.filter }), n = Qt.length !== t.length || Qt.some(function(e, n) {
					var r, o;
					return e.chat.id !== ((r = t[n]) == null ? void 0 : r.chat.id) || e.showsTertiaryRow !== ((o = t[n]) == null ? void 0 : o.showsTertiaryRow);
				});
				n && Jn(babelHelpers.extends({ chats: t }, void 0));
			}
		}), o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:unreadCount change:isAssignedToMe", function() {
			return pr();
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_chat", function(e) {
			pr(e);
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "chatlock:lock", function() {
			ft(!1);
		});
		var _r = r("useWAWebThrottledCallback")(function() {
			if (!(Zn() || bt.current.filter.kind !== o("WAWebChatSearchFilters").SearchFilters.FAVORITES)) {
				Bn.cancel();
				var e = zt({
					filter: bt.current.filter,
					options: { includeActiveChat: !1 }
				});
				Jn({ chats: e });
			}
		}, be.THROTTLE);
		o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:isFavorite", function() {
			return _r();
		});
		var fr = r("useWAWebThrottledCallback")(function() {
			if (!(Zn() || bt.current.filter.kind !== o("WAWebChatSearchFilters").SearchFilters.TO_YOU)) {
				Bn.cancel();
				var e = zt({
					filter: bt.current.filter,
					options: { includeActiveChat: !0 }
				});
				Jn({ chats: e });
			}
		}, be.THROTTLE);
		o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:hasUnreadMention", function() {
			return fr();
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "offline_progress_update_from_bridge offline_delivery_end_from_bridge", function() {
			return so();
		}), o("useWAWebListener").useListener(o("WAWebContactCollection").ContactCollection, "sort", Gn), o("useWAWebListener").useListener(yt.current, "bulk_remove reset", function() {
			Zn() || (Bn.cancel(), Jn({ chats: zt({ filter: bt.current.filter }) }));
		}), o("useWAWebListener").useListener(r("WAWebVoipCallsTabPanelManager"), "onWriteCallLogMessage", function() {
			Bn.cancel(), Fn(!0);
		}), o("useWAWebListener").useListener(o("WAWebMsgCollection").MsgCollection, "new_msg_sent", function() {
			Zn() ? Mr().then(function() {
				return Lr();
			}) : Lr();
		}), o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:unreadCount", function(e) {}), o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:archive remove", function(e) {}), o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "reset", function() {}), o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "open_modal open_media", function() {
			o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: ModalManager open_modal/open_media event received"]))), Le === r("WAWebChatlistPanelMode").Chatlist && o("WAWebABProps").getABPropConfigValue("inbox_filters_reset_timeout") > 0 && o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() && (o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: Calling handleChatlistDisplayUpdate(true) from open_modal/open_media event"]))), uo(!0));
		}), o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal close_media", function() {
			o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: ModalManager close_modal/close_media event received"]))), Le === r("WAWebChatlistPanelMode").Chatlist && o("WAWebABProps").getABPropConfigValue("inbox_filters_reset_timeout") > 0 && o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() && (o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: Calling handleChatlistDisplayUpdate() from close_modal/close_media event"]))), uo());
		}), o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:contact.labels", function() {
			o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() && bt.current.filter.kind === o("WAWebChatSearchFilters").SearchFilters.LABELS && bt.current.filter.label != null && (Bn.cancel(), Jn({ chats: zt({ filter: bt.current.filter }) }));
		}), o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:capiThreadControl change:isAiHandoff change:labels", function() {
			Zn() || (Bn.cancel(), Jn({ chats: zt({ filter: bt.current.filter }) }));
		}), o("useWAWebListener").useListener(o("WAWebBizAiHandoffRemovalTimingModel").BizAiHandoffRemovalTimingEventBus, "updated", function() {
			Zn() || (Bn.cancel(), Jn({ chats: zt({ filter: bt.current.filter }) }));
		});
		var gr = ue(function() {
			var e;
			return !1;
			var t;
			if (cr.current && !((e = cr.current) != null && e.archive)) {
				var n;
				ur.current = (n + .5) * o("WAWebFlatList.react").DEFAULT_ITEM_HEIGHT, t || (t = vt.current != null && vt.current.scrollTop > ur.current), cr.current = void 0;
			}
		}, [st]), hr = ue(function() {
			st === !0 && (cr.current = void 0, ut(!1));
		}, [st]), yr = ue(function(e) {
			if (!e.active) {
				var t = cr.current != null && r("WAWebWid").equals(cr.current.id, e.id);
				e.isDirty() ? t || (cr.current = e) : t && hr();
			}
		}, [hr]), Cr = ue(function(e) {
			cr.current && r("WAWebWid").equals(cr.current.id, e.id) && hr();
		}, [hr]), br = ue(function() {
			var e;
			Et.current && ((e = Et.current) == null || e.focusFirst());
		}, []), vr = ue(function() {
			var e = xt.current && xt.current.getSelected().length > 0 && !Se;
			Ze !== e && Jn({ showMultiSelectBar: e });
		}, [
			Ze,
			Se,
			Jn
		]);
		o("useWAWebListener").useListener(xt.current, "all", vr);
		var Sr = ue(function(e) {
			e.key === "ArrowDown" && (St.current && !St.current.cursorIsAtEnd() || (e == null || e.preventDefault(), br()));
		}, [br]), Rr = ue(function(e) {
			e !== nt && rt(e);
		}, [nt]), Lr = ue(function() {
			var e = vt.current;
			if (e) {
				var t = e.scrollTop;
				e.scrollTop !== 0 && (t < e.clientHeight ? r("WAWebVelocityAnimate")(e, "scroll", {
					duration: 300,
					container: e,
					offset: -(e.scrollTop + e.getBoundingClientRect().top)
				}) : e.scrollTop = 0);
			}
		}, [hr]), Er = ue(function() {
			var e = Nt.current;
			return e != null && "searching" in e ? e.searching || !1 : Oe;
		}, [Oe]), kr = ue(function(e) {
			return !yt.current.hasMoreMsgs || Er() || Le !== r("WAWebChatlistPanelMode").CallsTab && !r("WAFtsIsSearchQueryEligibleForMessageSearch")(bt.current.query || "") ? !1 : e.scrollTop + o("WAWebFrontendConstants").SCROLL_FUDGE > e.scrollHeight - e.clientHeight;
		}, [
			yt,
			Er,
			Le
		]), Ir = ue(function(e, t) {
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
		}, []), Tr = ue((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				if (o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
					"WAWebChatlistPanelFunctional: handleSecretCodeSearch called, searchTextLength: ",
					", hideLockedChats: ",
					""
				])), e.length, ve != null ? ve : !1), ve !== !0) {
					o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: handleSecretCodeSearch early return - hideLockedChats is not true"])));
					return;
				}
				var t = yield o("WAWebChatLockUtils").validateSecretCode(e, {
					unlockAppOnSuccess: !0,
					unlockEntryPoint: o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT.SEARCH,
					landingSurface: o("WAWebWamEnumLandingSurface").LANDING_SURFACE.FOLDER
				});
				o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
					"WAWebChatlistPanelFunctional: handleSecretCodeSearch validation result: ",
					", lockedChatsEntryPointVisible: ",
					", chatLockComponentIsMounted: ",
					""
				])), t, _t, o("useWAWebChatLockRestriction").chatLockComponentIsMounted()), !t && _t && !o("useWAWebChatLockRestriction").chatLockComponentIsMounted() && (o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: handleSecretCodeSearch locking chats (validation failed)"]))), o("WAWebChatLockUtils").lockChats()), o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: handleSecretCodeSearch calling debounceSetState, setting lockedChatsEntryPointVisible to: ", ""])), t), Jn({ lockedChatsEntryPointVisible: t });
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), [
			ve,
			_t,
			Jn
		]), Dr = ue(function() {
			var e, t = Qt.length, n = nn.length, r = (e = He == null ? void 0 : He.length) != null ? e : 0, o = je.length, a = yt.current.length;
			return {
				chatsCount: t,
				contactsCount: n,
				messagesCount: r,
				groupsInCommonCount: o,
				ftsMessagesCount: a
			};
		}, [
			Qt.length,
			nn.length,
			He == null ? void 0 : He.length,
			je.length,
			yt
		]);
		ce(function() {
			if (bt.current.query) {
				var e = Dr(), t = e.chatsCount, n = e.contactsCount, r = e.ftsMessagesCount, a = e.groupsInCommonCount, i = e.messagesCount;
				(t > 0 || n > 0 || r > 0 || a > 0 || i > 0) && o("WAWebCoreActionsODS").logGlobalSearchHasResults(), o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.resultPageShow(babelHelpers.extends({}, e));
			}
		}, [Dr]);
		var xr = ue(function() {
			Bn.cancel(), Wn.cancel(), qn.cancel(), Un.cancel(), Vn.cancel(), Hn.cancel(), zn.cancel();
		}, [
			Bn,
			Wn,
			qn,
			Un,
			Vn,
			Hn,
			zn
		]), $r = ue(function() {
			var e, t, n, r, a;
			Fn.cancel(), jn.cancel(), Kn.cancel(), yt.current.resetSearch(), yt.current.reset(), (e = At.current) == null || e.abort(), (t = Ot.current) == null || t.abort(), (n = Wt.current) == null || n.abort(), (r = qt.current) == null || r.abort(), (a = Ut.current) == null || a.abort(), Ue(!1), Ke([]), Ye(o("WAWebNonContactPushNameSearchModel").EMPTY_NON_CONTACT_PUSHNAMES), Er() && Jn({ searching: !1 }, Ce);
		}, [
			jn,
			Jn,
			Fn,
			yt,
			Er,
			Kn
		]), Pr = ue(function(e, t) {
			var n = e || bt.current.query;
			Le === r("WAWebChatlistPanelMode").CallsTab || r("WAFtsIsSearchQueryEligibleForMessageSearch")(n) || t != null && t.label ? (Oe || se(function() {
				Be(!0);
			}), Fn()) : Er() ? $r() : yt.current.reset();
		}, [
			Le,
			Er,
			Oe,
			Fn,
			$r,
			yt
		]), Nr = r("useWAWebCallbackAfterRender")([
			Qt,
			nn,
			Sn,
			kn,
			xn,
			Mn,
			Oe
		]), Mr = ue(function() {
			return new (oe || (oe = (n("Promise"))))(function(e) {
				if (o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: handleStopSearch called"]))), Ht(bt.current.filter) || o("WAWebFilterLogging").logSearchWithFilterEvent(Pt.current.sessionId), $r(), o("WAWebNonContactPushNameSearchModel").getNonContactPushNameSearch().invalidateCache(), bt.current.clear(), xr(), St.current != null && (St.current.clearSearch == null || St.current.clearSearch()), Nr(e), Vt.aborted) {
					o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: Skipping setState in handleStopSearch because component is unmounting"])));
					return;
				}
				o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: Proceeding with setState in handleStopSearch, updating 8 fields"]))), Xn({
					chats: zt({}),
					contacts: Jt(),
					outContacts: [],
					actions: bn(),
					debugCommands: Ln(),
					communities: Tn(),
					settingsCommands: Pn(),
					searching: !1
				});
			});
		}, [
			Ht,
			$r,
			xr,
			Xn,
			zt,
			Jt,
			bn,
			Ln,
			Tn,
			Pn,
			Nr,
			Vt.aborted
		]), wr = ue(function(e, t) {
			var n;
			if (o("WALogger").LOG(M || (M = babelHelpers.taggedTemplateLiteralLoose([
				"WAWebChatlistPanelFunctional: handleSearch called hasSearchText: ",
				", hasLabel: ",
				", filterKind: ",
				""
			])), !!e, !!(t != null && t.label), (n = t == null ? void 0 : t.kind) != null ? n : "none"), Qn(e), Cn(e), Le !== r("WAWebChatlistPanelMode").CallsTab && !e && Ht(t)) {
				o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: handleSearch clearing search (empty text and no filter)"]))), bt.current.updateQuery(e), bt.current.updateLabelQuery({}), Mr();
				return;
			}
			var a = bt.current.query;
			if (Le !== r("WAWebChatlistPanelMode").CallsTab && bt.current.equals(e, t)) {
				o("WALogger").LOG(A || (A = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: handleSearch query unchanged, skipping"])));
				return;
			}
			if (bt.current.updateQuery(e), bt.current.updateLabelQuery(t), Zn()) {
				var i, l, s;
				Dt.current.setScrollFromStart(0), (i = Wt.current) == null || i.abort(), (l = qt.current) == null || l.abort(), (s = Ut.current) == null || s.abort(), Pr(e, t), jn(), Kn(), Bn(e, t), Wn(e, t), qn(e), Un(e), Vn(e), Hn(e);
			} else a && !e && Mr(), Xt(zt({ filter: t }));
		}, [
			Qn,
			Le,
			Ht,
			Zn,
			Mr,
			Pr,
			jn,
			Kn,
			Bn,
			Wn,
			qn,
			Un,
			Vn,
			Hn,
			zt
		]), Ar = pe(wr);
		ce(function() {
			o("WALogger").LOG(F || (F = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: useEffect[handleSearchRef] running, updating ref with latest handleSearch"]))), Ar.current = wr;
		}, [wr]), ce(function() {
			if (o("WALogger").LOG(O || (O = babelHelpers.taggedTemplateLiteralLoose([
				"WAWebChatlistPanelFunctional: useEffect[mount] running (component mount), mode: ",
				", hasLabelFilter: ",
				""
			])), Le, !!Re), Le === r("WAWebChatlistPanelMode").CallsTab && (o("WALogger").LOG(B || (B = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: useEffect[mount] initializing CallsTab search"]))), wr("")), Le === r("WAWebChatlistPanelMode").CommandPalette && (o("WALogger").LOG(W || (W = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: useEffect[mount] initializing CommandPalette"]))), o("WAWebCommandCollection").CommandCollection.reset(), o("WAWebCommandCollection").CommandCollection.initializeCommands()), Re && (o("WALogger").LOG(q || (q = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: useEffect[mount] initializing labelFilter search"]))), wr("", { label: Re })), o("WAWebChatCollection").ChatCollection.some(function(e) {
				return o("WAWebChatGetters").getIsBroadcast(e);
			})) {
				var e = Qt.some(function(e) {
					var t = e.chat;
					return o("WAWebChatGetters").getIsBroadcast(t);
				}), t = r("countWhere")(Qt, function(e) {
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
		}, []), ce(function() {
			return function() {
				var e, t, n;
				(e = Wt.current) == null || e.abort(), (t = qt.current) == null || t.abort(), (n = Ut.current) == null || n.abort();
			};
		}, []);
		var Fr = ue(function() {
			return !!bt.current.query;
		}, []), Or = ue(function(e, t) {
			if (t != null && o("WAWebContactGetters").getIsMe(t.contact) && o("WAWebMessageYourselfMetricUtils").UiMessageYourselfSearchAction.logMessageYourselfOpenedEvent(t, Zn()), o("WAWebListsLabelGatingUtils").smartFiltersEnabled() && !Re && (!Ht(bt.current.filter) || Fr())) {
				var n = bt.current.filter, r = Pt.current.sessionId;
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
			Re,
			Zn,
			Ht,
			Fr
		]), Br = ue(function(e) {
			e == null || e.preventDefault(), r("WAWebFocusTracer").focus(Rt.current);
		}, []), Wr = ue((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r) {
				yield o("WAWebChatlistUtils").openExistingChat(t.id, n, r), Or("message", t);
			});
			return function(t, n, r, o) {
				return e.apply(this, arguments);
			};
		})(), [Or]), qr = ue((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				var n = o("WAWebFrontendContactGetters").getIsMyContact(t.contact), r = n ? o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_CONTACT_WITH_EXISTING_CHAT : o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_NON_CONTACT_WITH_EXISTING_CHAT;
				o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
					contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.CHATS_LIST_GLOBAL_SEARCH,
					searchActionName: r,
					searchStartsWithAt: bt.current.query.startsWith("@")
				}), o("WALogger").LOG(U || (U = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: handleChatClick, isSearching: ", ""])), Zn()), Zn() && o("WAWebSearchZeroStateGatingUtils").isSearchZeroStateEnabled() && o("WAWebUseRecentlySearchedChats").addChatToRecentSearches(t.id.toString());
				var a = (yield o("WAWebChatlistUtils").openExistingChat(t.id)) != null, i = a ? o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.INITIATION_SUCCESS : o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.INITIATION_FAILURE;
				o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
					contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.CHATS_LIST_GLOBAL_SEARCH,
					searchActionName: i,
					searchStartsWithAt: bt.current.query.startsWith("@")
				}), o("WAWebChatGetters").getIsBroadcast(t) ? Or("broadcast_list", t) : o("WAWebChatGetters").getIsGroup(t) ? (new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
					action: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.GROUP_NAVIGATION,
					surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
					chat: t
				}).commit(), Or("group", t)) : Or("chat", t);
			});
			return function(t, n) {
				return e.apply(this, arguments);
			};
		})(), [Or, Zn]), Ur = ue((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				var n = o("WAWebFrontendContactGetters").getIsMyContact(t), a = n ? o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_CONTACT : o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_NON_CONTACT;
				o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
					contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.CHATS_LIST_GLOBAL_SEARCH,
					searchActionName: a,
					searchStartsWithAt: bt.current.query.startsWith("@")
				});
				var i = yield o("WAWebChatlistUtils").openOrCreateLatestChat(t.id), l = i != null ? o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.INITIATION_SUCCESS : o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.INITIATION_FAILURE;
				o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
					contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.CHATS_LIST_GLOBAL_SEARCH,
					searchActionName: l,
					searchStartsWithAt: bt.current.query.startsWith("@")
				}), Or("contact", i), Le === r("WAWebChatlistPanelMode").CallsTab && o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
			});
			return function(t, n) {
				return e.apply(this, arguments);
			};
		})(), [Le, Or]), Vr = r("useWAWebStableCallback")((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t;
				if (e.preventDefault(), e.stopPropagation(), lr != null) {
					var n = yn.startsWith("@"), r = lr.isUsernameSearch;
					o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
						contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.CHATS_LIST_GLOBAL_SEARCH,
						searchActionName: o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_NON_CONTACT,
						isUsernameSearch: r,
						searchStartsWithAt: n
					});
					var a;
					if ((lr == null ? void 0 : lr.wid) == null) {
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
						if (a = yield o("WAWebUsernameKeyVerificationFlow").usernameKeyVerificationFlow({
							username: lr.username,
							initWithError: lr.triedKey,
							onInvalidKeyError: i
						}), a == null) return;
					} else a = lr.wid;
					var l = (t = lr == null ? void 0 : lr.chat) != null ? t : yield o("WAWebChatlistUtils").openOrCreateLatestChat(a);
					o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.resultItemClick(babelHelpers.extends({
						item: l,
						itemTypeOverride: o("WAWebWamEnumSearchUjItemType").SEARCH_UJ_ITEM_TYPE.UNKNOWN_CONTACT
					}, Dr()));
					var s = yield o("WAWebCmd").Cmd.openChatFromUnread({
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
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})()), Hr = ue(function(e, t, a, i) {
			var l;
			e.preventDefault(), e.stopPropagation(), o("WAWebSearchLogging").logSearchActionTypeAheadItemClick(t, i);
			var s;
			t instanceof o("WAWebChatModel").Chat && ((l = t.groupMetadata) == null ? void 0 : l.groupType) === o("WAWebGroupType").GroupType.COMMUNITY && (s = o("WAWebWamEnumSearchUjItemType").SEARCH_UJ_ITEM_TYPE.COMMUNITY);
			var u = Dr();
			if (o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.resultItemClick(babelHelpers.extends({
				item: i != null ? i : t,
				itemTypeOverride: s
			}, u)), Pe && Pe(), Le === r("WAWebChatlistPanelMode").CommandPalette && o("WAWebModalManager").ModalManager.close(), t instanceof o("WAWebMsgModel").Msg) {
				var c = o("WAWebFrontendMsgGetters").getChat(t);
				c.getEventMsgs().initialize();
				var d = o("WAWebChatMessageSearch").getSearchContext({
					chat: c,
					msgKey: t.id
				});
				d.msg = t, Wr(e, c, d);
			} else if (t instanceof o("WAWebChatModel").Chat) {
				var m;
				t.getEventMsgs().initialize(), a != null ? Wr(e, t, a, i) : ((m = t.groupMetadata) == null ? void 0 : m.groupType) === o("WAWebGroupType").GroupType.COMMUNITY ? o("WAWebCmd").Cmd.openCommunityHome(t.id, !1) : qr(e, t);
			} else if (t instanceof r("WAWebContactModel")) Ur(e, t);
			else if (t instanceof r("WAWebCommandModel")) switch (t.type) {
				case "setting": {
					o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
						descriptorType: "settings",
						initialStep: o("WAWebSettingsConst").SettingsSteps.cast(t.id)
					} : ie.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, { initialStep: o("WAWebSettingsConst").SettingsSteps.cast(t.id) }));
					break;
				}
				case "action": {
					r("WAWebKeyboardRun")(t.name);
					break;
				}
			}
			else !r("gkx")("26258") && n("cr:5932") && t instanceof n("cr:5932") && (he == null || he(t));
		}, [
			Dr,
			Pe,
			Le,
			Wr,
			qr,
			Ur
		]), Gr = ue(function(e) {
			var t, n, r, o, a, i, l, s, u = bt.current.query, c = bt.current.filter, d = (t = (n = (r = (o = (a = (i = Ln(u)[0]) != null ? i : bn(u)[0]) != null ? a : Pn(u)[0]) != null ? o : Tn(u)[0]) != null ? r : (l = zt({
				filter: c,
				searchText: u
			})[0]) == null ? void 0 : l.chat) != null ? n : (s = Jt({
				searchText: u,
				filter: c
			})[0]) == null ? void 0 : s.contact) != null ? t : yt.current.at(0);
			d && Hr(e, d);
		}, [
			Ln,
			bn,
			Pn,
			Tn,
			zt,
			Jt,
			yt,
			Hr
		]), zr = o("WAWebDrawerManagerContext").useDrawerManagerContext("left"), jr = ue(function() {
			var e, t, n = (e = zr.existsDrawer()) != null ? e : !1;
			n && Le !== r("WAWebChatlistPanelMode").CommandPalette || (r("WAWebFocusTracer").focus(St.current), (t = St.current) == null || t.focus == null || t.focus());
		}, [Le, zr]);
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "focus_chat_search", jr);
		var Kr = r("useWAWebStableCallback")(function() {
			var e = It.current;
			if (e != null) {
				var t = e.querySelector("[tabindex=\"0\"]");
				t == null || t.focus();
			}
		}), Qr = r("useWAWebStableCallback")(function(e) {
			e.preventDefault(), e.stopPropagation();
			var t = Et.current;
			Qt.length > 0 && t != null && !(t instanceof r("WAWebChatlist_DEPRECATED.react")) ? t.focusLast() : jr();
		}), Xr = me(function() {
			return { up: Qr };
		}, [Qr]), Yr = ue(function(e) {
			e.target instanceof HTMLElement && zn(e.target);
		}, [zn]), Jr = ue(function() {
			var e;
			(e = St.current) == null || e.clearFilter();
		}, []), Zr = ue(function() {
			var e;
			(e = St.current) == null || e.focus == null || e.focus();
		}, []), eo = ue(function(e) {
			if (Qt != null && Qt.length || nn != null && nn.length || dn != null && dn.length || e.length || He != null && He.length || xn != null && xn.length || kn != null && kn.length || Sn != null && Sn.length || Mn != null && Mn.length || lr != null || je != null && je.length) return [null, null];
			if (Re) return Oe ? [ie.jsx("span", {}, "null"), null] : [ie.jsx(o("WAWebEmptyState.react").NoResultForLabel, { labelId: Re }, "no-result-for-label"), o("WAWebEmptyState.react").noResultForLabelFbt(Re)];
			if (bt.current.query) return Oe ? [ie.jsx(o("WAWebEmptyState.react").Searching, {}, "searching"), o("WAWebEmptyState.react").searchingFbt()] : [ie.jsx(o("WAWebEmptyState.react").Search, {
				hasFilter: bt.current.hasFilter(),
				onClearFilter: Jr
			}, "search"), o("WAWebEmptyState.react").searchFbt()];
			var t = bt.current.filter.kind;
			if (!Zn() && t != null && [
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
				return [ie.jsx(o("WAWebEmptyState.react").NoFilteredChats, {
					filter: bt.current.filter,
					filterSession: Pt.current,
					onClearFilter: Jr,
					onShowSearch: Zr
				}, "no-filtered-chats"), r];
			}
			return o("WAWebChatCollection").ChatCollection.some(function(e) {
				return o("WAWebFrontendChatGetters").getShouldAppearInList(e);
			}) ? [ie.jsx(o("WAWebEmptyState.react").AllArchived, {}, "all-archived"), o("WAWebEmptyState.react").allArchivedFbt()] : [ie.jsx(o("WAWebEmptyState.react").ListChats, {}, "list-chats"), o("WAWebEmptyState.react").listChatsFbt()];
		}, [
			Qt,
			nn,
			He,
			xn,
			kn,
			Sn,
			Mn,
			Oe,
			Re,
			Zn,
			Jr,
			Zr,
			lr,
			je,
			dn.length
		]), to = ue(function(e) {
			vt.current = e;
		}, []), no = ue(function() {
			Jn({ showMultiSelectBar: !1 }), xt.current && xt.current.unsetAll(), $t.current && $t.current.setSelectable(!!Ie), le == null || le();
		}, [
			Jn,
			Ie,
			le
		]), ro = ue(function() {
			return !1;
		}, [st]), oo = function() {
			return o("WAWebChatCollection").ChatCollection.some(function(e) {
				return e.archive && o("WAWebFrontendChatGetters").getShouldAppearInList(e);
			});
		}, ao = ue(function() {
			var e;
			return !!(Le === r("WAWebChatlistPanelMode").Chatlist && xe === !0 && !Ze && bt.current.isEmptyQuery() && !bt.current.hasFilter() && Qt && Qt.length > 0 && ((e = $t.current) == null ? void 0 : e.isSelectable) !== !0 && oo());
		}, [
			Le,
			xe,
			Ze,
			Qt
		]), io = ue(function() {
			return o("WAWebChatlistPanelUtils").shouldShowLockedChatsPanel({
				mode: Le,
				selectableState: $t.current,
				showMultiSelectBar: Ze,
				hideLockedChats: ve === !0,
				lockedChatsEntryPointVisible: _t,
				searchQuery: bt.current
			});
		}, [
			Le,
			ve,
			Ze,
			_t
		]), lo = ue(function() {
			o("WAWebListsLabelGatingUtils").smartFiltersEnabled() && o("WAWebFilterLogging").logSearchFilterEvent(Pt.current.sessionId, bt.current.filter);
		}, []), so = ue(function() {
			Jn({ showOfflineToastbar: o("WAWebOfflineHandler").OfflineMessageHandler.getResumeUIProgressBarType() === o("WAWebOfflineResumeTypes").ResumeUIProgressBarType.Toastbar });
		}, [Jn]), uo = ue(function(e) {
			var t;
			if (e === void 0 && (e = !1), o("WALogger").LOG(V || (V = babelHelpers.taggedTemplateLiteralLoose([
				"WAWebChatlistPanelFunctional: handleChatlistDisplayUpdate called, open: ",
				", chatlistHidden: ",
				", filterKind: ",
				""
			])), e, mr.current, (t = bt.current.filter.kind) != null ? t : "none"), o("WAWebCmd").Cmd.chatListVisibilityChange(!e), !bt.current.filter.kind) {
				o("WALogger").LOG(H || (H = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistDisplayUpdate: Early return - no filter selected"])));
				return;
			}
			if (e && mr.current) {
				o("WALogger").LOG(G || (G = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistDisplayUpdate: Early return - chatlist already hidden"])));
				return;
			}
			var a = new (oe || (oe = (n("Promise"))))(function(e) {
				self.setTimeout(function() {
					var t, n = (t = zr.existsDrawer()) != null ? t : !1;
					e(n);
				}, 0);
			}), i = new oe(function(e) {
				self.setTimeout(function() {
					return o("WAWebModalManager").ModalManager.exists(e);
				}, 0);
			}), l = new oe(function(e) {
				self.setTimeout(function() {
					return o("WAWebModalManager").ModalManager.existsMedia(e);
				}, 0);
			});
			oe.all([
				a,
				i,
				l
			]).then(function(e) {
				var t = e[0], n = e[1], a = e[2];
				if (Vt.aborted) {
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
				])), t, n, a, i), i) o("WALogger").LOG(K || (K = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistDisplayUpdate: Marking chatlist as hidden (user left chats screen)"]))), mr.current = !0;
				else if (mr.current) if (o("WALogger").LOG(Q || (Q = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistDisplayUpdate: Marking chatlist as visible (user returned to chats screen)"]))), mr.current = !1, dr.current != null) {
					var l = Date.now() - r("nullthrows")(dr.current), s = o("WAWebABProps").getABPropConfigValue("inbox_filters_reset_timeout") * 1e3;
					o("WALogger").LOG(X || (X = babelHelpers.taggedTemplateLiteralLoose([
						"WAWebChatlistDisplayUpdate: Filters set timespan: ",
						"ms, reset timeout: ",
						"ms"
					])), l, s), l >= s ? (o("WALogger").LOG(Y || (Y = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistDisplayUpdate: Resetting filters via handleSearchRef.current (timeout exceeded)"]))), Ar.current(bt.current.query, { kind: null })) : o("WALogger").LOG(J || (J = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistDisplayUpdate: Filters NOT reset (timeout not exceeded)"])));
				} else o("WALogger").LOG(Z || (Z = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistDisplayUpdate: No filter set time tracked"])));
				else o("WALogger").LOG(ee || (ee = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistDisplayUpdate: Chatlist remains visible (no state change)"])));
			}).catch(r("WAWebNoop"));
		}, [zr, Vt.aborted]), co = ue(function() {
			if (Fr()) return !0;
			var e = o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled();
			if (e === !1 && bt.current.hasLabelFilter()) return !0;
			if (bt.current.filter.kind == null) return !1;
			var t = e ? o("WAWebChatSearchFilters").isFilterExcludedFromSearchTreatmentInInboxFlow : o("WAWebChatSearchFilters").isFilterExcludedFromSearchTreatmentInNormalFlow;
			return !t(bt.current.filter.kind);
		}, [Fr]), mo = ue(function() {
			Le === r("WAWebChatlistPanelMode").Chatlist && o("WAWebABProps").getABPropConfigValue("inbox_filters_reset_timeout") > 0 && o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() && (o("WALogger").LOG(te || (te = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: Calling handleChatlistDisplayUpdate(true) from handleDrawerOpenLeft"]))), uo(!0));
		}, [Le, uo]), po = ue(function() {
			Le === r("WAWebChatlistPanelMode").Chatlist && o("WAWebABProps").getABPropConfigValue("inbox_filters_reset_timeout") > 0 && o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() && (o("WALogger").LOG(ne || (ne = babelHelpers.taggedTemplateLiteralLoose(["WAWebChatlistPanelFunctional: Calling handleChatlistDisplayUpdate() from handleLeftDrawerClose"]))), uo());
		}, [Le, uo]);
		de(ae, function() {
			return {
				containsDOMNode: function(t) {
					return kt.current ? kt.current.contains(t) : !1;
				},
				onLeftDrawerOpen: mo,
				onLeftDrawerClose: po
			};
		}, [mo, po]);
		var _o = yt.current, fo = _o.length > 0 ? _o.toArray() : fe, go = eo(fo), ho = go[1], yo = go[0], Co, bo = o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled(), vo = co(), So = null, Ro = !1, Lo = ((a = bt.current) == null ? void 0 : a.query) || "";
		if (vo && (tr || nr) && Lo) {
			var Eo = lr == null ? void 0 : lr.wid, ko = lr == null ? void 0 : lr.username, Io = !nn.some(function(e) {
				var t = e.contact;
				return Eo != null && t.id.equals(Eo) || ko != null && o("WAWebUsernameTypes").serializeMaybeUsername(t.username) === ko;
			}) && (Le === r("WAWebChatlistPanelMode").CallsTab || !Qt.some(function(e) {
				var t = e.chat;
				return Eo != null && t.id.equals(Eo) || ko != null && o("WAWebUsernameTypes").serializeMaybeUsername(t.contact.username) === ko;
			}));
			ar ? So = ie.jsx("div", {
				className: "x78zum5 x1c4vz4f x2lah0s xdl72j9 xl56j7k x1p5oq8j xwxc41k",
				children: ie.jsx(o("WAWebSpinner.react").Spinner, {
					stroke: 6,
					size: 24
				})
			}, "unknown-contact-loading") : or ? So = ie.jsx(o("WAWebEmptyState.react").SearchingNonContactError, {
				error: o("WAWebContactlessChatUtils").getErrorStr(or),
				onClick: ir
			}, "error") : lr && Io && (Ro = !0, So = ie.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
				ref: It,
				handlers: Xr,
				children: ie.jsx(r("WAWebUnknownContactSection.react"), {
					contactInfo: lr,
					onUnknownContactClick: Vr,
					searchText: Lo
				})
			}, "unknown-contact"));
		}
		if (yo == null && (Le === r("WAWebChatlistPanelMode").CallsTab || Le === r("WAWebChatlistPanelMode").Chatlist || Le === r("WAWebChatlistPanelMode").CommandPalette && bt.current.query.length > 0)) {
			var To, Do = o("WAWebAdaptiveLayoutGatingUtils").shouldUseFunctionalChatlist(), xo = {
				flatListController: Dt.current,
				chats: fn,
				contacts: gn,
				contactSearchMatches: on,
				messages: He || [],
				actions: Sn || [],
				debugCommands: kn || [],
				communities: xn || [],
				settings: Mn || [],
				filterPreset: at,
				commonGroups: je,
				nonContactPushnames: Xe,
				isSearching: vo,
				isSearchInputFocused: !!((To = St.current) != null && To.hasFocus()),
				searchQuery: bt.current,
				ftsResult: fo,
				selection: Ct.current,
				onFocusSearch: jr,
				multiSelection: xt.current,
				onStartMultiSelect: Rr,
				selectableState: $t.current,
				onItemClick: Hr,
				mode: Le
			};
			Do ? yo = ie.jsx(r("WAWebChatlistFunctional.react"), babelHelpers.extends({}, xo, {
				outContacts: dn,
				outContactSearchMatches: pn,
				chatSearchMatches: _n,
				onFocusAfterLast: Ro ? Kr : void 0,
				ref: Et
			})) : yo = ie.jsx(r("WAWebChatlist_DEPRECATED.react"), babelHelpers.extends({}, xo, {
				onFocusFilters: Br,
				chatSearchMatches: _n,
				ref: Et
			}));
		}
		dt === !0 && (Co = ie.jsx(r("WAWebOfflineResumeProgressToastbar.react"), {})), Co == null && yo != null && Le === r("WAWebChatlistPanelMode").Chatlist && (Co = Zn() ? ie.jsx(r("WAWebDesktopUpsellSearchToastbar.react"), {}) : ie.jsx(r("WAWebDesktopUpsellChatlistToastbar.react"), {}));
		var $o = Oe && Re || Oe && yt.current.length ? ie.jsx("div", {
			className: "x78zum5 x1c4vz4f x2lah0s xdl72j9 xl56j7k x1p5oq8j xwxc41k",
			children: ie.jsx(o("WAWebSpinner.react").Spinner, {
				stroke: 6,
				size: 24
			})
		}, "spinner") : null, Po = Le === r("WAWebChatlistPanelMode").CommandPalette, No = yt.current.hasMoreMsgs && Fn.length || ro() ? Yr : void 0, Mo, wo = null, Ao, Fo = ue(function(e) {
			var t;
			bt.current.filter.kind === o("WAWebChatSearchFilters").SearchFilters.UNREAD && e.kind !== o("WAWebChatSearchFilters").SearchFilters.UNREAD && o("WAWebABProps").getABPropConfigValue("wa_web_feature_parity_small_wins") && Mt.current.clear(), dr.current = e.kind == null ? void 0 : Date.now(), o("WALogger").LOG(re || (re = babelHelpers.taggedTemplateLiteralLoose([
				"WAWebChatlistPanelFunctional: Calling handleSearch from handleFilterChange, hasQuery: ",
				", filterKind: ",
				""
			])), !!bt.current.query, (t = e.kind) != null ? t : "none"), Ar.current(bt.current.query, e);
		}, []), Oo = ue(function() {
			var e;
			(e = St.current) == null || e.dismissZeroState();
		}, []), Bo, Wo;
		if (Ze || nt === o("WAWebMultiSelectEntryPointConstants").MultiSelectEntryPoint.ChatListHeaderDropdown) {
			var qo = o("WAWebConnModel").Conn.isSMB && (nt !== o("WAWebMultiSelectEntryPointConstants").MultiSelectEntryPoint.ChatListHeaderDropdown || !o("WAWebABProps").getABPropConfigValue("wa_web_feature_parity_small_wins"));
			Mo = ie.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "MultiSelect",
				escapable: !0,
				dismissOnWindowResize: !0,
				requestDismiss: no,
				children: qo ? ie.jsx(r("WAWebMixedMultiSelectBar.react"), {
					theme: "chatlist-panel",
					selectedModels: xt.current,
					labelEditEnabled: nt === o("WAWebMultiSelectEntryPointConstants").MultiSelectEntryPoint.Label,
					multiSelectEntryPoint: nt,
					onCancel: no
				}) : ie.jsx(r("WAWebConsumerMultiSelectBar.react"), {
					selectedModels: xt.current,
					onCancel: no
				})
			}, "multiSelectBar"), ho = ho == null && Mo != null ? s._(
				/*BTDS*/
				""
			) : ho;
		} else if (Ao = ie.jsx("div", babelHelpers.extends({ ref: Lt }, {
			0: { className: "x1c4vz4f x2lah0s xdl72j9 x1280gxy" },
			1: { className: "x1c4vz4f x2lah0s xdl72j9 x1280gxy x18wx58x" }
		}[!!Po << 0], { children: ie.jsx(o("WAWebChatListSearch.react").ListSearch, {
			ref: Tt,
			handleKeyDown: Sr,
			onSearch: wr,
			onEnter: Gr,
			filterSession: Pt.current,
			listFilterEnabled: Le === r("WAWebChatlistPanelMode").Chatlist && !bo,
			chatlistFilterEnabled: Le === r("WAWebChatlistPanelMode").Chatlist && !bo,
			inboxFiltersEnabled: Le === r("WAWebChatlistPanelMode").Chatlist && bo,
			inboxFilter: bt.current.filter,
			focusOnMount: Le === r("WAWebChatlistPanelMode").CommandPalette,
			loading: qe,
			mode: Le,
			showPlaceholderUntilType: !0,
			usernameSearchEnabled: Me === !0,
			tsSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_LIST,
			searchZeroStateAllowed: Le === r("WAWebChatlistPanelMode").Chatlist,
			askMetaAiButtonAllowed: Le === r("WAWebChatlistPanelMode").Chatlist
		}) })), Le === r("WAWebChatlistPanelMode").Chatlist && bo) {
			var Uo = function(t) {
				var e;
				(e = St.current) != null && e.hasFocus() && t.button === 0 && t.preventDefault();
			};
			Bo = ie.jsx(o("WAWebChatListFilters.react").ChatListFilters, {
				ref: Rt,
				filter: bt.current.filter,
				filterSession: Pt.current,
				onDropdownOpen: Oo,
				onFilterChange: Fo,
				onMouseDown: Uo
			});
		}
		if (!Re) {
			var Vo;
			!r("gkx")("26258") && st === !0 && (Vo = ie.jsx("div", {
				className: "x10l6tqk x78zum5 xuk3077 xl56j7k xh8yej3 x16wdlz0 x2b8uid",
				children: ie.jsxs("div", {
					className: "x9f619 x1rg5ohu xq8v1hd x1fgtraw xexx8yu x18d9i69 xwn43p0 x1x5flf6 x6ikm8r x10wlt62 x1nxh6w3 xk50ysn xgif2c7 x1pse0pq xlyipyv xuxw1ft xyp3urf x6nvzda x4i4b9w xhl9efl xj65ea0 x1wpep30",
					onClick: Lr,
					role: "button",
					children: [ie.jsx("span", {
						className: "xqf2s3x",
						children: ie.jsx(o("WAWebChevronCustomIcons").ChevronUpCustomIcon, {
							xstyle: ge.unreadIcon,
							height: 19,
							displayInline: !0
						})
					}), s._(
						/*BTDS*/
						""
					)]
				})
			}));
			var Ho = Le === r("WAWebChatlistPanelMode").CallsTab || Po || vo || Mo ? null : ie.jsx(r("WAWebChatlistBanners.react"), {});
			wo = ie.jsxs(ie.Fragment, { children: [
				Ao,
				Bo,
				Ho,
				Mo,
				null
			] });
		}
		ao() && (Wo = ie.jsx(r("WAWebChatArchivedEntryPoint.react"), {}));
		var Go;
		io() && (Go = ie.jsx(r("WAWebChatLockedEntryPoint.react"), { onOpen: function() {
			Mr();
		} }));
		var zo;
		Co == null && (Fr() || bt.current.hasLabelFilter()) && (zo = ie.jsx(o("WAWebHistorySyncComponents.react").HistorySyncSearchIncompletePlaceholder, {}));
		var jo = (i = Qt == null ? void 0 : Qt.length) != null ? i : 0, Ko = o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled() && jo > 0 ? ie.jsx(o("WAWebPrivacyNarrativeE2EMessage.react").E2eMessageChatList, {}) : null, Qo = Le === r("WAWebChatlistPanelMode").CallsTab && o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled() ? ie.jsx(o("WAWebPrivacyNarrativeE2EMessage.react").E2eMessageCallsList, {}) : null, Xo = ho != null ? ie.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, { text: ho }) : null;
		return ie.jsxs("div", babelHelpers.extends({ id: "side" }, {
			0: { className: "x78zum5 x1n2onr6 xdt5ytf x5yr21d x6ikm8r x10wlt62 x1280gxy" },
			2: { className: "x78zum5 x1n2onr6 xdt5ytf x5yr21d x1280gxy x1p5oq8j xwxc41k x1g0dm76 xpdmqnj x6ikm8r x10wlt62" },
			1: { className: "x78zum5 x1n2onr6 xdt5ytf x5yr21d x6ikm8r x10wlt62 x1280gxy xd0qcmr xsh6knr x1n13l81 xv8lwpf" },
			3: { className: "x78zum5 x1n2onr6 xdt5ytf x5yr21d x1280gxy x1p5oq8j xwxc41k x1g0dm76 xpdmqnj x6ikm8r x10wlt62 xd0qcmr xsh6knr x1n13l81 xv8lwpf" }
		}[!!Po << 1 | !!Po << 0], {
			ref: kt,
			children: [
				ie.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
					name: "app-header",
					children: wo
				}),
				ie.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
					name: "chat-list",
					type: "fatal",
					children: ie.jsxs(r("WAWebFlatListContainer.react"), {
						flatListControllers: [Dt.current],
						ref: to,
						className: {
							0: { className: "x1vjfegm x78zum5 xdt5ytf x1iyjqo2 x1odjw0f x1280gxy" },
							2: { className: "x1vjfegm x78zum5 xdt5ytf x1iyjqo2 x1odjw0f x1280gxy x5u1c9j" },
							1: { className: "x1vjfegm x78zum5 xdt5ytf x1iyjqo2 x1odjw0f x1280gxy xe09je3 x1rohswg xfk6m8" },
							3: { className: "x1vjfegm x78zum5 xdt5ytf x1iyjqo2 x1odjw0f x1280gxy x5u1c9j xe09je3 x1rohswg xfk6m8" }
						}[!!o("WAWebStylesEnv").hasSafariFix << 1 | (Le === r("WAWebChatlistPanelMode").CommandPalette) << 0].className,
						onScroll: No,
						id: "pane-side",
						"data-scrolltracepolicy": "wa.web.chatlist",
						children: [
							Go,
							!r("WAWebEnvironment").isWindows && Wo,
							Xo,
							yo,
							So,
							$o,
							Le === r("WAWebChatlistPanelMode").Chatlist && (zo != null ? zo : Ko),
							Le === r("WAWebChatlistPanelMode").CallsTab && Qo
						]
					})
				}),
				ie.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
					name: "out-of-chat-player",
					children: ie.jsx(r("WAWebPttOocPlayer"), {})
				}),
				ie.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
					name: "chat-list-toastbar",
					children: Co != null ? Co : null
				})
			]
		}));
	}
	Pe.displayName = Pe.name + " [from " + i.id + "]", l.getFiltersWhichArchivedChats = Te, l.ChatlistPanelFunctional = Pe;
}), 226);
