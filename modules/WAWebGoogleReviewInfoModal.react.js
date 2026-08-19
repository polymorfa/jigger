__d("WAWebGoogleReviewInfoModal.react", [
	"fbt",
	"WAWebClickableLink.react",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WDSButtonGroup.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = "https://support.google.com/maps/answer/6230175", d = "https://support.google.com/maps/answer/7421661", m = "https://www.google.com/intl/en/help/terms_maps/", p = "https://policies.google.com/privacy", _ = { content: {
		boxSizing: "x9f619",
		width: "x1l2rt3b",
		paddingTop: "xl7twdi",
		paddingInlineEnd: "xyo0t3i",
		paddingBottom: "xvg22vi",
		paddingInlineStart: "xb0esv5",
		rowGap: "x1j3ira4",
		$$css: !0
	} };
	function f(e, t) {
		e.preventDefault(), o("WAWebModalManager").ModalManager.close(), self.setTimeout(function() {
			return o("WAWebExternalLink.react").openExternalLink(t);
		}, 10);
	}
	function g() {
		var e = o("react-compiler-runtime").c(10), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "start",
			children: u.jsx(r("WDSText.react"), {
				type: "Headline2",
				colorName: "contentDefault",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), e[0] = t) : t = e[0];
		var n;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDefault",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[1] = n) : n = e[1];
		var a;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "start",
			children: [n, u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					"",
					[s._param("learn more link", u.jsx(r("WAWebClickableLink.react"), {
						href: c,
						onClick: b,
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				)
			})]
		}), e[2] = a) : a = e[2];
		var i;
		e[3] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDefault",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[3] = i) : i = e[3];
		var l;
		e[4] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "start",
			children: [i, u.jsx(r("WAWebClickableLink.react"), {
				href: d,
				onClick: C,
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), e[4] = l) : l = e[4];
		var f;
		e[5] === Symbol.for("react.memo_cache_sentinel") ? (f = u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDefault",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[5] = f) : f = e[5];
		var g, v;
		e[6] === Symbol.for("react.memo_cache_sentinel") ? (g = u.jsx(r("WAWebClickableLink.react"), {
			href: m,
			onClick: y,
			children: s._(
				/*BTDS*/
				""
			)
		}), v = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: "·"
		}), e[6] = g, e[7] = v) : (g = e[6], v = e[7]);
		var S;
		e[8] === Symbol.for("react.memo_cache_sentinel") ? (S = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "start",
			children: [f, u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				gap: 4,
				children: [
					g,
					v,
					u.jsx(r("WAWebClickableLink.react"), {
						href: p,
						onClick: h,
						children: s._(
							/*BTDS*/
							""
						)
					})
				]
			})]
		}), e[8] = S) : S = e[8];
		var R;
		return e[9] === Symbol.for("react.memo_cache_sentinel") ? (R = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.Flex,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: _.content,
				children: [
					t,
					a,
					l,
					S,
					u.jsx(r("WDSButtonGroup.react"), {
						width: "fill",
						orientation: "stacked",
						primaryButtonProps: {
							variant: "filled",
							type: "default",
							size: "medium",
							onPress: o("WAWebModalManager").closeModalManager,
							label: s._(
								/*BTDS*/
								""
							),
							testid: "google_review_info_done"
						}
					})
				]
			})
		}), e[9] = R) : R = e[9], R;
	}
	function h(e) {
		return f(e, p);
	}
	function y(e) {
		return f(e, m);
	}
	function C(e) {
		return f(e, d);
	}
	function b(e) {
		return f(e, c);
	}
	l.default = g;
}), 226);
