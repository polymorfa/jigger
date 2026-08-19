export const WamGraphqlCatalogRequest = 3206 as const

export interface GraphqlCatalogRequestEvent {
  /** field 1, wire `graphql_catalog_endpoint` */
  graphqlCatalogEndpoint?: GRAPHQLCATALOGENDPOINT
  /** field 2, wire `graphql_request_result` */
  graphqlRequestResult?: GRAPHQLREQUESTRESULT
  /** field 3, wire `graphql_error_code` */
  graphqlErrorCode?: number
  /** field 4, wire `business_jid` */
  businessJid?: string
  /** field 5, wire `business_type` */
  businessType?: BUSINESSTYPE
}