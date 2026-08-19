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
		var t, n, a = e.displayAuthor, i = e.displayType, l = e.msg, s = o("WAWebUprPaymentRequest").parseUprPaymentInfo(l), d = o("WAWebFrontendMsgGetters").getChat(l.unsafe()), m = o("useWAWebHasOrderStatusUpdate").useWAWebHasOrderStatusUpdate(d, s == null ? void 0 : s.referenceId), p = o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(l);
		if (s == null) return null;
		var _ = o("WAWebMsgGetters").getSender(l.unsafe());
		if (!o("WAWebUprGating").isUprBubbleEnabledForSender(_)) return u.jsx(r("WAWebUnsupportedMessage"), {
			msg: o("WAWebGalaxyFlowsUtils").getInvalidatedFlowMessageFromHistorySync(l),
			displayAuthor: a,
			hideUpdateButton: !0
		});
		var f = ((t = (n = s.items) == null ? void 0 : n.length) != null ? t : 0) > 0, y = g(l), C = h({
			chat: d,
			info: s,
			msg: l,
			statusUpdatedFromPending: m
		}), b = C.actions, v = C.headerClick;
		return u.jsx(r("WAWebInteractiveBubble.react"), {
			msg: l,
			displayAuthor: a,
			displayType: i,
			header: f ? u.jsx(o("WAWebClickable.react").Clickable, {
				onClick: v,
				xstyle: c.clickable,
				children: u.jsx(o("WAWebUprPaymentBubbleLoadable").WAWebUprPaymentBubbleLoadable, {
					downloadHeaderMedia: p,
					headerMediaData: l.mediaData,
					msg: l,
					thumbnailUrl: y
				})
			}) : u.jsx(o("WAWebUprPaymentBubbleLoadable").WAWebUprPaymentBubbleLoadable, {
				downloadHeaderMedia: p,
				headerMediaData: l.mediaData,
				msg: l,
				thumbnailUrl: y
			}),
			actions: b
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
