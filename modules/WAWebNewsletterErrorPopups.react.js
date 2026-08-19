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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n = o("react-compiler-runtime").c(6), r = e.chat, a;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (a = s._(
			/*BTDS*/
			""
		), n[0] = a) : a = n[0];
		var i = a, l;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), n[1] = l) : l = n[1];
		var c = l, d = ((t = r.newsletterMetadata) == null ? void 0 : t.isPreview) === !0, m = d ? i : null, p = d ? c : i, _;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (_ = {
			surface: "unknown",
			viewName: "newsletter-error-unavailable"
		}, n[2] = _) : _ = n[2];
		var f;
		return n[3] !== p || n[4] !== m ? (f = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: m,
			onOK: o("WAWebModalManager").closeModalManager,
			tsNavigationData: _,
			children: p
		}), n[3] = p, n[4] = m, n[5] = f) : f = n[5], f;
	}
	function d() {
		var e = o("react-compiler-runtime").c(3), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s._(
			/*BTDS*/
			""
		), e[0] = t) : t = e[0];
		var n = t, r;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (r = s._(
			/*BTDS*/
			""
		), e[1] = r) : r = e[1];
		var a = r, i;
		return e[2] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: n,
			onOK: o("WAWebModalManager").closeModalManager,
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-error-deleted"
			},
			children: a
		}), e[2] = i) : i = e[2], i;
	}
	function m() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
		}), e[0] = t) : t = e[0], t;
	}
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
