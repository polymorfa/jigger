__d("useWAWebWaitingRoomState", [
	"WAWebCallCollection",
	"WAWebVoipEventConstants",
	"WAWebVoipStackInterface",
	"WAWebWaitingRoomNameFormat",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useCallback, c = s.useMemo, d = [];
	function m() {
		var e = o("react-compiler-runtime").c(8), t = r("WAWebCallCollection").activeCall, n, a;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (n = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.WAITING_ROOM_STATE), a = function() {
			var e, n, r;
			return [
				(e = t == null ? void 0 : t.waitingRoomUsersCount) != null ? e : 0,
				(n = t == null ? void 0 : t.isWaitingRoomAdmin) != null ? n : !1,
				(r = t == null ? void 0 : t.waitingRoomUsers) != null ? r : d
			];
		}, e[0] = n, e[1] = a) : (n = e[0], a = e[1]);
		var i = r("useWAWebEventTargetValue")(t, n, a), l = i[0], s = i[1], u = i[2], c = u[0], m;
		e[2] !== c ? (m = c != null ? o("WAWebWaitingRoomNameFormat").getWaitingRoomUserDisplayName(c) : "", e[2] = c, e[3] = m) : m = e[3];
		var _ = m, f = g, h = p, y;
		return e[4] !== _ || e[5] !== s || e[6] !== l ? (y = {
			waitingRoomUsersCount: l,
			isWaitingRoomAdmin: s,
			firstWaitingRoomUserName: _,
			handleWaitingRoomApprove: f,
			handleWaitingRoomDeny: h
		}, e[4] = _, e[5] = s, e[6] = l, e[7] = y) : y = e[7], y;
	}
	function p() {
		_();
	}
	function _() {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e, t = (e = r("WAWebCallCollection").activeCall) == null || (e = e.waitingRoomUsers) == null ? void 0 : e[0];
			if (t != null) {
				var n = yield o("WAWebVoipStackInterface").getVoipStackInterface();
				n != null && n.type === "web" && (yield n.waitingRoomDeny(t.toString({ legacy: !0 })));
			}
		}), f.apply(this, arguments);
	}
	function g() {
		h();
	}
	function h() {
		return y.apply(this, arguments);
	}
	function y() {
		return y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e, t = (e = r("WAWebCallCollection").activeCall) == null || (e = e.waitingRoomUsers) == null ? void 0 : e[0];
			if (t != null) {
				var n = yield o("WAWebVoipStackInterface").getVoipStackInterface();
				n != null && n.type === "web" && (yield n.waitingRoomAdmit(t.toString({ legacy: !0 })));
			}
		}), y.apply(this, arguments);
	}
	l.default = m;
}), 98);
