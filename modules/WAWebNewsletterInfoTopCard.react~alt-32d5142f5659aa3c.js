__d("WAWebNewsletterInfoTopCard.react", [
	"fbt",
	"WAWebCommonNewsletterEnums",
	"WAWebCommonNewsletterStrings",
	"WAWebCopyPasteSelectable.react",
	"WAWebDrawerSection.react",
	"WAWebFlex.react",
	"WAWebFollowNewsletter",
	"WAWebL10N",
	"WAWebModalManager",
	"WAWebNewsletterInfoPhoto.react",
	"WAWebNewsletterInfoSubject.react",
	"WAWebStateUtils",
	"WAWebText.react",
	"WAWebUnfollowNewsletterConfirmationModal.react",
	"WAWebWamEnumChannelEventSurface",
	"WAWebWamEnumChannelLinkShareScreen",
	"WAWebWamEnumTsSurface",
	"WDSActionTile.react",
	"WDSActionTileGroup.react",
	"WDSIconIcAdd.react",
	"WDSIconIcCheck.react",
	"WDSIconIcFastForward.react",
	"WDSIconIcLink.react",
	"react",
	"useWAWebModelValues",
	"useWAWebNewsletterInviteLink"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback, d = {
		marginBottom7: {
			marginBottom: "xwoyzhm",
			$$css: !0
		},
		marginTop25: {
			marginTop: "x1e1m7ul",
			$$css: !0
		},
		marginBottom10: {
			marginBottom: "xyorhqc",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.adminFunnelLogger, n = e.chat, a = o("useWAWebModelValues").useOptionalModelValues(n.newsletterMetadata, [
			"size",
			"privacy",
			"terminated",
			"isSuspendedOrTerminated",
			"membershipType",
			"inviteCode"
		]), i = (a == null ? void 0 : a.privacy) === o("WAWebCommonNewsletterEnums").NewsletterPrivacy.Private ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		a != null && a.terminated && (i = s._(
			/*BTDS*/
			""
		));
		var l = (a == null ? void 0 : a.size) != null ? o("WAWebCommonNewsletterStrings").getNewsletterFollowersText(a.size, !0) : null, c = "padding-small-refreshed";
		return u.jsxs(r("WAWebDrawerSection.react"), {
			theme: c,
			children: [u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				children: [
					u.jsx(r("WAWebNewsletterInfoPhoto.react"), {
						chat: n,
						xstyle: d.marginBottom7,
						readOnly: (a == null ? void 0 : a.isSuspendedOrTerminated) || !(a != null && a.iAmAdminOrOwner()),
						adminFunnelLogger: t,
						showOutline: !0
					}),
					u.jsx(r("WAWebNewsletterInfoSubject.react"), {
						chat: n,
						adminFunnelLogger: t
					}),
					u.jsx("div", {
						"data-testid": "newsletter-info-top-card-subtitle",
						className: "x1evy7pa x1kgmq87 x2b8uid",
						children: u.jsx(o("WAWebCopyPasteSelectable.react").SelectableSpan, {
							dir: "auto",
							selectable: !0,
							children: u.jsxs(o("WAWebText.react").WAWebTextTitle, {
								color: "secondary",
								children: [i, a != null && a.isSuspendedOrTerminated ? null : u.jsxs(u.Fragment, { children: [r("WAWebL10N").isRTL() ? " - " : " · ", l] })]
							})
						})
					})
				]
			}), a != null && a.isSuspendedOrTerminated ? null : u.jsx(p, { chat: n })]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t, n, a = e.chat, i = a.newsletterMetadata, l = c(async function() {
			await o("WAWebFollowNewsletter").followNewsletter(o("WAWebStateUtils").unproxy(a), {
				eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE,
				discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_PROFILE
			});
		}, [a]), m = c(function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebUnfollowNewsletterConfirmationModal.react").UnfollowNewsletterConfirmationModal, {
				chat: a,
				loggingOptions: {
					eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE,
					discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_PROFILE
				}
			}));
		}, [a]), p = [];
		(t = i == null ? void 0 : i.iAmGuest()) != null && t ? p.push({
			wdsIcon: r("WDSIconIcAdd.react"),
			onClick: l,
			testid: "channel_info_follow_action_tile",
			title: s._(
				/*BTDS*/
				""
			)
		}) : (n = i == null ? void 0 : i.iAmSubscriber()) != null && n && p.push({
			wdsIcon: r("WDSIconIcCheck.react"),
			onClick: m,
			testid: "channel_info_unfollow_action_tile",
			title: s._(
				/*BTDS*/
				""
			)
		});
		var _ = o("useWAWebNewsletterInviteLink").useNewsletterInviteLink({
			chat: a,
			linkShareLoggingNavigationParams: { linkShareScreen: o("WAWebWamEnumChannelLinkShareScreen").CHANNEL_LINK_SHARE_SCREEN.CHANNEL_INFO }
		}), f = _[0], g = _[1], h = _[2];
		f != null && (p.push({
			wdsIcon: r("WDSIconIcFastForward.react"),
			onClick: h,
			testid: "channel_info_forward_invite_action_tile",
			title: s._(
				/*BTDS*/
				""
			)
		}), document.queryCommandSupported("copy") && p.push({
			wdsIcon: r("WDSIconIcLink.react"),
			onClick: g,
			testid: "channel_info_copy_link_action_tile",
			title: o("WAWebCommonNewsletterStrings").getCopyLinkText()
		}));
		var y = p.map(function(e, t) {
			var n = e.onClick, o = e.testid, a = e.title, i = e.wdsIcon;
			return u.jsx(r("WDSActionTile.react"), {
				Icon: i,
				onPress: function() {
					return void n();
				},
				label: a,
				testid: o
			}, t);
		});
		return u.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			align: "center",
			xstyle: [d.marginTop25, d.marginBottom10],
			children: u.jsx(r("WDSActionTileGroup.react"), { children: y })
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = m;
}), 226);
