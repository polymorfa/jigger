__d("WAWebSpacerText.react", [
	"WAWebABPropsSaga",
	"WAWebClassnames",
	"WAWebClock",
	"WAWebFrontendMsgGetters",
	"WAWebLidMigrationUtils",
	"WAWebMessageMeta.react",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebMsgViewCount",
	"WAWebNewsletterGatingUtils",
	"WAWebQuotedMsgUtils",
	"WAWebTextSizeUtils",
	"WAWebThreadMsgUtils",
	"WAWebThreadsGating",
	"react",
	"stylex",
	"useWAWebIsPinnedMsg",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = {
		spacerContainer: {
			fontSize: "x1ncwhqj",
			display: "x3nfvp2",
			verticalAlign: "xxymvpz",
			visibility: "xlshs6z",
			height: "xqtp20y",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "x1uc92m",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x181vq82",
			$$css: !0
		},
		spacerContainerWithViewIcon: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xde1mab",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1iw51ew",
			$$css: !0
		}
	};
	function d(t) {
		var n, a, i = t.className, l = t.msg, s = t.xstyle, d = o("useWAWebMsgValues").useMsgValues(l.id, [
			(a = o("WAWebMsgGetters")).getId,
			a.getBroadcast,
			a.getIsSentByMe,
			a.getStar,
			a.getType,
			a.getIsKept,
			a.getIsEdited,
			a.getIsBizBot1pResponse,
			a.getT,
			a.getIsCAPISupport
		]), m = d[0], p = d[1], _ = d[2], f = d[3], g = d[4], h = d[5], y = d[6], C = d[7], b = d[8], v = d[9], S = o("WAWebMsgViewCount").useWAWebLocalizedViewCount(l.id), R = r("useWAWebIsPinnedMsg")(m), L = o("WAWebTextSizeUtils").getWAWebTextSizeStyles().metaTextStyles, E = o("WAWebLidMigrationUtils").getShouldShowLidDebugUIForMsg(l), k = [], I = g === o("WAWebMsgType").MSG_TYPE.REVOKED, T = o("WAWebFrontendMsgGetters").getChat(l), D = S != null && o("WAWebNewsletterGatingUtils").isNewsletterViewCountEnabled(T == null || (n = T.newsletterMetadata) == null ? void 0 : n.membershipType), x = D && o("WAWebNewsletterGatingUtils").isNewsletterViewsVPVDefinitionEnabled();
		D && k.push(u.jsxs("span", {
			className: "x1c4vz4f x2lah0s x14mko6t",
			children: [S, u.jsx(o("WAWebMessageMeta.react").MetaBullet, {})]
		}, "viewCount")), f && !I && k.push(u.jsx("span", { className: "x1c4vz4f x2lah0s x1xp8n7a" }, "star")), h && !I && k.push(u.jsx("span", { className: "x1c4vz4f x2lah0s x1xp8n7a" }, "kic")), R && !I && k.push(u.jsx("span", { className: "x1c4vz4f x2lah0s x1xp8n7a" }, "pin"));
		var $ = o("WAWebThreadMsgUtils").getMsgViewAllRepliesThread(l);
		$ != null && o("WAWebQuotedMsgUtils").getMessagesCountByThreadId($) >= 2 && o("WAWebThreadsGating").isFollowUpReplyEnabled() && k.push(u.jsx("span", { className: "x1c4vz4f x2lah0s x1xp8n7a" }, "followUpReply")), p && k.push(u.jsx("span", { className: "x1c4vz4f x2lah0s x1xp8n7a" }, "broadcast")), y && !I && k.push(u.jsx("span", {
			className: "x1c4vz4f x2lah0s xk50ysn x2fvf9 xwklpps",
			children: o("WAWebMessageMeta.react").getEditedLabel()
		}, "edited"));
		var P = o("WAWebMessageMeta.react").useBizBot1pLabel(l.safe());
		return P != null && (k.push(u.jsx("span", {
			className: "x1c4vz4f x2lah0s xk50ysn x2fvf9 xwklpps",
			children: P
		}, "bit-bot-label")), k.push(u.jsx("span", { className: "x1c4vz4f x2lah0s x6jxa94" }, "biz-bot-icon"))), P == null && v && (C || o("WAWebMsgGetters").getIsSupportAIMessage(l)) && o("WAWebABPropsSaga").getIsSagaV1Enabled() && k.push(u.jsx("span", { className: "x1c4vz4f x2lah0s x1849jeq" }, "saga-message-marker")), (E || _) && !I && k.push(u.jsx("span", babelHelpers.extends({}, {
			0: { className: "x1c4vz4f x2lah0s xn6xy2s" },
			1: { className: "x1c4vz4f x2lah0s xs2mk4o" }
		}[!!E << 0]), E ? "lid-debug-ui" : "checkmark")), E && I && k.push(u.jsx("span", { className: "x1c4vz4f x2lah0s xs2mk4o" }, "lid-debug-ui")), k.push(u.jsx("span", {
			className: "x1c4vz4f x2lah0s",
			children: b != null ? o("WAWebClock").Clock.timestampStr(b) : null
		}, "timestamp")), u.jsxs("span", {
			className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(i, (e || (e = r("stylex")))(s)),
			children: [t.children, k.length > 0 && u.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.spacerContainer, x === !0 && c.spacerContainerWithViewIcon, L), {
				"aria-hidden": !0,
				children: k
			}))]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
