__d("WAWebManageE2ESessionsJob", [
	"MetaConfig",
	"WAJids",
	"WALogger",
	"WAResolvable",
	"WAWebAppTracker",
	"WAWebBackendErrors",
	"WAWebBackendWorkerClient",
	"WAWebEventsWaitForOfflineDeliveryEnd",
	"WAWebFetchPrekeysJob",
	"WAWebManagePhoneNumberMappingJob",
	"WAWebProcessKeyBundle",
	"WAWebProcessKeyBundleInWorker",
	"WAWebRunInBatches",
	"WAWebSessionScope",
	"WAWebSignal"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g, h = 406, y = new Map(), C = {
		SESSION_CHECK: 50,
		PROCESS_KEY_BUNDLES: 1
	};
	async function b(t) {
		var n = t.identityChanged, r = n === void 0 ? !1 : n, a = t.options, i = t.sessionScope, l = t.wids;
		(a == null ? void 0 : a.skipOfflineDeliveryWait) !== !0 && await o("WAWebEventsWaitForOfflineDeliveryEnd").waitForOfflineDeliveryEnd(), o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.PreKeyProcessing), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"ensureE2ESessions: ",
			" wids: ",
			""
		])), l.length, l.map(function(e) {
			return e.toString();
		}).join());
		try {
			await o("WAWebManagePhoneNumberMappingJob").ensurePhoneNumberToLidMapping(l);
		} catch (e) {
			o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
				"ensureE2ESessions: ",
				" wids: ensurePhoneNumberToLidMapping failed: ",
				""
			])), l.length, e).sendLogs("ensureE2ESessions", { sampling: .01 });
		}
		var b = new (o("WAResolvable")).Resolvable(), S = [], R = [], L = 0;
		l.forEach(function(e) {
			if (!e.isUserNotPSA()) {
				L++;
				return;
			}
			var t = y.get(e);
			t ? S.push(t) : (R.push(e), y.set(e, b.promise));
		}), L > 0 && o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
			"ensureE2ESessions: ",
			" wids: ",
			" skipped (non-user)"
		])), l.length, L);
		var E = 0, k = 0, I = [], T = [];
		try {
			if (R.length > 0) {
				var D = [];
				if (await o("WAWebRunInBatches").runInBatches(R, async function(e) {
					var t = await o("WAWebSignal").Session.hasSignalSessions(e, i);
					D.push.apply(D, t);
				}, { batchSize: C.SESSION_CHECK }), R.forEach(function(e, t) {
					D[t] || T.push(e);
				}), T.length > 0) {
					o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
						"ensureE2ESessions: ",
						" wids: fetch prekeys for ",
						" wids"
					])), l.length, T.length);
					var x = await o("WAWebFetchPrekeysJob").fetchPrekeys(T, r), $ = x.errors, P = x.prekeyBundles;
					o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
						"ensureE2ESessions: ",
						" wids: prekeys ",
						": got ",
						", err ",
						""
					])), l.length, T.length, P.length, $.length);
					var N = 0;
					if (v() && i !== o("WAWebSessionScope").SessionScope.PQ) {
						var M, w, A = await o("WAWebProcessKeyBundleInWorker").processKeyBundlesInWorker(P, i);
						k += (M = A.depletedPrekeyCount) != null ? M : 0, N += (w = A.processedPrekeyCount) != null ? w : 0;
					} else await o("WAWebRunInBatches").runInBatches(P, async function(e) {
						var t, n, r = await o("WAWebProcessKeyBundle").processKeyBundles([].concat(e), i);
						k += (t = r.depletedPrekeyCount) != null ? t : 0, N += (n = r.processedPrekeyCount) != null ? n : 0;
					}, { batchSize: C.PROCESS_KEY_BUNDLES });
					if (o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
						"ensureE2ESessions: ",
						" wids: ",
						"/",
						" E2E sessions +"
					])), l.length, N, l.length), $.length > 0) throw $[0];
					E = T.length;
				}
			}
			b.resolve();
		} catch (e) {
			if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError && e.statusCode === h && T.every(function(e) {
				return e.device != null && e.device !== o("WAJids").DEFAULT_DEVICE_ID;
			})) o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
				"ensureE2ESessions: ",
				" wids: failed with 406 error code for companion devices: ",
				""
			])), l.length, T.map(function(e) {
				return e.toString();
			}).join()), I = T, b.resolve();
			else throw o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
				"ensureE2ESessions: ",
				" wids: request failed: ",
				""
			])), l.length, e), b.resolve(e), o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.PreKeyProcessing), e;
		} finally {
			R.forEach(function(e) {
				y.delete(e);
			});
		}
		try {
			var F = (await Promise.all(S)).find(Boolean);
			if (F) throw F;
		} catch (e) {
			throw o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
				"ensureE2ESessions: ",
				" wids: deduped requests failed: ",
				""
			])), l.length, e), o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.PreKeyProcessing), e;
		} finally {
			o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.PreKeyProcessing);
		}
		return o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
			"ensureE2ESessions: ",
			" wids: ",
			" existing, ",
			" req, ",
			" deduped"
		])), l.length, R.length - E, E, S.length), {
			missedPrekeyCount: E,
			depletedPrekeyCount: k,
			deletedDevices: I
		};
	}
	function v() {
		return o("WAWebBackendWorkerClient").isBackendWorkerBridgeReady() && r("MetaConfig")._("463") === 2;
	}
	l.ensureE2ESessions = b;
}), 98);
