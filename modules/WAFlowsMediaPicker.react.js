__d("WAFlowsMediaPicker.react", [
	"WAFlowsBridgeEvents",
	"WAFlowsButton.react",
	"WAFlowsDocumentPicker.react",
	"WAFlowsEntryPointControllerContext.react",
	"WAFlowsEnvContext.react",
	"WAFlowsFormContext",
	"WAFlowsGroupComponentLabel.react",
	"WAFlowsIcon.react",
	"WAFlowsLocalization",
	"WAFlowsMediaUploadList.react",
	"WAFlowsNativeExperienceUtils",
	"WAFlowsNativeMediaEventTypes",
	"WAFlowsNativeMediaUploadTypes",
	"WAFlowsPhotoPicker.react",
	"WAFlowsStateProvider.react",
	"WDSFlex.stylex",
	"justknobx",
	"react",
	"stylex",
	"useTruncateText",
	"uuidv4"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useMemo, _ = "d4ab2196-bc0f-4231-8931-79fb41aa7e1b", f = 80, g = 300, h = "__HIDE_ERROR_MESSAGE__", y = { container: {
		display: "x78zum5",
		paddingBottom: "x2yie3v",
		flexDirection: "xdt5ytf",
		alignItems: "x1cy8zhl",
		$$css: !0
	} }, C = {
		container: {
			alignSelf: "xkh2ocl",
			$$css: !0
		},
		selectPhotoCTA: {
			borderStartStartRadius: "x2vzu6d",
			borderStartEndRadius: "xcfq2th",
			borderEndEndRadius: "xbk2yj0",
			borderEndStartRadius: "x1idrose",
			minWidth: "xz6sds4",
			height: "xwaiz5r",
			justifyContent: "xl56j7k",
			alignItems: "x6s0dn4",
			backgroundColor: "x16w0wmm",
			borderTopWidth: "x156rpxl",
			borderInlineEndWidth: "x9ox8f2",
			borderBottomWidth: "x9u5d7x",
			borderInlineStartWidth: "xfcdg90",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xnj1f2r",
			borderInlineEndColor: "x2uibgs",
			borderBottomColor: "xkveyfu",
			borderInlineStartColor: "x12llq9",
			flexDirection: "x1q0g3np",
			paddingTop: "x1pe9zv5",
			paddingInlineEnd: "xcxz95d",
			paddingBottom: "x1v0wz0i",
			paddingInlineStart: "x8945me",
			columnGap: "x4prdry",
			flexGrow: "x1iyjqo2",
			flexShrink: "x2lah0s",
			flexBasis: "x1r8uery",
			":active:not(:disabled)_backgroundColor": "x1w6f11q",
			$$css: !0
		},
		ctaLabel: {
			color: "xo1mcw5",
			fontSize: "x16lw3ta",
			fontStyle: "x1j61x8r",
			fontWeight: "x12ioufu",
			lineHeight: "x8r4c90",
			letterSpacing: "xkmanpl",
			$$css: !0
		},
		addMoreCTA: {
			height: "xettwda",
			minWidth: "xz6sds4",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "x167vaf5",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x8945me",
			justifyContent: "xl56j7k",
			alignItems: "x6s0dn4",
			rowGap: "x1gcqhjp",
			alignSelf: "xkh2ocl",
			borderStartStartRadius: "x2vzu6d",
			borderStartEndRadius: "xcfq2th",
			borderEndEndRadius: "xbk2yj0",
			borderEndStartRadius: "x1idrose",
			backgroundColor: "x16w0wmm",
			":active:not(:disabled)_backgroundColor": "x1w6f11q",
			$$css: !0
		},
		photoPickerCTALabel: {
			color: "xo1mcw5",
			$$css: !0
		},
		photoPickerIcon: {
			backgroundColor: "xnj6ddq",
			$$css: !0
		}
	}, b = {
		container: {
			rowGap: "x1fc8kun",
			$$css: !0
		},
		selectPhotoCTA: {
			height: "xu15cu9",
			borderStartStartRadius: "xka0v7t",
			borderStartEndRadius: "x1gy44zr",
			borderEndEndRadius: "x1equb14",
			borderEndStartRadius: "xreshn2",
			backgroundColor: "x16w0wmm",
			paddingTop: "x1b58sdr",
			paddingInlineEnd: "x167vaf5",
			paddingBottom: "xmnamis",
			paddingInlineStart: "x8945me",
			columnGap: "x1izhsip",
			flexDirection: "x1q0g3np",
			justifyContent: "x1nhvcw1",
			":active:not(:disabled)_backgroundColor": "x1w6f11q",
			$$css: !0
		},
		ctaLabel: {
			fontSize: "x1j9cq4l",
			fontStyle: "x1j61x8r",
			fontWeight: "xz5bpqg",
			lineHeight: "x1psw8wn",
			letterSpacing: "xebmces",
			$$css: !0
		},
		photoPickerCTALabel: {
			color: "xo1mcw5",
			$$css: !0
		},
		addMoreCTALabel: {
			color: "xo1mcw5",
			":active:not(:disabled)_opacity": "xccgk5w",
			$$css: !0
		},
		photoPickerIcon: {
			backgroundColor: "xep993w",
			$$css: !0
		},
		addMoreCTA: {
			height: "xwaiz5r",
			paddingTop: "x1b58sdr",
			paddingInlineEnd: "x167vaf5",
			paddingBottom: "xmnamis",
			paddingInlineStart: "x8945me",
			justifyContent: "xl56j7k",
			alignItems: "x6s0dn4",
			rowGap: "x5qd032",
			alignSelf: "xkh2ocl",
			borderStartStartRadius: "x1cwemrn",
			borderStartEndRadius: "xilio5v",
			borderEndEndRadius: "xyl2pp4",
			borderEndStartRadius: "x1lm4evp",
			backgroundColor: "x1280gxy",
			":active:not(:disabled)_backgroundColor": "x723tsc",
			$$css: !0
		},
		ctaIconBackGroundCircle: {
			display: "x78zum5",
			width: "xvm51jw",
			height: "xwaiz5r",
			justifyContent: "xl56j7k",
			alignItems: "x6s0dn4",
			borderStartStartRadius: "xpf0gls",
			borderStartEndRadius: "x1b1ercd",
			borderEndEndRadius: "x692wnh",
			borderEndStartRadius: "xcwkuow",
			backgroundColor: "xfn3atn",
			$$css: !0
		}
	}, v = {
		container: {
			alignSelf: "xkh2ocl",
			width: "xh8yej3",
			$$css: !0
		},
		selectPhotoCTA: {
			height: "xwaiz5r",
			width: "xh8yej3",
			$$css: !0
		},
		ctaLabel: {
			color: "xo1mcw5",
			fontSize: "x16lw3ta",
			fontStyle: "x1j61x8r",
			fontWeight: "x12ioufu",
			lineHeight: "x8r4c90",
			letterSpacing: "xkmanpl",
			$$css: !0
		},
		addMoreCTA: {
			height: "xettwda",
			minWidth: "xz6sds4",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "x167vaf5",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x8945me",
			justifyContent: "xl56j7k",
			alignItems: "x6s0dn4",
			rowGap: "x1gcqhjp",
			alignSelf: "xkh2ocl",
			borderStartStartRadius: "x2vzu6d",
			borderStartEndRadius: "xcfq2th",
			borderEndEndRadius: "xbk2yj0",
			borderEndStartRadius: "x1idrose",
			backgroundColor: "x16w0wmm",
			":active:not(:disabled)_backgroundColor": "x1w6f11q",
			$$css: !0
		},
		photoPickerCTALabel: {
			color: "xo1mcw5",
			$$css: !0
		},
		photoPickerIcon: {
			backgroundColor: "xnj6ddq",
			$$css: !0
		},
		photoPickerIconDisabled: {
			backgroundColor: "x1518k6t",
			$$css: !0
		}
	};
	window.media_add = function(e) {
		var t = new CustomEvent("media_add", { detail: e });
		window.dispatchEvent(t);
	}, window.media_state = function(e) {
		var t = new CustomEvent("media_state", { detail: e });
		window.dispatchEvent(t);
	};
	function S(e) {
		window.media_add(e);
	}
	function R(e) {
		window.media_state(e);
	}
	function L(e, t, n) {
		return e ? o("WAFlowsLocalization").getUploadDocumentFbt(t) : n === o("WAFlowsNativeMediaEventTypes").WAFlowsMediaInputType.GALLERY ? o("WAFlowsLocalization").getUploadPhotoFbt(t) : o("WAFlowsLocalization").getTakePhotoFbt(t);
	}
	function E(e, t) {
		return e ? "waf_document" : t === o("WAFlowsNativeMediaEventTypes").WAFlowsMediaInputType.GALLERY ? "waf_photo_gallery" : "waf_photo_camera";
	}
	function k(t) {
		var n = t.allowedMimeTypes, a = t.dataTestId, i = a === void 0 ? "waf-media-picker" : a, l = t.description, s = t.enabled, c = t.label, C = t.maxFileSizeKb, b = t.maxUploadedDocuments, v = t.maxUploadedPhotos, S = t.mediaInputType, R = t.minUploadedDocuments, k = t.minUploadedPhotos, T = t.name, D = t.required, x = t.screenID, $ = o("WAFlowsFormContext").useWAFlowsForm(), P = $.getError, N = $.getValue, M = $.setValue, w = P(T), A = S === o("WAFlowsNativeMediaEventTypes").WAFlowsMediaInputType.DOCUMENT, F = o("WAFlowsEnvContext.react").useWAFlowsEnv(), O = F.env, B = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController(), W = I(O.platform), q = C * o("WAFlowsNativeExperienceUtils").BYTES_PER_KB, U = L(A, O.platform, S), V = o("WAFlowsStateProvider.react").useWAFlowsState(), H = ne(), G = E(A, S), z = A ? b != null ? b : o("WAFlowsDocumentPicker.react").DEFAULT_MAX_UPLOADED_DOCUMENT : v != null ? v : o("WAFlowsPhotoPicker.react").DEFAULT_MAX_UPLOADED_PHOTO, j = A ? R : k, K = p(function() {
			return r("uuidv4")();
		}, []), Q = te(), X = A ? o("WAFlowsLocalization").getMinMaxDocumentSelectionLabel(j, z, o("WAFlowsNativeExperienceUtils").formatFileSize(C, o("WAFlowsNativeExperienceUtils").Units.KB)) : o("WAFlowsLocalization").getMinMaxPhotoSelectionLabel(j, z, o("WAFlowsNativeExperienceUtils").formatFileSize(C, o("WAFlowsNativeExperienceUtils").Units.KB)), Y = o("useTruncateText").useTruncateText(c, f), J = o("useTruncateText").useTruncateText(l == null ? void 0 : l.toString(), g), Z = O.platform === "wa_web" ? s ? W.photoPickerIcon : W.photoPickerIconDisabled : W.photoPickerIcon, ee = u.jsx(r("WAFlowsIcon.react"), {
			id: G,
			xstyle: Z
		});
		function te() {
			var e, t = N(T);
			return (e = t == null ? void 0 : t.collection_id) != null ? e : K;
		}
		function ne() {
			var e;
			return (e = re(N(T))) != null ? e : [];
		}
		function re(e) {
			var t;
			return e == null ? [] : (t = e.__wa_flows_uploaded_media__) == null ? void 0 : t.map(function(e) {
				var t, n, r, o;
				return {
					mediaPreviewImage: (t = e.media_preview_image) != null ? t : "",
					mediaName: (n = e.file_name) != null ? n : "",
					uploadProgress: (r = e.upload_progress) != null ? r : 0,
					mediaSizeBytes: (o = e.media_size_bytes) != null ? o : 0,
					docPageCount: e.doc_page_count,
					uploadState: e.upload_state,
					mediaId: e.media_id,
					errorCode: e.error_code,
					isRetryable: e.is_retryable
				};
			});
		}
		var oe = d(function(e, t) {
			var n, a, i, l, s, u, c = (n = N(T)) != null ? n : {}, d = (a = c.__wa_flows_uploaded_media__) != null ? a : [], m = new Map(d.map(function(e) {
				return [e.media_id, e];
			})), p = d, f = (i = c.deleted_media_ids) != null ? i : new Set(), g = new Set(f), h = (l = t.addReplace) != null ? l : [], y = (s = t.delete) != null ? s : new Set(), C = (u = t.update) != null ? u : [];
			switch (e) {
				case o("WAFlowsNativeMediaUploadTypes").WAFInternalStateMediaMutation.ADD:
					p = [].concat(d, h.filter(function(e) {
						return !d.some(function(t) {
							return t.media_id === e.media_id;
						}) && !g.has(e.media_id);
					}));
					break;
				case o("WAFlowsNativeMediaUploadTypes").WAFInternalStateMediaMutation.DELETE: {
					var b = y, v = r("justknobx")._("506"), S = g.size + b.size;
					if (S > v) for (var R = S - v, L = 0; L < R; L++) {
						var E = g.values().next().value;
						E !== void 0 && g.delete(E);
					}
					b.forEach(function(e) {
						return g.add(e);
					}), p = d.filter(function(e) {
						var t = e.media_id;
						return !b.has(t);
					});
					break;
				}
				case o("WAFlowsNativeMediaUploadTypes").WAFInternalStateMediaMutation.UPDATE: {
					C.forEach(function(e) {
						var t, n, r, o, a, i, l, s, u, c, d = e.media_id;
						if (!(g.has(d) || !m.has(d))) {
							var p = babelHelpers.extends({}, m.get(d), {
								upload_progress: (t = e.upload_progress) != null ? t : (n = m.get(d)) == null ? void 0 : n.upload_progress,
								upload_state: e.upload_state,
								cdn_url: e.cdn_url,
								direct_path: e.direct_path,
								encryption_metadata: {
									encryption_key: (r = e.encryption_metadata) == null ? void 0 : r.encryption_key,
									hmac_key: (o = e.encryption_metadata) == null ? void 0 : o.hmac_key,
									hmac: (a = e.encryption_metadata) == null ? void 0 : a.hmac,
									iv: (i = e.encryption_metadata) == null ? void 0 : i.iv,
									plaintext_hash: (l = e.encryption_metadata) == null ? void 0 : l.plaintext_hash,
									encrypted_hash: (s = e.encryption_metadata) == null ? void 0 : s.encrypted_hash,
									media_key: (u = e.encryption_metadata) == null ? void 0 : u.media_key,
									media_key_timestamp: (c = e.encryption_metadata) == null ? void 0 : c.media_key_timestamp
								},
								file_length: e.file_length,
								media_type: e.media_type,
								mime_type: e.mime_type,
								error_code: e.error_code,
								is_retryable: e.is_retryable
							});
							m.set(d, p);
						}
					}), p = Array.from(m.values());
					break;
				}
			}
			var k = {
				collection_id: Q,
				deleted_media_ids: g,
				__wa_flows_uploaded_media__: p,
				__wa_flows_native_component_hint__: _
			};
			M(T, k);
		}, [
			N,
			T,
			Q,
			M
		]), ae = d(function(e) {
			var t = e.detail, n = t.filter(function(e) {
				return e.collection_id === Q;
			}).map(function(e) {
				var t = e.media_id, n = e.media_metadata, r = n.doc_page_count, a = n.file_size_bytes, i = n.media_name, l = n.preview_img_base64;
				return {
					media_preview_image: l,
					file_name: i,
					upload_progress: 0,
					media_size_bytes: a,
					upload_state: o("WAFlowsNativeMediaUploadTypes").WAFMediaUploadState.PROGRESS,
					media_id: t,
					doc_page_count: r
				};
			});
			oe(o("WAFlowsNativeMediaUploadTypes").WAFInternalStateMediaMutation.ADD, { addReplace: n });
		}, [Q, oe]), ie = d(function(e) {
			var t = e.detail, n = t.filter(function(e) {
				return e.collection_id === Q;
			}).map(function(e) {
				var t = e.failed_state, n = e.media_id, r = e.success_state, a = e.upload_state;
				return {
					upload_progress: a == null ? void 0 : a.progress,
					upload_state: a ? o("WAFlowsNativeMediaUploadTypes").WAFMediaUploadState.PROGRESS : t ? o("WAFlowsNativeMediaUploadTypes").WAFMediaUploadState.ERROR : o("WAFlowsNativeMediaUploadTypes").WAFMediaUploadState.SUCCESS,
					media_id: n,
					cdn_url: r == null ? void 0 : r.cdn_url,
					direct_path: r == null ? void 0 : r.direct_path,
					encryption_metadata: {
						encryption_key: r == null ? void 0 : r.encryption_metadata.enc_key,
						hmac_key: r == null ? void 0 : r.encryption_metadata.hmac_key,
						hmac: r == null ? void 0 : r.encryption_metadata.hmac,
						iv: r == null ? void 0 : r.encryption_metadata.iv,
						plaintext_hash: r == null ? void 0 : r.encryption_metadata.plaintext_hash,
						encrypted_hash: r == null ? void 0 : r.encryption_metadata.encrypted_hash_with_truncated_hmac,
						media_key: r == null ? void 0 : r.encryption_metadata.media_key,
						media_key_timestamp: r == null ? void 0 : r.encryption_metadata.media_key_timestamp
					},
					file_length: r == null ? void 0 : r.uploaded_file_size_bytes,
					media_type: r == null ? void 0 : r.encryption_metadata.media_type,
					mime_type: r == null ? void 0 : r.mime_type,
					error_code: t == null ? void 0 : t.error_code,
					is_retryable: t == null ? void 0 : t.is_retryable
				};
			});
			oe(o("WAFlowsNativeMediaUploadTypes").WAFInternalStateMediaMutation.UPDATE, { update: n });
		}, [Q, oe]);
		m(function() {
			return window.addEventListener("media_add", ae), window.addEventListener("media_state", ie), function() {
				window.removeEventListener("media_add", ae), window.removeEventListener("media_state", ie);
			};
		}, [ae, ie]);
		var le = d(function() {
			var e = function() {
				var e = H.filter(function(e) {
					return e.uploadState === o("WAFlowsNativeMediaUploadTypes").WAFMediaUploadState.SUCCESS || e.uploadState === o("WAFlowsNativeMediaUploadTypes").WAFMediaUploadState.PROGRESS;
				});
				return z - e.length;
			}, t = e(), r = A ? {
				collectionId: Q,
				inputType: S,
				maxItems: t,
				maxFileSizeBytes: q,
				allowedMimeTypes: n
			} : {
				collectionId: Q,
				inputType: S,
				maxItems: t,
				maxFileSizeBytes: q
			};
			B.invoke({
				eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsMediaSelect,
				payload: r,
				fallBackDataForWeb: {},
				hasCallback: !1
			});
		}, [
			n,
			Q,
			B,
			A,
			q,
			z,
			S,
			H
		]), se = d(function(e) {
			var t = {
				collectionId: Q,
				mediaId: e
			};
			B.invoke({
				eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsMediaDelete,
				payload: t,
				fallBackDataForWeb: {},
				hasCallback: !1
			});
		}, [Q, B]), ue = d(function(e) {
			var t = {
				collectionId: Q,
				mediaId: e
			};
			B.invoke({
				eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsMediaRetry,
				payload: t,
				fallBackDataForWeb: {},
				hasCallback: !1
			});
		}, [Q, B]), ce = function(t, n) {
			n && (se(t), oe(o("WAFlowsNativeMediaUploadTypes").WAFInternalStateMediaMutation.DELETE, { delete: new Set([t]) }));
		}, de = function(t) {
			ue(t);
		}, me = O.platform === "wa_web" ? {
			"data-testid": "waf-media-picker-cta",
			text: U,
			size: "medium",
			onClick: le,
			icon: E(A, S),
			xstyle: [
				o("WDSFlex.stylex").wdsFlex.flexGrow1,
				o("WDSFlex.stylex").wdsFlex.flexShrink0,
				W.selectPhotoCTA
			],
			disabled: V.internal.status !== o("WAFlowsStateProvider.react").flowJSONLoadState.READY,
			style: "outline",
			zoomInAnimationEnabled: !1
		} : {
			"data-testid": "waf-media-picker-cta",
			label: U,
			enabled: V.internal.status === o("WAFlowsStateProvider.react").flowJSONLoadState.READY,
			onClick: le,
			icon: O.platform === "ios" ? u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(W.ctaIconBackGroundCircle), { children: ee })) : ee,
			xstyle: W.selectPhotoCTA,
			labelXstyle: [W.ctaLabel, W.photoPickerCTALabel],
			fontWeight: "normal"
		}, pe = O.platform === "wa_web" ? {
			text: o("WAFlowsLocalization").getAddMoreFbt(),
			size: "medium",
			onClick: le,
			xstyle: [
				o("WDSFlex.stylex").wdsFlex.flexGrow1,
				o("WDSFlex.stylex").wdsFlex.flexShrink0,
				W.addMoreCTA
			],
			disabled: V.internal.status !== o("WAFlowsStateProvider.react").flowJSONLoadState.READY,
			style: "borderless",
			zoomInAnimationEnabled: !1
		} : {
			label: o("WAFlowsLocalization").getAddMoreFbt(),
			enabled: V.internal.status === o("WAFlowsStateProvider.react").flowJSONLoadState.READY,
			onClick: le,
			xstyle: W.addMoreCTA,
			labelXstyle: [W.ctaLabel, W.addMoreCTALabel]
		};
		return u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(y.container, W.container), { children: [
			u.jsx(o("WAFlowsGroupComponentLabel.react").WAFlowsGroupComponentLabel, {
				label: Y,
				description: J,
				validationString: X,
				required: D,
				enabled: s,
				errorMessage: w === h ? "" : w,
				dataTestId: i
			}),
			H.length > 0 && u.jsx(r("WAFlowsMediaUploadList.react"), {
				mediaUploadList: H,
				onRemoveMedia: ce,
				onRetryMedia: de,
				maxFileSizeKb: C,
				isDocumentPicker: A,
				"data-testid": void 0
			}),
			H.length === 0 ? u.jsx(r("WAFlowsButton.react"), { props: me }) : H.length < z ? u.jsx(r("WAFlowsButton.react"), { props: pe }) : void 0
		] }));
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I(e) {
		var t = {
			android: C,
			ios: b,
			wa_web: v
		};
		return t[e];
	}
	l.NATIVE_COMPONENTS_ID = _, l.HIDE_ERROR_MESSAGE_HINT = h, l.dispatchMediaAdd = S, l.dispatchMediaState = R, l.WAFlowsMediaPicker = k;
}), 98);
