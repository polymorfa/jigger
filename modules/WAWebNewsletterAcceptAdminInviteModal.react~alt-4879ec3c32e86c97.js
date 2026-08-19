__d("WAWebNewsletterAcceptAdminInviteModal.react", [
	"fbt",
	"WAWeb-moment",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebConfirmPopup.react",
	"WAWebDetailImage.react",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebNewsletterAcceptAdminInviteAction",
	"WAWebNewsletterErrorPopups.react",
	"WAWebNewsletterModalsUtils.react",
	"WAWebNewsletterName.react",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"getErrorSafe",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback, d = {
		expirationDate: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		marginBottom12: {
			marginBottom: "xcytdqz",
			$$css: !0
		}
	}, m = async function(t) {
		o("WAWebModalManager").ModalManager.close(), await p(t);
	}, p = async function(t) {
		try {
			await o("WAWebNewsletterAcceptAdminInviteAction").acceptNewsletterAdminInviteAction(t.id), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) })), o("WAWebModalManager").ModalManager.close();
		} catch (e) {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebNewsletterErrorPopups.react").NewsletterCouldNotAcceptInvitePopup, {
				onOK: function() {
					return m(t);
				},
				error: r("getErrorSafe")(e)
			}), { transition: "modal-flow" });
		}
	};
	function _(e) {
		var t = e.chat, n = e.expiration, r = e.extendedNux, a = c(async function() {
			await p(t);
		}, [t]), i = c(function() {
			o("WAWebModalManager").ModalManager.close(), o("WAWebCmd").Cmd.openChatBottom({
				chat: t,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterAdminInviteAcceptModal
			});
		}, [t]);
		return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			okText: h.acceptInvite(),
			onOK: a,
			cancelText: h.closeModal(),
			onCancel: i,
			children: [
				u.jsx(f, { chat: t }),
				u.jsx(g, { extendedNux: r }),
				u.jsx(o("WAWebText.react").WAWebTextSmall, {
					marginTop: 20,
					xstyle: d.expirationDate,
					children: h.expiration(n)
				})
			]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.chat;
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			marginBottom: 12,
			children: [
				u.jsx(o("WAWebDetailImage.react").DetailImage, {
					id: t.id,
					size: o("WAWebDetailImage.react").DetailImageSize.Medium,
					xstyle: d.marginBottom12
				}),
				u.jsx(o("WAWebText.react").WAWebTextLarge, {
					as: "h1",
					xstyle: d.marginBottom12,
					children: u.jsx(o("WAWebNewsletterName.react").NewsletterName, {
						chat: t,
						checkmarkLarge: !0
					})
				}),
				u.jsx(o("WAWebText.react").WAWebTextSmall, { children: h.subtitle() })
			]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.extendedNux;
		return t ? u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			children: u.jsx(o("WAWebNewsletterModalsUtils.react").BulletPointList, { bullets: o("WAWebNewsletterModalsUtils.react").ExtendedBullets })
		}) : null;
	}
	g.displayName = g.name + " [from " + i.id + "]";
	var h = {
		acceptInvite: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		closeModal: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		expiration: function(t) {
			var e = r("WAWeb-moment").utc(t * 1e3), n = e.diff(r("WAWeb-moment")().utc(), "days");
			return n < 0 ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				"",
				[s._plural(n, "number")]
			);
		},
		subtitle: function() {
			return s._(
				/*BTDS*/
				""
			);
		}
	};
	l.default = _;
}), 226);
