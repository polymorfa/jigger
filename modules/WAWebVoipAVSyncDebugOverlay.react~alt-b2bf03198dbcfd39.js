__d("WAWebVoipAVSyncDebugOverlay.react", [
	"WAWebBackendApi",
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
		var t = o("react-compiler-runtime").c(40), n = e.peerJid, r = p(null), a = r[0], i = r[1], l = p(!1), u = l[0], c = l[1], f = m(!0), g, b;
		t[0] !== n ? (g = function() {
			f.current = !0;
			var e = async function() {
				var e = await o("WAWebBackendApi").frontendSendAndReceive("peekPerParticipantAVSyncMetrics", { jid: n });
				f.current && i(e != null ? e : null);
			};
			e();
			var t = window.setInterval(e, _);
			return (function() {
				f.current = !1, window.clearInterval(t);
			});
		}, b = [n], t[0] = n, t[1] = g, t[2] = b) : (g = t[1], b = t[2]), d(g, b);
		var E;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (E = function() {
			c(T);
		}, t[3] = E) : E = t[3];
		var k = E, x;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (x = function(t) {
			(t.key === "Enter" || t.key === " ") && c(I);
		}, t[4] = x) : x = t[4];
		var $ = x;
		if (a == null) return null;
		var P;
		t[5] !== a.avgDeltaMs ? (P = v(a.avgDeltaMs), t[5] = a.avgDeltaMs, t[6] = P) : P = t[6];
		var N = P, M;
		t[7] !== a.avgDeltaMs ? (M = a.avgDeltaMs != null ? Math.round(a.avgDeltaMs) + "ms" : "n/a", t[7] = a.avgDeltaMs, t[8] = M) : M = t[8];
		var w = M;
		if (!u) {
			var A;
			t[9] !== N ? (A = s.jsx("span", { style: {
				width: "8px",
				height: "8px",
				borderRadius: "50%",
				backgroundColor: N
			} }), t[9] = N, t[10] = A) : A = t[10];
			var F = "Δ " + w, O;
			t[11] !== F ? (O = s.jsx("span", { children: F }), t[11] = F, t[12] = O) : O = t[12];
			var B;
			return t[13] !== A || t[14] !== O ? (B = s.jsxs("div", {
				onClick: k,
				onKeyDown: $,
				role: "button",
				style: R,
				tabIndex: 0,
				children: [A, O]
			}), t[13] = A, t[14] = O, t[15] = B) : B = t[15], B;
		}
		var W;
		t[16] !== N || t[17] !== w ? (W = s.jsx(D, {
			color: N,
			label: "Δ",
			value: w
		}), t[16] = N, t[17] = w, t[18] = W) : W = t[18];
		var q = a.recalibrationCount > 0 ? y : h, U = String(a.recalibrationCount), V;
		t[19] !== q || t[20] !== U ? (V = s.jsx(D, {
			color: q,
			label: "R",
			value: U
		}), t[19] = q, t[20] = U, t[21] = V) : V = t[21];
		var H;
		t[22] !== a.framesEvicted || t[23] !== a.framesHeld ? (H = S(a.framesEvicted, a.framesHeld), t[22] = a.framesEvicted, t[23] = a.framesHeld, t[24] = H) : H = t[24];
		var G = "H:" + a.framesHeld + " E:" + a.framesEvicted, z;
		t[25] !== H || t[26] !== G ? (z = s.jsx(D, {
			color: H,
			label: "Q",
			value: G
		}), t[25] = H, t[26] = G, t[27] = z) : z = t[27];
		var j = a.consecutiveLateCount > 3 ? C : h, K = a.isCalibrated ? "cal L:" + a.consecutiveLateCount : "uncal", Q;
		t[28] !== j || t[29] !== K ? (Q = s.jsx(D, {
			color: j,
			label: "JB",
			value: K
		}), t[28] = j, t[29] = K, t[30] = Q) : Q = t[30];
		var X = a.framesLate > 20 ? C : h, Y = String(a.framesLate), J;
		t[31] !== X || t[32] !== Y ? (J = s.jsx(D, {
			color: X,
			label: "PL",
			value: Y
		}), t[31] = X, t[32] = Y, t[33] = J) : J = t[33];
		var Z;
		return t[34] !== V || t[35] !== z || t[36] !== Q || t[37] !== J || t[38] !== W ? (Z = s.jsxs("div", {
			onClick: k,
			onKeyDown: $,
			role: "button",
			style: L,
			tabIndex: 0,
			children: [
				W,
				V,
				z,
				Q,
				J
			]
		}), t[34] = V, t[35] = z, t[36] = Q, t[37] = J, t[38] = W, t[39] = Z) : Z = t[39], Z;
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
