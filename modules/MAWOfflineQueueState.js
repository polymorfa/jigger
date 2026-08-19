__d("MAWOfflineQueueState", ["MAWOfflineQueueThreadStatus", "MAWSharedProtocolQueueConst"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [], s = {
		offlineQueueCount: 0,
		offlineQueueProgressDownloaded: 0,
		offlineQueueProgressProcessed: 0,
		offlineQueueSyncState: o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Initializing,
		offlineQueueThreadStatus: {}
	}, u = babelHelpers.extends({}, s), c = {
		getSnapshot: function() {
			return u;
		},
		subscribe: function(n) {
			return e.push(n), function() {
				e = e.filter(function(e) {
					return e !== n;
				});
			};
		}
	};
	function d(t) {
		u.offlineQueueCount !== t && (u = babelHelpers.extends({}, u, { offlineQueueCount: t }), e.forEach(function(e) {
			return e();
		}));
	}
	function m(t) {
		u.offlineQueueProgressDownloaded !== t && (u = babelHelpers.extends({}, u, { offlineQueueProgressDownloaded: t }), e.forEach(function(e) {
			return e();
		}));
	}
	function p(t, n) {
		var r = o("MAWOfflineQueueThreadStatus").calculateOfflineQueueThreadStatus(n, u.offlineQueueThreadStatus);
		u.offlineQueueThreadStatus === r && u.offlineQueueProgressProcessed === t || (u = babelHelpers.extends({}, u, {
			offlineQueueProgressProcessed: t,
			offlineQueueThreadStatus: r
		}), e.forEach(function(e) {
			return e();
		}));
	}
	function _(t) {
		var n = o("MAWOfflineQueueThreadStatus").calculateOfflineQueueThreadStatus(t, u.offlineQueueThreadStatus);
		u.offlineQueueThreadStatus == n && u.offlineQueueSyncState === o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Complete || (u = babelHelpers.extends({}, u, {
			offlineQueueSyncState: o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Complete,
			offlineQueueThreadStatus: n
		}), e.forEach(function(e) {
			return e();
		}));
	}
	l.EMPTY_STATE = s, l.offlineQueueState = c, l.initOfflineQueueSyncStart = d, l.initOfflineQueueSyncProgress = m, l.initOfflineQueueConsumerSyncProgress = p, l.initOfflineQueueSyncComplete = _;
}), 98);
