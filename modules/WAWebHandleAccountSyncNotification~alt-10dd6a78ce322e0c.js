__d("WAWebHandleAccountSyncNotification", [
	"WADeprecatedWapParser",
	"WAJids",
	"WALogger",
	"WATimeUtils",
	"WAWap",
	"WAWebABProps",
	"WAWebAccountSyncJob",
	"WAWebAdvHandlerApi",
	"WAWebApiPendingDeviceSync",
	"WAWebBackendApi",
	"WAWebBackendEventBus",
	"WAWebBizBroadcastDeviceRemovalCleanup",
	"WAWebBizCoexUtils",
	"WAWebCommsWapMd",
	"WAWebContactSyncLogger",
	"WAWebFetchAndUpdateBlocklistJob",
	"WAWebGetAboutQueryJob",
	"WAWebGetDisappearingModeJob",
	"WAWebJidToWid",
	"WAWebMexUsersGetAboutStatus",
	"WAWebOfflineDeviceCache",
	"WAWebOfflineHandler",
	"WAWebPDFNTypes",
	"WAWebSetUsernameJob",
	"WAWebTextStatusGatingUtils",
	"WAWebUpdateDisappearingModeForContact",
	"WAWebUpdateTextStatusForContact",
	"WAWebUserDisclosureCollection",
	"WAWebUserPrefsMeUser",
	"WAWebUserPrefsMultiDevice",
	"WAWebUsernameGatingUtils",
	"WAWebUsernameTypes",
	"WAWebWidFactory",
	"WAWebWorkerSafeBackendApi"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d = function(t) {
		var e, n = t.maybeChild("key-index-list"), r = n == null ? null : {
			ts: n.attrTime("ts"),
			signedKeyIndexBytes: n.hasContent() ? n.contentBytes() : null,
			expectedTs: (e = n.maybeAttrTime("expected_ts")) != null ? e : void 0
		}, a = t.mapChildrenWithTag("device", function(e) {
			var n, r = e.attrDeviceJid("jid");
			if (r != null && r.endsWith("@hosted") || r != null && r.endsWith("@hosted.lid")) {
				var a, i = (a = o("WAWebWidFactory").createHostedDeviceWidOrThrow(r)) == null ? void 0 : a.device;
				if (i == null || i !== o("WAWebBizCoexUtils").HOSTED_DEVICE_ID) throw t.createParseError("invalid hosted device jid");
				return {
					id: i,
					keyIndex: e.maybeAttrInt("key-index"),
					isHosted: !0
				};
			}
			return {
				id: (n = o("WAWebWidFactory").createWid(e.attrDeviceJid("jid")).device) != null ? n : o("WAJids").DEFAULT_DEVICE_ID,
				keyIndex: e.maybeAttrInt("key-index")
			};
		});
		return a.length === 0 ? null : {
			deviceList: a,
			keyIndex: r
		};
	}, m = new (r("WADeprecatedWapParser"))("incomingAccountSyncNotification", function(e) {
		e.assertTag("notification");
		var t = {
			stanzaId: e.attrString("id"),
			ts: e.attrTime("t"),
			from: o("WAWebJidToWid").deviceJidToDeviceWid(e.attrDeviceJid("from"))
		};
		if (e.hasChild("status")) {
			var n = e.child("status"), r = n.hasAttr("action") ? n.attrString("action") : void 0;
			return babelHelpers.extends({
				type: o("WAWebAccountSyncJob").AccountSyncType.STATUS,
				action: r
			}, t);
		} else if (e.hasChild("text_status")) {
			var a = e.child("text_status"), i = a.hasAttr("action") ? a.attrString("action") : void 0, l = a.hasAttr("text") ? a.attrString("text") : void 0, s = a.hasChild("emoji") ? a.child("emoji") : void 0, u = s != null && s.hasAttr("content") ? s == null ? void 0 : s.attrString("content") : void 0, c = a.hasAttr("ephemeral_duration_sec") ? a.attrInt("ephemeral_duration_sec") : void 0, m = a.hasAttr("last_update_time") ? a.attrString("last_update_time") : void 0;
			return babelHelpers.extends({
				type: o("WAWebAccountSyncJob").AccountSyncType.TEXT_STATUS,
				action: i,
				text: l,
				emoji: u,
				ephemeralDurationSeconds: c,
				lastUpdateTime: m
			}, t);
		} else {
			if (e.hasChild("privacy")) return babelHelpers.extends({ type: o("WAWebAccountSyncJob").AccountSyncType.PRIVACY }, t);
			if (e.hasChild("devices")) return babelHelpers.extends({
				type: o("WAWebAccountSyncJob").AccountSyncType.DEVICES,
				devices: d(e.child("devices"))
			}, t);
			if (e.hasChild("blocklist")) {
				var p = e.child("blocklist"), _ = [];
				return o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() && p.forEachChildWithTag("item", function(e) {
					var t = e.maybeAttrString("username"), n = o("WAWebJidToWid").userJidToUserWid(e.attrUserJid("jid"));
					t != null && _.push({
						userId: n,
						username: o("WAWebUsernameTypes").asUsername(t)
					});
				}), babelHelpers.extends({
					type: o("WAWebAccountSyncJob").AccountSyncType.BLOCKLIST,
					usernames: _
				}, t);
			} else {
				if (e.hasChild("picture")) return babelHelpers.extends({ type: o("WAWebAccountSyncJob").AccountSyncType.PICTURE }, t);
				if (e.hasChild("tos")) {
					var f = e.child("tos"), g = [];
					return f.forEachChildWithTag("notice", function(e) {
						var t = e.maybeAttrString("state") !== "false", n = e.attrString("id");
						g.push({
							id: n,
							state: t
						});
					}), babelHelpers.extends({
						type: o("WAWebAccountSyncJob").AccountSyncType.TOS,
						notices: g
					}, t);
				} else if (e.hasChild("disappearing_mode")) {
					var h = e.child("disappearing_mode"), y, C, b;
					return h.hasAttr("action") ? y = h.attrString("action") : (C = h.attrInt("duration"), b = h.attrInt("t")), babelHelpers.extends({}, t, {
						type: o("WAWebAccountSyncJob").AccountSyncType.DISAPPEARING_MODE,
						action: y,
						disappearingModeDuration: C,
						disappearingModeSettingTimestamp: b
					});
				} else if (e.hasChild("notice")) {
					var v = e.child("notice");
					return babelHelpers.extends({
						type: o("WAWebAccountSyncJob").AccountSyncType.NOTICE,
						noticeId: v.attrString("id"),
						noticeStage: v.maybeAttrString("stage"),
						noticeVersion: v.maybeAttrString("version"),
						noticeTimestamp: v.attrInt("t")
					}, t);
				} else if (e.hasChild("user")) {
					var S = e.child("user"), R = S.maybeAttrString("state") === "AI available";
					return babelHelpers.extends({
						type: o("WAWebAccountSyncJob").AccountSyncType.USER,
						isAiAvailable: R
					}, t);
				} else if (e.hasChild("biz_opt_out_list")) {
					var L = e.child("biz_opt_out_list"), E = L.mapChildren(function(e) {
						return {
							action: e.attrString("action"),
							biz_jid: e.attrUserJid("biz_jid")
						};
					}), k = L.maybeAttrString("dhash"), I = L.maybeAttrString("prev_dhash");
					return babelHelpers.extends({
						type: o("WAWebAccountSyncJob").AccountSyncType.OPTOUTLIST,
						list: E,
						dhash: k,
						prevDhash: I
					}, t);
				}
			}
		}
		throw e.createParseError("notification type not supported");
	});
	async function p() {
		var t = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), n;
		if (o("WAWebABProps").getABPropConfigValue("mex_usync_about_status")) {
			var r = await o("WAWebMexUsersGetAboutStatus").getMexUsersAboutStatus({
				wid: t,
				tcToken: null
			}), a = r.state, i = r.status;
			a == null && (n = i);
		} else {
			var l = await o("WAWebGetAboutQueryJob").getAbout({
				wid: t,
				tcToken: null
			});
			if (l.error) return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"getStatus failed for ",
				": failed ",
				" : ",
				""
			])), t, l.error.errorCode, l.error.errorText), Promise.reject(l.error.errorText);
			n = l.status;
		}
		n !== "" && await o("WAWebBackendApi").frontendSendAndReceive("setMyStatus", { status: n });
	}
	async function _(e) {
		var t = e.devices, n = e.wid, r = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(), a = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
		if (!o("WAWebUserPrefsMeUser").isMeAccount(n)) return o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["wid-is-not-self"]))).sendLogs("wid-is-not-self"), [{
			wid: n,
			devices: t
		}];
		var i = [{
			wid: r,
			devices: t
		}];
		return a != null && i.push({
			wid: a,
			devices: t
		}), i;
	}
	async function f(e) {
		var t = m.parse(e);
		if (t.error) return o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Parsing Error: ", ""])), t.error.toString()), Promise.reject(t.error);
		var n = t.success, r = o("WAWap").wap("ack", {
			id: o("WAWap").CUSTOM_STRING(n.stanzaId),
			to: o("WAWebCommsWapMd").JID(n.from),
			class: "notification",
			type: "account_sync"
		});
		switch (n.type) {
			case o("WAWebAccountSyncJob").AccountSyncType.STATUS:
				await p();
				break;
			case o("WAWebAccountSyncJob").AccountSyncType.TEXT_STATUS: {
				if (!o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()) break;
				var a = n.emoji, i = n.ephemeralDurationSeconds, l = n.lastUpdateTime, s = n.text, d = o("WAWebWidFactory").asUserWidOrThrow(n.from);
				await o("WAWebUpdateTextStatusForContact").updateTextStatusForContact({
					contactId: d,
					textString: s,
					emoji: a,
					ephemeralDuration: i,
					newUpdateTime: l != null ? Number(l) : void 0,
					source: "account-sync"
				});
				break;
			}
			case o("WAWebAccountSyncJob").AccountSyncType.DEVICES: {
				if (o("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete()) {
					if (o("WAWebOfflineHandler").OfflineMessageHandler.isResumeOnSocketDisconnectInProgress()) return await o("WAWebApiPendingDeviceSync").addUserToPendingDeviceSync([n.from.toString()]), r;
				} else return o("WAWebOfflineDeviceCache").OfflinePendingDeviceCache.addOfflinePendingDevice(n.from.toString(), r), "NO_ACK";
				var f = n.devices;
				if (f) {
					var h, y, C = await _({
						wid: o("WAWebWidFactory").asUserWidOrThrow(n.from),
						devices: f
					});
					await o("WAWebAdvHandlerApi").handleADVDeviceSyncResult(C);
					var b = new Set((h = (y = f.deviceList) == null ? void 0 : y.map(function(e) {
						return e.id;
					})) != null ? h : []);
					await o("WAWebBizBroadcastDeviceRemovalCleanup").cleanupCampaignsWithInvalidDevices(b);
				} else await o("WAWebAccountSyncJob").getDevices("notification");
				break;
			}
			case o("WAWebAccountSyncJob").AccountSyncType.PICTURE:
				await o("WAWebAccountSyncJob").getAndUpdateProfilePicture();
				break;
			case o("WAWebAccountSyncJob").AccountSyncType.PRIVACY:
				o("WAWebBackendEventBus").BackendEventBus.triggerAccountSyncForPrivacy(await o("WAWebAccountSyncJob").forceUpdatePrivacySettings());
				break;
			case o("WAWebAccountSyncJob").AccountSyncType.BLOCKLIST:
				o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() && n.usernames != null && await o("WAWebSetUsernameJob").setUsernamesJob(n.usernames), o("WAWebFetchAndUpdateBlocklistJob").fetchAndUpdateBlocklist("notification");
				break;
			case o("WAWebAccountSyncJob").AccountSyncType.OPTOUTLIST: {
				var v = o("WAWebUserPrefsMultiDevice").getOptOutListHash(), S = n.dhash, R = n.list, L = n.prevDhash;
				if (v !== L) {
					o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget("updateOptOutList");
					break;
				} else S != null && (R == null || R.forEach(async function(e) {
					var t = e.action, n = e.biz_jid, r = t === "block", a = o("WAWebJidToWid").userJidToUserWid(n);
					await o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget("updateOptOutListModelInCollection", {
						targetWid: a,
						isBlocked: r
					});
				}), await o("WAWebUserPrefsMultiDevice").setOptOutlistHash(S));
				break;
			}
			case o("WAWebAccountSyncJob").AccountSyncType.TOS:
				n.notices && o("WAWebAccountSyncJob").updateTosStateFromAccountSync(n.notices);
				break;
			case o("WAWebAccountSyncJob").AccountSyncType.DISAPPEARING_MODE: {
				await g(n);
				break;
			}
			case o("WAWebAccountSyncJob").AccountSyncType.NOTICE: {
				var E = n.noticeId, k = n.noticeStage, I = n.noticeTimestamp, T = n.noticeVersion;
				if (E != null && E !== "" && k != null && T != null && I != null) {
					var D = k === o("WAWebPDFNTypes").NOTICE_STAGES.PDFN_ACCEPTED;
					await o("WAWebUserDisclosureCollection").UserDisclosureCollection.updateNoticeStage({
						id: E,
						accepted: D,
						policyVersion: T
					}), o("WAWebAccountSyncJob").updateTosStateFromAccountSync([{
						id: E,
						state: D,
						timestamp: o("WATimeUtils").castToUnixTime(I)
					}]);
				}
				break;
			}
			case o("WAWebAccountSyncJob").AccountSyncType.USER: {
				n.isAiAvailable === !0 && o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Receieved account sync notification for Ai Available"])));
				break;
			}
		}
		return r;
	}
	async function g(e) {
		var t = e.action, n = e.from, r = e.disappearingModeDuration, a = e.disappearingModeSettingTimestamp;
		if (t === "modify") {
			var i = await o("WAWebGetDisappearingModeJob").getDisappearingMode(n, o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.DM_FORCE_REFRESH);
			i.error == null && i.disappearingModeDuration != null && i.disappearingModeSettingTimestamp != null && (r = i.disappearingModeDuration, a = i.disappearingModeSettingTimestamp);
		}
		r != null && a != null && await o("WAWebUpdateDisappearingModeForContact").updateDisappearingModeForContact({
			contactId: n,
			newDuration: r,
			newSettingTimestamp: a
		});
	}
	l.getAndUpdateStatus = p, l.handleAccountSyncNotification = f;
}), 98);
