__d("MAWFetchEBDeanonMessagesMetadata", [
	"DateConsts",
	"EBFormatUtils",
	"FBLogger",
	"I64",
	"MAWEBDeanonFetch",
	"MAWMessagesDirection",
	"MAWMessagesPaginationUtils",
	"WAResultOrError"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = 100, u = "timeout", c = 10 * o("DateConsts").MS_PER_SEC;
	async function d(t) {
		var n = t.chatJid, a = t.direction, i = t.includeReferenceTimestamp, l = t.logger, d = t.range, m = t.sortFn;
		r("FBLogger")("messenger_web").info("EBMessageRangeDataSource: Issuing fetch request to EB Deanon API"), l == null || l.markQPLPoint("eb_fetch_deanon_start");
		var p = o("MAWMessagesDirection").translateMwpDirectionToMawDirection(a), _ = (e || (e = o("I64"))).to_float(o("EBFormatUtils").adjustTs(o("MAWMessagesDirection").getI64RangeTimestampForDirection(a, d), p)), f = await o("MAWMessagesPaginationUtils").getRangeExternalIdForDirection(a, d);
		return Promise.race([o("MAWEBDeanonFetch").fetchMessagesMetadataFromEBDeanon({
			chatJid: n,
			count: s,
			direction: p,
			includeReferenceTimestamp: i,
			referenceExternalId: f,
			referenceTimestampMs: _,
			sortFn: m
		}), new Promise(function(e) {
			return window.setTimeout(function() {
				return e(o("WAResultOrError").makeError(u));
			}, c);
		})]).then(function(e) {
			return l == null || l.markQPLPoint("eb_fetch_deanon_end"), e;
		});
	}
	l.fetchEBDeanonMessagesMetadata = d;
}), 98);
