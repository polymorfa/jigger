__d("WAWebSquircle.story", [
	"WAWebCommunityGroupIcon.react",
	"WAWebCommunitySquircleIcon.react",
	"WAWebDetailImage.react",
	"WAWebShowroomUtils",
	"WAWebSquircleIcon.react",
	"WDSPaddings.stylex",
	"nullthrows",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = {
		divSection: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			height: "x5yr21d",
			columnGap: "x9bxmr9",
			$$css: !0
		},
		iconPrimary1: {
			fill: "xc7jhwv",
			$$css: !0
		},
		iconBackground1: {
			fill: "x1n2w8rn",
			$$css: !0
		}
	}, d = [
		10,
		25,
		50,
		100,
		250
	], m = {
		storyName: "WAWebSquircle",
		component: r("WAWebSquircleIcon.react"),
		description: "This component is one way to render Squircle shaped things in our app, though this story also details the other methods. The squircle shape is drawn using the CSS polygon function (located at $squircle-polygon) combined with clip-path",
		examples: [
			{
				example: function() {
					return u.jsxs("section", babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.divSection, o("WDSPaddings.stylex").wdsPaddings.paddingStart12), { children: [
						u.jsxs("div", {
							className: "x78zum5 xdt5ytf xl56j7k x6s0dn4",
							children: [u.jsx(r("WAWebSquircleIcon.react"), { children: u.jsx(o("WAWebCommunityGroupIcon.react").CommunityGroupIcon, { directional: !0 }) }), u.jsx("p", {
								className: "xrv4cvt x1mqxbix x2b8uid x1yrsyyn",
								children: "Default"
							})]
						}),
						u.jsxs("div", {
							className: "x78zum5 xdt5ytf xl56j7k x6s0dn4",
							children: [u.jsx(r("WAWebSquircleIcon.react"), {
								transparent: !0,
								children: u.jsx(o("WAWebCommunityGroupIcon.react").CommunityGroupIcon, { directional: !0 })
							}), u.jsx("p", {
								className: "xrv4cvt x1mqxbix x2b8uid x1yrsyyn",
								children: "transparent theme"
							})]
						}),
						u.jsxs("div", {
							className: "x78zum5 xdt5ytf xl56j7k x6s0dn4",
							children: [u.jsx(r("WAWebSquircleIcon.react"), {
								disabled: !0,
								children: u.jsx(o("WAWebCommunityGroupIcon.react").CommunityGroupIcon, { directional: !0 })
							}), u.jsx("p", {
								className: "xrv4cvt x1mqxbix x2b8uid x1yrsyyn",
								children: "disabled"
							})]
						})
					] }));
				},
				templateStyle: { minWidth: 600 },
				title: "Using WAWebSquircleIcon",
				description: "Using the component with CommunityGroupIcon as the child"
			},
			{
				example: function() {
					return u.jsx("section", babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.divSection, o("WDSPaddings.stylex").wdsPaddings.paddingStart12), { children: d.map(function(e) {
						return u.jsxs("div", {
							className: "x78zum5 xdt5ytf xl56j7k x6s0dn4",
							style: { height: r("nullthrows")(d.at(-1)) + 50 },
							children: [u.jsx("div", {
								className: "xrkmrrc x1awj2ng x78zum5 xl56j7k x6s0dn4 x1f2iure",
								style: {
									height: e,
									width: e
								}
							}), u.jsx("p", {
								className: "xrv4cvt x1mqxbix x2b8uid x1yrsyyn",
								children: e + "x" + e
							})]
						}, e);
					}) }));
				},
				templateStyle: { minWidth: 600 },
				title: "Plain div",
				description: "divs with clip path $squircle-polygon"
			},
			{
				example: function() {
					return u.jsx("section", babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.divSection, o("WDSPaddings.stylex").wdsPaddings.paddingStart12), { children: d.map(function(e) {
						return u.jsxs("div", {
							className: "x78zum5 xdt5ytf xl56j7k x6s0dn4",
							style: { height: r("nullthrows")(d.at(-1)) + 50 },
							children: [u.jsx(o("WAWebDetailImage.react").DetailImage, {
								shape: o("WAWebDetailImage.react").DetailImageShape.Squircle,
								id: o("WAWebShowroomUtils").getRandomContactWithImage(),
								loader: !0,
								quality: o("WAWebDetailImage.react").DetailImageQuality.High,
								size: e
							}), u.jsx("p", {
								className: "xrv4cvt x1mqxbix x2b8uid x1yrsyyn",
								children: e + "x" + e
							})]
						}, e);
					}) }));
				},
				templateStyle: { minWidth: 600 },
				title: "DetailImage",
				description: "DetailImage with DetailImageShape.Squircle"
			},
			{
				example: function() {
					return u.jsx("section", babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.divSection, o("WDSPaddings.stylex").wdsPaddings.paddingStart12), { children: d.map(function(e) {
						return u.jsxs("div", {
							className: "x78zum5 xdt5ytf xl56j7k x6s0dn4",
							style: { height: r("nullthrows")(d.at(-1)) + 50 },
							children: [u.jsx(o("WAWebCommunitySquircleIcon.react").CommunitySquircleIcon, {
								height: e,
								width: e
							}), u.jsx("p", {
								className: "xrv4cvt x1mqxbix x2b8uid x1yrsyyn",
								children: e + "x" + e
							})]
						}, e);
					}) }));
				},
				templateStyle: { minWidth: 600 },
				title: "CommunitySquircleIcon",
				description: "The SVG Icon component for CommunitySquircle"
			},
			{
				example: function() {
					return u.jsx("section", babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.divSection, o("WDSPaddings.stylex").wdsPaddings.paddingStart12), { children: d.map(function(e) {
						return u.jsxs("div", {
							className: "x78zum5 xdt5ytf xl56j7k x6s0dn4",
							style: { height: r("nullthrows")(d.at(-1)) + 50 },
							children: [u.jsx(o("WAWebCommunitySquircleIcon.react").CommunitySquircleIcon, {
								height: e,
								width: e,
								innerStyles: {
									primary: c.iconPrimary1,
									background: c.iconBackground1
								}
							}), u.jsx("p", {
								className: "xrv4cvt x1mqxbix x2b8uid x1yrsyyn",
								children: e + "x" + e
							})]
						}, e);
					}) }));
				},
				templateStyle: { minWidth: 600 },
				title: "CommunitySquircleIcon",
				description: "CommunitySquircleIcon using innerStyles to add classes to inner elements of the SVG"
			}
		]
	};
	l.default = m;
}), 98);
