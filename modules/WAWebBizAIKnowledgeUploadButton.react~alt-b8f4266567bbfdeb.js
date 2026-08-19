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
	"react-compiler-runtime",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = ["ref"], d, m = d || (d = o("react")), p = d, _ = p.useCallback, f = p.useRef, g = p.useState;
	function h(t) {
		var n = o("react-compiler-runtime").c(28), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, c), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, u = l.disabled, d = l.onFilesSelected, p = l.onUploadComplete, _ = l.testidPrefix, h = u === void 0 ? !1 : u, b = _ === void 0 ? "knowledge-upload" : _, v = f(null), S = f(null), R = f(null), L = r("useWAWebStableCallback")(p), E = r("useWAWebStableCallback")(d), k = d != null, I = g(!1), T = I[0], D = I[1], x = g(null), $ = x[0], P = x[1], N;
		n[3] !== k || n[4] !== E || n[5] !== L ? (N = function(n) {
			var t = n.target.files;
			if (!(t == null || t.length === 0)) {
				o("WAWebBizAILargeScreensLogEvents").logClickUploadFile();
				var a = Array.from(t);
				if (n.target.value = "", k) {
					E(a);
					return;
				}
				D(!0), (async function() {
					var e = await Promise.allSettled(a.map(C)), t = e.some(y);
					D(!1), t && (L == null || L(), o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) })));
				})().catch(function(t) {
					D(!1), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["knowledge upload handler failed"]))).catching(r("getErrorSafe")(t)).sendLogs("biz-ai-knowledge-upload-handler");
				});
			}
		}, n[3] = k, n[4] = E, n[5] = L, n[6] = N) : N = n[6];
		var M = N, w;
		n[7] !== b ? (w = function() {
			var e = R.current;
			e != null && P({
				anchor: e,
				menu: m.jsxs(m.Fragment, { children: [m.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function() {
						var e;
						(e = v.current) == null || e.open(), P(null);
					},
					icon: m.jsx(r("WDSIconIcDescription.react"), {}),
					testid: b + "-add-documents",
					children: s._(
						/*BTDS*/
						""
					)
				}), m.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function() {
						var e;
						(e = S.current) == null || e.open(), P(null);
					},
					icon: m.jsx(r("WDSIconIcImage.react"), {}),
					testid: b + "-add-images",
					children: s._(
						/*BTDS*/
						""
					)
				})] })
			});
		}, n[7] = b, n[8] = w) : w = n[8];
		var A = w, F;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (F = function() {
			P(null);
		}, n[9] = F) : F = n[9];
		var O = F, B = h || T, W;
		n[10] === Symbol.for("react.memo_cache_sentinel") ? (W = s._(
			/*BTDS*/
			""
		), n[10] = W) : W = n[10];
		var q;
		n[11] === Symbol.for("react.memo_cache_sentinel") ? (q = s._(
			/*BTDS*/
			""
		).toString(), n[11] = q) : q = n[11];
		var U = b + "-add-btn", V;
		n[12] !== B || n[13] !== T || n[14] !== A || n[15] !== i || n[16] !== U ? (V = m.jsx("span", {
			ref: R,
			children: m.jsx(r("WDSTooltip.react"), {
				label: W,
				children: m.jsx(r("WDSButton.react"), {
					ref: i,
					Icon: r("WDSIconIcAdd.react"),
					onPress: A,
					variant: "borderless",
					size: "small",
					disabled: B,
					loading: T,
					"aria-label": q,
					testid: U
				})
			})
		}), n[12] = B, n[13] = T, n[14] = A, n[15] = i, n[16] = U, n[17] = V) : V = n[17];
		var H;
		n[18] !== $ ? (H = $ != null && m.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "KnowledgeUploadMenu",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: O,
			children: m.jsx(r("WAWebUimUieMenu.react"), { contextMenu: {
				anchor: $.anchor,
				menu: $.menu
			} })
		}), n[18] = $, n[19] = H) : H = n[19];
		var G, z;
		n[20] !== M ? (G = m.jsx(r("WAWebFilePicker.react"), {
			ref: v,
			mimes: o("WAWebBizAIKnowledgeMimeTypes").DOCUMENT_MIMES,
			multiple: !0,
			onChange: M
		}), z = m.jsx(r("WAWebFilePicker.react"), {
			ref: S,
			mimes: o("WAWebBizAIKnowledgeMimeTypes").IMAGE_MIMES,
			multiple: !0,
			onChange: M
		}), n[20] = M, n[21] = G, n[22] = z) : (G = n[21], z = n[22]);
		var j;
		return n[23] !== H || n[24] !== G || n[25] !== z || n[26] !== V ? (j = m.jsxs(m.Fragment, { children: [
			V,
			H,
			G,
			z
		] }), n[23] = H, n[24] = G, n[25] = z, n[26] = V, n[27] = j) : j = n[27], j;
	}
	function y(e) {
		return e.status === "fulfilled" && e.value === !0;
	}
	function C(e) {
		return b(e);
	}
	async function b(e) {
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
