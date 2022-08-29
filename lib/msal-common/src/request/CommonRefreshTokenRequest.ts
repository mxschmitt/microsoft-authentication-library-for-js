/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { BaseAuthRequest } from "./BaseAuthRequest";
import { StringDict } from "../utils/MsalTypes";
import { CcsCredential } from "../account/CcsCredential";

/**
 * CommonRefreshTokenRequest
 * - scopes                  - Array of scopes the application is requesting access to.
 * - claims                  - A stringified claims request which will be added to all /authorize and /token calls
 * - authority               - URL of the authority, the security token service (STS) from which MSAL will acquire tokens.
 * - correlationId           - Unique GUID set per request to trace a request end-to-end for telemetry purposes.
 * - refreshToken            - A refresh token returned from a previous request to the Identity provider.
 * - resourceRequestMethod   - HTTP Request type used to request data from the resource (i.e. "GET", "POST", etc.).  
 *                              Used for proof-of-possession flows.
 * - resourceRequestUri      - URI that token will be used for. Used for proof-of-possession flows.
 * - forceCache              - Force MSAL to cache a refresh token flow response when there is no account in the cache. 
 *                              Used for migration scenarios.
 */
export type CommonRefreshTokenRequest = BaseAuthRequest & {
    refreshToken: string;
    tokenQueryParameters?: StringDict;
    ccsCredential?: CcsCredential;
    forceCache?: boolean;
};
