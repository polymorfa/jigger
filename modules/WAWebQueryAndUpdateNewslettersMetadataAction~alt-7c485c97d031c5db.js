__d("WAWebQueryAndUpdateNewslettersMetadataAction", [
	"WALogger",
	"WAWebBackendErrors",
	"WAWebCommonNewsletterEnums",
	"WAWebContactCollection",
	"WAWebContactProfilePicThumbBridge",
	"WAWebCreateChat",
	"WAWebDBBulkPersistProfilePic",
	"WAWebNewsletterCollection",
	"WAWebNewsletterGetAdminCapabilitiesJob",
	"WAWebNewsletterGetAdminInfoJob",
	"WAWebNewsletterMetadataCollection",
	"WAWebNewsletterMetadataJob",
	"WAWebNewsletterModelUtils",
	"WAWebNewsletterPullMessagesFromServerAction",
	"WAWebNewsletterRoleIdentifier",
	"WAWebNewsletterStorageUtils",
	"WAWebNewsletterSystemMessagesAction",
	"WAWebNewsletterUpdateNewslettersRecordsJob",
	"WAWebNoop",
	"WAWebProfilePicThumbCollection",
	"WAWebViewMode.flow",
	"WAWebViewModeUtils",
	"WAWebWidFactory",
	"compactMap"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g;
	function h(e) {
		return e != null && Number.isInteger(e) && e > 0;
	}
	async function y(t, n) {
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[newsletters][queryAndUpdateNewsletterMetadataAction] Start"])));
		try {
			var a, i, l = o("WAWebNewsletterRoleIdentifier").getRoleByIdentifier(t), c = await o("WAWebNewsletterMetadataJob").getNewsletterMetadata(t, l, n == null ? void 0 : n.fields);
			if (c == null) return;
			var d = o("WAWebNewsletterModelUtils").mapNewsletterToChat(c), m = o("WAWebNewsletterModelUtils").mapNewsletterToMetadata(c), p = (a = c.newsletterPictureMetadataMixin) == null ? void 0 : a.picture, _ = p ? [o("WAWebNewsletterModelUtils").mapPicturesToProfilePicThumb(t, p)] : [], f = await C(t, n == null ? void 0 : n.adminFields), g = f.adminCount, h = f.adminProfile, y = f.adminProfilesSettingEnabled, v = void 0;
			return (n == null || (i = n.adminFields) == null ? void 0 : i.capabilities) === !0 && (v = await o("WAWebNewsletterGetAdminCapabilitiesJob").getNewsletterAdminCapabilities(t)), await b({
				chats: [d],
				metadata: [babelHelpers.extends({}, m, {
					adminCount: g,
					adminProfile: h,
					adminProfilesSettingEnabled: y,
					capabilities: v
				})],
				pics: _,
				messageCount: n == null ? void 0 : n.messageCount
			}), o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[newsletters][queryAndUpdateNewsletterMetadataAction] End"]))), r("WAWebNewsletterCollection").get(c.idJid);
		} catch (e) {
			if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError && e.statusCode === 405) return;
			o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[queryAndUpdateNewsletterMetadataAction] fetch failed"]))).tags("newsletter").sendLogs("newsletter-failed-to-retrieve-newsletter");
		}
	}
	async function C(e, t) {
		var n = t != null ? t : {}, r = n.adminCount, a = n.adminProfileData, i = n.adminProfilesSettingEnabled;
		if (r !== !0 && a !== !0 && i !== !0) return {
			adminCount: void 0,
			adminProfile: void 0,
			adminProfilesSettingEnabled: void 0
		};
		var l = await o("WAWebNewsletterGetAdminInfoJob").getNewsletterAdminInfo(e);
		return {
			adminCount: r ? l.adminCount : void 0,
			adminProfile: a ? l.adminProfile : void 0,
			adminProfilesSettingEnabled: i ? l.adminProfilesSettingEnabled : void 0
		};
	}
	async function b(e) {
		var t = e.addSystemMsgs, n = e.chats, a = e.messageCount, i = e.metadata, l = e.pics, s = e.qplEvent;
		o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[newsletters][updateCollections] Start"])));
		var u = v(n, i, l), y = u.filteredChats, C = u.filteredMetadata, b = u.filteredPics;
		s == null || s.addPoint("updateNewsletterChatRecords_start"), await o("WAWebNewsletterUpdateNewslettersRecordsJob").updateNewsletterChatRecords(y.map(o("WAWebCreateChat").createNewsletterObjectForStorage)), s == null || s.addPoint("updateNewsletterChatRecords_end"), o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[newsletters][updateCollections][chat] Persist changes to DB"]))), s == null || s.addPoint("updateNewsletterMetadata_start"), await o("WAWebNewsletterMetadataJob").updateNewsletterMetadata(C.map(o("WAWebNewsletterStorageUtils").createNewsletterMetadataObjectForStorage)), s == null || s.addPoint("updateNewsletterMetadata_end"), o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[updateCollections][metadata] persisted to DB"]))), s == null || s.addPoint("bulkPersistProfilePicChanges_start"), await o("WAWebDBBulkPersistProfilePic").bulkPersistProfilePicChanges(r("compactMap")(b, function(e) {
			var t, n, r, a;
			if (Object.prototype.hasOwnProperty.call(e, "eurl")) {
				var i = o("WAWebWidFactory").createWid(e.id.toString());
				return o("WAWebContactProfilePicThumbBridge").mapProfilePictureToProfilePicThumbRowType(i, {
					id: i,
					tag: (t = e.tag) != null ? t : void 0,
					eurl: (n = e.eurl) != null ? n : void 0,
					previewEurl: (r = e.previewEurl) != null ? r : void 0,
					stale: e.stale,
					eurlStale: !1,
					timestamp: (a = e.timestamp) != null ? a : Date.now()
				});
			}
		})), s == null || s.addPoint("bulkPersistProfilePicChanges_end"), o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[updateCollections][picture] persisted to DB"]))), o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[queryAndUpdateAllNewsletterMetadataAction] update model"]))), r("WAWebNewsletterMetadataCollection").add(i, { merge: !0 }), o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.add(l, { merge: !0 }), r("WAWebNewsletterCollection").add(n, { merge: !0 }), s == null || s.addPoint("pullNewsletterMessagesFromServer_start"), o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["[queryAndUpdateAllNewsletterMetadataAction][msg] start"]))), h(a) && await Promise.all(r("WAWebNewsletterCollection").filter(function(e) {
			var t;
			return !((t = e.newsletterMetadata) != null && t.isSuspendedOrTerminated);
		}).map(function(e) {
			return o("WAWebNewsletterPullMessagesFromServerAction").pullNewsletterMessagesFromServer(e, {
				messageCount: a,
				resetUnreadCount: !0
			}).then(function(n) {
				if (!n.some(function(e) {
					return e.isWamoSub !== !0 || o("WAWebViewModeUtils").isViewModeVisibleInSurface(o("WAWebViewMode.flow").ViewModeSurface.CHAT, e.viewMode);
				}) && t === !0) return o("WAWebNewsletterSystemMessagesAction").addSystemMessagesToChat(e);
			}).catch(r("WAWebNoop"));
		})), s == null || s.addPoint("pullNewsletterMessagesFromServer_end"), o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[queryAndUpdateAllNewsletterMetadataAction][msg] end"]))), s == null || s.addPoint("contactUpdates_start");
		var S = i.filter(function(e) {
			return e.name;
		}).map(function(e) {
			return {
				id: e.id,
				name: e.name
			};
		});
		o("WAWebContactCollection").ContactCollection.add(S, { merge: !0 }), s == null || s.addPoint("contactUpdates_end");
	}
	function v(e, t, n) {
		var a = t.filter(function(e) {
			if (e.membershipType != null) return e.membershipType === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest;
			var t = r("WAWebNewsletterMetadataCollection").get(e.id);
			return t == null ? !1 : t.membershipType === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest;
		}).map(function(e) {
			return e.id;
		}), i = e.filter(function(e) {
			return !a.includes(e.id);
		}), l = t.filter(function(e) {
			return !a.includes(e.id);
		}), s = n.filter(function(e) {
			return !a.includes(e.id);
		});
		return {
			filteredChats: i,
			filteredMetadata: l,
			filteredPics: s
		};
	}
	l.NewsletterMetadataUpdateEntryPoint = o("WAWebCommonNewsletterEnums").NewsletterMetadataUpdateEntryPoint, l.queryAndUpdateNewsletterMetadataAction = y, l.updateCollections = b;
}), 98);
