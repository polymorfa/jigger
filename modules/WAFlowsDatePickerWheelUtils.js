__d("WAFlowsDatePickerWheelUtils", [
	"WAFlowsBridgeEvents",
	"WAFlowsDatePickerWheelConstants",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = function(t, n, r) {
		var e = Math.round(t / v(r)), o = 0, a = n.length - 1;
		return Math.min(a, Math.max(o, e));
	}, s = function(t, n, r) {
		var e = new Date().getTime(), a = e - t, i = Math.abs(r - n), l = Math.max(o("WAFlowsDatePickerWheelConstants").MIN_ANIMATION_DURATION, i * o("WAFlowsDatePickerWheelConstants").DRAG_TAIL_DURATION_FACTOR / a);
		return Math.min(o("WAFlowsDatePickerWheelConstants").MAX_ANIMATION_DURATION, l);
	}, u = function(t, n, r, a, i) {
		var e = n > o("WAFlowsDatePickerWheelConstants").DRAG_TAIL_MIN_SPEED_TO_SPIN, l = e ? n * o("WAFlowsDatePickerWheelConstants").DRAG_TAIL_SPEED_FACTOR : 0, s = a < r;
		return t + v(i) * l * (s ? 1 : -1);
	}, c = function(t) {
		var e = t.animationDuration, r = t.invoke, a = t.newSelectedIndex, i = t.onDone, l = t.onUpdate, s = t.prevSelectedIndex, u = function(t) {
			return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
		}, c = 0, m = a - s, p = window.setInterval(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			c += o("WAFlowsDatePickerWheelConstants").DRAG_TAIL_REFRESH_INTERVAL;
			var t = c / (e * 1e3), n = u(t), a = Math.round(s + m * n);
			l(a), t >= 1 && (i(), d(p), yield y(r));
		}), o("WAFlowsDatePickerWheelConstants").DRAG_TAIL_REFRESH_INTERVAL);
		return p;
	}, d = function(t) {
		t && window.clearInterval(t);
	}, m = function(t, n) {
		var e, r = (e = o("WAFlowsDatePickerWheelConstants").WHEEL_CENTERING_CORRECTION[n][String(t % o("WAFlowsDatePickerWheelConstants").SLOTS[n])]) != null ? e : 0;
		return t * v(n) + r;
	}, p = function(t, n, r, a) {
		return t - (n - r) * o("WAFlowsDatePickerWheelConstants").DRAG_SPEED_FACTOR[a];
	};
	function _(e) {
		return e instanceof TouchEvent;
	}
	var f = function(t) {
		var e;
		return _(t) ? (e = t.touches[0]) == null ? void 0 : e.clientY : t.clientY;
	}, g = function(t, n, r) {
		var e = o("WAFlowsDatePickerWheelConstants").CIRCUMFERENCE / o("WAFlowsDatePickerWheelConstants").SLOTS[r], a = r === "wa_web" ? -(e + e / 2) : 0;
		return {
			height: o("WAFlowsDatePickerWheelConstants").DIAMETER + "px",
			transformOrigin: "50% calc(50% + " + e / 2 + "px)",
			marginTop: -e + a + "px",
			transitionDuration: t + "s",
			transform: "rotateX(" + n + "deg)"
		};
	}, h = function(t, n, r, a) {
		var e, i = (e = o("WAFlowsDatePickerWheelConstants")).DIAMETER / e.DIAMETER_TO_RADIUS_FACTOR[a], l = e.CIRCUMFERENCE / e.SLOTS[a];
		return babelHelpers.extends({
			opacity: Math.abs(t - n) < r ? Math.max(1 - o("WAFlowsDatePickerWheelConstants").OPTION_OPACITY_FADE[a] * Math.abs(t - n), 0) : 0,
			transform: "rotateX(" + -v(a) * t + "deg) translateZ(" + i + "px)",
			position: t ? "absolute" : "relative"
		}, a === "wa_web" ? { height: l } : {});
	}, y = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			navigator.vibrate ? navigator.vibrate(o("WAFlowsDatePickerWheelConstants").VALUE_CHANGE_VIBRATE_DURATION) : yield e({
				eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsVibrate,
				payload: { pattern: o("WAFlowsDatePickerWheelConstants").VALUE_CHANGE_VIBRATE_DURATION },
				fallBackDataForWeb: {},
				hasCallback: !1
			});
		});
		return function(n) {
			return e.apply(this, arguments);
		};
	})(), C = function(t) {
		return Math.floor(1 / o("WAFlowsDatePickerWheelConstants").OPTION_OPACITY_FADE[t]);
	}, b = function() {
		return o("WAFlowsDatePickerWheelConstants").MAX_ANIMATION_DURATION;
	}, v = function(t) {
		return 360 / o("WAFlowsDatePickerWheelConstants").SLOTS[t];
	};
	l.getSelectedIndex = e, l.getAnimationDuration = s, l.getMoveDegrees = u, l.setDragTailSelectedIndexDuringAnimation = c, l.clearIntervalID = d, l.getMoveDegreesWithDeviation = m, l.getMoveDegreesWhileDragging = p, l.getClientY = f, l.getDynamicWheelStyles = g, l.getDynamicWheelOptionStyles = h, l.vibrate = y, l.getMaxVisibleSlotsOnEachSide = C, l.getAnimationDurationOnTap = b;
}), 98);
