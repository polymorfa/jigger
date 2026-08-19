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
		var t = e.onResultClick, n = e.searchText, a = u(function() {
			return new (r("WAWebFlatListController"))();
		}, []), i = r("useWAWebAsync")(function() {
			return o("WAWebCountryCodeUtils").getMyCountryCode();
		}, []), l = i.value, m = d(n, l), p = m.length === 0, _ = r("useWAWebUnknownContact")({
			phoneOrUsername: n,
			searchPhoneNumber: p,
			searchUsername: p,
			requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN_CONTACT_SEARCH_DIALER
		}), f = _.error, g = _.loading, h = _.onRetry, y = _.unknownContactInfo, C = r("useWAWebStableCallback")(async function(e) {
			var t;
			if (e.preventDefault(), e.stopPropagation(), y != null) {
				var n;
				if ((y == null ? void 0 : y.wid) == null) {
					if (n = await o("WAWebUsernameKeyVerificationFlow").usernameKeyVerificationFlow({
						username: y.username,
						initWithError: y.triedKey
					}), n == null) return;
				} else n = y.wid;
				var r = (t = y == null ? void 0 : y.chat) != null ? t : (await o("WAWebFindChatAction").findOrCreateLatestChat(n, "newChatFlow")).chat;
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
		});
		if (n === "") return s.jsx(o("WAWebEmptyState.react").EnterPhoneNumberToStartChat, {
			xstyle: c.emptyState,
			testid: "start-chat-using-phone-number-default-text"
		});
		if (m.length > 0) {
			var b = e.entryPoint === "calls_tab" && m.length === 1 && !o("WAWebContactGetters").getIsMe(m[0]);
			return b ? s.jsx(r("WAWebDialerContactWithCallButtons.react"), {
				contact: m[0],
				onClick: function(n, r, o, a) {
					return t({
						chatOrigin: a,
						contact: r,
						event: n,
						isSearchResult: o
					});
				}
			}) : s.jsx(r("WAWebChatContactList.react"), {
				contacts: m,
				flatListController: a,
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
				searchText: n
			});
		}
		return g ? s.jsx(o("WAWebEmptyState.react").SearchingNonContactWithSpinner, { xstyle: c.emptyState }) : f ? s.jsx(o("WAWebEmptyState.react").SearchingNonContactError, {
			error: o("WAWebContactlessChatUtils").getErrorStr(f),
			onClick: h
		}) : y ? e.entryPoint === "calls_tab" ? s.jsx(r("WAWebDialerUnknownContactWithCallButtons.react"), {
			contactInfo: y,
			onUnknownContactClick: C,
			searchText: n,
			disableHeader: !0
		}) : s.jsx(r("WAWebUnknownContactSection.react"), {
			contactInfo: y,
			onUnknownContactClick: C,
			searchText: n,
			disableHeader: !0
		}) : s.jsx(o("WAWebEmptyState.react").NoSearchResults, {
			center: !0,
			xstyle: c.emptyState
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
