__d("WAWebMessageLocation.react", [
	"WALogger",
	"WAWebBizCtwaContext.react",
	"WAWebBizTemplateMessageFooter.react",
	"WAWebCopyPasteSelectable.react",
	"WAWebDisplayType",
	"WAWebElevatedPushNamesFlag",
	"WAWebExternalLink.react",
	"WAWebFrontendMsgGetters",
	"WAWebMap.react",
	"WAWebMapUtils",
	"WAWebMessageAuthor.react",
	"WAWebMessageBubbleHiddenText.react",
	"WAWebMessageCaption.react",
	"WAWebMessageForwardedIndicator.react",
	"WAWebMessageMeta.react",
	"WAWebMessageSpacerText.react",
	"WAWebMessageThumbShadeBottom.react",
	"WAWebMsgGetters",
	"WAWebMsgSelectors",
	"WAWebStopEvent",
	"WAWebURLUtils",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c = u || (u = o("react")), d = {
		paddingTop3: {
			paddingTop: "xyqdw3p",
			$$css: !0
		},
		paddingInlineStart6: {
			paddingInlineStart: "x25sj25",
			$$css: !0
		},
		paddingBottom5: {
			paddingBottom: "xs9asl8",
			$$css: !0
		},
		marginBottom3: {
			marginBottom: "xahult9",
			$$css: !0
		},
		paddingTop7: {
			paddingTop: "xm7lytj",
			$$css: !0
		}
	}, m = 150, p = 270, _ = 330, f = 250, g = 474, h = [
		"foursquare.com",
		"facebook.com",
		"maps.google.com"
	], y = {
		title: {
			display: "x1lliihq",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			fontSize: "x1f6kntn",
			fontWeight: "xo1l8bm",
			textOverflow: "xlyipyv",
			width: "xeq5yr9",
			whiteSpace: "xuxw1ft",
			textDecoration: "x1bvjpef x1lku1pv x11iimpl xbvygy2 x1wp9yj1 x1e2wovf",
			color: "x1ph7ams x17f7hit",
			backgroundColor: "xn69kzl",
			textUnderlineOffset: "xrys4gj xhmieyt",
			$$css: !0
		},
		text: {
			boxSizing: "x9f619",
			maxWidth: "xaulysm",
			textAlign: "x1yc453h",
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
		caption: {
			boxSizing: "x9f619",
			maxWidth: "x1xtabgy",
			$$css: !0
		}
	};
	function C(t) {
		var n, a, i = t.msg, l = o("useWAWebMsgValues").useMsgValues(t.msg.id, [
			(n = o("WAWebMsgGetters")).getCaption,
			n.getClientUrl,
			(a = o("WAWebFrontendMsgGetters")).getDir,
			n.getFooter,
			n.getId,
			n.getIsGroupMsg,
			n.getIsSentByMe,
			n.getLat,
			n.getLng,
			a.getRtl,
			a.getSenderObj,
			n.getType,
			n.getCtwaContext,
			n.getSupportsMessageFooter,
			n.getIsDynamicReplyButtonsMsg,
			a.getHasBodyOrFooter
		]), u = l[0], C = l[1], v = l[2], S = l[3], R = l[4], L = l[5], E = l[6], k = l[7], I = l[8], T = l[9], D = l[10], x = l[11], $ = l[12], P = l[13], N = l[14], M = l[15], w = a.getChat(t.msg.unsafe()), A = function() {
			var e = i.get("loc");
			if (i.get("loc")) return e = e.split("\n"), e.length === 2 ? {
				name: e[0],
				addr: e[1]
			} : { name: e };
		}, F = A(), O = F == null ? void 0 : F.name, B = o("WAWebMapUtils").getMapUrl({
			lat: k,
			lng: I,
			name: O
		}), W = C || B, q = r("WAWebURLUtils").isHttps(W), U = r("WAWebURLUtils").hostname(W), V = !h.some(function(e) {
			return U.includes(e);
		}), H = !N && (V || !!(q && F && !W.includes("javascript")));
		!q && W.toLowerCase().startsWith("javascript:") && o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Bad url: ", ""])), W).sendLogs("URL error");
		var G = H ? c.jsx(b, {
			pageUrl: W,
			msg: i,
			loc: F,
			isUntrusted: V
		}) : null, z = G != null || P && M ? null : c.jsx(r("WAWebMessageThumbShadeBottom.react"), {}), j = o("WAWebMsgSelectors").showForwarded(i), K = o("WAWebDisplayType").isWideDisplay(t.displayType), Q = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(w), X = (s || (s = r("stylex")))(d.paddingTop3, d.paddingInlineStart6, j ? o("WDSPaddings.stylex").wdsPaddings.paddingBottom0 : d.paddingBottom5, Q && o("WDSPaddings.stylex").wdsPaddings.paddingEnd4), Y = t.displayAuthor ? c.jsx("div", {
			className: X,
			children: c.jsx(r("WAWebMessageAuthor.react"), {
				msg: i,
				contact: D,
				displayType: t.displayType
			})
		}) : null, J = j ? c.jsx(r("WAWebMessageForwardedIndicator.react"), {
			msg: i.unsafe(),
			className: (s || (s = r("stylex")))(d.paddingTop3, o("WDSPaddings.stylex").wdsPaddings.paddingEnd0, d.paddingInlineStart6, t.displayAuthor ? o("WDSPaddings.stylex").wdsPaddings.paddingTop0 : d.paddingTop3)
		}) : null, Z = {
			0: "x1n2onr6 xaulysm xyqdw3p x1im30kd xg8j3zb x1djpfga",
			2: "x1n2onr6 xyqdw3p x1im30kd xg8j3zb x1djpfga xdduh5l",
			1: "x1n2onr6 xyqdw3p x1im30kd xg8j3zb x1djpfga xmewjk2",
			3: "x1n2onr6 xyqdw3p x1im30kd xg8j3zb x1djpfga xmewjk2"
		}[($ != null) << 1 | !!K << 0], ee = p;
		$ ? ee = _ : K && (ee = g);
		var te = K ? f : m, ne = { height: te }, re = t.quotedMsg ? c.jsx("div", {
			className: "xahult9",
			children: t.quotedMsg
		}) : null, oe, ae;
		return P && (oe = u ? c.jsx("div", babelHelpers.extends({}, (s || (s = r("stylex"))).props(y.caption, d.paddingTop7, o("WDSPaddings.stylex").wdsPaddings.paddingEnd4, d.paddingInlineStart6, d.paddingBottom5), { children: c.jsx(r("WAWebMessageCaption.react"), {
			msg: i.unsafe(),
			spacer: !S,
			trusted: t.trusted
		}) })) : null, ae = c.jsx(r("WAWebBizTemplateMessageFooter.react"), {
			dir: v,
			footer: S,
			isShown: P,
			msg: i.unsafe(),
			rtl: T,
			type: x,
			trusted: t.trusted
		})), c.jsx("div", { children: c.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
			className: Z,
			contact: D,
			msg: i.unsafe(),
			children: [
				Y,
				J,
				re,
				c.jsx(r("WAWebBizCtwaContext.react"), {
					msg: i.unsafe(),
					wrapperClass: s(o("WDSMargins.stylex").wdsMargins.marginTop0, o("WDSMargins.stylex").wdsMargins.marginEnd0, d.marginBottom3, o("WDSMargins.stylex").wdsMargins.marginStart0)
				}),
				c.jsxs(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
					className: "x1n2onr6 x78zum5 x6s0dn4 xl56j7k x6ikm8r x10wlt62 x1i282gy xx9ypkp xd15eu0 x11ecxm0",
					onClick: o("WAWebStopEvent").stopPropagation,
					plainText: B,
					selectable: !0,
					style: ne,
					children: [c.jsx(r("WAWebMap.react"), {
						lat: k,
						lng: I,
						width: ee,
						height: te,
						name: O,
						xstyle: y.thumbBody
					}), z]
				}),
				G,
				oe,
				ae,
				c.jsx("div", babelHelpers.extends({}, {
					0: { className: "x10l6tqk x11dcrhx xrb244j xhtitgo" },
					1: { className: "x10l6tqk xhtitgo x1inkcgm xy1j3rs" }
				}[!!G << 0], { children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: i }) }))
			]
		}) });
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.isUntrusted, n = e.loc, a = e.msg, i = e.pageUrl, l, u, m = r("WAWebURLUtils").hostname(i), p = t ? c.jsx("span", {
			className: "x1ncwhqj x1d3mw78 xthy82k",
			children: m
		}) : null;
		if (n != null && n.name && (!t && !i.includes("javascript") ? l = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
			xstyle: y.title,
			href: i,
			children: n.name
		}) : l = c.jsx("span", {
			className: "x1lliihq x6ikm8r x10wlt62 x1f6kntn xo1l8bm xlyipyv xeq5yr9 xuxw1ft",
			children: n.name
		})), n) {
			var _, f = {
				0: "x1pg5gke",
				1: "x1pg5gke x1lliihq"
			}[!!t << 0];
			u = ((_ = n.addr) != null ? _ : "") !== "" ? c.jsx(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
				className: f,
				selectable: !0,
				title: n.addr,
				children: n.addr
			}) : null;
		}
		return c.jsx("div", babelHelpers.extends({ "data-testid": "location-msg" }, (s || (s = r("stylex"))).props(y.text, d.paddingTop7, o("WDSPaddings.stylex").wdsPaddings.paddingEnd4, o("WDSPaddings.stylex").wdsPaddings.paddingBottom4, d.paddingInlineStart6), { children: c.jsxs(r("WAWebMessageSpacerText.react"), {
			msg: a.unsafe(),
			"data-id": a.id,
			children: [
				l,
				u,
				p
			]
		}) }));
	}
	b.displayName = b.name + " [from " + i.id + "]", l.PREVIEW_HEIGHT = m, l.Location = C;
}), 98);
