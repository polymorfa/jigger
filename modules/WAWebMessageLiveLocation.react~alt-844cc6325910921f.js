__d("WAWebMessageLiveLocation.react", [
	"fbt",
	"WATimeUtils",
	"WAWebConfirmPopup.react",
	"WAWebDetailImage.react",
	"WAWebDisplayType",
	"WAWebElevatedPushNamesFlag",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebMap.react",
	"WAWebMessageAuthor.react",
	"WAWebMessageBubbleHiddenText.react",
	"WAWebMessageCaption.react",
	"WAWebMessageMeta.react",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useState, m = {
		paddingTop3: {
			paddingTop: "xyqdw3p",
			$$css: !0
		},
		paddingBottom5: {
			paddingBottom: "xs9asl8",
			$$css: !0
		},
		paddingTop7: {
			paddingTop: "xm7lytj",
			$$css: !0
		},
		paddingInlineStart6: {
			paddingInlineStart: "x25sj25",
			$$css: !0
		},
		paddingInline3: {
			paddingInlineStart: "x1djpfga",
			paddingInlineEnd: "x1im30kd",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	}, p = {
		caption: {
			boxSizing: "x9f619",
			maxWidth: "xaulysm",
			$$css: !0
		},
		captionAnnouncement: {
			maxWidth: "xmewjk2",
			$$css: !0
		},
		avatar: {
			position: "x10l6tqk",
			top: "x13vifvy",
			right: "x3m8u43",
			bottom: "x1ey2m1c",
			left: "xu96u03",
			width: "x187nhsf",
			height: "xn3w4p2",
			filter: "xkozzs",
			$$css: !0
		},
		thumbBody: {
			zIndex: "x1vjfegm",
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			flexBasis: "xdl72j9",
			WebkitTransition: "xtzlr6k",
			$$css: !0
		},
		hidden: {
			visibility: "xlshs6z",
			$$css: !0
		},
		metaWithCaption: {
			bottom: "xy1j3rs",
			position: "x10l6tqk",
			insetInlineEnd: "x11dcrhx",
			left: null,
			right: null,
			zIndex: "xhtitgo",
			$$css: !0
		}
	}, _ = 150, f = 270, g = 30, h = 40, y = 250, C = 474, b = _ + g + h;
	function v(t) {
		var n, a, i = t.displayAuthor, l = t.msg, u = t.quotedMsg, g = t.trusted, h = o("useWAWebMsgValues").useMsgValues(t.msg.id, [
			(n = o("WAWebMsgGetters")).getComment,
			(a = o("WAWebFrontendMsgGetters")).getDir,
			n.getFinalLat,
			n.getFinalLng,
			n.getIsGroupMsg,
			n.getIsPSA,
			n.getIsSentByMe,
			n.getLat,
			n.getLng,
			a.getRtl,
			a.getSenderObj,
			n.getSender,
			n.getShareDuration,
			n.getT
		]), b = h[0], v = h[1], S = h[2], R = h[3], L = h[4], E = h[5], k = h[6], I = h[7], T = h[8], D = h[9], x = h[10], $ = h[11], P = h[12], N = h[13], M = a.getChat(t.msg.unsafe()), w = d(!1), A = w[0], F = w[1], O = function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				tsNavigationData: {
					surface: "unknown",
					viewName: "live-location"
				},
				okText: r("WAWebFbtCommon")("OK"),
				onOK: o("WAWebModalManager").closeModalManager,
				children: s._(
					/*BTDS*/
					""
				)
			}));
		}, B = function() {
			F(!0);
		}, W = function() {
			return P == null ? N : N + P;
		}, q = !!b, U = o("WAWebDisplayType").isWideDisplay(t.displayType), V = i ? c.jsx("div", babelHelpers.extends({}, {
			0: { className: "x25sj25 xyqdw3p xs9asl8" },
			1: { className: "x25sj25 xyqdw3p xs9asl8 x1uc92m" }
		}[!!o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(M) << 0], { children: c.jsx(r("WAWebMessageAuthor.react"), {
			msg: l,
			contact: x,
			displayType: t.displayType
		}) })) : null, H = u ? c.jsx("div", {
			className: "xahult9",
			children: u
		}) : null, G = o("WATimeUtils").unixTime() >= W(), z = G && S !== void 0 && R !== void 0, j = I, K = T;
		z && (j = S, K = R);
		var Q = O, X = U ? C : f, Y = U ? y : _, J = { height: Y }, Z = c.jsxs("div", {
			className: "x1n2onr6 x78zum5 x6s0dn4 xl56j7k x6ikm8r x10wlt62 x1i282gy xx9ypkp",
			onClick: Q,
			style: J,
			children: [
				c.jsx("div", {
					className: "x1n2onr6",
					children: c.jsx(r("WAWebMap.react"), {
						lat: j,
						lng: K,
						width: X,
						height: Y,
						xstyle: p.thumbBody,
						linkify: !1,
						showMarker: !1,
						onLoad: B
					})
				}),
				c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.avatar, o("WDSMargins.stylex").wdsMargins.marginAuto, !A && p.hidden), { children: c.jsx(o("WAWebDetailImage.react").DetailImage, {
					id: $,
					size: 40,
					border: !0
				}) })),
				G && c.jsx("div", { className: "x10l6tqk x13vifvy x1ey2m1c xu96u03 xh8yej3 x5yr21d x1lliihq xki6t65" })
			]
		}), ee = s._(
			/*BTDS*/
			""
		), te = c.jsx("div", {
			className: "x1n2onr6 x1ey2m1c xu96u03 x1gnnpzl xexx8yu x1im30kd x18d9i69 x1djpfga x1bu39yj x11ecxm0 xd15eu0 xdpxx8g",
			onClick: Q,
			children: c.jsx("span", {
				className: "x1n2onr6 xndqk7f x1pg5gke xhslqc4 xxymvpz",
				children: ee
			})
		}), ne = q ? c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.caption, m.paddingTop7, o("WDSPaddings.stylex").wdsPaddings.paddingEnd4, m.paddingBottom5, m.paddingInlineStart6, U && p.captionAnnouncement), { children: c.jsx(r("WAWebMessageCaption.react"), {
			msg: l.unsafe(),
			trusted: g
		}) })) : null, re = c.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "end",
			xstyle: [q && p.metaWithCaption, !q && [m.paddingInline3, m.paddingTop3]],
			children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: l })
		});
		return c.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
			className: {
				0: "x1n2onr6 xaulysm xt0e3qv xyqdw3p x1im30kd xg8j3zb x1djpfga",
				2: "x1n2onr6 xt0e3qv xyqdw3p x1im30kd xg8j3zb x1djpfga xmewjk2",
				1: "x1n2onr6 xaulysm xyqdw3p x1im30kd xg8j3zb x1djpfga x1ypdohk",
				3: "x1n2onr6 xyqdw3p x1im30kd xg8j3zb x1djpfga xmewjk2 x1ypdohk"
			}[!!U << 1 | !!Q << 0],
			contact: x,
			msg: l.unsafe(),
			children: [
				V,
				H,
				Z,
				te,
				ne,
				re
			]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.MSG_HEIGHT = b, l.LiveLocation = v;
}), 226);
