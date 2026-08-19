__d("WAWebVoipBridgeMediaStreamHandlers", [
	"WAWebVoipAcquireMediaStream",
	"WAWebVoipBridgeMediaStreamHelpers",
	"WAWebVoipCameraPrewarm"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = {
		voipAcquireMediaStream: o("WAWebVoipBridgeMediaStreamHelpers").voipAcquireMediaStreamImpl,
		getIsValidVideoDevice: async function(t) {
			var e = t.deviceId, n = t.isInActiveCall, r = t.targetWindow;
			return o("WAWebVoipAcquireMediaStream").getIsValidVideoDevice(e, r, n);
		},
		cleanupPrewarmedCamera: function() {
			o("WAWebVoipCameraPrewarm").cleanupPrewarmedCamera();
		},
		getVoipCameraPermissionState: async function() {
			return o("WAWebVoipAcquireMediaStream").queryCameraPermissionStrict();
		}
	};
	l.VoipBridgeMediaStreamHandlers = e;
}), 98);
