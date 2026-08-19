__d("WAWebPdfReceiverApp.react", [
	"fbt",
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
	"justknobx",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p, _, f, g, h, y = h || (h = o("react")), C = h, b = C.useCallback, v = C.useEffect, S = C.useRef, R = C.useState, L = r("justknobx")._("5506") || 1e4, E = 2e3, k = {
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
	function I() {
		var e = new URLSearchParams(window.location.search);
		return e.get("sessionId");
	}
	function T() {
		var e = new URLSearchParams(window.location.search);
		return e.get("utm_campaign");
	}
	function D(e, t) {
		if (typeof e == "object" && e != null && "sessionId" in e && "buffer" in e && "fileName" in e && typeof e.sessionId == "string" && typeof e.fileName == "string" && e.sessionId === t) {
			var n = e.fileName, r = o("WAWebTPNormalizePdfDataBuffer").normalizePdfDataBuffer(e.buffer);
			return r == null ? null : {
				fileName: n,
				buffer: r
			};
		}
		return null;
	}
	function x(e) {
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
	function $(e, t) {
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
	function P(e) {
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
	function N() {
		var t, n, a = I(), i = (t = T()) != null ? t : void 0, l = window.opener, h = a == null || a.length === 0, C = l == null, N = R(function() {
			return h || C ? (o("WAWebTPLoggingUtils").logPdfReceiverErrorEvent("missing_session_or_opener", "sessionId empty: " + String(h) + ", opener null: " + String(C), a != null ? a : void 0), "error") : "loading";
		}), M = N[0], w = N[1], A = R(null), F = A[0], O = A[1], B = R(null), W = B[0], q = B[1], U = R(null), V = U[0], H = U[1], G = S(null), z = S(0), j = function() {
			var e;
			window.opener = null, (e = G.current) == null || e.destroy();
		}, K = b(function(e) {
			o("WAWebTPLoggingUtils").logPdfReceiverContinueEvent(e, i), o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverUserContinue();
			var t = r("WAXWhatsAppWebRootControllerRouteBuilder").buildURL({ session_id: e }), n = i != null ? "&utm_campaign=" + encodeURIComponent(i) : "";
			window.location.replace("/forward" + t + n);
		}, [i]), Q = async function(t, n, r) {
			var e = G.current;
			try {
				return o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverStoreStart(), await o("WAWebWebTPSharedSessionUtils").storeWebTPSharedSession(t, n, r), o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverStoreEnd(), O(t), !0;
			} catch (n) {
				return e == null || e.publish("GET_PDF_ERROR", { sessionId: t }), o("WAWebTPLoggingUtils").logPdfReceiverErrorEvent("storage_failed", "Failed to store file in IndexedDB", t), o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverStoreError(), w("error"), !1;
			}
		};
		v(function() {
			if (!(a == null || a.length === 0 || l == null)) {
				z.current = Date.now(), o("WAWebTPPdfViewerQpl").pdfViewerQpl.initialize("pdf_receiver"), o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverPageOpen(), o("WAWebTPLoggingUtils").logPdfReceiverOpenEvent(a);
				var t = null;
				try {
					t = new (o("WAWebTP3PBridge")).WAWebTP3PBridge(l), G.current = t, o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverBridgeCreated();
				} catch (t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[PDF3PBridge] Failed to create bridge"]))), o("WAWebTPLoggingUtils").logPdfReceiverErrorEvent("bridge_creation_failed", "Failed to create 3P bridge", a), o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverBridgeError();
					return;
				}
				return o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverGetPdfSent(), t.publish("GET_PDF", { sessionId: a }), t.listenOnce("PDF_DATA", async function(e) {
					var n;
					o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverPdfDataReceived(), o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverValidationStart();
					var i = D(e, a);
					if (i == null) {
						var l;
						(l = t) == null || l.publish("GET_PDF_ERROR", { sessionId: a }), o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[PDF3PBridge] Invalid payload received"]))), o("WAWebTPLoggingUtils").logPdfReceiverErrorEvent("invalid_payload", "Payload validation failed", a), o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverValidationFail(), w("error"), j();
						return;
					}
					q(i.fileName);
					var s = r("justknobx")._("2199");
					if (s > 0) {
						var f = s * 1024 * 1024, g = i.buffer.byteLength;
						if (g > f) {
							var h;
							(h = t) == null || h.publish("GET_PDF_ERROR", { sessionId: a }), o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
								"[PDF3PBridge] File too large: ",
								" bytes exceeds ",
								"MB limit"
							])), g, s), o("WAWebTPLoggingUtils").logPdfReceiverErrorEvent("file_too_large", (g / 1024 / 1024).toFixed(2) + "MB exceeds " + s + "MB limit", a), o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverFileTooLarge(), H({
								buffer: i.buffer,
								fileName: i.fileName,
								sessionId: a
							}), w("file_too_large"), j();
							return;
						}
					}
					var y = await o("WAWebWebTPSharedSessionUtils").getWebTPSharedSession(a);
					if (y == null) {
						var C;
						(C = t) == null || C.publish("GET_PDF_ERROR", { sessionId: a }), o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[PDF3PBridge] No existing session found/expired."]))), o("WAWebTPLoggingUtils").logPdfReceiverErrorEvent("session_expired", "No existing session found or expired", a), o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverSessionNotFound(), w("error"), j();
						return;
					}
					var b = await o("WAKaleidoscopeClassify").kaleidoscopeClassifyByMediaType(i.buffer, "document", "application/pdf");
					if (!b.success || b.value.mimetype !== "application/pdf") {
						var v;
						(v = t) == null || v.publish("GET_PDF_ERROR", { sessionId: a }), o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[PDF3PBridge] Kaleidoscope validation failed"]))), o("WAWebTPLoggingUtils").logPdfReceiverErrorEvent("kaleidoscope_fail", "File is not a valid PDF", a), o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverValidationFail(), H({
							buffer: i.buffer,
							fileName: i.fileName,
							sessionId: a
						}), w("file_invalid"), j();
						return;
					}
					if (b.value.score >= 90) {
						var S;
						(S = t) == null || S.publish("GET_PDF_ERROR", { sessionId: a }), o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[PDF3PBridge] File is not a PDF"]))), o("WAWebTPLoggingUtils").logPdfReceiverErrorEvent("kaleidoscope_reject", "Score " + b.value.score + " >= 90", a), o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverValidationFail(), H({
							buffer: i.buffer,
							fileName: i.fileName,
							sessionId: a
						}), w("file_invalid"), j();
						return;
					}
					if (b.value.score >= 80) {
						var R;
						o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverValidationWarn(), H({
							buffer: i.buffer,
							fileName: i.fileName,
							sessionId: a
						}), (R = t) == null || R.publish("GET_PDF_SUCCESS", { sessionId: a }), w("warning"), j();
						return;
					}
					o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverValidationPass();
					var L = await Q(a, i.fileName, i.buffer);
					if ((n = t) == null || n.publish("GET_PDF_SUCCESS", { sessionId: a }), L) {
						if (o("WAWebTPLoggingUtils").logPdfReceiverSuccessEvent(a, i.buffer.byteLength), r("justknobx")._("2613")) {
							var k = Date.now() - z.current, I = Math.max(0, E - k);
							I > 0 && await new Promise(function(e) {
								return window.setTimeout(e, I);
							}), K(a), j();
							return;
						}
					} else o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[PDF3PBridge] Failed to create file"])));
					H({
						buffer: i.buffer,
						fileName: i.fileName,
						sessionId: a
					}), w("success"), j();
				}, {
					timeoutMs: L,
					onTimeout: function() {
						o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["[PDF3PBridge] File receive timeout"]))), o("WAWebTPLoggingUtils").logPdfReceiverErrorEvent("timeout", "Timed out waiting for PDF_DATA from Adobe", a), o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverTimeout(), w("error"), j();
					}
				}), function() {
					var e;
					(e = t) == null || e.destroy();
				};
			}
		}, [
			a,
			l,
			K
		]);
		var X = function() {
			if (V != null) {
				var e = V.buffer, t = V.fileName, n = V.sessionId;
				Q(n, t, e).then(function(e) {
					e ? K(n) : o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[PDF3PBridge] store failed post-warning"])));
				});
			}
		}, Y = function() {
			(M === "success" || M === "warning") && F != null && K(F);
		}, J = function() {
			if (o("WAWebTPLoggingUtils").logPdfReceiverCancelEvent(a != null ? a : void 0), o("WAWebTPPdfViewerQpl").pdfViewerQpl.receiverUserCancel(), V != null) {
				var e;
				(e = G.current) == null || e.publish("GET_PDF_ERROR", { sessionId: V.sessionId });
			}
			window.close();
		}, Z = function() {
			if (V != null) {
				var e = new Blob([V.buffer], { type: "application/pdf" }), t = URL.createObjectURL(e), n = document.createElement("a");
				n.href = t, n.style.display = "none", n.download = V.fileName, n.click(), URL.revokeObjectURL(t);
			}
		}, ee = function() {
			window.location.replace("/");
		}, te = M === "loading", ne = r("justknobx")._("2613");
		return y.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: k.container,
			align: "center",
			justify: "center",
			children: y.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: k.content,
				align: "center",
				justify: "center",
				padding: 24,
				children: [
					M === "error" || M === "file_too_large" || M === "file_invalid" ? y.jsx("div", {
						className: "x1ua1l7f",
						children: y.jsx(o("WAWebWdsPictoTextFeedbackWarningIcon.react").WdsPictoTextFeedbackWarningIcon, {
							width: 88,
							height: 88
						})
					}) : y.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						justify: "center",
						xstyle: k.iconRow,
						children: [
							y.jsx(o("WAWebFlex.react").FlexRow, {
								align: "center",
								justify: "center",
								xstyle: k.acrobatIconContainer,
								children: y.jsx(o("WAWebPdfEditIconIcon.react").PdfEditIconIcon, {
									height: 35,
									width: 35,
									iconXstyle: k.acrobatIcon
								})
							}),
							y.jsx(o("WAWebArrowOutlineIcon.react").ArrowOutlineIcon, {
								height: 22,
								width: 24
							}),
							y.jsx(o("WAWebFlex.react").FlexRow, {
								align: "center",
								justify: "center",
								xstyle: k.whatsappIconContainer,
								children: y.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
									height: 36,
									width: 36,
									iconXstyle: k.whatsappIcon
								})
							})
						]
					}),
					y.jsx("div", {
						className: "x1ua1l7f x1yc453h",
						children: y.jsx(r("WDSText.react"), {
							type: "Headline1",
							colorName: "contentDefault",
							children: x(M)
						})
					}),
					y.jsx("div", {
						className: "x14mdic9 x2b8uid",
						children: y.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: $(M, (n = V == null ? void 0 : V.fileName) != null ? n : W)
						})
					}),
					te && ne ? y.jsx(r("WDSButtonGroup.react"), {
						orientation: "stacked",
						width: "hug",
						primaryButtonProps: {
							label: s._(
								/*BTDS*/
								""
							),
							variant: "borderless",
							onPress: J
						}
					}) : y.jsx(r("WDSButtonGroup.react"), {
						orientation: "stacked",
						width: "hug",
						primaryButtonProps: {
							label: P(M),
							variant: "filled",
							onPress: M === "error" ? J : M === "file_too_large" || M === "file_invalid" ? Z : M === "warning" ? X : Y,
							loading: te,
							disabled: te
						},
						tertiaryButtonProps: M === "error" ? void 0 : M === "file_too_large" || M === "file_invalid" ? {
							label: s._(
								/*BTDS*/
								""
							),
							variant: "borderless",
							onPress: ee
						} : {
							label: s._(
								/*BTDS*/
								""
							),
							variant: "borderless",
							onPress: J
						}
					})
				]
			})
		});
	}
	N.displayName = N.name + " [from " + i.id + "]", l.default = N;
}), 226);
