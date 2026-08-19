__d("MWInboxFollowUps", [
	"$InternalEnum",
	"DateConsts",
	"I64",
	"LSMessagingThreadTypeUtil",
	"MAWCurrentUser",
	"MWPIsThreadUnread",
	"Promise",
	"ReQL",
	"ReStoreTabNotifier",
	"WebAsyncStorage",
	"asyncToGeneratorRuntime",
	"promiseDone",
	"react",
	"react-compiler-runtime",
	"useDebouncedComet"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = s || (s = o("react")), d = c.useCallback, m = c.useState, p = 15, _ = "inbox_follow_ups_" + o("MAWCurrentUser").getID(), f = (u || (u = o("I64"))).of_string(o("MAWCurrentUser").getID()), g = "cached_reminders", h = [], y = null, C = function() {
		h = [], y = null;
	}, b = r("ReStoreTabNotifier")("tabs_" + _), v = function(t) {
		if (t == null) h = [], y = null;
		else {
			var e, n;
			y = t, h = (e = t == null || (n = t._priv) == null ? void 0 : n[g]) != null ? e : [];
		}
	}, S = function(t) {
		r("promiseDone")(R({
			action: 1,
			metadata: { lastAccessedThread: (u || (u = o("I64"))).of_float(Date.now()) },
			threadKey: t
		}));
	}, R = function(a) {
		return new (e || (e = (n("Promise"))))(function(e, t) {
			return r("WebAsyncStorage").upsertAndSaveAtomic(_, function(e) {
				if (a.action === 1) {
					var t = (u || (u = o("I64"))).to_string(a.threadKey), n = babelHelpers.extends({}, e, { _priv: babelHelpers.extends({}, e == null ? void 0 : e._priv) });
					return n[t] = a.metadata, n;
				} else if (a.action === 2) {
					var r;
					return babelHelpers.extends({}, e, { _priv: (r = {}, r[g] = a.threadKeys, r) });
				}
			}, function(n, r) {
				if (n != null) return t(n);
				b.postMessage("invalidateReminderMetadata"), v(r), e();
			});
		});
	}, L = function() {
		return new (e || (e = (n("Promise"))))(function(e, t) {
			if (y != null) return e(y);
			r("WebAsyncStorage").getItem(_, function(n, r) {
				if (n != null) return t(n);
				v(r), e(r);
			});
		});
	}, E = n("$InternalEnum").Mirrored([
		"None",
		"Sender",
		"Receiver"
	]), k = function(r, a) {
		if (!o("LSMessagingThreadTypeUtil").isOneToOne(a.threadType) || o("MWPIsThreadUnread").isThreadUnread(a)) return (e || (e = n("Promise"))).resolve(E.None);
		var t = a.snippetSenderContactId;
		return t == null || a.lastMessageCtaType !== "messenger_reply_reminder" ? (e || (e = n("Promise"))).resolve(E.None) : o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(r.tables.participants, ["contactId"]).getKeyRange(a.threadKey)).then(function(e) {
			if (e.length === 1 && (u || (u = o("I64"))).equal(e[0].contactId, f)) return E.None;
			var n = Date.now() - (u || (u = o("I64"))).to_float(a.lastActivityTimestampMs);
			if (n >= o("DateConsts").MS_PER_DAY * 7) return E.None;
			if ((u || (u = o("I64"))).equal(t, f)) {
				if (n >= o("DateConsts").MS_PER_DAY) return E.Sender;
			} else if (n >= o("DateConsts").MS_PER_HOUR * 6) return E.Receiver;
			return E.None;
		});
	}, I = function(t) {
		return h.find(function(e) {
			return (u || (u = o("I64"))).equal(e, t.threadKey);
		}) != null;
	}, T = function() {
		r("promiseDone")(L()), b.onEventReceive("invalidateReminderMetadata", function() {
			v(null), r("promiseDone")(L());
		});
	};
	function D(e) {
		var t = o("react-compiler-runtime").c(9), a = m(h), i = a[0], l = a[1], s;
		t[0] !== e ? (s = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var a = null, i = null;
				return L().then((function() {
					var s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
						for (var s = 0; s < t.length && s < p; s++) {
							var c = t[s], d = c[1], m = yield k(e, d);
							if (m !== E.None) {
								var _ = n == null ? void 0 : n[(u || (u = o("I64"))).to_string(d.threadKey)];
								if (!(_ != null && (u || (u = o("I64"))).gt(_.lastAccessedThread, d.lastActivityTimestampMs))) {
									if (m === E.Sender) {
										if (i != null) continue;
										i = d.threadKey;
									} else {
										if (a != null) continue;
										a = d.threadKey;
									}
									if (i != null && a != null) break;
								}
							}
						}
						var f = [a, i].filter(Boolean);
						h = f, l(f), r("promiseDone")(R({
							action: 2,
							threadKeys: f
						}));
					});
					return function(e) {
						return s.apply(this, arguments);
					};
				})());
			});
			return function(n) {
				return t.apply(this, arguments);
			};
		})(), t[0] = e, t[1] = s) : s = t[1];
		var c = s, d;
		t[2] !== c ? (d = function(t) {
			r("promiseDone")(c(t));
		}, t[2] = c, t[3] = d) : d = t[3];
		var _;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = {
			leading: !1,
			wait: 200
		}, t[4] = _) : _ = t[4];
		var f = r("useDebouncedComet")(d, _), g;
		return t[5] !== f || t[6] !== c || t[7] !== i ? (g = {
			computeInboxFollowUps: f,
			computeInboxFollowUpsAsync: c,
			reminders: i
		}, t[5] = f, t[6] = c, t[7] = i, t[8] = g) : g = t[8], g;
	}
	l.clearCache_FOR_TESTING_ONLY = C, l.touchThreadMetadata = S, l.setMetadata = R, l.getMetadata = L, l.EligibilityCheck = E, l.isFollowUpTagDisplayed = I, l.setupTabsListener = T, l.useInboxFollowUps = D;
}), 98);
