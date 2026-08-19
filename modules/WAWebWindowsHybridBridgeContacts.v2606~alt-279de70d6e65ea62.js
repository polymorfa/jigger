__d("WAWebWindowsHybridBridgeContacts.v2606", [
	"WALogger",
	"WAWebBackendApi",
	"WAWebContactsDbLidMigrationUtils",
	"WAWebEventsWaitForMainStreamReadyMd",
	"WAWebLidAwareContactsDB",
	"WAWebQplFlowWrapper",
	"WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
	"WAWebSyncBootstrap",
	"WAWebWindowsConstants",
	"filterNulls",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = r("qpl")._(891427936, "2894"), u = (function() {
		function t(e, t, n) {
			var a = this;
			this.$4 = "contacts", this.$5 = new Set(), this.$6 = async function(e) {
				var t = JSON.parse(e);
				if (t.length !== 0) {
					t.forEach(function(e) {
						return a.$5.add(e);
					});
					var n = await r("WAWebLidAwareContactsDB").bulkGet(t);
					n.forEach(function(e) {
						return a.$5.delete(e == null ? void 0 : e.id);
					});
					var o = t.filter(function(e) {
						return a.$5.has(e);
					});
					o.forEach(function(e) {
						return a.$5.delete(e);
					}), a.$1.updateContacts(o, JSON.stringify(r("filterNulls")(n)));
				}
			}, this.$7 = async function(e) {
				var t = e.count, n = e.includeVoipCallableOnly;
				try {
					var r = await o("WAWebBackendApi").frontendSendAndReceive("getFrequentContacts", {
						count: t,
						includeVoipCallableOnly: n
					}), i = JSON.stringify(r);
					a.$1.receiveFrequentContacts(i);
				} catch (e) {
					a.$1.receiveFrequentContacts(JSON.stringify([]));
				}
			}, this.$1 = e, this.$2 = t, this.$3 = n, e.addEventListener("requestUpdateEvent", this.$6), e.addEventListener("requestFrequentContactsEvent", this.$7), e.subscribe(null);
		}
		var n = t.prototype;
		return n.initialize = async function() {
			var t = this;
			if (r("WAWebLidAwareContactsDB").setUpdateListener(function(e) {
				return t.$8(e);
			}), await r("WAWebEventsWaitForMainStreamReadyMd")(), !this.$3 && !r("WAWebSyncBootstrap").isSyncDBootstrapInProcess()) {
				this.$3 = !0;
				try {
					var n = 200, a = await o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().all({
						limit: n,
						offset: 0
					});
					do {
						var i, l = (i = a[a.length - 1]) == null ? void 0 : i.id;
						a = await o("WAWebContactsDbLidMigrationUtils").replacePnRowsWithLidData(a), await this.$1.updateContacts([], JSON.stringify(a)), a = await o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().greaterThan(["id"], l, { limit: n });
					} while (a.length > 0);
					this.$1.acknowledgeInitialSync();
				} catch (t) {
					o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
						"[WinUi] setInitialData ",
						" error ",
						""
					])), this.$4, t);
				}
			}
		}, n.$8 = function(t) {
			var e = this;
			if (this.$3) {
				var n = t.filter(function(t) {
					return !e.$5.has(t);
				});
				if (n.length !== 0) if (n.forEach(function(t) {
					return e.$5.add(t);
				}), o("WAWebWindowsConstants").WINDOWS_BUILD_IS_BETA) {
					var r = o("WAWebQplFlowWrapper").QPL.markerStart(s);
					this.$2.invalidateContacts(n), r.end(2);
				} else this.$2.invalidateContacts(n);
			}
		}, t;
	})();
	l.WindowsHybridBridgeContacts_v2606 = u;
}), 98);
