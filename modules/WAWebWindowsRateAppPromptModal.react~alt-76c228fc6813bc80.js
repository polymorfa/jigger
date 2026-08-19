__d("WAWebWindowsRateAppPromptModal.react", [
	"fbt",
	"WALogger",
	"WAWebCheckBox.react",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebText.react",
	"WAWebWamEnumWebHybridAppRateAndReviewPromptDialogStatusResult",
	"WAWebWamEnumWebHybridAppRateAndReviewRequestSource",
	"WAWebWamEnumWebHybridAppRateAndReviewStatusResult",
	"WAWebWebHybridAppRateAndReviewPromptDialogShownWamEvent",
	"WAWebWebHybridAppRateAndReviewRequestedWamEvent",
	"WAWebWindowsHybridBridgeFactory",
	"WAWebWindowsHybridBridgeInitiator",
	"WAWebWindowsUserPrefsRateApp",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useRef, f = d.useState, g = {
		checkboxLabel: {
			cursor: "x1ypdohk",
			display: "x1rg5ohu",
			$$css: !0
		},
		marginStart4: {
			marginInlineStart: "x1wbi8v6",
			$$css: !0
		}
	};
	function h() {
		var t = f(!1), n = t[0], a = t[1], i = _(o("WAWebWamEnumWebHybridAppRateAndReviewPromptDialogStatusResult").WEB_HYBRID_APP_RATE_AND_REVIEW_PROMPT_DIALOG_STATUS_RESULT.DISMISSED), l = f(function() {
			return Date.now();
		}), u = l[0], d = m(function() {
			var e = Date.now() - u, t = i.current;
			new (o("WAWebWebHybridAppRateAndReviewPromptDialogShownWamEvent")).WebHybridAppRateAndReviewPromptDialogShownWamEvent({
				webHybridAppRateAndReviewPromptDialogShownTime: e,
				webHybridAppRateAndReviewPromptDialogStatusResult: t,
				webHybridDontShowAgainAppRateAndReviewChecked: n
			}).commit();
		}, [u, n]);
		p(function() {
			return o("WAWebModalManager").ModalManager.on("close_modal", d), function() {
				o("WAWebModalManager").ModalManager.off("close_modal", d);
			};
		}, [d]), p(function() {
			o("WAWebWindowsUserPrefsRateApp").setDontShowRateAppPromptAgain != null && o("WAWebWindowsUserPrefsRateApp").setDontShowRateAppPromptAgain(n);
		}, [n]);
		var h = m(async function() {
			var e, t = (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebWindowsRateAppPromptModal)) == null ? void 0 : e.getRateTheApp();
			if (t != null) {
				var n = o("WAWebWamEnumWebHybridAppRateAndReviewStatusResult").WEB_HYBRID_APP_RATE_AND_REVIEW_STATUS_RESULT.ERROR, a = !1, i = Date.now();
				try {
					var l, s = await t.requestRateAndApp();
					s.status === "success" && o("WAWebWindowsUserPrefsRateApp").setDontShowRateAppPromptAgain != null && o("WAWebWindowsUserPrefsRateApp").setDontShowRateAppPromptAgain(!0), a = ((l = s.data) == null ? void 0 : l.updated) === !0, s.status === "success" ? n = o("WAWebWamEnumWebHybridAppRateAndReviewStatusResult").WEB_HYBRID_APP_RATE_AND_REVIEW_STATUS_RESULT.SUCCEEDED : s.status === "aborted" && (n = o("WAWebWamEnumWebHybridAppRateAndReviewStatusResult").WEB_HYBRID_APP_RATE_AND_REVIEW_STATUS_RESULT.CANCELED_BY_USER);
				} catch (e) {
					n = o("WAWebWamEnumWebHybridAppRateAndReviewStatusResult").WEB_HYBRID_APP_RATE_AND_REVIEW_STATUS_RESULT.ERROR;
				}
				new (o("WAWebWebHybridAppRateAndReviewRequestedWamEvent")).WebHybridAppRateAndReviewRequestedWamEvent({
					webHybridAppRateAndReviewRequestDialogShownTime: Date.now() - i,
					webHybridAppRateAndReviewRequestSource: o("WAWebWamEnumWebHybridAppRateAndReviewRequestSource").WEB_HYBRID_APP_RATE_AND_REVIEW_REQUEST_SOURCE.PROMPT_DIALOG,
					webHybridAppRateAndReviewStatusResult: n,
					webHybridAppRateAndReviewWasReviewUpdated: a,
					webHybridFallbackedToMsStoreReviewPipeline: !1
				}).commit();
			}
		}, []);
		return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: s._(
				/*BTDS*/
				""
			),
			onOK: async function() {
				i.current = o("WAWebWamEnumWebHybridAppRateAndReviewPromptDialogStatusResult").WEB_HYBRID_APP_RATE_AND_REVIEW_PROMPT_DIALOG_STATUS_RESULT.CONFIRMED, o("WAWebModalManager").ModalManager.close(), h().catch(function(t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[rate the app] rate the app error: ", ""])), t);
				});
			},
			onCancel: function() {
				i.current = o("WAWebWamEnumWebHybridAppRateAndReviewPromptDialogStatusResult").WEB_HYBRID_APP_RATE_AND_REVIEW_PROMPT_DIALOG_STATUS_RESULT.CLOSED, o("WAWebModalManager").ModalManager.close();
			},
			okText: s._(
				/*BTDS*/
				""
			),
			cancelText: s._(
				/*BTDS*/
				""
			),
			children: [c.jsx("div", { children: s._(
				/*BTDS*/
				""
			) }), c.jsxs("div", {
				className: "x1nmyh1g x78zum5 x6s0dn4",
				children: [c.jsx(o("WAWebCheckBox.react").CheckBox, {
					id: "checkbox-dont-show-again",
					testid: "checkbox-dont-show-again",
					onChange: function() {
						return a(!n);
					},
					checked: n
				}), c.jsx("label", {
					htmlFor: "checkbox-dont-show-again",
					children: c.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
						color: "secondary",
						xstyle: [g.checkboxLabel, g.marginStart4],
						children: s._(
							/*BTDS*/
							""
						)
					})
				})]
			})]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
