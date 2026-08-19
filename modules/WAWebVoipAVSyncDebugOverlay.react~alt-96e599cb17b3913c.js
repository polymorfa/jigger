__d("WAWebVoipAVSyncDebugOverlay.react", [
	"WAWebBackendApi",
	"asyncToGeneratorRuntime",
	"react"
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
		var t = e.peerJid, r = p(null), a = r[0], i = r[1], l = p(!1), u = l[0], f = l[1], g = m(!0);
		d(function() {
			g.current = !0;
			var e = (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var e = yield o("WAWebBackendApi").frontendSendAndReceive("peekPerParticipantAVSyncMetrics", { jid: t });
					g.current && i(e != null ? e : null);
				});
				return function() {
					return e.apply(this, arguments);
				};
			})();
			e();
			var r = window.setInterval(e, _);
			return function() {
				g.current = !1, window.clearInterval(r);
			};
		}, [t]);
		var b = c(function() {
			f(function(e) {
				return !e;
			});
		}, []), E = c(function(e) {
			(e.key === "Enter" || e.key === " ") && f(function(e) {
				return !e;
			});
		}, []);
		if (a == null) return null;
		var k = v(a.avgDeltaMs), T = a.avgDeltaMs != null ? Math.round(a.avgDeltaMs) + "ms" : "n/a";
		return u ? s.jsxs("div", {
			onClick: b,
			onKeyDown: E,
			role: "button",
			style: L,
			tabIndex: 0,
			children: [
				s.jsx(I, {
					color: k,
					label: "Δ",
					value: T
				}),
				s.jsx(I, {
					color: a.recalibrationCount > 0 ? y : h,
					label: "R",
					value: String(a.recalibrationCount)
				}),
				s.jsx(I, {
					color: S(a.framesEvicted, a.framesHeld),
					label: "Q",
					value: "H:" + a.framesHeld + " E:" + a.framesEvicted
				}),
				s.jsx(I, {
					color: a.consecutiveLateCount > 3 ? C : h,
					label: "JB",
					value: a.isCalibrated ? "cal L:" + a.consecutiveLateCount : "uncal"
				}),
				s.jsx(I, {
					color: a.framesLate > 20 ? C : h,
					label: "PL",
					value: String(a.framesLate)
				})
			]
		}) : s.jsxs("div", {
			onClick: b,
			onKeyDown: E,
			role: "button",
			style: R,
			tabIndex: 0,
			children: [s.jsx("span", { style: {
				width: "8px",
				height: "8px",
				borderRadius: "50%",
				backgroundColor: k
			} }), s.jsx("span", { children: "Δ " + T })]
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
