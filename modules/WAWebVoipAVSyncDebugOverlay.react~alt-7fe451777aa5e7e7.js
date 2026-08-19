__d("WAWebVoipAVSyncDebugOverlay.react", ["WAWebBackendApi", "react"], (function(t, n, r, o, a, i, l) {
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
		var t = e.peerJid, n = p(null), r = n[0], a = n[1], i = p(!1), l = i[0], u = i[1], f = m(!0);
		d(function() {
			f.current = !0;
			var e = async function() {
				var e = await o("WAWebBackendApi").frontendSendAndReceive("peekPerParticipantAVSyncMetrics", { jid: t });
				f.current && a(e != null ? e : null);
			};
			e();
			var n = window.setInterval(e, _);
			return function() {
				f.current = !1, window.clearInterval(n);
			};
		}, [t]);
		var g = c(function() {
			u(function(e) {
				return !e;
			});
		}, []), b = c(function(e) {
			(e.key === "Enter" || e.key === " ") && u(function(e) {
				return !e;
			});
		}, []);
		if (r == null) return null;
		var E = v(r.avgDeltaMs), k = r.avgDeltaMs != null ? Math.round(r.avgDeltaMs) + "ms" : "n/a";
		return l ? s.jsxs("div", {
			onClick: g,
			onKeyDown: b,
			role: "button",
			style: L,
			tabIndex: 0,
			children: [
				s.jsx(I, {
					color: E,
					label: "Δ",
					value: k
				}),
				s.jsx(I, {
					color: r.recalibrationCount > 0 ? y : h,
					label: "R",
					value: String(r.recalibrationCount)
				}),
				s.jsx(I, {
					color: S(r.framesEvicted, r.framesHeld),
					label: "Q",
					value: "H:" + r.framesHeld + " E:" + r.framesEvicted
				}),
				s.jsx(I, {
					color: r.consecutiveLateCount > 3 ? C : h,
					label: "JB",
					value: r.isCalibrated ? "cal L:" + r.consecutiveLateCount : "uncal"
				}),
				s.jsx(I, {
					color: r.framesLate > 20 ? C : h,
					label: "PL",
					value: String(r.framesLate)
				})
			]
		}) : s.jsxs("div", {
			onClick: g,
			onKeyDown: b,
			role: "button",
			style: R,
			tabIndex: 0,
			children: [s.jsx("span", { style: {
				width: "8px",
				height: "8px",
				borderRadius: "50%",
				backgroundColor: E
			} }), s.jsx("span", { children: "Δ " + k })]
		});
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I(e) {
		var t = e.color, n = e.label, r = e.value;
		return s.jsxs("div", {
			style: E,
			children: [s.jsxs("span", { children: [s.jsx("span", {
				style: { color: t },
				children: "● "
			}), n] }), s.jsx("span", { children: r })]
		});
	}
	I.displayName = I.name + " [from " + i.id + "]", l.default = k;
}), 98);
