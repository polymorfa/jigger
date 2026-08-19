__d("WAWebAutoUpdaterUtils", [
	"WALogger",
	"WAWebCallCollection",
	"WAWebChatCollection",
	"WAWebFrontendChatGetters",
	"WAWebMsgCollection",
	"WAWebNetworkStatus",
	"WAWebUpdater"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p = !1, _ = null, f = 60 * 1e3;
	function g() {
		p && (document.removeEventListener("visibilitychange", v), r("WAWebCallCollection").off("change:activeCall", v)), p = !1, _ != null && (window.clearTimeout(_), _ = null);
	}
	function h() {
		_ != null && (window.clearTimeout(_), _ = null);
	}
	async function y() {
		return await r("WAWebNetworkStatus").checkOnline(), !navigator.onLine || !r("WAWebNetworkStatus").online;
	}
	function C() {
		h(), _ = window.setTimeout(async function() {
			if (_ = null, await y()) {
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[Auto-refresh] skip update: offline"])));
				return;
			}
			o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[Auto-refresh] Updater: Updating dev-web."]))), document.removeEventListener("visibilitychange", v), r("WAWebCallCollection").off("change:activeCall", v), p = !1, o("WAWebUpdater").Updater.update({
				belowHard: 0,
				belowSoft: !1
			}).catch(function(e) {
				o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Updater: hard update failed with ", ""])), e).sendLogs("Auto refresh failed");
			});
		}, f);
	}
	function b() {
		return r("WAWebCallCollection").activeCall != null;
	}
	async function v() {
		if (document.hidden && !o("WAWebMsgCollection").MsgCollection.hasUnsentMessages() && !S() && !b()) {
			if (await y()) {
				o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[Auto-refresh] skip: offline"]))), h();
				return;
			}
			o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[Auto-refresh] conditions met, starting 1min timer"]))), C();
		} else {
			var e = o("WAWebMsgCollection").MsgCollection.hasUnsentMessages(), t = S(), n = b();
			o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
				"[Auto-refresh] skip: hidden=",
				" unsent=",
				" draft=",
				" call=",
				""
			])), document.hidden, e, t, n), h();
		}
	}
	function S() {
		var e = o("WAWebChatCollection").ChatCollection.getActive();
		return e != null && o("WAWebFrontendChatGetters").getHasDraftMessage(e);
	}
	async function R() {
		p || (document.addEventListener("visibilitychange", v), r("WAWebCallCollection").on("change:activeCall", v), p = !0), await v();
	}
	l.__resetListenerForTesting = g, l.autoRefreshWhenHidden = R;
}), 98);
