__d("WAWebMediaPdfDocumentPreview.react", [
	"CometHeroHoldTrigger.react",
	"WAWebAppTracker",
	"WAWebEnvironment",
	"WAWebFileSaver",
	"WAWebMediaPdfDocumentError.react",
	"WAWebMediaPdfDocumentIframe.react",
	"WAWebMediaPdfDocumentThumbnail.react",
	"WAWebNoop",
	"WAWebPdfViewerAnrTracker",
	"WAWebPdfViewerAppConfig",
	"WAWebPdfViewerBrowserMetrics",
	"WAWebPdfViewerEventEmitter",
	"WAWebPdfViewerLongAnimationFrameTracker",
	"WAWebPdfViewerTestIds",
	"WAWebSpinner.react",
	"WAWebStateUtils",
	"WAWebTPIframeUtils",
	"WAWebTPLoggingUtils",
	"WAWebTPPdfViewer",
	"WAWebTPPdfViewerGatingUtils",
	"WAWebTPPdfViewerQpl",
	"WAWebTPViewerStyleConfig",
	"WAWebUseCtrlFSearch",
	"cr:9092",
	"cr:9123",
	"react",
	"react-compiler-runtime",
	"useWAWebWebTPCloseWDSMenusOnIframeFocus"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useRef, p = u.useState;
	function _(e) {
		var t = o("react-compiler-runtime").c(45), a = e.blob, i = e.containerRef, l = e.mediaData, u = e.msg, c = e.onClose, _ = e.onLoad, R = e.onRender, E = p(!1), k = E[0], I = E[1], T = p(!1), D = T[0], x = T[1], $ = p(!1), P = $[0], N = $[1], M = m(!1), w = p(null), A = w[0], F = w[1], O = m(null);
		r("useWAWebWebTPCloseWDSMenusOnIframeFocus")(A), o("WAWebUseCtrlFSearch").useCtrlFSearch(L);
		var B, W;
		t[0] !== l.filehash || t[1] !== l.size ? (B = function() {
			return o("WAWebPdfViewerAnrTracker").startPdfViewerAnrTracking(), o("WAWebPdfViewerLongAnimationFrameTracker").startPdfViewerLongAnimationFrameTracking(), o("WAWebPdfViewerBrowserMetrics").startPdfViewerBrowserMetrics(), o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.PdfViewer), o("WAWebTPLoggingUtils").logDocumentOpenEvent(l.filehash, l.size), (function() {
				o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.PdfViewer);
				var e = o("WAWebPdfViewerAnrTracker").consumePdfViewerAnrCount(), t = o("WAWebPdfViewerLongAnimationFrameTracker").consumePdfViewerLongAnimationFrameData();
				o("WAWebPdfViewerBrowserMetrics").stopPdfViewerBrowserMetrics().catch(r("WAWebNoop")).then(function() {
					var n = o("WAWebPdfViewerBrowserMetrics").consumePdfViewerBrowserMetrics();
					o("WAWebTPLoggingUtils").logDocumentCloseEvent(l.filehash, l.size, e, t, n);
				});
			});
		}, W = [l.filehash, l.size], t[0] = l.filehash, t[1] = l.size, t[2] = B, t[3] = W) : (B = t[2], W = t[3]), d(B, W);
		var q;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (q = function() {
			N(!0), M.current = !0;
		}, t[4] = q) : q = t[4];
		var U = q, V;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (V = function() {
			N(!1), M.current = !1;
		}, t[5] = V) : V = t[5];
		var H = V, G, z;
		t[6] !== a || t[7] !== l.filehash || t[8] !== l.filename || t[9] !== l.size || t[10] !== R ? (G = function() {
			var e = O.current;
			if (!e || !a) return I(!1), x(!0), r("WAWebNoop");
			o("WAWebTPIframeUtils").removePreloadedIframe(), I(!0);
			var t = l.filename, n = new (o("WAWebTPPdfViewer")).WAWebTPPdfViewer(e);
			F(n), n.publishAppConfig(o("WAWebPdfViewerAppConfig").getWebTPAppConfig()), o("WAWebTPPdfViewerQpl").pdfViewerQpl.renderPdfStart(), n.renderPdf(a, t, {
				isAnnotationsEnabled: o("WAWebTPPdfViewerGatingUtils").isWebTPPdfAnnotationsEnabled(),
				isWindowsHybrid: r("WAWebEnvironment").isWindows,
				styleConfig: o("WAWebTPViewerStyleConfig").getWebTPViewerStyleConfig()
			}).then(function() {
				o("WAWebTPPdfViewerQpl").pdfViewerQpl.renderPdfEnd(), R == null || R();
			}).catch(function(e) {
				o("WAWebTPPdfViewerQpl").pdfViewerQpl.renderPdfError(), n.destroy(), x(!0), o("WAWebTPLoggingUtils").logRenderErrorEvent(e, l.filehash, l.size);
			}).finally(function() {
				I(!1);
			});
			var i = n.listen("APP_ERROR", function(e) {
				var t = e.error;
				n.destroy(), x(!0), o("WAWebTPLoggingUtils").logRenderErrorEvent(t, l.filehash, l.size);
			}), s = n.listen("APP_PERF_DATA", function(e) {
				var t = e.data, n = e.sdkVersion;
				o("WAWebTPLoggingUtils").logAppPerfDataEvent({
					appPerfData: t,
					filehash: l.filehash,
					sdkVersion: n,
					size: l.size
				});
			}), u = n.listen("TELEMETRY_DATA", function(e) {
				var t = e.data, n = e.sdkVersion;
				o("WAWebTPLoggingUtils").logAppTelemetryDataEvent(t, l.filehash, l.size, n), o("WAWebTPLoggingUtils").logViewerRenderTimeEvent({
					filehash: l.filehash,
					sdkVersion: n,
					size: l.size,
					telemetryEvent: t
				});
			});
			n.listen("QPL", S);
			var c = n.listen("ANNOTATION_INTERACTION", function(e) {
				o("WAWebTPLoggingUtils").logAnnotationInteractionFromBridge(e, l.filehash);
			}), d = n.listen("TELEMETRY_ERROR", function(e) {
				var t = e.error;
				o("WAWebTPLoggingUtils").logRenderErrorEvent(t, l.filehash, l.size);
			}), m = function() {
				n.showSearch();
			};
			o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on("search:show", m);
			var p = n.listen("SEARCH_CLOSED", v), _ = function(t) {
				n.annotate(t);
			};
			o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on("annotation:command", _);
			var L = function() {
				n.getUpdatedPDFBuffer().then(b);
			};
			o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on("pdf:getUpdatedBuffer", L);
			var E = n.listen("ANNOTATION_MODE_ENDED", C), k = n.listen("IS_COMMENTING_ALLOWED_RESPONSE", y), T = n.listen("UNDO_REDO_STATE_CHANGE", h), D = function() {
				M.current || n.focusFirstInViewer();
			};
			o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on("focus:firstInViewer", D);
			var $ = function() {
				M.current || n.focusLastInViewer();
			};
			o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on("focus:lastInViewer", $);
			var P = n.listen("FOCUS_FIRST_IN_PARENT", g), N = n.listen("FOCUS_LAST_IN_PARENT", f);
			return (function() {
				var e;
				i(), s(), u(), (e = o("WAWebPdfViewerEventEmitter")).pdfViewerEventEmitter.off("search:show", m), p(), e.pdfViewerEventEmitter.off("focus:firstInViewer", D), e.pdfViewerEventEmitter.off("focus:lastInViewer", $), P(), N(), e.pdfViewerEventEmitter.off("annotation:command", _), e.pdfViewerEventEmitter.off("pdf:getUpdatedBuffer", L), E(), k(), T(), c(), d(), n.destroy();
			});
		}, z = [
			l.filename,
			a,
			R,
			l.filehash,
			l.size
		], t[6] = a, t[7] = l.filehash, t[8] = l.filename, t[9] = l.size, t[10] = R, t[11] = G, t[12] = z) : (G = t[11], z = t[12]), d(G, z);
		var j, K;
		t[13] !== c || t[14] !== A ? (j = function() {
			var e = A == null ? void 0 : A.listen("REQUEST_CLOSE", function() {
				c == null || c();
			});
			return (function() {
				e == null || e();
			});
		}, K = [A, c], t[13] = c, t[14] = A, t[15] = j, t[16] = K) : (j = t[15], K = t[16]), d(j, K);
		var Q;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (Q = { className: "x5yr21d xh8yej3 x1n2onr6 x1h3rtpe" }, t[17] = Q) : Q = t[17];
		var X;
		t[18] !== D || t[19] !== l.filehash || t[20] !== l.filename || t[21] !== l.size || t[22] !== u || t[23] !== P ? (X = D && !P && s.jsx(r("WAWebMediaPdfDocumentError.react"), {
			onDownload: function() {
				o("WAWebFileSaver").FileSaver.initDownload(o("WAWebStateUtils").unproxy(u));
			},
			filename: l.filename,
			filehash: l.filehash,
			filesize: l.size
		}), t[18] = D, t[19] = l.filehash, t[20] = l.filename, t[21] = l.size, t[22] = u, t[23] = P, t[24] = X) : X = t[24];
		var Y;
		t[25] !== D || t[26] !== k || t[27] !== l || t[28] !== _ || t[29] !== P ? (Y = k && !D && !P && s.jsxs("div", {
			className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d",
			"data-testid": r("WAWebPdfViewerTestIds").LOADING_SPINNER,
			children: [
				s.jsx(r("CometHeroHoldTrigger.react"), {
					description: "PDFSpinner",
					hold: !0
				}),
				s.jsx(r("WAWebMediaPdfDocumentThumbnail.react"), {
					mediaData: l,
					onLoad: _
				}),
				s.jsx("div", {
					className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x78zum5 xl56j7k x6s0dn4",
					children: s.jsx(o("WAWebSpinner.react").Spinner, {
						stroke: 6,
						size: 40
					})
				})
			]
		}), t[25] = D, t[26] = k, t[27] = l, t[28] = _, t[29] = P, t[30] = Y) : Y = t[30];
		var J;
		t[31] !== D || t[32] !== k ? (J = !D && s.jsx("div", babelHelpers.extends({}, {
			0: { className: "x10l6tqk x5yr21d xh8yej3 x13vifvy xg01cxk x1o0tod" },
			1: { className: "x10l6tqk x5yr21d xh8yej3 x13vifvy x1o0tod x1hc1fzr" }
		}[!k << 0], { children: s.jsx(r("WAWebMediaPdfDocumentIframe.react"), { iframeRef: O }) })), t[31] = D, t[32] = k, t[33] = J) : J = t[33];
		var Z;
		t[34] !== A ? (Z = n("cr:9092") && s.jsx(n("cr:9092"), {
			viewer: A,
			onShow: U,
			onHide: H
		}), t[34] = A, t[35] = Z) : Z = t[35];
		var ee;
		t[36] !== A ? (ee = n("cr:9123") && s.jsx(n("cr:9123"), { viewer: A }), t[36] = A, t[37] = ee) : ee = t[37];
		var te;
		return t[38] !== i || t[39] !== X || t[40] !== Y || t[41] !== J || t[42] !== Z || t[43] !== ee ? (te = s.jsxs("div", babelHelpers.extends({ ref: i }, Q, {
			"data-testid": r("WAWebPdfViewerTestIds").CONTAINER,
			children: [
				X,
				Y,
				J,
				Z,
				ee
			]
		})), t[38] = i, t[39] = X, t[40] = Y, t[41] = J, t[42] = Z, t[43] = ee, t[44] = te) : te = t[44], te;
	}
	function f() {
		o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("focus:lastInParent", []);
	}
	function g() {
		o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("focus:firstInParent", []);
	}
	function h(e) {
		var t = e.hasRedo, n = e.hasUndo;
		o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("undoRedo:stateChange", {
			hasRedo: t,
			hasUndo: n
		});
	}
	function y(e) {
		var t = e.allowed;
		o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("annotation:commentingAllowed", t);
	}
	function C(e) {
		var t = e.annotationType;
		o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("annotation:modeEnded", t);
	}
	function b(e) {
		o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("pdf:updatedBuffer", e);
	}
	function v() {
		o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("search:closed", []);
	}
	function S(e) {
		e.forEach(R);
	}
	function R(e) {
		var t = e.data, n = e.pointName, r = e.timestamp;
		o("WAWebTPPdfViewerQpl").pdfViewerQpl.addIframePoint(n, r, t);
	}
	function L() {
		o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("search:show", []);
	}
	l.default = _;
}), 98);
