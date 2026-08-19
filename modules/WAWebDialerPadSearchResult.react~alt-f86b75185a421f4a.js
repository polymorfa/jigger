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
		var t = o("react-compiler-runtime").c(34), n = e.onResultClick, a = e.searchText, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = new (r("WAWebFlatListController"))(), t[0] = i) : i = t[0];
		var l = i, u;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (u = [], t[1] = u) : u = t[1];
		var m = r("useWAWebAsync")(p, u), _ = m.value, f = d(a, _), g = f.length === 0, h;
		t[2] !== g || t[3] !== a ? (h = {
			phoneOrUsername: a,
			searchPhoneNumber: g,
			searchUsername: g,
			requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN_CONTACT_SEARCH_DIALER
		}, t[2] = g, t[3] = a, t[4] = h) : h = t[4];
		var y = r("useWAWebUnknownContact")(h), C = y.error, b = y.loading, v = y.onRetry, S = y.unknownContactInfo, R;
		t[5] !== S ? (R = async function(t) {
			var e;
			if (t.preventDefault(), t.stopPropagation(), S != null) {
				var n;
				if ((S == null ? void 0 : S.wid) == null) {
					if (n = await o("WAWebUsernameKeyVerificationFlow").usernameKeyVerificationFlow({
						username: S.username,
						initWithError: S.triedKey
					}), n == null) return;
				} else n = S.wid;
				var r = (e = S == null ? void 0 : S.chat) != null ? e : (await o("WAWebFindChatAction").findOrCreateLatestChat(n, "newChatFlow")).chat;
				if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked() && !o("WAWebReachoutTimelockUtils").canSendMsgWhileTimelocked({
					chat: r,
					contact: r.contact
				})) {
					o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
					return;
				}
				o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
				var a = await o("WAWebCmd").Cmd.openChatFromUnread({
					chat: r,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.DialerPad
				});
				a && (o("WAWebNewChatMetricUtils").logInitiatedContactlessChat(r), o("WAWebNewChatMetricUtils").logContactListStartNewChatAction({
					chatType: o("WAWebWamEnumWebContactListStartNewChatType").WEB_CONTACT_LIST_START_NEW_CHAT_TYPE.CONTACTLESS,
					isSearchResult: !0
				}), o("WAWebComposeBoxActions").ComposeBoxActions.focus(r));
			}
		}, t[5] = S, t[6] = R) : R = t[6];
		var L = r("useWAWebStableCallback")(R);
		if (a === "") {
			var E;
			return t[7] === Symbol.for("react.memo_cache_sentinel") ? (E = s.jsx(o("WAWebEmptyState.react").EnterPhoneNumberToStartChat, {
				xstyle: c.emptyState,
				testid: "start-chat-using-phone-number-default-text"
			}), t[7] = E) : E = t[7], E;
		}
		if (f.length > 0) {
			var k = e.entryPoint === "calls_tab" && f.length === 1 && !o("WAWebContactGetters").getIsMe(f[0]);
			if (k) {
				var I;
				t[8] !== n ? (I = function(t, r, o, a) {
					return n({
						chatOrigin: a,
						contact: r,
						event: t,
						isSearchResult: o
					});
				}, t[8] = n, t[9] = I) : I = t[9];
				var T;
				return t[10] !== f || t[11] !== I ? (T = s.jsx(r("WAWebDialerContactWithCallButtons.react"), {
					contact: f[0],
					onClick: I
				}), t[10] = f, t[11] = I, t[12] = T) : T = t[12], T;
			}
			var D;
			t[13] !== n ? (D = function(t, r, o, a) {
				return n({
					chatOrigin: a,
					contact: r,
					event: t,
					isSearchResult: o
				});
			}, t[13] = n, t[14] = D) : D = t[14];
			var x;
			return t[15] !== f || t[16] !== a || t[17] !== D ? (x = s.jsx(r("WAWebChatContactList.react"), {
				contacts: f,
				flatListController: l,
				onClick: D,
				showMe: !1,
				showBot: !1,
				showPersonGroupDivisionHeader: !1,
				searchText: a
			}), t[15] = f, t[16] = a, t[17] = D, t[18] = x) : x = t[18], x;
		}
		if (b) {
			var $;
			return t[19] === Symbol.for("react.memo_cache_sentinel") ? ($ = s.jsx(o("WAWebEmptyState.react").SearchingNonContactWithSpinner, { xstyle: c.emptyState }), t[19] = $) : $ = t[19], $;
		}
		if (C) {
			var P;
			t[20] !== C ? (P = o("WAWebContactlessChatUtils").getErrorStr(C), t[20] = C, t[21] = P) : P = t[21];
			var N;
			return t[22] !== v || t[23] !== P ? (N = s.jsx(o("WAWebEmptyState.react").SearchingNonContactError, {
				error: P,
				onClick: v
			}), t[22] = v, t[23] = P, t[24] = N) : N = t[24], N;
		}
		if (S) {
			if (e.entryPoint === "calls_tab") {
				var M;
				return t[25] !== L || t[26] !== a || t[27] !== S ? (M = s.jsx(r("WAWebDialerUnknownContactWithCallButtons.react"), {
					contactInfo: S,
					onUnknownContactClick: L,
					searchText: a,
					disableHeader: !0
				}), t[25] = L, t[26] = a, t[27] = S, t[28] = M) : M = t[28], M;
			}
			var w;
			return t[29] !== L || t[30] !== a || t[31] !== S ? (w = s.jsx(r("WAWebUnknownContactSection.react"), {
				contactInfo: S,
				onUnknownContactClick: L,
				searchText: a,
				disableHeader: !0
			}), t[29] = L, t[30] = a, t[31] = S, t[32] = w) : w = t[32], w;
		}
		var A;
		return t[33] === Symbol.for("react.memo_cache_sentinel") ? (A = s.jsx(o("WAWebEmptyState.react").NoSearchResults, {
			center: !0,
			xstyle: c.emptyState
		}), t[33] = A) : A = t[33], A;
	}
	function p() {
		return o("WAWebCountryCodeUtils").getMyCountryCode();
	}
	l.default = m;
}), 98);
