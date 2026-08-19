__d("MAWFowardMessageFromOpenThread", [
	"FBLogger",
	"I64",
	"LSIntEnum",
	"MAWAudioUtils",
	"MAWBridgeSendAndReceive",
	"MAWDocumentPreProcess",
	"MAWFetchXMABlob",
	"MAWFetchXMAData",
	"MAWFetchXMADataUtils",
	"MAWForwardMessage",
	"MAWGetEphemeralSettings",
	"MAWGetImageSpec",
	"MAWImagePreProcess",
	"MAWMessageSendReporter",
	"MAWUnshimUrl",
	"MAWVault",
	"MAWVideoUtils",
	"MessagingAttachmentType",
	"Promise",
	"ReQL",
	"WAArmadilloXMA.pb",
	"WABlobToArrayBuffer",
	"asyncToGeneratorRuntime",
	"qpl",
	"sendToSentQPLLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = "369239263222822", d = "369239343222814", m = "369239383222810";
	function p(e) {
		return e === c || e === d || e === m;
	}
	function _(e, t) {
		return (u || (u = n("Promise"))).all([
			o("MAWGetImageSpec").getImageSpec_DEPRECATED(e),
			u.resolve(e),
			t.arrayBuffer(),
			o("MAWGetImageSpec").getImageSpec_DEPRECATED(t)
		]).then((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = e[0], n = e[1], r = e[2], a = e[3];
				return {
					file: n,
					imageSpec: t,
					plaintext: yield o("WABlobToArrayBuffer").blobToArrayBuffer(n),
					thumbnailUrlAndSpec: {
						duration: void 0,
						height: a.height,
						jpegThumbnail: r,
						width: a.width
					},
					type: "image"
				};
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})());
	}
	function f(e) {
		return o("MAWVideoUtils").getVideoThumbnailUrlAndSpec(e).then((function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				return {
					file: e,
					plaintext: yield o("WABlobToArrayBuffer").blobToArrayBuffer(e),
					thumbnailUrlAndSpec: t,
					type: "video"
				};
			});
			return function(e) {
				return t.apply(this, arguments);
			};
		})());
	}
	function g(e, t) {
		return h.apply(this, arguments);
	}
	function h() {
		return h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = yield o("MAWFetchXMABlob").fetchBlob({
				descriptionForLogging: "MAWFowardMessageFromOpenThread",
				url: e
			}), r = n == null ? void 0 : new File([n], t, { type: n.type }), a = r != null ? yield o("MAWGetImageSpec").getImageSpec_DEPRECATED(r) : null;
			return r != null && a != null ? {
				file: r,
				height: a.height,
				width: a.width
			} : void 0;
		}), h.apply(this, arguments);
	}
	function y(e, t, n) {
		return C.apply(this, arguments);
	}
	function C() {
		return C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var r, a, i = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(n.tables.attachment_ctas).getKeyRange(e));
			return i == null || t == null && i.actionUrl == null ? null : {
				actionUrl: (r = i == null ? void 0 : i.actionUrl) != null ? r : void 0,
				buttonType: o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_CTA_BUTTON_TYPE.OPEN_NATIVE,
				nativeUrl: (a = i == null ? void 0 : i.actionUrl) != null ? a : void 0,
				title: t != null ? t : void 0
			};
		}), C.apply(this, arguments);
	}
	function b(e, t, n, r) {
		return v.apply(this, arguments);
	}
	function v() {
		return v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, a) {
			var i = yield S(t, n);
			if ((i == null ? void 0 : i.actionUrl) == null) throw o("sendToSentQPLLogger").markSendToSentFail(a, "null_xma_url"), r("FBLogger")("messenger_web_sharing").mustfixThrow("Cannot forward XMA to secure threads without a defaultCTA and actionUrl");
			var l = yield o("MAWFetchXMAData").fetchXMAData(e, i.actionUrl, [a]);
			if (l.linkType === "unknown") throw o("sendToSentQPLLogger").markSendToSentFail(a, "unknown_xma_link_type"), r("FBLogger")("messenger_web_sharing").mustfixThrow("Cannot forward XMA to secure threads with an unknown link type");
			return l.linkType === "external" ? k(t, i, n, l) : L(l, a);
		}), v.apply(this, arguments);
	}
	function S(e, t) {
		return R.apply(this, arguments);
	}
	function R() {
		return R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = e.actionUrl, r = e.defaultCtaId, a = e.defaultCtaTitle;
			if (r == null) return null;
			var i = yield y(r, a, t);
			return i != null ? i : {
				actionUrl: n != null ? n : void 0,
				buttonType: o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_CTA_BUTTON_TYPE.OPEN_NATIVE,
				nativeUrl: n != null ? n : void 0,
				title: a != null ? a : void 0
			};
		}), R.apply(this, arguments);
	}
	function L(e, t) {
		return E.apply(this, arguments);
	}
	function E() {
		return E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = yield o("MAWFetchXMADataUtils").makeXMAFileArgs(e, t), r = e.contentRef, a = e.ctas, i = e.defaultCTA, l = e.overlayIconGlyph, s = e.subtitle_text, u = e.title_text, c = e.xma_message_type, d = {
				contentRef: r,
				ctas: a,
				defaultCTA: i,
				overlayIconGlyph: l,
				subtitleText: s,
				titleText: u
			};
			return babelHelpers.extends({}, n, {
				xmaArgs: d,
				xmaMessageType: c != null ? c : o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_FEED_SHARE
			});
		}), E.apply(this, arguments);
	}
	function k(e, t, n, r) {
		return I.apply(this, arguments);
	}
	function I() {
		return I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a, i) {
			var l = t.attachmentCta1Id, s = t.attachmentCta2Id, c = t.attachmentCta3Id, d = t.cta1Title, m = t.cta2Title, p = t.cta3Title, _ = t.faviconUrl, f = t.headerImageUrl, h = t.headerTitle, C = t.maxSubtitleNumOfLines, b = t.maxTitleNumOfLines, v = t.previewUrl, S = t.subtitleText, R = t.titleText, L = yield (u || (u = n("Promise"))).all([
				[_, "favicon"],
				[f, "headerImage"],
				[v, "preview"]
			].map(function(e) {
				return g(e[0], e[1]);
			})), E = L[0], k = L[1], I = L[2], T = [];
			if (l != null) {
				var D = yield y(l, d, a);
				D != null && T.push(D);
			}
			if (s != null) {
				var x = yield y(s, m, a);
				x != null && T.push(x);
			}
			if (c != null) {
				var $ = yield y(c, p, a);
				$ != null && T.push($);
			}
			var P = {
				contentRef: i.contentRef,
				ctas: T.map(function(e) {
					return babelHelpers.extends({}, e, {
						actionUrl: o("MAWUnshimUrl").unshimUrl(e.actionUrl),
						nativeUrl: o("MAWUnshimUrl").unshimUrl(e.nativeUrl)
					});
				}),
				defaultCTA: babelHelpers.extends({}, r, {
					actionUrl: o("MAWUnshimUrl").unshimUrl(r.actionUrl),
					nativeUrl: o("MAWUnshimUrl").unshimUrl(r.nativeUrl)
				}),
				headerTitle: h,
				maxSubtitleNumOfLines: (e || (e = o("I64"))).to_int32(C != null ? C : (e || (e = o("I64"))).zero),
				maxTitleNumOfLines: e.to_int32(b != null ? b : (e || (e = o("I64"))).zero),
				overlayIconGlyph: o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_OVERLAY_ICON_GLYPH.NONE,
				subtitleText: S,
				titleText: R
			};
			return {
				faviconFileArgs: E,
				headerFileArgs: k,
				previewFileArgs: I,
				xmaArgs: P,
				xmaMessageType: i.xma_message_type
			};
		}), I.apply(this, arguments);
	}
	function T(t) {
		var a = t.attachmentType, i = t.filename, l = t.playableDurationMs, c = t.playableUrl, d = t.playableUrlMimeType, m = t.previewUrl, p = t.previewUrlMimeType;
		if ((e || (e = o("I64"))).equal(a, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").IMAGE)) || (e || (e = o("I64"))).equal(a, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").VIDEO)) || (e || (e = o("I64"))).equal(a, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").ANIMATED_IMAGE)) || (e || (e = o("I64"))).equal(a, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").FILE))) {
			if (c == null) throw r("FBLogger")("messenger_web_sharing").mustfixThrow("If you see this error, there is no playableUrl for this attachment");
			var g = (e || (e = o("I64"))).equal(a, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").ANIMATED_IMAGE));
			if (m != null) {
				var h = g ? m + "&" : c, y = g ? m + "&" : m;
				return (u || (u = n("Promise"))).all([window.fetch(h).then(function(e) {
					return e.blob();
				}), window.fetch(y).then(function(e) {
					return e.blob();
				})]).then(function(t) {
					var n = t[0], i = t[1], l = new File([n], "mediaForwardedFromOpenThread", { type: g ? p : d }), u = new File([i], "previewForwardedFromOpenThread", { type: p });
					if ((e || (e = o("I64"))).equal(a, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").IMAGE))) return _(l, u);
					if ((e || (e = o("I64"))).equal(a, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").VIDEO))) return f(l);
					if ((e || (e = o("I64"))).equal(a, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").ANIMATED_IMAGE))) return _(l, u);
					throw r("FBLogger")("messenger_web_sharing").mustfixThrow("shouldn't have this error in forward message from open thread");
				});
			}
			var C = g ? c + "&" : c;
			return window.fetch(C).then(function(e) {
				return e.blob();
			}).then(function(t) {
				if (g && d === "video/mp4") throw r("FBLogger")("messenger_web_sharing").mustfixThrow("If you see this error, there is only mp4 url for gif");
				var l = new File([t], i != null ? i : "mediaForwardedFromOpenThread", { type: d });
				if ((e || (e = o("I64"))).equal(a, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").IMAGE))) return o("MAWImagePreProcess").imagePreprocess(l, !1);
				if ((e || (e = o("I64"))).equal(a, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").VIDEO))) return f(l);
				if ((e || (e = o("I64"))).equal(a, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").FILE))) return o("MAWDocumentPreProcess").documentPreprocess(l);
				if ((e || (e = o("I64"))).equal(a, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").ANIMATED_IMAGE))) return (u || (u = n("Promise"))).all([
					o("MAWImagePreProcess").getJpegThumbnailInfo(l, 400),
					o("MAWGetImageSpec").getImageSpec_DEPRECATED(l),
					u.resolve(l)
				]).then((function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						var t = e[0], n = e[1], r = e[2];
						return {
							file: r,
							imageSpec: n,
							plaintext: yield o("WABlobToArrayBuffer").blobToArrayBuffer(r),
							thumbnailUrlAndSpec: t,
							type: "image"
						};
					});
					return function(t) {
						return e.apply(this, arguments);
					};
				})());
				throw r("FBLogger")("messenger_web_sharing").mustfixThrow("shouldn't have this error in forward message from open thread");
			});
		}
		if ((e || (e = o("I64"))).equal(a, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").AUDIO))) {
			if (c != null) return window.fetch(c + "&").then(function(e) {
				return e.blob();
			}).then((function() {
				var a = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
					var a = new File([n], "mediaForwardedFromOpenThread", { type: d }), i, s = t.waveformData;
					if (s != null && s !== "") {
						var u = s.split(",").map(Number);
						if (u.every(function(e) {
							return !Number.isNaN(e);
						})) {
							var c = o("MAWAudioUtils").recomputeWaveform(u);
							i = new Uint8Array(c).buffer;
						} else r("FBLogger")("messenger_web_sharing").warn("Waveform data is invalid. Forwarding skipped.");
					}
					return {
						durations: (e || (e = o("I64"))).to_int32(l != null ? l : (e || (e = o("I64"))).zero) / 1e3,
						file: a,
						isPtt: !0,
						plaintext: yield o("WABlobToArrayBuffer").blobToArrayBuffer(a),
						type: "audio",
						waveform: i
					};
				});
				return function(e) {
					return a.apply(this, arguments);
				};
			})());
			throw r("FBLogger")("messenger_web_sharing").mustfixThrow("If you see this error, there is no playableUrl for this audio attachment");
		}
		if ((e || (e = o("I64"))).equal(a, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").STICKER))) {
			if (c == null && m == null) throw r("FBLogger")("messenger_web_sharing").mustfixThrow("If you see this error, there is no url for this sticker");
			return c != null ? m != null ? (u || (u = n("Promise"))).all([window.fetch(c).then(function(e) {
				return e.blob();
			}), window.fetch(m).then(function(e) {
				return e.blob();
			})]).then(function(e) {
				var t = e[0], n = e[1], r = new File([t], "mediaForwardedFromOpenThread", { type: d }), o = new File([n], "previewForwardedFromOpenThread", { type: p });
				return _(r, o);
			}) : window.fetch(c).then(function(e) {
				return e.blob();
			}).then(function(e) {
				var t = new File([e], "mediaForwardedFromOpenThread", { type: d });
				return _(t, t);
			}) : window.fetch(m).then(function(e) {
				return e.blob();
			}).then(function(e) {
				return o("MAWImagePreProcess").imagePreprocess(new File([e], "previewForwardedFromOpenThread", { type: p }), !0);
			});
		}
		throw r("FBLogger")("messenger_web_sharing").mustfixThrow("We do not support forwarding other media types. Received attachment %d", (s || (s = o("LSIntEnum"))).toNumber(a));
	}
	function D(t, a, i, l, u, c, d, m, _) {
		return o("MAWForwardMessage").maybeCreateNewThreadAndCallback(a, i, function(f, g) {
			var h = o("MAWGetEphemeralSettings").getEphemeralSetting(f, i), y = g;
			return h.then(function(i) {
				if (c != null) {
					if (p(c.attachmentFbid)) {
						var g = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "sendMsg", {
							args: {
								content: "👍",
								ephemeralSetting: i != null ? i : void 0,
								isFirstMsg: y,
								isForwarded: u,
								source: d,
								specialTextSize: 1
							},
							chatJid: f,
							externalId: _,
							qplEventType: r("qpl")._(25313175, "1551"),
							qplInstanceKey: m
						});
						return o("MAWMessageSendReporter").MAWMessageSendReporter({
							chatJid: f,
							externalId: _
						}, g, {
							qplEventType: r("qpl")._(25313175, "1551"),
							qplInstanceKey: m
						}, a);
					}
					return (e || (e = o("I64"))).equal(c.attachmentType, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").XMA)) ? b(t, c, a, m).then(function(e) {
						var t = e.faviconFileArgs, n = e.headerFileArgs, s = e.previewFileArgs, u = e.xmaArgs, c = e.xmaMessageType, d = l.text, p = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "sendXMAShareMsg", {
							args: {
								content: d != null && o("MAWVault").isVaulted(d) ? o("MAWVault").unvault(d) : d,
								ephemeralSetting: i != null ? i : void 0,
								isFirstMsg: y,
								isForwarded: !0,
								xmaMessageType: c != null ? c : o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_FEED_SHARE
							},
							chatJid: f,
							faviconFile: t,
							headerFile: n,
							previewFile: s,
							qplEventType: r("qpl")._(25313175, "1551"),
							qplInstanceKey: m,
							xmaArgs: u,
							xmaMsgExternalId: _
						});
						return o("MAWMessageSendReporter").MAWMessageSendReporter({
							chatJid: f,
							externalId: _
						}, p, {
							qplEventType: r("qpl")._(25313175, "1551"),
							qplInstanceKey: m
						}, a);
					}) : T(c).then((function() {
						var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
							var t, n;
							switch (e.type) {
								case "image": {
									var l = e.imageSpec, s = e.thumbnailUrlAndSpec;
									n = {
										args: {
											ephemeralSetting: i != null ? i : void 0,
											height: l.height,
											isFirstMsg: y,
											isForwarded: u,
											jpegThumbnail: s == null ? void 0 : s.jpegThumbnail,
											jpegThumbnailHeight: s == null ? void 0 : s.height,
											jpegThumbnailWidth: s == null ? void 0 : s.width,
											source: d,
											width: l.width
										},
										attachmentType: "image",
										chatJid: f,
										externalId: _
									};
									break;
								}
								case "video": {
									var c = e.thumbnailUrlAndSpec;
									n = {
										args: {
											duration: c.duration,
											ephemeralSetting: i != null ? i : void 0,
											height: c.height,
											isFirstMsg: y,
											isForwarded: u,
											jpegThumbnail: c.jpegThumbnail,
											jpegThumbnailHeight: c.height,
											jpegThumbnailWidth: c.width,
											source: d,
											width: c.width
										},
										attachmentType: "video",
										chatJid: f,
										externalId: _
									};
									break;
								}
								case "audio": {
									var p = e.durations, g = e.isPtt, h = e.waveform;
									n = {
										args: {
											duration: Math.round(p),
											ephemeralSetting: i != null ? i : void 0,
											isFirstMsg: y,
											isForwarded: u,
											isPtt: g,
											source: d,
											waveform: h
										},
										attachmentType: "audio",
										chatJid: f,
										externalId: _
									};
									break;
								}
								case "document": {
									n = {
										args: {
											ephemeralSetting: i != null ? i : void 0,
											filename: e.filename,
											isFirstMsg: y,
											isForwarded: u,
											source: d
										},
										attachmentType: "application",
										chatJid: f,
										externalId: _
									};
									break;
								}
							}
							if (n == null) throw r("FBLogger")("messenger_web_sharing").mustfixThrow("We do not support forwarding this attachment type: %s", e.type);
							var C = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "sendMediaMsgV2", babelHelpers.extends({}, n, {
								mimeType: e.file.type,
								plaintext: (t = e.plaintext) != null ? t : yield o("WABlobToArrayBuffer").blobToArrayBuffer(e.file),
								qplEventType: r("qpl")._(25313175, "1551"),
								qplInstanceKey: m
							}));
							return o("MAWMessageSendReporter").MAWMessageSendReporter({
								chatJid: f,
								externalId: _
							}, C, {
								qplEventType: r("qpl")._(25313175, "1551"),
								qplInstanceKey: m
							}, a);
						});
						return function(t) {
							return e.apply(this, arguments);
						};
					})());
				}
				var h = l.text;
				if (h != null) {
					var C = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "sendMsg", {
						args: {
							content: o("MAWVault").isVaulted(h) ? o("MAWVault").unvault(h) : h,
							ephemeralSetting: i != null ? i : void 0,
							isFirstMsg: y,
							isForwarded: u,
							source: d
						},
						chatJid: f,
						externalId: _,
						qplEventType: r("qpl")._(25313175, "1551"),
						qplInstanceKey: m
					});
					return o("MAWMessageSendReporter").MAWMessageSendReporter({
						chatJid: f,
						externalId: _
					}, C, {
						qplEventType: r("qpl")._(25313175, "1551"),
						qplInstanceKey: m
					}, a);
				}
				throw r("FBLogger")("messenger_web_sharing").mustfixThrow("We do not support forwarding this types");
			});
		}, m);
	}
	l.downloadMediaByUrl = T, l.forwardMessage = D;
}), 98);
