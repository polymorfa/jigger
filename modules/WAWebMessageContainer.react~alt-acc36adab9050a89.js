__d("WAWebMessageContainer.react", [
	"WAWebABProps",
	"WAWebChatThemeGatingUtils",
	"WAWebChatThemeModeContext",
	"WAWebClassnames",
	"WAWebStylesEnv",
	"WAWebVibrantOutgoingOverrides.stylex",
	"WAWebWrapperGetTailIcon",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s.useContext, d = o("WAWebWrapperGetTailIcon").getTailIcon(!1), m = o("WAWebWrapperGetTailIcon").getTailIcon(!0), p = {
		message: {
			borderStartStartRadius: "x1liijdw",
			borderStartEndRadius: "xu342n7",
			borderEndEndRadius: "xelbjmh",
			borderEndStartRadius: "x16pgt24",
			color: "x14ug900",
			flex: "x1okw0bk",
			fontSize: "x12lqup9",
			lineHeight: "x17fgdl5",
			position: "x1n2onr6",
			$$css: !0
		},
		messageHighlightMention: {
			lineHeight: "x19v9tvf",
			$$css: !0
		},
		messageTailOverrideIncoming: {
			borderStartStartRadius: "x1bczwif",
			borderStartEndRadius: "xu342n7",
			$$css: !0
		},
		messageTailOverrideOutgoing: {
			borderStartStartRadius: "x1liijdw",
			borderStartEndRadius: "x17un8ov",
			$$css: !0
		},
		tail: {
			display: "x1lliihq",
			height: "x18gnavp",
			position: "x10l6tqk",
			top: "x13vifvy",
			width: "x1xc55vz",
			zIndex: "xupqr0c",
			$$css: !0
		},
		tailColorIncoming: {
			color: "x1l1cedg",
			$$css: !0
		},
		tailColorOutgoing: {
			color: "x1fa4crm",
			$$css: !0
		},
		tailLeft: {
			insetInlineStart: "x7hj1vm",
			$$css: !0
		},
		tailRight: {
			insetInlineEnd: "xgvahye",
			$$css: !0
		},
		tailLeftSafari: {
			insetInlineStart: "xnj87uo",
			$$css: !0
		},
		tailRightSafari: {
			insetInlineEnd: "x13niomq",
			$$css: !0
		}
	};
	function _(t) {
		var n = t.children, a = t.isSentByMe, i = c(r("WAWebChatThemeModeContext")), l = i.isVibrant, s = o("WAWebChatThemeGatingUtils").shouldApplyVibrantOverride({
			isVibrant: l,
			isSentByMe: a,
			isNotification: !1
		}), _ = a ? m : d, f = {
			0: "x193iq5w x1cy8zhl",
			1: "x193iq5w xuk3077"
		}[!!a << 0], g = o("WAWebClassnames").classnamesConvertMeToStylexPlease((e || (e = r("stylex")))(p.message, o("WAWebABProps").getABPropConfigValue("wa_web_highlight_me_mention") && p.messageHighlightMention, a ? p.messageTailOverrideOutgoing : p.messageTailOverrideIncoming, s && o("WAWebVibrantOutgoingOverrides.stylex").vibrantOutgoingLiteralStyles.root), e(s && o("WAWebVibrantOutgoingOverrides.stylex").vibrantOutgoingTheme));
		return u.jsx("div", {
			className: f,
			children: u.jsx("div", {
				className: g,
				children: u.jsxs("div", babelHelpers.extends({}, {
					0: { className: "xelbjmh x16pgt24 x1n2onr6 x12xzxwr x1ew7x2d x1bczwif xu342n7" },
					2: { className: "xelbjmh x16pgt24 x1n2onr6 x12xzxwr x1g5lz36 x1bczwif xu342n7" },
					1: { className: "xelbjmh x16pgt24 x1n2onr6 x12xzxwr x1ew7x2d x1liijdw x17un8ov" },
					3: { className: "xelbjmh x16pgt24 x1n2onr6 x12xzxwr x1g5lz36 x1liijdw x17un8ov" }
				}[!!a << 1 | !!a << 0], { children: [u.jsx("div", babelHelpers.extends({}, e.props(p.tail, a ? p.tailColorOutgoing : p.tailColorIncoming, a ? p.tailRight : p.tailLeft, o("WAWebStylesEnv").hasSafariFix && (a ? p.tailRightSafari : p.tailLeftSafari)), {
					"aria-hidden": "true",
					children: u.jsx(_, {})
				})), n] }))
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
