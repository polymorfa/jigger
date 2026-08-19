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
	"useWAWebSetModelValue"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react"));
	function d(t) {
		var a = o("useWAWebSetModelValue").useSetModelValue(t.chat, "composeQuotedMsg"), i = function(i) {
			var r = i.selectedItems, l = r, s = t.chat, u = t.onSend, c = t.sessionId;
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
			o("WAWebBizProductMessageSendQpl").qplEndProductMessageSend((e || (e = n("Promise"))).all(d)), a(null), u == null || u(), o("WAWebModalManager").ModalManager.close();
		}, l = function(n) {
			var e = t.chat, r = t.sessionId, a = o("WAWebCatalogShortLinkUtils").createCatalogLink(n.id.user), i = s._(
				/*BTDS*/
				"",
				[s._param("catalogUrl", a)]
			).toString();
			o("WAWebComposeBoxActions").ComposeBoxActions.paste(e, i), o("WAWebProductCatalogLogEvents").logSendCatalogClick({
				catalogOwnerWid: n.id,
				catalogSessionId: r
			}), o("WAWebModalManager").ModalManager.close();
		}, u = function() {
			t.onCancel == null || t.onCancel(), o("WAWebModalManager").ModalManager.close();
		};
		return c.jsx(r("WAWebProductCatalogSelectProductsModal.react"), {
			onCancel: u,
			onConfirm: i,
			onShare: l
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
