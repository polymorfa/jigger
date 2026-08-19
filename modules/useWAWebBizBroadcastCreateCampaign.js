__d("useWAWebBizBroadcastCreateCampaign", [
	"fbt",
	"WALogger",
	"WAWebBizBroadcastBusinessInfoContext.react",
	"WAWebCreatePendingBroadcastCampaignAction",
	"WAWebGraphQLServerError",
	"WAWebPendingBusinessBroadcastAPI",
	"WAWebToast.react",
	"WAWebToastManager",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"react",
	"react-query"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p, _, f, g = f || (f = o("react")), h = f, y = h.useEffect, C = h.useRef, b = h.useState;
	function v() {
		var t = o("WAWebBizBroadcastBusinessInfoContext.react").useWAWebBizBroadcastBusinessInfoContext(), a = t.adAccountId, i = t.businessId, l = t.error, f = t.isLoading, h = t.pageId, v = a != null && h != null && i != null, R = o("react-query").useMutation(o("WAWebCreatePendingBroadcastCampaignAction").createPendingBroadcastCampaignAction, { throwOnError: !0 }), L = R[0], E = b(!1), k = E[0], I = E[1], T = b(null), D = T[0], x = T[1], $ = C(!0);
		y(function() {
			return $.current = !0, function() {
				$.current = !1;
			};
		}, []);
		var P = function(l) {
			var t = l.audiences, f = l.budgetAmount, y = l.campaignName, C = l.freeReservedMsgs, b = l.isDuplicate, v = l.messageContent, R = l.onError, E = l.onSuccess, k = l.onValidationSuccess, T = l.sendTimestamp, D = T === void 0 ? null : T, P = l.sourceCampaignId;
			if (a == null || h == null || i == null) {
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"[useWAWebBizBroadcastCreateCampaign] Missing required IDs: adAccountId: ",
					", pageId: ",
					", businessId: ",
					""
				])), a != null ? a : "null", h != null ? h : "null", i != null ? i : "null"), R == null || R("Missing required business information");
				return;
			}
			if (y.trim() === "") {
				o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[useWAWebBizBroadcastCreateCampaign] Campaign name is empty"]))), R == null || R("Please enter a campaign name");
				return;
			}
			k == null || k(), I(!0), x(null), n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[useWAWebBizBroadcastCreateCampaign] Creating marketing campaign with name: ", ""])), y);
					var e = t.map(function(e) {
						return babelHelpers.extends({}, e, { freeReservedMsgs: C != null ? C : e.freeReservedMsgs });
					}), n = yield L({
						audiences: e,
						campaignInput: {
							ad_account_id: a,
							campaign_name: y.trim(),
							lifetime_budget: f != null ? f : "0",
							page_id: h,
							waba_id: i
						},
						isDuplicate: b,
						messageContent: v,
						sendTimestamp: D,
						sourceCampaignId: P
					});
					if (n == null) {
						var l = "Campaign creation returned no result";
						o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[useWAWebBizBroadcastCreateCampaign] ", ""])), l).sendLogs("business-broadcast-create-campaign"), $.current && x(l), R == null || R(l);
						return;
					}
					if (n.pendingBroadcastResult.type === "failure" && n.pendingBroadcastResult.message !== o("WAWebPendingBusinessBroadcastAPI").PENDING_BROADCAST_TABLE_NOT_AVAILABLE_ERROR) {
						var u = n.pendingBroadcastResult.message;
						o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[useWAWebBizBroadcastCreateCampaign] Failed to create pending broadcast: ", ""])), u).sendLogs("business-broadcast-create-campaign"), $.current && x(u), R == null || R(u);
					} else o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[useWAWebBizBroadcastCreateCampaign] Campaign created successfully"]))), n.failedCampaignCount > 0 && (R == null || R("Failed to create " + String(n.failedCampaignCount) + " campaign(s)")), $.current && o("WAWebToastManager").ToastManager.open(g.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) })), E == null || E();
				} catch (e) {
					var k = S(e);
					o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[useWAWebBizBroadcastCreateCampaign] Failed to create campaign: ", ""])), k).catching(r("getErrorSafe")(e)).sendLogs("business-broadcast-create-campaign"), $.current && x(k), e instanceof o("WAWebGraphQLServerError").GraphQLServerError ? R == null || R(k, !0) : R == null || R(k);
				} finally {
					$.current && I(!1);
				}
			})();
		};
		return {
			adAccountId: a,
			businessInfoError: l,
			campaignError: D,
			createCampaign: P,
			hasRequiredBusinessInfo: v,
			isCreatingCampaign: k,
			isLoadingBusinessInfo: f
		};
	}
	function S(e) {
		if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) return o("WAWebGraphQLServerError").formatGraphQLServerError(e);
		if (Array.isArray(e)) {
			var t = e.map(function(e) {
				return typeof e == "object" && e != null && "message" in e ? String(e.message) : String(e);
			});
			return "Server errors (" + String(t.length) + "): " + t.join("; ");
		}
		return typeof e == "object" && e != null && "message" in e ? String(e.message) : String(e);
	}
	l.default = v;
}), 226);
