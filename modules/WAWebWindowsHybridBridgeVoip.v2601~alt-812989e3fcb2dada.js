__d("WAWebWindowsHybridBridgeVoip.v2601", [
	"WABase64",
	"WALogger",
	"WAWebBackendApi",
	"WAWebSerializeVoipWapNode"
], (function(t, n, r, o, a, i, l) {
	var e, s = (function() {
		function t(t, n) {
			var r = this;
			this.handleVoipReady = function() {
				var e;
				o("WAWebBackendApi").frontendFireAndForget("addStartingLogoutListener", function() {
					return r.handleSignOut();
				}), (e = r.$3) == null || e.onVoipReady();
			}, this.sendSignalingXmpp = function(t) {
				var n, a = t.peerJid, i = t.callId, l = t.payload, s = t.shouldEncryptBeforeSending, u = function(t) {
					return t.replace(/^([^@]*)([^@][^@][^@][^@])@(.*)$/, "...$2@$3");
				};
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"VoipWinRTBridge: received sendSignalingXmpp event: peerJid: ",
					", callId: ",
					", shouldEncryptBeforeSending: ",
					""
				])), u(a), i, s), (n = r.$3) == null || n.onSignalingXmpp(a, i, l, s);
			}, this.handleCallEvent = function(e) {
				var t, n = e.eventType, o = e.userData, a = e.eventDataJson;
				(t = r.$3) == null || t.onCallEvent(n, o, a);
			}, this.requestOpenChat = function(e) {
				var t;
				(t = r.$3) == null || t.onRequestOpenChat(e);
			}, this.requestDeviceJidList = function(e) {
				var t;
				(t = r.$3) == null || t.onRequestDeviceJidList(e).then(function(t) {
					var n;
					(n = r.$1) == null || n.handleDeviceJidList(e.toString(), t);
				});
			}, this.requestPhoneNumberJid = function(e) {
				var t;
				(t = r.$3) == null || t.onRequestPhoneNumberJid == null || t.onRequestPhoneNumberJid(e).then(function(t) {
					var n;
					(n = r.$1) == null || n.handlePhoneNumberJid(e.toString(), t);
				});
			}, this.requestLidJid = function(e) {
				var t;
				(t = r.$3) == null || t.onRequestLidJid == null || t.onRequestLidJid(e).then(function(t) {
					var n;
					(n = r.$1) == null || n.handleLidJid(e.toString(), t);
				});
			}, this.callAgain = function(e) {
				var t, n = e.peerJid, o = e.isVideoCall;
				(t = r.$3) == null || t.onCallAgain(n, o);
			}, this.handleLidCallerDisplayInfo = function(e) {
				var t;
				(t = r.$3) == null || t.onLidCallerDisplayInfo(e);
			}, this.$1 = t, this.$2 = n, this.$1.addEventListener("handleVoipReadyEvent", this.handleVoipReady), this.$1.addEventListener("handleVoipCallEvent", this.handleCallEvent), this.$1.addEventListener("handleSignalingXmppEvent", this.sendSignalingXmpp), this.$1.addEventListener("handleRequestOpenChatEvent", this.requestOpenChat), this.$1.addEventListener("handleRequestDeviceJidListEvent", this.requestDeviceJidList), this.$1.addEventListener("handleRequestPhoneNumberJidEvent", this.requestPhoneNumberJid), this.$1.addEventListener("handleRequestLidJidEvent", this.requestLidJid), this.$1.addEventListener("handleCallAgainEvent", this.callAgain), this.$1.addEventListener("handleLidCallerDisplayInfoEvent", this.handleLidCallerDisplayInfo), this.$1.subscribe(null);
		}
		var n = t.prototype;
		return n.setHandlers = function(t) {
			this.$3 = t;
		}, n.cleanup = function() {
			this.$1.removeEventListener != null && (this.$1.removeEventListener("handleVoipReadyEvent", this.handleVoipReady), this.$1.removeEventListener("handleVoipCallEvent", this.handleCallEvent), this.$1.removeEventListener("handleSignalingXmppEvent", this.sendSignalingXmpp), this.$1.removeEventListener("handleRequestOpenChatEvent", this.requestOpenChat), this.$1.removeEventListener("handleRequestDeviceJidListEvent", this.requestDeviceJidList), this.$1.removeEventListener("handleRequestPhoneNumberJidEvent", this.requestPhoneNumberJid), this.$1.removeEventListener("handleRequestLidJidEvent", this.requestLidJid), this.$1.removeEventListener("handleCallAgainEvent", this.callAgain), this.$1.removeEventListener("handleLidCallerDisplayInfo", this.handleLidCallerDisplayInfo));
		}, n.handleIncomingSignalingOffer = function(t, n, r, a, i, l, s, u, c, d) {
			this.$2.handleIncomingSignalingOffer(o("WAWebSerializeVoipWapNode").serializeVoipWapNode(t), n, r, a, i, l, s, u, c ? o("WABase64").encodeB64(c) : null);
		}, n.handleIncomingSignalingMessage = function(t, n, r, a, i, l, s, u) {
			this.$2.handleIncomingSignalingMessage(o("WAWebSerializeVoipWapNode").serializeVoipWapNode(t), n, r, a, i, l, s, u ? o("WABase64").encodeB64(u) : null);
		}, n.handleIncomingSignalingAck = function(t) {
			var e = t.ackInfoError, n = t.ackInfoType, r = t.peerJid, a = t.tcToken, i = t.xmlNode;
			this.$2.handleIncomingSignalingAck(o("WAWebSerializeVoipWapNode").serializeVoipWapNode(i), e, n, r, a ? o("WABase64").encodeB64(a) : null);
		}, n.handleIncomingSignalingReceipt = function(t, n, r) {
			this.$2.handleIncomingSignalingReceipt(o("WAWebSerializeVoipWapNode").serializeVoipWapNode(t), n, r ? o("WABase64").encodeB64(r) : null);
		}, n.resendOfferOnDecryptionFailure = function(t, n) {
			this.$2.resendOfferOnDecryptionFailure(t, n);
		}, n.resendEncRekeyRetry = function(t, n) {
			this.$2.resendEncRekeyRetry(t, n);
		}, n.notifyDeviceIdentityChangedOrDeleted = function(t, n) {
			this.$2.notifyDeviceIdentityChangedOrDeleted(t, n);
		}, n.handleWebViewReady = function() {
			var e;
			(e = this.$1) == null || e.handleWebViewReady();
		}, n.voipInit = function(t, n) {
			var e, r = n != null ? n : "", o = r.replace(/:\d+@/, "@");
			(e = this.$1) == null || e.voipInit(r, o, t);
		}, n.setHideMyIp = function(t) {
			var e;
			(e = this.$1) == null || e.setHideMyIp(t);
		}, n.setChatNameAndIcon = function(t, n, r) {
			var e;
			(e = this.$1) == null || e.setChatNameAndIcon(t, n, r);
		}, n.handleSignOut = function() {
			var e;
			(e = this.$1) == null || e.handleSignOut();
		}, n.startCall = function(t, n, r, a, i, l, s, u, c, d, m) {
			var e;
			(e = this.$1) == null || e.startCall(t.toString({ legacy: !0 }), n, r, a, i, l, s, u ? o("WABase64").encodeB64(u) : null, c, d, m);
		}, n.startGroupCall = function(t, n, r, o, a, i, l, s, u, c, d, m, p, _) {
			var e;
			(e = this.$1) == null || e.startGroupCall(t, n, r, o, a, i, l, s, u, c, d, m, p, _);
		}, n.handleDeviceJidList = function(t, n) {
			var e;
			(e = this.$1) == null || e.handleDeviceJidList(t, n);
		}, n.previewCallLink = function(t, n, r, o, a) {
			var e;
			(e = this.$1) == null || e.previewCallLink(t, n, r, o, a);
		}, n.previewAndJoinCallLink = function(t, n, r, o, a) {
			var e;
			(e = this.$1) == null || e.previewAndJoinCallLink(t, n, r, o, a);
		}, n.endCall = function(t, n) {
			var e;
			(e = this.$1) == null || e.endCall(t, n);
		}, n.rejectCallWithoutCallContext = function(t, n, r, o, a, i, l) {
			var e;
			(e = this.$1) == null || e.rejectCallWithoutCallContext(t, n, r, o, a, i, l);
		}, n.joinOngoingCall = function(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g) {
			var e;
			(e = this.$1) == null || e.joinOngoingCall(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g);
		}, n.inviteToCall = function(t, n, r) {
			var e;
			(e = this.$1) == null || e.inviteToCall(t, n, r);
		}, n.checkOngoingCalls = function(t, n) {
			var e;
			(e = this.$1) == null || e.checkOngoingCalls(t, n);
		}, n.simulateNativeAnr = function(t, n) {
			var e;
			(e = this.$1) == null || e.simulateNativeAnr(t, n);
		}, n.requestCallInfo = async function() {
			var e = await this.$1.getCallInfo(), t = e.callInfoJsonBase64, n = e.error;
			return {
				callInfoJsonBase64: t,
				error: n
			};
		}, n.requestObtainDevicePermissionAsync = async function(t) {
			var e = await this.$1.requestObtainDevicePermissionAsync(t), n = e.error, r = e.permissionGranted;
			return {
				error: n,
				permissionGranted: r
			};
		}, n.requestDevicesCountAsync = async function(t) {
			var e = await this.$1.getDeviceCountAsync(t), n = e.error, r = e.deviceCount;
			return {
				error: n,
				deviceCount: r
			};
		}, t;
	})();
	l.VoipWinRTBridge_v2601 = s;
}), 98);
