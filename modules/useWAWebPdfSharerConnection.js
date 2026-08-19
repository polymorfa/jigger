__d("useWAWebPdfSharerConnection", [
	"Promise",
	"WAWebEnvironment",
	"WAWebFileSaverDownloadData",
	"WAWebNoop",
	"WAWebPdfViewerAppConfig",
	"WAWebTP3PConfig",
	"WAWebTPExtensionDetection",
	"WAWebTPLoggingUtils",
	"WAWebTPPdfSharer",
	"WAWebTPPdfViewerQpl",
	"WAWebTPSessionUtils",
	"WAWebWebTPSharedSessionUtils",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"useWAWebCallbackOnce",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = u.useEffect, d = u.useRef, m = u.useState;
	function p(t, a, i, l) {
		var s, u = o("react-compiler-runtime").c(26), p = m(!1), f = p[0], g = p[1], h = m(!1), y = h[0], C = h[1], b = m(null), v = b[0], S = b[1], R = d(!1), L = l.appConfigOverrides, E = l.desktopSession, k = l.getAnnotatedBuffer, I = l.onCancel, T = l.onError, D = l.onReady, x = l.onShareSuccess, $ = (s = r("useWAWebStableCallback"))(D), P = s(x), N = s(T), M = s(I), w = s(k), A = L == null ? void 0 : L.menuItemLabel, F = L == null ? void 0 : L.savedPreference, O = L == null ? void 0 : L.showSavePreferenceCheckbox, B = I != null, W = k != null, q = F != null ? F : !1, U = r("useWAWebCallbackOnce")(o("WAWebTPExtensionDetection").detectBrowserExtension), V, H;
		u[0] !== t ? (V = function() {
			var e = (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var e = yield o("WAWebFileSaverDownloadData").getMultiMsgDownloadData(t);
					e.blob && S(e.blob);
				});
				function r() {
					return e.apply(this, arguments);
				}
				return r;
			})();
			e();
		}, H = [t], u[0] = t, u[1] = V, u[2] = H) : (V = u[1], H = u[2]), c(V, H);
		var G, z;
		u[3] !== v || u[4] !== A || u[5] !== F || u[6] !== O || u[7] !== E || u[8] !== U || u[9] !== W || u[10] !== B || u[11] !== i || u[12] !== a.filehash || u[13] !== a.filename || u[14] !== a.size || u[15] !== q || u[16] !== w || u[17] !== M || u[18] !== N || u[19] !== $ || u[20] !== P ? (G = function() {
			var t = i.current;
			if (!t && (E == null ? void 0 : E.viewer) == null || q && v == null) return r("WAWebNoop");
			o("WAWebTPPdfViewerQpl").pdfViewerQpl.initialize("pdf_sharer"), o("WAWebTPPdfViewerQpl").pdfViewerQpl.sharerModalOpen(), R.current || (R.current = !0, o("WAWebTPLoggingUtils").logPdfSharerOpenEvent(a.filehash, a.size)), g(!0);
			var l = a.filename, s;
			if ((E == null ? void 0 : E.viewer) != null) s = E.viewer;
			else if (t != null) s = new (o("WAWebTPPdfSharer")).WAWebTPPdfSharer(t);
			else return r("WAWebNoop");
			var u = W ? w() : (e || (e = n("Promise"))).resolve(null), c = o("WAWebTP3PConfig").get3PConfigFromMimeType("application/pdf"), d = c != null ? U(c) : (e || (e = n("Promise"))).resolve({
				extensionDetected: !1,
				extensionViewerUrl: null
			}), m = "custom_app", p = "before_load";
			d.then(function(e) {
				m = e.extensionDetected ? "extension" : "custom_app";
				var t = {};
				O != null && (t.showSavePreferenceCheckbox = O), F != null && (t.savedPreference = F), A != null && (t.menuItemLabel = A);
				var n = babelHelpers.extends({}, o("WAWebPdfViewerAppConfig").getWebTPAppConfig(), e, t);
				return s.publishAppConfig(n);
			}).then(function() {
				p = "during_load", o("WAWebTPPdfViewerQpl").pdfViewerQpl.sharerAppReady(), $(s);
			}).catch(function() {
				o("WAWebTPLoggingUtils").logPdfSharerErrorEvent("app_config_failed", "Failed to publish app config to sharer iframe", a.filehash, m), o("WAWebTPPdfViewerQpl").pdfViewerQpl.sharerError(), s.destroy(), C(!0), N();
			}).finally(function() {
				window.setTimeout(function() {
					g(!1);
				}, 200);
			});
			var f = s.listenForCheckboxToggle(_);
			return B && s.listenForCancel().then(function() {
				o("WAWebTPLoggingUtils").logPdfSharerCancelEvent(a.filehash, p), o("WAWebTPPdfViewerQpl").pdfViewerQpl.sharerUserCancel(), M();
			}), s.listenForError().then(function() {
				o("WAWebTPLoggingUtils").logPdfSharerErrorEvent("sharer_app_failed", "Failed to show PDF in sharer iframe", a.filehash, m), o("WAWebTPPdfViewerQpl").pdfViewerQpl.sharerError(), C(!0), g(!1), N();
			}), s.listenForGetPDf().then(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (!v) {
					o("WAWebTPLoggingUtils").logPdfSharerErrorEvent("blob_null_at_share", "PDF blob was null when user attempted to share", a.filehash, m);
					return;
				}
				p = "during_upload", q && o("WAWebTPLoggingUtils").logPdfSharerContinueAutoProceedEvent(m), o("WAWebTPLoggingUtils").logPdfSharerContinueEvent(a.filehash, a.size, m), o("WAWebTPPdfViewerQpl").pdfViewerQpl.sharerUserContinue(), o("WAWebTPPdfViewerQpl").pdfViewerQpl.sharerGetPdfStart();
				var e = yield u, t = e != null ? e : yield v.arrayBuffer(), n = yield o("WAWebTPSessionUtils").createSessionId(t);
				o("WAWebTPPdfViewerQpl").pdfViewerQpl.sharerGetPdfEnd(), yield o("WAWebWebTPSharedSessionUtils").storeWebTPSharedSession(n, l != null ? l : "document.pdf"), o("WAWebTPPdfViewerQpl").pdfViewerQpl.sharerSessionCreated(), o("WAWebTPPdfViewerQpl").pdfViewerQpl.sharerAdobeOpenStart();
				var i = yield s.sharePdf(t, l, n);
				p = "post_handoff", o("WAWebTPLoggingUtils").logPdfSharerSuccessEvent(a.filehash, a.size, m, i.uid), o("WAWebTPPdfViewerQpl").pdfViewerQpl.sharerSuccess(), P(i), r("WAWebEnvironment").isWindows && E != null && E.hide();
			})).catch(function(e) {
				var t = e instanceof Error ? e.name : "sharer_connection_failed";
				o("WAWebTPLoggingUtils").logPdfSharerErrorEvent(t, e instanceof Error ? e.message : "Failed to share PDF", a.filehash, m, e instanceof Error ? e.stack : void 0), o("WAWebTPPdfViewerQpl").pdfViewerQpl.sharerError(), C(!0), N();
			}), (function() {
				f(), E == null && s.destroy();
			});
		}, z = [
			v,
			A,
			F,
			O,
			E,
			U,
			W,
			B,
			i,
			w,
			a.filehash,
			a.filename,
			a.size,
			M,
			N,
			$,
			P,
			q
		], u[3] = v, u[4] = A, u[5] = F, u[6] = O, u[7] = E, u[8] = U, u[9] = W, u[10] = B, u[11] = i, u[12] = a.filehash, u[13] = a.filename, u[14] = a.size, u[15] = q, u[16] = w, u[17] = M, u[18] = N, u[19] = $, u[20] = P, u[21] = G, u[22] = z) : (G = u[21], z = u[22]), c(G, z);
		var j;
		return u[23] !== y || u[24] !== f ? (j = {
			hasError: y,
			loading: f
		}, u[23] = y, u[24] = f, u[25] = j) : j = u[25], j;
	}
	function _() {
		o("WAWebTPLoggingUtils").logPdfSharerAutoProceedCheckboxEvent();
	}
	l.default = p;
}), 98);
