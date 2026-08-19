__d("LocalStorageMutex", [
	"FBLogger",
	"MessengerWaitForEvent",
	"Promise",
	"QPLUserFlow",
	"emptyFunction",
	"pageID",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = null, u = 1e3, c = r("qpl")._(1056847375, "584"), d = (function() {
		function t(e) {
			var t = this, n = e.mutexKey, o = e.localTakeoverKey, a = e.log, i = e.logError, l = e.getStorage, s = e.setItemGuarded, c = e.mutexTimeoutMs, d = c === void 0 ? u : c, m = e.mutexTimeoutCallback;
			this.mutexFilter = function(e) {
				if (e.key !== t.$1) return !1;
				var n = e.newValue || "";
				return !n.includes(r("pageID"));
			}, this.$1 = n, this.$2 = o, this.$5 = l, this.$6 = s, this.$3 = a, this.$4 = i, this.$7 = d, this.$8 = m;
		}
		var a = t.prototype;
		return a.init = function() {
			r("QPLUserFlow").start(c), this.$3("APPMUTEX - this tab is " + r("pageID"));
			var t = this.getMutex();
			if (t === r("pageID")) return this.$3("APPMUTEX - WE ALREADY HAVE THE MUTEX LOCK WITHIN INIT"), r("QPLUserFlow").endSuccess(c), (e || (e = n("Promise"))).resolve(!0);
			if (t != null) return this.$3("APPMUTEX - initiating localTAKEOVER"), this.localTakeover();
			this.$3("APPMUTEX - NO1 ELSE IS ALIVE, GET THE MUTEX");
			var o = this.$9(r("pageID")), a = this.$10(r("pageID"));
			return !o.success || !a.success ? (r("QPLUserFlow").addAnnotations(c, {
				bool: {
					setMutexResult: a.success,
					setTakeoverResult: o.success
				},
				string: {
					setMutexError: a.error,
					setTakeoverError: o.error
				}
			}), r("QPLUserFlow").endFailure(c, "fail_to_set_takeover_or_mutex"), (e || (e = n("Promise"))).resolve(!1)) : (r("QPLUserFlow").endSuccess(c), (e || (e = n("Promise"))).resolve(!0));
		}, a.localTakeover = function() {
			var t, a = this, i = this.$9(r("pageID"));
			if (!i.success) return r("QPLUserFlow").addAnnotations(c, { string: { initTakeoverError: i.error } }), r("QPLUserFlow").endFailure(c, "local_takeover_init_takeover_failure"), (e || (e = n("Promise"))).resolve(!1);
			var l, s = function() {
				l != null && clearTimeout(l);
			}, d = o("MessengerWaitForEvent").waitForEvent(window, "storage", this.mutexFilter), m = (t = this.$7) != null ? t : u;
			return (e || (e = n("Promise"))).race([
				d,
				new e(function(e) {
					l = setTimeout(function() {
						e();
					}, m);
				}),
				this.$8 ? this.$8() : new (e || (e = (n("Promise"))))(r("emptyFunction"))
			]).then(function(e) {
				if (e == null) {
					a.$3("AppMutex - Forcefully took the mutex and takeover lock");
					var t = a.$9(r("pageID")), n = a.$10(r("pageID"));
					return !t.success || !n.success ? (r("QPLUserFlow").addAnnotations(c, { string: {
						setMutexError: n.error,
						setTakeoverError: t.error
					} }), r("QPLUserFlow").endFailure(c, "local_takeover_forcefully_takeover_failure"), !1) : (r("QPLUserFlow").endSuccess(c), !0);
				}
				a.$3("APPMUTEX - GOT MUTEX STORAGE EVENT CHANGE FROM ANOTHER TAB");
				var o = a.$11(e.newValue);
				if (!o && a.hasTakeoverPermission()) {
					a.$3("APPMUTEX - setting mutex on localtakeover");
					var i = a.$10(r("pageID"));
					return i.success ? (r("QPLUserFlow").endSuccess(c), !0) : (r("QPLUserFlow").addAnnotations(c, { string: { setMutexError: i.error } }), r("QPLUserFlow").endFailure(c, "local_takeover_set_mutex_failure"), !1);
				} else return a.hasTakeoverPermission() && a.$12(), r("QPLUserFlow").endFailure(c, "local_takeover_no_takeover_permission"), !1;
			}).then(function(e) {
				return s(), e;
			}).catch(function(e) {
				return s(), a.$4("AppMutex - localTakeover error no permission - " + e), r("QPLUserFlow").endFailure(c, "local_takeover_general_failure"), !1;
			});
		}, a.onMutexDeath = function() {
			var e = this.getMutex();
			e != null && e === r("pageID") && (this.$3("APPMUTEX - removing mutex on death"), this.$13(), this.hasTakeoverPermission() && this.$12());
		}, a.takeoverFilter = function(t) {
			if (t.key !== this.$2) return !1;
			var e = t.newValue || "";
			return !e.includes(r("pageID"));
		}, a.$14 = function() {
			if (!s) {
				var e = this.$5();
				if (!e) throw r("FBLogger")("messenger_web").mustfixThrow("Could not get localStorage");
				s = e;
			}
			return s;
		}, a.getMutex = function() {
			return s = this.$14(), s.getItem(this.$1);
		}, a.$10 = function(t) {
			return s = this.$14(), this.$6(s, this.$1, t);
		}, a.$13 = function() {
			s = this.$14(), s.removeItem(this.$1);
		}, a.getTakeover = function() {
			return s = this.$14(), s.getItem(this.$2);
		}, a.$9 = function(t) {
			return s = this.$14(), this.$6(s, this.$2, t);
		}, a.$12 = function() {
			s = this.$14(), s.removeItem(this.$2);
		}, a.$11 = function(t) {
			return t != null ? t : "";
		}, a.hasTakeoverPermission = function() {
			var e = this.getTakeover();
			return e != null && e === r("pageID");
		}, t;
	})();
	l.THIS_TAB = r("pageID"), l.LocalStorageMutex = d;
}), 98);
