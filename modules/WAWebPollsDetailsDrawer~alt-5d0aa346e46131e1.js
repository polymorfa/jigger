__d("WAWebPollsDetailsDrawer", [
	"fbt",
	"WAWebChatGetters",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEmojiText.react",
	"WAWebFlatListController",
	"WAWebFormatConfigurationConversation",
	"WAWebFrontendMsgGetters",
	"WAWebMsgGetters",
	"WAWebMsgLinks",
	"WAWebMsgModelPropUtils",
	"WAWebPollCreationUtils",
	"WAWebPollsOptionSection",
	"WAWebPollsUseResults",
	"WAWebPollsUseStickySortedResults",
	"WAWebPollsUseVoteCount",
	"WAWebTextSizeUtils",
	"WDSBanner.react",
	"react",
	"stylex",
	"useWAWebMsgValues",
	"useWAWebNewsletterPollsResults",
	"useWAWebPollAssociatedMessagesMap"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c.useMemo, p = { pollName: {
		display: "x1lliihq",
		fontSize: "xlm9qay",
		lineHeight: "x19gsaw2",
		wordBreak: "x13faqbe",
		$$css: !0
	} };
	function _(e) {
		var t = e.associatedMessages, n = e.msg, r = e.onClose, a = e.onOpenContactInfo, i = e.onViewAllVotes, l = e.ref, s = o("useWAWebNewsletterPollsResults").useNewsletterPollsResults(n);
		return d.jsx(g, {
			ref: l,
			mode: "newsletter",
			msg: n,
			associatedMessages: t,
			optionsToResults: s,
			onClose: r,
			onOpenContactInfo: a,
			onViewAllVotes: i
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.associatedMessages, n = e.msg, r = e.onClose, a = e.onOpenContactInfo, i = e.onViewAllVotes, l = e.ref, s = o("WAWebPollsUseResults").useResults(n);
		return d.jsx(g, {
			mode: "e2ee",
			ref: l,
			msg: n,
			associatedMessages: t,
			optionsToResults: s,
			onClose: r,
			onOpenContactInfo: a,
			onViewAllVotes: i
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t, n, a, i = e.associatedMessages, l = e.mode, c = e.msg, _ = e.onClose, f = e.onOpenContactInfo, g = e.onViewAllVotes, h = e.optionsToResults, y = e.ref, C = o("WAWebTextSizeUtils").getWAWebTextSizeStyles().pollDetailsQuestionTextSize, b = o("useWAWebPollAssociatedMessagesMap").usePollAssociatedMessagesMap(Array.from(h.keys()), i), v = o("WAWebPollsUseVoteCount").useVoteCount(c), S = o("useWAWebMsgValues").useMsgValues(c.id, [
			(a = o("WAWebMsgGetters")).getPollName,
			a.getId,
			a.getPollInvalidated,
			a.getPollHideVoterNames
		]), R = S[0], L = S[1], E = S[2], k = S[3], I = o("WAWebFrontendMsgGetters").getChat(c.unsafe()), T = o("WAWebPollsUseStickySortedResults").useStickySortedResults(h), D = o("WAWebMsgModelPropUtils").isTrusted(c.unsafe()), x = o("WAWebFormatConfigurationConversation").Conversation({
			links: (t = o("WAWebMsgLinks").getLinksFromMsg(c.unsafe())) != null ? t : [],
			phoneNumbers: [],
			selectable: !0,
			trusted: D,
			fromMe: L.fromMe
		}), $ = m(function() {
			return new (r("WAWebFlatListController"))();
		}, []), P = o("WAWebChatGetters").getIsGroup(I) ? (n = I.groupMetadata) == null ? void 0 : n.participants.length : 0;
		return d.jsxs(r("WAWebDrawer.react"), {
			ref: y,
			theme: "striped",
			testid: "poll-details-drawer",
			tsNavigationData: {
				surface: "polls-details",
				viewName: "polls-details"
			},
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: c.pollType === o("WAWebPollCreationUtils").PollType.QUIZ ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onCancel: _,
				focusBackOrCancel: !0
			}), d.jsxs(r("WAWebDrawerBody.react"), {
				flatListControllers: [$],
				children: [d.jsxs(r("WAWebDrawerSection.react"), {
					theme: "no-padding",
					children: [E && d.jsx("div", {
						className: "x1380le5 xefnzgg x1uvdrpn x14mko6t",
						children: d.jsx(r("WDSBanner.react"), {
							type: "warning",
							body: s._(
								/*BTDS*/
								""
							),
							testid: "invalid-poll-details-view-warning"
						})
					}), d.jsxs("div", {
						className: "x1h678fw xv6tirj x1m4z3lf x1evaxtz",
						children: [d.jsx(o("WAWebEmojiText.react").EmojiText, {
							text: R,
							selectable: !0,
							formatters: x,
							className: (u || (u = r("stylex")))(p.pollName, C)
						}), P != null && P > 1 && d.jsx("span", {
							className: "x1nxh6w3 x1fc57z9 x1rg5ohu x1380le5",
							children: s._(
								/*BTDS*/
								"",
								[s._plural(P, "group_length"), s._param("vote_count", v)]
							)
						})]
					})]
				}), T.map(function(e) {
					var t = e[0], n = e[1];
					return d.jsx(r("WAWebPollsOptionSection"), {
						associatedMsg: b.get(t),
						mode: l,
						option: t,
						result: n,
						isPollFromMe: L.fromMe,
						links: D ? o("WAWebMsgLinks").getPollOptionLinks(c.unsafe(), t) : null,
						trusted: D,
						onViewAllVotes: function() {
							g(t.localId);
						},
						onOpenContactInfo: f,
						flatListController: $,
						testid: "poll-details-option-" + t.localId,
						isCorrectOption: c.correctOptionIndex == null ? null : t.localId === c.correctOptionIndex,
						hideVoterNames: k === !0
					}, t.localId);
				})]
			})]
		}, "poll-details-drawer");
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(t) {
		var n = t.ref, r = babelHelpers.objectWithoutPropertiesLoose(t, e);
		return o("WAWebMsgGetters").getIsNewsletterMsg(r.msg) ? d.jsx(_, babelHelpers.extends({}, r, { ref: n })) : d.jsx(f, babelHelpers.extends({}, r, { ref: n }));
	}
	h.displayName = h.name + " [from " + i.id + "]";
	var y = h;
	l.DetailsDrawer = y;
}), 226);
