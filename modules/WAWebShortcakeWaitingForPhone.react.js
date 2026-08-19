__d("WAWebShortcakeWaitingForPhone.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebLinkDeviceScreenPrimaryButton.react",
	"WAWebSpinner.react",
	"WAWebWdsPictoPasskeyIcon.react",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		textSection: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			alignItems: "x1cy8zhl",
			rowGap: "x1kb72lq",
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		buttonSpacing: {
			marginTop: "x1anpbxc",
			$$css: !0
		},
		spinnerStroke: {
			stroke: "xscos2w",
			$$css: !0
		}
	};
	function d() {
		var e = o("react-compiler-runtime").c(5), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = { className: "x78zum5 x1q0g3np x6s0dn4 x1qgv0r9" }, e[0] = t) : t = e[0];
		var n, a;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsx("span", {
			className: "xngnso2 xo1l8bm x1mqxbix",
			children: s._(
				/*BTDS*/
				""
			)
		}), a = u.jsx("span", {
			className: "x1f6kntn xo1l8bm x1mqxbix x1fc57z9",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[1] = n, e[2] = a) : (n = e[1], a = e[2]);
		var i;
		e[3] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsx(o("WAWebSpinner.react").Spinner, {
			size: 16,
			stroke: 2,
			color: c.spinnerStroke
		}), e[3] = i) : i = e[3];
		var l;
		return e[4] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsxs("div", babelHelpers.extends({}, t, {
			"data-testid": "shortcake_waiting_for_phone_card",
			children: [u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: c.textSection,
				children: [
					n,
					a,
					u.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
						animate: !1,
						disabled: !0,
						icon: i,
						onClick: m,
						testId: "shortcake_waiting_continue_button",
						text: s._(
							/*BTDS*/
							""
						),
						xstyle: c.buttonSpacing
					})
				]
			}), u.jsx("div", {
				className: "x78zum5 x6s0dn4 xl56j7k x2lah0s",
				children: u.jsx(o("WAWebWdsPictoPasskeyIcon.react").WdsPictoPasskeyIcon, {
					height: 88,
					width: 88
				})
			})]
		})), e[4] = l) : l = e[4], l;
	}
	function m() {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {}), p.apply(this, arguments);
	}
	l.default = d;
}), 226);
