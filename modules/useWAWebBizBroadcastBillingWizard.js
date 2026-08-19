__d("useWAWebBizBroadcastBillingWizard", [
	"WALogger",
	"WAWebBizBroadcastEmailOnboardingGate",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebFetchAdAccountToken",
	"WAWebGetAdsRelayEnvironment",
	"WAWebShowBillingWizard",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v = b || (b = o("react")), S = v.useCallback, R = v.useState;
	function L(t, a, i, l) {
		var b = R(!1), v = b[0], L = b[1], E = i == null ? void 0 : i.amount, k = S((function() {
			var i = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n, i, C) {
				if (t == null) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[useWAWebBizBroadcastBillingWizard] Cannot open wizard: payment account ID is null"]))).sendLogs("business-broadcast-billing-wizard-null-account"), a != null && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.billingWizardFailed(a, "null_payment_account");
					return;
				}
				o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
					"[useWAWebBizBroadcastBillingWizard] Opening MFT wizard for account ID: ",
					", wizard: ",
					""
				])), t, n), a != null && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.billingWizardOpened(a, { wizard_name: n }), L(!0);
				try {
					o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[useWAWebBizBroadcastBillingWizard] Fetching access token for account ID: ", ""])), t);
					var b = yield o("WAWebFetchAdAccountToken").fetchToken();
					if (b.type !== "success") {
						o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
							"[useWAWebBizBroadcastBillingWizard] Failed to fetch access token for account ID: ",
							", error: ",
							""
						])), t, b.type).sendLogs("business-broadcast-billing-wizard-token-failed"), a != null && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.billingWizardFailed(a, "token_fetch_failed"), L(!1);
						var v = {
							phase: "token_fetch_failed",
							returnCode: "closed",
							success: !1
						};
						C == null || C(v);
						return;
					}
					o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[useWAWebBizBroadcastBillingWizard] Access token fetched successfully for account ID: ", ""])), t);
					var S = yield r("WAWebGetAdsRelayEnvironment")(b.token), R = l === !0 || Number(E) === 0 && n === "CHANGE_COUNTRY_CURRENCY";
					if (!R) {
						var k = yield o("WAWebBizBroadcastEmailOnboardingGate").maybeOpenEmailOnboarding(S, t);
						if (!k) {
							o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[useWAWebBizBroadcastBillingWizard] Email onboarding cancelled for account ID: ", ""])), t), L(!1);
							var I = {
								phase: "email_onboarding_cancelled",
								returnCode: "closed",
								success: !1
							};
							C == null || C(I);
							return;
						}
					}
					var T = yield r("WAWebShowBillingWizard")({
						entryPoint: void 0,
						flowID: "broadcast_add_funds_flow",
						onCloseCb: function(n) {
							o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
								"[useWAWebBizBroadcastBillingWizard] MFT wizard closed for account ID: ",
								", return code: ",
								""
							])), t, n), L(!1);
							var e = {
								phase: "wizard_closed",
								returnCode: n,
								success: n === "complete"
							};
							e.success ? o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[useWAWebBizBroadcastBillingWizard] Billing wizard completed successfully for account ID: ", ""])), t) : o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
								"[useWAWebBizBroadcastBillingWizard] Billing wizard failed or cancelled for account ID: ",
								", return code: ",
								""
							])), t, n), C == null || C(e);
						},
						paymentAccountID: t,
						relayEnvironment: S,
						wizardName: n,
						wizardPropsJSON: i
					});
					o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[useWAWebBizBroadcastBillingWizard] Launching wizard UI for account ID: ", ""])), t), T();
				} catch (e) {
					var D = String(e);
					e instanceof Error ? o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose(["[useWAWebBizBroadcastBillingWizard] Exception when showing billing wizard for account ID: ", ""])), t).catching(e).sendLogs("business-broadcast-billing-wizard-exception") : o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
						"[useWAWebBizBroadcastBillingWizard] Exception when showing billing wizard for account ID: ",
						", error: ",
						""
					])), t, D).sendLogs("business-broadcast-billing-wizard-exception"), a != null && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.billingWizardFailed(a, "wizard_exception"), L(!1);
					var x = {
						phase: "wizard_exception",
						returnCode: "closed",
						success: !1
					};
					C == null || C(x);
				}
			});
			return function(e, t, n) {
				return i.apply(this, arguments);
			};
		})(), [
			t,
			a,
			E,
			l
		]), I = S((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				if (e.wizardName == null) {
					o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose(["[useWAWebBizBroadcastBillingWizard] Cannot open wizard: wizard name is null"]))).sendLogs("business-broadcast-billing-wizard-null-name");
					return;
				}
				yield k(e.wizardName, e.wizardPropsJSON, t);
			});
			return function(t, n) {
				return e.apply(this, arguments);
			};
		})(), [k]), T = S((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				a != null && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.addFundsWizardOpened(a), yield k("ADD_PM", null, e);
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), [k, a]);
		return {
			isAddingFunds: v,
			openAddFundsWizard: T,
			openBillingWizard: I
		};
	}
	l.default = L;
}), 98);
