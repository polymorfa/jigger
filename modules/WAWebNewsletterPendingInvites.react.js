__d("WAWebNewsletterPendingInvites.react", [
	"fbt",
	"WAWebChatInfoDrawerSection.react",
	"WAWebChatInfoExpandButton.react",
	"WAWebCommonNewsletterStrings",
	"WAWebFlatListController",
	"WAWebModalManager",
	"WAWebNavigableFlatList.react",
	"WAWebNewsletterSubscriberList.react",
	"WAWebNewsletterSubscriberListAction",
	"WAWebNewsletterSubscriberListModal.react",
	"WAWebNoop",
	"WAWebSingleSelection",
	"react",
	"useLazyRef",
	"useWAWebNewsletterPendingInvites",
	"useWAWebNewsletterSubscribersContextMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { marginTop10: {
		marginTop: "x1anpbxc",
		$$css: !0
	} }, d = 68;
	function m(e) {
		var t = e.newsletter, n = e.onVerification, a = o("useWAWebNewsletterPendingInvites").useNewsletterPendingInvites(t), i = a.length, l = r("useLazyRef")(function() {
			return new (r("WAWebFlatListController"))();
		}), m = r("useLazyRef")(function() {
			return new (r("WAWebSingleSelection"))([], function(e) {
				return e.id.toString();
			});
		}), p = a.slice(0, o("WAWebNewsletterSubscriberListAction").NEWSLETTER_INFO_SUBSCRIBER_DISPLAY_LIMIT).map(function(e) {
			return {
				itemKey: "pending-" + e.id.toJid(),
				adminProfile: null,
				contact: e,
				height: d,
				role: null,
				isPendingAdmin: !0
			};
		}), _ = o("useWAWebNewsletterSubscribersContextMenu").useNewsletterSubscribersContextMenu({
			chat: t,
			isFullModal: !1,
			onVerification: n,
			followerInformation: new Map(p.map(function(e) {
				var t;
				return [(t = e.contact) == null ? void 0 : t.id, { newsletterRole: null }];
			})),
			newsletter: t
		}), f = _[0], g = _[1];
		if (i === 0) return null;
		var h = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebNewsletterSubscriberListModal.react").NewsletterSubscriberListModal, {
				newsletter: t,
				initialStep: o("WAWebNewsletterSubscriberListModal.react").FollowersFlowStep.PendingInvites,
				onVerification: n
			}), { transition: "modal-flow" });
		}, y = i > o("WAWebNewsletterSubscriberListAction").NEWSLETTER_INFO_SUBSCRIBER_DISPLAY_LIMIT ? u.jsx(r("WAWebChatInfoExpandButton.react"), {
			numMore: i,
			onClick: h,
			fromNewsletter: !0,
			viewAll: !0
		}) : null;
		return u.jsxs(u.Fragment, { children: [u.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerListSection, {
			testid: "newsletter-info-pending-invites-list",
			title: o("WAWebCommonNewsletterStrings").getAdminInvitesTitleText(i),
			xstyle: c.marginTop10,
			children: [u.jsx(r("WAWebNavigableFlatList.react"), {
				ariaLabel: s._(
					/*BTDS*/
					"",
					[s._param("pending-invites-list-size", i, [0])]
				),
				flatListController: l.current,
				listData: p,
				onRenderItem: function(t) {
					return u.jsx(o("WAWebNewsletterSubscriberList.react").NewsletterSubscriber, {
						subscriberData: t,
						handleContactClick: r("WAWebNoop"),
						handleContactContextMenu: g,
						active: m.current
					});
				},
				selection: m.current,
				rotateList: !0
			}), y]
		}), f] });
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
