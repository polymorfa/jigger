__d("WAWebBusinessTopCard.react", [
	"WAWebBizProfileGatingUtils",
	"WAWebBusinessActions.react",
	"WAWebBusinessName.react",
	"WAWebBusinessOpenHours.react",
	"WAWebBusinessProfileCoverPhoto.react",
	"WAWebBusinessProfileUtils",
	"WAWebContactGetters",
	"WAWebContactInfoNotes.react",
	"WAWebContactInfoPhoneNumberHidden.react",
	"WAWebContactManagerGating",
	"WAWebDrawerSection.react",
	"WAWebErrorBoundary.react",
	"WAWebFbtIntlList",
	"WAWebGoogleOpenStatus.react",
	"WAWebMemberLabelContactInfo.react",
	"WAWebNotesUtils",
	"WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
	"react",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.businessProfile, n = e.contact, a = e.displayRequestPhoneNumber, i = e.onOpenChatTabInContactManager, l = e.onProductCatalog, u = e.onProfilePicClick, c = e.onProfilePicLoad, d = e.onSaveContact, m = e.sourceChat, p = o("useWAWebModelValues").useModelValues(t, [
			"businessHours",
			"categories",
			"googlePlace",
			"showGoogleInfo"
		]), _ = p.businessHours, f = p.categories, g = p.googlePlace, h = p.showGoogleInfo, y = s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "business-top-card-name",
			children: s.jsx(r("WAWebBusinessName.react"), {
				contact: n,
				businessProfile: t
			})
		}), C, b = o("WAWebContactGetters").getIsAiHub(n);
		!o("WAWebContactGetters").getIsIAS(n) && !b && !o("WAWebContactGetters").getIsCAPISupportAccount(n) && !o("WAWebContactGetters").getId(n).isBot() && !t.isBizBot3p && f != null && f.length > 0 && (C = s.jsx("div", {
			className: "x1f6kntn xhslqc4 x37zpob xcytdqz",
			children: r("WAWebFbtIntlList")(f.map(function(e) {
				return e.localized_display_name;
			}), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.BULLET)
		}));
		var v = o("WAWebBizProfileGatingUtils").isGoogleProfileIntegrationEnabled() && o("WAWebBusinessProfileUtils").isGoogleLinked(t) && h === !0, S = g == null ? void 0 : g.googleOpenNow, R = null;
		v ? S != null && (R = s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "business-top-card-google-open-status",
			children: s.jsx(r("WAWebGoogleOpenStatus.react"), { openNow: S })
		})) : _ && (R = s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "business-top-card-business-hours",
			children: s.jsx(r("WAWebBusinessOpenHours.react"), { hours: _ })
		}));
		var L = n.businessProfile ? s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "business-top-card-profile-cover-photo",
			children: s.jsx(r("WAWebBusinessProfileCoverPhoto.react"), {
				contact: n,
				businessProfile: n.businessProfile,
				onClick: u,
				onLoad: c
			})
		}) : null, E = o("WAWebNotesUtils").shouldEnableNotesForWid(n == null ? void 0 : n.id) && !(o("WAWebContactManagerGating").contactManagerEnabled() && o("WAWebContactManagerGating").isEligibleForCustomerFields(n)) ? s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "business-top-card-contact-info-notes",
			children: s.jsx(r("WAWebContactInfoNotes.react"), { contact: n })
		}) : null, k = a && !b && !o("WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration").hasPhoneNumberHidingThreadPromotionMigrationStarted();
		return s.jsxs(r("WAWebDrawerSection.react"), {
			theme: "padding-no-margin",
			children: [
				L,
				s.jsxs("div", {
					className: "x2b8uid",
					children: [
						y,
						s.jsx(o("WAWebMemberLabelContactInfo.react").MemberLabelContactInfo, {
							chat: m,
							contact: n
						}),
						k && s.jsx(r("WAWebContactInfoPhoneNumberHidden.react"), {}),
						C,
						R,
						s.jsx(r("WAWebBusinessActions.react"), {
							contact: n,
							onProductCatalog: l,
							onSaveContact: d,
							displayRequestPnButton: k,
							onOpenChatTabInContactManager: i
						})
					]
				}),
				E
			]
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
