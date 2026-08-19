__d("WAWebMessageGif.react", [
	"fbt",
	"WAWebABProps",
	"WAWebBizCtwaContext.react",
	"WAWebChatPreferenceCollection",
	"WAWebClickable.react",
	"WAWebCmd",
	"WAWebDisplayType",
	"WAWebEnvironment",
	"WAWebFrontendMsgGetters",
	"WAWebGiphyIcon.react",
	"WAWebMediaMissingModal.react",
	"WAWebMediaOpaqueData",
	"WAWebMediaTypes",
	"WAWebMessageAuthor.react",
	"WAWebMessageBubbleHiddenText.react",
	"WAWebMessageCaption.react",
	"WAWebMessageForwardedIndicator.react",
	"WAWebMessageGifState.react",
	"WAWebMessageMeta.react",
	"WAWebMessagePaidPartnershipDisclaimerText.react",
	"WAWebMessageThumbShadeBottom.react",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebMsgSelectors",
	"WAWebProtobufsE2E.pb",
	"WAWebStateUtils",
	"WAWebStopEvent",
	"WAWebTenorIcon.react",
	"WAWebVideo.react",
	"isStringNullOrEmpty",
	"react",
	"stylex",
	"useWAWebIntersection",
	"useWAWebModelValues",
	"useWAWebMsgDownloadMedia",
	"useWAWebMsgValues",
	"useWAWebSendViewCount",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useImperativeHandle, f = m.useRef, g = m.useState, h = {
		backgroundImage: "x1e87kdn",
		$$css: !0
	}, y = {
		caption: {
			boxSizing: "x9f619",
			minWidth: "xzd8eb0",
			maxWidth: "xdduh5l",
			paddingTop: "xm7lytj",
			paddingInlineEnd: "x11lfxj5",
			paddingBottom: "xs9asl8",
			paddingInlineStart: "x25sj25",
			$$css: !0
		},
		captionPSA: {
			paddingBottom: "x1em1mmk",
			$$css: !0
		},
		captionMaxWidth: function(t) {
			return [{
				maxWidth: t != null ? "xf68679" : t,
				$$css: !0
			}, { "--x-maxWidth": (function(e) {
				return typeof e == "number" ? e + "px" : e != null ? e : void 0;
			})(t) }];
		},
		thumbImage: {
			position: "x10l6tqk",
			top: "x13vifvy",
			insetInlineStart: "x1o0tod",
			width: "xh8yej3",
			height: "x5yr21d",
			backgroundPosition: "x1xsqp64",
			backgroundSize: "x18d0r48",
			$$css: !0
		},
		thumbImageSrc: function(t) {
			return [h, { "--x-backgroundImage": "url(" + t + ")" != null ? "url(" + t + ")" : void 0 }];
		}
	}, C = 330, b = 474, v = 3, S = 4, R = 1, L = 3, E = 5;
	function k(t) {
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.isMsgVisible, c = i.msg, m = o("useWAWebMsgValues").useMsgValues(i.msg.id, [
			(n = o("WAWebMsgGetters")).getId,
			n.getAck,
			n.getCaption,
			n.getIsFailed,
			n.getIsPSA,
			n.getIsSentByMe,
			n.getIsGroupMsg,
			n.getGifAttribution,
			o("WAWebFrontendMsgGetters").getSenderObj
		]), h = m[0], k = m[1], I = m[2], T = m[3], D = m[4], x = m[5], $ = m[6], P = m[7], N = m[8], M = o("useWAWebModelValues").useModelValues(i.mediaData, [
			"aspectRatio",
			"preview",
			"duration",
			"type",
			"mediaStage",
			"renderableUrl",
			"fullWidth",
			"fullHeight",
			"size"
		]), w = M, A = f(null), F = f(!1), O = f(!1), B = f(0), W = f(null), q = f(), U = g(!1), V = U[0], H = U[1], G = r("useWAWebUnmountSignal")(), z = o("useWAWebModelValues").useModelValues(r("WAWebChatPreferenceCollection").getDefault(), ["autoplayAnimatedImages"]);
		o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(c);
		var j = o("WAWebDisplayType").isWideDisplay(i.displayType) || i.displayType === o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS ? b : C, K = j / S, Q = function() {
			var e;
			H(!1), (e = A.current) == null || e.pauseAndReset();
		}, X = function() {
			B.current = 0, Q();
		}, Y = function() {
			var e = A.current;
			if (e) {
				if (B.current <= 0) {
					X();
					return;
				}
				B.current -= 1, V || H(!0), e.play();
			}
		}, J = function() {
			o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebMediaMissingModal.react"), { msg: c.unsafe() }));
		}, Z = function(t) {
			if (!l) return null;
			var e = l(t);
			return e == null || typeof e == "boolean" ? null : e.getImgNode && e.getImgNode();
		}, ee = function(t) {
			var e, n, r, a = A.current;
			if (M.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED && a) {
				if (t && t.stopPropagation(), !F.current) {
					O.current = !0;
					return;
				}
				if (O.current = !1, W.current == null || W.current === 0) {
					var i = a.getDuration();
					i != null && !isNaN(i) ? W.current = i : M.duration && M.duration !== "0" && (W.current = parseInt(M.duration, 10));
				}
				var l = (e = o("WAWebABProps").getABPropConfigValue("gif_min_play_loops")) != null ? e : R, s = (n = o("WAWebABProps").getABPropConfigValue("gif_max_play_loops")) != null ? n : L, u = (r = o("WAWebABProps").getABPropConfigValue("gif_max_play_duration")) != null ? r : E;
				if (W.current != null && W.current !== 0) {
					var c = Math.ceil(u / W.current);
					B.current = Math.max(Math.min(c, s), l);
				} else B.current = l;
				Y();
			}
		}, te = function() {
			c.forceDownloadMediaEvenIfExpensive();
		}, ne = function() {
			c.cancelDownload();
		}, re = function() {
			c.cancelUpload();
		}, oe = function() {
			c.resumeUpload();
		}, ae = function() {
			c.resumeRemoteUpload();
		}, ie = function() {
			return !V && B.current !== 1 / 0;
		}, le = function(t) {
			t && t.stopPropagation(), o("WAWebCmd").Cmd.mediaViewerModal({
				msg: o("WAWebStateUtils").unproxy(c.unsafe()),
				getZoomNode: Z
			});
		}, se;
		i.displayType !== o("WAWebDisplayType").DISPLAY_TYPE.EDITING && i.displayType !== o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER_PREVIEW && (se = function(t) {
			switch (w.mediaStage) {
				case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
					ie() ? ee(t) : le(t);
					break;
				case o("WAWebMediaTypes").MediaDataStage.INIT:
					le(t);
					break;
				case o("WAWebMediaTypes").MediaDataStage.FETCHING:
					ne();
					break;
				case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
					te();
					break;
				case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
					re();
					break;
				case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
					oe();
					break;
				case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
					ae();
					break;
				case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
					J();
					break;
				default:
			}
		});
		var ue = function(t) {
			t.stopPropagation(), t.preventDefault(), se(t);
		}, ce = function() {
			var e = w.aspectRatio || w.fullWidth / w.fullHeight;
			if (!e) return {
				bubbleWidth: j,
				bubbleHeight: "100%",
				contentWidth: j,
				contentHeight: "100%"
			};
			var t, n, r = K * 1.2;
			e <= 1 / S ? (n = j, t = r) : e < 1 ? (n = j, t = j * e) : e < S ? (t = j, n = j / e) : (t = j, n = K), (i.displayType === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER || i.displayType === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT) && (t = j, n = K);
			var a = w.renderableUrl && w.fullWidth || t, l = w.renderableUrl && w.fullHeight || n;
			return a / l > t / n ? (a = a * n / l, l = n) : (l = l * t / a, a = t), l > j && (l = j), {
				bubbleWidth: t,
				bubbleHeight: n,
				contentWidth: a,
				contentHeight: l
			};
		}, de = function(t) {
			if (i.displayType === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER_PREVIEW) return {
				bubbleWidth: t,
				bubbleHeight: t,
				contentWidth: t,
				contentHeight: t
			};
			var e = w.aspectRatio || w.fullWidth / w.fullHeight, n, r, a = K * 1.2;
			e >= 1 ? t < j ? (n = t, r = n / e, e >= S && r < K && (r = K)) : (n = j, r = n / e, r < K && (r = K)) : (r = j, n = r * e, n < a && (n = a), t < j && n > t && (n = t));
			var l = n, s = r;
			return l / s > n / r ? (l = l * r / s, s = r) : (s = s * n / l, l = n), {
				bubbleWidth: n,
				bubbleHeight: r,
				contentWidth: l,
				contentHeight: s
			};
		}, me = function() {
			return q.current;
		}, pe = function() {
			return B.current;
		};
		_(a, function() {
			return {
				getImgNode: me,
				handleKeyActivation: ue,
				pause: X,
				getPlayCount: pe
			};
		});
		var _e = r("useWAWebIntersection")({
			root: null,
			threshold: .99
		}), fe = _e[0], ge = _e[1].isIntersecting;
		o("useWAWebSendViewCount").useSendViewCount(c.id, {
			mediaData: M,
			isIntersecting: ge,
			displayType: i.displayType
		}), p(function() {
			self.setTimeout(function() {
				G.aborted || z.autoplayAnimatedImages === !0 && w.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED && ge && ee();
			}, 100);
		}, [w.mediaStage, ge]);
		var he = w.preview instanceof r("WAWebMediaOpaqueData") ? w.preview.url() : void 0, ye = null, Ce = ce();
		i.maxWidth != null && i.maxWidth < Ce.bubbleWidth && (Ce = de(i.maxWidth));
		var be = Ce, ve = be.bubbleWidth, Se = be.contentHeight, Re = be.contentWidth;
		if (w.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED) {
			var Le = r("WAWebEnvironment").isWindows === !0 ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			), Ee = "auto " + (w.aspectRatio || w.fullWidth / w.fullHeight), ke = w.aspectRatio >= 1 ? {
				aspectRatio: Ee,
				width: "auto",
				height: Se
			} : {
				aspectRatio: Ee,
				width: Re,
				height: "auto"
			};
			ye = d.jsx("div", {
				ref: q,
				className: "x1n2onr6 x78zum5 x1okw0bk x6s0dn4 xl56j7k xh8yej3 x5yr21d",
				children: d.jsx(r("WAWebVideo.react"), {
					ref: A,
					src: w.renderableUrl,
					style: ke,
					onEnded: Y,
					onLoadedMetadata: function() {
						F.current = !0, z.autoplayAnimatedImages === !0 && O.current && ee();
					},
					muted: !0,
					children: Le
				})
			});
		}
		var Ie = he ? d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(y.thumbImage, y.thumbImageSrc(he)), { "data-testid": "chat_thread_gif_thumb_image" })) : null, Te = I ? d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(y.caption, D && y.captionPSA, y.captionMaxWidth(o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS ? "100%" : ve)), { children: d.jsx(r("WAWebMessageCaption.react"), {
			msg: c.unsafe(),
			trusted: i.trusted,
			testId: "gif-caption"
		}) })) : null, De = Te ? null : d.jsx(r("WAWebMessageThumbShadeBottom.react"), {}), xe = o("WAWebMsgSelectors").showForwarded(c) && i.displayType !== o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER_PREVIEW, $e = o("WAWebDisplayType").isWideDisplay(i.displayType), Pe = !r("isStringNullOrEmpty")(I), Ne = i.displayType === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS || i.displayType === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY || i.displayType === o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO, Me = {
			0: "x1n2onr6 x1vjfegm x9f619 x13nahy2 xyqdw3p x1im30kd xg8j3zb x1djpfga",
			4: "x1n2onr6 x1vjfegm x9f619 xyqdw3p x1im30kd xg8j3zb x1djpfga xmewjk2",
			2: "x1n2onr6 x1vjfegm x9f619 xyqdw3p x1im30kd xg8j3zb x1djpfga x193iq5w",
			6: "x1n2onr6 x1vjfegm x9f619 xyqdw3p x1im30kd xg8j3zb x1djpfga x193iq5w",
			1: "x1n2onr6 x1vjfegm x9f619 xyqdw3p x1im30kd xg8j3zb x1djpfga x193iq5w xh8yej3",
			5: "x1n2onr6 x1vjfegm x9f619 xyqdw3p x1im30kd xg8j3zb x1djpfga x193iq5w xh8yej3",
			3: "x1n2onr6 x1vjfegm x9f619 xyqdw3p x1im30kd xg8j3zb x1djpfga x193iq5w xh8yej3",
			7: "x1n2onr6 x1vjfegm x9f619 xyqdw3p x1im30kd xg8j3zb x1djpfga x193iq5w xh8yej3"
		}[!!$e << 2 | !!Ne << 1 | (i.displayType === o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS) << 0], we = i.displayAuthor ? d.jsx("div", babelHelpers.extends({}, {
			0: { className: "x9f619 xdduh5l xyqdw3p xs9asl8 x25sj25 x14vy60q" },
			2: { className: "x9f619 xyqdw3p xs9asl8 x25sj25 x14vy60q x145dklv" },
			1: { className: "x9f619 xdduh5l xyqdw3p x25sj25 x14vy60q x18d9i69" },
			3: { className: "x9f619 xyqdw3p x25sj25 x14vy60q x145dklv x18d9i69" }
		}[(i.displayType === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT || i.displayType === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER) << 1 | !!xe << 0], { children: d.jsx(r("WAWebMessageAuthor.react"), {
			msg: c,
			contact: N,
			displayType: i.displayType
		}) })) : null, Ae = xe ? d.jsx(r("WAWebMessageForwardedIndicator.react"), {
			msg: c.unsafe(),
			className: {
				0: "xyqdw3p xg8j3zb x25sj25 xyri2b",
				1: "xg8j3zb x25sj25 xyri2b xexx8yu"
			}[!!i.displayAuthor << 0]
		}) : null, Fe = d.jsx(r("WAWebMessagePaidPartnershipDisclaimerText.react"), { msg: c }), Oe;
		switch (P) {
			case o("WAWebProtobufsE2E.pb").Message$VideoMessage$Attribution.GIPHY:
				Oe = d.jsx("div", {
					className: "x10l6tqk xbfrwjf x1v1hl4c",
					children: d.jsx(o("WAWebGiphyIcon.react").GiphyIcon, {})
				});
				break;
			case o("WAWebProtobufsE2E.pb").Message$VideoMessage$Attribution.TENOR:
				Oe = d.jsx("div", {
					className: "x10l6tqk xbfrwjf x1v1hl4c",
					children: d.jsx(o("WAWebTenorIcon.react").TenorIcon, {})
				});
				break;
			default: Oe = null;
		}
		var Be = i.quotedMsg ? d.jsx("div", babelHelpers.extends({}, {
			0: { className: "xdduh5l xahult9" },
			1: { className: "xahult9 x145dklv" }
		}[(i.displayType === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT || i.displayType === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER) << 0], { children: i.quotedMsg })) : null, We = i.hideMeta === !0 ? null : d.jsx("div", babelHelpers.extends({}, {
			0: { className: "x10l6tqk x11dcrhx xrb244j xhtitgo" },
			1: { className: "x10l6tqk xhtitgo x1inkcgm xy1j3rs" }
		}[!!Pe << 0], { children: d.jsx(o("WAWebMessageMeta.react").Meta, {
			msg: c,
			displayType: i.displayType
		}) })), qe = d.jsx(r("WAWebMessageGifState.react"), {
			mediaStage: w.mediaStage,
			mediaDataFileSize: w.size,
			isFailed: T,
			shouldPlay: ie(),
			onClick: se
		}), Ue = {
			width: Re,
			height: Se
		};
		if (i.displayType === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER_PREVIEW) {
			var Ve;
			ye = null, Te = null, De = null, Oe = null, qe = null, Ue.minHeight = (Ve = i.maxWidth) != null ? Ve : 56;
		}
		var He = {
			0: "x1n2onr6 xhtitgo x78zum5 x6s0dn4 xl56j7k x193iq5w x19iali1 x11t971q xvc5jky x6ikm8r x10wlt62 x1i282gy xx9ypkp xd15eu0 x11ecxm0",
			1: "x1n2onr6 xhtitgo x78zum5 x6s0dn4 xl56j7k x193iq5w x19iali1 x11t971q xvc5jky x6ikm8r x10wlt62 x1i282gy xx9ypkp xd15eu0 x11ecxm0 xuyqlj2"
		}[(i.displayType === o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS) << 0], Ge = d.jsxs(d.Fragment, { children: [
			we,
			Ae,
			Fe,
			Be,
			d.jsx(r("WAWebBizCtwaContext.react"), {
				msg: c.unsafe(),
				wrapperClass: "xdj266r x14z9mp xahult9 x1lziwak"
			}),
			d.jsxs(o("WAWebClickable.react").Clickable, {
				ref: fe,
				dataTestId: "image-thumb-gif",
				className: He,
				onClick: se,
				ariaLabel: s._(
					/*BTDS*/
					""
				),
				inlineStyle: Ue,
				children: [
					qe,
					Ie,
					ye,
					De,
					Oe
				]
			}),
			Te,
			We
		] });
		if (Te) return d.jsx(r("WAWebMessageBubbleHiddenText.react"), {
			contact: N,
			msg: c.unsafe(),
			className: Me,
			onClick: o("WAWebStopEvent").stopPropagation,
			style: { width: o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS ? "100%" : ve },
			children: Ge
		});
		var ze = ve + v * 2;
		return d.jsx("div", {
			className: Me,
			onClick: o("WAWebStopEvent").stopPropagation,
			style: { width: o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS ? "100%" : ze },
			children: Ge
		});
	}
	k.displayName = k.name + " [from " + i.id + "]";
	var I = k;
	l.WrappedGif = I;
}), 226);
