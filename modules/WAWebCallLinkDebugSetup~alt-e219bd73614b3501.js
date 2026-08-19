__d("WAWebCallLinkDebugSetup", [
	"WAWebDebugCallingGroupCalling",
	"WAWebDebugSetup",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		(e == null ? void 0 : e.reload) !== !1 && window.location.reload();
	}
	async function s(t) {
		var n = await r("WAWebDebugCallingGroupCalling").callingGroupCallingABProp.set(!0);
		return e(t), n;
	}
	s.doc = "Force the call link page into the lobby (camera preview). Sets enable_web_group_calling=1 and reloads (pass {reload: false} to skip the reload).";
	async function u(t) {
		var n = await r("WAWebDebugCallingGroupCalling").callingGroupCallingABProp.set(!1);
		return e(t), n;
	}
	u.doc = "Force the call link page into JoinCallLite. Sets enable_web_group_calling=0 and reloads (pass {reload: false} to skip the reload).";
	async function c(t) {
		var n = await r("WAWebDebugCallingGroupCalling").callingGroupCallingABProp.read(), o = n != null && typeof n == "object" && n.configValue === "1", a = await r("WAWebDebugCallingGroupCalling").callingGroupCallingABProp.set(!o);
		return e(t), a;
	}
	c.doc = "Flip enable_web_group_calling between lobby and JoinCallLite, then reload (pass {reload: false} to skip the reload).";
	async function d(t) {
		await r("WAWebDebugCallingGroupCalling").callingGroupCallingABProp.clear(), e(t);
	}
	d.doc = "Delete the enable_web_group_calling override row, then reload to test the missing-cache fallback (a missing row resolves to disabled -> JoinCallLite).";
	async function m() {
		var e = await r("WAWebDebugCallingGroupCalling").callingGroupCallingABProp.read(), t = e != null && typeof e == "object" ? e.configValue : void 0, n = r("justknobx")._("3803");
		return {
			enableWebGroupCallingConfigValue: t != null ? t : "(unset — server value)",
			loggedInModeWouldBe: t === "1" ? "lobby" : "join_call_lite",
			isWebGroupCalling100Jk: n,
			note: "enable_web_group_calling only drives the logged-in branch (1 -> lobby, 0 -> JoinCallLite). Logged-out mode is chosen by JustKnobs + the server guest-redirect prop, which this tool cannot change. Reload after a change to apply it."
		};
	}
	m.doc = "Report the current enable_web_group_calling override, the mode the logged-in branch would render, and the WGC-100 JustKnob.";
	function p() {
		o("WAWebDebugSetup").setupDebugGlobal();
		var e = {
			showLobby: s,
			showJoinCallLite: u,
			toggle: c,
			read: r("WAWebDebugCallingGroupCalling").callingGroupCallingABProp.read,
			reset: d,
			status: m
		};
		window.Debug.callLink = e;
	}
	l.setupCallLinkDebugGlobal = p;
}), 98);
