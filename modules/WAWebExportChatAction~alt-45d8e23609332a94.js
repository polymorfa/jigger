__d("WAWebExportChatAction", [
	"WAAbortError",
	"WALogger",
	"WAPromiseDelays",
	"WAWebChatGetters",
	"WAWebDBMessageFindLocal",
	"WAWebExportChatLogging",
	"WAWebExportChatMarkdownFormatter",
	"WAWebExportChatPlainTextFormatter",
	"WAWebFileSaver",
	"WAWebFileSaverDownloadData",
	"WAWebFileSaverTypes",
	"WAWebLimitSharingUIUtils",
	"WAWebMsgKey",
	"WAWebMsgModelFromData",
	"WAWebMsgType",
	"WAWebNullFunc",
	"WAWebZipUtils",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = 50, c = 15 * 1024 * 1024, d = 3e4, m = 1e5, p = "media";
	function _(e) {
		return o("WAWebChatGetters").getIsGroup(e) ? "group" : o("WAWebChatGetters").getIsBroadcast(e) ? "broadcast" : "individual";
	}
	var f = !1, g = new Set([
		(s = o("WAWebMsgType")).MSG_TYPE.PROTOCOL,
		s.MSG_TYPE.REACTION,
		s.MSG_TYPE.REACTION_ENC,
		s.MSG_TYPE.POLL_UPDATE,
		s.MSG_TYPE.KEEP_IN_CHAT,
		s.MSG_TYPE.PIN_MESSAGE
	]);
	async function h(e) {
		var t = e.chat, n = e.endDate, a = e.messageLimit, i = e.onProgress, l = e.signal, s = e.startDate, c = [], d = { remote: t.id }, m = async function() {
			if (!(c.length >= a)) {
				if (l != null && l.aborted) throw new (o("WAAbortError")).AbortError("Export cancelled");
				var e = await o("WAWebDBMessageFindLocal").msgFindBefore({
					anchor: d,
					count: u
				});
				if (!(e.status >= 400 || e.messages.length === 0)) {
					var t = !1;
					for (var p of e.messages) {
						var _, f, h = (_ = p.t) != null ? _ : 0, y = (f = p.type) != null ? f : "";
						if (s != null && h < s) {
							t = !0;
							continue;
						}
						if (!g.has(y) && p.subtype !== "change_username" && p.isViewOnce !== !0) {
							var C = p.ephemeralDuration;
							if (!(C != null && C !== 0) && !(n != null && h > n) && (c.push(p), c.length >= a)) break;
						}
					}
					var b = e.messages[0], v = Number.isFinite(a) ? a : -1;
					if (i == null || i("loading", c.length, v), !t && c.length < a && (b == null ? void 0 : b.id) instanceof r("WAWebMsgKey")) return d = b.id, m();
				}
			}
		};
		return await m(), c.sort(function(e, t) {
			var n, r;
			return ((n = e.t) != null ? n : 0) - ((r = t.t) != null ? r : 0);
		}), c;
	}
	async function y(t) {
		var n, a = t.chat, i = t.endDate, l = t.includeMedia, s = t.onProgress, u = t.signal, g = t.startDate, y = _(a), C = l ? "with_media" : "text_only", b = g != null || i != null;
		if (f) {
			var v = new Error("An export is already in progress");
			throw v.stack, v;
		}
		if (o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabled(a)) {
			var S = new Error("Cannot export limit-sharing enabled chat");
			throw S.stack, S;
		}
		var R = Date.now(), L = (n = t.messageLimit) != null ? n : m, E = "loading", k = 0;
		f = !0;
		try {
			s == null || s("loading", 0, 1);
			var I = await h({
				chat: a,
				endDate: i,
				messageLimit: L,
				onProgress: s,
				signal: u,
				startDate: g
			});
			if (k = I.length, u != null && u.aborted) throw new (o("WAAbortError")).AbortError("Export cancelled");
			var T = I.map(function(e) {
				return o("WAWebMsgModelFromData").msgModelFromMsgData(e);
			}), D = a.formattedTitle || a.name || "Chat", x = I.length >= L, $ = [], P = new Set();
			if (l) {
				E = "downloading_media";
				var N = T.filter(function(e) {
					return o("WAWebExportChatMarkdownFormatter").MEDIA_TYPES.has(e.type) && o("WAWebFileSaverDownloadData").isMsgMediaAvailableLocally(e);
				});
				if (s == null || s("downloading_media", 0, N.length), u != null && u.aborted) throw new (o("WAAbortError")).AbortError("Export cancelled");
				await N.reduce(async function(e, t, n) {
					if (await e, u != null && u.aborted) throw new (o("WAAbortError")).AbortError("Export cancelled");
					try {
						var r = await o("WAPromiseDelays").withTimeout(o("WAWebFileSaverDownloadData").getMsgDownloadData(t), d, o("WAWebNullFunc").returnNull);
						if ((r == null ? void 0 : r.blob) != null && r.blob.size <= c) {
							var a;
							$.push({
								blob: r.blob,
								name: p + "/" + r.name
							});
							var i = (a = t.id) == null ? void 0 : a.toString();
							i != null && P.add(i);
						}
					} catch (e) {}
					s == null || s("downloading_media", n + 1, N.length);
				}, Promise.resolve());
			}
			E = "formatting", s == null || s("formatting", 0, 1);
			var M = o("WAWebExportChatMarkdownFormatter").formatChatAsMarkdown({
				chatTitle: D,
				messages: T,
				includeMedia: l,
				mediaFolder: p,
				hasMoreHistory: x,
				downloadedMediaMsgIds: P
			}), w = o("WAWebExportChatPlainTextFormatter").formatChatAsPlainText({
				messages: T,
				includeMedia: l,
				hasMoreHistory: x,
				downloadedMediaMsgIds: P
			});
			if (u != null && u.aborted) throw new (o("WAAbortError")).AbortError("Export cancelled");
			E = "saving", s == null || s("saving", 0, 1);
			var A = D.replace(/[/\\?%*:|\"<>]/g, "_"), F = new Blob([w], { type: "text/plain" }), O = new Blob([M], { type: "text/markdown" }), B = [{
				blob: F,
				name: "chat.txt"
			}, {
				blob: O,
				name: "chat.md"
			}].concat($), W = await o("WAWebZipUtils").zipFiles(B);
			await o("WAWebFileSaver").FileSaver.downloadData(W, A, o("WAWebFileSaverTypes").AllowedFileExtensions.ZIP);
			var q = Date.now() - R, U = {
				messageCount: T.length,
				mediaCount: $.length,
				durationMs: q
			};
			return o("WAWebExportChatLogging").logExportChat({
				exportMode: C,
				chatType: y,
				messageCount: U.messageCount,
				mediaCount: U.mediaCount,
				exportDurationMs: q,
				exportResult: "success",
				dateRangeUsed: b,
				fileSizeBytes: W.size
			}), U;
		} catch (t) {
			var V = Date.now() - R;
			throw t instanceof o("WAAbortError").AbortError ? o("WAWebExportChatLogging").logExportChat({
				exportMode: C,
				chatType: y,
				messageCount: 0,
				mediaCount: 0,
				exportDurationMs: V,
				exportResult: "cancelled",
				dateRangeUsed: b
			}) : (o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"[export_chat] export failed (chatType=",
				", phase=",
				", messagesLoaded=",
				", includeMedia=",
				")"
			])), y, E, k, String(l)).catching(r("getErrorSafe")(t)).sendLogs("export-chat-failure"), o("WAWebExportChatLogging").logExportChat({
				exportMode: C,
				chatType: y,
				messageCount: k,
				mediaCount: 0,
				exportDurationMs: V,
				exportResult: "error",
				errorReason: t instanceof Error ? t.message : "unknown",
				dateRangeUsed: b
			})), t;
		} finally {
			f = !1;
		}
	}
	l.exportChat = y;
}), 98);
