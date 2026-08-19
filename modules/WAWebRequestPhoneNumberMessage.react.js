__d("WAWebRequestPhoneNumberMessage.react", [
	"fbt",
	"WAWebContactCollection",
	"WAWebDialpadGreenIcon.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebFrontendContactGetters",
	"WAWebFrontendMsgGetters",
	"WAWebMessageBubbleActions.react",
	"WAWebMessageBubbleHiddenText.react",
	"WAWebMessageMeta.react",
	"WAWebMessageSpacerText.react",
	"WAWebMessageTextBubble.react",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebSharePhoneNumberModal.react",
	"WAWebWamEnumPnhEntryPointType",
	"react",
	"react-compiler-runtime",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { paddingBottom5: {
		paddingBottom: "xs9asl8",
		$$css: !0
	} }, d = {
		container: {
			textAlign: "x2b8uid",
			position: "x1n2onr6",
			alignItems: "x6s0dn4",
			marginTop: "x1198e8h",
			marginInlineEnd: "x1lxpwgx",
			marginBottom: "xz62fqu",
			marginInlineStart: "xw01apr",
			borderStartStartRadius: "x13t61ll",
			borderStartEndRadius: "x1kchd1x",
			borderEndEndRadius: "x1u0fnx4",
			borderEndStartRadius: "xbxn0j6",
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		icon: {
			marginTop: "x1ok221b",
			marginInlineEnd: "xf6vk7d",
			marginBottom: "xu06os2",
			marginInlineStart: "x1hm9lzh",
			$$css: !0
		},
		text: {
			marginTop: "x1xmf6yo",
			marginInlineEnd: "x1xegmmw",
			marginBottom: "xyorhqc",
			marginInlineStart: "x1hm9lzh",
			$$css: !0
		}
	}, m = function() {
		o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebSharePhoneNumberModal.react").SharePhoneNumberRestrictedActionModal, { entryPoint: o("WAWebWamEnumPnhEntryPointType").PNH_ENTRY_POINT_TYPE.PN_REQUEST }));
	};
	function p(e) {
		var t = o("react-compiler-runtime").c(43), n = e.msg, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = [
			o("WAWebMsgGetters").getTo,
			o("WAWebMsgGetters").getIsSentByMe,
			o("WAWebFrontendMsgGetters").getSenderObj
		], t[0] = a) : a = t[0];
		var i = o("useWAWebMsgValues").useMsgValues(n.id, a), l = i[0], p = i[1], _ = i[2], f;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (f = u.jsx(o("WAWebDialpadGreenIcon.react").DialpadGreenIcon, {}), t[1] = f) : f = t[1];
		var g = f;
		if (p) {
			var h;
			if (t[2] !== l) {
				var y = o("WAWebContactCollection").ContactCollection.gadd(l);
				h = o("WAWebFrontendContactGetters").getIsMyContact(y) ? o("WAWebFrontendContactGetters").getFormattedName(y) : o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(y), t[2] = l, t[3] = h;
			} else h = t[3];
			var C = h, b;
			if (t[4] !== C) {
				var v;
				t[6] === Symbol.for("react.memo_cache_sentinel") ? (v = { className: "xk50ysn" }, t[6] = v) : v = t[6], b = s._(
					/*BTDS*/
					"",
					[s._param("person-name", u.jsx("span", babelHelpers.extends({}, v, { children: C })))]
				), t[4] = C, t[5] = b;
			} else b = t[5];
			var S = b, R;
			t[7] === Symbol.for("react.memo_cache_sentinel") ? (R = u.jsx(r("WAWebFlexItem.react"), {
				xstyle: d.icon,
				children: g
			}), t[7] = R) : R = t[7];
			var L;
			t[8] !== n ? (L = n.unsafe(), t[8] = n, t[9] = L) : L = t[9];
			var E;
			t[10] !== S || t[11] !== L ? (E = u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: d.container,
				children: [R, u.jsx(r("WAWebFlexItem.react"), {
					xstyle: d.text,
					children: u.jsx(r("WAWebMessageSpacerText.react"), {
						msg: L,
						children: S
					})
				})]
			}), t[10] = S, t[11] = L, t[12] = E) : E = t[12];
			var k;
			return t[13] !== n || t[14] !== E ? (k = u.jsx(r("WAWebMessageTextBubble.react"), {
				msg: n,
				displayAuthor: !1,
				testid: "request-phone-number-modal-sender",
				children: E
			}), t[13] = n, t[14] = E, t[15] = k) : k = t[15], k;
		}
		var I, T;
		t[16] !== _ ? (I = o("WAWebContactCollection").ContactCollection.gadd(_), T = o("WAWebFrontendContactGetters").getIsMyContact(I) ? o("WAWebFrontendContactGetters").getFormattedName(I) : o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(I), t[16] = _, t[17] = I, t[18] = T) : (I = t[17], T = t[18]);
		var D = T, x;
		if (t[19] !== D) {
			var $;
			t[21] === Symbol.for("react.memo_cache_sentinel") ? ($ = { className: "xk50ysn" }, t[21] = $) : $ = t[21], x = s._(
				/*BTDS*/
				"",
				[s._param("person-name", u.jsx("span", babelHelpers.extends({}, $, { children: D })))]
			), t[19] = D, t[20] = x;
		} else x = t[20];
		var P = x, N;
		t[22] === Symbol.for("react.memo_cache_sentinel") ? (N = s._(
			/*BTDS*/
			""
		), t[22] = N) : N = t[22];
		var M = N, w = I.shareOwnPn || I.isContactBlocked, A;
		t[23] !== w ? (A = u.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
			items: [{
				label: M,
				onClick: m,
				disabled: w,
				testid: "share-phone-number-button"
			}],
			theme: o("WAWebMessageBubbleActions.react").BubbleActionsTheme.NO_DIVIDER
		}), t[23] = w, t[24] = A) : A = t[24];
		var F = A, O, B;
		t[25] === Symbol.for("react.memo_cache_sentinel") ? (O = [d.container, c.paddingBottom5], B = u.jsx(r("WAWebFlexItem.react"), {
			xstyle: d.icon,
			children: g
		}), t[25] = O, t[26] = B) : (O = t[25], B = t[26]);
		var W = n.senderObj, q;
		t[27] !== n ? (q = n.unsafe(), t[27] = n, t[28] = q) : q = t[28];
		var U;
		t[29] !== P ? (U = u.jsx("div", { children: P }), t[29] = P, t[30] = U) : U = t[30];
		var V;
		t[31] === Symbol.for("react.memo_cache_sentinel") ? (V = { className: "x10l6tqk xxx7yvo x1c7jfne" }, t[31] = V) : V = t[31];
		var H;
		t[32] !== n ? (H = u.jsx("div", babelHelpers.extends({}, V, { children: u.jsx(o("WAWebMessageMeta.react").Meta, { msg: n }) })), t[32] = n, t[33] = H) : H = t[33];
		var G;
		t[34] !== n.senderObj || t[35] !== q || t[36] !== U || t[37] !== H ? (G = u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: O,
			children: [B, u.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
				xstyle: d.text,
				contact: W,
				msg: q,
				children: [U, H]
			})]
		}), t[34] = n.senderObj, t[35] = q, t[36] = U, t[37] = H, t[38] = G) : G = t[38];
		var z;
		return t[39] !== F || t[40] !== n || t[41] !== G ? (z = u.jsxs(r("WAWebMessageTextBubble.react"), {
			msg: n,
			displayAuthor: !1,
			hideMeta: !0,
			testid: "request-phone-number-modal-receiver",
			children: [G, F]
		}), t[39] = F, t[40] = n, t[41] = G, t[42] = z) : z = t[42], z;
	}
	l.default = p;
}), 226);
