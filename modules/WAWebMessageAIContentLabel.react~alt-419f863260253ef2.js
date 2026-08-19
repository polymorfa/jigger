__d("WAWebMessageAIContentLabel.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebNewsletterGatingUtils",
	"WAWebUnstyledButton.react",
	"WDSIconWdsIcAiContent.react",
	"WDSText.react",
	"react",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		iconSecondary: {
			color: "xhslqc4",
			$$css: !0
		},
		iconPrimary: {
			color: "x14ug900",
			$$css: !0
		},
		iconLight: {
			color: "x17t9dm2",
			$$css: !0
		}
	}, d = {
		light: c.iconLight,
		primary: c.iconPrimary,
		secondary: c.iconSecondary
	}, m = {
		light: "persistentAlwaysWhite",
		primary: "contentDefault",
		secondary: "contentDeemphasized"
	};
	function p(e, t) {
		var n = o("useWAWebMsgValues").useMsgValues(e.id, [
			o("WAWebMsgGetters").getIsAiContent,
			o("WAWebMsgGetters").getIsNewsletterMsg,
			o("WAWebMsgGetters").getType
		]), r = n[0], a = n[1], i = n[2];
		return _(r, a, i, t);
	}
	function _(e, t, n, r) {
		var a = n === o("WAWebMsgType").MSG_TYPE.ALBUM || n === o("WAWebMsgType").MSG_TYPE.POLL_CREATION, i = a && r != null && r.some(function(e) {
			return o("WAWebMsgGetters").getIsAiContent(e);
		});
		return t && (e || i) && o("WAWebNewsletterGatingUtils").isChannelSGIUiLabelEnabled();
	}
	function f(e) {
		var t = e.associatedMessages, n = e.color, a = n === void 0 ? "secondary" : n, i = e.msg, l = e.onPress, c = p(i, t);
		if (!c) return null;
		var _ = u.jsxs(o("WAWebFlex.react").FlexRow, {
			inline: !0,
			align: "center",
			columnGap: 4,
			testid: "ai-content-label",
			children: [u.jsx(r("WDSIconWdsIcAiContent.react"), {
				width: 12,
				height: 12,
				"aria-hidden": !0,
				xstyle: d[a]
			}), u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: m[a],
				children: s._(
					/*BTDS*/
					""
				)
			})]
		});
		return l == null ? _ : u.jsx(r("WAWebUnstyledButton.react"), {
			onClick: l,
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: _
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.useShouldShowAiContentLabel = p, l.WAWebMessageAIContentLabel = f;
}), 226);
