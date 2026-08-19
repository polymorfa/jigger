__d("WAWebMetaAiChatNullState.react", [
	"fbt",
	"WALogger",
	"WAWebBotGating",
	"WAWebBotTypes",
	"WAWebClickable.react",
	"WAWebIconButton.react",
	"WAWebLottieAnimationLoadable",
	"WAWebMaybeGetAiThreadInfo",
	"WAWebMetaAiOrbitIdleBreezeAnimationData",
	"WAWebSendTextMsgChatAction",
	"WDSIconIcArrowBack.react",
	"WDSText.react",
	"react",
	"useWAWebMetaAiNullStatePrompts"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = {
		orbit: {
			width: "x13oubkp",
			height: "xjp8j0k",
			$$css: !0
		},
		promptBubble: {
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			alignItems: "x6s0dn4",
			columnGap: "x1s70e7g",
			width: "x3hqpx7",
			minWidth: "x120s0ox",
			boxSizing: "x9f619",
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xde1mab",
			borderStartStartRadius: "xlr9sxt",
			borderStartEndRadius: "xvvg52n",
			borderEndEndRadius: "xwd4zgb",
			borderEndStartRadius: "xq8v1ta",
			backgroundColor: "x1280gxy",
			backgroundImage: "x7qietp",
			boxShadow: "x1dej7w9 xenj7z8",
			textAlign: "x1yc453h",
			cursor: "x1ypdohk",
			$$css: !0
		}
	};
	function m(t) {
		var n = t.chat, a = t.onDismiss, i = t.threadId, l = r("useWAWebMetaAiNullStatePrompts")(), u = function(r) {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WAWebMetaAiChatNullState] handlePromptSelect query=", ""])), r), o("WAWebSendTextMsgChatAction").sendTextMsgToChat(n, r, {
				botMsgBodyType: o("WAWebBotGating").isBizBot3pAvailable() ? o("WAWebBotTypes").BotMsgBodyType.PROMPT : null,
				threadIds: i != null ? [i] : void 0,
				aiThreadInfo: i != null ? o("WAWebMaybeGetAiThreadInfo").maybeGetAiThreadInfo(n, i) : void 0
			}), a();
		};
		return c.jsxs("section", {
			"aria-label": s._(
				/*BTDS*/
				""
			),
			"data-testid": "meta-ai-null-state-overlay",
			className: "x10l6tqk x1o0tod xtijo5x x13vifvy x1ey2m1c x12xzxwr x78zum5 xdt5ytf x9f619 x1odjw0f x67bb7w",
			children: [c.jsx("div", {
				className: "x78zum5 x6s0dn4 x1s70e7g x12w63v0 x1nzty39 x16ovd2e x12xbjc7 x1okw0bk",
				children: c.jsx(r("WAWebIconButton.react"), {
					icon: c.jsx(r("WDSIconIcArrowBack.react"), {}),
					onClick: a,
					dataTestId: "meta-ai-null-state-back-button",
					ariaLabel: s._(
						/*BTDS*/
						""
					)
				})
			}), c.jsxs("div", {
				className: "x78zum5 xdt5ytf x6s0dn4 xh8yej3 x16kv6xo xdx6fka xvtqlqk xvg22vi x9f619",
				children: [
					c.jsx("div", {
						className: "x78zum5 x6s0dn4 xl56j7k xjp8j0k x2lah0s",
						children: c.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
							autoplay: !0,
							loop: !0,
							data: r("WAWebMetaAiOrbitIdleBreezeAnimationData"),
							xstyle: d.orbit
						})
					}),
					c.jsx("div", {
						className: "x98l61r xg6s713 x2b8uid",
						children: c.jsx(r("WDSText.react"), {
							colorName: "contentDefault",
							type: "Headline1",
							children: s._(
								/*BTDS*/
								""
							)
						})
					}),
					c.jsx("div", {
						className: "x78zum5 xdt5ytf x6s0dn4 x1qvou4u xh8yej3",
						children: l.map(function(e) {
							return c.jsx(o("WAWebClickable.react").Clickable, {
								onClick: function() {
									return u(e.query);
								},
								dataTestId: "meta-ai-null-state-prompt",
								xstyle: d.promptBubble,
								children: c.jsx("span", {
									className: "x1cqoux5 xeuugli x1yc453h",
									children: c.jsx(r("WDSText.react"), {
										colorName: "contentDefault",
										type: "Body1",
										children: e.display
									})
								})
							}, e.query);
						})
					})
				]
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
