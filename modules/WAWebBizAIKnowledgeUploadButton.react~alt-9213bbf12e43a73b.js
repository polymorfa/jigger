__d("WAWebBizAIKnowledgeUploadButton.react", [
	"fbt",
	"WALogger",
	"WAWebBizAIKnowledgeMimeTypes",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebBizAiKnowledgeFileUpload",
	"WAWebBizAiKnowledgeSourceUploadMutation",
	"WAWebDropdownItem.react",
	"WAWebFilePicker.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WDSButton.react",
	"WDSIconIcAdd.react",
	"WDSIconIcDescription.react",
	"WDSIconIcImage.react",
	"WDSTooltip.react",
	"getErrorSafe",
	"react",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = ["ref"], d, m = d || (d = o("react")), p = d, _ = p.useCallback, f = p.useRef, g = p.useState;
	function h(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, c), i = a.disabled, l = i === void 0 ? !1 : i, u = a.onFilesSelected, d = a.onUploadComplete, p = a.testidPrefix, h = p === void 0 ? "knowledge-upload" : p, C = f(null), b = f(null), v = f(null), S = r("useWAWebStableCallback")(d), R = r("useWAWebStableCallback")(u), L = u != null, E = g(!1), k = E[0], I = E[1], T = g(null), D = T[0], x = T[1], $ = _(function(t) {
			var n = t.target.files;
			if (!(n == null || n.length === 0)) {
				o("WAWebBizAILargeScreensLogEvents").logClickUploadFile();
				var a = Array.from(n);
				if (t.target.value = "", L) {
					R(a);
					return;
				}
				I(!0), (async function() {
					var e = await Promise.allSettled(a.map(function(e) {
						return y(e);
					})), t = e.some(function(e) {
						return e.status === "fulfilled" && e.value === !0;
					});
					I(!1), t && (S == null || S(), o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) })));
				})().catch(function(t) {
					I(!1), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["knowledge upload handler failed"]))).catching(r("getErrorSafe")(t)).sendLogs("biz-ai-knowledge-upload-handler");
				});
			}
		}, [
			L,
			R,
			S
		]), P = _(function() {
			var e = v.current;
			e != null && x({
				anchor: e,
				menu: m.jsxs(m.Fragment, { children: [m.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function() {
						var e;
						(e = C.current) == null || e.open(), x(null);
					},
					icon: m.jsx(r("WDSIconIcDescription.react"), {}),
					testid: h + "-add-documents",
					children: s._(
						/*BTDS*/
						""
					)
				}), m.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function() {
						var e;
						(e = b.current) == null || e.open(), x(null);
					},
					icon: m.jsx(r("WDSIconIcImage.react"), {}),
					testid: h + "-add-images",
					children: s._(
						/*BTDS*/
						""
					)
				})] })
			});
		}, [h]), N = _(function() {
			x(null);
		}, []), M = l || k;
		return m.jsxs(m.Fragment, { children: [
			m.jsx("span", {
				ref: v,
				children: m.jsx(r("WDSTooltip.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					children: m.jsx(r("WDSButton.react"), {
						ref: n,
						Icon: r("WDSIconIcAdd.react"),
						onPress: P,
						variant: "borderless",
						size: "small",
						disabled: M,
						loading: k,
						"aria-label": s._(
							/*BTDS*/
							""
						).toString(),
						testid: h + "-add-btn"
					})
				})
			}),
			D != null && m.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "KnowledgeUploadMenu",
				escapable: !0,
				popable: !0,
				dismissOnWindowResize: !0,
				requestDismiss: N,
				children: m.jsx(r("WAWebUimUieMenu.react"), { contextMenu: {
					anchor: D.anchor,
					menu: D.menu
				} })
			}),
			m.jsx(r("WAWebFilePicker.react"), {
				ref: C,
				mimes: o("WAWebBizAIKnowledgeMimeTypes").DOCUMENT_MIMES,
				multiple: !0,
				onChange: $
			}),
			m.jsx(r("WAWebFilePicker.react"), {
				ref: b,
				mimes: o("WAWebBizAIKnowledgeMimeTypes").IMAGE_MIMES,
				multiple: !0,
				onChange: $
			})
		] });
	}
	h.displayName = h.name + " [from " + i.id + "]";
	async function y(e) {
		try {
			var t = await o("WAWebBizAiKnowledgeFileUpload").uploadKnowledgeFile(e);
			if (!t.isSuccess) return o("WAWebBizAILargeScreensLogEvents").logApiUploadFileResult(!1), o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) })), !1;
			var n = await o("WAWebBizAiKnowledgeSourceUploadMutation").triggerFileExtraction(t.handle, t.fileName);
			return o("WAWebBizAILargeScreensLogEvents").logApiUploadFileResult(n.isSuccess), n.isSuccess ? !0 : (o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: n.error === "DUPLICATE_FILE" ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			) })), !1);
		} catch (e) {
			return o("WAWebBizAILargeScreensLogEvents").logApiUploadFileResult(!1), o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["knowledge upload failed"]))).catching(r("getErrorSafe")(e)).sendLogs("biz-ai-knowledge-upload"), o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) })), !1;
		}
	}
	l.default = h;
}), 226);
