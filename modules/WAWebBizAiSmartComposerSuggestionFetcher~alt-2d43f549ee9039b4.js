__d("WAWebBizAiSmartComposerSuggestionFetcher", [
	"WAExponentialBackoff",
	"WALogger",
	"WAWebBizAiSmartComposerErrorMapping",
	"WAWebBizAiSmartComposerSuggestionFetcherQuery.graphql",
	"WAWebBizAiSmartComposerSuggestionStateMachine",
	"WAWebFetchAdAccountToken",
	"WAWebNetworkStatus",
	"WAWebRelayClient",
	"err",
	"filterNulls",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p = e !== void 0 ? e : e = n("WAWebBizAiSmartComposerSuggestionFetcherQuery.graphql"), _ = 2, f = 250, g = {
		ok: !1,
		code: "UNKNOWN"
	};
	function h(e, t) {
		var n = g;
		return o("WAExponentialBackoff").exponentialBackoff({
			minTimeout: f,
			retries: _,
			signal: t,
			timeoutIncludesTaskDuration: !1
		}, async function(a) {
			var i = await y(e, t);
			return n = i, !i.ok && o("WAWebBizAiSmartComposerErrorMapping").isAutoRetryableSuggestedReplyError(i.code) ? a(r("err")("suggested-reply %s", i.code)) : i;
		}).catch(function() {
			return n;
		});
	}
	async function y(e, t) {
		if ((t == null ? void 0 : t.aborted) === !0) return g;
		try {
			var n, a, i = await o("WAWebFetchAdAccountToken").fetchToken();
			if (i.type !== "success") return o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[SmartComposer] suggested-reply token fetch failed"]))).sendLogs("biz-ai-smart-composer-suggestion-token-fail"), {
				ok: !1,
				code: "UNKNOWN"
			};
			await r("WAWebNetworkStatus").waitIfOffline();
			var l = await o("WAWebRelayClient").fetchQuery(p, {
				stanza_id: e.stanzaId,
				consumer_lid: (n = e.consumerLid) != null ? n : "",
				consumer_phone_number: (a = e.consumerPhoneNumber) != null ? a : ""
			}, {
				environmentType: "facebook",
				accessToken: i.token
			});
			return C(l);
		} catch (e) {
			return o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[SmartComposer] suggested-reply fetch failed"]))).catching(r("getErrorSafe")(e)).sendLogs("biz-ai-smart-composer-suggestion-fetch-fail"), {
				ok: !1,
				code: "UNKNOWN"
			};
		}
	}
	function C(e) {
		var t, n = e == null ? void 0 : e.meta_ai_biz_agent_wa_suggested_reply;
		if (n == null) return {
			ok: !1,
			code: "INVALID_RESPONSE"
		};
		if (n.error_code != null) {
			var r = o("WAWebBizAiSmartComposerErrorMapping").normalizeSuggestedReplyErrorCode(n.error_code);
			return o("WAWebBizAiSmartComposerErrorMapping").isAutoRetryableSuggestedReplyError(r) ? o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[SmartComposer] suggested-reply returned error code ", ""])), r).sendLogs("biz-ai-smart-composer-suggestion-error-code") : o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[SmartComposer] suggested-reply returned error code ", ""])), r).sendLogs("biz-ai-smart-composer-suggestion-error-code"), {
				ok: !1,
				code: r
			};
		}
		var a = n.bot_response_id;
		if (a == null || a === "") return {
			ok: !1,
			code: "INVALID_RESPONSE"
		};
		var i = {
			botResponseId: a,
			text: (t = n.text) != null ? t : null,
			product: b(n.product)
		};
		return o("WAWebBizAiSmartComposerSuggestionStateMachine").getSuggestionInsertText(i) === "" && o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[SmartComposer] suggested-reply returned no content"]))).sendLogs("biz-ai-smart-composer-suggestion-empty"), {
			ok: !0,
			suggestion: i
		};
	}
	function b(e) {
		var t, n, o;
		return e == null ? null : {
			text: (t = e.text) != null ? t : "",
			catalogId: (n = e.catalog_id) != null ? n : "",
			productRetailerIds: r("filterNulls")((o = e.product_retailer_ids) != null ? o : [])
		};
	}
	l.fetchSuggestedReply = h;
}), 98);
