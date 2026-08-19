__d("WAWebAfterReadNux.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebModalManager",
	"WAWebNux",
	"WAWebText_DONOTUSE.react",
	"WAWebWdsPictoDisappearingMessagesIcon.react",
	"WDSIconIcBackHand.react",
	"WDSIconIcDuration.react",
	"WDSIconWdsIcDisappearingMessages.react",
	"react",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		bold: {
			fontWeight: "xjs9k72",
			$$css: !0
		},
		header: {
			fontSize: "x1603h9y",
			fontWeight: "x117nqv4",
			lineHeight: "x1u7k74",
			marginTop: "x9u28bd",
			textAlign: "x2b8uid",
			color: "x14ug900",
			$$css: !0
		},
		subtitle: {
			marginTop: "x98l61r",
			fontSize: "x1f6kntn",
			textAlign: "x2b8uid",
			marginBottom: "xg6s713",
			$$css: !0
		},
		icon: {
			marginInlineEnd: "xviac27",
			color: "xhslqc4",
			$$css: !0
		},
		container: {
			position: "x1n2onr6",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			marginTop: "x1nmyh1g",
			color: "xhslqc4",
			fontSize: "x1nxh6w3",
			$$css: !0
		},
		body: {
			marginTop: "x1rdy4ex",
			fontSize: "x1nxh6w3",
			color: "xhslqc4",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.onOk, n = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL_AFTER_READ), a = n[1], i = function() {
			a(), o("WAWebModalManager").ModalManager.closeSupportOrModal(), t && t();
		}, l = function() {
			a(), o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getEphemeralFaqUrl());
		};
		return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "after-read-nux-modal",
			onOK: i,
			onCancel: l,
			cancelText: s._(
				/*BTDS*/
				""
			),
			children: [
				u.jsx(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					justify: "center",
					children: u.jsx(r("WAWebFlexItem.react"), { children: u.jsx(o("WAWebWdsPictoDisappearingMessagesIcon.react").WdsPictoDisappearingMessagesIcon, { height: 88 }) })
				}),
				u.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
					xstyle: c.header,
					children: s._(
						/*BTDS*/
						""
					)
				}),
				u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
					xstyle: c.subtitle,
					children: s._(
						/*BTDS*/
						"",
						[s._param("afterReading", u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
							xstyle: c.bold,
							children: s._(
								/*BTDS*/
								""
							)
						}))]
					)
				}),
				u.jsx(m, {
					icon: u.jsx(r("WDSIconWdsIcDisappearingMessages.react"), {
						"aria-hidden": !0,
						width: 24,
						height: 24,
						iconXstyle: c.icon
					}),
					children: s._(
						/*BTDS*/
						""
					)
				}),
				u.jsx(m, {
					icon: u.jsx(r("WDSIconIcDuration.react"), {
						"aria-hidden": !0,
						width: 24,
						height: 24,
						iconXstyle: c.icon
					}),
					children: s._(
						/*BTDS*/
						""
					)
				}),
				u.jsx(m, {
					icon: u.jsx(r("WDSIconIcBackHand.react"), {
						"aria-hidden": !0,
						width: 24,
						height: 24,
						iconXstyle: c.icon
					}),
					children: s._(
						/*BTDS*/
						""
					)
				})
			]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.children, n = e.icon;
		return u.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
			xstyle: c.container,
			children: [n, u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
				xstyle: c.body,
				children: u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, { children: t })
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = d;
}), 226);
