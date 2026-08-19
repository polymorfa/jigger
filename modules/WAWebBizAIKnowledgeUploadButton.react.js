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
	"react-compiler-runtime",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = ["ref"], d, m, p = m || (m = o("react")), _ = m, f = _.useCallback, g = _.useRef, h = _.useState;
	function y(t) {
		var a = o("react-compiler-runtime").c(28), i, l;
		a[0] !== t ? (l = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, c), a[0] = t, a[1] = i, a[2] = l) : (i = a[1], l = a[2]);
		var u = i, m = u.disabled, _ = u.onFilesSelected, f = u.onUploadComplete, y = u.testidPrefix, v = m === void 0 ? !1 : m, S = y === void 0 ? "knowledge-upload" : y, R = g(null), L = g(null), E = g(null), k = r("useWAWebStableCallback")(f), I = r("useWAWebStableCallback")(_), T = _ != null, D = h(!1), x = D[0], $ = D[1], P = h(null), N = P[0], M = P[1], w;
		a[3] !== T || a[4] !== I || a[5] !== k ? (w = function(a) {
			var t = a.target.files;
			if (!(t == null || t.length === 0)) {
				o("WAWebBizAILargeScreensLogEvents").logClickUploadFile();
				var i = Array.from(t);
				if (a.target.value = "", T) {
					I(i);
					return;
				}
				$(!0), n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var e = yield (d || (d = n("Promise"))).allSettled(i.map(b)), t = e.some(C);
					$(!1), t && (k == null || k(), o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) })));
				})().catch(function(t) {
					$(!1), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["knowledge upload handler failed"]))).catching(r("getErrorSafe")(t)).sendLogs("biz-ai-knowledge-upload-handler");
				});
			}
		}, a[3] = T, a[4] = I, a[5] = k, a[6] = w) : w = a[6];
		var A = w, F;
		a[7] !== S ? (F = function() {
			var e = E.current;
			e != null && M({
				anchor: e,
				menu: p.jsxs(p.Fragment, { children: [p.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function() {
						var e;
						(e = R.current) == null || e.open(), M(null);
					},
					icon: p.jsx(r("WDSIconIcDescription.react"), {}),
					testid: S + "-add-documents",
					children: s._(
						/*BTDS*/
						""
					)
				}), p.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function() {
						var e;
						(e = L.current) == null || e.open(), M(null);
					},
					icon: p.jsx(r("WDSIconIcImage.react"), {}),
					testid: S + "-add-images",
					children: s._(
						/*BTDS*/
						""
					)
				})] })
			});
		}, a[7] = S, a[8] = F) : F = a[8];
		var O = F, B;
		a[9] === Symbol.for("react.memo_cache_sentinel") ? (B = function() {
			M(null);
		}, a[9] = B) : B = a[9];
		var W = B, q = v || x, U;
		a[10] === Symbol.for("react.memo_cache_sentinel") ? (U = s._(
			/*BTDS*/
			""
		), a[10] = U) : U = a[10];
		var V;
		a[11] === Symbol.for("react.memo_cache_sentinel") ? (V = s._(
			/*BTDS*/
			""
		).toString(), a[11] = V) : V = a[11];
		var H = S + "-add-btn", G;
		a[12] !== q || a[13] !== x || a[14] !== O || a[15] !== l || a[16] !== H ? (G = p.jsx("span", {
			ref: E,
			children: p.jsx(r("WDSTooltip.react"), {
				label: U,
				children: p.jsx(r("WDSButton.react"), {
					ref: l,
					Icon: r("WDSIconIcAdd.react"),
					onPress: O,
					variant: "borderless",
					size: "small",
					disabled: q,
					loading: x,
					"aria-label": V,
					testid: H
				})
			})
		}), a[12] = q, a[13] = x, a[14] = O, a[15] = l, a[16] = H, a[17] = G) : G = a[17];
		var z;
		a[18] !== N ? (z = N != null && p.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "KnowledgeUploadMenu",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: W,
			children: p.jsx(r("WAWebUimUieMenu.react"), { contextMenu: {
				anchor: N.anchor,
				menu: N.menu
			} })
		}), a[18] = N, a[19] = z) : z = a[19];
		var j, K;
		a[20] !== A ? (j = p.jsx(r("WAWebFilePicker.react"), {
			ref: R,
			mimes: o("WAWebBizAIKnowledgeMimeTypes").DOCUMENT_MIMES,
			multiple: !0,
			onChange: A
		}), K = p.jsx(r("WAWebFilePicker.react"), {
			ref: L,
			mimes: o("WAWebBizAIKnowledgeMimeTypes").IMAGE_MIMES,
			multiple: !0,
			onChange: A
		}), a[20] = A, a[21] = j, a[22] = K) : (j = a[21], K = a[22]);
		var Q;
		return a[23] !== z || a[24] !== j || a[25] !== K || a[26] !== G ? (Q = p.jsxs(p.Fragment, { children: [
			G,
			z,
			j,
			K
		] }), a[23] = z, a[24] = j, a[25] = K, a[26] = G, a[27] = Q) : Q = a[27], Q;
	}
	function C(e) {
		return e.status === "fulfilled" && e.value === !0;
	}
	function b(e) {
		return v(e);
	}
	function v(e) {
		return S.apply(this, arguments);
	}
	function S() {
		return S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
		}), S.apply(this, arguments);
	}
	l.default = y;
}), 226);
