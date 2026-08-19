__d("WAWebBizAppealProductPopup.react", [
	"fbt",
	"WAFilteredCatch",
	"WAWebBackendErrors",
	"WAWebBizCommerceConstants",
	"WAWebBizProductCatalogAction",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebModalManager",
	"WAWebProductCatalogLogEvents",
	"WAWebProductCollection",
	"WAWebQplFlowWrapper",
	"WAWebRichTextField.react",
	"WAWebText_DONOTUSE.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"qpl",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = r("qpl")._(774769273, "3438");
	function m(e) {
		e.canAppeal = !1, e.reviewStatus = o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.PENDING;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(21), n = e.product, r = e.sessionId, a = c(!1), i = a[0], l = a[1], p = c(!1), _ = p[0], f = p[1], g = c(""), h = g[0], y = g[1], C;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (C = function(t) {
			y(t);
		}, t[0] = C) : C = t[0];
		var b = C, v;
		t[1] !== n || t[2] !== h || t[3] !== r ? (v = function() {
			o("WAWebProductCatalogLogEvents").logAppealProductCatalogClick(r), l(!0);
			var e = !0;
			o("WAWebQplFlowWrapper").QPL.markerStart(d), o("WAWebBizProductCatalogAction").appealProduct(n.id.toString(), h).then(function() {
				m(n), o("WAWebProductCatalogLogEvents").logAppealProductCatalogSuccess(r), l(!1), f(!0), e = !1, o("WAWebQplFlowWrapper").QPL.markerEnd(d, 2);
			}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
				o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
					msg: s._(
						/*BTDS*/
						""
					),
					id: o("WAWebToast.react").genId("catalog_appeal_submission_failed")
				})), o("WAWebProductCatalogLogEvents").logAppealProductCatalogFailed(r, e.status), l(!1);
			})).finally(function() {
				e && o("WAWebQplFlowWrapper").QPL.markerEnd(d, 3);
			});
		}, t[1] = n, t[2] = h, t[3] = r, t[4] = v) : v = t[4];
		var S = v;
		if (_) {
			var R;
			t[5] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
				/*BTDS*/
				""
			), t[5] = R) : R = t[5];
			var L;
			t[6] === Symbol.for("react.memo_cache_sentinel") ? (L = {
				surface: "unknown",
				viewName: "appeal-product-submitted"
			}, t[6] = L) : L = t[6];
			var E;
			return t[7] === Symbol.for("react.memo_cache_sentinel") ? (E = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				title: R,
				onOK: o("WAWebModalManager").closeModalManager,
				tsNavigationData: L,
				children: u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, { children: s._(
					/*BTDS*/
					""
				) })
			}), t[7] = E) : E = t[7], E;
		}
		var k = h.length < 1 || i, I;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (I = s._(
			/*BTDS*/
			""
		), t[8] = I) : I = t[8];
		var T;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (T = {
			surface: "unknown",
			viewName: "appeal-product"
		}, t[9] = T) : T = t[9];
		var D, x;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (D = s._(
			/*BTDS*/
			""
		), x = function(t) {
			var e = t.text;
			return b(e);
		}, t[10] = D, t[11] = x) : (D = t[10], x = t[11]);
		var $;
		t[12] !== h ? ($ = u.jsx(o("WAWebRichTextField.react").RichTextField, {
			testid: "confirm-popup-text-input",
			placeholder: D,
			onChange: x,
			value: h,
			maxLength: 1e3
		}), t[12] = h, t[13] = $) : $ = t[13];
		var P;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (P = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebBizCommerceConstants").WA_COMMERCE_POLICY_URL,
			children: s._(
				/*BTDS*/
				""
			)
		}), t[14] = P) : P = t[14];
		var N;
		t[15] !== $ ? (N = u.jsxs("form", { children: [$, P] }), t[15] = $, t[16] = N) : N = t[16];
		var M;
		return t[17] !== k || t[18] !== S || t[19] !== N ? (M = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: I,
			onOK: S,
			onCancel: o("WAWebModalManager").closeModalManager,
			okDisabled: k,
			tsNavigationData: T,
			children: N
		}), t[17] = k, t[18] = S, t[19] = N, t[20] = M) : M = t[20], M;
	}
	l.default = p;
}), 226);
