__d("WAWebAttachMenuBarItem.react", [
	"fbt",
	"WAWebABProps",
	"WAWebAttachMenuPopup.react",
	"WAWebAttachmentMenuLogger",
	"WAWebCmd",
	"WAWebDrawerManagerContext",
	"WAWebDropdown.react",
	"WAWebIcAttachFileIcon.react",
	"WAWebMobilePlatforms",
	"WAWebPlusRoundedIcon.react",
	"WAWebStateUtils",
	"WAWebTabOrder",
	"WAWebUim",
	"WAWebUseBusinessProfile.react",
	"WDSMenuBarItem.react",
	"react",
	"react-compiler-runtime",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useImperativeHandle, p = d.useRef, _ = d.useState;
	function f(t) {
		var n = o("react-compiler-runtime").c(35), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, u = l.chat, d = l.questionReplyQuotedMessage, f = l.questionType, g = l.threadId, h = p(null), y = p(null), C = _(null), b = C[1], v;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (v = ["isBizBot3p"], n[3] = v) : v = n[3], o("WAWebUseBusinessProfile.react").useBusinessProfile(u.id, v);
		var S = o("WAWebDrawerManagerContext").useDrawerManagerContext("mid"), R;
		n[4] !== S ? (R = function(t) {
			var e, n = (e = S.existsDrawer()) != null ? e : !1;
			n && t.preventDefault();
		}, n[4] = S, n[5] = R) : R = n[5];
		var L = R, E;
		n[6] !== u || n[7] !== L || n[8] !== a.getComposeBoxEditorRef || n[9] !== a.getComposeContents || n[10] !== a.onMenuComplete || n[11] !== d || n[12] !== f || n[13] !== g ? (E = function(t) {
			if (t && L(t), y.current) {
				y.current.open();
				return;
			}
			h.current && b({
				menu: c.jsx(r("WAWebAttachMenuPopup.react"), {
					chat: o("WAWebStateUtils").unproxy(u),
					getComposeContents: a.getComposeContents,
					getComposeBoxEditorRef: a.getComposeBoxEditorRef,
					onMenuComplete: a.onMenuComplete,
					questionType: f,
					questionReplyQuotedMessage: d,
					threadId: g
				}),
				dirY: o("WAWebDropdown.react").DirY.TOP,
				dirX: o("WAWebDropdown.react").DirX.CENTER,
				type: o("WAWebDropdown.react").MenuType.AttachMenuPopup,
				flipOnRTL: !0,
				testid: "attach-menu-popup",
				anchor: h.current,
				offsetY: -25
			}), o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentMenuOpen(u);
		}, n[6] = u, n[7] = L, n[8] = a.getComposeBoxEditorRef, n[9] = a.getComposeContents, n[10] = a.onMenuComplete, n[11] = d, n[12] = f, n[13] = g, n[14] = E) : E = n[14];
		var k = E, I;
		n[15] !== k ? (I = function() {
			return { open: function() {
				k();
			} };
		}, n[15] = k, n[16] = I) : I = n[16], m(i, I);
		var T;
		n[17] !== u ? (T = function(t) {
			t === o("WAWebUim").DismissReason.UIM_INTERACTION && o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentMenuClose(u), b(null);
		}, n[17] = u, n[18] = T) : T = n[18];
		var D = T;
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_context_menu", D);
		var x = o("WAWebMobilePlatforms").isAndroidPrimary() && o("WAWebABProps").getABPropConfigValue("wa_web_match_primary_icons") ? o("WAWebIcAttachFileIcon.react").IcAttachFileIcon : o("WAWebPlusRoundedIcon.react").PlusRoundedIcon, $;
		n[19] !== u ? ($ = o("WAWebStateUtils").unproxy(u), n[19] = u, n[20] = $) : $ = n[20];
		var P;
		n[21] !== a.getComposeBoxEditorRef || n[22] !== a.getComposeContents || n[23] !== a.onMenuComplete || n[24] !== d || n[25] !== f || n[26] !== $ || n[27] !== g ? (P = c.jsx(r("WAWebAttachMenuPopup.react"), {
			chat: $,
			getComposeContents: a.getComposeContents,
			getComposeBoxEditorRef: a.getComposeBoxEditorRef,
			onMenuComplete: a.onMenuComplete,
			questionType: f,
			questionReplyQuotedMessage: d,
			threadId: g
		}), n[21] = a.getComposeBoxEditorRef, n[22] = a.getComposeContents, n[23] = a.onMenuComplete, n[24] = d, n[25] = f, n[26] = $, n[27] = g, n[28] = P) : P = n[28];
		var N = P, M;
		n[29] !== u ? (M = function() {
			o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentMenuOpen(u);
		}, n[29] = u, n[30] = M) : M = n[30];
		var w;
		n[31] === Symbol.for("react.memo_cache_sentinel") ? (w = s._(
			/*BTDS*/
			""
		), n[31] = w) : w = n[31];
		var A;
		return n[32] !== N || n[33] !== M ? (A = c.jsx(r("WDSMenuBarItem.react"), {
			imperativeRef: y,
			ref: h,
			onClick: M,
			icon: x,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_ATTACH_BUTTON,
			title: w,
			testid: "conversation-clip",
			wdsMenuToRender: N,
			menuAlign: "middle",
			menuPosition: "above"
		}), n[32] = N, n[33] = M, n[34] = A) : A = n[34], A;
	}
	l.default = f;
}), 226);
