__d("MAWSecureThreadNonAddressableContactBanner.react", [
	"fbt",
	"Int64Hooks",
	"LSMessagingThreadTypeUtil",
	"MWXCircleButton.react",
	"MWXIconCross",
	"MWXRow.react",
	"MWXRowItem.react",
	"MWXText.react",
	"MessengerWebUXLogger",
	"getMAWNonAddressableContactBannerStrings",
	"gkx",
	"react",
	"useMAWNonAddressableParticipant",
	"useMAWOverrideNonAddressableParticipantWithWAI"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = e.setHideComposerEditor, n = e.thread, a = r("useMAWNonAddressableParticipant")(n.threadKey), i = o("LSMessagingThreadTypeUtil").isGroup(n.threadType), l = a != null && !(i && r("gkx")("10382")) ? r("getMAWNonAddressableContactBannerStrings")(i, a) : null, d = r("useMAWOverrideNonAddressableParticipantWithWAI")({
			bannerFromOccam: l,
			isGroup: i,
			isSecure: !0,
			threadKey: n.threadKey
		}), m = c(!1), p = m[0], _ = m[1], f = r("MessengerWebUXLogger").useInteractionLogger(), g = o("Int64Hooks").useCallbackInt64(function() {
			_(!0), f == null || f({
				eventName: "non_addressable_contact_banner_dismissed",
				threadKey: n.threadKey,
				threadType: n.threadType
			});
		}, [
			f,
			n.threadKey,
			n.threadType
		]), h = i, y = h ? !p : !0, C = d != null && y, b = r("MessengerWebUXLogger").useImpressionLoggerRef({
			eventName: "non_addressable_contact_banner_rendered",
			threadKey: n.threadKey,
			threadType: n.threadType
		});
		return t(function() {
			return C ? !h : !1;
		}), C ? u.jsxs("div", {
			ref: b,
			className: "x13fuv20 x178xt8z x1n2onr6 x1ja2u2z x57kliw x1epquy7",
			children: [
				h ? u.jsx("div", {
					className: "x11dcrhx x10l6tqk xfr5jun x1vjfegm",
					children: u.jsx(r("MWXCircleButton.react"), {
						"aria-label": s._(
							/*BTDS*/
							""
						),
						color: "primary",
						icon: r("MWXIconCross"),
						onPress: g,
						size: 24
					})
				}) : null,
				u.jsx(r("MWXRow.react"), {
					align: "center",
					expanding: !0,
					paddingVertical: 12,
					spacingVertical: 0,
					testid: void 0,
					children: u.jsx(r("MWXRowItem.react"), { children: u.jsx(r("MWXText.react"), {
						color: "primary",
						isSemanticHeading: !0,
						type: "headlineEmphasized4",
						children: d == null ? void 0 : d.headline
					}) })
				}),
				u.jsx(r("MWXRow.react"), {
					align: "center",
					expanding: !0,
					paddingTop: 4,
					paddingVertical: 16,
					spacingVertical: 4,
					testid: void 0,
					children: u.jsx(r("MWXRowItem.react"), { children: u.jsx(r("MWXText.react"), {
						align: "center",
						color: "secondary",
						type: "body4",
						children: d == null ? void 0 : d.details
					}) })
				})
			]
		}) : null;
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
