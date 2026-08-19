__d("WAWebPollsVoterRow", [
	"WALogger",
	"WAWebABProps",
	"WAWebBoolFunc",
	"WAWebBusinessProfileTypes",
	"WAWebChatCell.react",
	"WAWebChatContactUtils",
	"WAWebChatGetters",
	"WAWebChatGroupUtils",
	"WAWebClock",
	"WAWebContactGetters",
	"WAWebDetailImage.react",
	"WAWebElevatedPushNamesFlag",
	"WAWebEmojiText.react",
	"WAWebFindChatAction",
	"WAWebFrontendContactGetters",
	"WAWebFrontendMsgGetters",
	"WAWebFrontendPollVoteGetters",
	"WAWebPollVoteGetters",
	"WAWebPollsPollVoteModel",
	"WAWebTextSizeUtils",
	"react",
	"stylex",
	"useWAWebContactFormattedUsernameOrPhoneByChat",
	"useWAWebContactValues",
	"useWAWebPollVoteValues"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c = u || (u = o("react")), d = { marginInlineStart9: {
		marginInlineStart: "x1y3qizg",
		$$css: !0
	} }, m = 0;
	function p(e) {
		var t = e.vote, n = c.jsx(y, { timestamp: t.time * 1e3 }), r = c.jsx(_, {
			vote: t,
			fallbackNode: n
		});
		return c.jsx(C, {
			primary: r,
			primaryDetail: null,
			id: t.id,
			secondary: t.contact != null ? n : null
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.fallbackNode, n = e.vote, r = n.contact;
		return r == null ? t : c.jsx(f, {
			contact: r,
			fallbackNode: t
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.contact, n = e.fallbackNode, r = o("useWAWebContactValues").useContactValues(t.id, [
			o("WAWebFrontendContactGetters").getFormattedName,
			o("WAWebFrontendContactGetters").getIsMyContact,
			o("WAWebContactGetters").getIsMe
		]), a = r[0], i = r[1], l = r[2];
		return i || l ? c.jsx(h, {
			formattedUserName: a,
			accessibleUserName: null
		}) : n;
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(t) {
		var n, a = t.onOpenContactInfo, i = t.vote, l = o("useWAWebPollVoteValues").usePollVoteValues(i.id, [
			o("WAWebFrontendPollVoteGetters").getSenderObj,
			o("WAWebPollVoteGetters").getTimestamp,
			o("WAWebFrontendPollVoteGetters").getParentMsg
		]), s = l[0], u = l[1], d = l[2], p = o("useWAWebContactValues").useContactValues(s.id, [
			(n = o("WAWebContactGetters")).getId,
			o("WAWebFrontendContactGetters").getFormattedName,
			n.getNotifyName,
			n.getVerifiedLevel,
			n.getIsBusiness,
			n.getVerifiedName,
			n.getIsMe
		]), _ = p[0], f = p[1], g = p[2], b = p[3], v = p[4], S = p[5], R = p[6], L = o("WAWebFrontendMsgGetters").getChat(d.unsafe()), E = a != null && !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(L) && !R && o("WAWebABProps").getABPropConfigValue("enable_poll_results_contact_info_entry_point"), k = E ? function() {
			var t = o("WAWebChatGetters").getIsGroup(L) ? o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(_, "poll_voter_row") : _;
			if (t != null) {
				var n = ++m;
				o("WAWebFindChatAction").findOrCreateLatestChat(t, "pollVoterRow").then(function(e) {
					var t = e.chat;
					n === m && (a == null || a(t));
				}).catch(function() {
					return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[polls] failed to open voter contact info"]))).sendLogs("polls-voter-open-contact-info");
				});
			}
		} : null, I = r("useWAWebContactFormattedUsernameOrPhoneByChat")(L, s), T = I.formattedUsernameOrPhone, D = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(L), x = o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(s) && (D || v && b === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH), $, P;
		return x ? ($ = c.jsx(h, {
			accessibleUserName: o("WAWebChatContactUtils").getAccessibleNotifyName(g),
			formattedUserName: o("WAWebChatContactUtils").getFormattedNotifyName(g)
		}), P = c.jsx(o("WAWebEmojiText.react").EmojiText, {
			direction: "auto",
			text: T
		})) : v && S != null ? ($ = c.jsx(h, {
			accessibleUserName: o("WAWebChatContactUtils").getAccessibleNotifyName(S),
			formattedUserName: o("WAWebChatContactUtils").getFormattedNotifyName(S)
		}), P = c.jsx(o("WAWebEmojiText.react").EmojiText, {
			direction: "auto",
			text: T
		})) : ($ = c.jsx(h, {
			accessibleUserName: void 0,
			formattedUserName: f
		}), P = null), c.jsx(C, {
			id: _,
			onClick: k,
			primary: $,
			primaryDetail: P,
			secondary: c.jsx(y, { timestamp: u })
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.accessibleUserName, n = e.formattedUserName, r = o("WAWebTextSizeUtils").getWAWebTextSizeStyles(), a = r.pollDetailsOptionTextSize;
		return c.jsx(o("WAWebEmojiText.react").EmojiText, {
			direction: "auto",
			text: n,
			ariaLabel: t,
			titlify: !0,
			ellipsify: !0,
			xstyle: a
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.timestamp, n = o("WAWebTextSizeUtils").getWAWebTextSizeStyles(), a = n.pollDetailsOptionTextSize, i = o("WAWebClock").Clock.relativeDateAndTimeStr(t / 1e3);
		return c.jsx("span", babelHelpers.extends({ title: i }, (s || (s = r("stylex"))).props(a), { children: i }));
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.id, n = e.onClick, a = e.primary, i = e.primaryDetail, l = e.secondary, s = n != null;
		return c.jsx(r("WAWebChatCell.react"), {
			contextEnabled: o("WAWebBoolFunc").returnFalse,
			handleKeyboardClick: s,
			idle: !s,
			image: c.jsx(o("WAWebDetailImage.react").DetailImage, {
				xstyle: d.marginInlineStart9,
				id: t,
				size: o("WAWebDetailImage.react").DetailImageSize.ExtraSmall
			}),
			onClick: n,
			primary: a,
			primaryDetail: i,
			secondary: l,
			theme: "chat-info"
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.onOpenContactInfo, n = e.vote;
		return n instanceof o("WAWebPollsPollVoteModel").PollVote ? c.jsx(g, {
			vote: n,
			onOpenContactInfo: t
		}) : c.jsx(p, { vote: n });
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = b;
}), 98);
