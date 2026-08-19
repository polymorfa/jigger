__d("WAWebFailedMessageEditResendModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebMsgActionCapability",
	"WAWebSendMessageEditAction",
	"WAWebText_DONOTUSE.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		marginTop16: {
			marginTop: "x98l61r",
			$$css: !0
		},
		marginBottom32: {
			marginBottom: "xg6s713",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.failedEditedMsg, n = e.ref, r = o("WAWebMsgActionCapability").canEditText(t), a = s._(
			/*BTDS*/
			""
		), i = s._(
			/*BTDS*/
			""
		), l = s._(
			/*BTDS*/
			""
		), d = function() {
			return o("WAWebModalManager").ModalManager.close(), o("WAWebSendMessageEditAction").resendLatestEdit(t);
		};
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			ref: n,
			tsNavigationData: {
				surface: "unknown",
				viewName: "failed-message-edit-resend"
			},
			okText: a,
			onOK: d,
			cancelText: i,
			onCancel: m,
			children: u.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
					xstyle: [c.marginTop16, c.marginBottom32],
					children: l
				})
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m() {
		o("WAWebModalManager").ModalManager.close();
	}
	l.default = d;
}), 226);
