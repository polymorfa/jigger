__d("WAWebIconTabs.story", [
	"WAWebIcMoodIcon.react",
	"WAWebIconTabs.react",
	"WAWebWdsIcStickerIcon.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useRef, m = u.useState, p = {
		emojiIcon: {
			width: "x17z2i9w",
			height: "x17rw0jw",
			$$css: !0
		},
		stickerIcon: {
			width: "x1ig0tib",
			height: "x1pwvq5b",
			$$css: !0
		}
	};
	function _(e) {
		var t = e.moreTags, n = e.popupAtLaunch, a = e.showRef, i = m(null), l = i[0], u = i[1], _ = d([]), f = [{
			Icon: o("WAWebIcMoodIcon.react").IcMoodIcon,
			iconStyle: p.emojiIcon
		}, {
			Icon: o("WAWebWdsIcStickerIcon.react").WdsIcStickerIcon,
			iconStyle: p.stickerIcon
		}];
		return c(function() {
			a && u(0);
		}, [a]), s.jsxs("div", {
			className: "xeq5yr9",
			children: [
				s.jsx(r("WAWebIconTabs.react"), {
					refs: _.current,
					selectedIndex: l,
					onSelect: function(t) {
						return u(t);
					},
					tabConfigs: t ? f.concat(f) : f,
					popupAtLaunch: n
				}),
				s.jsx("button", {
					className: "x1anpbxc",
					onClick: function() {
						return u(null);
					},
					children: "Reset"
				}),
				s.jsx("div", {
					className: "x1anpbxc",
					children: "Selected tab: " + (l == null ? "null" : l.toString())
				}),
				a ? s.jsx("div", {
					className: "x1anpbxc x1pg5gke",
					children: _.current.map(function(e) {
						var t, n;
						return (t = (n = e.current) == null ? void 0 : n.toString()) != null ? t : "null";
					}).join("\n")
				}) : void 0
			]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	var f = {
		storyName: "WAWebIconTabs",
		component: r("WAWebIconTabs.react"),
		description: "Generic tabs component with keyboard support for switching tabs.",
		examples: [
			{
				example: function() {
					return s.jsx(_, {});
				},
				title: "Default tabs"
			},
			{
				example: function() {
					return s.jsx(_, { popupAtLaunch: !0 });
				},
				title: "Icons popup at launch",
				description: "popupAtLaunch=true"
			},
			{
				example: function() {
					return s.jsx(_, { moreTags: !0 });
				},
				title: "More icon tags",
				description: "tabConfig.length==4"
			},
			{
				example: function() {
					return s.jsx(_, { showRef: !0 });
				},
				title: "Get refs of icons",
				description: "iconRefs:Array of RefType \nPass iconRefs into IconTabs.props.refs\n(Tab 0 is selected intitially to trigger the rerender for showing refs)"
			}
		]
	};
	l.default = f;
}), 98);
