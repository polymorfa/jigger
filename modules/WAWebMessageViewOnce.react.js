__d("WAWebMessageViewOnce.react", [
	"fbt",
	"WALogger",
	"WAWebCmd",
	"WAWebConfirmPopup.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebFrontendContactGetters",
	"WAWebFrontendMsgGetters",
	"WAWebMediaTypes",
	"WAWebMessageSpacerText.react",
	"WAWebMessageTextBubble.react",
	"WAWebMessageViewOncePendingCancel",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebStateUtils",
	"WAWebText.react",
	"WAWebViewOnceDownloadIcon.react",
	"WAWebViewOnceRetryIcon.react",
	"WAWebViewOnceState",
	"WAWebViewOnceSunset.react",
	"WAWebViewOnceViewedIcon.react",
	"WDSButton.react",
	"WDSIconWdsIcViewOnce.react",
	"getErrorSafe",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useImperativeHandle, f = p.useMemo, g = 170, h = 4, y = 24, C = {
		statusIcon: {
			color: "xhslqc4",
			height: "xxk0z11",
			$$css: !0
		},
		statusDone: {
			color: "x18cpw0e",
			$$css: !0
		},
		accentIconSvg: {
			color: "x1v5yvga",
			$$css: !0
		},
		nonSpinnerIcon: {
			display: "x1rg5ohu",
			minWidth: "xnei2rj",
			marginTop: "xdj266r",
			marginInlineEnd: "x7g7pl8",
			marginBottom: "xat24cr",
			marginInlineStart: "x3n7f7h",
			$$css: !0
		},
		nonSpinnerIconSvg: {
			width: "xvy4d1p",
			height: "xxk0z11",
			$$css: !0
		},
		labelContainer: {
			minWidth: "xek95gm",
			$$css: !0
		},
		labelText: {
			userSelect: "x87ps6o",
			$$css: !0
		},
		labelActive: {
			color: "xhslqc4",
			$$css: !0
		},
		labelInactive: {
			fontStyle: "x1k4tb9n",
			color: "xhslqc4",
			$$css: !0
		},
		labelRetry: {
			fontWeight: "xk50ysn",
			color: "xhslqc4",
			$$css: !0
		},
		dialogTitle: {
			marginBottom: "xefnzgg",
			$$css: !0
		}
	};
	function b(e) {
		e.stopPropagation(), e.preventDefault();
	}
	function v(t, n) {
		var a = f(function() {
			var a = n.type === o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE, i;
			switch (n.type) {
				case o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE:
					i = s._(
						/*BTDS*/
						""
					);
					break;
				case o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO:
					i = s._(
						/*BTDS*/
						""
					);
					break;
				case o("WAWebMediaTypes").OUTWARD_TYPES.PTT:
					i = s._(
						/*BTDS*/
						""
					);
					break;
			}
			if (o("WAWebViewOnceState").isViewed(n)) return {
				type: "complete",
				icon: m.jsx(o("WAWebViewOnceViewedIcon.react").ViewOnceViewedIcon, {
					xstyle: C.nonSpinnerIcon,
					iconXstyle: C.nonSpinnerIconSvg
				}),
				label: s._(
					/*BTDS*/
					""
				),
				labelStyle: C.labelInactive
			};
			if (o("WAWebViewOnceState").isExpired(n) && !o("WAWebMsgGetters").getIsSentByMe(n)) return {
				type: "unviewed",
				icon: m.jsx(r("WDSIconWdsIcViewOnce.react"), {
					xstyle: C.nonSpinnerIcon,
					iconXstyle: [C.accentIconSvg, C.nonSpinnerIconSvg]
				}),
				handleClick: function() {
					var e = o("WAWebFrontendContactGetters").getDisplayName(n.senderObj), t = a ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					), r = a ? s._(
						/*BTDS*/
						"",
						[s._param("name", e)]
					) : s._(
						/*BTDS*/
						"",
						[s._param("name", e)]
					);
					o("WAWebModalManager").ModalManager.open(m.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
						tsNavigationData: {
							surface: "unknown",
							viewName: "view-once"
						},
						onOK: o("WAWebModalManager").closeModalManager,
						children: m.jsxs(o("WAWebFlex.react").FlexColumn, { children: [m.jsx(o("WAWebText.react").WAWebTextLarge, {
							xstyle: C.dialogTitle,
							children: t
						}), m.jsx(o("WAWebText.react").WAWebTextMuted, { children: r })] })
					}));
				},
				label: i
			};
			switch (t.mediaStage) {
				case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
				case o("WAWebMediaTypes").MediaDataStage.PROGRESSIVE_READY: {
					if (o("WAWebMsgGetters").getIsSentByMe(n)) return {
						type: "complete",
						icon: m.jsx(r("WDSIconWdsIcViewOnce.react"), {
							xstyle: C.nonSpinnerIcon,
							iconXstyle: C.nonSpinnerIconSvg
						}),
						label: i,
						labelStyle: C.labelActive
					};
					var l = function() {
						o("WAWebCmd").Cmd.mediaViewerModal({ msg: o("WAWebStateUtils").unproxy(n.unsafe()) });
					};
					return {
						type: "unviewed",
						icon: m.jsx(r("WDSIconWdsIcViewOnce.react"), {
							xstyle: C.nonSpinnerIcon,
							iconXstyle: [C.accentIconSvg, C.nonSpinnerIconSvg]
						}),
						handleClick: l,
						label: i
					};
				}
				case o("WAWebMediaTypes").MediaDataStage.FETCHING: {
					if (o("WAWebMsgGetters").getIsSentByMe(n)) return {
						type: "complete",
						icon: m.jsx(r("WDSIconWdsIcViewOnce.react"), {
							xstyle: C.nonSpinnerIcon,
							iconXstyle: C.nonSpinnerIconSvg
						}),
						label: i,
						labelStyle: C.labelActive
					};
					var c = function(t) {
						b(t), n.cancelDownload();
					};
					return {
						type: "unviewed",
						icon: m.jsx(r("WAWebMessageViewOncePendingCancel"), {}),
						handleClick: c,
						label: i
					};
				}
				case o("WAWebMediaTypes").MediaDataStage.NEED_POKE: {
					var d = function(t) {
						b(t), n.forceDownloadMediaEvenIfExpensive();
					};
					return {
						type: "unviewed",
						icon: m.jsx(o("WAWebViewOnceDownloadIcon.react").ViewOnceDownloadIcon, {
							xstyle: C.nonSpinnerIcon,
							iconXstyle: [C.accentIconSvg, C.nonSpinnerIconSvg]
						}),
						handleClick: d,
						label: i
					};
				}
				case o("WAWebMediaTypes").MediaDataStage.FINALIZING:
				case o("WAWebMediaTypes").MediaDataStage.UPLOADING: {
					var p = function(t) {
						b(t), n.cancelUpload();
					};
					return {
						type: "complete",
						icon: m.jsx(r("WAWebMessageViewOncePendingCancel"), { onClick: p }),
						label: i,
						labelStyle: C.labelActive
					};
				}
				case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD: {
					var _ = function(a) {
						b(a), n.resumeUpload().catch(function(t) {
							o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to resume view once upload"]))).catching(r("getErrorSafe")(t)).sendLogs("resume-upload-failed");
						});
					};
					return {
						type: "complete",
						icon: m.jsx(r("WDSButton.react"), {
							xstyle: C.nonSpinnerIcon,
							Icon: o("WAWebViewOnceRetryIcon.react").ViewOnceRetryIcon,
							onPress: _,
							variant: "borderless",
							"aria-label": s._(
								/*BTDS*/
								""
							)
						}),
						label: s._(
							/*BTDS*/
							""
						),
						labelStyle: C.labelRetry
					};
				}
				case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD: {
					var f = function(t) {
						b(t), n.resumeRemoteUpload();
					};
					return {
						type: "complete",
						icon: m.jsx(r("WDSButton.react"), {
							xstyle: C.nonSpinnerIcon,
							Icon: o("WAWebViewOnceRetryIcon.react").ViewOnceRetryIcon,
							onPress: f,
							variant: "borderless",
							"aria-label": s._(
								/*BTDS*/
								""
							)
						}),
						label: s._(
							/*BTDS*/
							""
						),
						labelStyle: C.labelRetry
					};
				}
				case o("WAWebMediaTypes").MediaDataStage.SENDING: return {
					type: "complete",
					icon: m.jsx(r("WAWebMessageViewOncePendingCancel"), {}),
					label: i,
					labelStyle: C.labelActive
				};
				case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING: return {
					type: "complete",
					icon: m.jsx(o("WAWebViewOnceViewedIcon.react").ViewOnceViewedIcon, {
						xstyle: C.nonSpinnerIcon,
						iconXstyle: C.nonSpinnerIconSvg
					}),
					label: s._(
						/*BTDS*/
						""
					),
					labelStyle: C.labelInactive
				};
				case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
				case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
				case o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN:
				case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE: return o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Unsupported/too large/not readable view once media message"]))).sendLogs("view-once-hook-error"), {
					type: "complete",
					icon: m.jsx(o("WAWebViewOnceViewedIcon.react").ViewOnceViewedIcon, {
						xstyle: C.nonSpinnerIcon,
						iconXstyle: C.nonSpinnerIconSvg
					}),
					label: i,
					labelStyle: C.labelActive
				};
				case o("WAWebMediaTypes").MediaDataStage.INIT:
				case o("WAWebMediaTypes").MediaDataStage.PREPARING:
				case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
				case o("WAWebMediaTypes").MediaDataStage.EXISTS: if (!o("WAWebMsgGetters").getIsSentByMe(n)) return {
					type: "unviewed",
					icon: m.jsx(r("WAWebMessageViewOncePendingCancel"), {}),
					handleClick: b,
					label: i
				};
				case o("WAWebMediaTypes").MediaDataStage.REMOTE_UPLOADING:
				case o("WAWebMediaTypes").MediaDataStage.REUPLOADING: return {
					type: "complete",
					icon: m.jsx(r("WDSIconWdsIcViewOnce.react"), {
						xstyle: C.nonSpinnerIcon,
						iconXstyle: C.nonSpinnerIconSvg
					}),
					label: i,
					labelStyle: C.labelActive
				};
			}
		}, [
			t,
			t.mediaStage,
			n,
			n.ack
		]);
		return a;
	}
	function S(e) {
		var t = o("react-compiler-runtime").c(46), n = e.displayAuthor, a = e.displayType, i = e.msg, l = e.quotedMsg, u = e.ref, d = e.trusted, p;
		if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
			var f;
			p = [
				(f = o("WAWebMsgGetters")).getAck,
				f.getIsGroupMsg,
				f.getIsFailed,
				f.getIsPSA,
				f.getIsSentByMe,
				o("WAWebFrontendMsgGetters").getSenderObj,
				f.getType,
				o("WAWebFrontendMsgGetters").getMediaData
			], t[0] = p;
		} else p = t[0];
		var g = o("useWAWebMsgValues").useMsgValues(i.id, p), h = g[7], y = v(h, i), b;
		t[1] !== d || t[2] !== y ? (b = function() {
			return { handleKeyActivation: function(t) {
				d && y.handleClick != null && y.handleClick(t);
			} };
		}, t[1] = d, t[2] = y, t[3] = b) : b = t[3], _(u, b);
		var S;
		e: switch (i.type) {
			case o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE: {
				var R;
				t[4] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
					/*BTDS*/
					""
				), t[4] = R) : R = t[4], S = R;
				break e;
			}
			case o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO: {
				var L;
				t[5] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
					/*BTDS*/
					""
				), t[5] = L) : L = t[5], S = L;
				break e;
			}
			case o("WAWebMediaTypes").OUTWARD_TYPES.PTT: {
				var E;
				t[6] === Symbol.for("react.memo_cache_sentinel") ? (E = s._(
					/*BTDS*/
					""
				), t[6] = E) : E = t[6], S = E;
			}
		}
		var k;
		if (y.type === "complete") {
			var I = y.icon, T = y.label, D = y.labelStyle, x;
			t[7] !== S || t[8] !== T || t[9] !== i ? (x = o("WAWebViewOnceState").isUnviewed(i) ? S : [T, S].join(" - "), t[7] = S, t[8] = T, t[9] = i, t[10] = x) : x = t[10];
			var $ = x, P;
			t[11] !== l ? (P = l != null ? m.jsx("div", {
				className: "x1198e8h x1lxpwgx xzueoph xw01apr",
				children: l
			}) : null, t[11] = l, t[12] = P) : P = t[12];
			var N;
			t[13] !== i ? (N = o("WAWebViewOnceState").isViewed(i) && C.statusDone, t[13] = i, t[14] = N) : N = t[14];
			var M;
			t[15] !== N ? (M = [C.statusIcon, N], t[15] = N, t[16] = M) : M = t[16];
			var w;
			t[17] !== I || t[18] !== M ? (w = m.jsx(r("WAWebFlexItem.react"), {
				xstyle: M,
				grow: 0,
				children: I
			}), t[17] = I, t[18] = M, t[19] = w) : w = t[19];
			var A;
			t[20] !== D ? (A = (c || (c = r("stylex")))(D, C.labelText), t[20] = D, t[21] = A) : A = t[21];
			var F;
			t[22] !== i ? (F = i.unsafe(), t[22] = i, t[23] = F) : F = t[23];
			var O;
			t[24] !== T || t[25] !== A || t[26] !== F ? (O = m.jsx(r("WAWebFlexItem.react"), {
				grow: 1,
				children: m.jsx(r("WAWebMessageSpacerText.react"), {
					className: A,
					msg: F,
					children: T
				})
			}), t[24] = T, t[25] = A, t[26] = F, t[27] = O) : O = t[27];
			var B;
			t[28] !== $ || t[29] !== O || t[30] !== w ? (B = m.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: C.labelContainer,
				testid: "view-once-complete",
				"aria-label": $,
				children: [w, O]
			}), t[28] = $, t[29] = O, t[30] = w, t[31] = B) : B = t[31];
			var W;
			t[32] !== n || t[33] !== a || t[34] !== i || t[35] !== B || t[36] !== P ? (W = m.jsxs(r("WAWebMessageTextBubble.react"), {
				msg: i,
				displayAuthor: n,
				displayType: a,
				children: [P, B]
			}), t[32] = n, t[33] = a, t[34] = i, t[35] = B, t[36] = P, t[37] = W) : W = t[37], k = W;
		} else {
			var q;
			t[38] !== a || t[39] !== i ? (q = m.jsx(r("WAWebViewOnceSunset.react"), {
				msg: i,
				displayType: a
			}), t[38] = a, t[39] = i, t[40] = q) : q = t[40], k = q;
		}
		var U;
		t[41] !== y.type ? (U = {
			0: {},
			1: { className: "x9f619 x1iorvi4 x11lfxj5 xjkvuk6 x135b78x" }
		}[(y.type === "unviewed") << 0], t[41] = y.type, t[42] = U) : U = t[42];
		var V;
		return t[43] !== k || t[44] !== U ? (V = m.jsx("div", babelHelpers.extends({}, U, { children: k })), t[43] = k, t[44] = U, t[45] = V) : V = t[45], V;
	}
	l.default = S;
}), 226);
