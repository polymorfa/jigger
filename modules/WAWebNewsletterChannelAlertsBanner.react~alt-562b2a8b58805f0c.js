__d("WAWebNewsletterChannelAlertsBanner.react", [
	"fbt",
	"WAWebConversationBanner.react",
	"WAWebDrawerManager",
	"WAWebEnforcementActionLogging",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebKeyboardTabUtils",
	"WAWebNewsletterEnforcementAlertFlowLoadable",
	"WAWebNux",
	"WAWebText.react",
	"WAWebUimUie.react",
	"WAWebWamEnumInteractionEntryPoint",
	"WAWebWamEnumInteractionSurface",
	"WAWebWarningIcon.react",
	"react",
	"useWAWebModelValues",
	"useWAWebNewsletterGeosuspendedCountries",
	"useWAWebNewsletterHasProfilePictureDeletionAlerts",
	"useWAWebNewsletterIsSuspended",
	"useWAWebNewsletterMessageDeliveryUpdates",
	"useWAWebNux",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = {
		banner: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		criticalColor: {
			color: "x30a034",
			$$css: !0
		},
		paddingEnd20: {
			paddingInlineEnd: "xcldk2z",
			$$css: !0
		}
	};
	function m(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.newsletter, l = a.onClose, u = r("useWAWebUIM")(), m = function() {
			r("WAWebEnforcementActionLogging").isSessionStarted() || r("WAWebEnforcementActionLogging").startEnforcementSession(o("WAWebWamEnumInteractionEntryPoint").INTERACTION_ENTRY_POINT.ALERT_BANNER, i.id.toString(), o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.NEWSLETTER_CONVERSATION_SCREEN), r("WAWebEnforcementActionLogging").logAlertBannerDismissClick(), l();
		}, p = function() {
			r("WAWebEnforcementActionLogging").startEnforcementSession(o("WAWebWamEnumInteractionEntryPoint").INTERACTION_ENTRY_POINT.ALERT_BANNER, i.id.toString(), o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.NEWSLETTER_CONVERSATION_SCREEN), r("WAWebEnforcementActionLogging").logChannelAlertsClick(), o("WAWebDrawerManager").DrawerManager.openDrawerRight(c.jsx(o("WAWebNewsletterEnforcementAlertFlowLoadable").WAWebNewsletterEnforcementAlertFlowLoadable, {
				chat: i,
				onClose: o("WAWebDrawerManager").closeDrawerRight
			}), {
				transition: "slide-left",
				uim: u,
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
			});
		};
		return c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "NewsletterChannelAlertsBanner",
			escapable: !0,
			children: c.jsx(r("WAWebConversationBanner.react"), {
				onClick: p,
				onClose: m,
				ref: n,
				xstyle: d.banner,
				children: c.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					children: [c.jsx(r("WAWebFlexItem.react"), {
						xstyle: d.paddingEnd20,
						children: c.jsx(o("WAWebWarningIcon.react").WarningIcon, {
							iconXstyle: d.criticalColor,
							height: 20,
							width: 20
						})
					}), c.jsx(r("WAWebFlexItem.react"), { children: c.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
						color: "primary",
						children: s._(
							/*BTDS*/
							""
						)
					}) })]
				})
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t, n, a, i = o("useWAWebModelValues").useModelValues(e, ["id", "newsletterMetadata"]), l = o("useWAWebModelValues").useOptionalModelValues(i.newsletterMetadata, ["membershipType"]), s = i.id, u = (t = o("useWAWebNewsletterMessageDeliveryUpdates").useNewsletterMessageDeliveryUpdates(i)) != null ? t : [], c = (n = o("useWAWebNewsletterGeosuspendedCountries").useNewsletterGeosuspendedCountries(i)) != null ? n : [], d = o("useWAWebNewsletterIsSuspended").useNewsletterIsSuspended(i), m = o("WAWebNux").getNewsletterAlertsBannerNuxKey(s.toString()), p = r("useWAWebNux")(m), _ = p[0], f = p[1], g = u.length > 0, h = c.length > 0, y = o("useWAWebNewsletterHasProfilePictureDeletionAlerts").useWAWebNewsletterHasProfilePictureDeletionAlerts(e), C = _ && ((a = l == null ? void 0 : l.iAmAdminOrOwner()) != null ? a : !1) && (g || h || d || y);
		return [C, f];
	}
	l.NewsletterChannelAlertsBanner = m, l.useNewsletterChannelAlertsBanner = p;
}), 226);
