__d("WAWebLinkDeviceInstructions.react", [
	"WAWebLinkDeviceCodeViewCodeType",
	"WAWebLinkDeviceCommonInstructions.react",
	"WAWebLinkDeviceInstructionsList.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.codeType, n = [];
		switch (t) {
			case o("WAWebLinkDeviceCodeViewCodeType").LinkDeviceCodeViewCodeType.QR:
				n = c();
				break;
			case o("WAWebLinkDeviceCodeViewCodeType").LinkDeviceCodeViewCodeType.PHONE_NUMBER_LINK_CODE:
				n = d();
				break;
		}
		return s.jsx(r("WAWebLinkDeviceInstructionsList.react"), {
			instructions: n,
			instructionSource: String(t)
		});
	}
	u.displayName = u.name + " [from " + i.id + "]";
	function c() {
		return [
			s.jsx(o("WAWebLinkDeviceCommonInstructions.react").LinkDeviceInstructionPhoneCamera, {}, "step1"),
			s.jsx(o("WAWebLinkDeviceCommonInstructions.react").LinkDeviceInstructionOpenWhatsApp, {}, "step2"),
			s.jsx(o("WAWebLinkDeviceCommonInstructions.react").LinkDeviceInstructionScanCodeAgain, {}, "step3")
		];
	}
	function d() {
		var e;
		return [
			s.jsx((e = o("WAWebLinkDeviceCommonInstructions.react")).LinkDeviceInstructionOpenWhatsAppOnPhone, {}, "step1"),
			s.jsx(e.LinkDeviceInstructionNavigateToSettings, {}, "step2"),
			s.jsx(e.LinkDeviceInstructionsTapLinkedDevices, {}, "step3"),
			s.jsx(e.LinkDeviceInstructionsLinkWithPhoneNumberInstead, {}, "step4")
		];
	}
	l.default = u;
}), 98);
