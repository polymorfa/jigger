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
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(6), r;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (r = [
			o("WAWebMsgGetters").getIsAiContent,
			o("WAWebMsgGetters").getIsNewsletterMsg,
			o("WAWebMsgGetters").getType
		], n[0] = r) : r = n[0];
		var a = o("useWAWebMsgValues").useMsgValues(e.id, r), i = a[0], l = a[1], s = a[2], u;
		return n[1] !== t || n[2] !== i || n[3] !== l || n[4] !== s ? (u = _(i, l, s, t), n[1] = t, n[2] = i, n[3] = l, n[4] = s, n[5] = u) : u = n[5], u;
	}
	function _(e, t, n, r) {
		var a = n === o("WAWebMsgType").MSG_TYPE.ALBUM || n === o("WAWebMsgType").MSG_TYPE.POLL_CREATION, i = a && r != null && r.some(function(e) {
			return o("WAWebMsgGetters").getIsAiContent(e);
		});
		return t && (e || i) && o("WAWebNewsletterGatingUtils").isChannelSGIUiLabelEnabled();
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(12), n = e.associatedMessages, a = e.color, i = e.msg, l = e.onPress, c = a === void 0 ? "secondary" : a, _ = p(i, n);
		if (!_) return null;
		var f = d[c], g;
		t[0] !== f ? (g = u.jsx(r("WDSIconWdsIcAiContent.react"), {
			width: 12,
			height: 12,
			"aria-hidden": !0,
			xstyle: f
		}), t[0] = f, t[1] = g) : g = t[1];
		var h = m[c], y;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (y = s._(
			/*BTDS*/
			""
		), t[2] = y) : y = t[2];
		var C;
		t[3] !== h ? (C = u.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: h,
			children: y
		}), t[3] = h, t[4] = C) : C = t[4];
		var b;
		t[5] !== g || t[6] !== C ? (b = u.jsxs(o("WAWebFlex.react").FlexRow, {
			inline: !0,
			align: "center",
			columnGap: 4,
			testid: "ai-content-label",
			children: [g, C]
		}), t[5] = g, t[6] = C, t[7] = b) : b = t[7];
		var v = b;
		if (l == null) return v;
		var S;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (S = s._(
			/*BTDS*/
			""
		), t[8] = S) : S = t[8];
		var R;
		return t[9] !== v || t[10] !== l ? (R = u.jsx(r("WAWebUnstyledButton.react"), {
			onClick: l,
			"aria-label": S,
			children: v
		}), t[9] = v, t[10] = l, t[11] = R) : R = t[11], R;
	}
	l.useShouldShowAiContentLabel = p, l.WAWebMessageAIContentLabel = f;
}), 226);
