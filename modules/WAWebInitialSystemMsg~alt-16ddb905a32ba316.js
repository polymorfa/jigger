__d("WAWebInitialSystemMsg", [
	"WAWebAdvHostedAccountTypeSystemMsg",
	"WAWebApiDeviceList",
	"WAWebBizCoexUtils",
	"WAWebBotSystemMsg",
	"WAWebBotTos",
	"WAWebBotTypes",
	"WAWebContactSystemMsg",
	"WAWebMobilePlatforms",
	"WAWebPrivacyModeSystemMsg",
	"WAWebProtobufsAdv.pb",
	"WAWebUserPrefsMultiDevice",
	"WAWebWid",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	async function e(e, t, n) {
		if (r("WAWebWid").isPSA(e)) return [o("WAWebContactSystemMsg").genEncryptNotificationMsg(e, "chat_psa")];
		if (e.isBot()) return [o("WAWebBotSystemMsg").genBotInitSystemMsg(e)];
		if (r("WAWebWid").isBroadcast(e)) return s(e);
		if (r("WAWebWid").isCAPISupportAccount(e)) return [o("WAWebContactSystemMsg").genNonE2ENotificationMsg(e, "support_system_message")];
		if (n === o("WAWebBotTypes").BizBotAutomatedType.FULL_3P) return [o("WAWebBotSystemMsg").genBizBot3pDisclosureMessage(e)];
		if (e.isUser()) {
			if (o("WAWebMobilePlatforms").isSMB() && await o("WAWebUserPrefsMultiDevice").getIsHostedMeAccount() === !0) return [r("nullthrows")(o("WAWebAdvHostedAccountTypeSystemMsg").genAdvMeAccountIsHostedNotificationMsg(e, e))];
			var a = o("WAWebUserPrefsMultiDevice").getHaveProcessedCoexAdv();
			if (a && e.isUser()) {
				var i = await o("WAWebApiDeviceList").getDeviceRecord(e);
				if ((i == null ? void 0 : i.advAccountType) === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED || (i == null ? void 0 : i.deletedChangedToHost) === !0) return o("WAWebBizCoexUtils").shouldDedupInitialHostedSystemMsg(e) ? [] : [r("nullthrows")(o("WAWebAdvHostedAccountTypeSystemMsg").genAdvAccountTypeInitialSysMsg(e, e))];
			}
		}
		var l = [], u = o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(t);
		e: {
			if (u === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE) {
				l.push(o("WAWebContactSystemMsg").genEncryptNotificationMsg(e));
				break e;
			}
			if (u === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.BSP) {
				l.push(o("WAWebContactSystemMsg").genNonE2ENotificationMsg(e, "biz_privacy_mode_init_bsp"));
				break e;
			}
			if (u === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.FB) {
				l.push(o("WAWebContactSystemMsg").genNonE2ENotificationMsg(e, "biz_privacy_mode_init_fb"));
				break e;
			}
			if (u === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.HOSTED_GROUP) {
				l.push(o("WAWebContactSystemMsg").genNonE2ENotificationMsg(e, "is_capi_hosted_group"));
				break e;
			}
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + u);
		}
		return n === o("WAWebBotTypes").BizBotAutomatedType.PARTIAL_1P && o("WAWebBotTos").hasAcceptedBizBotTos() && l.push(o("WAWebBotSystemMsg").genBizBot1pDisclosureMessage(e)), l;
	}
	async function s(e) {
		if (o("WAWebMobilePlatforms").isSMB()) {
			var t = await o("WAWebUserPrefsMultiDevice").getIsHostedMeAccount();
			if (t === !0) return [o("WAWebContactSystemMsg").genNonE2ENotificationMsg(e, "biz_privacy_mode_init_fb")];
		}
		return [o("WAWebContactSystemMsg").genEncryptNotificationMsg(e)];
	}
	l.default = e;
}), 98);
