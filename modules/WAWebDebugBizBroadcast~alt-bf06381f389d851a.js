__d("WAWebDebugBizBroadcast", [
	"WATimeUtils",
	"WAWebBizBroadcastCampaignAPI",
	"WAWebBizBroadcastDeviceCapabilityCommon",
	"WAWebBizBroadcastProOnboardingStatus",
	"WAWebBizBroadcastProUpdateCampaignAction",
	"WAWebBizBroadcastSystemMessageManager",
	"WAWebBizBroadcastTos",
	"WAWebChatCollection",
	"WAWebPonyfillsCryptoRandomUUID",
	"WAWebSchemaBusinessBroadcastCampaign",
	"WAWebTos",
	"WAWebUserPrefsMeUser",
	"WAWebWidToJid",
	"err"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		o("WAWebBizBroadcastDeviceCapabilityCommon").saveBizBroadcastCapabilityToStorage(e);
	}
	e.doc = "Override primary device Business Broadcast capability (true/false)";
	function s() {
		o("WAWebTos").TosManager.setState(o("WAWebBizBroadcastTos").getBizBroadcastTosId(), "ACCEPTED", o("WATimeUtils").unixTime());
	}
	s.doc = "Accept BB TOS locally (skips server RPC, bypasses TOS modal)", s.paramsToExecute = [];
	function u() {
		o("WAWebBizBroadcastProOnboardingStatus").debugSetBizBroadcastProOnboardingStatus(o("WAWebBizBroadcastProOnboardingStatus").BBProOnboardingStatus.ELIGIBLE_TO_ONBOARD);
	}
	u.doc = "Force BB Pro onboarding status to eligible_to_onboard (E2E)", u.paramsToExecute = [];
	function c() {
		var e = o("WAWebChatCollection").ChatCollection.getActive();
		if (e == null) throw r("err")("No active chat");
		return o("WAWebWidToJid").widToBroadcastJid(e.id);
	}
	async function d() {
		var e = c(), t = r("WAWebPonyfillsCryptoRandomUUID")(), n = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().getDeviceId();
		await o("WAWebBizBroadcastCampaignAPI").createBizBroadcastCampaign({
			adGroupId: "test_adgroup_" + t,
			adId: null,
			broadcastJid: e,
			campaignId: t,
			campaignName: "Test Campaign " + t,
			createdTimestamp: Date.now(),
			deviceId: n,
			msgId: null,
			pendingBroadcastMessageId: null,
			reservedQuota: null,
			scheduledTimestamp: null,
			status: o("WAWebSchemaBusinessBroadcastCampaign").BusinessBroadcastCampaignStatus.PROCESSING
		}), await o("WAWebBizBroadcastSystemMessageManager").updateBizBroadcastSystemMessage(e);
	}
	d.doc = "Create a test PROCESSING campaign for the active broadcast chat (E2E)", d.paramsToExecute = [];
	async function m() {
		var e = c(), t = await o("WAWebBizBroadcastCampaignAPI").getBizBroadcastCampaignsByBroadcastJid(e);
		await Promise.all(t.filter(function(e) {
			return e.status === o("WAWebSchemaBusinessBroadcastCampaign").BusinessBroadcastCampaignStatus.PROCESSING;
		}).map(function(e) {
			return o("WAWebBizBroadcastCampaignAPI").updateBizBroadcastCampaign(e.campaignId, { status: o("WAWebSchemaBusinessBroadcastCampaign").BusinessBroadcastCampaignStatus.SENT });
		})), await o("WAWebBizBroadcastSystemMessageManager").updateBizBroadcastSystemMessage(e);
	}
	m.doc = "Complete all PROCESSING campaigns for the active broadcast chat (E2E)", m.paramsToExecute = [];
	function p(e) {
		return o("WAWebBizBroadcastProUpdateCampaignAction").cancelBizBroadcastProCampaign(e);
	}
	p.doc = "Cancel (pause) a BB Pro scheduled campaign by id (server mutation)";
	function _(e, t) {
		return o("WAWebBizBroadcastProUpdateCampaignAction").rescheduleBizBroadcastProCampaign(e, t);
	}
	_.doc = "Reschedule a BB Pro campaign: new start (epoch s); stop auto-set to +5d";
	var f = {
		acceptBizBroadcastTos: s,
		cancelBizBroadcastProCampaign: p,
		completeTestCampaignsForActiveChat: m,
		createTestProcessingCampaignForActiveChat: d,
		rescheduleBizBroadcastProCampaign: _,
		setBizBroadcastDeviceCapability: e,
		setBizBroadcastProNuxEligible: u
	};
	l.default = f;
}), 98);
