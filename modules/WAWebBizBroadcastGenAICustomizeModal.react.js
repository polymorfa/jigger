__d("WAWebBizBroadcastGenAICustomizeModal.react", [
	"fbt",
	"WAWebBizBroadcastGenAIChips.react",
	"WAWebBizBroadcastGenAIError",
	"WAWebBizBroadcastGenAIGating",
	"WAWebBizBroadcastGenAIPacing",
	"WAWebBizBroadcastGenAIQPLLogger",
	"WAWebBizBroadcastGenAIRecommendationJob",
	"WAWebBizBroadcastGenAIRecommendationModel",
	"WAWebBizBroadcastGenAIRefinementCarousel.react",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebFlex.react",
	"WAWebL10N",
	"WAWebToast.react",
	"WAWebToastManager",
	"WDSButton.react",
	"WDSIconIcArrowBack.react",
	"WDSIconIcArrowForward.react",
	"WDSIconIcCheck.react",
	"WDSText.react",
	"WDSTextField.react",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState;
	function f(e) {
		var t = e.followUps, a = e.numAiSuggestions, i = e.onAuthFailure, l = e.onBack, c = e.onUseMessage, f = e.selectedSuggestion, h = r("WAWebL10N").isRTL(), y = t.length > 0 ? t : o("WAWebBizBroadcastGenAIRecommendationModel").DEFAULT_REFINEMENT_CHIPS, C = _(function() {
			return o("WAWebBizBroadcastGenAIRecommendationModel").createRefinementHistory(f.message);
		}), b = C[0], v = C[1], S = _(""), R = S[0], L = S[1], E = _(!1), k = E[0], I = E[1];
		m(function() {
			o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIAnnotate({ string: { tone: f.tone } }), o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIPoint(o("WAWebBizBroadcastGenAIQPLLogger").GenAIQPLPoints.CUSTOMIZE_OPEN), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAICustomizeOpened(a);
		}, [a, f.tone]);
		var T = p(!1), D = p(b);
		m(function() {
			D.current = b;
		}, [b]);
		var x = d(function(e) {
			v(function(t) {
				return o("WAWebBizBroadcastGenAIRecommendationModel").navigateToIndex(t, e);
			});
		}, []), $ = d(function(e) {
			L(e), T.current = !0, o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIChipTapped(e);
		}, []), P = d(function(e) {
			L(e), T.current = !1;
		}, []), N = d(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = R.trim();
			if (!(e.length === 0 || k)) {
				var t = T.current ? "chip" : "custom";
				o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIAnnotate({ string: { prompt_type: t } }), o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIPoint(o("WAWebBizBroadcastGenAIQPLLogger").GenAIQPLPoints.REFINEMENT_START);
				var n = D.current.entries.length;
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIRefinementSubmitted(t, o("WAWebBizBroadcastGenAIGating").getGenAIModel(), n), I(!0), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIRefinementLoading();
				var r = Date.now();
				try {
					var a, l = o("WAWebBizBroadcastGenAIRecommendationModel").getCurrentEntry(D.current).message, s = yield o("WAWebBizBroadcastGenAIRecommendationJob").fetchBroadcastGenAIRecommendation({
						model: o("WAWebBizBroadcastGenAIGating").getGenAIModel(),
						userMessageDraft: l,
						userPrompt: e
					});
					if (s.type === "auth-failure") {
						o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIAnnotate({ string: { error_type: "auth_failure" } }), o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIPoint(o("WAWebBizBroadcastGenAIQPLLogger").GenAIQPLPoints.REFINEMENT_ERROR), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIRefinementFailed("auth_failure"), i();
						return;
					}
					if (s.type === "graphql-error") {
						o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIAnnotate({ string: { error_type: "graphql_error" } }), o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIPoint(o("WAWebBizBroadcastGenAIQPLLogger").GenAIQPLPoints.REFINEMENT_ERROR), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIRefinementFailed("graphql_error"), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebBizBroadcastGenAIError").getErrorMessage(o("WAWebBizBroadcastGenAIError").GenAIErrorType.GENERATION_FAILED) }));
						return;
					}
					if (s.type === "error") {
						var c = s.errorCode;
						o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIAnnotate({ string: { error_type: c != null ? c : "unknown" } }), o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIPoint(o("WAWebBizBroadcastGenAIQPLLogger").GenAIQPLPoints.REFINEMENT_ERROR), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIRefinementFailed(c != null ? c : "unknown"), c === "IndividualPacingLimitReached" ? o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebBizBroadcastGenAIError").getErrorMessage(o("WAWebBizBroadcastGenAIError").GenAIErrorType.RATE_LIMIT) })) : o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebBizBroadcastGenAIError").getErrorMessage(o("WAWebBizBroadcastGenAIError").GenAIErrorType.GENERATION_FAILED) }));
						return;
					}
					if (s.toneMessagePairs.length === 0) {
						o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIAnnotate({ string: { error_type: "empty_response" } }), o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIPoint(o("WAWebBizBroadcastGenAIQPLLogger").GenAIQPLPoints.REFINEMENT_ERROR), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIRefinementFailed("empty_response"), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebBizBroadcastGenAIError").getErrorMessage(o("WAWebBizBroadcastGenAIError").GenAIErrorType.EMPTY_RESPONSE) }));
						return;
					}
					o("WAWebBizBroadcastGenAIPacing").incrementRequestCount();
					var d = Date.now() - r;
					o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIAnnotate({ int: { response_time_ms: d } }), o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIPoint(o("WAWebBizBroadcastGenAIQPLLogger").GenAIQPLPoints.REFINEMENT_SUCCESS);
					var m = (a = s.toneMessagePairs[0].message) != null ? a : "";
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIRefinementCompleted(d), v(function(t) {
						return o("WAWebBizBroadcastGenAIRecommendationModel").appendRefinement(t, m, e);
					}), L(""), T.current = !1;
				} catch (e) {
					o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIAnnotate({ string: { error_type: "exception" } }), o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIPoint(o("WAWebBizBroadcastGenAIQPLLogger").GenAIQPLPoints.REFINEMENT_ERROR), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIRefinementFailed("exception"), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebBizBroadcastGenAIError").getErrorMessage(o("WAWebBizBroadcastGenAIError").GenAIErrorType.GENERATION_FAILED) }));
				} finally {
					I(!1);
				}
			}
		}), [
			R,
			k,
			i
		]), M = d(function() {
			var e = D.current, t = e.entries.length - 1;
			o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIAnnotate({ int: { refinement_count: t } }), o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIPoint(o("WAWebBizBroadcastGenAIQPLLogger").GenAIQPLPoints.CUSTOMIZE_BACK), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAICustomizeBack(t), l();
		}, [l]), w = d(function() {
			var e = D.current, t = o("WAWebBizBroadcastGenAIRecommendationModel").getCurrentEntry(e).message, n = e.entries.length - 1, r = e.currentIndex;
			o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIAnnotate({ int: {
				card_index: r,
				refinement_count: n
			} }), o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIPoint(o("WAWebBizBroadcastGenAIQPLLogger").GenAIQPLPoints.CUSTOMIZE_USE_MESSAGE), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAICustomizeUseMessage(n, r, r === 0), c(t);
		}, [c]);
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: g.container,
			children: [
				u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					xstyle: g.header,
					children: [u.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcArrowBack.react"),
						"aria-label": s._(
							/*BTDS*/
							""
						),
						onPress: M,
						size: "medium",
						variant: "borderless"
					}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
						xstyle: g.headerText,
						children: [u.jsx(r("WDSText.react"), {
							type: "Body1",
							colorName: "contentDefault",
							children: s._(
								/*BTDS*/
								""
							)
						}), u.jsx(r("WDSText.react"), {
							type: "Body3",
							colorName: "contentDeemphasized",
							children: s._(
								/*BTDS*/
								""
							)
						})]
					})]
				}),
				u.jsx(r("WAWebBizBroadcastGenAIRefinementCarousel.react"), {
					history: b,
					isLoading: k,
					isRTL: h,
					onNavigate: x
				}),
				u.jsx("div", babelHelpers.extends({}, {
					0: { className: "x16ovd2e x12xbjc7 xdx6fka xvtqlqk" },
					1: { className: "x16ovd2e x12xbjc7 xdx6fka xvtqlqk xti2d7y x47corl" }
				}[!!k << 0], { children: u.jsx(r("WAWebBizBroadcastGenAIChips.react"), {
					chips: y,
					disabled: k,
					onChipTap: $
				}) })),
				u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					xstyle: [g.inputSection, k && g.dimmed],
					children: [u.jsx(o("WAWebFlex.react").FlexItem, {
						grow: 1,
						shrink: 1,
						xstyle: [g.inputField, g.inputFieldRounded],
						children: u.jsx(r("WDSTextField.react"), {
							disabled: k,
							label: s._(
								/*BTDS*/
								""
							),
							onValueChange: P,
							value: R,
							testid: "business_broadcasts_genai_customize_prompt_textfield"
						})
					}), u.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcArrowForward.react"),
						"aria-label": s._(
							/*BTDS*/
							""
						),
						disabled: R.trim().length === 0 || k,
						onPress: function() {
							N();
						},
						size: "small",
						variant: "outline",
						xstyle: R.trim().length === 0 || k ? g.sendButton : [g.sendButton, g.sendButtonActive]
					})]
				}),
				u.jsx(o("WAWebFlex.react").FlexRow, {
					xstyle: g.footer,
					children: u.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcCheck.react"),
						disabled: k,
						label: s._(
							/*BTDS*/
							""
						),
						onPress: w,
						testid: "business_broadcasts_genai_customize_use_message_button",
						size: "medium",
						variant: "filled",
						widthMode: "flexible"
					})
				})
			]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	var g = {
		container: {
			height: "x5yr21d",
			$$css: !0
		},
		dimmed: {
			opacity: "xti2d7y",
			pointerEvents: "x47corl",
			$$css: !0
		},
		footer: {
			paddingBottom: "xvpt6g3",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			paddingTop: "x16ovd2e",
			$$css: !0
		},
		header: {
			columnGap: "x1aj3ljl",
			height: "x1peatla",
			paddingInlineEnd: "xcldk2z",
			paddingInlineStart: "x1iw51ew",
			$$css: !0
		},
		headerText: {
			flexGrow: "x1iyjqo2",
			rowGap: "xxs79tx",
			$$css: !0
		},
		inputField: {
			minWidth: "xeuugli",
			$$css: !0
		},
		inputFieldRounded: {
			borderStartStartRadius: "x1g83kfv",
			borderStartEndRadius: "x3qq2k7",
			borderEndEndRadius: "x2x8art",
			borderEndStartRadius: "x1qor8vf",
			$$css: !0
		},
		inputSection: {
			columnGap: "x1s70e7g",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			paddingTop: "x16ovd2e",
			$$css: !0
		},
		sendButton: {
			backgroundColor: "xjbqb8w",
			borderTopColor: "xnj1f2r",
			borderInlineEndColor: "x2uibgs",
			borderBottomColor: "xkveyfu",
			borderInlineStartColor: "x12llq9",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			$$css: !0
		},
		sendButtonActive: {
			color: "xo1mcw5",
			$$css: !0
		}
	};
	l.default = f;
}), 226);
