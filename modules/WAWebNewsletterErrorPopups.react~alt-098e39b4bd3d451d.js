__d("WAWebNewsletterErrorPopups.react", [
	"fbt",
	"WAWebBackendErrors",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebFbtIntlList",
	"WAWebModalManager",
	"WAWebParticipantListUtils",
	"WAWebText.react",
	"WAWebUserPrefsMeUser",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n = e.chat, r = s._(
			/*BTDS*/
			""
		), a = s._(
			/*BTDS*/
			""
		), i = ((t = n.newsletterMetadata) == null ? void 0 : t.isPreview) === !0, l = i ? r : null, c = i ? a : r;
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: l,
			onOK: o("WAWebModalManager").closeModalManager,
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-error-unavailable"
			},
			children: c
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d() {
		var e = s._(
			/*BTDS*/
			""
		), t = s._(
			/*BTDS*/
			""
		);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: e,
			onOK: o("WAWebModalManager").closeModalManager,
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-error-deleted"
			},
			children: t
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m() {
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: o("WAWebModalManager").closeModalManager,
			testid: "channel-pin-too-old",
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-pin-too-old"
			},
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.error, n = e.onOK, a = t instanceof o("WAWebBackendErrors").ServerStatusCodeError && (t.status === 404 || t.statusCode === 404), i = a ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, babelHelpers.extends({
			onOK: a ? o("WAWebModalManager").closeModalManager : n,
			okText: a ? null : r("WAWebFbtCommon")("Try again")
		}, a ? {} : { onCancel: o("WAWebModalManager").closeModalManager }, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-error-accept-invite"
			},
			children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
				color: "secondary",
				children: i
			})
		}));
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.contact, n = e.onOK, a = o("WAWebParticipantListUtils").getFirstNameForContact(t), i = s._(
			/*BTDS*/
			"",
			[s._param("contact-revoke-name", a)]
		);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: n,
			onCancel: o("WAWebModalManager").closeModalManager,
			okText: r("WAWebFbtCommon")("Try again"),
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-error-revoke-invite"
			},
			children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
				color: "secondary",
				children: i
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.contact, n = e.onOK, a = o("WAWebParticipantListUtils").getFirstNameForContact(t), i = o("WAWebUserPrefsMeUser").isMeAccount(t.id) ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			"",
			[s._param("contact-revoke-name", a)]
		);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: n,
			onCancel: o("WAWebModalManager").closeModalManager,
			okText: r("WAWebFbtCommon")("Try again"),
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-error-dismiss-admin"
			},
			children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
				color: "secondary",
				children: i
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	var g = 4;
	function h(e) {
		var t = e.contactList, n = e.numberOfSuccessfulInvites, a = e.onOk, i = s._(
			/*BTDS*/
			"",
			[s._plural(t.length - (g - 1), "number-of-overflow-failed-invitees")]
		), l = t.map(function(e, n) {
			return n === g - 1 && t.length > g ? i.toString() : o("WAWebParticipantListUtils").getFirstNameForContact(e);
		}).slice(0, g), c = r("WAWebFbtIntlList")(l, r("WAWebFbtIntlList").CONJUNCTIONS.AND, r("WAWebFbtIntlList").DELIMITERS.COMMA), d = n > 0 ? s._(
			/*BTDS*/
			"",
			[
				s._plural(n),
				s._param("number-of-successful-invites", n),
				s._param("localized-failed-invites-lists", c)
			]
		) : s._(
			/*BTDS*/
			"",
			[s._param("localized-failed-invites-lists", c)]
		);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: a,
			onCancel: o("WAWebModalManager").closeModalManager,
			okText: r("WAWebFbtCommon")("Try again"),
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-error-send-invite-list"
			},
			children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
				color: "secondary",
				children: d
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.NewsletterMessageNotFoundPopup = c, l.NewsletterMessageDeletedPopup = d, l.NewsletterPinTooOldPopup = m, l.NewsletterCouldNotAcceptInvitePopup = p, l.NewsletterCouldNotRevokeInvitePopup = _, l.NewsletterCouldNotDismissAdminPopup = f, l.NewsletterCouldNotSendInviteListPopup = h;
}), 226);
