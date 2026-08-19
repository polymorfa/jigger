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
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useState;
	function _(e) {
		var t, n = e.draftMessage, a = e.onClose, i = e.onSubmit, l = p(n), c = l[0], _ = l[1];
		m(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAICreateModalViewed();
		}, []);
		var g = d(function(e) {
			_(e);
		}, []), h = d(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAICreateModalDismissed(), a();
		}, [a]), y = d(function() {
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
		}, [i, c]);
		return u.jsxs((t = o("WAWebFlex.react")).FlexColumn, {
			align: "stretch",
			xstyle: f.root,
			children: [
				u.jsxs(t.FlexRow, {
					align: "center",
					xstyle: f.header,
					children: [u.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcClose.react"),
						"aria-label": s._(
							/*BTDS*/
							""
						),
						onPress: h,
						size: "medium",
						testid: "bb_genai_create_modal_close_btn",
						variant: "borderless"
					}), u.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: "contentDefault",
						children: s._(
							/*BTDS*/
							""
						)
					})]
				}),
				u.jsxs(t.FlexColumn, {
					align: "center",
					justify: "center",
					grow: 1,
					xstyle: f.body,
					children: [u.jsx("div", {
						"data-testid": "bb_genai_create_modal_illustration",
						children: u.jsx(o("WAWebWdsIllAiChatsIcon.react").WdsIllAiChatsIcon, {
							width: 168,
							height: 128
						})
					}), u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						textAlign: "center",
						children: s._(
							/*BTDS*/
							""
						)
					})]
				}),
				u.jsxs(t.FlexColumn, {
					align: "stretch",
					xstyle: f.inputSection,
					children: [u.jsx(t.FlexItem, {
						grow: 1,
						shrink: 1,
						xstyle: [f.inputField, f.inputFieldRounded],
						children: u.jsx(r("WDSTextField.react"), {
							label: s._(
								/*BTDS*/
								""
							),
							onEnter: y,
							onValueChange: g,
							testid: "bb_genai_create_modal_input",
							value: c
						})
					}), u.jsx(r("WDSButton.react"), {
						label: s._(
							/*BTDS*/
							""
						),
						onPress: y,
						size: "medium",
						testid: "bb_genai_create_modal_submit_btn",
						variant: "filled",
						widthMode: "flexible"
					})]
				})
			]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	var f = {
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
