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
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(26), n = e.msg, a = e.onClose, i = n.isNewsletterStatus === !0, l = i ? "STATUS" : "MESSAGE", p;
		t[0] !== a ? (p = function() {
			o("WAWebModalManager").ModalManager.close(), a == null || a();
		}, t[0] = a, t[1] = p) : p = t[1];
		var _ = p, f;
		t[2] !== _ || t[3] !== l || t[4] !== n ? (f = function() {
			if (!r("WAWebNetworkStatus").online) {
				m(n, l), _();
				return;
			}
			d(n, l), _();
		}, t[2] = _, t[3] = l, t[4] = n, t[5] = f) : f = t[5];
		var g = f, h;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebFaqUrl").getPaidPartnershipLabelFaqUrl(),
			children: s._(
				/*BTDS*/
				""
			)
		}), t[6] = h) : h = t[6];
		var y = h, C;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (C = {
			surface: "unknown",
			viewName: "paid-partnership-label"
		}, t[7] = C) : C = t[7];
		var b = i ? o("WAWebModal.react").ModalTheme.StatusReport : void 0, v;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
			/*BTDS*/
			""
		), t[8] = v) : v = t[8];
		var S;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (S = u.jsx(o("WAWebWdsPictoMegaphoneAdsIcon.react").WdsPictoMegaphoneAdsIcon, {
			height: 64,
			width: 64,
			xstyle: c.icon
		}), t[9] = S) : S = t[9];
		var R;
		t[10] !== i ? (R = u.jsx(r("WDSText.react"), {
			type: "Headline1",
			colorName: "contentDefault",
			xstyle: c.titleText,
			children: i ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		}), t[10] = i, t[11] = R) : R = t[11];
		var L;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (L = { className: "x78zum5 xdt5ytf x6s0dn4 x1j3ira4" }, t[12] = L) : L = t[12];
		var E;
		t[13] !== i ? (E = u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDeemphasized",
			xstyle: c.centeredText,
			children: i ? s._(
				/*BTDS*/
				"",
				[s._param("learnMoreLink", y)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("learnMoreLink", y)]
			)
		}), t[13] = i, t[14] = E) : E = t[14];
		var k;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (k = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			xstyle: c.centeredText,
			children: s._(
				/*BTDS*/
				""
			)
		}), t[15] = k) : k = t[15];
		var I;
		t[16] !== E ? (I = u.jsxs("div", babelHelpers.extends({}, L, { children: [E, k] })), t[16] = E, t[17] = I) : I = t[17];
		var T;
		t[18] !== I || t[19] !== R ? (T = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			children: [
				S,
				R,
				I
			]
		}), t[18] = I, t[19] = R, t[20] = T) : T = t[20];
		var D;
		return t[21] !== _ || t[22] !== g || t[23] !== T || t[24] !== b ? (D = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: C,
			type: b,
			onOK: g,
			okText: v,
			onCancel: _,
			buttonWidth: "hug",
			children: T
		}), t[21] = _, t[22] = g, t[23] = T, t[24] = b, t[25] = D) : D = t[25], D;
	}
	l.default = p;
}), 226);
