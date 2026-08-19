__d("WAWebBizBroadcastGenAISuggestionsModal.react", [
	"fbt",
	"WAWebBaseShimmerComponents.react",
	"WAWebBizBroadcastGenAICustomizeModal.react",
	"WAWebBizBroadcastGenAIError",
	"WAWebBizBroadcastGenAIGating",
	"WAWebBizBroadcastGenAIPacing",
	"WAWebBizBroadcastGenAIRecommendationJob",
	"WAWebBizBroadcastGenAIRecommendationModel",
	"WAWebBizBroadcastGenAISuggestionCard.react",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebFlex.react",
	"WDSButton.react",
	"WDSIconIcArrowBack.react",
	"WDSIconIcCheck.react",
	"WDSIconIcClose.react",
	"WDSIconIcRefresh.react",
	"WDSIconWdsIcPencilAi.react",
	"WDSText.react",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState, f = [
		0,
		1,
		2,
		3
	];
	function g(e) {
		var t = e.broadcastJids, a = e.draftMessage, i = e.onAuthFailure, l = e.onBack, c = e.onClose, f = e.onUseMessage, g = _({ type: "loading" }), b = g[0], v = g[1], S = _(-1), R = S[0], L = S[1], E = p(-1), k = p(0), I = p(0), T = p(!1), D = d(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			v({ type: "loading" }), L(-1), E.current = -1, k.current = Date.now();
			try {
				var e = yield o("WAWebBizBroadcastGenAIRecommendationJob").fetchBroadcastGenAIRecommendation({
					broadcastJids: t != null ? t : void 0,
					model: o("WAWebBizBroadcastGenAIGating").getGenAIModel(),
					userMessageDraft: a
				});
				switch (e.type) {
					case "auth-failure": {
						i(), c();
						return;
					}
					case "graphql-error": {
						var n = o("WAWebBizBroadcastGenAIError").GenAIErrorType.GENERATION_FAILED;
						v({
							errorType: n,
							type: "error"
						}), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIErrorShown(n);
						return;
					}
					case "error": {
						var r = e.errorCode, l = r === "INVALID_INPUT" ? o("WAWebBizBroadcastGenAIError").GenAIErrorType.INVALID_INPUT : r === "INSUFFICIENT_CONTEXT" ? o("WAWebBizBroadcastGenAIError").GenAIErrorType.INSUFFICIENT_CONTEXT : r === "IndividualPacingLimitReached" ? o("WAWebBizBroadcastGenAIError").GenAIErrorType.RATE_LIMIT : o("WAWebBizBroadcastGenAIError").GenAIErrorType.GENERATION_FAILED;
						v({
							errorType: l,
							type: "error"
						}), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIErrorShown(l);
						return;
					}
					case "success": {
						if (e.toneMessagePairs.length === 0) {
							var s = o("WAWebBizBroadcastGenAIError").GenAIErrorType.EMPTY_RESPONSE;
							v({
								errorType: s,
								type: "error"
							}), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIErrorShown(s);
							return;
						}
						o("WAWebBizBroadcastGenAIPacing").incrementRequestCount();
						var u = o("WAWebBizBroadcastGenAIRecommendationModel").parseRecommendationResponse(e, null);
						v({
							result: u,
							type: "success"
						}), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAISuggestionsShown(u.toneMessagePairs.length, Date.now() - k.current, o("WAWebBizBroadcastGenAIGating").getGenAIModel());
						break;
					}
					default: break;
				}
			} catch (e) {
				var d = o("WAWebBizBroadcastGenAIError").GenAIErrorType.GENERATION_FAILED;
				v({
					errorType: d,
					type: "error"
				}), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIErrorShown(d);
			}
		}), [
			t,
			a,
			i,
			c
		]);
		m(function() {
			I.current = Date.now(), D();
		}, [D]);
		var x = d(function(e, t) {
			L(e), E.current = e, b.type === "success" && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAICardTapped(b.result.toneMessagePairs.length);
		}, [b]), $ = d(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIModalClosed("suggestions", T.current ? "used_message" : "dismissed", Date.now() - I.current), c();
		}, [c]), P = d(function() {
			if (b.type === "success") {
				var e = E.current, t = b.result.toneMessagePairs[e];
				t != null && t.message != null && (T.current = !0, o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIAiTextUsed(b.result.toneMessagePairs.length), f(t.message), $());
			}
		}, [
			$,
			f,
			b
		]), N = d(function() {
			b.type === "success" && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIRefreshTapped(b.result.toneMessagePairs.length), D();
		}, [D, b]), M = d(function() {
			b.type === "error" && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIErrorRetryTapped(b.errorType), D();
		}, [D, b]), w = d(function() {
			if (b.type === "success") {
				var e = b.result.toneMessagePairs[E.current];
				if (e != null) {
					var t;
					v({
						followUps: (t = b.result.followUps) != null ? t : [],
						result: b.result,
						selected: e,
						type: "customizing"
					});
				}
			}
		}, [b]), A = d(function() {
			b.type === "customizing" && (v({
				result: b.result,
				type: "success"
			}), L(-1), E.current = -1);
		}, [b]), F = d(function(e) {
			T.current = !0, f(e), $();
		}, [$, f]), O = b.type === "loading", B = R === -1 || O;
		return b.type === "customizing" ? u.jsx(r("WAWebBizBroadcastGenAICustomizeModal.react"), {
			followUps: b.followUps,
			numAiSuggestions: b.result.toneMessagePairs.length,
			onAuthFailure: i,
			onBack: A,
			onUseMessage: F,
			selectedSuggestion: b.selected
		}) : u.jsxs(u.Fragment, { children: [
			u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: C.header,
				children: [u.jsx(r("WDSButton.react"), {
					Icon: l != null ? r("WDSIconIcArrowBack.react") : r("WDSIconIcClose.react"),
					"aria-label": l != null ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					),
					onPress: l != null ? l : $,
					size: "medium",
					variant: "borderless"
				}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: C.headerText,
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
			u.jsxs("div", {
				className: "xuo6tqj x1odjw0f x1c76a8b x1p57kb1 xdx6fka xvtqlqk",
				children: [
					b.type === "loading" && u.jsx(h, {}),
					b.type === "error" && u.jsx(y, {
						errorType: b.errorType,
						onRetry: M
					}),
					b.type === "success" && u.jsxs(u.Fragment, { children: [u.jsx(o("WAWebFlex.react").FlexColumn, {
						rowGap: 16,
						role: "listbox",
						children: b.result.toneMessagePairs.map(function(e, t) {
							var n, o, a;
							return u.jsx(r("WAWebBizBroadcastGenAISuggestionCard.react"), {
								isSelected: t === R,
								message: (o = e.message) != null ? o : "",
								onSelect: function() {
									var n;
									return x(t, (n = e.tone) != null ? n : "");
								},
								tone: (a = e.tone) != null ? a : ""
							}, ((n = e.tone) != null ? n : "tone") + "-" + t);
						})
					}), u.jsx(o("WAWebFlex.react").FlexRow, {
						align: "center",
						justify: "center",
						marginTop: 12,
						paddingBottom: 4,
						paddingTop: 4,
						children: u.jsx(r("WDSButton.react"), {
							Icon: r("WDSIconIcRefresh.react"),
							"aria-label": s._(
								/*BTDS*/
								""
							),
							disabled: O,
							onPress: N,
							size: "medium",
							variant: "tonal"
						})
					})] })
				]
			}),
			b.type === "success" && u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				columnGap: 8,
				justify: "all",
				xstyle: C.footer,
				children: [u.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconWdsIcPencilAi.react"),
					disabled: B,
					label: s._(
						/*BTDS*/
						""
					),
					onPress: w,
					size: "medium",
					variant: "outline",
					xstyle: C.footerButton
				}), u.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcCheck.react"),
					disabled: B,
					label: s._(
						/*BTDS*/
						""
					),
					onPress: P,
					size: "medium",
					variant: "outline",
					xstyle: C.footerButton
				})]
			})
		] });
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h() {
		return u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			rowGap: 12,
			children: f.map(function(e) {
				return u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "start",
					xstyle: C.shimmerCard,
					children: [u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
						height: 14,
						width: 160,
						xstyle: C.shimmerPillLight
					}), u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
						height: 72,
						width: "100%",
						xstyle: C.shimmerPillDark
					})]
				}, e);
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.errorType, n = e.onRetry, a = o("WAWebBizBroadcastGenAIError").getErrorMessage(t);
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: C.errorContainer,
			children: [u.jsx("span", {
				className: "xhslqc4 x1f6kntn x2b8uid",
				children: a
			}), u.jsx(r("WDSButton.react"), {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: n,
				variant: "outline"
			})]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	var C = {
		errorContainer: {
			paddingTop: "x1sk1jro",
			paddingBottom: "x1ci70gm",
			rowGap: "x1f0uite",
			$$css: !0
		},
		footer: {
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		footerButton: {
			flexGrow: "x1iyjqo2",
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
			rowGap: "xxs79tx",
			$$css: !0
		},
		shimmerCard: {
			rowGap: "x1qvou4u",
			width: "xh8yej3",
			$$css: !0
		},
		shimmerPillDark: {
			backgroundColor: "x1h3rtpe",
			$$css: !0
		},
		shimmerPillLight: {
			backgroundColor: "x4wrhlh",
			$$css: !0
		}
	};
	l.default = g;
}), 226);
