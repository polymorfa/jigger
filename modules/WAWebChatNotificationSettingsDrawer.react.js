__d("WAWebChatNotificationSettingsDrawer.react", [
	"fbt",
	"WAWebABProps",
	"WAWebAuraGating",
	"WAWebAuraRingtoneChatToneLoadable",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebMuteAllMentionsRow.react",
	"WAWebMuteCallsRow.react",
	"WAWebMuteRow.react",
	"WAWebNotifyForRow.react",
	"WAWebVoipGatingUtils",
	"cr:7288",
	"cr:7899",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		row: {
			paddingInlineStart: "x106a9eq",
			paddingInlineEnd: "x1xnnf8n",
			paddingTop: "x889kno",
			paddingBottom: "x1a8lsjc",
			marginInlineStart: "x1lziwak",
			$$css: !0
		},
		sectionTitle: {
			paddingTop: "x1cnzs8",
			paddingBottom: "xx6bls6",
			paddingInlineStart: "x1c1uobl",
			paddingInlineEnd: "xyri2b",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	};
	function d() {
		return s._(
			/*BTDS*/
			""
		);
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(22), a = e.chat, i = e.onNotifyForClick, l;
		t[0] !== a.id ? (l = !a.id.isNewsletter() && (a.id.isGroup() ? o("WAWebVoipGatingUtils").isGroupCallingEnabled() : o("WAWebVoipGatingUtils").isCallingEnabled()), t[0] = a.id, t[1] = l) : l = t[1];
		var d = l, m;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
			/*BTDS*/
			""
		), t[2] = m) : m = t[2];
		var p, _;
		t[3] !== a ? (p = u.jsx(r("WAWebMuteRow.react"), {
			chat: a,
			mute: a.mute,
			showIcon: !1,
			containerXstyle: c.row
		}), _ = o("WAWebABProps").getABPropConfigValue("enable_mention_everyone_receiver_web") && u.jsx(r("WAWebMuteAllMentionsRow.react"), {
			chat: a,
			mute: a.mute,
			containerXstyle: c.row
		}), t[3] = a, t[4] = p, t[5] = _) : (p = t[4], _ = t[5]);
		var f;
		t[6] !== a || t[7] !== i ? (f = o("WAWebABProps").getABPropConfigValue("wa_web_notify_for") && u.jsx(r("WAWebNotifyForRow.react"), {
			chat: a,
			onNotifyForClick: i,
			containerXstyle: c.row
		}), t[6] = a, t[7] = i, t[8] = f) : f = t[8];
		var g;
		t[9] !== a ? (g = n("cr:7288") && n("cr:7899") && n("cr:7288").isCustomNotificationTonesEnabled() && u.jsx(n("cr:7899"), { chat: a }), t[9] = a, t[10] = g) : g = t[10];
		var h;
		t[11] !== p || t[12] !== _ || t[13] !== f || t[14] !== g ? (h = u.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			testid: "chat-notification-settings-messages-section",
			title: m,
			titleXStyle: c.sectionTitle,
			theme: "padding-no-vertical",
			children: [
				p,
				_,
				f,
				g
			]
		}), t[11] = p, t[12] = _, t[13] = f, t[14] = g, t[15] = h) : h = t[15];
		var y;
		t[16] !== a || t[17] !== d ? (y = d && u.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			testid: "chat-notification-settings-calls-section",
			title: s._(
				/*BTDS*/
				""
			),
			titleXStyle: c.sectionTitle,
			theme: "padding-no-vertical",
			children: [u.jsx(r("WAWebMuteCallsRow.react"), {
				chat: a,
				mute: a.mute,
				showIcon: !1,
				containerXstyle: c.row
			}), r("WAWebAuraGating").isRingtonesBenefitActive() && u.jsx(o("WAWebAuraRingtoneChatToneLoadable").WAWebAuraRingtoneChatToneLoadable, { chat: a })]
		}), t[16] = a, t[17] = d, t[18] = y) : y = t[18];
		var C;
		return t[19] !== h || t[20] !== y ? (C = u.jsxs(u.Fragment, { children: [h, y] }), t[19] = h, t[20] = y, t[21] = C) : C = t[21], C;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(11), n = e.chat, a = e.onClose, i = e.onNotifyForClick, l = e.ref, s;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (s = {
			surface: "unknown",
			viewName: "chat-notification-settings"
		}, t[0] = s) : s = t[0];
		var c;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (c = d(), t[1] = c) : c = t[1];
		var p;
		t[2] !== a ? (p = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			testid: "drawer-chat-notification-settings",
			title: c,
			onBack: a,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			focusBackOrCancel: !0
		}), t[2] = a, t[3] = p) : p = t[3];
		var _;
		t[4] !== n || t[5] !== i ? (_ = u.jsx(r("WAWebDrawerBody.react"), { children: u.jsx(m, {
			chat: n,
			onNotifyForClick: i
		}) }), t[4] = n, t[5] = i, t[6] = _) : _ = t[6];
		var f;
		return t[7] !== l || t[8] !== p || t[9] !== _ ? (f = u.jsxs(r("WAWebDrawer.react"), {
			ref: l,
			tsNavigationData: s,
			children: [p, _]
		}), t[7] = l, t[8] = p, t[9] = _, t[10] = f) : f = t[10], f;
	}
	l.default = p;
}), 226);
