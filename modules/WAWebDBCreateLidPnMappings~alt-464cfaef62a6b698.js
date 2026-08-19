__d("WAWebDBCreateLidPnMappings", [
	"WALogger",
	"WAPromiseDelays",
	"WATimeUtils",
	"WAWebABProps",
	"WAWebApiContact",
	"WAWebBackendApi",
	"WAWebContactsDbLidMigrationUtils",
	"WAWebDBContactRemoveSoftDeletedUsernames",
	"WAWebDynamicThrottlingManager",
	"WAWebEnvironment",
	"WAWebIdentityChangeApiWorkerCompatible",
	"WAWebRunInBatches",
	"WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
	"WAWebUsernameGatingUtils",
	"WAWebWidDevTools",
	"WAWebWidFactory",
	"WAWebWorkerSafeBackendApi",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g, h = new (o("WAWebDynamicThrottlingManager")).DynamicThrottlingManager({
		targetTimeMs: 100,
		maxDelayTimeMs: 1e3,
		minBatchSize: 5,
		maxBatchSize: 300,
		defaultBatchSize: 30
	});
	async function y(e) {
		var t = e.flushImmediately, n = e.identityChangeHandlingEnabled, a = e.learningSource, i = e.mappings;
		o("WAWebABProps").getABPropConfigValue("wa_web_history_sync_dynamic_throttling") ? await C({
			mappings: i,
			flushImmediately: t,
			identityChangeHandlingEnabled: n,
			learningSource: a
		}) : r("WAWebEnvironment").isWindows ? await o("WAWebRunInBatches").runInBatches(i, function(e) {
			return v({
				mappings: e,
				flushImmediately: t,
				identityChangeHandlingEnabled: n,
				learningSource: a
			});
		}) : await v({
			mappings: i,
			flushImmediately: t,
			identityChangeHandlingEnabled: n,
			learningSource: a
		});
	}
	async function C(e) {
		var t = e.flushImmediately, n = e.identityChangeHandlingEnabled, r = e.learningSource, a = e.mappings;
		if (a.length !== 0) for (var i = 0; i < a.length;) {
			var l = h.getThrottleRate(), s = Math.min(l.batchSize, a.length - i), u = a.slice(i, i + s), c = self.performance.now();
			await v({
				mappings: u,
				flushImmediately: t,
				identityChangeHandlingEnabled: n,
				learningSource: r
			});
			var d = self.performance.now() - c;
			h.setLastProcessTime(d, u.length), l.delayMs > 0 && await o("WAPromiseDelays").delayMs(l.delayMs), i += s;
		}
	}
	function b(t) {
		var n = t.cachedPnForMappingLid, r = t.learningSource, a = t.mappingLid, i = t.mappingPn, l = o("WAWebApiContact").lidPnCache.getPhoneNumber(o("WAWebWidFactory").createUserLidOrThrow(i.user, "lid")) != null;
		if (l) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"[createLidPnMappings] new PN ",
				" is actually a LID src ",
				""
			])), i, r).sendLogs("lid-pn-mapping-conflict-pn-is-lid");
			return;
		}
		if (o("WAWebWidDevTools").isWidClientAssigned(a)) {
			o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
				"[createLidPnMappings] fake LID ",
				" cached PN ",
				" != new PN ",
				""
			])), a, n, i).sendLogs("lid-pn-mapping-conflict-fake-lid-" + r);
			return;
		}
		o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
			"[createLidPnMappings] LID ",
			" cached PN ",
			" != new PN ",
			""
		])), a, n, i).sendLogs("lid-pn-mapping-conflict-" + r);
	}
	async function v(e) {
		var t = e.flushImmediately, n = e.identityChangeHandlingEnabled, r = e.learningSource, a = e.mappings, i = n != null ? n : !0, l = [], s = [], u = new Map(a.map(function(e) {
			return [e.pn, e.lid];
		})), m = o("WATimeUtils").unixTime(), p = o("WATimeUtils").castToUnixTime(0), _ = [], f = new Set();
		a.forEach(function(e) {
			var n = e.lid, a = e.pn, c = o("WAWebApiContact").lidPnCache.getCurrentLid(a), d = o("WAWebApiContact").lidPnCache.getPhoneNumber(n), g = d == null, h = !g, y = (c == null ? void 0 : c.equals(n)) === !0, C = h && !y;
			(d == null ? void 0 : d.equals(a)) === !1 && b({
				cachedPnForMappingLid: d,
				learningSource: r,
				mappingLid: n,
				mappingPn: a
			});
			var v, S;
			switch (r) {
				case "usync":
					v = !1, S = g || C;
					break;
				case "peer-pn-message":
				case "peer-lid-message":
					v = !1, S = g;
					break;
				case "recipient-latest-lid":
				case "migration-sync-latest":
				case "migration-sync-old":
				case "blocklist-active":
				case "blocklist-inactive":
					v = !1, S = !y;
					break;
				default: v = C, S = g;
			}
			if (S) {
				c != null && i && _.push(o("WAWebIdentityChangeApiWorkerCompatible").handleNewIdentity(a, !t));
				var R;
				r === "migration-sync-old" || r === "blocklist-inactive" ? R = !0 : R = u.get(a) !== n;
				var L = R ? p : m;
				o("WAWebApiContact").warmUpLidPnMapping(n, a, L), l.push({
					lid: n.toString(),
					phoneNumber: a.toString()
				}), t ? s.push({
					lid: n,
					pn: a,
					phoneNumberCreatedAt: L
				}) : o("WAWebApiContact").lidPnCacheDirtySet.add(n.toString());
			}
			v && f.add(a);
		}), t && o("WAWebApiContact").lidPnCacheDirtySet.size > 0 && L(s);
		var g = _.length > 0 ? Promise.all(_).then(function(e) {
			var t = 0;
			for (var n of e) {
				var a, i;
				t += (a = n == null || (i = n.notifications) == null ? void 0 : i.length) != null ? a : 0;
			}
			o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
				"createLidPnMappings: ",
				" id change notifs gen, src ",
				""
			])), t, r);
		}) : Promise.resolve();
		f.size !== 0 && (o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
			"createLidPnMappings: ",
			" contacts requiring usync, source ",
			""
		])), f.size, r), o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget("syncContactListJob", {
			contactIds: Array.from(f),
			shouldSyncDevice: !1,
			mode: "query"
		}));
		var h = [g];
		s.length > 0 && h.push(E(s)), await Promise.all(h), l.length > 0 && await k(l);
	}
	async function S(e) {
		try {
			var t = await o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().bulkGet(e);
			return new Map(t.filter(Boolean).map(function(e) {
				return [e.id, e];
			}));
		} catch (e) {
			o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["getPnRowData failed! ", ""])), r("getErrorSafe")(e).stack);
		}
		return new Map();
	}
	async function R() {
		try {
			var e = [];
			L(e), await E(e);
		} catch (e) {
			o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["flushLidPnMappingsToDb failed!"]))).sendLogs("Failed to flushLidPnMappingsToDb");
		}
	}
	function L(e) {
		o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["flush lidPnCacheDirtySet: get dirty updates for ", ""])), Array.from(o("WAWebApiContact").lidPnCacheDirtySet).join(",")), o("WAWebApiContact").lidPnCacheDirtySet.forEach(function(t) {
			var n = o("WAWebWidFactory").createUserLidOrThrow(t), r = o("WAWebApiContact").lidPnCache.getLidEntry(n);
			r != null && e.push({
				lid: n,
				pn: r.phoneNumber,
				phoneNumberCreatedAt: o("WATimeUtils").castToUnixTime(r.phoneNumberCreatedAt)
			});
		}), o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["lidPnCacheDirtySet: ", " flushed"])), o("WAWebApiContact").lidPnCacheDirtySet.size), o("WAWebApiContact").lidPnCacheDirtySet.clear();
	}
	async function E(e) {
		if (e.length !== 0) {
			var t = await S(e.map(function(e) {
				var t = e.pn;
				return t.toJid();
			})), n = e.map(function(e) {
				var n = e.lid, r = e.phoneNumberCreatedAt, a = e.pn, i = t.get(a.toJid());
				return babelHelpers.extends({
					id: n.toString(),
					phoneNumber: a.toString(),
					phoneNumberCreatedAt: r
				}, i ? o("WAWebContactsDbLidMigrationUtils").createContactLidRowFromPnRow(n, i) : { contactHash: o("WAWebApiContact").getContactHash(n.toJid()) });
			});
			o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["flushLidPnMappingsToDbImpl: ", " records to update"])), n.length), await o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().bulkCreateOrMerge(n), o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() && await o("WAWebDBContactRemoveSoftDeletedUsernames").removeSoftDeletedUsernames(e.map(function(e) {
				var t = e.lid;
				return t;
			}));
		}
	}
	async function k(e) {
		await o("WAWebBackendApi").frontendSendAndReceive("bulkUpdatePhoneNumberJids", { lidPhoneNumberMappings: e });
	}
	l.createLidPnMappingsInBatches = y, l.createLidPnMappings = v, l.flushLidPnMappingsToDb = R;
}), 98);
