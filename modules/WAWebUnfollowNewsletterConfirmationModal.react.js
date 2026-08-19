__d("WAWebUnfollowNewsletterConfirmationModal.react", [
	"fbt",
	"WAWebActionToast.react",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebNewsletterUnsubscribeAction",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState;
	function p(e) {
		return s._(
			/*BTDS*/
			"",
			[s._param("newsletterName", e.name)]
		);
	}
	function _(e) {
		var t = e.chat, n = e.loggingOptions, a = e.onClose, i = m(!1), l = i[0], c = i[1], _ = d(function() {
			o("WAWebModalManager").ModalManager.close(), a == null || a();
		}, [a]), g = d(function() {
			var e = o("WAWebActionToast.react").genId();
			o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
				msg: s._(
					/*BTDS*/
					""
				),
				id: e
			}));
		}, []), h = d(function() {
			c(!0), o("WAWebNewsletterUnsubscribeAction").unsubscribeFromNewsletterAction(t, babelHelpers.extends({ deleteLocalModels: !1 }, n)).catch(function() {
				g();
			}).finally(function() {
				o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
					msg: p(t),
					visible: !1
				})), _(), c(!1);
			});
		}, [
			t,
			n,
			g,
			_
		]);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			ariaLabel: f(!1, t),
			onOK: h,
			okText: r("WAWebFbtCommon")("Unfollow"),
			okDisabled: l,
			cancelDisabled: l,
			okSpinner: l,
			onCancel: _,
			onOverlayClick: _,
			children: u.jsxs(o("WAWebText.react").WAWebTextTitle, { children: [" ", f(!0, t)] })
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e, t) {
		var n = e ? u.jsx(o("WAWebName.react").Name, {
			chat: t,
			titlify: !0
		}) : t.name;
		return s._(
			/*BTDS*/
			"",
			[s._param("channel_name", n)]
		);
	}
	f.displayName = f.name + " [from " + i.id + "]", l.getUnfollowNewsletterAnnouncement = p, l.UnfollowNewsletterConfirmationModal = _;
}), 226);
