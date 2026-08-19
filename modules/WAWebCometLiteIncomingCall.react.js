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
	"asyncToGeneratorRuntime",
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
	function f() {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
			e != null && e.type === "web" && (yield e.rejectCall());
		}), g.apply(this, arguments);
	}
	function h(e) {
		return y.apply(this, arguments);
	}
	function y() {
		return y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			yield o("WAWebEnsureVoipInited").ensureVoipInitialized("incoming");
			var t = e, n = !1;
			if (t) {
				var a = yield o("WAWebVoipAcquireMediaStream").queryPermissionStatus(!0), i = a.cameraPermission;
				i === "denied" && (t = !1, n = !0);
			}
			var l = yield o("WAWebVoipAcquireMediaStream").checkVoipDevicePermissions(t);
			if (!l) return o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["WAWebCometLiteIncomingCall: media permissions denied, rejecting call"]))), yield f(), !1;
			var s = yield o("WAWebVoipStackInterface").getVoipStackInterface();
			if (s == null || s.type !== "web") throw r("err")("WAWebCometLiteIncomingCall: VoIP stack unavailable after permission check");
			return yield s.acceptCall(!0, e && !n), !0;
		}), y.apply(this, arguments);
	}
	function C(e) {
		return b.apply(this, arguments);
	}
	function b() {
		return b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = r("WAWebCallCollection").get(e);
			t != null && (t.userEndedCall = !0), yield o("WAWebEnsureVoipInited").ensureVoipInitialized("incoming"), yield f();
		}), b.apply(this, arguments);
	}
	function v(t) {
		var n = t.callId, a = t.isVideo, i = t.onDismiss, l = t.wid, c = o("WAWebContactCollection").ContactCollection.get(l), d = o("WAWebCometLiteContactData").getChatForContact(l), f = r("useWAWebCometLiteRingtone")(l), g = f.stopRingtone, y;
		d != null ? y = m.jsx(o("WAWebName.react").Name, {
			chat: d,
			titlify: !0,
			ellipsify: !0,
			xstyle: _.nameText
		}) : c != null ? y = m.jsx(o("WAWebName.react").Name, {
			contact: c,
			titlify: !0,
			ellipsify: !0,
			xstyle: _.nameText
		}) : y = m.jsx("span", {
			className: "x579bpy x1cpheol x117nqv4 x14ug900",
			children: s._(
				/*BTDS*/
				""
			)
		});
		var b = function() {
			g(), h(a).then(function(e) {
				e || i();
			}).catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WAWebCometLiteIncomingCall: accept failed ", ""])), t).sendLogs("comet-lite-incoming-accept"), i(), o("WDSDialogBridge").openWDSDialog(m.jsx(r("WAWebCometLiteCallErrorDialog.react"), {}));
			});
		}, v = function() {
			g(), i(), C(n).catch(function(e) {
				o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["WAWebCometLiteIncomingCall: decline failed ", ""])), e).sendLogs("comet-lite-incoming-decline");
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
							id: l,
							size: p,
							quality: o("WAWebDetailImage.react").DetailImageQuality.High
						}),
						m.jsx("div", {
							className: "x193iq5w x6ikm8r x10wlt62",
							children: y
						}),
						m.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: a ? s._(
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
							Icon: r(a ? "WDSIconIcVideocam.react" : "WDSIconIcCall.react"),
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
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);
