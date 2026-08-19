__d("WAWebDialerPadSearchResult.react", [
	"WAPhoneFindCC",
	"WAWebChatContactList.react",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebComposeBoxActions",
	"WAWebContactCollection",
	"WAWebContactCollectionUtils",
	"WAWebContactGetters",
	"WAWebContactSyncLogger",
	"WAWebContactlessChatUtils",
	"WAWebCountryCodeUtils",
	"WAWebDialerContactWithCallButtons.react",
	"WAWebDialerUnknownContactWithCallButtons.react",
	"WAWebDrawerManager",
	"WAWebEmptyState.react",
	"WAWebFindChatAction",
	"WAWebFlatListController",
	"WAWebL10NAccentFold",
	"WAWebLidMigrationUtils",
	"WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
	"WAWebModalManager",
	"WAWebNewChatMetricUtils",
	"WAWebPhoneNumberSearch",
	"WAWebReachoutTimelockRestrictedModalLoadable",
	"WAWebReachoutTimelockUtils",
	"WAWebUnknownContactSection.react",
	"WAWebUsernameKeyVerificationFlow",
	"WAWebWamEnumWebContactListStartNewChatType",
	"asyncToGeneratorRuntime",
	"isStringNullOrEmpty",
	"react",
	"react-compiler-runtime",
	"useWAWebAsync",
	"useWAWebStableCallback",
	"useWAWebUnknownContact"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useMemo, c = { emptyState: {
		paddingTop: "x9tmck8",
		paddingInlineEnd: "x1a4sjiy",
		paddingBottom: "x156go17",
		paddingInlineStart: "xvahy20",
		$$css: !0
	} }, d = function(t, n) {
		if (o("WAWebContactCollection").ContactCollection.ensureSorted(), !t) return o("WAWebContactCollectionUtils").getFilteredContacts(o("WAWebContactCollection").ContactCollection, { showMe: t.length > 0 });
		var e = o("WAWebContactCollectionUtils").getFilteredContacts(o("WAWebContactCollection").ContactCollection, { showMe: !!t }).concat(o("WAWebContactCollection").ContactCollection.filter(function(e) {
			return e.name && !o("WAWebContactGetters").getIsMe(e) && !o("WAWebContactGetters").getIsPSA(e) && !o("WAWebContactGetters").getIsWAContact(e) && !o("WAWebContactGetters").getIsNewsletter(e) && !o("WAWebContactGetters").getIsBot(e);
		})), a = o("WAWebL10NAccentFold").accentFold(t), i = o("WAWebPhoneNumberSearch").numberSearch(a);
		return e.filter(function(e) {
			if (i == null || typeof i != "string") return !1;
			var t = o("WAWebLidMigrationUtils").toPn(e.id);
			if (t == null) return !1;
			var a = t.user, l = o("WAPhoneFindCC").extractDigits(a), s = o("WAPhoneFindCC").findCC(l), u = null;
			try {
				u = o("WAWebCountryCodeUtils").pnToCountryCodeString(l);
			} catch (e) {}
			var c = l.substring(s.length), d = o("WAPhoneFindCC").findCC(i), m = i.substring(d.length), p = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").isPhoneNumberValid(Number(d), m);
			return p ? l === i : !r("isStringNullOrEmpty")(n) && n === u ? c === i : !1;
		});
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(34), a = e.onResultClick, i = e.searchText, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = new (r("WAWebFlatListController"))(), t[0] = l) : l = t[0];
		var u = l, m;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (m = [], t[1] = m) : m = t[1];
		var _ = r("useWAWebAsync")(p, m), f = _.value, g = d(i, f), h = g.length === 0, y;
		t[2] !== h || t[3] !== i ? (y = {
			phoneOrUsername: i,
			searchPhoneNumber: h,
			searchUsername: h,
			requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN_CONTACT_SEARCH_DIALER
		}, t[2] = h, t[3] = i, t[4] = y) : y = t[4];
		var C = r("useWAWebUnknownContact")(y), b = C.error, v = C.loading, S = C.onRetry, R = C.unknownContactInfo, L;
		t[5] !== R ? (L = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t;
				if (e.preventDefault(), e.stopPropagation(), R != null) {
					var n;
					if ((R == null ? void 0 : R.wid) == null) {
						if (n = yield o("WAWebUsernameKeyVerificationFlow").usernameKeyVerificationFlow({
							username: R.username,
							initWithError: R.triedKey
						}), n == null) return;
					} else n = R.wid;
					var r = (t = R == null ? void 0 : R.chat) != null ? t : (yield o("WAWebFindChatAction").findOrCreateLatestChat(n, "newChatFlow")).chat;
					if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked() && !o("WAWebReachoutTimelockUtils").canSendMsgWhileTimelocked({
						chat: r,
						contact: r.contact
					})) {
						o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
						return;
					}
					o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
					var a = yield o("WAWebCmd").Cmd.openChatFromUnread({
						chat: r,
						chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.DialerPad
					});
					a && (o("WAWebNewChatMetricUtils").logInitiatedContactlessChat(r), o("WAWebNewChatMetricUtils").logContactListStartNewChatAction({
						chatType: o("WAWebWamEnumWebContactListStartNewChatType").WEB_CONTACT_LIST_START_NEW_CHAT_TYPE.CONTACTLESS,
						isSearchResult: !0
					}), o("WAWebComposeBoxActions").ComposeBoxActions.focus(r));
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), t[5] = R, t[6] = L) : L = t[6];
		var E = r("useWAWebStableCallback")(L);
		if (i === "") {
			var k;
			return t[7] === Symbol.for("react.memo_cache_sentinel") ? (k = s.jsx(o("WAWebEmptyState.react").EnterPhoneNumberToStartChat, {
				xstyle: c.emptyState,
				testid: "start-chat-using-phone-number-default-text"
			}), t[7] = k) : k = t[7], k;
		}
		if (g.length > 0) {
			var I = e.entryPoint === "calls_tab" && g.length === 1 && !o("WAWebContactGetters").getIsMe(g[0]);
			if (I) {
				var T;
				t[8] !== a ? (T = function(t, n, r, o) {
					return a({
						chatOrigin: o,
						contact: n,
						event: t,
						isSearchResult: r
					});
				}, t[8] = a, t[9] = T) : T = t[9];
				var D;
				return t[10] !== g || t[11] !== T ? (D = s.jsx(r("WAWebDialerContactWithCallButtons.react"), {
					contact: g[0],
					onClick: T
				}), t[10] = g, t[11] = T, t[12] = D) : D = t[12], D;
			}
			var x;
			t[13] !== a ? (x = function(t, n, r, o) {
				return a({
					chatOrigin: o,
					contact: n,
					event: t,
					isSearchResult: r
				});
			}, t[13] = a, t[14] = x) : x = t[14];
			var $;
			return t[15] !== g || t[16] !== i || t[17] !== x ? ($ = s.jsx(r("WAWebChatContactList.react"), {
				contacts: g,
				flatListController: u,
				onClick: x,
				showMe: !1,
				showBot: !1,
				showPersonGroupDivisionHeader: !1,
				searchText: i
			}), t[15] = g, t[16] = i, t[17] = x, t[18] = $) : $ = t[18], $;
		}
		if (v) {
			var P;
			return t[19] === Symbol.for("react.memo_cache_sentinel") ? (P = s.jsx(o("WAWebEmptyState.react").SearchingNonContactWithSpinner, { xstyle: c.emptyState }), t[19] = P) : P = t[19], P;
		}
		if (b) {
			var N;
			t[20] !== b ? (N = o("WAWebContactlessChatUtils").getErrorStr(b), t[20] = b, t[21] = N) : N = t[21];
			var M;
			return t[22] !== S || t[23] !== N ? (M = s.jsx(o("WAWebEmptyState.react").SearchingNonContactError, {
				error: N,
				onClick: S
			}), t[22] = S, t[23] = N, t[24] = M) : M = t[24], M;
		}
		if (R) {
			if (e.entryPoint === "calls_tab") {
				var w;
				return t[25] !== E || t[26] !== i || t[27] !== R ? (w = s.jsx(r("WAWebDialerUnknownContactWithCallButtons.react"), {
					contactInfo: R,
					onUnknownContactClick: E,
					searchText: i,
					disableHeader: !0
				}), t[25] = E, t[26] = i, t[27] = R, t[28] = w) : w = t[28], w;
			}
			var A;
			return t[29] !== E || t[30] !== i || t[31] !== R ? (A = s.jsx(r("WAWebUnknownContactSection.react"), {
				contactInfo: R,
				onUnknownContactClick: E,
				searchText: i,
				disableHeader: !0
			}), t[29] = E, t[30] = i, t[31] = R, t[32] = A) : A = t[32], A;
		}
		var F;
		return t[33] === Symbol.for("react.memo_cache_sentinel") ? (F = s.jsx(o("WAWebEmptyState.react").NoSearchResults, {
			center: !0,
			xstyle: c.emptyState
		}), t[33] = F) : F = t[33], F;
	}
	function p() {
		return o("WAWebCountryCodeUtils").getMyCountryCode();
	}
	l.default = m;
}), 98);
