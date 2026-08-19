__d("WAWebCaptureDrawer.react", [
	"fbt",
	"WAFilteredCatch",
	"WALogger",
	"WAShiftTimer",
	"WAWebABProps",
	"WAWebAppTracker",
	"WAWebAttachMediaCollection",
	"WAWebBizBotTosUtils",
	"WAWebCameraCaptureRefreshDrawer.react",
	"WAWebCanvasUtils",
	"WAWebCaptureTypes",
	"WAWebComposeBoxUtils",
	"WAWebDataUrlToBlob",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebFileUtils",
	"WAWebGetUserMediaErrors",
	"WAWebGuidePopup.react",
	"WAWebMediaCapture",
	"WAWebMediaCaptureStreamType",
	"WAWebMediaEditorEnumsThemes",
	"WAWebMediaEditorForChatLoadable.react",
	"WAWebMediaOpaqueData",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebObjectFit.react",
	"WAWebReturnIcon.react",
	"WAWebRound.react",
	"WAWebSpinner.react",
	"WAWebUnstyledButton.react",
	"WAWebVelocityTransitionGroup",
	"WAWebVideo.react",
	"WAWebWamEnumMediaPickerOriginType",
	"WAWebWamMediaPickerStatsLogger",
	"WDSIconIcPhotoCamera.react",
	"nullthrows",
	"react",
	"useLazyRef",
	"useWAWebStableCallback",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p = ["ref"], _, f = _ || (_ = o("react")), g = _, h = g.useEffect, y = g.useImperativeHandle, C = g.useRef, b = g.useState, v = "x18re5ia-B", S = {
		retakeBtn: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			cursor: "x1ypdohk",
			$$css: !0
		},
		videoContainer: {
			zIndex: "xhtitgo",
			width: "xh8yej3",
			height: "x5yr21d",
			$$css: !0
		}
	}, R = { surface: "camera" }, L = "CAPTURE_MEDIA", E = function(t) {
		t.current != null && (window.URL.revokeObjectURL(t.current), t.current = null);
	};
	function k(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, p), i = a.chat, l = a.disposeStream, _ = a.onBack, g = a.onCaptured, v = a.onSend, k = s._(
			/*BTDS*/
			""
		), I = C(null), T = C(null), D = C(null), x = C(null), $ = b(void 0), P = $[0], N = $[1], M = b(void 0), w = M[0], A = M[1], F = b(o("WAWebCaptureTypes").CaptureState.ANIMATING), O = F[0], B = F[1], W = b(void 0), q = W[0], U = W[1], V = r("useWAWebStableCallback")(function(e, t) {
			if (!e) {
				O === o("WAWebCaptureTypes").CaptureState.ANIMATING && B(o("WAWebCaptureTypes").CaptureState.LOADING);
				return;
			}
			T.current == null || T.current(), T.current = t, B(o("WAWebCaptureTypes").CaptureState.LOADING), U(e), o("WAWebMediaCapture").isSrcObjectInVideoElement() || (e ? (E(D), D.current = window.URL.createObjectURL(e)) : E(D));
		}), H = r("useLazyRef")(function() {
			return new (o("WAShiftTimer")).ShiftTimer(function(e) {
				var t = e.disposeStream, n = e.stream;
				V(n, t);
			});
		}), G = r("useLazyRef")(function() {
			return new (o("WAShiftTimer")).ShiftTimer(function(e) {
				var t = e.disposeStream, n = e.stream;
				n && t && (T.current == null || T.current()), o("WAWebMediaCapture").isSrcObjectInVideoElement() || E(D);
			});
		}), z = function() {
			i && i.setAttachMediaContents(null);
		}, j = r("useWAWebUnmountSignal")();
		h(function() {
			return H.current.onOrBefore(300, {
				stream: a.stream,
				disposeStream: a.disposeStream
			}), i && i.setIsCameraCaptureDrawerOpen(!0), function() {
				H.current.cancel(), E(D), l == null || l(), I.current && I.current.logCancel(), i && i.setIsCameraCaptureDrawerOpen(!1), z();
			};
		}, []), h(function() {
			return o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.Camera), function() {
				o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.Camera);
			};
		}, []);
		var K = function(t, n) {
			H.current.forceRunNow({
				stream: t,
				disposeStream: n
			});
		};
		y(n, function() {
			return {
				loadNewStreamTimerUpdate: K,
				loadNewStream: V
			};
		});
		var Q = function() {
			var t = x.current;
			if (t != null) {
				var n = t.getVideoDimensions();
				if (n != null) {
					var a = document.createElement("canvas");
					a.height = n.height, a.width = n.width;
					var s = a.getContext("2d");
					if (!s) {
						o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["CaptureDrawer:onCapture can not get 2d context"])));
						return;
					}
					if (s.translate(a.width, 0), s.scale(-1, 1), t.drawFrameToContext(s, 0, 0, n.width, n.height), g) o("WAWebCanvasUtils").canvasToBlob(a).then(function(e) {
						j.aborted || g(e);
					});
					else {
						G.current.onOrBefore(500, {
							stream: q,
							disposeStream: l
						});
						var u = new (o("WAWebWamMediaPickerStatsLogger")).MediaPickerStatsLogger();
						u.logAdd(L, "image", o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.MENU_CAMERA_CAPTURE), u.chatRecipients = i != null && i.groupMetadata ? i.groupMetadata.participants.length : 1, I.current = u;
						var c = a.toDataURL("image/jpeg"), d = o("WAWebDataUrlToBlob").dataURLtoBlob(c);
						if (i) {
							i.attachMediaContents || i.setAttachMediaContents(new (r("WAWebAttachMediaCollection"))({ chatParticipantCount: i.getParticipantCount() }));
							var m = r("nullthrows")(i.attachMediaContents);
							m.processAttachmentsForChat([{ file: o("WAWebFileUtils").createFile([d], "", { type: "image/jpeg" }) }], void 0, i);
						}
						N(c), B(o("WAWebCaptureTypes").CaptureState.SENDING), U(void 0);
					}
				}
			}
		}, X = function() {
			var e;
			B(o("WAWebCaptureTypes").CaptureState.RECORDING);
			var t = (e = x.current) == null ? void 0 : e.getVideoDimensions();
			t != null ? A({
				width: t.width,
				height: t.height
			}) : o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Failed to get video dimensions in handleVideoLoaded"]))).tags("non-sad").sendLogs("capture-drawer-video-dimensions-missing");
		}, Y = function() {
			B(o("WAWebCaptureTypes").CaptureState.LOADING), z();
			var e = o("WAWebMediaCapture").start({
				type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA,
				featureSurface: o("WAWebGuidePopup.react").FeatureSurface.PHOTO_CAPTURE
			}), t = e.asyncStream, n = e.disposeStream;
			T.current = n, t.then(function(e) {
				e && (o("WAWebMediaCapture").isSrcObjectInVideoElement() || (D.current = window.URL.createObjectURL(e)), U(e));
			}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebGetUserMediaErrors").NotAllowedError, function() {
				var e;
				_(), o("WAWebModalManager").ModalManager.open(f.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
					messaging: e.Messaging.CAMERA_FAIL,
					type: e.GuidePopupType.GUIDE_UNBLOCK,
					featureSurface: e.FeatureSurface.PHOTO_CAPTURE
				}));
			})).catch(o("WAFilteredCatch").filteredCatch(o("WAWebGetUserMediaErrors").GetUserMediaError, function() {
				var e;
				_(), o("WAWebModalManager").ModalManager.open(f.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
					messaging: e.Messaging.CAMERA_MISSING,
					type: e.GuidePopupType.GUIDE_NONE,
					featureSurface: e.FeatureSurface.PHOTO_CAPTURE
				}));
			}));
		}, J = async function(t, n) {
			i && await o("WAWebBizBotTosUtils").maybeShowBizBot1pTos(i);
			var e = (n == null ? void 0 : n.isViewOnce) === !0, a = (n == null ? void 0 : n.isWamoSub) === !0;
			if (!v) o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Assertion failed!"]))).sendLogs("capture-drawer-no-onSend");
			else if (t.length === 0) o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Assertion failed!"]))).sendLogs("capture-drawer-no-img");
			else {
				var l = r("nullthrows")(t[0]), s = l.groupMentions, u = l.media, m = l.mentionedJidList, p = u.file;
				if (p instanceof Blob) {
					var _, f;
					v({
						getImg: r("WAWebMediaOpaqueData").createFromData(p, p.type),
						caption: (_ = u.caption) != null ? _ : void 0,
						isViewOnce: !!e,
						mentionedJidList: m,
						groupMentions: s,
						isWamoSub: a
					}), (f = I.current) == null || f.logSend({ isViewOnce: !!e });
				}
				z();
			}
		};
		if (o("WAWebABProps").getABPropConfigValue("web_enable_camera_capture_refresh")) return f.jsx(r("WAWebCameraCaptureRefreshDrawer.react"), {
			stream: q,
			state: O,
			videoRef: x,
			urlRef: D,
			videoSize: w,
			img: P,
			chat: i,
			theme: a.theme,
			drawerTitle: k,
			onBack: a.onBack,
			onCapture: Q,
			onVideoLoaded: X,
			onRetake: Y,
			onSendMedia: J,
			questionType: a.questionType
		});
		var Z, ee, te, ne, re = a.theme === "capture-cover" ? "cover" : "contain";
		switch (O) {
			case o("WAWebCaptureTypes").CaptureState.ANIMATING:
			case o("WAWebCaptureTypes").CaptureState.LOADING: if (ne = f.jsx(o("WAWebSpinner.react").Spinner, {
				stroke: 4,
				size: 50
			}), O === o("WAWebCaptureTypes").CaptureState.ANIMATING) break;
			case o("WAWebCaptureTypes").CaptureState.RECORDING: {
				var oe = {
					0: "xh8yej3 x5yr21d x1hc1fzr x19991ni x1d8287x xrix70t xpk2tj9 x1bndym7",
					1: "xh8yej3 x5yr21d x19991ni x1d8287x xrix70t xpk2tj9 x1bndym7 xg01cxk"
				}[!!(q && O === o("WAWebCaptureTypes").CaptureState.LOADING) << 0], ae = q ? f.jsx(r("WAWebVideo.react"), {
					autoPlay: !0,
					ref: x,
					onPlaying: X,
					src: D.current != null ? D.current : void 0,
					srcObject: D.current != null ? void 0 : q
				}) : null;
				te = q ? f.jsx("div", {
					className: "xh8yej3 x5yr21d",
					children: f.jsx(r("WAWebObjectFit.react"), {
						type: re,
						size: w,
						children: f.jsx("div", {
							className: oe,
							"data-animage-capture-webcam": !0,
							children: ae
						})
					})
				}, "webcam") : null, Z = O === o("WAWebCaptureTypes").CaptureState.RECORDING ? f.jsx("div", {
					className: "x10l6tqk x2rgi xbudbmw xbx705l xg01cxk",
					children: f.jsx(o("WAWebRound.react").Round, {
						large: !0,
						label: k,
						onClick: Q,
						children: f.jsx(r("WDSIconIcPhotoCamera.react"), {})
					})
				}, "btn-capture") : null;
				break;
			}
			case o("WAWebCaptureTypes").CaptureState.SENDING: {
				if (te = f.jsx(r("WAWebObjectFit.react"), {
					type: re,
					size: w,
					children: f.jsx("img", {
						alt: "",
						className: "x10l6tqk xh8yej3 x5yr21d xqcmdr3 xxkxylk",
						"data-animate-capture-snapshot": !0,
						src: P
					})
				}), i) {
					var ie = r("nullthrows")(i.attachMediaContents);
					te = f.jsx(o("WAWebMediaEditorForChatLoadable.react").MediaEditorForChatLoadable, {
						theme: o("WAWebMediaEditorEnumsThemes").MediaTheme.CAPTURE,
						chat: i,
						initCaption: null,
						mediaCollection: ie,
						onDropText: r("WAWebNoop"),
						onSendMedia: J,
						placeholderText: o("WAWebComposeBoxUtils").getComposeBoxPlaceholderText({
							chat: i,
							questionType: a.questionType
						})
					});
				}
				ee = f.jsxs(r("WAWebUnstyledButton.react"), {
					xstyle: S.retakeBtn,
					onClick: Y,
					children: [f.jsx("div", {
						className: "x2lah0s xbelrpt x17t9dm2",
						children: f.jsx(o("WAWebReturnIcon.react").ReturnIcon, { "aria-hidden": !0 })
					}), s._(
						/*BTDS*/
						""
					)]
				});
				break;
			}
			default: o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["captureDrawer:render Unhandled video capture state ", ""])), O);
		}
		var le = f.jsx("div", {
			className: "x1n2onr6 xhtitgo x9f619 x78zum5 x6s0dn4 xl56j7k x5sx7kw xexx8yu x1xnnf8n x10b6aqq x106a9eq x1m8r95a",
			children: f.jsx(r("WAWebVelocityTransitionGroup"), {
				transitionName: "pop_delay",
				children: Z
			})
		});
		return f.jsxs(r("WAWebDrawer.react"), {
			theme: a.theme,
			tsNavigationData: R,
			children: [f.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: k,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.OFFSET,
				focusBackOrCancel: !0,
				onCancel: a.onBack,
				children: ee
			}), f.jsxs(r("WAWebDrawerBody.react"), {
				overflow: "hidden",
				children: [f.jsxs("div", {
					className: "x1n2onr6 x78zum5 x1iyjqo2 x6s0dn4 xl56j7k xh8yej3",
					children: [ne, f.jsx("div", {
						className: "x10l6tqk x13vifvy x1o0tod x78zum5 xdt5ytf x6s0dn4 xh8yej3 x5yr21d",
						children: f.jsx(r("WAWebVelocityTransitionGroup"), {
							transitionName: "capture",
							xstyle: S.videoContainer,
							children: te
						})
					})]
				}), le]
			})]
		}, "attach-capture-modal");
	}
	k.displayName = k.name + " [from " + i.id + "]", l.default = k;
}), 226);
