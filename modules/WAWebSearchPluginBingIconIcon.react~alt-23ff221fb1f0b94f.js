__d("WAWebSearchPluginBingIconIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "search-plugin-bing-Icon";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 62, 40, "0 0 40 62");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				fill: "none",
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsxs("g", {
						clipPath: "url(#WAWebSearchPluginBingIconIcon__a)",
						children: [
							u.jsx("path", {
								fill: "url(#WAWebSearchPluginBingIconIcon__b)",
								d: "M40 39.84a16.88 16.88 0 0 1-4.25 11.2 7.4 7.4 0 0 0 1.56-2.9l.08-.32.01-.04.07-.32.05-.33.04-.32a7.54 7.54 0 0 0-2.15-6.06 7.07 7.07 0 0 0-3.18-1.85h-.01l-.13-.05-1.85-.65-4.83-1.73h-.05l-.3-.12a4.54 4.54 0 0 1-2.28-2.08l-1.76-4.67L19 24.26l-.4-1.03-.1-.21a2.44 2.44 0 0 1-.16-.9v-.24a2.29 2.29 0 0 1 2.25-2.1c.3 0 .6.07.88.19l9 4.79 1.78.94A16.62 16.62 0 0 1 40 39.85Z"
							}),
							u.jsx("path", {
								fill: "url(#WAWebSearchPluginBingIconIcon__c)",
								d: "M37.6 46.08c0 .47-.05.93-.13 1.38l-.08.36a8.06 8.06 0 0 1-.28.94l-.13.32a6.81 6.81 0 0 1-1.23 1.96c-1.31 1.5-5.77 4.19-7.41 5.28l-3.65 2.3c-2.67 1.71-5.2 2.92-8.38 3l-.44.01-.61-.01a15.78 15.78 0 0 1-12.81-7.65A16.62 16.62 0 0 1 .1 47.12a7.1 7.1 0 0 0 6.91 6 6.8 6.8 0 0 0 3.38-.89l.35-.22 1.45-.89L14.05 50v-.05l.24-.15 16.53-10.16 1.27-.78.13.05h.02a7.07 7.07 0 0 1 4.35 3.37 7.59 7.59 0 0 1 1 3.8Z"
							}),
							u.jsx("path", {
								fill: "url(#WAWebSearchPluginBingIconIcon__d)",
								d: "m14.06 12.19-.01 37.8-1.85 1.13-1.45.9-.36.22h-.02a6.8 6.8 0 0 1-3.35.88 7.1 7.1 0 0 1-6.98-6.48c-.02-.3-.04-.6-.04-.89V3.21A2.4 2.4 0 0 1 2.35.77c.49 0 .94.16 1.32.42l7.19 4.87.12.09a7.37 7.37 0 0 1 3.08 6.04Z"
							}),
							u.jsx("path", {
								fill: "url(#WAWebSearchPluginBingIconIcon__e)",
								d: "M37.6 46.08c0 .47-.05.93-.13 1.38l-.08.36a8.06 8.06 0 0 1-.28.94l-.13.32a6.81 6.81 0 0 1-1.23 1.96c-1.31 1.5-5.77 4.19-7.41 5.28l-3.65 2.3c-2.67 1.71-5.2 2.92-8.38 3l-.44.01-.61-.01a15.78 15.78 0 0 1-12.81-7.65A16.62 16.62 0 0 1 .1 47.12a7.1 7.1 0 0 0 6.91 6 6.8 6.8 0 0 0 3.38-.89l.35-.22 1.45-.89L14.05 50v-.05l.24-.15 16.53-10.16 1.27-.78.13.05h.02a7.07 7.07 0 0 1 4.35 3.37 7.59 7.59 0 0 1 1 3.8Z",
								opacity: .15
							}),
							u.jsx("path", {
								fill: "url(#WAWebSearchPluginBingIconIcon__f)",
								d: "m14.06 12.19-.01 37.8-1.85 1.13-1.45.9-.36.22h-.02a6.8 6.8 0 0 1-3.35.88 7.1 7.1 0 0 1-6.98-6.48c-.02-.3-.04-.6-.04-.89V3.21A2.4 2.4 0 0 1 2.35.77c.49 0 .94.16 1.32.42l7.19 4.87.12.09a7.37 7.37 0 0 1 3.08 6.04Z",
								opacity: .1
							})
						]
					}),
					u.jsxs("defs", { children: [
						u.jsxs("linearGradient", {
							id: "WAWebSearchPluginBingIconIcon__b",
							x1: 15.2,
							x2: 41.41,
							y1: 27.11,
							y2: 41.71,
							gradientUnits: "userSpaceOnUse",
							children: [
								u.jsx("stop", { stopColor: "#37BDFF" }),
								u.jsx("stop", {
									offset: .18,
									stopColor: "#33BFFD"
								}),
								u.jsx("stop", {
									offset: .36,
									stopColor: "#28C5F5"
								}),
								u.jsx("stop", {
									offset: .53,
									stopColor: "#15D0E9"
								}),
								u.jsx("stop", {
									offset: .55,
									stopColor: "#12D1E7"
								}),
								u.jsx("stop", {
									offset: .59,
									stopColor: "#1CD2E5"
								}),
								u.jsx("stop", {
									offset: .77,
									stopColor: "#42D8DC"
								}),
								u.jsx("stop", {
									offset: .91,
									stopColor: "#59DBD6"
								}),
								u.jsx("stop", {
									offset: 1,
									stopColor: "#62DCD4"
								})
							]
						}),
						u.jsxs("linearGradient", {
							id: "WAWebSearchPluginBingIconIcon__c",
							x1: .11,
							x2: 37.59,
							y1: 50.24,
							y2: 50.24,
							gradientUnits: "userSpaceOnUse",
							children: [
								u.jsx("stop", { stopColor: "#39D2FF" }),
								u.jsx("stop", {
									offset: .15,
									stopColor: "#38CEFE"
								}),
								u.jsx("stop", {
									offset: .29,
									stopColor: "#35C3FA"
								}),
								u.jsx("stop", {
									offset: .43,
									stopColor: "#2FB0F3"
								}),
								u.jsx("stop", {
									offset: .55,
									stopColor: "#299AEB"
								}),
								u.jsx("stop", {
									offset: .58,
									stopColor: "#2692EC"
								}),
								u.jsx("stop", {
									offset: .76,
									stopColor: "#1A6CF1"
								}),
								u.jsx("stop", {
									offset: .91,
									stopColor: "#1355F4"
								}),
								u.jsx("stop", {
									offset: 1,
									stopColor: "#104CF5"
								})
							]
						}),
						u.jsxs("linearGradient", {
							id: "WAWebSearchPluginBingIconIcon__d",
							x1: 7.03,
							x2: 7.03,
							y1: 53.66,
							y2: 1.69,
							gradientUnits: "userSpaceOnUse",
							children: [
								u.jsx("stop", { stopColor: "#1B48EF" }),
								u.jsx("stop", {
									offset: .12,
									stopColor: "#1C51F0"
								}),
								u.jsx("stop", {
									offset: .32,
									stopColor: "#1E69F5"
								}),
								u.jsx("stop", {
									offset: .57,
									stopColor: "#2190FB"
								}),
								u.jsx("stop", {
									offset: 1,
									stopColor: "#26B8F4"
								})
							]
						}),
						u.jsxs("linearGradient", {
							id: "WAWebSearchPluginBingIconIcon__e",
							x1: 7.56,
							x2: 31.52,
							y1: 59.83,
							y2: 36.72,
							gradientUnits: "userSpaceOnUse",
							children: [
								u.jsx("stop", { stopColor: "white" }),
								u.jsx("stop", {
									offset: .37,
									stopColor: "#FDFDFD"
								}),
								u.jsx("stop", {
									offset: .51,
									stopColor: "#F6F6F6"
								}),
								u.jsx("stop", {
									offset: .6,
									stopColor: "#EBEBEB"
								}),
								u.jsx("stop", {
									offset: .68,
									stopColor: "#DADADA"
								}),
								u.jsx("stop", {
									offset: .75,
									stopColor: "#C4C4C4"
								}),
								u.jsx("stop", {
									offset: .81,
									stopColor: "#A8A8A8"
								}),
								u.jsx("stop", {
									offset: .86,
									stopColor: "#888888"
								}),
								u.jsx("stop", {
									offset: .91,
									stopColor: "#626262"
								}),
								u.jsx("stop", {
									offset: .95,
									stopColor: "#373737"
								}),
								u.jsx("stop", {
									offset: .99,
									stopColor: "#090909"
								}),
								u.jsx("stop", { offset: 1 })
							]
						}),
						u.jsxs("linearGradient", {
							id: "WAWebSearchPluginBingIconIcon__f",
							x1: 7.03,
							x2: 7.03,
							y1: .77,
							y2: 53.12,
							gradientUnits: "userSpaceOnUse",
							children: [
								u.jsx("stop", { stopColor: "white" }),
								u.jsx("stop", {
									offset: .37,
									stopColor: "#FDFDFD"
								}),
								u.jsx("stop", {
									offset: .51,
									stopColor: "#F6F6F6"
								}),
								u.jsx("stop", {
									offset: .6,
									stopColor: "#EBEBEB"
								}),
								u.jsx("stop", {
									offset: .68,
									stopColor: "#DADADA"
								}),
								u.jsx("stop", {
									offset: .75,
									stopColor: "#C4C4C4"
								}),
								u.jsx("stop", {
									offset: .81,
									stopColor: "#A8A8A8"
								}),
								u.jsx("stop", {
									offset: .86,
									stopColor: "#888888"
								}),
								u.jsx("stop", {
									offset: .91,
									stopColor: "#626262"
								}),
								u.jsx("stop", {
									offset: .95,
									stopColor: "#373737"
								}),
								u.jsx("stop", {
									offset: .99,
									stopColor: "#090909"
								}),
								u.jsx("stop", { offset: 1 })
							]
						}),
						u.jsx("clipPath", {
							id: "WAWebSearchPluginBingIconIcon__a",
							children: u.jsx("path", {
								fill: "white",
								d: "M0 0h40v62H0z"
							})
						})
					] })
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.SearchPluginBingIconIcon = d;
}), 98);
