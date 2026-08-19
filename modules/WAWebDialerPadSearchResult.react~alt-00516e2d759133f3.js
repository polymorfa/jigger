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
		var t = e.onResultClick, a = e.searchText, i = u(function() {
			return new (r("WAWebFlatListController"))();
		}, []), l = r("useWAWebAsync")(function() {
			return o("WAWebCountryCodeUtils").getMyCountryCode();
		}, []), m = l.value, p = d(a, m), _ = p.length === 0, f = r("useWAWebUnknownContact")({
			phoneOrUsername: a,
			searchPhoneNumber: _,
			searchUsername: _,
			requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN_CONTACT_SEARCH_DIALER
		}), g = f.error, h = f.loading, y = f.onRetry, C = f.unknownContactInfo, b = r("useWAWebStableCallback")((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t;
				if (e.preventDefault(), e.stopPropagation(), C != null) {
					var n;
					if ((C == null ? void 0 : C.wid) == null) {
						if (n = yield o("WAWebUsernameKeyVerificationFlow").usernameKeyVerificationFlow({
							username: C.username,
							initWithError: C.triedKey
						}), n == null) return;
					} else n = C.wid;
					var r = (t = C == null ? void 0 : C.chat) != null ? t : (yield o("WAWebFindChatAction").findOrCreateLatestChat(n, "newChatFlow")).chat;
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
			return function(t) {
				return e.apply(this, arguments);
			};
		})());
		if (a === "") return s.jsx(o("WAWebEmptyState.react").EnterPhoneNumberToStartChat, {
			xstyle: c.emptyState,
			testid: "start-chat-using-phone-number-default-text"
		});
		if (p.length > 0) {
			var v = e.entryPoint === "calls_tab" && p.length === 1 && !o("WAWebContactGetters").getIsMe(p[0]);
			return v ? s.jsx(r("WAWebDialerContactWithCallButtons.react"), {
				contact: p[0],
				onClick: function(n, r, o, a) {
					return t({
						chatOrigin: a,
						contact: r,
						event: n,
						isSearchResult: o
					});
				}
			}) : s.jsx(r("WAWebChatContactList.react"), {
				contacts: p,
				flatListController: i,
				onClick: function(n, r, o, a) {
					return t({
						chatOrigin: a,
						contact: r,
						event: n,
						isSearchResult: o
					});
				},
				showMe: !1,
				showBot: !1,
				showPersonGroupDivisionHeader: !1,
				searchText: a
			});
		}
		return h ? s.jsx(o("WAWebEmptyState.react").SearchingNonContactWithSpinner, { xstyle: c.emptyState }) : g ? s.jsx(o("WAWebEmptyState.react").SearchingNonContactError, {
			error: o("WAWebContactlessChatUtils").getErrorStr(g),
			onClick: y
		}) : C ? e.entryPoint === "calls_tab" ? s.jsx(r("WAWebDialerUnknownContactWithCallButtons.react"), {
			contactInfo: C,
			onUnknownContactClick: b,
			searchText: a,
			disableHeader: !0
		}) : s.jsx(r("WAWebUnknownContactSection.react"), {
			contactInfo: C,
			onUnknownContactClick: b,
			searchText: a,
			disableHeader: !0
		}) : s.jsx(o("WAWebEmptyState.react").NoSearchResults, {
			center: !0,
			xstyle: c.emptyState
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
