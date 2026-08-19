__d("WAWebBizTwoColumnLayout.story", [
	"WAWebBizTwoColumnLayout.react",
	"WAWebShowroomStory.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u() {
		return s.jsxs("div", {
			className: "x1280gxy xx42vgk xbogo7e x120ee7l x1vb5itz xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x78zum5 xdt5ytf x1p57kb1 xvtqlqk xvpt6g3 xdx6fka x8a3fw1",
			children: [
				s.jsx(r("WDSText.react"), {
					type: "Headline2",
					colorName: "contentDefault",
					children: "Create your ad"
				}),
				s.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: "The primary column holds the main task (e.g. an ad-creation form). It grows to fill the wider share of the row and scrolls independently."
				}),
				s.jsx("div", { className: "x1h3rtpe xyi3aci xwf5gio x1p453bz x1suzm8a x2lah0s xsdox4t" }),
				s.jsx("div", { className: "x1h3rtpe xyi3aci xwf5gio x1p453bz x1suzm8a x2lah0s xsdox4t" }),
				s.jsx("div", { className: "x1h3rtpe xyi3aci xwf5gio x1p453bz x1suzm8a x2lah0s xsdox4t" }),
				s.jsx("div", { className: "x1h3rtpe xyi3aci xwf5gio x1p453bz x1suzm8a x2lah0s xsdox4t" }),
				s.jsx("div", { className: "x1h3rtpe xyi3aci xwf5gio x1p453bz x1suzm8a x2lah0s xsdox4t" }),
				s.jsx("div", { className: "x1h3rtpe xyi3aci xwf5gio x1p453bz x1suzm8a x2lah0s xsdox4t" }),
				s.jsx("div", { className: "x1h3rtpe xyi3aci xwf5gio x1p453bz x1suzm8a x2lah0s xsdox4t" })
			]
		});
	}
	u.displayName = u.name + " [from " + i.id + "]";
	function c() {
		return s.jsxs("div", {
			className: "x1280gxy xx42vgk xbogo7e x120ee7l x1vb5itz xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x78zum5 xdt5ytf x1p57kb1 xvtqlqk xvpt6g3 xdx6fka x8a3fw1",
			children: [s.jsx(r("WDSText.react"), {
				type: "Body1Emphasized",
				colorName: "contentDefault",
				children: "Live preview"
			}), s.jsx("div", {
				className: "x6s0dn4 x1h3rtpe xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x1isuwpm xl56j7k",
				children: s.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: "Sticky preview"
				})
			})]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	var d = {
		storyName: "WAWebBizTwoColumnLayout",
		section: o("WAWebShowroomStory.react").StorySectionType.MOLECULE,
		component: r("WAWebBizTwoColumnLayout.react"),
		description: "The component <b>&lt;WAWebBizTwoColumnLayout /&gt;</b> is the standard two-column page layout for Business surfaces (e.g. an ad-creation form next to a sticky live preview). It fills its parent and uses an internal ResizeObserver to switch between side-by-side and stacked layouts at roughly 828px wide.<br/><br/>Props: <b>primaryContent</b> (required) is the main column and takes the larger share of the row; <b>secondaryContent</b> (optional) renders as a sticky side column on wide screens (omit it for a single centered column); <b>flipResizeOrder</b> (default false) makes the secondary column appear <i>first</i> when the layout stacks on narrow screens.<br/><br/>The showroom preview panel is narrower than the ~828px breakpoint, so most examples below show the stacked layout; the last example sits on a fixed wide stage you can scroll sideways to see the side-by-side layout used on wide surfaces such as the ad-creation drawer.",
		examples: [
			{
				title: "Stacked layout",
				description: "Below the ~828px breakpoint the layout automatically stacks into a single column, primary first then secondary.",
				example: function() {
					return s.jsx("div", {
						className: "x17x1jmn xx42vgk xbogo7e x120ee7l x1vb5itz xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 x1bo65i3 x17fpy1y x6ikm8r x1odjw0f xh8yej3",
						children: s.jsx(r("WAWebBizTwoColumnLayout.react"), {
							primaryContent: s.jsx(u, {}),
							secondaryContent: s.jsx(c, {})
						})
					});
				}
			},
			{
				title: "Stacked with flipResizeOrder",
				description: "Same stacked layout, but flipResizeOrder is true, so the secondary column leads when the layout stacks (useful when the preview should come before the form on small screens).",
				example: function() {
					return s.jsx("div", {
						className: "x17x1jmn xx42vgk xbogo7e x120ee7l x1vb5itz xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 x1bo65i3 x17fpy1y x6ikm8r x1odjw0f xh8yej3",
						children: s.jsx(r("WAWebBizTwoColumnLayout.react"), {
							flipResizeOrder: !0,
							primaryContent: s.jsx(u, {}),
							secondaryContent: s.jsx(c, {})
						})
					});
				}
			},
			{
				title: "Primary only",
				description: "When secondaryContent is omitted the layout renders a single centered column.",
				example: function() {
					return s.jsx("div", {
						className: "x17x1jmn xx42vgk xbogo7e x120ee7l x1vb5itz xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 x1bo65i3 x17fpy1y x6ikm8r x1odjw0f xh8yej3",
						children: s.jsx(r("WAWebBizTwoColumnLayout.react"), { primaryContent: s.jsx(u, {}) })
					});
				}
			},
			{
				title: "Two columns (side-by-side)",
				description: "On a surface wider than the ~828px breakpoint the layout is side-by-side: the primary column takes the larger share and the secondary column stays sticky. The showroom preview is narrower than that, so this example sits on a fixed 900px stage; scroll it sideways to see the two columns.",
				example: function() {
					return s.jsx("div", {
						className: "xx42vgk xbogo7e x120ee7l x1vb5itz xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 xw2csxc xh8yej3",
						children: s.jsx("div", {
							className: "x17x1jmn x1bo65i3 x1odjw0f x1sii68",
							children: s.jsx(r("WAWebBizTwoColumnLayout.react"), {
								primaryContent: s.jsx(u, {}),
								secondaryContent: s.jsx(c, {})
							})
						})
					});
				}
			}
		]
	}, m = d;
	l.default = m;
}), 98);
