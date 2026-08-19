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
	"ReQL",
	"WAArmadilloXMA.pb",
	"WABlobToArrayBuffer",
	"qpl",
	"sendToSentQPLLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = "369239263222822", c = "369239343222814", d = "369239383222810";
	function m(e) {
		return e === u || e === c || e === d;
	}
	function p(e, t) {
		return Promise.all([
			o("MAWGetImageSpec").getImageSpec_DEPRECATED(e),
			Promise.resolve(e),
			t.arrayBuffer(),
			o("MAWGetImageSpec").getImageSpec_DEPRECATED(t)
		]).then(async function(e) {
			var t = e[0], n = e[1], r = e[2], a = e[3];
			return {
				file: n,
				imageSpec: t,
				plaintext: await o("WABlobToArrayBuffer").blobToArrayBuffer(n),
				thumbnailUrlAndSpec: {
					duration: void 0,
					height: a.height,
					jpegThumbnail: r,
					width: a.width
				},
				type: "image"
			};
		});
	}
	function _(e) {
		return o("MAWVideoUtils").getVideoThumbnailUrlAndSpec(e).then(async function(t) {
			return {
				file: e,
				plaintext: await o("WABlobToArrayBuffer").blobToArrayBuffer(e),
				thumbnailUrlAndSpec: t,
				type: "video"
			};
		});
	}
	async function f(e, t) {
		var n = await o("MAWFetchXMABlob").fetchBlob({
			descriptionForLogging: "MAWFowardMessageFromOpenThread",
			url: e
		}), r = n == null ? void 0 : new File([n], t, { type: n.type }), a = r != null ? await o("MAWGetImageSpec").getImageSpec_DEPRECATED(r) : null;
		return r != null && a != null ? {
			file: r,
			height: a.height,
			width: a.width
		} : void 0;
	}
	async function g(e, t, n) {
		var r, a, i = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(n.tables.attachment_ctas).getKeyRange(e));
		return i == null || t == null && i.actionUrl == null ? null : {
			actionUrl: (r = i == null ? void 0 : i.actionUrl) != null ? r : void 0,
			buttonType: o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_CTA_BUTTON_TYPE.OPEN_NATIVE,
			nativeUrl: (a = i == null ? void 0 : i.actionUrl) != null ? a : void 0,
			title: t != null ? t : void 0
		};
	}
	async function h(e, t, n, a) {
		var i = await y(t, n);
		if ((i == null ? void 0 : i.actionUrl) == null) throw o("sendToSentQPLLogger").markSendToSentFail(a, "null_xma_url"), r("FBLogger")("messenger_web_sharing").mustfixThrow("Cannot forward XMA to secure threads without a defaultCTA and actionUrl");
		var l = await o("MAWFetchXMAData").fetchXMAData(e, i.actionUrl, [a]);
		if (l.linkType === "unknown") throw o("sendToSentQPLLogger").markSendToSentFail(a, "unknown_xma_link_type"), r("FBLogger")("messenger_web_sharing").mustfixThrow("Cannot forward XMA to secure threads with an unknown link type");
		return l.linkType === "external" ? b(t, i, n, l) : C(l, a);
	}
	async function y(e, t) {
		var n = e.actionUrl, r = e.defaultCtaId, a = e.defaultCtaTitle;
		if (r == null) return null;
		var i = await g(r, a, t);
		return i != null ? i : {
			actionUrl: n != null ? n : void 0,
			buttonType: o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_CTA_BUTTON_TYPE.OPEN_NATIVE,
			nativeUrl: n != null ? n : void 0,
			title: a != null ? a : void 0
		};
	}
	async function C(e, t) {
		var n = await o("MAWFetchXMADataUtils").makeXMAFileArgs(e, t), r = e.contentRef, a = e.ctas, i = e.defaultCTA, l = e.overlayIconGlyph, s = e.subtitle_text, u = e.title_text, c = e.xma_message_type, d = {
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
	}
	async function b(t, n, r, a) {
		var i = t.attachmentCta1Id, l = t.attachmentCta2Id, s = t.attachmentCta3Id, u = t.cta1Title, c = t.cta2Title, d = t.cta3Title, m = t.faviconUrl, p = t.headerImageUrl, _ = t.headerTitle, h = t.maxSubtitleNumOfLines, y = t.maxTitleNumOfLines, C = t.previewUrl, b = t.subtitleText, v = t.titleText, S = await Promise.all([
			[m, "favicon"],
			[p, "headerImage"],
			[C, "preview"]
		].map(function(e) {
			return f(e[0], e[1]);
		})), R = S[0], L = S[1], E = S[2], k = [];
		if (i != null) {
			var I = await g(i, u, r);
			I != null && k.push(I);
		}
		if (l != null) {
			var T = await g(l, c, r);
			T != null && k.push(T);
		}
		if (s != null) {
			var D = await g(s, d, r);
			D != null && k.push(D);
		}
		var x = {
			contentRef: a.contentRef,
			ctas: k.map(function(e) {
				return babelHelpers.extends({}, e, {
					actionUrl: o("MAWUnshimUrl").unshimUrl(e.actionUrl),
					nativeUrl: o("MAWUnshimUrl").unshimUrl(e.nativeUrl)
				});
			}),
			defaultCTA: babelHelpers.extends({}, n, {
				actionUrl: o("MAWUnshimUrl").unshimUrl(n.actionUrl),
				nativeUrl: o("MAWUnshimUrl").unshimUrl(n.nativeUrl)
			}),
			headerTitle: _,
			maxSubtitleNumOfLines: (e || (e = o("I64"))).to_int32(h != null ? h : (e || (e = o("I64"))).zero),
			maxTitleNumOfLines: e.to_int32(y != null ? y : (e || (e = o("I64"))).zero),
			overlayIconGlyph: o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_OVERLAY_ICON_GLYPH.NONE,
			subtitleText: b,
			titleText: v
		};
		return {
			faviconFileArgs: R,
			headerFileArgs: L,
			previewFileArgs: E,
			xmaArgs: x,
			xmaMessageType: a.xma_message_type
		};
	}
	function v(t) {
		var n = t.attachmentType, a = t.filename, i = t.playableDurationMs, l = t.playableUrl, u = t.playableUrlMimeType, c = t.previewUrl, d = t.previewUrlMimeType;
		if ((e || (e = o("I64"))).equal(n, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").IMAGE)) || (e || (e = o("I64"))).equal(n, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").VIDEO)) || (e || (e = o("I64"))).equal(n, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").ANIMATED_IMAGE)) || (e || (e = o("I64"))).equal(n, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").FILE))) {
			if (l == null) throw r("FBLogger")("messenger_web_sharing").mustfixThrow("If you see this error, there is no playableUrl for this attachment");
			var m = (e || (e = o("I64"))).equal(n, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").ANIMATED_IMAGE));
			if (c != null) {
				var f = m ? c + "&" : l, g = m ? c + "&" : c;
				return Promise.all([window.fetch(f).then(function(e) {
					return e.blob();
				}), window.fetch(g).then(function(e) {
					return e.blob();
				})]).then(function(t) {
					var a = t[0], i = t[1], l = new File([a], "mediaForwardedFromOpenThread", { type: m ? d : u }), c = new File([i], "previewForwardedFromOpenThread", { type: d });
					if ((e || (e = o("I64"))).equal(n, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").IMAGE))) return p(l, c);
					if ((e || (e = o("I64"))).equal(n, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").VIDEO))) return _(l);
					if ((e || (e = o("I64"))).equal(n, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").ANIMATED_IMAGE))) return p(l, c);
					throw r("FBLogger")("messenger_web_sharing").mustfixThrow("shouldn't have this error in forward message from open thread");
				});
			}
			var h = m ? l + "&" : l;
			return window.fetch(h).then(function(e) {
				return e.blob();
			}).then(function(t) {
				if (m && u === "video/mp4") throw r("FBLogger")("messenger_web_sharing").mustfixThrow("If you see this error, there is only mp4 url for gif");
				var i = new File([t], a != null ? a : "mediaForwardedFromOpenThread", { type: u });
				if ((e || (e = o("I64"))).equal(n, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").IMAGE))) return o("MAWImagePreProcess").imagePreprocess(i, !1);
				if ((e || (e = o("I64"))).equal(n, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").VIDEO))) return _(i);
				if ((e || (e = o("I64"))).equal(n, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").FILE))) return o("MAWDocumentPreProcess").documentPreprocess(i);
				if ((e || (e = o("I64"))).equal(n, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").ANIMATED_IMAGE))) return Promise.all([
					o("MAWImagePreProcess").getJpegThumbnailInfo(i, 400),
					o("MAWGetImageSpec").getImageSpec_DEPRECATED(i),
					Promise.resolve(i)
				]).then(async function(e) {
					var t = e[0], n = e[1], r = e[2];
					return {
						file: r,
						imageSpec: n,
						plaintext: await o("WABlobToArrayBuffer").blobToArrayBuffer(r),
						thumbnailUrlAndSpec: t,
						type: "image"
					};
				});
				throw r("FBLogger")("messenger_web_sharing").mustfixThrow("shouldn't have this error in forward message from open thread");
			});
		}
		if ((e || (e = o("I64"))).equal(n, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").AUDIO))) {
			if (l != null) return window.fetch(l + "&").then(function(e) {
				return e.blob();
			}).then(async function(n) {
				var a = new File([n], "mediaForwardedFromOpenThread", { type: u }), l, s = t.waveformData;
				if (s != null && s !== "") {
					var c = s.split(",").map(Number);
					if (c.every(function(e) {
						return !Number.isNaN(e);
					})) {
						var d = o("MAWAudioUtils").recomputeWaveform(c);
						l = new Uint8Array(d).buffer;
					} else r("FBLogger")("messenger_web_sharing").warn("Waveform data is invalid. Forwarding skipped.");
				}
				return {
					durations: (e || (e = o("I64"))).to_int32(i != null ? i : (e || (e = o("I64"))).zero) / 1e3,
					file: a,
					isPtt: !0,
					plaintext: await o("WABlobToArrayBuffer").blobToArrayBuffer(a),
					type: "audio",
					waveform: l
				};
			});
			throw r("FBLogger")("messenger_web_sharing").mustfixThrow("If you see this error, there is no playableUrl for this audio attachment");
		}
		if ((e || (e = o("I64"))).equal(n, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").STICKER))) {
			if (l == null && c == null) throw r("FBLogger")("messenger_web_sharing").mustfixThrow("If you see this error, there is no url for this sticker");
			return l != null ? c != null ? Promise.all([window.fetch(l).then(function(e) {
				return e.blob();
			}), window.fetch(c).then(function(e) {
				return e.blob();
			})]).then(function(e) {
				var t = e[0], n = e[1], r = new File([t], "mediaForwardedFromOpenThread", { type: u }), o = new File([n], "previewForwardedFromOpenThread", { type: d });
				return p(r, o);
			}) : window.fetch(l).then(function(e) {
				return e.blob();
			}).then(function(e) {
				var t = new File([e], "mediaForwardedFromOpenThread", { type: u });
				return p(t, t);
			}) : window.fetch(c).then(function(e) {
				return e.blob();
			}).then(function(e) {
				return o("MAWImagePreProcess").imagePreprocess(new File([e], "previewForwardedFromOpenThread", { type: d }), !0);
			});
		}
		throw r("FBLogger")("messenger_web_sharing").mustfixThrow("We do not support forwarding other media types. Received attachment %d", (s || (s = o("LSIntEnum"))).toNumber(n));
	}
	function S(t, n, a, i, l, u, c, d, p) {
		return o("MAWForwardMessage").maybeCreateNewThreadAndCallback(n, a, function(_, f) {
			var g = o("MAWGetEphemeralSettings").getEphemeralSetting(_, a), y = f;
			return g.then(function(a) {
				if (u != null) {
					if (m(u.attachmentFbid)) {
						var f = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "sendMsg", {
							args: {
								content: "👍",
								ephemeralSetting: a != null ? a : void 0,
								isFirstMsg: y,
								isForwarded: l,
								source: c,
								specialTextSize: 1
							},
							chatJid: _,
							externalId: p,
							qplEventType: r("qpl")._(25313175, "1551"),
							qplInstanceKey: d
						});
						return o("MAWMessageSendReporter").MAWMessageSendReporter({
							chatJid: _,
							externalId: p
						}, f, {
							qplEventType: r("qpl")._(25313175, "1551"),
							qplInstanceKey: d
						}, n);
					}
					return (e || (e = o("I64"))).equal(u.attachmentType, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").XMA)) ? h(t, u, n, d).then(function(e) {
						var t = e.faviconFileArgs, l = e.headerFileArgs, s = e.previewFileArgs, u = e.xmaArgs, c = e.xmaMessageType, m = i.text, f = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "sendXMAShareMsg", {
							args: {
								content: m != null && o("MAWVault").isVaulted(m) ? o("MAWVault").unvault(m) : m,
								ephemeralSetting: a != null ? a : void 0,
								isFirstMsg: y,
								isForwarded: !0,
								xmaMessageType: c != null ? c : o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_FEED_SHARE
							},
							chatJid: _,
							faviconFile: t,
							headerFile: l,
							previewFile: s,
							qplEventType: r("qpl")._(25313175, "1551"),
							qplInstanceKey: d,
							xmaArgs: u,
							xmaMsgExternalId: p
						});
						return o("MAWMessageSendReporter").MAWMessageSendReporter({
							chatJid: _,
							externalId: p
						}, f, {
							qplEventType: r("qpl")._(25313175, "1551"),
							qplInstanceKey: d
						}, n);
					}) : v(u).then(async function(e) {
						var t, i;
						switch (e.type) {
							case "image": {
								var s = e.imageSpec, u = e.thumbnailUrlAndSpec;
								i = {
									args: {
										ephemeralSetting: a != null ? a : void 0,
										height: s.height,
										isFirstMsg: y,
										isForwarded: l,
										jpegThumbnail: u == null ? void 0 : u.jpegThumbnail,
										jpegThumbnailHeight: u == null ? void 0 : u.height,
										jpegThumbnailWidth: u == null ? void 0 : u.width,
										source: c,
										width: s.width
									},
									attachmentType: "image",
									chatJid: _,
									externalId: p
								};
								break;
							}
							case "video": {
								var m = e.thumbnailUrlAndSpec;
								i = {
									args: {
										duration: m.duration,
										ephemeralSetting: a != null ? a : void 0,
										height: m.height,
										isFirstMsg: y,
										isForwarded: l,
										jpegThumbnail: m.jpegThumbnail,
										jpegThumbnailHeight: m.height,
										jpegThumbnailWidth: m.width,
										source: c,
										width: m.width
									},
									attachmentType: "video",
									chatJid: _,
									externalId: p
								};
								break;
							}
							case "audio": {
								var f = e.durations, g = e.isPtt, h = e.waveform;
								i = {
									args: {
										duration: Math.round(f),
										ephemeralSetting: a != null ? a : void 0,
										isFirstMsg: y,
										isForwarded: l,
										isPtt: g,
										source: c,
										waveform: h
									},
									attachmentType: "audio",
									chatJid: _,
									externalId: p
								};
								break;
							}
							case "document": {
								i = {
									args: {
										ephemeralSetting: a != null ? a : void 0,
										filename: e.filename,
										isFirstMsg: y,
										isForwarded: l,
										source: c
									},
									attachmentType: "application",
									chatJid: _,
									externalId: p
								};
								break;
							}
						}
						if (i == null) throw r("FBLogger")("messenger_web_sharing").mustfixThrow("We do not support forwarding this attachment type: %s", e.type);
						var C = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "sendMediaMsgV2", babelHelpers.extends({}, i, {
							mimeType: e.file.type,
							plaintext: (t = e.plaintext) != null ? t : await o("WABlobToArrayBuffer").blobToArrayBuffer(e.file),
							qplEventType: r("qpl")._(25313175, "1551"),
							qplInstanceKey: d
						}));
						return o("MAWMessageSendReporter").MAWMessageSendReporter({
							chatJid: _,
							externalId: p
						}, C, {
							qplEventType: r("qpl")._(25313175, "1551"),
							qplInstanceKey: d
						}, n);
					});
				}
				var g = i.text;
				if (g != null) {
					var C = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "sendMsg", {
						args: {
							content: o("MAWVault").isVaulted(g) ? o("MAWVault").unvault(g) : g,
							ephemeralSetting: a != null ? a : void 0,
							isFirstMsg: y,
							isForwarded: l,
							source: c
						},
						chatJid: _,
						externalId: p,
						qplEventType: r("qpl")._(25313175, "1551"),
						qplInstanceKey: d
					});
					return o("MAWMessageSendReporter").MAWMessageSendReporter({
						chatJid: _,
						externalId: p
					}, C, {
						qplEventType: r("qpl")._(25313175, "1551"),
						qplInstanceKey: d
					}, n);
				}
				throw r("FBLogger")("messenger_web_sharing").mustfixThrow("We do not support forwarding this types");
			});
		}, d);
	}
	l.downloadMediaByUrl = v, l.forwardMessage = S;
}), 98);
