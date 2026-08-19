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
		var t = e.broadcastJids, n = e.draftMessage, a = e.onAuthFailure, i = e.onBack, l = e.onClose, c = e.onUseMessage, f = _({ type: "loading" }), g = f[0], b = f[1], v = _(-1), S = v[0], R = v[1], L = p(-1), E = p(0), k = p(0), I = p(!1), T = d(async function() {
			b({ type: "loading" }), R(-1), L.current = -1, E.current = Date.now();
			try {
				var e = await o("WAWebBizBroadcastGenAIRecommendationJob").fetchBroadcastGenAIRecommendation({
					broadcastJids: t != null ? t : void 0,
					model: o("WAWebBizBroadcastGenAIGating").getGenAIModel(),
					userMessageDraft: n
				});
				switch (e.type) {
					case "auth-failure": {
						a(), l();
						return;
					}
					case "graphql-error": {
						var r = o("WAWebBizBroadcastGenAIError").GenAIErrorType.GENERATION_FAILED;
						b({
							errorType: r,
							type: "error"
						}), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIErrorShown(r);
						return;
					}
					case "error": {
						var i = e.errorCode, s = i === "INVALID_INPUT" ? o("WAWebBizBroadcastGenAIError").GenAIErrorType.INVALID_INPUT : i === "INSUFFICIENT_CONTEXT" ? o("WAWebBizBroadcastGenAIError").GenAIErrorType.INSUFFICIENT_CONTEXT : i === "IndividualPacingLimitReached" ? o("WAWebBizBroadcastGenAIError").GenAIErrorType.RATE_LIMIT : o("WAWebBizBroadcastGenAIError").GenAIErrorType.GENERATION_FAILED;
						b({
							errorType: s,
							type: "error"
						}), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIErrorShown(s);
						return;
					}
					case "success": {
						if (e.toneMessagePairs.length === 0) {
							var u = o("WAWebBizBroadcastGenAIError").GenAIErrorType.EMPTY_RESPONSE;
							b({
								errorType: u,
								type: "error"
							}), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIErrorShown(u);
							return;
						}
						o("WAWebBizBroadcastGenAIPacing").incrementRequestCount();
						var c = o("WAWebBizBroadcastGenAIRecommendationModel").parseRecommendationResponse(e, null);
						b({
							result: c,
							type: "success"
						}), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAISuggestionsShown(c.toneMessagePairs.length, Date.now() - E.current, o("WAWebBizBroadcastGenAIGating").getGenAIModel());
						break;
					}
					default: break;
				}
			} catch (e) {
				var d = o("WAWebBizBroadcastGenAIError").GenAIErrorType.GENERATION_FAILED;
				b({
					errorType: d,
					type: "error"
				}), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIErrorShown(d);
			}
		}, [
			t,
			n,
			a,
			l
		]);
		m(function() {
			k.current = Date.now(), T();
		}, [T]);
		var D = d(function(e, t) {
			R(e), L.current = e, g.type === "success" && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAICardTapped(g.result.toneMessagePairs.length);
		}, [g]), x = d(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIModalClosed("suggestions", I.current ? "used_message" : "dismissed", Date.now() - k.current), l();
		}, [l]), $ = d(function() {
			if (g.type === "success") {
				var e = L.current, t = g.result.toneMessagePairs[e];
				t != null && t.message != null && (I.current = !0, o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIAiTextUsed(g.result.toneMessagePairs.length), c(t.message), x());
			}
		}, [
			x,
			c,
			g
		]), P = d(function() {
			g.type === "success" && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIRefreshTapped(g.result.toneMessagePairs.length), T();
		}, [T, g]), N = d(function() {
			g.type === "error" && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIErrorRetryTapped(g.errorType), T();
		}, [T, g]), M = d(function() {
			if (g.type === "success") {
				var e = g.result.toneMessagePairs[L.current];
				if (e != null) {
					var t;
					b({
						followUps: (t = g.result.followUps) != null ? t : [],
						result: g.result,
						selected: e,
						type: "customizing"
					});
				}
			}
		}, [g]), w = d(function() {
			g.type === "customizing" && (b({
				result: g.result,
				type: "success"
			}), R(-1), L.current = -1);
		}, [g]), A = d(function(e) {
			I.current = !0, c(e), x();
		}, [x, c]), F = g.type === "loading", O = S === -1 || F;
		return g.type === "customizing" ? u.jsx(r("WAWebBizBroadcastGenAICustomizeModal.react"), {
			followUps: g.followUps,
			numAiSuggestions: g.result.toneMessagePairs.length,
			onAuthFailure: a,
			onBack: w,
			onUseMessage: A,
			selectedSuggestion: g.selected
		}) : u.jsxs(u.Fragment, { children: [
			u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: C.header,
				children: [u.jsx(r("WDSButton.react"), {
					Icon: i != null ? r("WDSIconIcArrowBack.react") : r("WDSIconIcClose.react"),
					"aria-label": i != null ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					),
					onPress: i != null ? i : x,
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
					g.type === "loading" && u.jsx(h, {}),
					g.type === "error" && u.jsx(y, {
						errorType: g.errorType,
						onRetry: N
					}),
					g.type === "success" && u.jsxs(u.Fragment, { children: [u.jsx(o("WAWebFlex.react").FlexColumn, {
						rowGap: 16,
						role: "listbox",
						children: g.result.toneMessagePairs.map(function(e, t) {
							var n, o, a;
							return u.jsx(r("WAWebBizBroadcastGenAISuggestionCard.react"), {
								isSelected: t === S,
								message: (o = e.message) != null ? o : "",
								onSelect: function() {
									var n;
									return D(t, (n = e.tone) != null ? n : "");
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
							disabled: F,
							onPress: P,
							size: "medium",
							variant: "tonal"
						})
					})] })
				]
			}),
			g.type === "success" && u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				columnGap: 8,
				justify: "all",
				xstyle: C.footer,
				children: [u.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconWdsIcPencilAi.react"),
					disabled: O,
					label: s._(
						/*BTDS*/
						""
					),
					onPress: M,
					size: "medium",
					variant: "outline",
					xstyle: C.footerButton
				}), u.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcCheck.react"),
					disabled: O,
					label: s._(
						/*BTDS*/
						""
					),
					onPress: $,
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
