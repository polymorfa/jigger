__d("WAWebWrapperEphemeralInfoButton.react", [
	"fbt",
	"WAWebInfoAltIcon.react",
	"WAWebRound.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = 12, d = "x1xeqro6-B", m = {
		svgColor: {
			color: "x1bvqhpb",
			$$css: !0
		},
		mountAnimation: {
			animationName: "x7u67sc",
			animationDuration: "x5hsz1j",
			animationTimingFunction: "x1debuo4",
			$$css: !0
		}
	};
	function p(e) {
		var t = e.atBubbleCorner, n = t === void 0 ? !1 : t, r = e.onClick, a = u.jsx(o("WAWebRound.react").Round, {
			onClick: r,
			label: s._(
				/*BTDS*/
				""
			),
			testid: "msg_ephemeral_info_button",
			theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshedOverlay,
			xstyle: m.mountAnimation,
			children: u.jsx(o("WAWebInfoAltIcon.react").InfoAltIcon, {
				xstyle: m.svgColor,
				height: c,
				width: c
			})
		});
		return n ? a : u.jsx("div", {
			className: "x78zum5 x6s0dn4 xl56j7k x23j0i4 xd7y6wv",
			children: a
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
