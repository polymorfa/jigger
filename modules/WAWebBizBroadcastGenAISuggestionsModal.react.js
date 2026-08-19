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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState, f = [
		0,
		1,
		2,
		3
	];
	function g(e) {
		var t = e.broadcastJids, a = e.draftMessage, i = e.onAuthFailure, l = e.onBack, c = e.onClose, f = e.onUseMessage, g = _({ type: "loading" }), y = g[0], v = g[1], S = _(-1), R = S[0], L = S[1], E = p(-1), k = p(0), I = p(0), T = p(!1), D = d(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
			L(e), E.current = e, y.type === "success" && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAICardTapped(y.result.toneMessagePairs.length);
		}, [y]), $ = d(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIModalClosed("suggestions", T.current ? "used_message" : "dismissed", Date.now() - I.current), c();
		}, [c]), P = d(function() {
			if (y.type === "success") {
				var e = E.current, t = y.result.toneMessagePairs[e];
				t != null && t.message != null && (T.current = !0, o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIAiTextUsed(y.result.toneMessagePairs.length), f(t.message), $());
			}
		}, [
			$,
			f,
			y
		]), N = d(function() {
			y.type === "success" && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIRefreshTapped(y.result.toneMessagePairs.length), D();
		}, [D, y]), M = d(function() {
			y.type === "error" && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIErrorRetryTapped(y.errorType), D();
		}, [D, y]), w = d(function() {
			if (y.type === "success") {
				var e = y.result.toneMessagePairs[E.current];
				if (e != null) {
					var t;
					v({
						followUps: (t = y.result.followUps) != null ? t : [],
						result: y.result,
						selected: e,
						type: "customizing"
					});
				}
			}
		}, [y]), A = d(function() {
			y.type === "customizing" && (v({
				result: y.result,
				type: "success"
			}), L(-1), E.current = -1);
		}, [y]), F = d(function(e) {
			T.current = !0, f(e), $();
		}, [$, f]), O = y.type === "loading", B = R === -1 || O;
		return y.type === "customizing" ? u.jsx(r("WAWebBizBroadcastGenAICustomizeModal.react"), {
			followUps: y.followUps,
			numAiSuggestions: y.result.toneMessagePairs.length,
			onAuthFailure: i,
			onBack: A,
			onUseMessage: F,
			selectedSuggestion: y.selected
		}) : u.jsxs(u.Fragment, { children: [
			u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: b.header,
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
					xstyle: b.headerText,
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
					y.type === "loading" && u.jsx(h, {}),
					y.type === "error" && u.jsx(C, {
						errorType: y.errorType,
						onRetry: M
					}),
					y.type === "success" && u.jsxs(u.Fragment, { children: [u.jsx(o("WAWebFlex.react").FlexColumn, {
						rowGap: 16,
						role: "listbox",
						children: y.result.toneMessagePairs.map(function(e, t) {
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
			y.type === "success" && u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				columnGap: 8,
				justify: "all",
				xstyle: b.footer,
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
					xstyle: b.footerButton
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
					xstyle: b.footerButton
				})]
			})
		] });
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			rowGap: 12,
			children: f.map(y)
		}), e[0] = t) : t = e[0], t;
	}
	function y(e) {
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "start",
			xstyle: b.shimmerCard,
			children: [u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
				height: 14,
				width: 160,
				xstyle: b.shimmerPillLight
			}), u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
				height: 72,
				width: "100%",
				xstyle: b.shimmerPillDark
			})]
		}, e);
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = o("react-compiler-runtime").c(11), n = e.errorType, a = e.onRetry, i;
		t[0] !== n ? (i = o("WAWebBizBroadcastGenAIError").getErrorMessage(n), t[0] = n, t[1] = i) : i = t[1];
		var l = i, c;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (c = { className: "xhslqc4 x1f6kntn x2b8uid" }, t[2] = c) : c = t[2];
		var d;
		t[3] !== l ? (d = u.jsx("span", babelHelpers.extends({}, c, { children: l })), t[3] = l, t[4] = d) : d = t[4];
		var m;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
			/*BTDS*/
			""
		), t[5] = m) : m = t[5];
		var p;
		t[6] !== a ? (p = u.jsx(r("WDSButton.react"), {
			label: m,
			onPress: a,
			variant: "outline"
		}), t[6] = a, t[7] = p) : p = t[7];
		var _;
		return t[8] !== d || t[9] !== p ? (_ = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: b.errorContainer,
			children: [d, p]
		}), t[8] = d, t[9] = p, t[10] = _) : _ = t[10], _;
	}
	var b = {
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
