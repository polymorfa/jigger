__d("WAFlowsDatePickerWheel.react", [
	"WAFlowsDatePickerWheelUtils",
	"WAFlowsEntryPointControllerContext.react",
	"WAFlowsEnvContext.react",
	"asyncToGeneratorRuntime",
	"react",
	"stylex",
	"useForceUpdate"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = { wheelOption: {
		display: "x78zum5",
		justifyContent: "xl56j7k",
		alignItems: "x6s0dn4",
		width: "xh8yej3",
		top: "xwa60dl",
		color: "x14ug900",
		backfaceVisibility: "xlp1x4z",
		willChange: "x1so62im",
		$$css: !0
	} }, f = { wheelOption: {
		backgroundColor: "xs1q97v",
		$$css: !0
	} }, g = { wheelOption: {
		backgroundColor: "x16w0wmm",
		$$css: !0
	} }, h = { ios: f }, y = {
		ArrowUp: -1,
		ArrowDown: 1
	}, C = { wa_web: { tabIndex: 0 } };
	function b(t) {
		var a, i, l = t["data-testid"], s = t.onChange, c = t.onChangeRequest, f = t.options, b = t.value, v = t.xstyle, S = o("WAFlowsEnvContext.react").useWAFlowsEnv(), R = S.env, L = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController(), E = p(), k = (a = h[R.platform]) != null ? a : g, I = p({
			animationDuration: 0,
			startClientY: 0,
			moveClientY: 0,
			startDegrees: 0,
			moveDegrees: 0,
			startTime: 0,
			selectedIndex: 0,
			dragTailSelectedIndex: 0,
			dragTailIntervalID: null,
			maxVisibleSlotsOnEachSide: o("WAFlowsDatePickerWheelUtils").getMaxVisibleSlotsOnEachSide(R.platform)
		}), T = r("useForceUpdate")(), D = d((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				I.current.moveClientY = o("WAFlowsDatePickerWheelUtils").getClientY(e), I.current.moveDegrees = o("WAFlowsDatePickerWheelUtils").getMoveDegreesWhileDragging(I.current.startDegrees, I.current.moveClientY, I.current.startClientY, R.platform);
				var t = o("WAFlowsDatePickerWheelUtils").getSelectedIndex(I.current.moveDegrees, f, R.platform);
				T(), t !== I.current.selectedIndex && (I.current.selectedIndex = t, I.current.dragTailSelectedIndex = t, yield o("WAFlowsDatePickerWheelUtils").vibrate(L.invoke));
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), [
			R.platform,
			f,
			T,
			L.invoke
		]), x = d(function() {
			if (I.current.moveClientY !== 0) {
				var e;
				I.current.animationDuration = (e = o("WAFlowsDatePickerWheelUtils")).getAnimationDuration(I.current.startTime, I.current.startClientY, I.current.moveClientY);
				var t = e.getMoveDegrees(I.current.moveDegrees, I.current.animationDuration, I.current.startClientY, I.current.moveClientY, R.platform), n = e.getSelectedIndex(t, f, R.platform);
				I.current.moveDegrees = e.getMoveDegreesWithDeviation(n, R.platform), T(), I.current.dragTailIntervalID = e.setDragTailSelectedIndexDuringAnimation({
					prevSelectedIndex: I.current.selectedIndex,
					newSelectedIndex: n,
					animationDuration: I.current.animationDuration,
					invoke: L.invoke,
					onUpdate: function(t) {
						I.current.dragTailSelectedIndex = t, T();
					},
					onDone: function() {
						s(f[n].value);
					}
				});
			}
			document.removeEventListener("touchmove", D), document.removeEventListener("touchend", x), document.removeEventListener("mousemove", D), document.removeEventListener("mouseup", x);
		}, [
			R.platform,
			f,
			T,
			L.invoke,
			D,
			s
		]), $ = d(function(e) {
			c == null || c(), I.current.startTime = new Date().getTime(), I.current.startClientY = o("WAFlowsDatePickerWheelUtils").getClientY(e), I.current.moveClientY = 0, I.current.animationDuration = 0, I.current.startDegrees = I.current.moveDegrees, document.addEventListener("touchmove", D), document.addEventListener("touchend", x), document.addEventListener("mousemove", D), document.addEventListener("mouseup", x);
		}, [
			D,
			x,
			c
		]), P = d(function(e) {
			I.current.moveClientY === 0 && e !== I.current.selectedIndex && (I.current.animationDuration = o("WAFlowsDatePickerWheelUtils").getAnimationDurationOnTap(), s(f[e].value));
		}, [f, s]), N = d(function(e) {
			return Math.abs(e - I.current.selectedIndex) > o("WAFlowsDatePickerWheelUtils").getMaxVisibleSlotsOnEachSide(R.platform);
		}, [R.platform]), M = d(function(e) {
			var t = y[e.key];
			if (t != null) {
				var n = I.current.selectedIndex + t;
				n >= 0 && n < f.length && P(n);
			}
		}, [P, f]);
		m(function() {
			var e = E.current;
			return e == null || e.addEventListener("mousedown", $), e == null || e.addEventListener("touchstart", $), e == null || e.addEventListener("keydown", M), function() {
				e == null || e.removeEventListener("mousedown", $), e == null || e.removeEventListener("touchstart", $), e == null || e.removeEventListener("keydown", M);
			};
		}, [M, $]), m(function() {
			if (I.current.selectedIndex = f.findIndex(function(e) {
				return e.value === b;
			}), I.current.selectedIndex >= 0) {
				var e = o("WAFlowsDatePickerWheelUtils").getMoveDegreesWithDeviation(I.current.selectedIndex, R.platform);
				e !== I.current.moveDegrees && (I.current.moveDegrees = e, T());
			}
			I.current.dragTailSelectedIndex = I.current.selectedIndex;
		}, [b]);
		var w = (i = C[R.platform]) != null ? i : {};
		return u.jsx("div", babelHelpers.extends({}, w, (e || (e = r("stylex"))).props(v), {
			ref: E,
			"data-testid": void 0,
			"data-value": b,
			children: u.jsx("div", {
				className: "xh14mi0 xvmahel xfqjyog xuxw1ft x87ps6o",
				children: u.jsx("ul", {
					className: "x1n2onr6 xdj266r x11t971q xat24cr xvc5jky x1oyok0e x1so62im x11xpdln x1pbvl4h",
					style: o("WAFlowsDatePickerWheelUtils").getDynamicWheelStyles(I.current.animationDuration, I.current.moveDegrees, R.platform),
					children: f.map(function(t, n) {
						var a = t.label, i = t.value;
						return u.jsx("li", {
							className: (e || (e = r("stylex")))([_.wheelOption, k.wheelOption]),
							style: o("WAFlowsDatePickerWheelUtils").getDynamicWheelOptionStyles(n, I.current.dragTailSelectedIndex, I.current.maxVisibleSlotsOnEachSide, R.platform),
							"aria-hidden": N(n),
							onClick: function() {
								P(n);
							},
							children: a
						}, i);
					})
				})
			})
		}));
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = b;
}), 98);
