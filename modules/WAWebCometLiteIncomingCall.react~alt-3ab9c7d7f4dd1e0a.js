__d("WAWebCometLiteIncomingCall.react", [
	"fbt",
	"WALogger",
	"WAWebCallCollection",
	"WAWebCometLiteCallErrorDialog.react",
	"WAWebCometLiteContactData",
	"WAWebContactCollection",
	"WAWebDetailImage.react",
	"WAWebEnsureVoipInited",
	"WAWebFlex.react",
	"WAWebName.react",
	"WAWebVoipAcquireMediaStream",
	"WAWebVoipStackInterface",
	"WAWebWaLogoIcon.react",
	"WDSButton.react",
	"WDSDialogBridge",
	"WDSIconIcCall.react",
	"WDSIconIcCallEndFilled.react",
	"WDSIconIcVideocam.react",
	"WDSText.react",
	"WDSThemes",
	"err",
	"react",
	"useWAWebCometLiteRingtone"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m = d || (d = o("react")), p = 112, _ = {
		root: {
			boxSizing: "x9f619",
			width: "xh8yej3",
			height: "x5yr21d",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			paddingInlineStart: "x1m4z3lf",
			paddingInlineEnd: "x1evaxtz",
			paddingLeft: null,
			paddingRight: null,
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		logo: {
			position: "x10l6tqk",
			top: "x9awhp5",
			insetInlineStart: "x1i4wkit",
			left: null,
			right: null,
			color: "x1r8hjv8",
			$$css: !0
		},
		peerArea: {
			flexGrow: "x1iyjqo2",
			rowGap: "x1f0uite",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		nameText: {
			fontSize: "x579bpy",
			lineHeight: "x1cpheol",
			fontWeight: "x117nqv4",
			color: "x14ug900",
			$$css: !0
		},
		actions: {
			columnGap: "x13a9art",
			paddingTop: "x1sk1jro",
			paddingBottom: "x1ci70gm",
			$$css: !0
		},
		action: {
			rowGap: "x1qvou4u",
			$$css: !0
		}
	};
	async function f() {
		var e = await o("WAWebVoipStackInterface").getVoipStackInterface();
		e != null && e.type === "web" && await e.rejectCall();
	}
	async function g(t) {
		await o("WAWebEnsureVoipInited").ensureVoipInitialized("incoming");
		var n = t, a = !1;
		if (n) {
			var i = await o("WAWebVoipAcquireMediaStream").queryPermissionStatus(!0), l = i.cameraPermission;
			l === "denied" && (n = !1, a = !0);
		}
		var s = await o("WAWebVoipAcquireMediaStream").checkVoipDevicePermissions(n);
		if (!s) return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WAWebCometLiteIncomingCall: media permissions denied, rejecting call"]))), await f(), !1;
		var u = await o("WAWebVoipStackInterface").getVoipStackInterface();
		if (u == null || u.type !== "web") throw r("err")("WAWebCometLiteIncomingCall: VoIP stack unavailable after permission check");
		return await u.acceptCall(!0, t && !a), !0;
	}
	async function h(e) {
		var t = r("WAWebCallCollection").get(e);
		t != null && (t.userEndedCall = !0), await o("WAWebEnsureVoipInited").ensureVoipInitialized("incoming"), await f();
	}
	function y(e) {
		var t = e.callId, n = e.isVideo, a = e.onDismiss, i = e.wid, l = o("WAWebContactCollection").ContactCollection.get(i), d = o("WAWebCometLiteContactData").getChatForContact(i), f = r("useWAWebCometLiteRingtone")(i), y = f.stopRingtone, C;
		d != null ? C = m.jsx(o("WAWebName.react").Name, {
			chat: d,
			titlify: !0,
			ellipsify: !0,
			xstyle: _.nameText
		}) : l != null ? C = m.jsx(o("WAWebName.react").Name, {
			contact: l,
			titlify: !0,
			ellipsify: !0,
			xstyle: _.nameText
		}) : C = m.jsx("span", {
			className: "x579bpy x1cpheol x117nqv4 x14ug900",
			children: s._(
				/*BTDS*/
				""
			)
		});
		var b = function() {
			y(), g(n).then(function(e) {
				e || a();
			}).catch(function(e) {
				o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["WAWebCometLiteIncomingCall: accept failed ", ""])), e).sendLogs("comet-lite-incoming-accept"), a(), o("WDSDialogBridge").openWDSDialog(m.jsx(r("WAWebCometLiteCallErrorDialog.react"), {}));
			});
		}, v = function() {
			y(), a(), h(t).catch(function(e) {
				o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["WAWebCometLiteIncomingCall: decline failed ", ""])), e).sendLogs("comet-lite-incoming-decline");
			});
		};
		return m.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: _.root,
			testid: "wa-web-lite-incoming-call",
			grow: 1,
			children: [
				m.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
					height: 40,
					width: 40,
					iconXstyle: _.logo,
					"aria-label": s._(
						/*BTDS*/
						""
					)
				}),
				m.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					justify: "center",
					xstyle: _.peerArea,
					children: [
						m.jsx(o("WAWebDetailImage.react").DetailImage, {
							id: i,
							size: p,
							quality: o("WAWebDetailImage.react").DetailImageQuality.High
						}),
						m.jsx("div", {
							className: "x193iq5w x6ikm8r x10wlt62",
							children: C
						}),
						m.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: n ? s._(
								/*BTDS*/
								""
							) : s._(
								/*BTDS*/
								""
							)
						})
					]
				}),
				m.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					xstyle: _.actions,
					children: [m.jsxs(o("WAWebFlex.react").FlexColumn, {
						align: "center",
						xstyle: _.action,
						children: [m.jsx(r("WDSButton.react"), {
							size: "large",
							variant: "filled",
							type: "destructive",
							Icon: r("WDSIconIcCallEndFilled.react"),
							onPress: v,
							testid: "wa-web-lite-incoming-decline",
							xstyle: o("WDSThemes").WDSLightTheme,
							"aria-label": s._(
								/*BTDS*/
								""
							)
						}), m.jsx(r("WDSText.react"), {
							type: "Body3",
							colorName: "contentDefault",
							selectable: !1,
							children: s._(
								/*BTDS*/
								""
							)
						})]
					}), m.jsxs(o("WAWebFlex.react").FlexColumn, {
						align: "center",
						xstyle: _.action,
						children: [m.jsx(r("WDSButton.react"), {
							size: "large",
							variant: "filled",
							Icon: r(n ? "WDSIconIcVideocam.react" : "WDSIconIcCall.react"),
							onPress: b,
							testid: "wa-web-lite-incoming-accept",
							"aria-label": s._(
								/*BTDS*/
								""
							)
						}), m.jsx(r("WDSText.react"), {
							type: "Body3",
							colorName: "contentDefault",
							selectable: !1,
							children: s._(
								/*BTDS*/
								""
							)
						})]
					})]
				})
			]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
