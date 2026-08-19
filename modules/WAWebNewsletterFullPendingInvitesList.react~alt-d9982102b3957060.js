__d("WAWebNewsletterFullPendingInvitesList.react", [
	"fbt",
	"WAWebBoolFunc",
	"WAWebContactsModal.react",
	"react",
	"useWAWebNewsletterPendingInvites",
	"useWAWebNewsletterSubscribersContextMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.newsletter, n = e.onCancel, a = e.onVerification, i = o("useWAWebNewsletterPendingInvites").useNewsletterPendingInvites(t), l = o("useWAWebNewsletterSubscribersContextMenu").useNewsletterSubscribersContextMenu({
			chat: t,
			isFullModal: !0,
			onVerification: a,
			followerInformation: new Map(i.map(function(e) {
				return [e.id, { newsletterRole: null }];
			})),
			newsletter: t
		}), c = l[0], d = l[1];
		return u.jsxs(u.Fragment, { children: [u.jsx(r("WAWebContactsModal.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			onCancel: n,
			contacts: i,
			isParentGroup: !0,
			newsletterRoles: new Map(i.map(function(e) {
				return [e.id, {
					pendingInvitee: !0,
					adminProfile: null
				}];
			})),
			openContextOnClick: !0,
			contextEnabled: o("WAWebBoolFunc").returnFalse,
			contextMenu: o("WAWebBoolFunc").returnTrue,
			onContext: d
		}), c] });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
