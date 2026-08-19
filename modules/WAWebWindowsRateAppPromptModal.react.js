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
	"asyncToGeneratorRuntime",
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
		var t = f(!1), a = t[0], i = t[1], l = _(o("WAWebWamEnumWebHybridAppRateAndReviewPromptDialogStatusResult").WEB_HYBRID_APP_RATE_AND_REVIEW_PROMPT_DIALOG_STATUS_RESULT.DISMISSED), u = f(function() {
			return Date.now();
		}), d = u[0], h = m(function() {
			var e = Date.now() - d, t = l.current;
			new (o("WAWebWebHybridAppRateAndReviewPromptDialogShownWamEvent")).WebHybridAppRateAndReviewPromptDialogShownWamEvent({
				webHybridAppRateAndReviewPromptDialogShownTime: e,
				webHybridAppRateAndReviewPromptDialogStatusResult: t,
				webHybridDontShowAgainAppRateAndReviewChecked: a
			}).commit();
		}, [d, a]);
		p(function() {
			return o("WAWebModalManager").ModalManager.on("close_modal", h), function() {
				o("WAWebModalManager").ModalManager.off("close_modal", h);
			};
		}, [h]), p(function() {
			o("WAWebWindowsUserPrefsRateApp").setDontShowRateAppPromptAgain != null && o("WAWebWindowsUserPrefsRateApp").setDontShowRateAppPromptAgain(a);
		}, [a]);
		var y = m(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e, t = (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebWindowsRateAppPromptModal)) == null ? void 0 : e.getRateTheApp();
			if (t != null) {
				var n = o("WAWebWamEnumWebHybridAppRateAndReviewStatusResult").WEB_HYBRID_APP_RATE_AND_REVIEW_STATUS_RESULT.ERROR, a = !1, i = Date.now();
				try {
					var l, s = yield t.requestRateAndApp();
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
		}), []);
		return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: s._(
				/*BTDS*/
				""
			),
			onOK: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				l.current = o("WAWebWamEnumWebHybridAppRateAndReviewPromptDialogStatusResult").WEB_HYBRID_APP_RATE_AND_REVIEW_PROMPT_DIALOG_STATUS_RESULT.CONFIRMED, o("WAWebModalManager").ModalManager.close(), y().catch(function(t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[rate the app] rate the app error: ", ""])), t);
				});
			}),
			onCancel: function() {
				l.current = o("WAWebWamEnumWebHybridAppRateAndReviewPromptDialogStatusResult").WEB_HYBRID_APP_RATE_AND_REVIEW_PROMPT_DIALOG_STATUS_RESULT.CLOSED, o("WAWebModalManager").ModalManager.close();
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
						return i(!a);
					},
					checked: a
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
