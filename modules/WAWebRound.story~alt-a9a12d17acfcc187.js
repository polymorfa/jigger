__d("WAWebRound.story", [
	"WAWebFlex.react",
	"WAWebNoop",
	"WAWebReactIcon.react",
	"WAWebRound.react",
	"WAWebShowroomUtils",
	"WAWebWdsIcSendFilledIcon.react",
	"react",
	"useWAWebCheckbox"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = { container: {
		height: "x18dl8mb",
		$$css: !0
	} };
	function d() {
		var e, t, n = (e = o("useWAWebCheckbox")).useCheckBox("large={true} (use this as an action item in all list modals)", !1), a = n[0], i = n[1], l = e.useCheckBox("disabnled={true}", !1), d = l[0], m = l[1], p = e.useCheckBox("inverted={true}", !1), _ = p[0], f = p[1], g = e.useCheckBox("hideBackground={true}", !1), h = g[0], y = g[1], C = u((t = o("WAWebRound.react")).RoundTheme.Default), b = C[0], v = C[1], S = {
			default: t.RoundTheme.Default,
			small: t.RoundTheme.Small,
			medium: t.RoundTheme.Medium,
			large: t.RoundTheme.Large,
			inverted: t.RoundTheme.Inverted,
			noShadow: t.RoundTheme.NoShadow,
			svgGrayButton: t.RoundTheme.SVGGrayButton,
			reactionPickerButton: t.RoundTheme.ReactionPickerButton,
			approve: t.RoundTheme.Approve,
			reject: t.RoundTheme.Reject,
			disabled: t.RoundTheme.Disabled,
			quickAction: t.RoundTheme.QuickAction,
			drawerFooter: t.RoundTheme.DrawerFooter,
			error: t.RoundTheme.Error
		}, R = Object.keys(S).map(function(e) {
			return s.jsx("option", {
				value: e,
				children: e
			}, e);
		}), L = function(t) {
			var e = t.currentTarget.value;
			v(S[e]);
		};
		return s.jsxs(s.Fragment, { children: [
			s.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				xstyle: c.container,
				children: s.jsx(t.Round, {
					large: a,
					disabled: d,
					inverted: _,
					hideBackground: h,
					theme: b,
					onClick: r("WAWebNoop"),
					children: s.jsx(o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon, {
						width: 18,
						directional: !0
					})
				})
			}),
			s.jsx("br", {}),
			s.jsx("h2", { children: "Options" }),
			i,
			m,
			f,
			y,
			s.jsxs("div", {
				className: "x1sy10c2",
				children: [s.jsx("label", {
					htmlFor: "Rount Themes",
					children: "Choose a theme: "
				}), s.jsx("select", {
					name: "Rount Themes",
					onChange: L,
					children: R
				})]
			})
		] });
	}
	d.displayName = d.name + " [from " + i.id + "]";
	var m = {
		storyName: "WAWebRound",
		component: o("WAWebRound.react").Round,
		description: "\n        Action button mainly used for list modals (Forward message, Create group, etc). Expects to have an &lt;SVG /&gt; icon passed in as a child.\n\n        Note: Should use all '-light' versions of icons.\n    ",
		examples: [{
			example: d,
			title: "Default",
			templateStyle: babelHelpers.extends({}, o("WAWebShowroomUtils").bigPreview)
		}, {
			example: function() {
				return s.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					xstyle: c.container,
					children: s.jsx(o("WAWebRound.react").Round, {
						theme: o("WAWebRound.react").RoundTheme.QuickAction,
						small: !0,
						children: s.jsx(o("WAWebReactIcon.react").ReactIcon, {})
					})
				});
			},
			title: "Quick Action",
			description: "QuickAction theme for Round button component"
		}]
	};
	l.default = m;
}), 98);
