__d("useMAIBASendMessageFromInsideChat", [
	"MAIBAChatMessageDraftStore",
	"MAIBAChatNavigationContext",
	"MAIBAChatSendInterceptorStore",
	"MAIBAL4AdAccountContext",
	"MAIBASelectedTextStore",
	"convertAssetsToGraphQLType",
	"react",
	"react-compiler-runtime",
	"useMAIBAChatAssetSelectionContext",
	"useMAIBAChatSelectedAssets",
	"useMAIBASendMessage"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useCallback;
	function u() {
		var e = o("react-compiler-runtime").c(10), t = r("useMAIBASendMessage")(), n = o("useMAIBAChatAssetSelectionContext").useMAIBAChatAssetSelectionContext(), a = n.onMessageSent, i = r("useMAIBAChatSelectedAssets")(), l = o("MAIBAL4AdAccountContext").useMAIBAL4AdAccountContext().selectedAdAccount.id, s = o("MAIBAChatNavigationContext").useMAIBAChatNavigationContext(), u = s.entrypoint, c = s.onConversationStarted, d = o("MAIBASelectedTextStore").useMAIBASelectedTextStore(), m = d.selectedText, p = d.selectedTextParentSurface, _ = d.selectedTextSource, f;
		e[0] !== l || e[1] !== t || e[2] !== u || e[3] !== c || e[4] !== a || e[5] !== i || e[6] !== m || e[7] !== p || e[8] !== _ ? (f = function(n, s, d) {
			var e, f = n.message;
			if (!(f == null || f.trim() === "")) {
				if (o("MAIBAChatSendInterceptorStore").runSendInterceptors(n)) {
					o("MAIBAChatMessageDraftStore").deleteMAIBAChatMessageDraft(n.externalConversationId);
					return;
				}
				var g = (e = n.entrypoint) != null ? e : u, h = t(babelHelpers.extends({}, n, {
					adAccountID: l,
					entrypoint: g,
					selected_assets: r("convertAssetsToGraphQLType")(d != null ? d : i),
					selected_text: m != null ? {
						parent_element_surface: p,
						selected_text: m != null ? m : null,
						source: _ != null ? _ : null
					} : null
				})), y = h.externalConversationId;
				o("MAIBAChatMessageDraftStore").deleteMAIBAChatMessageDraft(n.externalConversationId), y !== n.externalConversationId && c({
					externalConversationId: y,
					linkedAdAccountId: l
				}), s && s(y), a(y), o("MAIBASelectedTextStore").onMessageSent();
			}
		}, e[0] = l, e[1] = t, e[2] = u, e[3] = c, e[4] = a, e[5] = i, e[6] = m, e[7] = p, e[8] = _, e[9] = f) : f = e[9];
		var g = f;
		return g;
	}
	l.default = u;
}), 98);
