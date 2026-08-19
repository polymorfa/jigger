__d("MAWVisibilityRestoreGapUI.react", [
	"fbt",
	"BaseTheme.react",
	"MWXButton.react",
	"MWXText.react",
	"react",
	"useMAWVisibilityRestoreGapUIController"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		dark: {
			"primary-button-background": "var(--chat-composer-button-color, var(--accent))",
			"primary-button-text": "var(--always-white)"
		},
		light: {
			"primary-button-background": "var(--chat-composer-button-color, var(--accent))",
			"primary-button-text": "var(--always-white)"
		},
		type: "VARIABLES"
	};
	function d() {
		return u.jsxs("svg", {
			"aria-hidden": "true",
			className: "xul0bl0 x1lliihq x2lah0s",
			fill: "none",
			focusable: "false",
			height: "40",
			viewBox: "0 0 40 40",
			width: "40",
			xmlns: "http://www.w3.org/2000/svg",
			children: [u.jsx("path", {
				d: "M10.483 9.52989C11.0041 10.3487 12.1434 10.4802 12.9378 9.92265C14.9369 8.51965 17.3723 7.69615 20 7.69615C26.6684 7.69615 32.0982 12.9994 32.3018 19.6184C32.3083 19.8307 32.1355 20.0038 31.9231 20.0038H29.7457C28.734 20.0038 28.1209 21.1207 28.6641 21.9742L33.1491 29.0222C33.6529 29.8139 34.8086 29.8139 35.3124 29.0222L39.7975 21.9742C40.3406 21.1207 39.7275 20.0038 38.7159 20.0038H36.5385C36.326 20.0038 36.1543 19.8304 36.1493 19.6181C35.9444 10.8748 28.7926 3.85 20 3.85C16.4166 3.85 13.1057 5.01679 10.4265 6.99118C9.81395 7.4426 9.69628 8.29358 10.1048 8.93555L10.483 9.52989Z",
				fill: "currentColor"
			}), u.jsx("path", {
				d: "M29.517 30.4778C28.9959 29.659 27.8566 29.5275 27.0622 30.085C25.0631 31.488 22.6277 32.3115 20 32.3115C13.3316 32.3115 7.90184 27.0083 7.69823 20.3893C7.69169 20.177 7.8645 20.0038 8.07692 20.0038H10.2543C11.266 20.0038 11.8791 18.887 11.3359 18.0335L6.85086 10.9855C6.34707 10.1938 5.1914 10.1938 4.6876 10.9855L0.202517 18.0335C-0.340622 18.887 0.272479 20.0038 1.28414 20.0038H3.46154C3.67395 20.0038 3.84569 20.1773 3.85067 20.3896C4.05558 29.1329 11.2074 36.1577 20 36.1577C23.5834 36.1577 26.8943 34.9909 29.5735 33.0165C30.1861 32.5651 30.3037 31.7141 29.8952 31.0721L29.517 30.4778Z",
				fill: "currentColor"
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m() {
		var e = r("useMAWVisibilityRestoreGapUIController")(), t = e.onOpenRestoreDialog, n = e.ref, o = e.shouldShowGapUI;
		return o ? u.jsx("div", {
			className: "x1eb86dx x9f619 x78zum5 xl56j7k x14vqqas xod5an3 x6ikm8r xmzvs34 xf159sx xh8yej3",
			ref: n,
			children: u.jsx("div", {
				className: "xlhe6ec x6nl9eh x1a5l9x9 x7vuprf x1mg3h75 x9f619 xt7dq6l x1jc70xm xyamay9 x1l90r2v xf7dkkf xv54qhq xh8yej3",
				children: u.jsxs("div", {
					className: "x1qjc9v5 x78zum5 xdt5ytf x5yr21d x1nhvcw1 xh8yej3",
					children: [u.jsxs("div", {
						className: "x6s0dn4 x78zum5 xdt5ytf x1h5wmu3 x1nhvcw1 xh8yej3",
						children: [
							u.jsx(d, {}),
							u.jsx("div", {
								className: "x14vqqas xh8yej3",
								children: u.jsx(r("MWXText.react"), {
									align: "center",
									isSemanticHeading: !0,
									type: "headlineEmphasized2",
									children: s._(
										/*BTDS*/
										""
									)
								})
							}),
							u.jsx("div", {
								className: "xw7yly9 xh8yej3",
								children: u.jsx(r("MWXText.react"), {
									align: "center",
									color: "secondary",
									type: "body4",
									children: s._(
										/*BTDS*/
										""
									)
								})
							})
						]
					}), u.jsx("div", {
						className: "x78zum5 xc9qbxq xh8yej3 xw7yly9",
						children: u.jsx("div", {
							className: "x1iyjqo2",
							children: u.jsx(r("BaseTheme.react"), {
								config: c,
								children: u.jsx(r("MWXButton.react"), {
									label: s._(
										/*BTDS*/
										""
									),
									onPress: t,
									size: 32,
									testid: void 0,
									type: "primary"
								})
							})
						})
					})]
				})
			})
		}) : null;
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
