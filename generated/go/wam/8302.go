const WamStatusPogImpression = 8302 // channel: regular

type StatusPogImpressionEvent struct {
	Cid string `wam:"cid"` // field 1
	PogIndex int64 `wam:"pog_index"` // field 2
	StatusCategory STATUSCATEGORY `wam:"status_category"` // field 3
	StatusGroupId string `wam:"status_group_id"` // field 4
	StatusPosterHashId string `wam:"status_poster_hash_id"` // field 5
	StatusPosterId string `wam:"status_poster_id"` // field 6
	StatusViewEntrypoint STATUSROWSECTION `wam:"status_view_entrypoint"` // field 7
	TsSurface TSSURFACE `wam:"ts_surface"` // field 8
}