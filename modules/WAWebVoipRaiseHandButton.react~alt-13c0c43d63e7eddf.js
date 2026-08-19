__d("WAWebVoipRaiseHandButton.react", [
	"fbt",
	"WAWebEmoji",
	"WAWebEmoji.react",
	"WDSButton.react",
	"WDSIconIcPanTool.react",
	"WDSTooltip.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = ["iconXstyle"], u, c = u || (u = o("react")), d = "✋", m = {
		mirrorIcon: {
			display: "x1lliihq",
			transform: "xpk2tj9",
			$$css: !0
		},
		raisedHandEmoji: {
			fontSize: "xngnso2",
			lineHeight: "xo5v014",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		raiseHandActiveButton: {
			minWidth: "x900493",
			paddingInlineStart: "x1c1uobl",
			paddingInlineEnd: "xyri2b",
			$$css: !0
		},
		raiseHandActiveBackground: {
			backgroundColor: "x1od0jb8",
			$$css: !0
		}
	}, p = { button: {
		width: "x1useyqa",
		height: "xsdox4t",
		borderStartStartRadius: "xlr9sxt",
		borderStartEndRadius: "xvvg52n",
		borderEndEndRadius: "xwd4zgb",
		borderEndStartRadius: "xq8v1ta",
		$$css: !0
	} };
	function _(t) {
		var n = t.iconXstyle, o = babelHelpers.objectWithoutPropertiesLoose(t, e);
		return c.jsx(r("WDSIconIcPanTool.react"), babelHelpers.extends({}, o, { iconXstyle: [m.mirrorIcon, n] }));
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.isDisabled, n = t === void 0 ? !1 : t, a = e.isSelfHandRaised, i = a === void 0 ? !1 : a, l = e.onRaiseHandToggle, u = e.tooltipAnchorRef, f = e.tooltipOwnerDocument, g = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(d), h = s._(
			/*BTDS*/
			""
		), y = s._(
			/*BTDS*/
			""
		), C = g != null ? s._(
			/*BTDS*/
			"",
			[s._param("emoji", c.jsx(r("WAWebEmoji.react"), {
				emoji: g,
				xstyle: m.raisedHandEmoji
			}))]
		) : null, b = i ? h : y, v = c.jsx(r("WDSButton.react"), {
			testid: "voip-raise-hand-toggle-button",
			"aria-label": b,
			"aria-pressed": !1,
			disabled: n,
			onPress: l,
			Icon: _,
			size: "medium",
			variant: "borderless",
			xstyle: p.button
		}), S = C != null ? c.jsx(r("WDSButton.react"), {
			type: "media",
			testid: "voip-raise-hand-toggle-button",
			"aria-label": b,
			"aria-pressed": !0,
			disabled: n,
			onPress: l,
			label: C,
			size: "medium",
			variant: "borderless",
			xstyle: [
				p.button,
				m.raiseHandActiveButton,
				m.raiseHandActiveBackground
			]
		}) : v;
		return c.jsx(r("WDSTooltip.react"), {
			label: b,
			ownerAnchorRef: u,
			ownerDocument: f,
			children: i ? S : v
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.WAWebVoipRaiseHandButton = f;
}), 226);
