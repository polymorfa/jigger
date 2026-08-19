__d("WAWebProfileDrawerUsername.react", [
	"fbt",
	"WAWebCmd",
	"WAWebDrawerBlock.react",
	"WAWebDrawerSection.react",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebGetMeUsernameQueryAction",
	"WAWebMentionsRefreshedIcon.react",
	"WAWebUserPrefsMeUser",
	"WAWebUserPrefsUsername",
	"WAWebUsernameTypes",
	"WAWebUsernameWorkerCompatibleGatingUtils",
	"WDSIconIcChevronRight.react",
	"WDSIconIcKey.react",
	"WDSText.react",
	"react",
	"useWAWebContactValues",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = { paddingBottom30: {
		paddingBottom: "xbaz6xv",
		$$css: !0
	} }, _ = {
		sectionPadding: {
			paddingTop: "xyinxu5",
			marginBottom: "xat24cr",
			$$css: !0
		},
		titlePadding: {
			paddingInlineStart: "x162tt16",
			paddingBottom: "xjkvuk6",
			$$css: !0
		},
		mentionIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		chevronIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		usernameKeyContainer: {
			backgroundColor: "x6egj2d",
			paddingTop: "x4p5aij",
			paddingInlineEnd: "x1icxu4v",
			paddingBottom: "x1j85h84",
			paddingInlineStart: "x25sj25",
			borderStartStartRadius: "xbrszos",
			borderStartEndRadius: "xea3l6g",
			borderEndEndRadius: "x18isctg",
			borderEndStartRadius: "x2q3nzr",
			$$css: !0
		},
		usernameKeyIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		createUsernameWithKey: {
			marginTop: "x1ci5j9l",
			$$css: !0
		}
	};
	function f(e) {
		var t, n = e.onClick, a = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), i = o("useWAWebContactValues").useContactValues(a, [o("WAWebFrontendContactGetters").getUsername, o("WAWebFrontendContactGetters").getUsernameKey]), l = i[0], c = i[1], f = m(o("WAWebUserPrefsUsername").getUsernameState()), g = f[0], h = f[1];
		if (d(function() {
			o("WAWebGetMeUsernameQueryAction").getMeUsername();
		}, []), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "username_state_updated", function(e) {
			h(e);
		}), g == null && (o("WAWebUsernameWorkerCompatibleGatingUtils").usernameAccountLinkingEnabled() || o("WAWebUsernameWorkerCompatibleGatingUtils").usernameReservationOnlyMode())) return null;
		var y = s._(
			/*BTDS*/
			""
		), C = g === "RESERVED" ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), b = c != null, v = u.jsx(r("WAWebDrawerBlock.react"), {
			xstyle: b && p.paddingBottom30,
			onClick: n,
			separator: !1,
			side: u.jsx(o("WAWebFlex.react").FlexRow, {
				justify: "end",
				children: u.jsx(r("WDSIconIcChevronRight.react"), {
					xstyle: _.chevronIcon,
					directional: !0,
					height: 24,
					width: 24
				})
			}),
			children: u.jsxs(o("WAWebFlex.react").FlexRow, {
				gap: 24,
				align: "center",
				children: [u.jsx(o("WAWebMentionsRefreshedIcon.react").MentionsRefreshedIcon, { xstyle: _.mentionIcon }), u.jsxs(o("WAWebFlex.react").FlexColumn, {
					gap: 8,
					xstyle: b && _.createUsernameWithKey,
					children: [u.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: l != null ? "contentDefault" : "contentActionEmphasized",
						children: (t = o("WAWebUsernameTypes").serializeMaybeUsername(l)) != null ? t : y
					}), b && u.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						gap: 8,
						xstyle: _.usernameKeyContainer,
						children: [u.jsx(r("WDSIconIcKey.react"), { xstyle: _.usernameKeyIcon }), u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: c
						})]
					})]
				})]
			})
		});
		return u.jsx(r("WAWebDrawerSection.react"), {
			theme: "no-padding",
			animation: !1,
			title: C,
			titleXStyle: _.titlePadding,
			xstyle: _.sectionPadding,
			children: v
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
