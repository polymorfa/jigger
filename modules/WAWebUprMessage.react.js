__d("WAWebUprMessage.react", [
	"fbt",
	"WAWebClickable.react",
	"WAWebCopyTextWithToast",
	"WAWebExternalLink.react",
	"WAWebFrontendMsgGetters",
	"WAWebGalaxyFlowsUtils",
	"WAWebInteractiveBubble.react",
	"WAWebLaunchIcon.react",
	"WAWebMediaOpaqueData",
	"WAWebMsgGetters",
	"WAWebOrderDetails",
	"WAWebUnsupportedMessage",
	"WAWebUprDetailDrawerLoadable",
	"WAWebUprGating",
	"WAWebUprPaymentBubbleLoadable",
	"WAWebUprPaymentMethodLabels",
	"WAWebUprPaymentOptionsDrawerLoadable",
	"WAWebUprPaymentRequest",
	"WAWebUprWamLogger",
	"WDSIconIcContentCopy.react",
	"react",
	"react-compiler-runtime",
	"useWAWebHasOrderStatusUpdate",
	"useWAWebMsgDownloadMedia"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { clickable: {
		cursor: "x1ypdohk",
		$$css: !0
	} };
	function d(e) {
		return e.paymentOptions.length === 1 && e.paymentOptions[0].kind === "payment_link";
	}
	function m(e, t) {
		var n = o("WAWebOrderDetails").getOrderInfo(e), r = o("WAWebMsgGetters").getSender(e.unsafe());
		return n == null || r == null ? !1 : (o("WAWebUprDetailDrawerLoadable").openUprDetailDrawer({
			chat: t,
			msg: e,
			orderInfo: n,
			sellerWid: r
		}), !0);
	}
	function p(e) {
		if (e.paymentOptions.length !== 1) return null;
		var t = e.paymentOptions[0];
		if (t.kind !== "payment_account") return null;
		var n = o("WAWebUprPaymentMethodLabels").getUprMethodLabels(t.accountType, t.identifierType);
		return n == null ? null : {
			opt: t,
			labels: n
		};
	}
	function _(e, t) {
		o("WAWebCopyTextWithToast").copyTextWithToast({
			failureMsg: s._(
				/*BTDS*/
				""
			),
			successMsg: t.copySuccessToast(),
			text: e.identifierValue
		});
	}
	function f(e) {
		o("WAWebCopyTextWithToast").copyTextWithToast({
			failureMsg: s._(
				/*BTDS*/
				""
			),
			successMsg: s._(
				/*BTDS*/
				""
			),
			text: e.beneficiaryName
		});
	}
	function g(e) {
		var t, n;
		if (((t = e.interactiveHeader) == null ? void 0 : t.thumbnail) != null) return "data:image/jpeg;base64," + e.interactiveHeader.thumbnail;
		var o = (n = e.mediaData) == null ? void 0 : n.preview;
		return o instanceof r("WAWebMediaOpaqueData") ? o.url() : null;
	}
	function h(e) {
		var t = e.chat, n = e.info, a = e.msg, i = e.statusUpdatedFromPending, l = function() {
			if (m(a, t)) {
				o("WAWebUprWamLogger").logUprInteractionWAMEvent({
					msg: a,
					info: n,
					chat: t,
					cta: o("WAWebUprWamLogger").UprCtaType.VIEW_DETAILS
				});
				return;
			}
			if (d(n)) {
				var e = n.paymentOptions[0];
				e.kind === "payment_link" && (o("WAWebUprWamLogger").logUprInteractionWAMEvent({
					msg: a,
					info: n,
					chat: t,
					cta: o("WAWebUprWamLogger").UprCtaType.OPEN_PAYMENT_LINK
				}), o("WAWebExternalLink.react").openExternalLink(e.uri));
			}
		};
		if (d(n)) {
			var u = n.paymentOptions[0];
			if (u.kind === "payment_link") return i ? {
				actions: [{
					label: s._(
						/*BTDS*/
						""
					),
					onClick: l
				}],
				headerClick: l
			} : {
				actions: [{
					label: s._(
						/*BTDS*/
						""
					),
					Icon: o("WAWebLaunchIcon.react").LaunchIcon,
					onClick: function() {
						o("WAWebUprWamLogger").logUprInteractionWAMEvent({
							msg: a,
							info: n,
							chat: t,
							cta: o("WAWebUprWamLogger").UprCtaType.OPEN_PAYMENT_LINK
						}), o("WAWebExternalLink.react").openExternalLink(u.uri);
					}
				}],
				headerClick: l
			};
		}
		var c = p(n);
		if (c != null) {
			var g = function() {
				_(c.opt, c.labels), o("WAWebUprWamLogger").logUprInteractionWAMEvent({
					msg: a,
					info: n,
					chat: t,
					cta: o("WAWebUprWamLogger").UprCtaType.COPY_PAYMENT_KEY,
					paymentMethodChoice: c.opt.accountType
				});
			}, h = [{
				label: c.labels.copyLabel(),
				Icon: r("WDSIconIcContentCopy.react"),
				onClick: g
			}];
			return c.opt.beneficiaryName !== "" && h.push({
				label: s._(
					/*BTDS*/
					""
				),
				Icon: r("WDSIconIcContentCopy.react"),
				onClick: function() {
					f(c.opt), o("WAWebUprWamLogger").logUprInteractionWAMEvent({
						msg: a,
						info: n,
						chat: t,
						cta: o("WAWebUprWamLogger").UprCtaType.COPY_PAYMENT_KEY,
						paymentMethodChoice: c.opt.accountType
					});
				}
			}), {
				actions: h,
				headerClick: l
			};
		}
		var y = function() {
			o("WAWebUprWamLogger").logUprInteractionWAMEvent({
				msg: a,
				info: n,
				chat: t,
				cta: o("WAWebUprWamLogger").UprCtaType.VIEW_PAYMENT_OPTIONS
			}), o("WAWebUprPaymentOptionsDrawerLoadable").openUprPaymentOptionsDrawer(n);
		};
		return {
			actions: [{
				label: s._(
					/*BTDS*/
					""
				),
				onClick: y
			}],
			headerClick: l
		};
	}
	function y(e) {
		var t, n, a = o("react-compiler-runtime").c(21), i = e.displayAuthor, l = e.displayType, s = e.msg, d = o("WAWebUprPaymentRequest").parseUprPaymentInfo(s), m;
		a[0] !== s ? (m = o("WAWebFrontendMsgGetters").getChat(s.unsafe()), a[0] = s, a[1] = m) : m = a[1];
		var p = m, _ = o("useWAWebHasOrderStatusUpdate").useWAWebHasOrderStatusUpdate(p, d == null ? void 0 : d.referenceId), f = o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(s);
		if (d == null) return null;
		var y = o("WAWebMsgGetters").getSender(s.unsafe());
		if (!o("WAWebUprGating").isUprBubbleEnabledForSender(y)) {
			var C;
			a[2] !== s ? (C = o("WAWebGalaxyFlowsUtils").getInvalidatedFlowMessageFromHistorySync(s), a[2] = s, a[3] = C) : C = a[3];
			var b;
			return a[4] !== i || a[5] !== C ? (b = u.jsx(r("WAWebUnsupportedMessage"), {
				msg: C,
				displayAuthor: i,
				hideUpdateButton: !0
			}), a[4] = i, a[5] = C, a[6] = b) : b = a[6], b;
		}
		var v = ((t = (n = d.items) == null ? void 0 : n.length) != null ? t : 0) > 0, S;
		a[7] !== s ? (S = g(s), a[7] = s, a[8] = S) : S = a[8];
		var R = S, L = h({
			chat: p,
			info: d,
			msg: s,
			statusUpdatedFromPending: _
		}), E = L.actions, k = L.headerClick, I;
		a[9] !== f || a[10] !== v || a[11] !== k || a[12] !== s || a[13] !== R ? (I = v ? u.jsx(o("WAWebClickable.react").Clickable, {
			onClick: k,
			xstyle: c.clickable,
			children: u.jsx(o("WAWebUprPaymentBubbleLoadable").WAWebUprPaymentBubbleLoadable, {
				downloadHeaderMedia: f,
				headerMediaData: s.mediaData,
				msg: s,
				thumbnailUrl: R
			})
		}) : u.jsx(o("WAWebUprPaymentBubbleLoadable").WAWebUprPaymentBubbleLoadable, {
			downloadHeaderMedia: f,
			headerMediaData: s.mediaData,
			msg: s,
			thumbnailUrl: R
		}), a[9] = f, a[10] = v, a[11] = k, a[12] = s, a[13] = R, a[14] = I) : I = a[14];
		var T;
		return a[15] !== E || a[16] !== i || a[17] !== l || a[18] !== s || a[19] !== I ? (T = u.jsx(r("WAWebInteractiveBubble.react"), {
			msg: s,
			displayAuthor: i,
			displayType: l,
			header: I,
			actions: E
		}), a[15] = E, a[16] = i, a[17] = l, a[18] = s, a[19] = I, a[20] = T) : T = a[20], T;
	}
	l.default = y;
}), 226);
