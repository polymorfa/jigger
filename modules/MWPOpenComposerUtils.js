__d("MWPOpenComposerUtils", [
	"I64",
	"LSRemoveMediaSendJobsStoredProcedure",
	"LSResumeMediaSendJobStoredProcedure",
	"MWConsole",
	"Promise",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(e, t) {
		return e.media_staging.get(t).then(function(r) {
			return r != null ? e.media_staging.delete(t) : (s || (s = n("Promise"))).resolve();
		});
	}
	function c(e, t, n) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var r = yield e.media_staging.get(t);
			r != null && (yield e.media_staging.put(n(r)));
		}), d.apply(this, arguments);
	}
	function m(e, t, r, o, a) {
		return e.attachments.get(t, r, o).then(function(i) {
			return i != null ? e.attachments.upsert([
				t,
				r,
				o
			], a(i)) : (s || (s = n("Promise"))).resolve();
		});
	}
	function p(t, a, i) {
		return r("LSResumeMediaSendJobStoredProcedure")(t, {
			dataTraceId: i != null ? i : void 0,
			jobId: a,
			pluginType: (e || (e = o("I64"))).zero
		}).then(function(e) {
			var o = e[0], i = e[1], l = e[2];
			return o ? r("LSRemoveMediaSendJobsStoredProcedure")(t, { offlineThreadingId: a }) : (s || (s = n("Promise"))).resolve();
		});
	}
	l.deleteMediaStaging = u, l.updateMediaStaging = c, l.updateAttachment = m, l.resumeSendJob = p;
}), 98);
