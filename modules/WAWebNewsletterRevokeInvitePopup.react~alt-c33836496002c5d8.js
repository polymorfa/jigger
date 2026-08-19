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
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(16), n = e.chat, r = e.contact, a;
		t[0] !== n || t[1] !== r ? (a = async function() {
			await m({
				chat: n,
				contact: r
			});
		}, t[0] = n, t[1] = r, t[2] = a) : a = t[2];
		var i = a, l;
		t[3] !== r ? (l = o("WAWebParticipantListUtils").getFirstNameForContact(r), t[3] = r, t[4] = l) : l = t[4];
		var c = l, d;
		t[5] !== c ? (d = s._(
			/*BTDS*/
			"",
			[s._param("contact-name", c)]
		), t[5] = c, t[6] = d) : d = t[6];
		var p = d, _;
		t[7] !== c ? (_ = s._(
			/*BTDS*/
			"",
			[s._param("contact-name", c)]
		), t[7] = c, t[8] = _) : _ = t[8];
		var f = _, g;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (g = o("WAWebCommonNewsletterStrings").getRevokeButtonFullText(), t[9] = g) : g = t[9];
		var h;
		t[10] !== f ? (h = u.jsx(o("WAWebText.react").WAWebTextTitle, {
			color: "secondary",
			children: f
		}), t[10] = f, t[11] = h) : h = t[11];
		var y;
		return t[12] !== i || t[13] !== h || t[14] !== p ? (y = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: p,
			onOK: i,
			onCancel: o("WAWebModalManager").closeModalManager,
			okText: g,
			children: h
		}), t[12] = i, t[13] = h, t[14] = p, t[15] = y) : y = t[15], y;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(8), n = e.chat, r;
		t[0] !== n.id ? (r = u.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: n.id,
			size: o("WAWebDetailImage.react").DetailImageSize.Medium,
			xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom12,
			showOutline: !0
		}), t[0] = n.id, t[1] = r) : r = t[1];
		var a;
		t[2] !== n ? (a = u.jsx(o("WAWebText.react").WAWebTextLarge, {
			as: "h1",
			xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom12,
			children: u.jsx(o("WAWebNewsletterName.react").NewsletterName, {
				chat: n,
				checkmarkLarge: !0
			})
		}), t[2] = n, t[3] = a) : a = t[3];
		var i;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsx(o("WAWebText.react").WAWebTextSmall, { children: s._(
			/*BTDS*/
			""
		) }), t[4] = i) : i = t[4];
		var l;
		return t[5] !== r || t[6] !== a ? (l = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			marginBottom: 12,
			children: [
				r,
				a,
				i
			]
		}), t[5] = r, t[6] = a, t[7] = l) : l = t[7], l;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(10), n = e.chat, r = e.contact, a;
		t[0] !== n || t[1] !== r ? (a = async function() {
			await m({
				chat: n,
				contact: r
			});
		}, t[0] = n, t[1] = r, t[2] = a) : a = t[2];
		var i = a, l;
		t[3] !== n ? (l = u.jsx(_, { chat: n }), t[3] = n, t[4] = l) : l = t[4];
		var s = l, c, p;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (c = o("WAWebCommonNewsletterStrings").getRevokeButtonFullText(), p = [d.buttonGroup, o("WDSPaddings.stylex").wdsPaddings.padding0], t[5] = c, t[6] = p) : (c = t[5], p = t[6]);
		var f;
		return t[7] !== i || t[8] !== s ? (f = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: s,
			onOK: i,
			onCancel: o("WAWebModalManager").closeModalManager,
			okText: c,
			buttonGroupStyle: p
		}), t[7] = i, t[8] = s, t[9] = f) : f = t[9], f;
	}
	l.NewsletterRevokeInvitePopupWithContactName = p, l.NewsletterRevokeInvitePopupWithNewsletterInformation = f;
}), 226);
