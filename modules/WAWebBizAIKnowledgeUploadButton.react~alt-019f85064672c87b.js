__d("WAWebBizAIKnowledgeUploadButton.react", [
	"fbt",
	"Promise",
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
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"react",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = ["ref"], d, m, p = m || (m = o("react")), _ = m, f = _.useCallback, g = _.useRef, h = _.useState;
	function y(t) {
		var a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, c), l = i.disabled, u = l === void 0 ? !1 : l, m = i.onFilesSelected, _ = i.onUploadComplete, y = i.testidPrefix, b = y === void 0 ? "knowledge-upload" : y, v = g(null), S = g(null), R = g(null), L = r("useWAWebStableCallback")(_), E = r("useWAWebStableCallback")(m), k = m != null, I = h(!1), T = I[0], D = I[1], x = h(null), $ = x[0], P = x[1], N = f(function(t) {
			var a = t.target.files;
			if (!(a == null || a.length === 0)) {
				o("WAWebBizAILargeScreensLogEvents").logClickUploadFile();
				var i = Array.from(a);
				if (t.target.value = "", k) {
					E(i);
					return;
				}
				D(!0), n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var e = yield (d || (d = n("Promise"))).allSettled(i.map(function(e) {
						return C(e);
					})), t = e.some(function(e) {
						return e.status === "fulfilled" && e.value === !0;
					});
					D(!1), t && (L == null || L(), o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) })));
				})().catch(function(t) {
					D(!1), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["knowledge upload handler failed"]))).catching(r("getErrorSafe")(t)).sendLogs("biz-ai-knowledge-upload-handler");
				});
			}
		}, [
			k,
			E,
			L
		]), M = f(function() {
			var e = R.current;
			e != null && P({
				anchor: e,
				menu: p.jsxs(p.Fragment, { children: [p.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function() {
						var e;
						(e = v.current) == null || e.open(), P(null);
					},
					icon: p.jsx(r("WDSIconIcDescription.react"), {}),
					testid: b + "-add-documents",
					children: s._(
						/*BTDS*/
						""
					)
				}), p.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function() {
						var e;
						(e = S.current) == null || e.open(), P(null);
					},
					icon: p.jsx(r("WDSIconIcImage.react"), {}),
					testid: b + "-add-images",
					children: s._(
						/*BTDS*/
						""
					)
				})] })
			});
		}, [b]), w = f(function() {
			P(null);
		}, []), A = u || T;
		return p.jsxs(p.Fragment, { children: [
			p.jsx("span", {
				ref: R,
				children: p.jsx(r("WDSTooltip.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					children: p.jsx(r("WDSButton.react"), {
						ref: a,
						Icon: r("WDSIconIcAdd.react"),
						onPress: M,
						variant: "borderless",
						size: "small",
						disabled: A,
						loading: T,
						"aria-label": s._(
							/*BTDS*/
							""
						).toString(),
						testid: b + "-add-btn"
					})
				})
			}),
			$ != null && p.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "KnowledgeUploadMenu",
				escapable: !0,
				popable: !0,
				dismissOnWindowResize: !0,
				requestDismiss: w,
				children: p.jsx(r("WAWebUimUieMenu.react"), { contextMenu: {
					anchor: $.anchor,
					menu: $.menu
				} })
			}),
			p.jsx(r("WAWebFilePicker.react"), {
				ref: v,
				mimes: o("WAWebBizAIKnowledgeMimeTypes").DOCUMENT_MIMES,
				multiple: !0,
				onChange: N
			}),
			p.jsx(r("WAWebFilePicker.react"), {
				ref: S,
				mimes: o("WAWebBizAIKnowledgeMimeTypes").IMAGE_MIMES,
				multiple: !0,
				onChange: N
			})
		] });
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		return b.apply(this, arguments);
	}
	function b() {
		return b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			try {
				var t = yield o("WAWebBizAiKnowledgeFileUpload").uploadKnowledgeFile(e);
				if (!t.isSuccess) return o("WAWebBizAILargeScreensLogEvents").logApiUploadFileResult(!1), o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) })), !1;
				var n = yield o("WAWebBizAiKnowledgeSourceUploadMutation").triggerFileExtraction(t.handle, t.fileName);
				return o("WAWebBizAILargeScreensLogEvents").logApiUploadFileResult(n.isSuccess), n.isSuccess ? !0 : (o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, { msg: n.error === "DUPLICATE_FILE" ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				) })), !1);
			} catch (e) {
				return o("WAWebBizAILargeScreensLogEvents").logApiUploadFileResult(!1), o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["knowledge upload failed"]))).catching(r("getErrorSafe")(e)).sendLogs("biz-ai-knowledge-upload"), o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) })), !1;
			}
		}), b.apply(this, arguments);
	}
	l.default = y;
}), 226);
