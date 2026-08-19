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
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(16), n = e.deviceKind, a = e.devices, i = e.handleDeviceChange, l;
		if (t[0] !== n.kind || t[1] !== a) {
			var s;
			t[3] !== n.kind ? (s = function(t) {
				return t.kind === n.kind;
			}, t[3] = n.kind, t[4] = s) : s = t[4], l = a.filter(s), t[0] = n.kind, t[1] = a, t[2] = l;
		} else l = t[2];
		var u;
		t[5] !== n.kind || t[6] !== i ? (u = function(t) {
			return i(t, n.kind);
		}, t[5] = n.kind, t[6] = i, t[7] = u) : u = t[7];
		var c = n.selected, m = n.icon, p;
		t[8] !== n.label ? (p = n.label.toString(), t[8] = n.label, t[9] = p) : p = t[9];
		var _;
		return t[10] !== n.icon || t[11] !== n.selected || t[12] !== l || t[13] !== u || t[14] !== p ? (_ = d.jsx(r("WAWebWindowsDevicesDropDownButton.react"), {
			devices: l,
			onDeviceChange: u,
			selectedDeviceId: c,
			icon: m,
			label: p
		}), t[10] = n.icon, t[11] = n.selected, t[12] = l, t[13] = u, t[14] = p, t[15] = _) : _ = t[15], _;
	}
	function b(t) {
		var n = t.onClose, a = t.ref, i = _([]), l = i[0], c = i[1], m = _(o("WAWebWindowsSelectedDevicesPrefs").getSelectedAudioInput()), g = m[0], b = m[1], v = _(o("WAWebWindowsSelectedDevicesPrefs").getSelectedVideoInput()), S = v[0], R = v[1], L = _(o("WAWebWindowsSelectedDevicesPrefs").getSelectedAudioOutput()), E = L[0], k = L[1], I = y(S, R, g, b, E, k);
		p(function() {
			async function t() {
				try {
					var t, n;
					o("WAWebModalManager").ModalManager.open(d.jsx((n = o("WAWebGuidePopup.react")).GuidePopup, {
						messaging: n.Messaging.CAMERA,
						type: n.GuidePopupType.GUIDE_ALLOW,
						featureSurface: n.FeatureSurface.PHOTO_CAPTURE
					})), await ((t = navigator.mediaDevices) == null || t.getUserMedia == null ? void 0 : t.getUserMedia({
						audio: !0,
						video: !0
					}));
				} catch (t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[hybrid] Error requesting media permissions"])));
				} finally {
					o("WAWebModalManager").ModalManager.close();
				}
				var r;
				try {
					var a, i;
					r = (a = await ((i = navigator.mediaDevices) == null ? void 0 : i.enumerateDevices())) != null ? a : [];
				} catch (e) {
					o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Error fetching devices: ", ""])), e);
				}
				I.forEach(function(e) {
					var t, n = e.kind, o = e.selected, a = e.stateSetter, i = h(r, n, o);
					a((t = i == null ? void 0 : i.deviceId) != null ? t : "");
				}), c(r != null ? r : []);
			}
			t().catch(function(e) {
				return o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[hybrid] Error in fetchDevices"])));
			});
		}, []);
		var T = function(t, n) {
			var e = I.get(n);
			e && (e.stateSetter(t), e.prefsSetter(t));
		};
		return d.jsxs(r("WAWebDrawer.react"), {
			ref: a,
			theme: "settings",
			testid: "device-settings-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "windows-devices-settings"
			},
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				testid: "drawer-title-device",
				title: o("WAWebWindowsDevicesSettingsHelpers").getDeviceSettingsTitle(),
				onBack: n,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				focusBackOrCancel: !0
			}), d.jsx(r("WAWebDrawerBody.react"), { children: d.jsx(r("WAWebDrawerSection.react"), {
				theme: "refresh-new",
				animation: !1,
				xstyle: f.drawerSection,
				children: Array.from(I.values(), function(e) {
					return d.jsx(C, {
						deviceKind: e,
						devices: l,
						handleDeviceChange: T
					}, e.kind);
				})
			}) })]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = b;
}), 98);
