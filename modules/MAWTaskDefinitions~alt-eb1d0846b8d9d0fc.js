__d("MAWTaskDefinitions", [
	"MAWDeleteOldLogsFromDisk",
	"MAWLoggingSwitches",
	"MAWPreKeysCleaner",
	"MAWRotateCAT",
	"MWFBLogger",
	"WAAPI",
	"WAAbPropsInit",
	"WADbTasks",
	"WAGlobals",
	"WATaskScheduleApi",
	"WATaskScheduler",
	"WATimeUtils",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f = r("requireDeferred")("WARotateSignedPreKey").__setRef("MAWTaskDefinitions"), g = o("MWFBLogger").MWLogger().tags(["MAWTaskDefinitions"]), h = 27 * (_ = o("WATimeUtils")).DAY_SECONDS, y = 7 * _.DAY_SECONDS, C = _.DAY_SECONDS / 2, b = _.MINUTE_SECONDS * 5, v = _.MINUTE_SECONDS * 4, S = Object.keys(o("WADbTasks").Tasks);
	function R() {
		return { scheduledTimeResolver: {
			get: function(t) {
				return o("WATaskScheduleApi").getTaskScheduledTime(t);
			},
			set: function(t, n) {
				return o("WATaskScheduleApi").setTaskScheduledTime(t, n);
			}
		} };
	}
	function L(e) {
		o("WATaskScheduler").startScheduler(R()), S.forEach(function(t) {
			var n = E(t, e);
			o("WATaskScheduler").registerTask(t, n);
		});
	}
	function E(t, n) {
		switch (t) {
			case "rotateKey": return function(t) {
				var r;
				return t ? (g.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["RotateKeyTask skip first run"]))), r = Promise.resolve()) : r = n.then(function() {
					return f.load();
				}).then(function(e) {
					var t = e.rotateSignedPreKey;
					return t();
				}), r.then(function() {
					return h;
				});
			};
			case "syncAbProps": return function(e) {
				var t = !e;
				return n.then(function() {
					return r("WAAPI").syncAbProps({ sendHash: t }).then(function() {
						return o("WAAbPropsInit").getRefreshSecs();
					});
				});
			};
			case "deleteExpiredKeys": return function(e) {
				var t;
				return e ? (g.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["DeleteExpiredPreKeys skip first run"]))), t = Promise.resolve()) : t = o("MAWPreKeysCleaner").clearExpiredPreKeys(), t.then(function() {
					return y;
				});
			};
			case "rotateCAT": return function(e) {
				var t;
				return e ? (g.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["rotateCAT skip first run"]))), t = Promise.resolve()) : t = o("MAWRotateCAT").tryRotateCAT({ initiator: "MAWTaskDefinitions::rotateCAT" }), t.then(function() {
					return C;
				});
			};
			case "generatePrekeys": return function(e) {
				var t;
				return e ? t = r("WAAPI").generateAndUploadPreKeys({ reason: "on start" }) : t = Promise.resolve(), t.then(function() {
					return o("WATimeUtils").DEFAULT_UNIXTIME;
				});
			};
			case "queryGroups": return function(e) {
				return Promise.resolve().then(function() {
					return o("WATimeUtils").DEFAULT_UNIXTIME;
				});
			};
			case "notifyDeviceRegistration": return function(e) {
				if (!e) return Promise.resolve(o("WATimeUtils").DEFAULT_UNIXTIME);
				var t = o("WAGlobals").getMyUserJid();
				return o("WAGlobals").getDependencies().loadRecentParticipants(o("WAGlobals").getConfig().maxUsersForNotifyDeviceChange(), t).then(function(e) {
					if (e.size === 0) return Promise.resolve();
					var t = o("MWFBLogger").MWLogger().tags(["notifyDeviceRegistration"]);
					return r("WAAPI").notifyDeviceChange({ users: e }).then(function() {
						t.DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Notified ", " contacts of device change"])), e.size);
					}).catch(function(n) {
						t.DEBUG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Failed to notify ", " contacts of device change"])), e.size), t.MUSTFIX(m || (m = babelHelpers.taggedTemplateLiteralLoose(["", ""])), n);
					});
				}).then(function() {
					return o("WATimeUtils").DEFAULT_UNIXTIME;
				});
			};
			case "cleanupExcessiveLogs": return async function(e) {
				return o("MAWLoggingSwitches").removeLoggingFromBridge ? (e ? await o("MAWDeleteOldLogsFromDisk").deleteOldLogsOnStartup() : await o("MAWDeleteOldLogsFromDisk").deleteOldLogs(), b) : o("WATimeUtils").DEFAULT_UNIXTIME;
			};
			case "syncMedia": return async function(e) {
				return e && g.DEBUG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["syncMedia task: skip first run"]))), v;
			};
		}
	}
	l.ROTATE_SIGNED_PRE_KEY_TIMESPAN = h, l.DELETE_EXPIRED_KEYS_TIMESPAN = y, l.ROTATE_CAT_TIMESPAN = C, l.DO_NOT_RESCHEDULE = _.DEFAULT_UNIXTIME, l.CLEANUP_EXCESSIVE_LOGS = b, l.SYNC_MEDIA_TIMESPAN = v, l.TASK_TYPES = S, l.getSchedulerOptions = R, l.registerTasks = L, l.getTaskExecution = E;
}), 98);
