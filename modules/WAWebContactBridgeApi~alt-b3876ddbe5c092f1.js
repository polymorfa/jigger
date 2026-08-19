__d("WAWebContactBridgeApi", [
	"WAWebApiContact",
	"WAWebBizUpdateContactsWithVerifiedNamesAction",
	"WAWebChatCollection",
	"WAWebContactCollection",
	"WAWebContactMutator",
	"WAWebFrontendContactGetters",
	"WAWebJidToWid",
	"WAWebLidMigrationUtils",
	"WAWebProfilePicThumbCollection",
	"WAWebUserPrefsMeUser",
	"WAWebWidFactory",
	"compactMap"
], (function(t, n, r, o, a, i, l) {
	var e, s = {
		updatePushname: (e = o("WAWebContactMutator")).updatePushname,
		updateContactExternalUserState: e.updateContactExternalUserState,
		bulkUpdatePhoneNumberJids: e.bulkUpdatePhoneNumberJids,
		bulkUpdateLidContactState: e.bulkUpdateLidContactState,
		updateDisappearingMode: e.updateDisappearingMode,
		updateTextStatus: e.updateTextStatus,
		updateContactWithVerifiedName: function(t) {
			var e = t.contactId, n = t.verifiedNameInfo, r = o("WAWebJidToWid").userJidToUserWid(e), a = o("WAWebContactCollection").ContactCollection.gadd(r);
			o("WAWebBizUpdateContactsWithVerifiedNamesAction").updateContactsWithVerifiedNames([babelHelpers.extends({}, n, { id: r })], [a]);
		},
		bulkAddContactToCollection: function(t) {
			var e = t.contacts, n = { merge: !0 };
			e.forEach(function(e) {
				var t = o("WAWebWidFactory").createUserWidOrThrow(e.id);
				o("WAWebContactCollection").ContactCollection.add(babelHelpers.extends({}, e, { id: t }), n);
				var r = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(t));
				r && o("WAWebContactCollection").ContactCollection.add(babelHelpers.extends({}, e, { id: r }), n);
			});
		},
		updateBusinessInfo: e.updateBusinessInfo,
		bulkUpdateUsernames: e.bulkUpdateUsernames,
		bulkUpdateContactPushnames: e.bulkUpdateContactPushnames,
		updateContactAdvAccountType: e.updateContactAdvAccountType,
		getFilteredContacts: e.getFilteredContacts,
		updateUsernameKey: e.updateUsernameKey,
		propagateIdentityFieldsToLidContact: e.propagateIdentityFieldsToLidContact,
		updateContactsStatusMute: function(t) {
			var e = t.groupStatusMuteUpdates, n = t.newsletterStatusMuteUpdates, r = t.userStatusMuteUpdates, a = r.concat(e).concat(n).map(function(e) {
				var t = o("WAWebWidFactory").createWid(e.id), n = o("WAWebContactCollection").ContactCollection.get(t);
				return {
					id: t,
					pushname: (n == null ? void 0 : n.pushname) || "",
					type: (n == null ? void 0 : n.type) || "out",
					name: n == null ? void 0 : n.name,
					statusMute: e.statusMute === !0
				};
			});
			o("WAWebContactCollection").ContactCollection.add(a, { merge: !0 });
		},
		getFrequentContacts: function(t) {
			var e = t.count, n = t.includeVoipCallableOnly, a = 5, i = o("WAWebChatCollection").ChatCollection.getModelsArray(), l = i.filter(function(e) {
				return e.id.isRegularUser() ? !o("WAWebUserPrefsMeUser").isMeAccount(e.id) : !1;
			}), s = [], u = l.map(async function(e) {
				var t = o("WAWebContactCollection").ContactCollection.get(e.id);
				t != null && s.push(e);
			});
			return Promise.all(u).then(function() {
				var e = s.sort(function(e, t) {
					var n, r;
					return ((n = t.t) != null ? n : 0) - ((r = e.t) != null ? r : 0);
				}).slice(0, a);
				return r("compactMap")(e, function(e) {
					var t, n = o("WAWebContactCollection").ContactCollection.get(e.id);
					if (n == null) return null;
					var r = o("WAWebLidMigrationUtils").toLid(n.id);
					return (t = r == null ? void 0 : r.toString()) != null ? t : null;
				});
			});
		},
		getFrequentChatsForSharing: function() {
			var e = o("WAWebChatCollection").ChatCollection.getModelsArray(), t = [];
			for (var n of e) {
				var r = n.id.isGroup(), a = n.id.isRegularUser();
				if (!(!a && !r)) {
					if (a) {
						var i = o("WAWebContactCollection").ContactCollection.get(n.id);
						if (i == null) continue;
					}
					t.push(n);
				}
			}
			var l = t.filter(function(e) {
				return e.pin != null;
			}).sort(function(e, t) {
				var n, r;
				return ((n = t.pin) != null ? n : 0) - ((r = e.pin) != null ? r : 0);
			}), s = t.filter(function(e) {
				return e.pin == null;
			}).sort(function(e, t) {
				var n, r;
				return ((n = t.t) != null ? n : 0) - ((r = e.t) != null ? r : 0);
			}), u = [].concat(l, s), c = [];
			for (var d of u) {
				var m, p, _, f = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(d.id), g = (m = f == null ? void 0 : f.img) != null ? m : null;
				if (d.id.isGroup()) {
					var h, y, C;
					c.push({
						lid: d.id.toString(),
						name: (h = (y = d.formattedTitle) != null ? y : (C = d.groupMetadata) == null ? void 0 : C.subject) != null ? h : "",
						contactType: "group",
						imgUrl: g
					});
					continue;
				}
				var b = o("WAWebContactCollection").ContactCollection.get(d.id);
				if (b != null) {
					var v = o("WAWebLidMigrationUtils").toLid(b.id);
					if (v != null) {
						var S = v.toString(), R = (p = o("WAWebLidMigrationUtils").toPn(d.id)) != null ? p : b.phoneNumber, L = (_ = R != null ? o("WAWebContactCollection").ContactCollection.get(R) : null) != null ? _ : b, E = o("WAWebUserPrefsMeUser").isMeAccount(d.id), k = "personal";
						E ? k = "me" : L.isEnterprise ? k = "enterprise" : L.isSmb ? k = "smb" : L.isBusiness && (k = "business"), c.push({
							lid: S,
							name: o("WAWebFrontendContactGetters").getFormattedUser(L) || b.pushname || b.name || "",
							contactType: k,
							imgUrl: g
						});
					}
				}
			}
			return Promise.resolve(c);
		},
		setContactsNotMyUsernameContacts: function(t) {
			var e = t.usernameContactIdsToRemove, n = { merge: !0 };
			e.forEach(function(e) {
				var t = o("WAWebWidFactory").createUserLidOrThrow(e), r = o("WAWebContactCollection").ContactCollection.get(t), a = (r == null ? void 0 : r.phoneNumber) || o("WAWebLidMigrationUtils").toPn(t), i = {
					id: t,
					type: "out",
					name: void 0,
					shortName: void 0,
					username: r == null ? void 0 : r.username,
					phoneNumber: a,
					isAddressBookContact: 0,
					isContactSyncCompleted: 0,
					syncToAddressbook: !1,
					isUsernameContact: !1
				};
				o("WAWebContactCollection").ContactCollection.add(i, n);
				var l = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(t));
				l && o("WAWebContactCollection").ContactCollection.add(babelHelpers.extends({}, i, { id: l }), n);
			});
		}
	};
	l.ContactBridgeApi = s;
}), 98);
