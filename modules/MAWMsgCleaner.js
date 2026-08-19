__d("MAWMsgCleaner", [
	"MAWLoggerUtils",
	"MWFBLogger",
	"MsgrSchedulerQPL",
	"NativeSchedulerTickStrategy",
	"Promise",
	"TaskScheduler",
	"TaskSchedulerPriority",
	"WAAssertUnreachable",
	"WAShiftTimer",
	"WATimeUtils",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = "Unsend", m = "Ephemeral", p = "DeleteForMe", _ = "PendingStanza", f = "Xma", g = "IGDDM", h = "Quote", y = o("MWFBLogger").MWLogger().tags([o("MAWLoggerUtils").Tag.MsgCleaner, o("MAWLoggerUtils").Tag.CleanerUpdate]), C = {
		DELETE_FOR_ME: p,
		EPHEMERAL: m,
		IGDDM: g,
		PENDING_STANZA: _,
		QUOTE: h,
		UNSEND: d,
		XMA: f
	}, b;
	function v() {
		if (b == null) {
			var e = o("TaskScheduler").taskScheduler("cleaner", {
				concurrency: 1,
				failOnTimeout: !0,
				promotionTimeoutMs: 8e3,
				timeoutMs: 3e4
			}, o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy());
			e.setLifecycleListener(o("MsgrSchedulerQPL").makeMsgrSchedulerQPLListener()), b = e;
		}
		return b;
	}
	var S = (function() {
		function t(e, t) {
			var n = this;
			this.$1 = new (o("WAShiftTimer")).ShiftTimer(function() {
				r("promiseDone")(n.$2());
			}), this.getNextTs = e.getNextTs, this.removeExpired = e.removeExpired, this.cleanerType = t, this.purgeEnabled = e.purgeEnabled, this.$1.forceRunNow();
		}
		var a = t.prototype;
		return a.update = function(n) {
			var t = R(this.cleanerType);
			y.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"",
				"::update ",
				""
			])), t, n), this.$1.onOrBefore(o("WATimeUtils").cappedMillisecondsUntil(n));
		}, a.$2 = function() {
			var e = this, t = function() {
				if (!e.purgeEnabled()) return (c || (c = n("Promise"))).resolve();
				var t = R(e.cleanerType);
				return y.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["", "::_purgeNow"])), t), e.removeExpired().then(function(n) {
					return n > 0 && y.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
						"",
						"::_purgeNow ",
						" msgs' content cleaned"
					])), t, n), e.getNextTs();
				}).then(function(t) {
					t != null && e.update(t);
				});
			};
			return this.$3 != null ? (c || (c = n("Promise"))).resolve() : (this.$3 = v().run(t, {
				name: this.cleanerType,
				priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY
			}), this.$3.promise.finally(function() {
				e.$3 = null;
			}));
		}, t;
	})();
	function R(e) {
		switch (e) {
			case "Unsend": return "UnsendMsgCleaner";
			case "Ephemeral": return "EphemeralCleaner";
			case "DeleteForMe": return "DeleteForMeCleaner";
			case "PendingStanza": return "PendingStanzaCleaner";
			case "Xma": return "XmaCleaner";
			case "IGDDM": return "IGDDisappearingMsgCleaner";
			case "Quote": return "QuoteCleaner";
			default: return r("WAAssertUnreachable")(e);
		}
	}
	var L = S;
	l.CLEANER_TYPE = C, l.MsgCleaner = S, l.MSG_CLEANER_FOR_TESTING_ONLY = L;
}), 98);
