__d("WAWebVoipAVSyncDebugOverlay.react", [
	"WAWebBackendApi",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useRef, p = u.useState, _ = 1e3, f = 100, g = 300, h = "#4caf50", y = "#ff9800", C = "#f44336", b = "#888";
	function v(e) {
		if (e == null) return b;
		var t = Math.abs(e);
		return t < f ? h : t < g ? y : C;
	}
	function S(e, t) {
		return e > 0 ? C : t > 10 ? y : h;
	}
	var R = {
		position: "absolute",
		bottom: "8px",
		insetInlineEnd: "8px",
		zIndex: 7,
		display: "flex",
		alignItems: "center",
		columnGap: "4px",
		backgroundColor: "rgba(0, 0, 0, 0.7)",
		borderRadius: "4px",
		padding: "2px 6px",
		cursor: "pointer",
		userSelect: "none",
		fontSize: "11px",
		color: "#fff",
		fontFamily: "monospace"
	}, L = {
		position: "absolute",
		bottom: "8px",
		insetInlineEnd: "8px",
		zIndex: 7,
		backgroundColor: "rgba(0, 0, 0, 0.85)",
		borderRadius: "6px",
		padding: "8px",
		cursor: "pointer",
		userSelect: "none",
		minWidth: "140px",
		fontSize: "11px",
		color: "#fff",
		fontFamily: "monospace"
	}, E = {
		display: "flex",
		justifyContent: "space-between",
		columnGap: "8px"
	};
	function k(e) {
		var t = o("react-compiler-runtime").c(40), r = e.peerJid, a = p(null), i = a[0], l = a[1], u = p(!1), c = u[0], f = u[1], g = m(!0), b, E;
		t[0] !== r ? (b = function() {
			g.current = !0;
			var e = (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var e = yield o("WAWebBackendApi").frontendSendAndReceive("peekPerParticipantAVSyncMetrics", { jid: r });
					g.current && l(e != null ? e : null);
				});
				return function() {
					return e.apply(this, arguments);
				};
			})();
			e();
			var t = window.setInterval(e, _);
			return (function() {
				g.current = !1, window.clearInterval(t);
			});
		}, E = [r], t[0] = r, t[1] = b, t[2] = E) : (b = t[1], E = t[2]), d(b, E);
		var k;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (k = function() {
			f(T);
		}, t[3] = k) : k = t[3];
		var x = k, $;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? ($ = function(t) {
			(t.key === "Enter" || t.key === " ") && f(I);
		}, t[4] = $) : $ = t[4];
		var P = $;
		if (i == null) return null;
		var N;
		t[5] !== i.avgDeltaMs ? (N = v(i.avgDeltaMs), t[5] = i.avgDeltaMs, t[6] = N) : N = t[6];
		var M = N, w;
		t[7] !== i.avgDeltaMs ? (w = i.avgDeltaMs != null ? Math.round(i.avgDeltaMs) + "ms" : "n/a", t[7] = i.avgDeltaMs, t[8] = w) : w = t[8];
		var A = w;
		if (!c) {
			var F;
			t[9] !== M ? (F = s.jsx("span", { style: {
				width: "8px",
				height: "8px",
				borderRadius: "50%",
				backgroundColor: M
			} }), t[9] = M, t[10] = F) : F = t[10];
			var O = "Δ " + A, B;
			t[11] !== O ? (B = s.jsx("span", { children: O }), t[11] = O, t[12] = B) : B = t[12];
			var W;
			return t[13] !== F || t[14] !== B ? (W = s.jsxs("div", {
				onClick: x,
				onKeyDown: P,
				role: "button",
				style: R,
				tabIndex: 0,
				children: [F, B]
			}), t[13] = F, t[14] = B, t[15] = W) : W = t[15], W;
		}
		var q;
		t[16] !== M || t[17] !== A ? (q = s.jsx(D, {
			color: M,
			label: "Δ",
			value: A
		}), t[16] = M, t[17] = A, t[18] = q) : q = t[18];
		var U = i.recalibrationCount > 0 ? y : h, V = String(i.recalibrationCount), H;
		t[19] !== U || t[20] !== V ? (H = s.jsx(D, {
			color: U,
			label: "R",
			value: V
		}), t[19] = U, t[20] = V, t[21] = H) : H = t[21];
		var G;
		t[22] !== i.framesEvicted || t[23] !== i.framesHeld ? (G = S(i.framesEvicted, i.framesHeld), t[22] = i.framesEvicted, t[23] = i.framesHeld, t[24] = G) : G = t[24];
		var z = "H:" + i.framesHeld + " E:" + i.framesEvicted, j;
		t[25] !== G || t[26] !== z ? (j = s.jsx(D, {
			color: G,
			label: "Q",
			value: z
		}), t[25] = G, t[26] = z, t[27] = j) : j = t[27];
		var K = i.consecutiveLateCount > 3 ? C : h, Q = i.isCalibrated ? "cal L:" + i.consecutiveLateCount : "uncal", X;
		t[28] !== K || t[29] !== Q ? (X = s.jsx(D, {
			color: K,
			label: "JB",
			value: Q
		}), t[28] = K, t[29] = Q, t[30] = X) : X = t[30];
		var Y = i.framesLate > 20 ? C : h, J = String(i.framesLate), Z;
		t[31] !== Y || t[32] !== J ? (Z = s.jsx(D, {
			color: Y,
			label: "PL",
			value: J
		}), t[31] = Y, t[32] = J, t[33] = Z) : Z = t[33];
		var ee;
		return t[34] !== H || t[35] !== j || t[36] !== X || t[37] !== Z || t[38] !== q ? (ee = s.jsxs("div", {
			onClick: x,
			onKeyDown: P,
			role: "button",
			style: L,
			tabIndex: 0,
			children: [
				q,
				H,
				j,
				X,
				Z
			]
		}), t[34] = H, t[35] = j, t[36] = X, t[37] = Z, t[38] = q, t[39] = ee) : ee = t[39], ee;
	}
	function I(e) {
		return !e;
	}
	function T(e) {
		return !e;
	}
	function D(e) {
		var t = o("react-compiler-runtime").c(10), n = e.color, r = e.label, a = e.value, i;
		t[0] !== n ? (i = s.jsx("span", {
			style: { color: n },
			children: "● "
		}), t[0] = n, t[1] = i) : i = t[1];
		var l;
		t[2] !== r || t[3] !== i ? (l = s.jsxs("span", { children: [i, r] }), t[2] = r, t[3] = i, t[4] = l) : l = t[4];
		var u;
		t[5] !== a ? (u = s.jsx("span", { children: a }), t[5] = a, t[6] = u) : u = t[6];
		var c;
		return t[7] !== l || t[8] !== u ? (c = s.jsxs("div", {
			style: E,
			children: [l, u]
		}), t[7] = l, t[8] = u, t[9] = c) : c = t[9], c;
	}
	l.default = k;
}), 98);
