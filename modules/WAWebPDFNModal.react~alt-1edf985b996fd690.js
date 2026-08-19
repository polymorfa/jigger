__d("WAWebPDFNModal.react", [
	"WAWebEmptyState.react",
	"WAWebHttpErrors",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebPDFNErrorModals.react",
	"WAWebPDFNLogging",
	"WAWebPDFNMetaModalLoadable",
	"WAWebPDFNTypes",
	"WAWebPDFNWhatsAppModal.react",
	"WAWebSetUserDisclosureStageAction",
	"WAWebTos",
	"WAWebUserDisclosureCollection",
	"WAWebWamEnumNoticeType",
	"WAWebWamEnumUserNoticeEvent",
	"WaWebPDFNCommonUtils",
	"react",
	"useWAWebDisclosureShownTracking",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useRef, p = u.useState;
	function _(e) {
		var t = e.noticeType, n = t === void 0 ? o("WaWebPDFNCommonUtils").PdfnNoticeType.Blocking : t, a = e.onAcceptError, i = e.onCancel, l = e.onLoadError, u = e.pdfnId, _ = e.runIfTosAccepted, g = e.theme, h = g === void 0 ? o("WaWebPDFNCommonUtils").PdfnTheme.WhatsApp : g, y = e.verifyTosAccepted, C = p(y()), b = C[0], v = C[1], S = p(!b), R = S[0], L = S[1], E = p(), k = E[0], I = E[1], T = p(!1), D = T[0], x = T[1], $ = p(), P = $[0], N = $[1], M = m(!1), w = async function() {
			var e, t = (k == null || (e = k.privacyDisclosureModal) == null || (e = e.primaryButton) == null ? void 0 : e.action) === "OK" ? o("WAWebPDFNTypes").DISCLOSURE_STAGE.OK : o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED;
			try {
				M.current = !0, await o("WAWebSetUserDisclosureStageAction").updateUserDisclosureStateAction(u, t, { disclosureContentVersion: k == null ? void 0 : k.policyVersion }), v(!0);
			} catch (e) {
				a == null || a(), n === o("WaWebPDFNCommonUtils").PdfnNoticeType.NonBlocking && o("WAWebModalManager").ModalManager.close();
			}
		}, A = c(function(e) {
			N(e), x(!0), l == null || l();
		}, [l]), F = async function() {
			o("WAWebPDFNLogging").logUserNoticeEvent({
				noticeId: u,
				noticeContentVersion: k == null ? void 0 : k.policyVersion,
				noticeEvent: o("WAWebWamEnumUserNoticeEvent").USER_NOTICE_EVENT.PDFN_DISMISSED,
				noticeType: o("WAWebWamEnumNoticeType").NOTICE_TYPE.PDFN_DISCLOSURE
			}), o("WAWebModalManager").ModalManager.close(), i == null || i();
		};
		o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", function() {
			D !== !0 && n === o("WaWebPDFNCommonUtils").PdfnNoticeType.NonBlocking && (M.current || w(), _());
		}), d(function() {
			if (!b) {
				var e = new AbortController();
				o("WAWebTos").TosManager.populateTosManagerNewsletterIds();
				var t = async function() {
					try {
						var t = await o("WAWebUserDisclosureCollection").UserDisclosureCollection.find(u.toString());
						if (e.signal.aborted) return;
						t != null ? I(t) : A(s.jsx(o("WAWebPDFNErrorModals.react").ServerErrorModal, {}));
					} catch (e) {
						A(e instanceof o("WAWebHttpErrors").HttpNetworkError ? s.jsx(o("WAWebPDFNErrorModals.react").InternetErrorModal, {}) : s.jsx(o("WAWebPDFNErrorModals.react").ServerErrorModal, {}));
					} finally {
						L(!1);
					}
				};
				return t(), function() {
					return e.abort();
				};
			}
		}, []);
		var O = r("useWAWebDisclosureShownTracking")({
			noticeId: u.toString(),
			disclosureContentVersion: k == null ? void 0 : k.policyVersion,
			ready: k != null
		});
		if (!R && D) return P;
		if (R) return s.jsx(o("WAWebModal.react").Modal, { children: s.jsx(o("WAWebEmptyState.react").Loading, {}) });
		if (b) return o("WAWebModalManager").ModalManager.close(), _(), null;
		var B = n === o("WaWebPDFNCommonUtils").PdfnNoticeType.NonBlocking ? w : F;
		return s.jsx("div", {
			ref: O,
			children: s.jsx(f, {
				pdfnNotice: k,
				handleCancel: function() {
					return void B();
				},
				handleOk: function() {
					return void w();
				},
				theme: h
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.handleCancel, n = e.handleOk, a = e.pdfnNotice, i = e.theme, l = i === void 0 ? o("WaWebPDFNCommonUtils").PdfnTheme.WhatsApp : i;
		return l === o("WaWebPDFNCommonUtils").PdfnTheme.WhatsApp ? s.jsx(r("WAWebPDFNWhatsAppModal.react"), {
			pdfnNotice: a,
			handleCancel: t,
			handleOk: n
		}) : s.jsx(o("WAWebPDFNMetaModalLoadable").WAWebPDFNMetaModalLoadable, {
			pdfnNotice: a,
			onAccept: n,
			onCancel: t
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = _;
}), 98);
