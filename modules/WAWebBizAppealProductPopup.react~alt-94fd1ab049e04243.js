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
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = r("qpl")._(774769273, "3438");
	function m(e) {
		e.canAppeal = !1, e.reviewStatus = o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.PENDING;
	}
	function p(e) {
		var t = e.product, n = e.sessionId, r = c(!1), a = r[0], i = r[1], l = c(!1), p = l[0], _ = l[1], f = c(""), g = f[0], h = f[1], y = function(t) {
			h(t);
		}, C = function() {
			o("WAWebProductCatalogLogEvents").logAppealProductCatalogClick(n), i(!0);
			var e = !0;
			o("WAWebQplFlowWrapper").QPL.markerStart(d), o("WAWebBizProductCatalogAction").appealProduct(t.id.toString(), g).then(function() {
				m(t), o("WAWebProductCatalogLogEvents").logAppealProductCatalogSuccess(n), i(!1), _(!0), e = !1, o("WAWebQplFlowWrapper").QPL.markerEnd(d, 2);
			}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
				o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
					msg: s._(
						/*BTDS*/
						""
					),
					id: o("WAWebToast.react").genId("catalog_appeal_submission_failed")
				})), o("WAWebProductCatalogLogEvents").logAppealProductCatalogFailed(n, e.status), i(!1);
			})).finally(function() {
				e && o("WAWebQplFlowWrapper").QPL.markerEnd(d, 3);
			});
		};
		if (p) return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: s._(
				/*BTDS*/
				""
			),
			onOK: o("WAWebModalManager").closeModalManager,
			tsNavigationData: {
				surface: "unknown",
				viewName: "appeal-product-submitted"
			},
			children: u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, { children: s._(
				/*BTDS*/
				""
			) })
		});
		var b = g.length < 1 || a;
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: s._(
				/*BTDS*/
				""
			),
			onOK: C,
			onCancel: o("WAWebModalManager").closeModalManager,
			okDisabled: b,
			tsNavigationData: {
				surface: "unknown",
				viewName: "appeal-product"
			},
			children: u.jsxs("form", { children: [u.jsx(o("WAWebRichTextField.react").RichTextField, {
				testid: "confirm-popup-text-input",
				placeholder: s._(
					/*BTDS*/
					""
				),
				onChange: function(t) {
					var e = t.text;
					return y(e);
				},
				value: g,
				maxLength: 1e3
			}), u.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebBizCommerceConstants").WA_COMMERCE_POLICY_URL,
				children: s._(
					/*BTDS*/
					""
				)
			})] })
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
