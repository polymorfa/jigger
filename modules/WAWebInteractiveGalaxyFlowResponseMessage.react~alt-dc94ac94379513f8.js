__d("WAWebInteractiveGalaxyFlowResponseMessage.react", [
	"fbt",
	"WABidi",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebGetGalaxyFlowCtaButton",
	"WAWebGetGalaxyFlowsActionFromButton",
	"WAWebL10N",
	"WAWebMessageMeta.react",
	"WAWebText.react",
	"WDSIconIcDescription.react",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useMemo, d = {
		innerBubble: {
			height: "xdiz9cm",
			borderStartStartRadius: "x1liijdw",
			borderStartEndRadius: "xu342n7",
			borderEndEndRadius: "xelbjmh",
			borderEndStartRadius: "x16pgt24",
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		roundIconContainer: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			width: "x14qfxbe",
			height: "xc9qbxq",
			backgroundColor: "x1k43qru",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			$$css: !0
		},
		titleText: {
			fontSize: "x1jchvi3",
			$$css: !0
		},
		iconColor: {
			color: "x1v5yvga",
			$$css: !0
		}
	};
	function m(e) {
		var t, n, a = e.defaultMsg, i = e.msg, l = (t = (n = i.interactivePayload) == null ? void 0 : n.buttonParamsJson) != null ? t : "{}", m = c(function() {
			return JSON.parse(l);
		}, [l]), p = m.wa_flow_response_params;
		if (p == null || !Object.hasOwn(p, "response_message") || p.response_message == null) return a;
		if (p.title == null) return null;
		var _ = o("WAWebGetGalaxyFlowCtaButton").getGalaxyFlowResponseCtaButton(l, 0);
		if (_ == null) return null;
		var f = o("WAWebGetGalaxyFlowsActionFromButton").getCtaFlowInteractiveAction(_, i), g = u.jsx("div", babelHelpers.extends({}, {
			0: { className: "x10l6tqk x1n327nk x23vkua xtkvdam" },
			1: { className: "x10l6tqk x1n327nk x23vkua xtkvdam xtrg13t" }
		}[!!r("WAWebL10N").isRTL() << 0], { children: u.jsx(o("WAWebMessageMeta.react").Meta, { msg: i }) })), h = s._(
			/*BTDS*/
			""
		), y = p.title;
		return u.jsx("div", {
			"data-testid": "galaxy-flow-response-bubble",
			role: "button",
			onClick: function() {
				return f == null || f.onClick == null ? void 0 : f.onClick();
			},
			tabIndex: 0,
			onKeyDown: function(t) {
				t.preventDefault(), (t.key === "Enter" || t.key === " ") && (f == null || f.onClick == null || f.onClick());
			},
			className: "x9f619 x87ps6o x3orp4s x1lte6z7 x123j3cw xaso8d8 x1gabggj",
			children: u.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: [d.innerBubble, o("WDSPaddings.stylex").wdsPaddings.padding8],
				align: "center",
				children: [u.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: d.roundIconContainer,
					padding: 2,
					children: u.jsx(r("WDSIconIcDescription.react"), { xstyle: d.iconColor })
				}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingStart12,
					justify: "evenly",
					rowGap: 4,
					children: [
						u.jsx(o("WAWebEmojiText.react").EmojiText, {
							xstyle: d.titleText,
							text: y,
							textLimit: 30,
							dirMismatch: o("WABidi").bidiDir(y) === "rtl" !== r("WAWebL10N").isRTL(),
							direction: o("WABidi").bidiDir(y),
							inferLinesDirection: !0
						}),
						u.jsx(o("WAWebText.react").WAWebTextMuted, { children: h }),
						g
					]
				})]
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
