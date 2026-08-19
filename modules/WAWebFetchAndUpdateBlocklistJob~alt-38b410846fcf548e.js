__d("WAWebFetchAndUpdateBlocklistJob", [
	"WAArrayUtils",
	"WALogger",
	"WAPromiseDelays",
	"WAWebApiBlocklist",
	"WAWebBackendApi",
	"WAWebBlocklistMigration",
	"WAWebCriticalEventWamEvent",
	"WAWebDBCreateLidPnMappings",
	"WAWebGetBlocklistJob",
	"WAWebLid1X1MigrationGating",
	"WAWebLidAwareContactsDB",
	"WAWebLogoutReasonConstants",
	"WAWebSetUsernameJob",
	"WAWebSocketLogoutJob",
	"WAWebUpdateLidMetadataJob",
	"WAWebUserPrefsIndexedDBStorage",
	"WAWebUserPrefsMultiDevice",
	"WAWebUsernameTypes",
	"WAWebWid",
	"compactMap",
	"partitionArray"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _;
	async function f(t) {
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[blocklist] fetch blocklist reason: ", ""])), t), t === "post-migration" && (await o("WAWebUserPrefsMultiDevice").setBlocklistHash(null), await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove("WAReceivedBlocklistMigrationBefore1x1Migration"));
		var n = await o("WAWebGetBlocklistJob").getBlocklist();
		if (n.errorCode != null) return n;
		if (n.type === "mismatch") {
			n.dirty && await b("LidBlocklistForceMigratedDirty");
			var a = o("WAWebBlocklistMigration").isBlocklistMigrated(), i = n.list;
			o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[blocklist] updating blocklist with ", " contact(s)"])), i.items.length), await o("WAWebUserPrefsMultiDevice").setBlocklistHash(n.dhash);
			var l = o("WAWebGetBlocklistJob").extractWids(i);
			if (await o("WAWebApiBlocklist").updateBlocklist(l), o("WAWebBackendApi").frontendFireAndForget("replaceBlocklist", { wids: l }), i.addressingMode === "pn") {
				a && (await b("LidBlocklistUnexpectedPnBlocklist"), o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[blocklist] received a pn-based blocklist on a migrated device, unmigrating it"]))), o("WAWebBlocklistMigration").setBlocklistUnmigrated());
				var m = r("compactMap")(i.items, function(e) {
					var t = e.displayName, n = e.wid;
					if (t == null || !n.isLid()) return null;
					var r = {};
					return t != null && (r.displayNameLID = t), {
						lid: n,
						data: r
					};
				});
				await o("WAWebUpdateLidMetadataJob").updateLidMetadataJob(m);
			} else i.addressingMode, o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() ? a || (o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[blocklist] received a lid-based blocklist, marking the device as migrated"]))), o("WAWebBlocklistMigration").setBlocklistMigrated()) : await v(), await g(i.items);
		} else o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[blocklist] no change in blocklist, skip update"])));
		return n;
	}
	async function g(e) {
		var t = [], n = [];
		for (var r of e) r.pn != null && t.push(r), (r.username != null || r.displayName != null) && n.push(r);
		await h(t), await y(n);
	}
	async function h(e) {
		var t = o("WAArrayUtils").groupBy(e, function(e) {
			return e.pn.toString();
		}), n = [], a = [], i = 0;
		for (var l of t.values()) {
			var s = r("partitionArray")(l, function(e) {
				return e.active;
			}), u = s[0], c = s[1], d = c.sort(function(e, t) {
				return r("WAWebWid").compare(e.lid, t.lid);
			}).reverse();
			n.push.apply(n, C(d)), u.length > 1 && i++, a.push.apply(a, C(u));
		}
		i > 0 && o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[blocklist] ", " PNs have multiple active LIDs"])), i).sendLogs("blocklist-multiple-active-lids"), await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
			mappings: n,
			flushImmediately: !1,
			identityChangeHandlingEnabled: !1,
			learningSource: "blocklist-inactive"
		}), await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
			mappings: a,
			flushImmediately: !1,
			identityChangeHandlingEnabled: !1,
			learningSource: "blocklist-active"
		}), await o("WAWebDBCreateLidPnMappings").flushLidPnMappingsToDb();
	}
	async function y(e) {
		for (var t = [], n = [], a = await r("WAWebLidAwareContactsDB").bulkGet(e.map(function(e) {
			return e.lid.toString();
		})), i = 0; i < e.length; i++) {
			var l = e[i], s = a[i];
			if (l.username != null) {
				var u = o("WAWebUsernameTypes").asMaybeUsername(l.username);
				u != null && (s == null || s.username == null && s.phoneNumber == null) && t.push({
					userId: l.lid,
					username: u
				});
			} else l.displayName, (s == null || s.displayNameLID == null) && n.push({
				lid: l.lid,
				data: { displayNameLID: l.displayName }
			});
		}
		await o("WAWebSetUsernameJob").setUsernamesJob(t), await o("WAWebUpdateLidMetadataJob").updateLidMetadataJob(n);
	}
	function C(e) {
		return e.map(function(e) {
			return {
				lid: e.lid,
				pn: e.pn
			};
		});
	}
	function b(e) {
		var t = new (o("WAWebCriticalEventWamEvent")).CriticalEventWamEvent({
			name: e,
			debug: "{fetch}"
		});
		return t.commitAndWaitForFlush();
	}
	async function v() {
		if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.hasStateDiscrepancy()) return await o("WAWebSocketLogoutJob").socketLogout(o("WAWebLogoutReasonConstants").LogoutReason.LidMigrationStateDiscrepancy);
		o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[blocklist] received a lid-based blocklist on an unmigrated device, will send critical event and log out"]))).sendLogs("LidBlocklistUnmigratedChatDb"), await b("LidBlocklistUnmigratedChatDb"), o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[blocklist] critical event committed"]))), await o("WAPromiseDelays").delayMs(5e3), await o("WAWebSocketLogoutJob").socketLogout(o("WAWebLogoutReasonConstants").LogoutReason.LidBlocklistChatDbUnmigrated);
	}
	l.fetchAndUpdateBlocklist = f, l.learnIdentifiers = g;
}), 98);
