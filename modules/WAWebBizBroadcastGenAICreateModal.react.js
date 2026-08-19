__d("WAWebBizBroadcastGenAICreateModal.react", [
	"fbt",
	"WAWebBizBroadcastGenAIGating",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebFlex.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWdsIllAiChatsIcon.react",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"WDSTextField.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useState;
	function _(e) {
		var t = o("react-compiler-runtime").c(29), n = e.draftMessage, a = e.onClose, i = e.onSubmit, l = p(n), c = l[0], d = l[1], _;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (_ = [], t[0] = _) : _ = t[0], m(f, _);
		var h;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (h = function(t) {
			d(t);
		}, t[1] = h) : h = t[1];
		var y = h, C;
		t[2] !== a ? (C = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAICreateModalDismissed(), a();
		}, t[2] = a, t[3] = C) : C = t[3];
		var b = C, v;
		t[4] !== i || t[5] !== c ? (v = function() {
			var e = c.trim(), t = o("WAWebBizBroadcastGenAIGating").getGenAIComposerMinWords();
			if (e.length === 0 || o("WAWebBizBroadcastGenAIGating").countWords(e) < t) {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIInsufficientWordCountShown(), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
					msg: s._(
						/*BTDS*/
						"",
						[s._param("min_words", t)]
					),
					action: {
						actionText: s._(
							/*BTDS*/
							""
						),
						dismiss: !0
					}
				}));
				return;
			}
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAICreateModalSubmitted(e.length), i(e);
		}, t[4] = i, t[5] = c, t[6] = v) : v = t[6];
		var S = v, R;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
			/*BTDS*/
			""
		), t[7] = R) : R = t[7];
		var L;
		t[8] !== b ? (L = u.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcClose.react"),
			"aria-label": R,
			onPress: b,
			size: "medium",
			testid: "bb_genai_create_modal_close_btn",
			variant: "borderless"
		}), t[8] = b, t[9] = L) : L = t[9];
		var E;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (E = u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDefault",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[10] = E) : E = t[10];
		var k;
		t[11] !== L ? (k = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: g.header,
			children: [L, E]
		}), t[11] = L, t[12] = k) : k = t[12];
		var I;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (I = u.jsx("div", {
			"data-testid": "bb_genai_create_modal_illustration",
			children: u.jsx(o("WAWebWdsIllAiChatsIcon.react").WdsIllAiChatsIcon, {
				width: 168,
				height: 128
			})
		}), t[13] = I) : I = t[13];
		var T;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (T = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			grow: 1,
			xstyle: g.body,
			children: [I, u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				textAlign: "center",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), t[14] = T) : T = t[14];
		var D;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (D = [g.inputField, g.inputFieldRounded], t[15] = D) : D = t[15];
		var x;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
			/*BTDS*/
			""
		), t[16] = x) : x = t[16];
		var $;
		t[17] !== S || t[18] !== c ? ($ = u.jsx(o("WAWebFlex.react").FlexItem, {
			grow: 1,
			shrink: 1,
			xstyle: D,
			children: u.jsx(r("WDSTextField.react"), {
				label: x,
				onEnter: S,
				onValueChange: y,
				testid: "bb_genai_create_modal_input",
				value: c
			})
		}), t[17] = S, t[18] = c, t[19] = $) : $ = t[19];
		var P;
		t[20] === Symbol.for("react.memo_cache_sentinel") ? (P = s._(
			/*BTDS*/
			""
		), t[20] = P) : P = t[20];
		var N;
		t[21] !== S ? (N = u.jsx(r("WDSButton.react"), {
			label: P,
			onPress: S,
			size: "medium",
			testid: "bb_genai_create_modal_submit_btn",
			variant: "filled",
			widthMode: "flexible"
		}), t[21] = S, t[22] = N) : N = t[22];
		var M;
		t[23] !== $ || t[24] !== N ? (M = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: g.inputSection,
			children: [$, N]
		}), t[23] = $, t[24] = N, t[25] = M) : M = t[25];
		var w;
		return t[26] !== M || t[27] !== k ? (w = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: g.root,
			children: [
				k,
				T,
				M
			]
		}), t[26] = M, t[27] = k, t[28] = w) : w = t[28], w;
	}
	function f() {
		o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAICreateModalViewed();
	}
	var g = {
		body: {
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			rowGap: "x1f0uite",
			$$css: !0
		},
		header: {
			columnGap: "x1aj3ljl",
			height: "x1peatla",
			paddingInlineEnd: "xcldk2z",
			paddingInlineStart: "x1iw51ew",
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
			marginTop: "xr1yuqi",
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			rowGap: "x1qvou4u",
			$$css: !0
		},
		root: {
			height: "x5yr21d",
			$$css: !0
		}
	};
	l.default = _;
}), 226);
