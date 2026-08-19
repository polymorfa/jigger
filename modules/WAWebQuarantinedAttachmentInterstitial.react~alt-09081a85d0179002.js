__d("WAWebQuarantinedAttachmentInterstitial.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebDefenseModeQuarantineLogger",
	"WAWebDefenseModeUtils",
	"WAWebFbtCommon",
	"WAWebModalManager",
	"WAWebQuarantineDataStore",
	"WAWebUnquarantineMessageJob",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = e.msgKey, n = e.quarantineData, a = c(!1), i = a[0], l = a[1], d = async function() {
			o("WAWebDefenseModeQuarantineLogger").logQuarantineRestoreConfirm(), l(!0);
			try {
				await o("WAWebUnquarantineMessageJob").unquarantineMessageJob(t, n), o("WAWebDefenseModeQuarantineLogger").logQuarantineRestoreSuccess(), o("WAWebModalManager").ModalManager.close();
			} catch (e) {
				o("WAWebDefenseModeQuarantineLogger").logQuarantineRestoreFailed(), o("WAWebModalManager").ModalManager.close(), p();
			} finally {
				l(!1);
			}
		}, m = function() {
			o("WAWebDefenseModeQuarantineLogger").logQuarantineRestoreDismiss(), o("WAWebModalManager").ModalManager.close();
		};
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "quarantined-attachment-interstitial",
			title: s._(
				/*BTDS*/
				""
			),
			onOK: m,
			okText: r("WAWebFbtCommon")("OK"),
			onCancel: d,
			cancelText: r("WAWebFbtCommon")("Unblock"),
			okDisabled: i,
			cancelDisabled: i,
			tsNavigationData: {
				surface: "unknown",
				viewName: "quarantined-attachment"
			},
			children: s._(
				/*BTDS*/
				"",
				[s._param("learnMoreLink", u.jsx(o("WAWebDefenseModeUtils").WAWebDefenseModeLearnMoreClickableLink, {}))]
			)
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m() {
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "unquarantine-error-modal",
			title: s._(
				/*BTDS*/
				""
			),
			onCancel: o("WAWebModalManager").closeModalManager,
			cancelText: r("WAWebFbtCommon")("OK"),
			tsNavigationData: {
				surface: "unknown",
				viewName: "quarantined-attachment-error"
			},
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		o("WAWebModalManager").ModalManager.open(u.jsx(m, {}));
	}
	function _(e) {
		o("WAWebDefenseModeQuarantineLogger").logQuarantineRestoreClick(), o("WAWebQuarantineDataStore").getQuarantineData(e.toString()).then(function(t) {
			if (t == null) {
				p();
				return;
			}
			o("WAWebModalManager").ModalManager.open(u.jsx(d, {
				msgKey: e,
				quarantineData: t
			}));
		}).catch(function() {
			p();
		});
	}
	l.WAWebQuarantinedAttachmentInterstitial = d, l.openQuarantinedAttachmentInterstitial = _;
}), 226);
