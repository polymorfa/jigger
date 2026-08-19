__d("WAWebNewsletterFullSubscriberList.react", [
	"fbt",
	"WAWebBoolFunc",
	"WAWebContactsModal.react",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterSubscriberList.react",
	"WAWebUserPrefsNewsletter",
	"react",
	"useWAWebNewsletterSubscribers",
	"useWAWebNewsletterSubscribersContextMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback;
	function d(e) {
		var t = e.newsletter, n = e.onCancel, a = e.onTransferOwnershipSelection, i = e.onVerification, l = o("useWAWebNewsletterSubscribers").useNewsletterSubscribers({
			newsletter: t,
			count: o("WAWebNewsletterGatingUtils").getMaxSubscriberNumber(),
			cacheType: o("WAWebUserPrefsNewsletter").ValidCachedNewsletterSubscriberKeys.FULL,
			includeMeContact: !0
		}), d = l[0], m = new Map(d.map(function(e) {
			var t = e.adminProfile, n = e.contact.id, r = e.role;
			return [n, {
				role: r,
				adminProfile: t
			}];
		})), p = o("useWAWebNewsletterSubscribersContextMenu").useNewsletterSubscribersContextMenu({
			chat: t,
			isFullModal: !0,
			onVerification: i,
			followerInformation: new Map(d.map(function(e) {
				var t = e.contact, n = e.role;
				return [t.id, { newsletterRole: n }];
			})),
			newsletter: t,
			onTransferOwnershipSelection: a
		}), _ = p[0], f = p[1], g = c(function(e) {
			return o("WAWebNewsletterSubscriberList.react").showContextForCell(e, t == null ? void 0 : t.newsletterMetadata);
		}, [t]);
		return u.jsxs(u.Fragment, { children: [u.jsx(r("WAWebContactsModal.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			onCancel: n,
			contacts: d.map(function(e) {
				var t = e.contact;
				return t;
			}),
			newsletterRoles: m,
			isNewsletter: !0,
			openContextOnClick: !0,
			contextEnabled: o("WAWebBoolFunc").returnFalse,
			contextMenu: g,
			onContext: f
		}), _] });
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
