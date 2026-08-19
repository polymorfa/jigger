__d("WAWebMuteCallsRow.react", [
	"fbt",
	"WAWebChatGetters",
	"WAWebChatInfoDrawerRow.react",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebMuteGetters",
	"WAWebMutePopup.react",
	"WAWebStateUtils",
	"WDSIconIcCall.react",
	"WDSSwitch.react",
	"react",
	"react-compiler-runtime",
	"useWAWebChatValues",
	"useWAWebMuteValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = 0;
	function d(e) {
		var t = o("react-compiler-runtime").c(20), n = e.chat, a = e.containerXstyle, i = e.mute, l = e.showIcon, d = l === void 0 ? !0 : l, m;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (m = [o("WAWebChatGetters").getIsGroup], t[0] = m) : m = t[0];
		var p = o("useWAWebChatValues").useChatValues(n.id, m), _ = p[0], f;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (f = [o("WAWebMuteGetters").getIsCallMuted], t[1] = f) : f = t[1];
		var g = o("useWAWebMuteValues").useMuteValues(i.id, f), h = g[0], y;
		t[2] !== i ? (y = function() {
			o("WAWebStateUtils").unproxy(i).muteCall(c), o("WAWebModalManager").ModalManager.close();
		}, t[2] = i, t[3] = y) : y = t[3];
		var C = y, b;
		t[4] !== _ || t[5] !== C ? (b = function() {
			var e = _ ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				onOK: C,
				okText: s._(
					/*BTDS*/
					""
				),
				onCancel: o("WAWebModalManager").closeModalManager,
				cancelText: s._(
					/*BTDS*/
					""
				),
				tsNavigationData: {
					surface: "unknown",
					viewName: "unmute-calls-chat"
				},
				children: e
			}));
		}, t[4] = _, t[5] = C, t[6] = b) : b = t[6];
		var v = b, S;
		t[7] !== _ || t[8] !== i ? (S = function() {
			var e = s._(
				/*BTDS*/
				""
			), t = _ ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebMutePopup.react"), {
				title: e,
				mute: i,
				onMute: function(t) {
					o("WAWebStateUtils").unproxy(i).muteCall(t);
				},
				children: t
			}), { transition: "modal" });
		}, t[7] = _, t[8] = i, t[9] = S) : S = t[9];
		var R = S, L = h ? v : R, E;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (E = s._(
			/*BTDS*/
			""
		), t[10] = E) : E = t[10];
		var k = E, I;
		t[11] !== h ? (I = u.jsx(r("WDSSwitch.react"), {
			tabIndex: -1,
			"aria-label": "",
			value: h
		}), t[11] = h, t[12] = I) : I = t[12];
		var T = I, D;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (D = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: k }), t[13] = D) : D = t[13];
		var x = D, $;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? ($ = u.jsx(r("WDSIconIcCall.react"), {}), t[14] = $) : $ = t[14];
		var P = $, N = d ? P : null, M;
		return t[15] !== a || t[16] !== T || t[17] !== L || t[18] !== N ? (M = u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
			icon: N,
			testid: "block-mute-calls",
			side: T,
			onClick: L,
			title: x,
			containerXstyle: a
		}), t[15] = a, t[16] = T, t[17] = L, t[18] = N, t[19] = M) : M = t[19], M;
	}
	l.default = d;
}), 226);
