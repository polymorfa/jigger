__d("MAWSecureThreadDetail.react", [
	"CometPlaceholder.react",
	"ComponentMountUnmountSubspanLogger.react",
	"E2EEMessagingLinkContext.react",
	"I64",
	"MAWMessageList.react",
	"cr:1683",
	"cr:19886",
	"cr:9975",
	"gkx",
	"react",
	"shouldRenderMAWFloatingRestoreBanner",
	"useReStore",
	"useSecureThreadDetailGetDevices"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useState;
	function f(e, t) {}
	var g = (e = n("cr:1683")) != null ? e : f;
	function h(e) {
		var t = e.cutoverOpenThread, a = e.entryPoint, i = e.messageListRef, l = e.thread, c = (s || (s = r("useReStore")))();
		r("useSecureThreadDetailGetDevices")(l, c);
		var m = _(!0), f = m[0], h = m[1], y = _(null), C = y[0], b = y[1], v = r("gkx")("1706") === !0;
		g(c, l.threadKey);
		var S = p(function(e) {
			b(function(t) {
				return t != null && (u || (u = o("I64"))).equal(t.threadKey, l.threadKey) && t.isAboveLatestVisibilityPlaceholder === e ? t : {
					isAboveLatestVisibilityPlaceholder: e,
					threadKey: l.threadKey
				};
			});
		}, [l.threadKey]), R = C != null && (u || (u = o("I64"))).equal(C.threadKey, l.threadKey) ? C.isAboveLatestVisibilityPlaceholder : !1, L = !f && R;
		return d.jsxs("div", babelHelpers.extends({}, {
			0: { className: "x78zum5 xdt5ytf x1iyjqo2 x2lwn1j" },
			1: { className: "x78zum5 xdt5ytf x1iyjqo2 x2lwn1j x1n2onr6" }
		}[!!v << 0], { children: [
			d.jsx(r("CometPlaceholder.react"), {
				fallback: null,
				name: "MAWCutoverEncryptedBackupsBanner",
				children: n("cr:19886") != null && r("shouldRenderMAWFloatingRestoreBanner")(v, t) ? d.jsx(n("cr:19886"), { isShown: L }) : null
			}),
			d.jsx(r("CometPlaceholder.react"), {
				fallback: null,
				name: "MAWVisibilityRestoreChatTabBanner",
				children: n("cr:9975") != null && d.jsx(n("cr:9975"), { isShown: L })
			}),
			d.jsxs(o("E2EEMessagingLinkContext.react").E2EEMessagingLinkProvider, {
				inThread: !0,
				isSecure: !0,
				children: [d.jsx(r("ComponentMountUnmountSubspanLogger.react"), { description: "MAWSecureThreadDetail" }), d.jsx(r("MAWMessageList.react"), {
					cutoverOpenThread: t,
					entryPoint: a,
					isAboveLatestVisibilityPlaceholder: R,
					onLatestVisibilityPlaceholderPositionChange: S,
					onScrollToBottom: function(t) {
						return h(t);
					},
					ref: i,
					thread: l
				})]
			})
		] }));
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 98);
