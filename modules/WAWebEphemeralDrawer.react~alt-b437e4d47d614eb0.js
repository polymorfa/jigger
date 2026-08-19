__d("WAWebEphemeralDrawer.react", [
	"fbt",
	"WAWebAfterReadUtils",
	"WAWebButton.react",
	"WAWebChangeEphemeralDurationChatAction",
	"WAWebChatEphemerality",
	"WAWebChatGetters",
	"WAWebClickableLink.react",
	"WAWebContactGetters",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEphemeralNux.react",
	"WAWebEphemeralOptionsSection.react",
	"WAWebEphemeralityDurations",
	"WAWebEphemeralityTypes",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebMiscGatingUtils",
	"WAWebNetworkStatus",
	"WAWebNux",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWdsIllDisappearingMessagesIcon.react",
	"WDSIllustrationWdsIllDisappearingMessagesSmall.react",
	"WDSText.react",
	"react",
	"useWAWebCallbackOnce",
	"useWAWebHandleAfterReadingClick",
	"useWAWebNux",
	"useWAWebOnUnmount",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u.useState, m = {
		icon: {
			marginTop: "x1nmyh1g",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xdqhqc9",
			marginInlineStart: "x1lziwak",
			$$css: !0
		},
		title: {
			marginBottom: "xefnzgg",
			marginTop: "x98l61r",
			$$css: !0
		}
	};
	function p(e) {
		var t = e.onClick;
		return s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m1", c.jsx(r("WAWebClickableLink.react"), {
				onClick: t,
				tabIndex: 0,
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		);
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.onClick;
		return c.jsx("div", {
			className: "x1ubxc9n",
			children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
				margin: [16, 0],
				children: c.jsx(p, { onClick: t })
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.chat, l = a.entryPoint, u = a.onClose, p = a.onDDMSettingsClick, f = a.showNux, g = r("useWAWebUIM")(), h = function(t) {
			return o("WAWebChatEphemerality").calculateEphemeralDurationForChat(t) || 0;
		}, y = d(function() {
			var e;
			return (e = a.pendingDuration) != null ? e : h(i);
		}), C = y[0], b = y[1], v = o("WAWebEphemeralityDurations").getDefaultEphemeralityDurations(), S = function() {
			o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) }));
		}, R = function() {
			o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) }));
		}, L = async function() {
			var e = h(i);
			if (C !== e) {
				if (!r("WAWebNetworkStatus").online) {
					S();
					return;
				}
				await o("WAWebChangeEphemeralDurationChatAction").changeEphemeralDuration(i, C, l, o("WAWebEphemeralityTypes").DisappearingModeTrigger.ChatSettings).catch(R);
			}
		}, E = r("useWAWebCallbackOnce")(L), k = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL), I = k[0], T = k[1], D = r("useWAWebHandleAfterReadingClick")(C, b);
		r("useWAWebOnUnmount")(function() {
			I && T(), (!f || !I) && E();
		});
		var x = function() {
			(!f || !I) && E(), u ? u() : g == null || g.requestDismiss(), f && I && T();
		}, $ = function() {
			p(C);
		}, P = o("WAWebMiscGatingUtils").isDefaultDisappearingMessagesEnabled(), N;
		return o("WAWebContactGetters").getIsMe(i.contact) ? N = s._(
			/*BTDS*/
			""
		) : o("WAWebChatGetters").getIsGroup(i) ? N = s._(
			/*BTDS*/
			""
		) : N = s._(
			/*BTDS*/
			""
		), c.jsxs(r("WAWebDrawer.react"), {
			theme: "gallery",
			ref: n,
			testid: "chat-dm-settings-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "ephemeral-settings"
			},
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				onBack: x,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				focusBackOrCancel: !0
			}), c.jsx(r("WAWebDrawerBody.react"), { children: a.showNux && I ? c.jsxs(r("WAWebDrawerSection.react"), {
				animation: !1,
				children: [c.jsx("div", {
					className: "xevwqry xarfp6d x1bo0p19 x1w9lr8p x1f6kntn x37zpob",
					children: c.jsx(r("WAWebEphemeralNux.react"), { fromMe: !1 })
				}), c.jsx("div", {
					className: "xdqhqc9 x16ovd2e x5s3kwk x12xbjc7 xdylf7x x2b8uid",
					children: c.jsx(o("WAWebButton.react").Button, {
						type: "primary",
						onClick: T,
						testid: "ephemeral-nux-close",
						children: r("WAWebFbtCommon")("OK")
					})
				})]
			}) : c.jsxs(r("WAWebDrawerSection.react"), {
				animation: !1,
				theme: "padding-no-vertical",
				children: [
					c.jsxs("div", { children: [
						c.jsx(o("WAWebFlex.react").FlexRow, {
							align: "center",
							justify: "center",
							children: o("WAWebAfterReadUtils").isAfterReadOptionAvailable() ? c.jsx(r("WDSIllustrationWdsIllDisappearingMessagesSmall.react"), { xstyle: m.icon }) : c.jsx(o("WAWebWdsIllDisappearingMessagesIcon.react").WdsIllDisappearingMessagesIcon, { xstyle: m.icon })
						}),
						c.jsx(r("WDSText.react"), {
							colorName: "contentDeemphasized",
							type: "Body2Emphasized",
							xstyle: m.title,
							children: s._(
								/*BTDS*/
								""
							)
						}),
						c.jsxs(o("WAWebText.react").WAWebTextMuted, {
							margin: [0, 0],
							children: [
								N,
								" ",
								c.jsx(o("WAWebExternalLink.react").ExternalLink, {
									href: o("WAWebFaqUrl").getEphemeralFaqUrl(),
									children: s._(
										/*BTDS*/
										""
									)
								})
							]
						})
					] }),
					c.jsx("div", {
						className: "x1ua1l7f x98l61r",
						children: c.jsx(r("WAWebEphemeralOptionsSection.react"), {
							initialDuration: C,
							options: v,
							onChange: b,
							onAfterReadingClick: D
						})
					}),
					P && c.jsx(_, { onClick: $ })
				]
			}) })]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
