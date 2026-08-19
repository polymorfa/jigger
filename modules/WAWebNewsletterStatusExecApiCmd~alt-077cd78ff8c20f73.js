__d("WAWebNewsletterStatusExecApiCmd", [
	"fbt",
	"JSResourceForInteraction",
	"WAJids",
	"WALogger",
	"WAWebCmd",
	"WAWebConfirmPopup.react",
	"WAWebKeyboardTabUtils",
	"WAWebLoadNewsletterPreviewChatAction",
	"WAWebModalManager",
	"WAWebNavBarTypes",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterStatusFetchAction",
	"WAWebNewsletterStatusGapFillAction",
	"WAWebPDFNGatingUtils",
	"WAWebPDFNModal.react",
	"WAWebStatusCollection",
	"getErrorSafe",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p, _ = p || (p = o("react"));
	async function f(e) {
		if (!o("WAWebNewsletterGatingUtils").isNewsletterStatusDeeplinkEnabled()) {
			y();
			return;
		}
		if (!o("WAWebPDFNGatingUtils").hasAckedNewsletterNuxOrTos()) {
			o("WAWebModalManager").ModalManager.open(_.jsx(r("WAWebPDFNModal.react"), {
				pdfnId: o("WAWebPDFNGatingUtils").getNewsletterNuxOrTos(),
				verifyTosAccepted: o("WAWebPDFNGatingUtils").hasAckedNewsletterNuxOrTos,
				runIfTosAccepted: function() {
					g(e);
				}
			}));
			return;
		}
		return g(e);
	}
	async function g(t) {
		var n = t.inviteCode, a = t.statusId;
		try {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[newsletter-status-deeplink] Resolve channel by invite"])));
			var i = await o("WAWebLoadNewsletterPreviewChatAction").loadNewsletterPreviewChat(n);
			if (i == null) {
				C();
				return;
			}
			var l = o("WAJids").toNewsletterJid(i.id.toJid());
			o("WAWebCmd").Cmd.setActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Status), o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[newsletter-status-deeplink] Fetching statuses for ", ""])), l);
			var s = await o("WAWebNewsletterStatusFetchAction").fetchNewsletterStatuses(l);
			if (s === o("WAWebNewsletterStatusFetchAction").FetchResult.FetchFailed) {
				b();
				return;
			}
			var p = o("WAWebStatusCollection").StatusCollection.get(i.id);
			if (p == null || p.totalCount === 0) {
				b();
				return;
			}
			var f = void 0;
			if (a != null) {
				var g = parseInt(a, 10);
				if (!Number.isNaN(g) && g > 0 && (f = h(p, g), f == null && (o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[newsletter-status-deeplink] status not found, backfilling"]))), await o("WAWebNewsletterStatusGapFillAction").fillNewsletterStatusGap(l, g), f = h(p, g))), f == null) {
					b();
					return;
				}
			}
			o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[newsletter-status-deeplink] Opening status viewer"])));
			var y = await r("JSResourceForInteraction")("WAWebStatusViewer.react").__setRef("WAWebNewsletterStatusExecApiCmd").load();
			o("WAWebModalManager").ModalManager.openMedia(_.jsx(y, {
				initialStatus: p,
				initialStatusMsg: f,
				closeStatusViewer: function() {
					return o("WAWebModalManager").ModalManager.closeMedia();
				},
				continuousPlay: !1
			}), {
				transition: "status-modal",
				focusType: { type: o("WAWebKeyboardTabUtils").FocusType.CUSTOM }
			});
		} catch (e) {
			o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[newsletter-status-deeplink] failed to open deeplink"]))).catching(r("getErrorSafe")(e)).tags("newsletter-status-deeplink").sendLogs("newsletter-status-deeplink-error"), C();
		}
	}
	function h(e, t) {
		return e.msgs.getModelsArray().find(function(e) {
			return e.serverId === t;
		});
	}
	function y() {
		o("WAWebModalManager").ModalManager.open(_.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: o("WAWebModalManager").closeModalManager,
			children: s._(
				/*BTDS*/
				""
			)
		}));
	}
	function C() {
		o("WAWebModalManager").ModalManager.open(_.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: o("WAWebModalManager").closeModalManager,
			children: s._(
				/*BTDS*/
				""
			)
		}));
	}
	function b() {
		o("WAWebModalManager").ModalManager.open(_.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: o("WAWebModalManager").closeModalManager,
			children: s._(
				/*BTDS*/
				""
			)
		}));
	}
	l.execNewsletterStatusDeeplinkCmd = f;
}), 226);
