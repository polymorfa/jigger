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
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(56), a = t.displayAuthor, i = t.msg, l = t.quotedMsg, u = t.trusted, g;
		if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
			var h;
			g = [
				(h = o("WAWebMsgGetters")).getComment,
				o("WAWebFrontendMsgGetters").getDir,
				h.getFinalLat,
				h.getFinalLng,
				h.getIsGroupMsg,
				h.getIsPSA,
				h.getIsSentByMe,
				h.getLat,
				h.getLng,
				o("WAWebFrontendMsgGetters").getRtl,
				o("WAWebFrontendMsgGetters").getSenderObj,
				h.getSender,
				h.getShareDuration,
				h.getT
			], n[0] = g;
		} else g = n[0];
		var b = o("useWAWebMsgValues").useMsgValues(t.msg.id, g), v = b[0], R = b[2], L = b[3], E = b[7], k = b[8], I = b[10], T = b[11], D = b[12], x = b[13], $ = o("WAWebFrontendMsgGetters").getChat(t.msg.unsafe()), P = d(!1), N = P[0], M = P[1], w = S, A;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (A = function() {
			M(!0);
		}, n[1] = A) : A = n[1];
		var F = A, O;
		n[2] !== D || n[3] !== x ? (O = function() {
			return D == null ? x : x + D;
		}, n[2] = D, n[3] = x, n[4] = O) : O = n[4];
		var B = O, W = !!v, q = o("WAWebDisplayType").isWideDisplay(t.displayType), U = a ? c.jsx("div", babelHelpers.extends({}, {
			0: { className: "x25sj25 xyqdw3p xs9asl8" },
			1: { className: "x25sj25 xyqdw3p xs9asl8 x1uc92m" }
		}[!!o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled($) << 0], { children: c.jsx(r("WAWebMessageAuthor.react"), {
			msg: i,
			contact: I,
			displayType: t.displayType
		}) })) : null, V;
		n[5] !== l ? (V = l ? c.jsx("div", {
			className: "xahult9",
			children: l
		}) : null, n[5] = l, n[6] = V) : V = n[6];
		var H = V, G = o("WATimeUtils").unixTime() >= B(), z = G && R !== void 0 && L !== void 0, j = E, K = k;
		z && (j = R, K = L);
		var Q = w, X = q ? C : f, Y = q ? y : _, J;
		n[7] !== Y ? (J = { height: Y }, n[7] = Y, n[8] = J) : J = n[8];
		var Z = J, ee;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (ee = "x1n2onr6 x78zum5 x6s0dn4 xl56j7k x6ikm8r x10wlt62 x1i282gy xx9ypkp", n[9] = ee) : ee = n[9];
		var te;
		n[10] === Symbol.for("react.memo_cache_sentinel") ? (te = { className: "x1n2onr6" }, n[10] = te) : te = n[10];
		var ne;
		n[11] !== Y || n[12] !== j || n[13] !== K || n[14] !== X ? (ne = c.jsx("div", babelHelpers.extends({}, te, { children: c.jsx(r("WAWebMap.react"), {
			lat: j,
			lng: K,
			width: X,
			height: Y,
			xstyle: p.thumbBody,
			linkify: !1,
			showMarker: !1,
			onLoad: F
		}) })), n[11] = Y, n[12] = j, n[13] = K, n[14] = X, n[15] = ne) : ne = n[15];
		var re;
		n[16] !== N ? (re = (e || (e = r("stylex"))).props(p.avatar, o("WDSMargins.stylex").wdsMargins.marginAuto, !N && p.hidden), n[16] = N, n[17] = re) : re = n[17];
		var oe;
		n[18] !== T ? (oe = c.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: T,
			size: 40,
			border: !0
		}), n[18] = T, n[19] = oe) : oe = n[19];
		var ae;
		n[20] !== re || n[21] !== oe ? (ae = c.jsx("div", babelHelpers.extends({}, re, { children: oe })), n[20] = re, n[21] = oe, n[22] = ae) : ae = n[22];
		var ie;
		n[23] !== G ? (ie = G && c.jsx("div", { className: "x10l6tqk x13vifvy x1ey2m1c xu96u03 xh8yej3 x5yr21d x1lliihq xki6t65" }), n[23] = G, n[24] = ie) : ie = n[24];
		var le;
		n[25] !== Z || n[26] !== ae || n[27] !== ie || n[28] !== ne ? (le = c.jsxs("div", {
			className: ee,
			onClick: Q,
			style: Z,
			children: [
				ne,
				ae,
				ie
			]
		}), n[25] = Z, n[26] = ae, n[27] = ie, n[28] = ne, n[29] = le) : le = n[29];
		var se = le, ue;
		n[30] === Symbol.for("react.memo_cache_sentinel") ? (ue = s._(
			/*BTDS*/
			""
		), n[30] = ue) : ue = n[30];
		var ce = ue, de;
		n[31] === Symbol.for("react.memo_cache_sentinel") ? (de = { className: "x1n2onr6 x1ey2m1c xu96u03 x1gnnpzl xexx8yu x1im30kd x18d9i69 x1djpfga x1bu39yj x11ecxm0 xd15eu0 xdpxx8g" }, n[31] = de) : de = n[31];
		var me;
		n[32] === Symbol.for("react.memo_cache_sentinel") ? (me = c.jsx("div", babelHelpers.extends({}, de, {
			onClick: Q,
			children: c.jsx("span", {
				className: "x1n2onr6 xndqk7f x1pg5gke xhslqc4 xxymvpz",
				children: ce
			})
		})), n[32] = me) : me = n[32];
		var pe = me, _e = W ? c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.caption, m.paddingTop7, o("WDSPaddings.stylex").wdsPaddings.paddingEnd4, m.paddingBottom5, m.paddingInlineStart6, q && p.captionAnnouncement), { children: c.jsx(r("WAWebMessageCaption.react"), {
			msg: i.unsafe(),
			trusted: u
		}) })) : null, fe = W && p.metaWithCaption, ge;
		n[33] !== W ? (ge = !W && [m.paddingInline3, m.paddingTop3], n[33] = W, n[34] = ge) : ge = n[34];
		var he;
		n[35] !== fe || n[36] !== ge ? (he = [fe, ge], n[35] = fe, n[36] = ge, n[37] = he) : he = n[37];
		var ye;
		n[38] !== i ? (ye = c.jsx(o("WAWebMessageMeta.react").Meta, { msg: i }), n[38] = i, n[39] = ye) : ye = n[39];
		var Ce;
		n[40] !== he || n[41] !== ye ? (Ce = c.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "end",
			xstyle: he,
			children: ye
		}), n[40] = he, n[41] = ye, n[42] = Ce) : Ce = n[42];
		var be = Ce, ve = r("WAWebMessageBubbleHiddenText.react"), Se = {
			0: "x1n2onr6 xaulysm xt0e3qv xyqdw3p x1im30kd xg8j3zb x1djpfga",
			2: "x1n2onr6 xt0e3qv xyqdw3p x1im30kd xg8j3zb x1djpfga xmewjk2",
			1: "x1n2onr6 xaulysm xyqdw3p x1im30kd xg8j3zb x1djpfga x1ypdohk",
			3: "x1n2onr6 xyqdw3p x1im30kd xg8j3zb x1djpfga xmewjk2 x1ypdohk"
		}[!!q << 1 | !!Q << 0], Re;
		n[43] !== i ? (Re = i.unsafe(), n[43] = i, n[44] = Re) : Re = n[44];
		var Le;
		return n[45] !== ve || n[46] !== U || n[47] !== _e || n[48] !== se || n[49] !== be || n[50] !== H || n[51] !== I || n[52] !== pe || n[53] !== Se || n[54] !== Re ? (Le = c.jsxs(ve, {
			className: Se,
			contact: I,
			msg: Re,
			children: [
				U,
				H,
				se,
				pe,
				_e,
				be
			]
		}), n[45] = ve, n[46] = U, n[47] = _e, n[48] = se, n[49] = be, n[50] = H, n[51] = I, n[52] = pe, n[53] = Se, n[54] = Re, n[55] = Le) : Le = n[55], Le;
	}
	function S() {
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
	}
	l.MSG_HEIGHT = b, l.LiveLocation = v;
}), 226);
