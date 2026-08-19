__d("EncryptedBackupsDYISingleton", [
	"EncryptedBackupsDYIFileUtils",
	"EncryptedBackupsDYIGenerateThreadMetadata",
	"EncryptedBackupsDYIProgressEmitter",
	"EncryptedBackupsDYISingletonFactory",
	"EncryptedBackupsDYITypes",
	"EncryptedBackupsDYIZipUtils",
	"FBLogger",
	"I64",
	"LSIntEnum",
	"MAWBridge",
	"WAHashUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["senderId"], s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k = 18e4, I = null;
	function T() {
		try {
			return WorkerGlobalScope !== void 0 && self instanceof WorkerGlobalScope;
		} catch (e) {
			return !1;
		}
	}
	function D(e, t, n) {
		if (I == null) switch (e) {
			case o("EncryptedBackupsDYITypes").EncryptedBackupsDYIConfig.Armadillo:
				if (T()) throw r("FBLogger")("wmi_eb").mustfixThrow("EncryptedBackupsDYISingleton for Armadillo can only be initialised in the main thread");
				I = o("EncryptedBackupsDYISingletonFactory").getMAWEncryptedBackupsDYISingleton(t, n);
				break;
		}
	}
	function x() {
		I = null;
	}
	function $() {
		return I;
	}
	function P() {
		if (I == null) throw r("FBLogger")("wmi_eb").mustfixThrow("EncryptedBackupsDYISingleton is not initialised. Please call EncryptedBackupsDYISingleton.initSingleton() first.");
		return I;
	}
	function N() {
		P().skipRemainingAttachments();
	}
	var M = (function() {
		function t(e, t, n, r, a, i, l) {
			this.$8 = new Map(), this.$9 = new Set(), this.$10 = new Set(), this.$11 = new Map(), this.$12 = new Map(), this.$13 = new Map(), this.$14 = new Map(), this.$15 = new Map(), this.$16 = o("EncryptedBackupsDYITypes").EncryptedBackupsDYIMediaOption.FullSize, this.$17 = o("EncryptedBackupsDYITypes").EncryptedBackupsDYIDateRange.FromAccountCreation, this.$18 = "fetching_threads", this.$19 = 0, this.$20 = 0, this.$21 = 0, this.$22 = !1, this.$23 = 0, this.$24 = !1, this.$25 = null, this.$26 = !1, this.$27 = !1, this.$32 = 0, this.$1 = e, this.$2 = t, this.$3 = n, this.$7 = r, this.$4 = a, this.$5 = i, this.$6 = l;
		}
		var r = t.prototype;
		return r.getDB = function() {
			return this.$1();
		}, r.getLogger = function() {
			return this.$7;
		}, r.setPhase = function(t) {
			this.$18 = t, t === "downloading_media" ? (this.$28(), this.$29()) : this.$30(), this.$31();
		}, r.$29 = function() {
			var e = this;
			this.$25 == null && (this.$25 = self.setTimeout(function() {
				e.$24 = !0, e.$31(), e.$7.LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Skip attachments option now available after ", "ms timeout"])), k);
			}, k));
		}, r.$30 = function() {
			this.$25 != null && (self.clearTimeout(this.$25), this.$25 = null), this.$24 = !1;
		}, r.setThreadsTotal = function(t) {
			this.$19 = t;
		}, r.incrementThreadsFailed = function() {
			this.$20++, this.$31();
		}, r.getProgress = function() {
			return {
				attachmentsDone: this.$22 ? this.$23 : this.$21 - this.$10.size,
				attachmentsSkipped: this.$22,
				attachmentsTotal: this.$21,
				canSkipAttachments: this.$24,
				phase: this.$18,
				threadsDone: this.$19 - this.$9.size,
				threadsFailed: this.$20,
				threadsTotal: this.$19
			};
		}, r.emitProgressWithError = function(t) {
			this.$18 = "failed", o("EncryptedBackupsDYIProgressEmitter").emitDYIProgress(babelHelpers.extends({}, this.getProgress(), { errorMessage: t }));
		}, r.$31 = function() {
			o("EncryptedBackupsDYIProgressEmitter").emitDYIProgress(this.getProgress());
		}, r.$33 = function() {
			this.$32++, this.$32 % 10 === 0 && o("EncryptedBackupsDYIProgressEmitter").emitDYIProgress(this.getProgress());
		}, r.getAllMediaUrls = function() {
			return Array.from(this.$8.values());
		}, r.$34 = function(t) {
			return this.$8.get(t);
		}, r.setMediaUrlByPlainTextHash = function(t, n) {
			this.$8.has(t) || this.$8.set(t, n);
		}, r.addThreadKeyToThreadsRestoreInProgress = function(t) {
			this.$9.add(t), this.$18 = "restoring_messages";
		}, r.isThreadRestoreInProgressForThreadKey = function(t) {
			return this.$9.has(t);
		}, r.deleteThreadKeyFromThreadsRestoreInProgress = function(t) {
			this.$9.delete(t), this.$7.LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
				"Finished handling message range queries for thread with thread key ",
				". ",
				" threads left"
			])), t, this.$9.size);
			var e = this.$19 - this.$9.size;
			this.$19 > 0 && (this.$19 < 20 || e % 5 === 0 || e === this.$19) && this.addDYIQPLAnnotations({ int: {
				threads_done: e,
				threads_total: this.$19
			} }), this.$10.size > 0 && (this.$18 = "downloading_media", this.$28(), this.$29()), this.$33(), !this.$26 && this.$35() && (this.$7.LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["DYI flow complete - generating output"]))), this.$26 = !0, this.$36());
		}, r.isThreadsRestoreComplete = function() {
			return this.$9.size === 0;
		}, r.addPlaintextHashToAttachmentDownloadsInProgress = function(t) {
			if (this.$22) {
				this.$7.LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Ignoring new attachment ", " — attachments were skipped"])), o("WAHashUtils").sanitisePlaintextHash(t));
				return;
			}
			this.$10.add(t), this.$21++, this.$7.LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Started processing attachment with plaintext hash ", "."])), o("WAHashUtils").sanitisePlaintextHash(t));
		}, r.deletePlaintextHashFromAttachmentDownloadsInProgress = function(t) {
			if (!this.$10.has(t)) {
				this.$7.LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["Ignoring stale download completion for ", ""])), o("WAHashUtils").sanitisePlaintextHash(t));
				return;
			}
			this.$10.delete(t), this.$7.LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
				"Finished processing attachment with plaintext hash ",
				". ",
				" attachments left"
			])), o("WAHashUtils").sanitisePlaintextHash(t), this.$10.size), this.$10.size < 30 && this.$7.LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["Remaining attachments: ", ""])), Array.from(this.$10).map(o("WAHashUtils").sanitisePlaintextHash).join(", ")), this.$33(), !this.$26 && this.$35() && (this.$7.LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["DYI flow complete - generating output"]))), this.$26 = !0, this.$36());
		}, r.isAttachmentDownloadInProgressForPlaintextHash = function(t) {
			return this.$10.has(t);
		}, r.isAttachmentDownloadCompleteForPlaintextHash = function(t) {
			return !!this.$8.get(t);
		}, r.isAttachmentDownloadComplete = function() {
			return this.$10.size === 0;
		}, r.isAttachmentsSkipped = function() {
			return this.$22;
		}, r.skipRemainingAttachments = function() {
			if (!this.$22) {
				var e = this.$10.size;
				this.$23 = this.$21 - this.$10.size, this.$22 = !0, this.$7.LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["User chose to skip remaining ", " attachment downloads"])), e), this.logDYIQPLPoint("skip_attachments", { int: {
					attachments_done: this.$21 - this.$10.size,
					attachments_skipped: e
				} }), this.$10.clear(), this.$30(), this.$31(), !this.$26 && this.$35() && (this.$26 = !0, this.$7.LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["DYI flow complete after skipping attachments - generating output"]))), this.$36());
			}
		}, r.setMessagesByThreadKey = function(t, n, r) {
			var e = this.getMessagesByThreadKey(t);
			e.set(n, r);
		}, r.getMessagesByThreadKey = function(t) {
			return this.$37(t) || this.$11.set(t, new Map()), this.$11.get(t);
		}, r.$37 = function(t) {
			return this.$11.has(t);
		}, r.hasMessage = function(t, n) {
			var e = this.$11.get(t);
			return e == null ? !1 : e.has(n);
		}, r.getThreadIdForThreadKey = function(t) {
			return this.$13.get(t);
		}, r.getThreadKeyForThreadId = function(t) {
			return this.$14.get(t);
		}, r.setThreadMapping = function(t, n) {
			this.$13.set(t, n), this.$14.set(n, t);
		}, r.setThreadMetaDataByThreadKey = function(t, n, r) {
			this.$12.set(t, {
				participants: n,
				threadName: r
			});
		}, r.getThreadMetadataMap = function() {
			return this.$12;
		}, r.setContactNameForContactId = function(t, n) {
			this.$15.set(t, n);
		}, r.getContactNameForContactId = function(t) {
			return this.$15.get(t);
		}, r.getContactNameMap = function() {
			return this.$15;
		}, r.getMediaOption = function() {
			return this.$16;
		}, r.setMediaOption = function(t) {
			this.$16 = t;
		}, r.shouldDownloadMedia = function() {
			return this.$16 !== o("EncryptedBackupsDYITypes").EncryptedBackupsDYIMediaOption.SkipMedia;
		}, r.shouldDownloadFullSize = function() {
			return this.$16 === o("EncryptedBackupsDYITypes").EncryptedBackupsDYIMediaOption.FullSize;
		}, r.getDateRange = function() {
			return this.$17;
		}, r.setDateRange = function(t) {
			this.$17 = t;
		}, r.getDateRangeCutoffMs = function() {
			return o("EncryptedBackupsDYITypes").getDateRangeCutoffMs(this.$17);
		}, r.getOutput = function() {
			var t = this;
			return Array.from(this.getThreadMetadataMap(), function(n) {
				var r = n[0], o = n[1], a = t.$37(r), i = a ? Array.from(t.getMessagesByThreadKey(r), function(e) {
					var n = e[0], r = e[1];
					return babelHelpers.extends({}, r, { media: Array.from(r.media, function(e) {
						var n = t.$34(e);
						return { uri: n != null ? "./" + n : "Failed to download media" };
					}) });
				}) : [];
				i = i.map(function(n) {
					var r = n.senderId, o = babelHelpers.objectWithoutPropertiesLoose(n, e);
					if (r != null && o.senderName === "Unknown User") {
						var a = t.getContactNameForContactId(r);
						if (a != null) return babelHelpers.extends({}, o, { senderName: a });
					}
					return n;
				});
				var l = i.sort(function(e, t) {
					return typeof e.timestamp == "number" && typeof t.timestamp == "number" ? e.timestamp - t.timestamp : 0;
				});
				return babelHelpers.extends({}, o, { messages: l });
			});
		}, r.$35 = function() {
			return this.isAttachmentDownloadComplete() && this.isThreadsRestoreComplete();
		}, r.$38 = function(t) {
			switch (t) {
				case 0: return o("EncryptedBackupsDYITypes").EncryptedBackupsDYIState.InProgress;
				case 1: return o("EncryptedBackupsDYITypes").EncryptedBackupsDYIState.Completed;
				case 2: return o("EncryptedBackupsDYITypes").EncryptedBackupsDYIState.Failed;
				case -1:
				default: return o("EncryptedBackupsDYITypes").EncryptedBackupsDYIState.NotStarted;
			}
		}, r.updateDYIStatus = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t, r = yield this.getDB();
				yield r.runInTransaction((function() {
					var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
						yield t.encrypted_backups_dyi_backup_restore_status.put({
							currentStatus: (L || (L = o("LSIntEnum"))).ofNumber(e),
							pk: (E || (E = o("I64"))).zero
						});
					});
					return function(e) {
						return t.apply(this, arguments);
					};
				})(), "readwrite", void 0, void 0, i.id + ":764"), o("MAWBridge").getBridge().fireAndForget("event", "updateDYIStatus", {
					qplEvent: this.$2,
					qplInstanceKeyE2E: (t = this.$3) != null ? t : void 0,
					status: this.$38(e)
				});
			});
			function t(t) {
				return e.apply(this, arguments);
			}
			return t;
		})(), r.$39 = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = this, t = new Set();
				this.getContactNameMap().forEach(function(e, n) {
					e === "Unknown User" && t.add(n);
				});
				var n = yield this.getDB(), r = yield o("EncryptedBackupsDYIGenerateThreadMetadata").getAllUnmappedContacts(n, t);
				r.forEach(function(t) {
					var n = (E || (E = o("I64"))).to_string(t.id);
					e.setContactNameForContactId(n, t.name);
				}), this.$7.LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose(["Fetched remaining contact names, total of ", " contacts"])), this.getContactNameMap().size.toString());
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(), r.$36 = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = this;
				if (this.logDYIQPLPoint("complete_dyi_flow_start"), this.$19 === 0) {
					this.setPhase("complete_no_threads");
					var t = yield this.getDB();
					yield t.runInTransaction((function() {
						var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
							yield e.encrypted_backups_dyi_backup_restore_status.put({
								currentStatus: (L || (L = o("LSIntEnum"))).ofNumber(1),
								pk: (E || (E = o("I64"))).zero
							});
						});
						return function(t) {
							return e.apply(this, arguments);
						};
					})(), "readwrite", void 0, void 0, i.id + ":815"), this.$6(), this.clear();
					return;
				}
				this.setPhase("generating_zip"), yield this.$39(), this.$7.LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["Generating output"])));
				var r = this.getOutput(), a = Array.from(this.$8.values());
				this.$7.LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose(["Generating zip file"]))), yield o("EncryptedBackupsDYIZipUtils").generateZipFile(r, a, this.$7, function(t, n) {
					e.logDYIQPLPoint(t, n);
				}, n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					e.logDYIQPLPoint("complete_dyi_flow_end"), e.setPhase("complete");
					var t = e.getProgress();
					yield e.updateDYIStatus(1), e.clear(), o("EncryptedBackupsDYIProgressEmitter").emitDYIProgress(t);
				}), (function() {
					var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
						e.$7.ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose(["Failed to generate zip file: ", ""])), t), e.logDYIQPLPoint("complete_dyi_flow_error"), e.emitProgressWithError("Failed to create the download file. Please try again.");
						var n = e.getProgress();
						yield e.updateDYIStatus(2), e.clear(), o("EncryptedBackupsDYIProgressEmitter").emitDYIProgress(n);
					});
					return function(e) {
						return t.apply(this, arguments);
					};
				})());
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(), r.exitDYIEarly = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
				t != null && this.$7.LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose(["DYI Exiting Early - Found ", " threads"])), t), this.logDYIQPLPoint("dyi_exit_early", { int: { dyi_threads: t } }), e ? (this.emitProgressWithError(n != null ? n : "Failed to download your messages. Please try again."), yield this.updateDYIStatus(2), this.clear()) : yield this.$36();
			});
			function t(t, n, r) {
				return e.apply(this, arguments);
			}
			return t;
		})(), r.clear = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				this.$8 = new Map(), this.$9 = new Set(), this.$10 = new Set(), this.$11 = new Map(), this.$12 = new Map(), this.$16 = o("EncryptedBackupsDYITypes").EncryptedBackupsDYIMediaOption.FullSize, this.$17 = o("EncryptedBackupsDYITypes").EncryptedBackupsDYIDateRange.FromAccountCreation, this.$18 = "fetching_threads", this.$19 = 0, this.$20 = 0, this.$21 = 0, this.$22 = !1, this.$23 = 0, this.$32 = 0, this.$26 = !1, this.$27 = !1, this.$30();
				var e = yield o("EncryptedBackupsDYIFileUtils").getRootFolderHandle();
				try {
					yield e.removeEntry(o("EncryptedBackupsDYIFileUtils").DyiMediaFolder, { recursive: !0 });
				} catch (e) {
					if (!(e instanceof Error) || e.name !== "NotFoundError") throw e;
				}
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(), r.$28 = function() {
			this.$27 || (this.$27 = !0, this.logDYIQPLPoint("media_download_phase_start", { int: { attachments_total: this.$21 } }));
		}, r.logDYIQPLPoint = function(t, n) {
			this.$4(t, n);
		}, r.addDYIQPLAnnotations = function(t) {
			this.$5(t);
		}, t;
	})();
	l.initSingleton = D, l.resetSingleton = x, l.getSingletonIfExists = $, l.getSingleton = P, l.skipRemainingAttachments = N, l.EncryptedBackupsDYISingleton = M;
}), 98);
