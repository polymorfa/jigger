__d("WAWebNewsletterContextMenu", [
	"fbt",
	"WAWebChatContextMenuItemMarkUnread.react",
	"WAWebChatContextMenuItemPin.react",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebModalManager",
	"WAWebMuteMenuItem.react",
	"WAWebNewsletterExtendedGatingUtils",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterMsgLinkUtils",
	"WAWebRunWithInternetCheck",
	"WAWebStateUtils",
	"WAWebUnfollowNewsletterConfirmationModal.react",
	"WAWebWamEnumChannelEventSurface",
	"WAWebWamEnumTsSurface",
	"WDSIconIcCode.react",
	"WDSIconIcDelete.react",
	"WDSIconIcInfo.react",
	"WDSIconIcLink.react",
	"WDSIconIcLogout.react",
	"WDSMenuItem.react",
	"react",
	"useWAWebNewsletterInviteLink",
	"useWAWebNewsletterMuteState"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n, a, i, l, s, c = o("WAWebStateUtils").unproxy(e), C = (t = (n = c.newsletterMetadata) == null ? void 0 : n.adminCount) != null ? t : 0, b = (a = (i = c.newsletterMetadata) == null ? void 0 : i.iAmSubscriber()) != null ? a : !1, v = [u.jsx(m, { chat: c }, "Info"), u.jsx(d, { chat: c }, "Pin")];
		(b || C > 1 || o("WAWebNewsletterExtendedGatingUtils").isNewsletterAdminNotificationsEnabled(c.newsletterMetadata)) && (v.push(u.jsx(p, { chat: c }, "Mute")), v.push(u.jsx(_, { chat: c }, "MarkAsRead"))), v.push(u.jsx(f, { chat: c }, "CopyLink")), v.push(u.jsx(g, { chat: c }, "EmbedChannel"));
		var S = u.jsx(r("WDSMenuItem.react"), { type: "separator" }, "newsletter-context-menu-separator");
		return v.push(S), b && v.push(u.jsx(h, { chat: c }, "Unfollow")), (l = (s = c.newsletterMetadata) == null ? void 0 : s.iAmOwner()) != null && l && v.push(u.jsx(y, { chat: c }, "Delete")), v[v.length - 1] === S && v.pop(), v;
	}
	function d(e) {
		var t = e.chat;
		return u.jsx(r("WAWebChatContextMenuItemPin.react"), { chat: t }, "pin");
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.chat, n = async function() {
			await o("WAWebCmd").Cmd.openChatBottom({
				chat: t,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterChatlist
			}), o("WAWebCmd").Cmd.chatInfoDrawer(t);
		}, a = s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WDSMenuItem.react"), {
			testid: "mi-info",
			onPress: function() {
				return void n();
			},
			Icon: r("WDSIconIcInfo.react"),
			title: a
		}, "Info");
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.chat, n = o("useWAWebNewsletterMuteState").useNewsletterMuteState(t), a = n.isMuted, i = n.toggleMuteState, l = function() {
			var e = a ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
			o("WAWebRunWithInternetCheck").runWithInternetCheck(function() {
				return i();
			}, e);
		};
		return u.jsx(r("WAWebMuteMenuItem.react"), {
			onMute: l,
			isMuted: a,
			chat: t
		}, "mute");
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.chat;
		return u.jsx(r("WAWebChatContextMenuItemMarkUnread.react"), { chat: t });
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t, n = e.chat, a = (t = n.newsletterMetadata) == null ? void 0 : t.inviteCode;
		if (a == null) return null;
		var i = function() {
			return o("useWAWebNewsletterInviteLink").copyInviteLink(o("useWAWebNewsletterInviteLink").getInviteLink(a));
		}, l = s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WDSMenuItem.react"), {
			testid: "mi-copy-link",
			onPress: i,
			Icon: r("WDSIconIcLink.react"),
			title: l
		}, "HandleCopy");
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.chat;
		if (!o("WAWebNewsletterGatingUtils").canEmbedNewsletterChannel(t.newsletterMetadata)) return null;
		var n = function() {
			return o("WAWebNewsletterMsgLinkUtils").handleNewsletterChannelEmbedClick(t);
		}, a = s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WDSMenuItem.react"), {
			testid: "mi-embed-channel",
			onPress: n,
			Icon: r("WDSIconIcCode.react"),
			title: a
		}, "EmbedChannel");
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.chat, n = async function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebUnfollowNewsletterConfirmationModal.react").UnfollowNewsletterConfirmationModal, {
				chat: t,
				loggingOptions: {
					eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_UPDATES_HOME,
					discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_UPDATES_HOME
				}
			}));
		}, a = s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WDSMenuItem.react"), {
			testid: "mi-unfollow-newsletter",
			onPress: function() {
				return void n();
			},
			Icon: r("WDSIconIcLogout.react"),
			title: a,
			destructive: !0
		}, "HandleUnfollow");
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.chat, n = async function() {
			await o("WAWebCmd").Cmd.openChatBottom({
				chat: t,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterChatlist
			}), o("WAWebCmd").Cmd.newsletterDeleteDrawer(t);
		}, a = s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WDSMenuItem.react"), {
			testid: "mi-delete-newsletter",
			onPress: function() {
				return void n();
			},
			Icon: r("WDSIconIcDelete.react"),
			title: a,
			destructive: !0
		}, "DeleteNewsletter");
	}
	y.displayName = y.name + " [from " + i.id + "]", l.getNewsletterContextMenuItems = c;
}), 226);
