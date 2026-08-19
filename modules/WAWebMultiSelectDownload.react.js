__d("WAWebMultiSelectDownload.react", [
	"fbt",
	"WAWebChatGroupUtils",
	"WAWebEnvironment",
	"WAWebFrontendMsgGetters",
	"WAWebMediaHubMessageActionHandlers",
	"WAWebMiscGatingUtils",
	"WAWebMsgActionCanDownloadMsg",
	"WAWebTabOrder",
	"WDSIconIcDownload.react",
	"WDSMenuBarItem.react",
	"react",
	"react-compiler-runtime",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useState, d = { btnMargin: {
		marginInlineEnd: "xqf2s3x",
		$$css: !0
	} };
	function m(e) {
		var t = o("react-compiler-runtime").c(16), n = e.downloadButton, a = e.isMediaHub, i = e.onCancel, l = e.onDownload, m = e.selectedMessages, g = e.tabOrder, h = a === void 0 ? !1 : a, y = g === void 0 ? o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR : g, C;
		if (t[0] !== m) {
			var b;
			C = (b = m == null ? void 0 : m.getSelected()) != null ? b : [], t[0] = m, t[1] = C;
		} else C = t[1];
		var v = c(C), S = v[0], R = v[1], L;
		t[2] !== S ? (L = S.every(f), t[2] = S, t[3] = L) : L = t[3];
		var E = L, k = S.map(_), I = k.some(p), T = I && o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled(), D = S.length, x;
		t[4] !== m ? (x = function() {
			var e;
			R((e = m == null ? void 0 : m.getSelected()) != null ? e : []);
		}, t[4] = m, t[5] = x) : x = t[5], o("useWAWebListener").useListener(m, "all", x);
		var $ = n && !T;
		if (!$) return null;
		var P;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (P = r("WAWebEnvironment").isWindows ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[6] = P) : P = t[6];
		var N = P, M = !D || !E, w;
		t[7] !== h || t[8] !== S || t[9] !== i || t[10] !== l ? (w = function() {
			o("WAWebMediaHubMessageActionHandlers").handleMessageDownloadClick(S, i, h ? "media_hub" : void 0), l == null || l();
		}, t[7] = h, t[8] = S, t[9] = i, t[10] = l, t[11] = w) : w = t[11];
		var A;
		return t[12] !== M || t[13] !== w || t[14] !== y ? (A = u.jsx(r("WDSMenuBarItem.react"), {
			icon: r("WDSIconIcDownload.react"),
			tabOrder: y,
			disabled: M,
			title: N,
			onClick: w,
			marginInlineXstyle: d.btnMargin
		}), t[12] = M, t[13] = w, t[14] = y, t[15] = A) : A = t[15], A;
	}
	function p(e) {
		return o("WAWebChatGroupUtils").isSuspendedGroup(e);
	}
	function _(e) {
		return o("WAWebFrontendMsgGetters").getChat(e);
	}
	function f(e) {
		return o("WAWebMsgActionCanDownloadMsg").canDownloadMsg(e, !0) && e.mediaData;
	}
	l.default = m;
}), 226);
