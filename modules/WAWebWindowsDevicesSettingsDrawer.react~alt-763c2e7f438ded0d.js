__d("WAWebWindowsDevicesSettingsDrawer.react", [
	"WALogger",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebGuidePopup.react",
	"WAWebMicOutlinedIcon.react",
	"WAWebModalManager",
	"WAWebStatusMediaControlsVolumeOnIcon.react",
	"WAWebWindowsDevicesDropDownButton.react",
	"WAWebWindowsDevicesSettingsHelpers",
	"WAWebWindowsSelectedDevicesPrefs",
	"WDSIconIcPhotoCamera.react",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useState, f = { drawerSection: {
		paddingTop: "xexx8yu",
		$$css: !0
	} }, g = {
		AUDIO_INPUT: "audioinput",
		VIDEO_INPUT: "videoinput",
		AUDIO_OUTPUT: "audiooutput"
	};
	function h(e, t, n) {
		var r;
		return (r = e == null ? void 0 : e.find(function(e) {
			return e.kind === t && e.deviceId === n;
		})) != null ? r : e == null ? void 0 : e.find(function(e) {
			return e.kind === t;
		});
	}
	function y(e, t, n, a, i, l) {
		var s = new Map();
		return s.set(g.VIDEO_INPUT, {
			kind: g.VIDEO_INPUT,
			selected: e,
			stateSetter: t,
			prefsSetter: o("WAWebWindowsSelectedDevicesPrefs").setSelectedVideoInput,
			icon: r("WDSIconIcPhotoCamera.react"),
			label: o("WAWebWindowsDevicesSettingsHelpers").getWebcamSettingsTitle().toString()
		}), s.set(g.AUDIO_INPUT, {
			kind: g.AUDIO_INPUT,
			selected: n,
			stateSetter: a,
			prefsSetter: o("WAWebWindowsSelectedDevicesPrefs").setSelectedAudioInput,
			icon: o("WAWebMicOutlinedIcon.react").MicOutlinedIcon,
			label: o("WAWebWindowsDevicesSettingsHelpers").getMicrophoneSettingsTitle().toString()
		}), s.set(g.AUDIO_OUTPUT, {
			kind: g.AUDIO_OUTPUT,
			selected: i,
			stateSetter: l,
			prefsSetter: o("WAWebWindowsSelectedDevicesPrefs").setSelectedAudioOutput,
			icon: o("WAWebStatusMediaControlsVolumeOnIcon.react").StatusMediaControlsVolumeOnIcon,
			label: o("WAWebWindowsDevicesSettingsHelpers").getAudioOutputSettingsTitle().toString()
		}), s;
	}
	function C(e) {
		var t = e.deviceKind, n = e.devices, o = e.handleDeviceChange;
		return d.jsx(r("WAWebWindowsDevicesDropDownButton.react"), {
			devices: n.filter(function(e) {
				return e.kind === t.kind;
			}),
			onDeviceChange: function(n) {
				return o(n, t.kind);
			},
			selectedDeviceId: t.selected,
			icon: t.icon,
			label: t.label.toString()
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(t) {
		var a = t.onClose, i = t.ref, l = _([]), c = l[0], m = l[1], g = _(o("WAWebWindowsSelectedDevicesPrefs").getSelectedAudioInput()), b = g[0], v = g[1], S = _(o("WAWebWindowsSelectedDevicesPrefs").getSelectedVideoInput()), R = S[0], L = S[1], E = _(o("WAWebWindowsSelectedDevicesPrefs").getSelectedAudioOutput()), k = E[0], I = E[1], T = y(R, L, b, v, k, I);
		p(function() {
			function t() {
				return r.apply(this, arguments);
			}
			function r() {
				return r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					try {
						var e, t;
						o("WAWebModalManager").ModalManager.open(d.jsx((t = o("WAWebGuidePopup.react")).GuidePopup, {
							messaging: t.Messaging.CAMERA,
							type: t.GuidePopupType.GUIDE_ALLOW,
							featureSurface: t.FeatureSurface.PHOTO_CAPTURE
						})), yield (e = navigator.mediaDevices) == null || e.getUserMedia == null ? void 0 : e.getUserMedia({
							audio: !0,
							video: !0
						});
					} catch (e) {
						o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[hybrid] Error requesting media permissions"])));
					} finally {
						o("WAWebModalManager").ModalManager.close();
					}
					var n;
					try {
						var r, a;
						n = (r = yield (a = navigator.mediaDevices) == null ? void 0 : a.enumerateDevices()) != null ? r : [];
					} catch (e) {
						o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Error fetching devices: ", ""])), e);
					}
					T.forEach(function(e) {
						var t, r = e.kind, o = e.selected, a = e.stateSetter, i = h(n, r, o);
						a((t = i == null ? void 0 : i.deviceId) != null ? t : "");
					}), m(n != null ? n : []);
				}), r.apply(this, arguments);
			}
			t().catch(function(t) {
				return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[hybrid] Error in fetchDevices"])));
			});
		}, []);
		var D = function(t, n) {
			var e = T.get(n);
			e && (e.stateSetter(t), e.prefsSetter(t));
		};
		return d.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			theme: "settings",
			testid: "device-settings-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "windows-devices-settings"
			},
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				testid: "drawer-title-device",
				title: o("WAWebWindowsDevicesSettingsHelpers").getDeviceSettingsTitle(),
				onBack: a,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				focusBackOrCancel: !0
			}), d.jsx(r("WAWebDrawerBody.react"), { children: d.jsx(r("WAWebDrawerSection.react"), {
				theme: "refresh-new",
				animation: !1,
				xstyle: f.drawerSection,
				children: Array.from(T.values(), function(e) {
					return d.jsx(C, {
						deviceKind: e,
						devices: c,
						handleDeviceChange: D
					}, e.kind);
				})
			}) })]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = b;
}), 98);
