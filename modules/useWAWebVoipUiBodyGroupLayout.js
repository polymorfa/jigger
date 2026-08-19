__d("useWAWebVoipUiBodyGroupLayout", [
	"WALogger",
	"WAWebVoipActivityTracker",
	"WAWebVoipStackInterface",
	"WAWebVoipWaCallEnums",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = u.useCallback, d = u.useEffect, m = u.useState, p = null, _ = null, f = new Set();
	function g(e) {
		_ = e;
		for (var t of f) t();
	}
	var h = null;
	function y(t, r) {
		var a = m(function() {
			var e, n, r = t;
			return r != null && r !== "" && p !== r && (p = r, _ = null, h = null), (e = (n = _) == null ? void 0 : n.layoutMode) != null ? e : "grid";
		}), i = a[0], l = a[1], s = m(function() {
			var e, t;
			return (e = (t = _) == null ? void 0 : t.pinnedParticipantJid) != null ? e : null;
		}), u = s[0], y = s[1], C = m(function() {
			var e, t;
			return (e = (t = _) == null ? void 0 : t.activeOverride) != null ? e : null;
		}), b = C[0], v = C[1], S = m(function() {
			var e, t;
			return (e = (t = _) == null ? void 0 : t.layoutModeBeforeScreenShare) != null ? e : null;
		}), R = S[0], L = S[1], E = m(function() {
			var e, t;
			return (e = (t = _) == null ? void 0 : t.pinnedParticipantBeforeScreenShare) != null ? e : null;
		}), k = E[0], I = E[1], T = m(function() {
			var e, t;
			return (e = (t = _) == null ? void 0 : t.layoutModeBeforePin) != null ? e : null;
		}), D = T[0], x = T[1], $ = m(function() {
			var e, t;
			return (e = (t = _) == null ? void 0 : t.userViewIntent) != null ? e : o("WAWebVoipWaCallEnums").UiViewMode.Gallery;
		}), P = $[0], N = $[1];
		d(function() {
			var e = t;
			e != null && e !== "" && p === e && g({
				layoutMode: i,
				pinnedParticipantJid: u,
				activeOverride: b,
				layoutModeBeforeScreenShare: R,
				pinnedParticipantBeforeScreenShare: k,
				layoutModeBeforePin: D,
				userViewIntent: P
			});
		}, [
			i,
			u,
			b,
			R,
			k,
			D,
			P,
			t
		]), d(function() {
			var e = function() {
				var e = t;
				if (!(e == null || e === "" || p !== e)) {
					var n = _;
					n != null && (l(n.layoutMode), y(n.pinnedParticipantJid), v(n.activeOverride), L(n.layoutModeBeforeScreenShare), I(n.pinnedParticipantBeforeScreenShare), x(n.layoutModeBeforePin), N(n.userViewIntent));
				}
			};
			return f.add(e), function() {
				f.delete(e);
			};
		}, [t]);
		var M = m(r), w = M[0], A = M[1];
		r !== w && (A(r), r ? (L(i), I(u), l("speaker")) : R != null && (u == null ? (l(R), y(k), N(R === "speaker" ? o("WAWebVoipWaCallEnums").UiViewMode.Speaker : o("WAWebVoipWaCallEnums").UiViewMode.Gallery)) : D == null && x(R), L(null), I(null)));
		var F = m(!1), O = F[0], B = F[1];
		O || (r ? (B(!0), i !== "speaker" && (L(i), I(u), l("speaker"))) : R != null && (B(!0), u == null ? (l(R), y(k), N(R === "speaker" ? o("WAWebVoipWaCallEnums").UiViewMode.Speaker : o("WAWebVoipWaCallEnums").UiViewMode.Gallery)) : D == null && x(R), L(null), I(null)));
		var W = c(function() {
			o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CONTROL_PANEL_LAYOUT_MODE_TOGGLE), i === "speaker" ? (N(o("WAWebVoipWaCallEnums").UiViewMode.Gallery), y(null), x(null), l("grid")) : (N(o("WAWebVoipWaCallEnums").UiViewMode.Speaker), l("speaker"));
		}, [i]), q = c(function(e) {
			y(function(t) {
				var n = t != null && t.equals(e);
				return n ? (D === "grid" && l("grid"), x(null), null) : (i !== "speaker" && x(i), l("speaker"), e);
			});
		}, [i, D]), U = c(function(e) {
			v(e);
		}, []), V = u != null ? o("WAWebVoipWaCallEnums").UiViewMode.Pinning : P, H = u != null ? u.toString() : null;
		return d(function() {
			h != null && h.viewMode === V && h.pinnedJid === H || (h = {
				pinnedJid: H,
				viewMode: V
			}, n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
					(t == null ? void 0 : t.type) === "web" && (yield t.notifyUiViewChange(V, H));
				} catch (t) {
					o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: notifyUiViewChange failed"])));
				}
			})());
		}, [V, H]), {
			activeOverride: b,
			handleActiveOverrideChange: U,
			handleLayoutModeToggle: W,
			handlePinParticipant: q,
			layoutMode: i,
			pinnedParticipantJid: u
		};
	}
	l.default = y;
}), 98);
