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
		var t, n = e.displayAuthor, a = e.displayType, i = e.msg, l = e.quotedMsg, u = e.ref, d = e.trusted, p = o("useWAWebMsgValues").useMsgValues(i.id, [
			(t = o("WAWebMsgGetters")).getAck,
			t.getIsGroupMsg,
			t.getIsFailed,
			t.getIsPSA,
			t.getIsSentByMe,
			o("WAWebFrontendMsgGetters").getSenderObj,
			t.getType,
			o("WAWebFrontendMsgGetters").getMediaData
		]), f = p[0], g = p[1], h = p[2], y = p[3], b = p[4], S = p[5], R = p[6], L = p[7], E = v(L, i);
		_(u, function() {
			return { handleKeyActivation: function(t) {
				d && E.handleClick != null && E.handleClick(t);
			} };
		});
		var k;
		switch (i.type) {
			case o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE:
				k = s._(
					/*BTDS*/
					""
				);
				break;
			case o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO:
				k = s._(
					/*BTDS*/
					""
				);
				break;
			case o("WAWebMediaTypes").OUTWARD_TYPES.PTT:
				k = s._(
					/*BTDS*/
					""
				);
				break;
		}
		var I;
		if (E.type === "complete") {
			var T = E.icon, D = E.label, x = E.labelStyle, $ = o("WAWebViewOnceState").isUnviewed(i) ? k : [D, k].join(" - ");
			I = m.jsxs(r("WAWebMessageTextBubble.react"), {
				msg: i,
				displayAuthor: n,
				displayType: a,
				children: [l != null ? m.jsx("div", {
					className: "x1198e8h x1lxpwgx xzueoph xw01apr",
					children: l
				}) : null, m.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					xstyle: C.labelContainer,
					testid: "view-once-complete",
					"aria-label": $,
					children: [m.jsx(r("WAWebFlexItem.react"), {
						xstyle: [C.statusIcon, o("WAWebViewOnceState").isViewed(i) && C.statusDone],
						grow: 0,
						children: T
					}), m.jsx(r("WAWebFlexItem.react"), {
						grow: 1,
						children: m.jsx(r("WAWebMessageSpacerText.react"), {
							className: (c || (c = r("stylex")))(x, C.labelText),
							msg: i.unsafe(),
							children: D
						})
					})]
				})]
			});
		} else I = m.jsx(r("WAWebViewOnceSunset.react"), {
			msg: i,
			displayType: a
		});
		return m.jsx("div", babelHelpers.extends({}, {
			0: {},
			1: { className: "x9f619 x1iorvi4 x11lfxj5 xjkvuk6 x135b78x" }
		}[(E.type === "unviewed") << 0], { children: I }));
	}
	S.displayName = S.name + " [from " + i.id + "]", l.default = S;
}), 226);
