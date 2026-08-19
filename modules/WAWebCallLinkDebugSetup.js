__d("WAWebCallLinkDebugSetup", [
	"WAWebDebugCallingGroupCalling",
	"WAWebDebugSetup",
	"asyncToGeneratorRuntime",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		(e == null ? void 0 : e.reload) !== !1 && window.location.reload();
	}
	function s(e) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = yield r("WAWebDebugCallingGroupCalling").callingGroupCallingABProp.set(!0);
			return e(t), n;
		}), u.apply(this, arguments);
	}
	s.doc = "Force the call link page into the lobby (camera preview). Sets enable_web_group_calling=1 and reloads (pass {reload: false} to skip the reload).";
	function c(e) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = yield r("WAWebDebugCallingGroupCalling").callingGroupCallingABProp.set(!1);
			return e(t), n;
		}), d.apply(this, arguments);
	}
	c.doc = "Force the call link page into JoinCallLite. Sets enable_web_group_calling=0 and reloads (pass {reload: false} to skip the reload).";
	function m(e) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = yield r("WAWebDebugCallingGroupCalling").callingGroupCallingABProp.read(), o = n != null && typeof n == "object" && n.configValue === "1", a = yield r("WAWebDebugCallingGroupCalling").callingGroupCallingABProp.set(!o);
			return e(t), a;
		}), p.apply(this, arguments);
	}
	m.doc = "Flip enable_web_group_calling between lobby and JoinCallLite, then reload (pass {reload: false} to skip the reload).";
	function _(e) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			yield r("WAWebDebugCallingGroupCalling").callingGroupCallingABProp.clear(), e(t);
		}), f.apply(this, arguments);
	}
	_.doc = "Delete the enable_web_group_calling override row, then reload to test the missing-cache fallback (a missing row resolves to disabled -> JoinCallLite).";
	function g() {
		return h.apply(this, arguments);
	}
	function h() {
		return h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield r("WAWebDebugCallingGroupCalling").callingGroupCallingABProp.read(), t = e != null && typeof e == "object" ? e.configValue : void 0, n = r("justknobx")._("3803");
			return {
				enableWebGroupCallingConfigValue: t != null ? t : "(unset — server value)",
				loggedInModeWouldBe: t === "1" ? "lobby" : "join_call_lite",
				isWebGroupCalling100Jk: n,
				note: "enable_web_group_calling only drives the logged-in branch (1 -> lobby, 0 -> JoinCallLite). Logged-out mode is chosen by JustKnobs + the server guest-redirect prop, which this tool cannot change. Reload after a change to apply it."
			};
		}), h.apply(this, arguments);
	}
	g.doc = "Report the current enable_web_group_calling override, the mode the logged-in branch would render, and the WGC-100 JustKnob.";
	function y() {
		o("WAWebDebugSetup").setupDebugGlobal();
		var e = {
			showLobby: s,
			showJoinCallLite: c,
			toggle: m,
			read: r("WAWebDebugCallingGroupCalling").callingGroupCallingABProp.read,
			reset: _,
			status: g
		};
		window.Debug.callLink = e;
	}
	l.setupCallLinkDebugGlobal = y;
}), 98);
