__d("WAWebPdfReceiverApp.react", [
	"fbt",
	"Promise",
	"WAKaleidoscopeClassify",
	"WALogger",
	"WAWebArrowOutlineIcon.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebPdfEditIconIcon.react",
	"WAWebTP3PBridge",
	"WAWebTPLoggingUtils",
	"WAWebTPNormalizePdfDataBuffer",
	"WAWebTPPdfViewerQpl",
	"WAWebWaLogoIcon.react",
	"WAWebWdsPictoTextFeedbackWarningIcon.react",
	"WAWebWebTPSharedSessionUtils",
	"WAXWhatsAppWebRootControllerRouteBuilder",
	"WDSButtonGroup.react",
	"WDSText.react",
	"asyncToGeneratorRuntime",
	"justknobx",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p, _, f, g, h, y, C = y || (y = o("react")), b = y, v = b.useCallback, S = b.useEffect, R = b.useRef, L = b.useState, E = r("justknobx")._("5506") || 1e4, k = 2e3, I = {
		container: {
			height: "x5yr21d",
			width: "xh8yej3",
			$$css: !0
		},
		content: {
			width: "x1m258z3",
			$$css: !0
		},
		iconRow: {
			columnGap: "x1amjocr",
			paddingTop: "x1y1aw1k",
			paddingBottom: "xwib8y2",
			paddingInlineStart: "x13jy36j",
			paddingInlineEnd: "x64bnmy",
			marginBottom: "x1ua1l7f",
			$$css: !0
		},
		whatsappIconContainer: {
			width: "x15yg21f",
			height: "xnnlda6",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			backgroundColor: "xaf9mo1",
			$$css: !0
		},
		whatsappIcon: {
			color: "x17k9de1",
			$$css: !0
		},
		acrobatIconContainer: {
			width: "x15yg21f",
			height: "xnnlda6",
			borderStartStartRadius: "xlr9sxt",
			borderStartEndRadius: "xvvg52n",
			borderEndEndRadius: "xwd4zgb",
			borderEndStartRadius: "xq8v1ta",
			backgroundColor: "x1bmslip",
			$$css: !0
		},
		acrobatIcon: {
			color: "x17t9dm2",
			$$css: !0
		}
	};
	function T() {
		var e = new URLSearchParams(window.location.search);
		return e.get("sessionId");
	}
	function D() {
		var e = new URLSearchParams(window.location.search);
		return e.get("utm_campaign");
	}
	function x(e, t) {
		if (typeof e == "object" && e != null && "sessionId" in e && "buffer" in e && "fileName" in e && typeof e.sessionId == "string" && typeof e.fileName == "string" && e.sessionId === t) {
			var n = e.fileName, r = o("WAWebTPNormalizePdfDataBuffer").normalizePdfDataBuffer(e.buffer);
			return r == null ? null : {
				fileName: n,
				buffer: r
			};
		}
		return null;
	}
	function $(e) {
		return e === "loading" ? s._(
			/*BTDS*/
			""
		) : e === "error" ? s._(
			/*BTDS*/
			""
		) : e === "success" ? s._(
			/*BTDS*/
			""
		) : e === "warning" ? s._(
			/*BTDS*/
			""
		) : e === "file_too_large" ? s._(
			/*BTDS*/
			""
		) : e === "file_invalid" ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function P(e, t) {
		return e === "loading" ? s._(
			/*BTDS*/
			"",
			[s._param("fileName", "'" + (t != null ? t : "document.pdf") + "'")]
		) : e === "error" ? s._(
			/*BTDS*/
			""
		) : e === "success" ? s._(
			/*BTDS*/
			"",
			[s._param("fileName", "'" + (t != null ? t : "document.pdf") + "'")]
		) : e === "warning" ? s._(
			/*BTDS*/
			""
		) : e === "file_too_large" ? s._(
			/*BTDS*/
			"",
			[s._param("fileName", "'" + (t != null ? t : "document.pdf") + "'")]
		) : e === "file_invalid" ? s._(
			/*BTDS*/
			"",
			[s._param("fileName", " '" + (t != null ? t : "document.pdf") + "'")]
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function N(e) {
		return e === "error" ? r("WAWebFbtCommon")("Close") : e === "file_too_large" ? s._(
			/*BTDS*/
			""
		) : e === "file_invalid" ? s._(
			/*BTDS*/
			""
		) : e === "warning" ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	function M() {
		var t, a, i = T(), l = (t = D()) != null ? t : void 0, y = window.opener, b = i == null || i.length === 0, M = y == null, w = L(function() {
			return b || M ? (o("WAWebTPLoggingUtils").logPdfReceiverErrorEvent("missing_session_or_opener", "sessionId empty: " + String(b) + ", opener null: " + String(M), i != null ? i : void 0), "error") : "loading";
		}), A = w[0], F = w[1], O = L(null), B = O[0], W = O[1], q = L(null), U = q[0], V = q[1], H = L(null), G = H[0], z = H[1], j = R(null), K = R(0), Q = function() {
			var e;
			window.opener = null, (e = j.current) == null || e.destroy();
		}, X = v(function(e) {
			o("WAWebTPLoggingUtils").logPdfReceiverContinueEvent(e, l), o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverUserContinue();
			var t = r("WAXWhatsAppWebRootControllerRouteBuilder").buildURL({ session_id: e }), n = l != null ? "&utm_campaign=" + encodeURIComponent(l) : "";
			window.location.replace("/forward" + t + n);
		}, [l]), Y = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
				var r = j.current;
				try {
					return o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverStoreStart(), yield o("WAWebWebTPSharedSessionUtils").storeWebTPSharedSession(e, t, n), o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverStoreEnd(), W(e), !0;
				} catch (t) {
					return r == null || r.publish("GET_PDF_ERROR", { sessionId: e }), o("WAWebTPLoggingUtils").logPdfReceiverErrorEvent("storage_failed", "Failed to store file in IndexedDB", e), o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverStoreError(), F("error"), !1;
				}
			});
			return function(n, r, o) {
				return e.apply(this, arguments);
			};
		})();
		S(function() {
			if (!(i == null || i.length === 0 || y == null)) {
				K.current = Date.now(), o("WAWebTPPdfViewerQpl").pdfViewerQpl.initialize("pdf_receiver"), o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverPageOpen(), o("WAWebTPLoggingUtils").logPdfReceiverOpenEvent(i);
				var t = null;
				try {
					t = new (o("WAWebTP3PBridge")).WAWebTP3PBridge(y), j.current = t, o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverBridgeCreated();
				} catch (t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[PDF3PBridge] Failed to create bridge"]))), o("WAWebTPLoggingUtils").logPdfReceiverErrorEvent("bridge_creation_failed", "Failed to create 3P bridge", i), o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverBridgeError();
					return;
				}
				return o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverGetPdfSent(), t.publish("GET_PDF", { sessionId: i }), t.listenOnce("PDF_DATA", (function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						var a;
						o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverPdfDataReceived(), o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverValidationStart();
						var l = x(e, i);
						if (l == null) {
							var s;
							(s = t) == null || s.publish("GET_PDF_ERROR", { sessionId: i }), o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[PDF3PBridge] Invalid payload received"]))), o("WAWebTPLoggingUtils").logPdfReceiverErrorEvent("invalid_payload", "Payload validation failed", i), o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverValidationFail(), F("error"), Q();
							return;
						}
						V(l.fileName);
						var f = r("justknobx")._("2199");
						if (f > 0) {
							var g = f * 1024 * 1024, y = l.buffer.byteLength;
							if (y > g) {
								var C;
								(C = t) == null || C.publish("GET_PDF_ERROR", { sessionId: i }), o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
									"[PDF3PBridge] File too large: ",
									" bytes exceeds ",
									"MB limit"
								])), y, f), o("WAWebTPLoggingUtils").logPdfReceiverErrorEvent("file_too_large", (y / 1024 / 1024).toFixed(2) + "MB exceeds " + f + "MB limit", i), o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverFileTooLarge(), z({
									buffer: l.buffer,
									fileName: l.fileName,
									sessionId: i
								}), F("file_too_large"), Q();
								return;
							}
						}
						var b = yield o("WAWebWebTPSharedSessionUtils").getWebTPSharedSession(i);
						if (b == null) {
							var v;
							(v = t) == null || v.publish("GET_PDF_ERROR", { sessionId: i }), o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[PDF3PBridge] No existing session found/expired."]))), o("WAWebTPLoggingUtils").logPdfReceiverErrorEvent("session_expired", "No existing session found or expired", i), o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverSessionNotFound(), F("error"), Q();
							return;
						}
						var S = yield o("WAKaleidoscopeClassify").kaleidoscopeClassifyByMediaType(l.buffer, "document", "application/pdf");
						if (!S.success || S.value.mimetype !== "application/pdf") {
							var R;
							(R = t) == null || R.publish("GET_PDF_ERROR", { sessionId: i }), o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[PDF3PBridge] Kaleidoscope validation failed"]))), o("WAWebTPLoggingUtils").logPdfReceiverErrorEvent("kaleidoscope_fail", "File is not a valid PDF", i), o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverValidationFail(), z({
								buffer: l.buffer,
								fileName: l.fileName,
								sessionId: i
							}), F("file_invalid"), Q();
							return;
						}
						if (S.value.score >= 90) {
							var L;
							(L = t) == null || L.publish("GET_PDF_ERROR", { sessionId: i }), o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[PDF3PBridge] File is not a PDF"]))), o("WAWebTPLoggingUtils").logPdfReceiverErrorEvent("kaleidoscope_reject", "Score " + S.value.score + " >= 90", i), o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverValidationFail(), z({
								buffer: l.buffer,
								fileName: l.fileName,
								sessionId: i
							}), F("file_invalid"), Q();
							return;
						}
						if (S.value.score >= 80) {
							var E;
							o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverValidationWarn(), z({
								buffer: l.buffer,
								fileName: l.fileName,
								sessionId: i
							}), (E = t) == null || E.publish("GET_PDF_SUCCESS", { sessionId: i }), F("warning"), Q();
							return;
						}
						o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverValidationPass();
						var I = yield Y(i, l.fileName, l.buffer);
						if ((a = t) == null || a.publish("GET_PDF_SUCCESS", { sessionId: i }), I) {
							if (o("WAWebTPLoggingUtils").logPdfReceiverSuccessEvent(i, l.buffer.byteLength), r("justknobx")._("2613")) {
								var T = Date.now() - K.current, D = Math.max(0, k - T);
								D > 0 && (yield new (h || (h = (n("Promise"))))(function(e) {
									return window.setTimeout(e, D);
								})), X(i), Q();
								return;
							}
						} else o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[PDF3PBridge] Failed to create file"])));
						z({
							buffer: l.buffer,
							fileName: l.fileName,
							sessionId: i
						}), F("success"), Q();
					});
					return function(t) {
						return e.apply(this, arguments);
					};
				})(), {
					timeoutMs: E,
					onTimeout: function() {
						o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["[PDF3PBridge] File receive timeout"]))), o("WAWebTPLoggingUtils").logPdfReceiverErrorEvent("timeout", "Timed out waiting for PDF_DATA from Adobe", i), o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverTimeout(), F("error"), Q();
					}
				}), function() {
					var e;
					(e = t) == null || e.destroy();
				};
			}
		}, [
			i,
			y,
			X
		]);
		var J = function() {
			if (G != null) {
				var e = G.buffer, t = G.fileName, n = G.sessionId;
				Y(n, t, e).then(function(e) {
					e ? X(n) : o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[PDF3PBridge] store failed post-warning"])));
				});
			}
		}, Z = function() {
			(A === "success" || A === "warning") && B != null && X(B);
		}, ee = function() {
			if (o("WAWebTPLoggingUtils").logPdfReceiverCancelEvent(i != null ? i : void 0), o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverUserCancel(), G != null) {
				var e;
				(e = j.current) == null || e.publish("GET_PDF_ERROR", { sessionId: G.sessionId });
			}
			window.close();
		}, te = function() {
			if (G != null) {
				var e = new Blob([G.buffer], { type: "application/pdf" }), t = URL.createObjectURL(e), n = document.createElement("a");
				n.href = t, n.style.display = "none", n.download = G.fileName, n.click(), URL.revokeObjectURL(t);
			}
		}, ne = function() {
			window.location.replace("/");
		}, re = A === "loading", oe = r("justknobx")._("2613");
		return C.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: I.container,
			align: "center",
			justify: "center",
			children: C.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: I.content,
				align: "center",
				justify: "center",
				padding: 24,
				children: [
					A === "error" || A === "file_too_large" || A === "file_invalid" ? C.jsx("div", {
						className: "x1ua1l7f",
						children: C.jsx(o("WAWebWdsPictoTextFeedbackWarningIcon.react").WdsPictoTextFeedbackWarningIcon, {
							width: 88,
							height: 88
						})
					}) : C.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						justify: "center",
						xstyle: I.iconRow,
						children: [
							C.jsx(o("WAWebFlex.react").FlexRow, {
								align: "center",
								justify: "center",
								xstyle: I.acrobatIconContainer,
								children: C.jsx(o("WAWebPdfEditIconIcon.react").PdfEditIconIcon, {
									height: 35,
									width: 35,
									iconXstyle: I.acrobatIcon
								})
							}),
							C.jsx(o("WAWebArrowOutlineIcon.react").ArrowOutlineIcon, {
								height: 22,
								width: 24
							}),
							C.jsx(o("WAWebFlex.react").FlexRow, {
								align: "center",
								justify: "center",
								xstyle: I.whatsappIconContainer,
								children: C.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
									height: 36,
									width: 36,
									iconXstyle: I.whatsappIcon
								})
							})
						]
					}),
					C.jsx("div", {
						className: "x1ua1l7f x1yc453h",
						children: C.jsx(r("WDSText.react"), {
							type: "Headline1",
							colorName: "contentDefault",
							children: $(A)
						})
					}),
					C.jsx("div", {
						className: "x14mdic9 x2b8uid",
						children: C.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: P(A, (a = G == null ? void 0 : G.fileName) != null ? a : U)
						})
					}),
					re && oe ? C.jsx(r("WDSButtonGroup.react"), {
						orientation: "stacked",
						width: "hug",
						primaryButtonProps: {
							label: s._(
								/*BTDS*/
								""
							),
							variant: "borderless",
							onPress: ee
						}
					}) : C.jsx(r("WDSButtonGroup.react"), {
						orientation: "stacked",
						width: "hug",
						primaryButtonProps: {
							label: N(A),
							variant: "filled",
							onPress: A === "error" ? ee : A === "file_too_large" || A === "file_invalid" ? te : A === "warning" ? J : Z,
							loading: re,
							disabled: re
						},
						tertiaryButtonProps: A === "error" ? void 0 : A === "file_too_large" || A === "file_invalid" ? {
							label: s._(
								/*BTDS*/
								""
							),
							variant: "borderless",
							onPress: ne
						} : {
							label: s._(
								/*BTDS*/
								""
							),
							variant: "borderless",
							onPress: ee
						}
					})
				]
			})
		});
	}
	M.displayName = M.name + " [from " + i.id + "]", l.default = M;
}), 226);
