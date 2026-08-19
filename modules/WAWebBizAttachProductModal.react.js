__d("WAWebBizAttachProductModal.react", [
	"fbt",
	"Promise",
	"WAWebBizProductMessageSendQpl",
	"WAWebCatalogShortLinkUtils",
	"WAWebComposeBoxActions",
	"WAWebModalManager",
	"WAWebProductCatalogLogEvents",
	"WAWebProductCatalogMessage",
	"WAWebProductCatalogSelectProductsModal.react",
	"react",
	"react-compiler-runtime",
	"useWAWebSetModelValue"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react"));
	function d(t) {
		var a = o("react-compiler-runtime").c(11), i = o("useWAWebSetModelValue").useSetModelValue(t.chat, "composeQuotedMsg"), l;
		a[0] !== t || a[1] !== i ? (l = function(a) {
			var r = a.selectedItems, l = r, s = t.chat, u = t.onSend, c = t.sessionId;
			o("WAWebBizProductMessageSendQpl").qplStartProductSendMessage("Attachment", l.length);
			var d = l.map(function(e, t) {
				var n = t === 0 ? s.composeQuotedMsg : null;
				return o("WAWebProductCatalogMessage").sendProductMessage(s, e, n).then(function() {
					o("WAWebProductCatalogLogEvents").logProductMessageSent({
						catalogSessionId: c,
						product: e
					});
				});
			});
			o("WAWebBizProductMessageSendQpl").qplEndProductMessageSend((e || (e = n("Promise"))).all(d)), i(null), u == null || u(), o("WAWebModalManager").ModalManager.close();
		}, a[0] = t, a[1] = i, a[2] = l) : l = a[2];
		var u = l, d;
		a[3] !== t ? (d = function(n) {
			var e = t.chat, r = t.sessionId, a = o("WAWebCatalogShortLinkUtils").createCatalogLink(n.id.user), i = s._(
				/*BTDS*/
				"",
				[s._param("catalogUrl", a)]
			).toString();
			o("WAWebComposeBoxActions").ComposeBoxActions.paste(e, i), o("WAWebProductCatalogLogEvents").logSendCatalogClick({
				catalogOwnerWid: n.id,
				catalogSessionId: r
			}), o("WAWebModalManager").ModalManager.close();
		}, a[3] = t, a[4] = d) : d = a[4];
		var m = d, p;
		a[5] !== t ? (p = function() {
			t.onCancel == null || t.onCancel(), o("WAWebModalManager").ModalManager.close();
		}, a[5] = t, a[6] = p) : p = a[6];
		var _ = p, f;
		return a[7] !== _ || a[8] !== u || a[9] !== m ? (f = c.jsx(r("WAWebProductCatalogSelectProductsModal.react"), {
			onCancel: _,
			onConfirm: u,
			onShare: m
		}), a[7] = _, a[8] = u, a[9] = m, a[10] = f) : f = a[10], f;
	}
	l.default = d;
}), 226);
