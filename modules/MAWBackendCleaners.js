__d("MAWBackendCleaners", [
	"BackendInitLoggingUtils",
	"MAWDeleteExpiredMsgsApi",
	"MAWDeleteForMeMsgContentCleaner",
	"MAWEphemeralCleaner",
	"MAWExpiredQuoteCleaner",
	"MAWExpiredXMACleaner",
	"MAWGetNextDeleteDFMContentTs",
	"MAWGetNextDeletePendingStanzaTs",
	"MAWGetNextDeleteUnsendContentTs",
	"MAWGetNextDeletionTsApi",
	"MAWGetNextExpirationTsApi",
	"MAWGetNextExpiredQuote",
	"MAWGetNextExpiredXMATs",
	"MAWPendingStanzaCleaner",
	"MAWRemoveExpiredDFMMsgsContent",
	"MAWRemoveExpiredMsgsFromUIApi",
	"MAWRemoveExpiredPendingStanzas",
	"MAWRemoveExpiredQuoteContentApi",
	"MAWRemoveExpiredUnsendMsgsContent",
	"MAWRemoveExpiredXMAMsgsContentApi",
	"MAWUnsendMsgContentCleaner",
	"WADeleteReceiptsApi"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e() {
		o("MAWEphemeralCleaner").startEphemeralCleaner({
			expiryFns: {
				getNextTs: o("MAWGetNextExpirationTsApi").getNextExpirationTs,
				purgeEnabled: function() {
					return !0;
				},
				removeExpired: o("MAWRemoveExpiredMsgsFromUIApi").removeExpiredMsgsFromUI
			},
			purgeDeletionsFns: {
				getNextTs: o("MAWGetNextDeletionTsApi").getNextDeletionTs,
				purgeEnabled: function() {
					return !0;
				},
				removeExpired: function() {
					return o("MAWDeleteExpiredMsgsApi").deleteExpiredMsgs().then(function(e) {
						return e.length > 0 ? o("WADeleteReceiptsApi").deleteReceipts(e).then(function() {
							return e.length;
						}) : e.length;
					});
				}
			}
		}), o("MAWUnsendMsgContentCleaner").startUnsendMsgContentCleaner({
			getNextTs: o("MAWGetNextDeleteUnsendContentTs").getNextDeleteUnsendContentTs,
			purgeEnabled: function() {
				return !0;
			},
			removeExpired: o("MAWRemoveExpiredUnsendMsgsContent").removeExpiredUnsendMsgsContent
		}), o("MAWDeleteForMeMsgContentCleaner").startDeleteForMeMsgContentCleaner({
			getNextTs: o("MAWGetNextDeleteDFMContentTs").getNextDeleteDFMContentTs,
			purgeEnabled: function() {
				return !0;
			},
			removeExpired: o("MAWRemoveExpiredDFMMsgsContent").removeExpiredDFMMsgsContent
		}), o("MAWPendingStanzaCleaner").startPendingStanzaCleaner({
			getNextTs: o("MAWGetNextDeletePendingStanzaTs").getNextDeletePendingStanzaTs,
			purgeEnabled: function() {
				return !0;
			},
			removeExpired: o("MAWRemoveExpiredPendingStanzas").removeExpiredPendingStanzas
		}), o("MAWExpiredXMACleaner").startExpiredXMACleaner({
			getNextTs: o("MAWGetNextExpiredXMATs").getNextExpiredXMATs,
			purgeEnabled: function() {
				return !0;
			},
			removeExpired: o("MAWRemoveExpiredXMAMsgsContentApi").removeExpiredXMAMsgsContent
		}), o("MAWExpiredQuoteCleaner").startExpiredQuoteCleaner({
			getNextTs: o("MAWGetNextExpiredQuote").getNextExpiredQuoteTs,
			purgeEnabled: function() {
				return !0;
			},
			removeExpired: o("MAWRemoveExpiredQuoteContentApi").removeExpiredQuoteContent
		}), o("BackendInitLoggingUtils").MAWInitPoint("backend_cleaners_ready");
	}
	l.setupCleaners = e;
}), 98);
