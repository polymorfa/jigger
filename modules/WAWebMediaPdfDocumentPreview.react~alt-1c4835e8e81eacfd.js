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
	"useWAWebWebTPCloseWDSMenusOnIframeFocus"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useRef, p = u.useState;
	function _(e) {
		var t = e.blob, a = e.containerRef, i = e.mediaData, l = e.msg, u = e.onClose, _ = e.onLoad, f = e.onRender, g = p(!1), h = g[0], y = g[1], C = p(!1), b = C[0], v = C[1], S = p(!1), R = S[0], L = S[1], E = m(!1), k = p(null), I = k[0], T = k[1], D = m(null);
		r("useWAWebWebTPCloseWDSMenusOnIframeFocus")(I), o("WAWebUseCtrlFSearch").useCtrlFSearch(function() {
			o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("search:show", []);
		}), d(function() {
			return o("WAWebPdfViewerAnrTracker").startPdfViewerAnrTracking(), o("WAWebPdfViewerLongAnimationFrameTracker").startPdfViewerLongAnimationFrameTracking(), o("WAWebPdfViewerBrowserMetrics").startPdfViewerBrowserMetrics(), o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.PdfViewer), o("WAWebTPLoggingUtils").logDocumentOpenEvent(i.filehash, i.size), function() {
				o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.PdfViewer);
				var e = o("WAWebPdfViewerAnrTracker").consumePdfViewerAnrCount(), t = o("WAWebPdfViewerLongAnimationFrameTracker").consumePdfViewerLongAnimationFrameData();
				o("WAWebPdfViewerBrowserMetrics").stopPdfViewerBrowserMetrics().catch(r("WAWebNoop")).then(function() {
					var n = o("WAWebPdfViewerBrowserMetrics").consumePdfViewerBrowserMetrics();
					o("WAWebTPLoggingUtils").logDocumentCloseEvent(i.filehash, i.size, e, t, n);
				});
			};
		}, [i.filehash, i.size]);
		var x = c(function() {
			L(!0), E.current = !0;
		}, []), $ = c(function() {
			L(!1), E.current = !1;
		}, []);
		return d(function() {
			var e = D.current;
			if (!e || !t) return y(!1), v(!0), r("WAWebNoop");
			o("WAWebTPIframeUtils").removePreloadedIframe(), y(!0);
			var n = i.filename, a = new (o("WAWebTPPdfViewer")).WAWebTPPdfViewer(e);
			T(a), a.publishAppConfig(o("WAWebPdfViewerAppConfig").getWebTPAppConfig()), o("WAWebTPPdfViewerQpl").pdfViewerQpl.renderPdfStart(), a.renderPdf(t, n, {
				isAnnotationsEnabled: o("WAWebTPPdfViewerGatingUtils").isWebTPPdfAnnotationsEnabled(),
				isWindowsHybrid: r("WAWebEnvironment").isWindows,
				styleConfig: o("WAWebTPViewerStyleConfig").getWebTPViewerStyleConfig()
			}).then(function() {
				o("WAWebTPPdfViewerQpl").pdfViewerQpl.renderPdfEnd(), f == null || f();
			}).catch(function(e) {
				o("WAWebTPPdfViewerQpl").pdfViewerQpl.renderPdfError(), a.destroy(), v(!0), o("WAWebTPLoggingUtils").logRenderErrorEvent(e, i.filehash, i.size);
			}).finally(function() {
				y(!1);
			});
			var l = a.listen("APP_ERROR", function(e) {
				var t = e.error;
				a.destroy(), v(!0), o("WAWebTPLoggingUtils").logRenderErrorEvent(t, i.filehash, i.size);
			}), s = a.listen("APP_PERF_DATA", function(e) {
				var t = e.data, n = e.sdkVersion;
				o("WAWebTPLoggingUtils").logAppPerfDataEvent({
					appPerfData: t,
					filehash: i.filehash,
					sdkVersion: n,
					size: i.size
				});
			}), u = a.listen("TELEMETRY_DATA", function(e) {
				var t = e.data, n = e.sdkVersion;
				o("WAWebTPLoggingUtils").logAppTelemetryDataEvent(t, i.filehash, i.size, n), o("WAWebTPLoggingUtils").logViewerRenderTimeEvent({
					filehash: i.filehash,
					sdkVersion: n,
					size: i.size,
					telemetryEvent: t
				});
			});
			a.listen("QPL", function(e) {
				e.forEach(function(e) {
					var t = e.data, n = e.pointName, r = e.timestamp;
					o("WAWebTPPdfViewerQpl").pdfViewerQpl.addIframePoint(n, r, t);
				});
			});
			var c = a.listen("ANNOTATION_INTERACTION", function(e) {
				o("WAWebTPLoggingUtils").logAnnotationInteractionFromBridge(e, i.filehash);
			}), d = a.listen("TELEMETRY_ERROR", function(e) {
				var t = e.error;
				o("WAWebTPLoggingUtils").logRenderErrorEvent(t, i.filehash, i.size);
			}), m = function() {
				a.showSearch();
			};
			o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on("search:show", m);
			var p = a.listen("SEARCH_CLOSED", function() {
				o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("search:closed", []);
			}), _ = function(t) {
				a.annotate(t);
			};
			o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on("annotation:command", _);
			var g = function() {
				a.getUpdatedPDFBuffer().then(function(e) {
					o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("pdf:updatedBuffer", e);
				});
			};
			o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on("pdf:getUpdatedBuffer", g);
			var h = a.listen("ANNOTATION_MODE_ENDED", function(e) {
				var t = e.annotationType;
				o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("annotation:modeEnded", t);
			}), C = a.listen("IS_COMMENTING_ALLOWED_RESPONSE", function(e) {
				var t = e.allowed;
				o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("annotation:commentingAllowed", t);
			}), b = a.listen("UNDO_REDO_STATE_CHANGE", function(e) {
				var t = e.hasRedo, n = e.hasUndo;
				o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("undoRedo:stateChange", {
					hasRedo: t,
					hasUndo: n
				});
			}), S = function() {
				E.current || a.focusFirstInViewer();
			};
			o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on("focus:firstInViewer", S);
			var R = function() {
				E.current || a.focusLastInViewer();
			};
			o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on("focus:lastInViewer", R);
			var L = a.listen("FOCUS_FIRST_IN_PARENT", function() {
				o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("focus:firstInParent", []);
			}), k = a.listen("FOCUS_LAST_IN_PARENT", function() {
				o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("focus:lastInParent", []);
			});
			return function() {
				var e;
				l(), s(), u(), (e = o("WAWebPdfViewerEventEmitter")).pdfViewerEventEmitter.off("search:show", m), p(), e.pdfViewerEventEmitter.off("focus:firstInViewer", S), e.pdfViewerEventEmitter.off("focus:lastInViewer", R), L(), k(), e.pdfViewerEventEmitter.off("annotation:command", _), e.pdfViewerEventEmitter.off("pdf:getUpdatedBuffer", g), h(), C(), b(), c(), d(), a.destroy();
			};
		}, [
			i.filename,
			t,
			f,
			i.filehash,
			i.size
		]), d(function() {
			var e = I == null ? void 0 : I.listen("REQUEST_CLOSE", function() {
				u == null || u();
			});
			return function() {
				e == null || e();
			};
		}, [I, u]), s.jsxs("div", {
			ref: a,
			className: "x5yr21d xh8yej3 x1n2onr6 x1h3rtpe",
			"data-testid": r("WAWebPdfViewerTestIds").CONTAINER,
			children: [
				b && !R && s.jsx(r("WAWebMediaPdfDocumentError.react"), {
					onDownload: function() {
						o("WAWebFileSaver").FileSaver.initDownload(o("WAWebStateUtils").unproxy(l));
					},
					filename: i.filename,
					filehash: i.filehash,
					filesize: i.size
				}),
				h && !b && !R && s.jsxs("div", {
					className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d",
					"data-testid": r("WAWebPdfViewerTestIds").LOADING_SPINNER,
					children: [
						s.jsx(r("CometHeroHoldTrigger.react"), {
							description: "PDFSpinner",
							hold: !0
						}),
						s.jsx(r("WAWebMediaPdfDocumentThumbnail.react"), {
							mediaData: i,
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
				}),
				!b && s.jsx("div", babelHelpers.extends({}, {
					0: { className: "x10l6tqk x5yr21d xh8yej3 x13vifvy xg01cxk x1o0tod" },
					1: { className: "x10l6tqk x5yr21d xh8yej3 x13vifvy x1o0tod x1hc1fzr" }
				}[!h << 0], { children: s.jsx(r("WAWebMediaPdfDocumentIframe.react"), { iframeRef: D }) })),
				n("cr:9092") && s.jsx(n("cr:9092"), {
					viewer: I,
					onShow: x,
					onHide: $
				}),
				n("cr:9123") && s.jsx(n("cr:9123"), { viewer: I })
			]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
