__d("WAWebGroupHoverCard.react", [
	"fbt",
	"WALogger",
	"WAWebBotUtils",
	"WAWebChatCollection",
	"WAWebChatGroupUtils",
	"WAWebChatlistUtils",
	"WAWebCmd",
	"WAWebContactGetters",
	"WAWebDetailImage.react",
	"WAWebEnvironment",
	"WAWebFindChatAction",
	"WAWebFrontendContactGetters",
	"WAWebName.react",
	"WAWebNoop",
	"WAWebStreamModel",
	"WAWebTeeLockBadge.react",
	"WAWebVoipStartCall",
	"WAWebWamEnumCallFromUi",
	"WAWebWamEnumLobbyEntryPointType",
	"WDSActionTile.react",
	"WDSActionTileGroup.react",
	"WDSIconIcCall.react",
	"WDSIconIcVideocam.react",
	"WDSIconWdsIcChat.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebContactValues",
	"useWAWebVoipIsCallingEnabledAndInited"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useCallback, m = 80;
	function p(e) {
		var t = o("react-compiler-runtime").c(36), n = e.chatWid, a = e.contact, i = e.onMouseEnter, l = e.onMouseLeave, u = e.source, d = u === void 0 ? "groupChatProfilePicture" : u, p;
		t[0] !== a.id ? (p = function() {
			return o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(a.id, "participant_click");
		}, t[0] = a.id, t[1] = p) : p = t[1];
		var f = p, g;
		t[2] !== n || t[3] !== f || t[4] !== d ? (g = function() {
			var e = f();
			e != null && o("WAWebFindChatAction").findOrCreateLatestChat(e, d).then(function(e) {
				var t = e.chat;
				if (t != null) {
					var r, a = n != null && (r = o("WAWebChatCollection").ChatCollection.get(n)) != null ? r : void 0;
					o("WAWebCmd").Cmd.chatInfoDrawer(t, a != null ? { sourceGroupChatOrNewsletter: a } : void 0);
				}
			}).catch(r("WAWebNoop"));
		}, t[2] = n, t[3] = f, t[4] = d, t[5] = g) : g = t[5];
		var h = g, y;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (y = [o("WAWebContactGetters").getNotifyName], t[6] = y) : y = t[6];
		var C = o("useWAWebContactValues").useContactValues(a.id, y), b = C[0], v = b != null ? "~" + b : null, S;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (S = s._(
			/*BTDS*/
			""
		), t[7] = S) : S = t[7];
		var R = S, L;
		t[8] !== a.id ? (L = o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(a.id), t[8] = a.id, t[9] = L) : L = t[9];
		var E = L, k;
		t[10] !== a.id || t[11] !== h ? (k = c.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: a.id,
			size: m,
			loadAnimation: !1,
			onClick: h,
			ariaLabel: R,
			tabIndex: 0
		}), t[10] = a.id, t[11] = h, t[12] = k) : k = t[12];
		var I = k, T;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (T = { className: "x1280gxy xlr9sxt xvvg52n xwd4zgb xq8v1ta x1o3a1rn x1p57kb1 xvpt6g3 xdx6fka xvtqlqk x1dz1jew" }, t[13] = T) : T = t[13];
		var D;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (D = { className: "x1ypdohk x78zum5 xl56j7k xcytdqz" }, t[14] = D) : D = t[14];
		var x;
		t[15] !== I || t[16] !== E ? (x = c.jsx("div", babelHelpers.extends({}, D, { children: E ? c.jsx(r("WAWebTeeLockBadge.react"), {
			size: "medium",
			children: I
		}) : I })), t[15] = I, t[16] = E, t[17] = x) : x = t[17];
		var $;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? ($ = { className: "x6s0dn4 x78zum5 xdt5ytf x1dbijih x1ned7t2 x2b8uid" }, t[18] = $) : $ = t[18];
		var P;
		t[19] !== a ? (P = c.jsx(r("WDSText.react"), {
			type: "Body1Emphasized",
			colorName: "contentDefault",
			children: c.jsx(o("WAWebName.react").Name, {
				contact: a,
				useLiftMeUp: !1,
				breakWord: !0,
				checkmarkLarge: !0
			})
		}), t[19] = a, t[20] = P) : P = t[20];
		var N;
		t[21] !== v ? (N = v != null && c.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: v
		}), t[21] = v, t[22] = N) : N = t[22];
		var M;
		t[23] !== P || t[24] !== N ? (M = c.jsxs("div", babelHelpers.extends({}, $, { children: [P, N] })), t[23] = P, t[24] = N, t[25] = M) : M = t[25];
		var w;
		t[26] === Symbol.for("react.memo_cache_sentinel") ? (w = { className: "x78zum5 xl56j7k x1de0gy" }, t[26] = w) : w = t[26];
		var A;
		t[27] !== a || t[28] !== f ? (A = c.jsx("div", babelHelpers.extends({}, w, { children: c.jsx(_, {
			contact: a,
			getContactId: f
		}) })), t[27] = a, t[28] = f, t[29] = A) : A = t[29];
		var F;
		return t[30] !== i || t[31] !== l || t[32] !== x || t[33] !== M || t[34] !== A ? (F = c.jsxs("div", babelHelpers.extends({}, T, {
			"data-testid": "group-hover-card",
			role: "group",
			onMouseEnter: i,
			onMouseLeave: l,
			children: [
				x,
				M,
				A
			]
		})), t[30] = i, t[31] = l, t[32] = x, t[33] = M, t[34] = A, t[35] = F) : F = t[35], F;
	}
	function _(t) {
		var n = t.contact, a = t.getContactId, i = o("useWAWebVoipIsCallingEnabledAndInited").useWAWebVoipIsCallingEnabledAndInited(), l = i.inited, u = d(function() {
			var e = a();
			e != null && o("WAWebChatlistUtils").openOrCreateLatestChat(e).catch(r("WAWebNoop"));
		}, [a]), m = d(function(t) {
			var n = a();
			n != null && (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: hover card: start 1:1 call, isVideo: ", ""])), t).sendLogs("hover-card-start-call"), o("WAWebVoipStartCall").startWAWebVoipCall(n, t, o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CONTACT_INFO, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED).catch(r("WAWebNoop")));
		}, [a]), p = o("WAWebFrontendContactGetters").getIsContactBlocked(n), _ = o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(n.id), f = (r("WAWebEnvironment").isWindows || l) && !p && !n.id.isBot() && o("WAWebStreamModel").Stream.displayInfo === o("WAWebStreamModel").StreamInfo.NORMAL, g = c.jsx(r("WDSActionTile.react"), {
			Icon: r("WDSIconWdsIcChat.react"),
			onPress: u,
			disabled: _,
			tooltip: s._(
				/*BTDS*/
				""
			),
			label: s._(
				/*BTDS*/
				""
			),
			testid: "hover-card-message-button"
		}, "message");
		return f ? c.jsxs(r("WDSActionTileGroup.react"), { children: [
			g,
			c.jsx(r("WDSActionTile.react"), {
				Icon: r("WDSIconIcVideocam.react"),
				onPress: function() {
					return m(!0);
				},
				label: s._(
					/*BTDS*/
					""
				),
				testid: "hover-card-video-button"
			}, "video"),
			c.jsx(r("WDSActionTile.react"), {
				Icon: r("WDSIconIcCall.react"),
				onPress: function() {
					return m(!1);
				},
				label: s._(
					/*BTDS*/
					""
				),
				testid: "hover-card-voice-button"
			}, "voice")
		] }) : g;
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = p;
}), 226);
