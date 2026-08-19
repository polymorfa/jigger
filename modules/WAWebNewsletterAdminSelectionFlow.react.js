__d("WAWebNewsletterAdminSelectionFlow.react", [
	"fbt",
	"$InternalEnum",
	"WAWebModalManager",
	"WAWebNewsletterAdminInvitePrivacyNux.react",
	"WAWebNewsletterAdminInviteWithMessageModal.react",
	"WAWebNewsletterAdminSelectionModal.react",
	"WAWebNewsletterBulkSendAdminInviteAction",
	"WAWebNewsletterErrorPopups.react",
	"WAWebNewsletterMetadataCollection",
	"WAWebNux",
	"WAWebToast.react",
	"WAWebToastManager",
	"react",
	"useWAWebFlow",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef, p = n("$InternalEnum").Mirrored([
		"PrivacyNux",
		"Selection",
		"Confirmation"
	]);
	function _(e, t) {
		if (e.invitees != null && e.invitees.length > 0) return p.Confirmation;
		if (!t) return p.Selection;
		var n = r("WAWebNewsletterMetadataCollection").some(f);
		return n ? p.Selection : p.PrivacyNux;
	}
	function f(e) {
		return e.iAmAdmin();
	}
	function g(e) {
		var t, n = r("useWAWebNux")(o("WAWebNux").NUX.NEWSLETTER_MULTI_ADMIN), a = n[0], i = n[1], l = _(e, a), s = o("useWAWebFlow").useFlow(l, { transitions: o("useWAWebFlow").FlowTransitions.Modal }), c = s[0], f = s[1], g = m((t = e.invitees) != null ? t : []), C = d(function(e) {
			var t = e.selectedItems;
			g.current = t, f.push(p.Confirmation);
		}, [f]), b = d(function(t, n) {
			var r = g.current;
			o("WAWebModalManager").ModalManager.close(), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: h.sendingInvites(r.length) })), y({
				inviteMessage: t,
				base64Thumb: n,
				invitees: r,
				chat: e.chat
			});
		}, [e.chat]);
		if (f.step == null) return null;
		var v;
		switch (f.step) {
			case p.PrivacyNux: {
				v = u.jsx(r("WAWebNewsletterAdminInvitePrivacyNux.react"), {
					onOk: function() {
						return f.push(p.Selection);
					},
					viewNux: i
				});
				break;
			}
			case p.Selection: {
				v = u.jsx(o("WAWebNewsletterAdminSelectionModal.react").WAWebNewsletterAdminSelectionModal, {
					chat: e.chat,
					onConfirm: C
				});
				break;
			}
			case p.Confirmation: {
				var S = l === p.Confirmation;
				v = u.jsx(r("WAWebNewsletterAdminInviteWithMessageModal.react"), {
					chat: e.chat,
					isDirectInvite: S,
					invitees: g.current,
					onSend: b,
					onClose: o("WAWebModalManager").closeModalManager
				});
				break;
			}
		}
		return u.jsx(c, {
			flow: f,
			children: v
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	var h = {
		sendingInvites: function(t) {
			return s._(
				/*BTDS*/
				"",
				[s._plural(t, "invites-sending")]
			);
		},
		invitesSent: function(t) {
			return s._(
				/*BTDS*/
				"",
				[s._plural(t, "invites-sent")]
			);
		}
	};
	function y(e) {
		var t = e.base64Thumb, n = e.chat, r = e.invitees, a = e.inviteMessage;
		return o("WAWebNewsletterBulkSendAdminInviteAction").sendBulkNewsletterAdminInviteAction({
			invitees: r,
			chat: n,
			inviteMessage: a,
			base64Thumb: t
		}).then(function(e) {
			var i = e.failedAttempts;
			if (i.length === 0) {
				o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: h.invitesSent(r.length) }));
				return;
			}
			var l = i.map(function(e) {
				var t = e.invitee;
				return t;
			}), s = r.length - i.length;
			C({
				failedInvites: l,
				base64Thumb: t,
				chat: n,
				inviteMessage: a,
				numberOfSuccessfulInvites: s
			});
		}).catch(function() {
			return C({
				base64Thumb: t,
				chat: n,
				inviteMessage: a,
				failedInvites: r,
				numberOfSuccessfulInvites: 0
			});
		});
	}
	function C(e) {
		var t = e.base64Thumb, n = e.chat, r = e.failedInvites, a = e.inviteMessage, i = e.numberOfSuccessfulInvites;
		o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebNewsletterErrorPopups.react").NewsletterCouldNotSendInviteListPopup, {
			contactList: r,
			numberOfSuccessfulInvites: i,
			onOk: function() {
				y({
					chat: n,
					inviteMessage: a,
					base64Thumb: t,
					invitees: r
				});
			}
		}));
	}
	function b(e) {
		o("WAWebModalManager").ModalManager.open(u.jsx(g, babelHelpers.extends({}, e)), { transition: "modal-flow" });
	}
	l.startAdminInviteFlow = b;
}), 226);
