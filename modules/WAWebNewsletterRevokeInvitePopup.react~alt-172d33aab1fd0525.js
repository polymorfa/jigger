__d("WAWebNewsletterRevokeInvitePopup.react", [
	"fbt",
	"WAWebCommonNewsletterStrings",
	"WAWebConfirmPopup.react",
	"WAWebDetailImage.react",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebNewsletterErrorPopups.react",
	"WAWebNewsletterName.react",
	"WAWebParticipantListUtils",
	"WAWebRevokeNewsletterAdminInviteAction",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback, d = { buttonGroup: {
		justifyContent: "xl56j7k",
		$$css: !0
	} };
	async function m(e) {
		var t = e.chat, n = e.contact, r = async function() {
			o("WAWebModalManager").closeModalManager(), await m({
				chat: t,
				contact: n
			});
		};
		try {
			await o("WAWebRevokeNewsletterAdminInviteAction").revokeNewsletterAdminInviteAction(t, n), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) })), o("WAWebModalManager").closeModalManager();
		} catch (e) {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebNewsletterErrorPopups.react").NewsletterCouldNotRevokeInvitePopup, {
				onOK: r,
				contact: n
			}), { transition: "modal-flow" });
		}
	}
	function p(e) {
		var t = e.chat, n = e.contact, r = c(async function() {
			await m({
				chat: t,
				contact: n
			});
		}, [t, n]), a = o("WAWebParticipantListUtils").getFirstNameForContact(n), i = s._(
			/*BTDS*/
			"",
			[s._param("contact-name", a)]
		), l = s._(
			/*BTDS*/
			"",
			[s._param("contact-name", a)]
		);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: i,
			onOK: r,
			onCancel: o("WAWebModalManager").closeModalManager,
			okText: o("WAWebCommonNewsletterStrings").getRevokeButtonFullText(),
			children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
				color: "secondary",
				children: l
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.chat;
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			marginBottom: 12,
			children: [
				u.jsx(o("WAWebDetailImage.react").DetailImage, {
					id: t.id,
					size: o("WAWebDetailImage.react").DetailImageSize.Medium,
					xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom12,
					showOutline: !0
				}),
				u.jsx(o("WAWebText.react").WAWebTextLarge, {
					as: "h1",
					xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom12,
					children: u.jsx(o("WAWebNewsletterName.react").NewsletterName, {
						chat: t,
						checkmarkLarge: !0
					})
				}),
				u.jsx(o("WAWebText.react").WAWebTextSmall, { children: s._(
					/*BTDS*/
					""
				) })
			]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.chat, n = e.contact, r = c(async function() {
			await m({
				chat: t,
				contact: n
			});
		}, [t, n]), a = u.jsx(_, { chat: t });
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: a,
			onOK: r,
			onCancel: o("WAWebModalManager").closeModalManager,
			okText: o("WAWebCommonNewsletterStrings").getRevokeButtonFullText(),
			buttonGroupStyle: [d.buttonGroup, o("WDSPaddings.stylex").wdsPaddings.padding0]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.NewsletterRevokeInvitePopupWithContactName = p, l.NewsletterRevokeInvitePopupWithNewsletterInformation = f;
}), 226);
