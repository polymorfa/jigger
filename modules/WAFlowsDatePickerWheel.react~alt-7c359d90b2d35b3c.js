__d("WAFlowsDatePickerWheel.react", [
	"WAFlowsDatePickerWheelUtils",
	"WAFlowsEntryPointControllerContext.react",
	"WAFlowsEnvContext.react",
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
		var n, a, i = t["data-testid"], l = t.onChange, s = t.onChangeRequest, c = t.options, f = t.value, b = t.xstyle, v = o("WAFlowsEnvContext.react").useWAFlowsEnv(), S = v.env, R = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController(), L = p(), E = (n = h[S.platform]) != null ? n : g, k = p({
			animationDuration: 0,
			startClientY: 0,
			moveClientY: 0,
			startDegrees: 0,
			moveDegrees: 0,
			startTime: 0,
			selectedIndex: 0,
			dragTailSelectedIndex: 0,
			dragTailIntervalID: null,
			maxVisibleSlotsOnEachSide: o("WAFlowsDatePickerWheelUtils").getMaxVisibleSlotsOnEachSide(S.platform)
		}), I = r("useForceUpdate")(), T = d(async function(e) {
			k.current.moveClientY = o("WAFlowsDatePickerWheelUtils").getClientY(e), k.current.moveDegrees = o("WAFlowsDatePickerWheelUtils").getMoveDegreesWhileDragging(k.current.startDegrees, k.current.moveClientY, k.current.startClientY, S.platform);
			var t = o("WAFlowsDatePickerWheelUtils").getSelectedIndex(k.current.moveDegrees, c, S.platform);
			I(), t !== k.current.selectedIndex && (k.current.selectedIndex = t, k.current.dragTailSelectedIndex = t, await o("WAFlowsDatePickerWheelUtils").vibrate(R.invoke));
		}, [
			S.platform,
			c,
			I,
			R.invoke
		]), D = d(function() {
			if (k.current.moveClientY !== 0) {
				var e;
				k.current.animationDuration = (e = o("WAFlowsDatePickerWheelUtils")).getAnimationDuration(k.current.startTime, k.current.startClientY, k.current.moveClientY);
				var t = e.getMoveDegrees(k.current.moveDegrees, k.current.animationDuration, k.current.startClientY, k.current.moveClientY, S.platform), n = e.getSelectedIndex(t, c, S.platform);
				k.current.moveDegrees = e.getMoveDegreesWithDeviation(n, S.platform), I(), k.current.dragTailIntervalID = e.setDragTailSelectedIndexDuringAnimation({
					prevSelectedIndex: k.current.selectedIndex,
					newSelectedIndex: n,
					animationDuration: k.current.animationDuration,
					invoke: R.invoke,
					onUpdate: function(t) {
						k.current.dragTailSelectedIndex = t, I();
					},
					onDone: function() {
						l(c[n].value);
					}
				});
			}
			document.removeEventListener("touchmove", T), document.removeEventListener("touchend", D), document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", D);
		}, [
			S.platform,
			c,
			I,
			R.invoke,
			T,
			l
		]), x = d(function(e) {
			s == null || s(), k.current.startTime = new Date().getTime(), k.current.startClientY = o("WAFlowsDatePickerWheelUtils").getClientY(e), k.current.moveClientY = 0, k.current.animationDuration = 0, k.current.startDegrees = k.current.moveDegrees, document.addEventListener("touchmove", T), document.addEventListener("touchend", D), document.addEventListener("mousemove", T), document.addEventListener("mouseup", D);
		}, [
			T,
			D,
			s
		]), $ = d(function(e) {
			k.current.moveClientY === 0 && e !== k.current.selectedIndex && (k.current.animationDuration = o("WAFlowsDatePickerWheelUtils").getAnimationDurationOnTap(), l(c[e].value));
		}, [c, l]), P = d(function(e) {
			return Math.abs(e - k.current.selectedIndex) > o("WAFlowsDatePickerWheelUtils").getMaxVisibleSlotsOnEachSide(S.platform);
		}, [S.platform]), N = d(function(e) {
			var t = y[e.key];
			if (t != null) {
				var n = k.current.selectedIndex + t;
				n >= 0 && n < c.length && $(n);
			}
		}, [$, c]);
		m(function() {
			var e = L.current;
			return e == null || e.addEventListener("mousedown", x), e == null || e.addEventListener("touchstart", x), e == null || e.addEventListener("keydown", N), function() {
				e == null || e.removeEventListener("mousedown", x), e == null || e.removeEventListener("touchstart", x), e == null || e.removeEventListener("keydown", N);
			};
		}, [N, x]), m(function() {
			if (k.current.selectedIndex = c.findIndex(function(e) {
				return e.value === f;
			}), k.current.selectedIndex >= 0) {
				var e = o("WAFlowsDatePickerWheelUtils").getMoveDegreesWithDeviation(k.current.selectedIndex, S.platform);
				e !== k.current.moveDegrees && (k.current.moveDegrees = e, I());
			}
			k.current.dragTailSelectedIndex = k.current.selectedIndex;
		}, [f]);
		var M = (a = C[S.platform]) != null ? a : {};
		return u.jsx("div", babelHelpers.extends({}, M, (e || (e = r("stylex"))).props(b), {
			ref: L,
			"data-testid": void 0,
			"data-value": f,
			children: u.jsx("div", {
				className: "xh14mi0 xvmahel xfqjyog xuxw1ft x87ps6o",
				children: u.jsx("ul", {
					className: "x1n2onr6 xdj266r x11t971q xat24cr xvc5jky x1oyok0e x1so62im x11xpdln x1pbvl4h",
					style: o("WAFlowsDatePickerWheelUtils").getDynamicWheelStyles(k.current.animationDuration, k.current.moveDegrees, S.platform),
					children: c.map(function(t, n) {
						var a = t.label, i = t.value;
						return u.jsx("li", {
							className: (e || (e = r("stylex")))([_.wheelOption, E.wheelOption]),
							style: o("WAFlowsDatePickerWheelUtils").getDynamicWheelOptionStyles(n, k.current.dragTailSelectedIndex, k.current.maxVisibleSlotsOnEachSide, S.platform),
							"aria-hidden": P(n),
							onClick: function() {
								$(n);
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
