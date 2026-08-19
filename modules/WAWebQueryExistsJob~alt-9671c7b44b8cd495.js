__d("WAWebQueryExistsJob", [
	"WALogger",
	"WAPhoneFindCC",
	"WAWebABProps",
	"WAWebApiContactUsernameFields",
	"WAWebBackendErrors",
	"WAWebContactSyncErrorCodes",
	"WAWebContactSyncLogger",
	"WAWebDBCreateLidPnMappings",
	"WAWebHandleUsernameSync",
	"WAWebMexUsersGetUsername",
	"WAWebSetUsernameJob",
	"WAWebUsernameGatingUtils",
	"WAWebUsernameTypes",
	"WAWebUsernameWorkerCompatibleGatingUtils",
	"WAWebUsync",
	"WAWebUsyncUser",
	"WAWebWid",
	"WAWebWidFactory"
], (function(t, n, r, o, a, i, l) {
	var e, s;
	function u(e, t) {
		return e.isLid() ? d({
			type: "lid",
			wid: e
		}, t) : d({
			type: "phone",
			phone: "+" + e.toString()
		}, t);
	}
	function c(e, t) {
		return d({
			type: "phone",
			phone: e
		}, t);
	}
	async function d(e, t) {
		var n = new (o("WAWebUsyncUser")).USyncUser(), r = new (o("WAWebUsync")).USyncQuery();
		e.type === "phone" ? (r.withContactProtocol(o("WAWebUsync").USYNC_ADDRESSING_MODE.LID), n.withPhone(e.phone)) : n.withId(e.wid), o("WAWebABProps").getABPropConfigValue("username_antiscraping_send_cached_un") === !0 && await p(n, e), r.withUser(n), r.withBusinessProtocol(), r.withDisappearingModeProtocol(), r.withUsernameProtocol();
		var a = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
			syncType: o("WAWebContactSyncLogger").getSyncTypeString("interactive", "query"),
			requestOrigin: t != null ? t : o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN,
			requestedCount: 1,
			protocols: r.protocols
		}), i = await o("WAWebContactSyncLogger").contactSyncLogger.executeWithLogging(a, function() {
			return r.execute();
		}, o("WAWebContactSyncErrorCodes").QUERY_EXIST), l = i.error.all || i.error.contact;
		if (l) throw o("WAWebContactSyncLogger").contactSyncLogger.logFailure(a, l.errorCode, i, o("WAWebContactSyncErrorCodes").QUERY_EXIST), new (o("WAWebBackendErrors")).ServerStatusCodeError(l.errorCode, l.errorText);
		var s = i.list;
		if (s.length !== 1) return o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(a, i), null;
		var u = s[0], c = u.business, d = u.contact, m = u.id, _ = u.lid, f = u.pn, g = u.username, h = s[0].disappearingMode;
		if (e.type === "phone" && (d == null ? void 0 : d.type) !== "in") return o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(a, i), null;
		var y = {
			wid: m,
			biz: c != null,
			bizInfo: c,
			isUsernameSearch: e.type === "phone" ? !1 : void 0
		};
		o("WAWebUsernameGatingUtils").usernameSearchEnabled() && g != null && (y.username = g), h && (y.disappearingMode = {
			duration: h.duration,
			settingTimestamp: h.t
		}, h.ephemeralityDisabled && (y.disappearingMode.isEphemeralityDisabled = !0));
		var C = null, b = null;
		return m.isLid() ? (C = f, b = m) : (C = m, _ != null && (b = o("WAWebWidFactory").createUserWidOrThrow(_, "lid"))), C != null && b != null && (await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
			mappings: [{
				pn: C,
				lid: b
			}],
			flushImmediately: !0,
			learningSource: "usync"
		}), !m.isLid() && o("WAWebUsernameWorkerCompatibleGatingUtils").onlyShowLidContacts() && (y.wid = b)), await o("WAWebHandleUsernameSync").handleUsernameSync(i), o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(a, i), y;
	}
	function m(e) {
		if (e.type === "lid") return e.wid;
		var t = o("WAPhoneFindCC").extractDigits(e.phone) + "@c.us";
		return r("WAWebWid").isWid(t) ? o("WAWebWidFactory").createUserWidOrThrow(t) : null;
	}
	async function p(e, t) {
		var n = m(t);
		if (n != null) {
			var r = o("WAWebUsernameTypes").serializeMaybeUsername(await o("WAWebApiContactUsernameFields").getContactUsername(n));
			r != null && e.withUsername(r);
		}
	}
	async function _(t, n) {
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[usync] querying contact: ", " for username info"])), t);
		var r = new (o("WAWebUsyncUser")).USyncUser(), a = new (o("WAWebUsync")).USyncQuery();
		r.withId(t), a.withUser(r), a.withUsernameProtocol();
		var i = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
			syncType: o("WAWebContactSyncLogger").getSyncTypeString("interactive", "query"),
			requestOrigin: n != null ? n : o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN,
			requestedCount: 1,
			protocols: a.protocols
		}), l = await o("WAWebContactSyncLogger").contactSyncLogger.executeWithLogging(i, function() {
			return a.execute();
		}, o("WAWebContactSyncErrorCodes").QUERY_USERNAME_DEPRECATED), u = l.error.all || l.error.contact;
		if (o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[usync] username info response"]))), u) throw o("WAWebContactSyncLogger").contactSyncLogger.logFailure(i, u.errorCode, l, o("WAWebContactSyncErrorCodes").QUERY_USERNAME_DEPRECATED), new (o("WAWebBackendErrors")).ServerStatusCodeError(u.errorCode, u.errorText);
		var c = l.list;
		if (c.length !== 1) return o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l), null;
		var d = c[0];
		if (d.id != null) return o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l), {
			id: d.id,
			username: d.username,
			shouldDelete: !Object.hasOwn(d, "username")
		};
		o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l);
	}
	async function f(e) {
		if (e.isLid()) {
			var t, n, r;
			if (o("WAWebABProps").getABPropConfigValue("mex_usync_username_query")) {
				var a = o("WAWebWidFactory").createUserWidOrThrow(e.toString()), i = await o("WAWebMexUsersGetUsername").getMexUserUsername(a);
				n = a, i != null ? t = o("WAWebUsernameTypes").serializeMaybeUsername(i) : r = !0;
			} else {
				var l = await _(e);
				l != null && (t = l.username, n = l.id, r = l.shouldDelete);
			}
			if (n != null) {
				var s = !1, u = !1, c = !1, d, m = o("WAWebUsernameTypes").asMaybeUsername(t);
				if (m != null) {
					var p = await o("WAWebSetUsernameJob").setUsernamesJob([{
						userId: n,
						username: m
					}]), f = p.get(n.toString());
					s = (f == null ? void 0 : f.usernameChanged) === !0, u = (f == null ? void 0 : f.wasPreviouslyKnown) === !0, c = (f == null ? void 0 : f.isPhoneNumberKnown) === !0, d = o("WAWebUsernameTypes").serializeMaybeUsername(f == null ? void 0 : f.oldUsername);
				} else if (r === !0) {
					var g = await o("WAWebSetUsernameJob").setUsernamesJob([{
						userId: n,
						deleteUsername: !0
					}]), h = g.get(n.toString());
					s = (h == null ? void 0 : h.usernameChanged) === !0, u = (h == null ? void 0 : h.wasPreviouslyKnown) === !0, c = (h == null ? void 0 : h.isPhoneNumberKnown) === !0, d = o("WAWebUsernameTypes").serializeMaybeUsername(h == null ? void 0 : h.oldUsername);
				}
				return {
					username: t,
					usernameChanged: s,
					wasPreviouslyKnown: u,
					isPhoneNumberKnown: c,
					oldUsername: d != null ? d : void 0
				};
			}
		}
	}
	async function g(e, t, n) {
		if (e.length < o("WAWebUsernameTypes").USERNAME_MIN_LENGTH || e.length > o("WAWebUsernameTypes").USERNAME_MAX_LENGTH) return null;
		var r = new (o("WAWebUsyncUser")).USyncUser(), a = new (o("WAWebUsync")).USyncQuery();
		a.withUser(r), a.withContactProtocol(o("WAWebUsync").USYNC_ADDRESSING_MODE.LID), a.withBusinessProtocol(), r.withUsername(e), t != null && r.withUsernameKey(t);
		var i = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
			syncType: o("WAWebContactSyncLogger").getSyncTypeString("interactive", "query"),
			requestOrigin: n != null ? n : o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN,
			requestedCount: 1,
			protocols: a.protocols
		}), l = await o("WAWebContactSyncLogger").contactSyncLogger.executeWithLogging(i, function() {
			return a.execute();
		}, o("WAWebContactSyncErrorCodes").QUERY_USERNAME_EXIST), s = l.error.all || l.error.contact;
		if (s) throw o("WAWebContactSyncLogger").contactSyncLogger.logFailure(i, s.errorCode, l, o("WAWebContactSyncErrorCodes").QUERY_USERNAME_EXIST), new (o("WAWebBackendErrors")).ServerStatusCodeError(s.errorCode, s.errorText);
		var u = l.list;
		if (u.length !== 1) return o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l), null;
		var c = u[0], d = c.business, m = c.contact, p = c.id, _ = m.type, f = m.username;
		if (_ === "out") return o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l), null;
		if (p != null) {
			p.isLid() && d != null && d.pn != null && await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
				mappings: [{
					pn: d.pn,
					lid: p
				}],
				flushImmediately: !0,
				learningSource: "usync"
			});
			var g = !1, h = o("WAWebUsernameTypes").asMaybeUsername(f);
			if (h != null) {
				var y = await o("WAWebSetUsernameJob").setUsernamesJob([{
					userId: p,
					username: h
				}]), C = y.get(p.toString());
				g = (C == null ? void 0 : C.usernameChanged) === !0 || (C == null ? void 0 : C.countryCodeChanged) === !0;
			} else {
				var b = await o("WAWebSetUsernameJob").setUsernamesJob([{
					userId: p,
					deleteUsername: !0
				}]), v = b.get(p.toString());
				g = (v == null ? void 0 : v.usernameChanged) === !0 || (v == null ? void 0 : v.countryCodeChanged) === !0;
			}
			return o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l), {
				wid: p,
				biz: d != null,
				bizInfo: d,
				username: f,
				wasUpdated: g,
				isUsernameSearch: !0
			};
		}
		return o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l), {
			keyRequired: !0,
			username: f,
			isUsernameSearch: !0
		};
	}
	l.queryWidExists = u, l.queryPhoneExists = c, l.queryExist = d, l.queryWidUsernameExists = f, l.queryUsernameExists = g;
}), 98);
