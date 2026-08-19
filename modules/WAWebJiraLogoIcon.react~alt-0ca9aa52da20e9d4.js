__d("WAWebJiraLogoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "jira-logo";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 2500, 2500, "0 -30.632 255.324 285.956");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsxs("linearGradient", {
						id: "WAWebJiraLogoIcon__a",
						children: [u.jsx("stop", {
							offset: .18,
							stopColor: "#0052cc"
						}), u.jsx("stop", {
							offset: 1,
							stopColor: "#2684ff"
						})]
					}),
					u.jsx("linearGradient", {
						xlinkHref: "#WAWebJiraLogoIcon__a",
						id: "WAWebJiraLogoIcon__b",
						x1: "98.03%",
						x2: "58.89%",
						y1: ".16%",
						y2: "40.77%"
					}),
					u.jsx("linearGradient", {
						xlinkHref: "#WAWebJiraLogoIcon__a",
						id: "WAWebJiraLogoIcon__c",
						x1: "100.67%",
						x2: "55.4%",
						y1: ".46%",
						y2: "44.73%"
					}),
					u.jsx("path", {
						fill: "#2684ff",
						d: "M244.66 0H121.7a55.5 55.5 0 0 0 55.5 55.5h22.65v21.87a55.5 55.5 0 0 0 55.46 55.47V10.67c0-5.9-4.77-10.67-10.66-10.67"
					}),
					u.jsx("path", {
						fill: "url(#WAWebJiraLogoIcon__b)",
						d: "M183.82 61.26H60.87a55.5 55.5 0 0 0 55.47 55.47h22.65v21.94a55.5 55.5 0 0 0 55.5 55.43V71.93c0-5.9-4.78-10.67-10.67-10.67z"
					}),
					u.jsx("path", {
						fill: "url(#WAWebJiraLogoIcon__c)",
						d: "M122.95 122.49H0a55.5 55.5 0 0 0 55.5 55.5h22.72v21.87a55.5 55.5 0 0 0 55.4 55.46V133.16c0-5.9-4.78-10.67-10.67-10.67"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.JiraLogoIcon = d;
}), 98);
