__d("MAWLowLevelApiTypes", ["$InternalEnum"], (function(t, n, r, o, a, i) {
	"use strict";
	var e = {
		EXISTING_GROUP_INVITE: "existing_group_invite",
		MISSING_GROUP: "missing_group"
	}, l = {
		EXPIRED_GROUP_INVITE: "expired_group_invite",
		MISSING_GROUP: "missing_group",
		MISSING_GROUP_INVITE: "missing_group_invite"
	}, s = n("$InternalEnum")({
		Initializing: "initializing",
		Open: "open",
		Closed: "closed",
		Error: "error",
		Upgrading: "upgrading"
	});
	i.WRITE_GROUP_INVITE_ERROR = e, i.GET_GROUP_INVITE_ERROR = l, i.DatabaseState = s;
}), 66);
