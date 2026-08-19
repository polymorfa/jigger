__d("WAWebNewsletterSubscriberListSection.react", [
	"fbt",
	"WAWebCellV2.react",
	"WAWebChatInfoDrawerSection.react",
	"WAWebChatInfoExpandButton.react",
	"WAWebCommonNewsletterStrings",
	"WAWebFlatListController",
	"WAWebModalManager",
	"WAWebNavigableFlatList.react",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterInviteAdminButton.react",
	"WAWebNewsletterInviteFollowerButton.react",
	"WAWebNewsletterSubscriberList.react",
	"WAWebNewsletterSubscriberListAction",
	"WAWebNewsletterSubscriberListModal.react",
	"WAWebRoundShape.react",
	"WAWebSearchIcon.react",
	"WAWebSingleSelection",
	"WAWebUserPrefsNewsletter",
	"WAWebWamEnumChannelAdminAction",
	"WDSIconIcLink.react",
	"WDSPaddings.stylex",
	"WDSText.react",
	"react",
	"useLazyRef",
	"useWAWebNewsletterSubscribers",
	"useWAWebNewsletterSubscribersContextMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = 68, d = {
		marginTop10: {
			marginTop: "x1anpbxc",
			$$css: !0
		},
		secondaryColor: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.onShareLink, n = u.jsx(r("WAWebRoundShape.react"), {
			theme: "group-modal",
			children: u.jsx(r("WDSIconIcLink.react"), { testid: "ic-link" })
		});
		return u.jsx(r("WAWebCellV2.react"), {
			detailLeft: n,
			isRefresh: !0,
			onClick: t,
			primary: u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body1",
				children: s._(
					/*BTDS*/
					""
				)
			}),
			size: "medium",
			testid: "newsletter-invite-via-link"
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.adminFunnelLogger, n = e.onShareLink, a = e.onTransferOwnershipSelection, i = r("useLazyRef")(function() {
			return new (r("WAWebFlatListController"))();
		}), l = r("useLazyRef")(function() {
			return new (r("WAWebSingleSelection"))([], function(e) {
				return e.id.toString();
			});
		}), p = u.jsx(o("WAWebSearchIcon.react").SearchIcon, { iconXstyle: d.secondaryColor }), _ = e.newsletter.newsletterMetadata, f = (_ == null ? void 0 : _.size) != null ? o("WAWebCommonNewsletterStrings").getNewsletterFollowersText(_.size, !0) : null, g = o("useWAWebNewsletterSubscribers").useNewsletterSubscribers({
			newsletter: e.newsletter,
			count: o("WAWebNewsletterSubscriberListAction").NEWSLETTER_INFO_SUBSCRIBER_DISPLAY_LIMIT,
			cacheType: o("WAWebUserPrefsNewsletter").ValidCachedNewsletterSubscriberKeys.LIMITED,
			includeMeContact: !0
		}), h = g[0], y = g[1], C = h.map(function(e) {
			var t = e.adminProfile, n = e.contact, r = e.role;
			return {
				itemKey: n.id.toString(),
				adminProfile: t,
				contact: n,
				height: c,
				role: r,
				isPendingAdmin: !1
			};
		}), b = o("useWAWebNewsletterSubscribersContextMenu").useNewsletterSubscribersContextMenu({
			chat: e.newsletter,
			isFullModal: !1,
			onVerification: e.onVerification,
			followerInformation: new Map(C.map(function(e) {
				var t;
				return [(t = e.contact) == null ? void 0 : t.id, { newsletterRole: e.role }];
			})),
			newsletter: e.newsletter,
			onTransferOwnershipSelection: a
		}), v = b[0], S = b[1];
		l.current.init(h.map(function(e) {
			var t = e.contact;
			return t;
		}));
		var R = function(t) {
			o("WAWebModalManager").ModalManager.close(), a(t);
		}, L = function() {
			t.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.SEARCH_FOLLOWER), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebNewsletterSubscriberListModal.react").NewsletterSubscriberListModal, {
				newsletter: e.newsletter,
				onTransferOwnershipSelection: R,
				onVerification: e.onVerification
			}), { transition: "modal-flow" });
		}, E = y ? u.jsx(r("WAWebChatInfoExpandButton.react"), {
			fromNewsletter: !0,
			numMore: h.length,
			onClick: L,
			viewAll: !0
		}) : null;
		return u.jsxs(u.Fragment, { children: [
			u.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerListSection, {
				subtitle: p,
				testid: "newsletter-info-follower-header",
				title: f,
				titleOnClick: L,
				xstyle: d.marginTop10
			}),
			u.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerListSection, {
				testid: "newsletter-info-follower-list",
				xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingHor0,
				children: [
					u.jsx(r("WAWebNewsletterInviteFollowerButton.react"), { chat: e.newsletter }),
					u.jsx(r("WAWebNewsletterInviteAdminButton.react"), { chat: e.newsletter }),
					u.jsx(m, { onShareLink: n }),
					u.jsx(r("WAWebNavigableFlatList.react"), {
						ariaLabel: s._(
							/*BTDS*/
							"",
							[s._param("follower-size", f)]
						),
						flatListController: i.current,
						listData: C,
						onRenderItem: function(n) {
							return u.jsx(o("WAWebNewsletterSubscriberList.react").NewsletterSubscriber, {
								active: l.current,
								handleContactClick: function(n, r) {
									return e.onContactInfo(r);
								},
								handleContactContextMenu: S,
								newsletter: e.newsletter,
								subscriberData: n
							});
						},
						rotateList: !0,
						selection: l.current
					}),
					E,
					u.jsx(o("WAWebNewsletterSubscriberList.react").NewsletterSubListLastRow, {
						text: o("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled() ? s._(
							/*BTDS*/
							""
						) : s._(
							/*BTDS*/
							""
						),
						textAlign: "start"
					})
				]
			}),
			v
		] });
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
