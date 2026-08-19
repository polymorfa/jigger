__d("WAWebMediaHostsWorker", [
	"WAGenericStateManager",
	"WAWebMediaHost",
	"WAWebMediaHostsErrors",
	"WAWebMediaHostsRouteSelection",
	"WAWebMediaHostsStaleness",
	"WAWebNoop",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = new Date(e.queryStartTime);
		return {
			auth: e.auth,
			authTTL: e.authTTL,
			authExpirationTime: new Date(t.getTime() + e.authTTL),
			hosts: e.hosts.map(function(e) {
				return new (o("WAWebMediaHost")).MediaHost(e);
			}),
			hostsRefreshTime: new Date(t.getTime() + e.ttl),
			queryStartTime: t,
			maxBuckets: e.maxBuckets
		};
	}
	var s = (function() {
		function t(e) {
			this.$1 = e, this.$2 = new (o("WAGenericStateManager")).WAGenericStateManager(null);
		}
		var n = t.prototype;
		return n.acceptSnapshot = function(n) {
			this.$2.set(n == null ? null : e(n));
		}, n.getHostsInfo = async function(t) {
			var e = this.$2.get();
			return t.forceRefresh === !0 || o("WAWebMediaHostsStaleness").isExpiredOrMissing(e) ? await this.$3() : o("WAWebMediaHostsStaleness").needsRefresh(e) && this.$1.fireAndForget("mainthread_mediaHostsSync", "refresh"), this.$4(t);
		}, n.$3 = async function() {
			var e = this, t = this.$2.get();
			await this.$1.sendAndReceive("mainthread_mediaHostsSync", "refresh"), this.$2.get() === t && await new Promise(function(t) {
				var n = r("WAWebNoop");
				n = e.$2.onSet(function() {
					n(), t();
				});
			});
		}, n.$4 = function(t) {
			var e = this.$2.get();
			if (e == null || e.hosts.length === 0) throw new (o("WAWebMediaHostsErrors")).NoMediaHostsError("no fetched data");
			var n = o("WAWebMediaHostsRouteSelection").routeSelection({
				encFilehash: t.encFilehash,
				hosts: e.hosts,
				operation: t.operation,
				type: t.type,
				maxBuckets: e.maxBuckets
			}), r = n.fallbackHost, a = n.selectedHost;
			if (!a) throw new (o("WAWebMediaHostsErrors")).NoMediaHostsError("no selected host");
			return {
				auth: e.auth,
				selectedHost: a,
				fallbackHost: r
			};
		}, t;
	})(), u = null;
	function c() {
		return r("nullthrows")(u, "MediaHostsWorker is not initialised");
	}
	function d(e) {
		var t = new s(e);
		return u = t, t;
	}
	l.MediaHostsWorker = s, l.getMediaHostsWorker = c, l.createAndSetMediaHostsWorker = d;
}), 98);
