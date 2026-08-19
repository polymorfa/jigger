__d("WAWebPaidPartnershipLabelModal.react", [
	"fbt",
	"WAJids",
	"WAWebActionToast.react",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebNetworkStatus",
	"WAWebNewsletterAddPaidPartnershipLabelAction",
	"WAWebToastManager",
	"WAWebWdsPictoMegaphoneAdsIcon.react",
	"WDSText.react",
	"err",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		icon: {
			color: "x1v5yvga",
			marginBottom: "x1ua1l7f",
			$$css: !0
		},
		titleText: {
			textAlign: "x2b8uid",
			marginBottom: "x1ua1l7f",
			$$css: !0
		},
		centeredText: {
			textAlign: "x2b8uid",
			$$css: !0
		}
	};
	async function d(e, t, n) {
		n === void 0 && (n = o("WAWebActionToast.react").genId());
		var a = o("WAWebFrontendMsgGetters").getChat(e), i = o("WAJids").toNewsletterJid(a.id.toJid()), l = e.serverId, c = l != null ? o("WAWebNewsletterAddPaidPartnershipLabelAction").WAWebNewsletterAddPaidPartnershipLabelAction(i, l.toString(), t) : Promise.resolve(!1), m = s._(
			/*BTDS*/
			""
		), p = s._(
			/*BTDS*/
			""
		), _ = s._(
			/*BTDS*/
			""
		), f = new (o("WAWebActionToast.react")).ActionType(m), g = c.then(function(e) {
			if (e === !0) return new (o("WAWebActionToast.react")).ActionType(p);
			throw r("err")("Label not added");
		}).catch(function() {
			return new (o("WAWebActionToast.react")).ActionType(_, {
				actionText: r("WAWebFbtCommon")("Try again"),
				actionHandler: function() {
					return d(e, t, n);
				}
			});
		});
		return o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebActionToast.react").ActionToast, {
			id: n,
			initialAction: f,
			pendingAction: g
		}));
	}
	function m(e, t, n) {
		n === void 0 && (n = o("WAWebActionToast.react").genId());
		var a = s._(
			/*BTDS*/
			""
		), i = new (o("WAWebActionToast.react")).ActionType(a, {
			actionText: r("WAWebFbtCommon")("Try again"),
			actionHandler: function() {
				return r("WAWebNetworkStatus").online ? d(e, t, n) : (m(e, t, n), Promise.resolve());
			}
		});
		o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebActionToast.react").ActionToast, {
			id: n,
			initialAction: i,
			pendingAction: Promise.resolve(i)
		}));
	}
	function p(e) {
		var t = e.msg, n = e.onClose, a = t.isNewsletterStatus === !0, i = a ? "STATUS" : "MESSAGE", l = function() {
			o("WAWebModalManager").ModalManager.close(), n == null || n();
		}, p = function() {
			if (!r("WAWebNetworkStatus").online) {
				m(t, i), l();
				return;
			}
			d(t, i), l();
		}, _ = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebFaqUrl").getPaidPartnershipLabelFaqUrl(),
			children: s._(
				/*BTDS*/
				""
			)
		});
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "paid-partnership-label"
			},
			type: a ? o("WAWebModal.react").ModalTheme.StatusReport : void 0,
			onOK: p,
			okText: s._(
				/*BTDS*/
				""
			),
			onCancel: l,
			buttonWidth: "hug",
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				children: [
					u.jsx(o("WAWebWdsPictoMegaphoneAdsIcon.react").WdsPictoMegaphoneAdsIcon, {
						height: 64,
						width: 64,
						xstyle: c.icon
					}),
					u.jsx(r("WDSText.react"), {
						type: "Headline1",
						colorName: "contentDefault",
						xstyle: c.titleText,
						children: a ? s._(
							/*BTDS*/
							""
						) : s._(
							/*BTDS*/
							""
						)
					}),
					u.jsxs("div", {
						className: "x78zum5 xdt5ytf x6s0dn4 x1j3ira4",
						children: [u.jsx(r("WDSText.react"), {
							type: "Body1",
							colorName: "contentDeemphasized",
							xstyle: c.centeredText,
							children: a ? s._(
								/*BTDS*/
								"",
								[s._param("learnMoreLink", _)]
							) : s._(
								/*BTDS*/
								"",
								[s._param("learnMoreLink", _)]
							)
						}), u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							xstyle: c.centeredText,
							children: s._(
								/*BTDS*/
								""
							)
						})]
					})
				]
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
